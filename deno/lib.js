
import * as path from "https://deno.land/std@0.98.0/path/mod.ts";

// Absolute path to module
const moduleAbs = path.dirname(path.fromFileUrl(import.meta.url));

import exec                from '../../fn/modules/exec.js';
import get                 from '../../fn/modules/get.js';
import id                  from '../../fn/modules/id.js';
import overload            from '../../fn/modules/overload.js';
import toType              from '../../fn/modules/to-type.js';

import { addDate }         from '../../fn/modules/date.js';
import { addTime }         from '../../fn/modules/time.js';

export { default as by }      from '../../fn/modules/by.js';
export { default as equals }  from '../../fn/modules/equals.js';
export { default as matches } from '../../fn/modules/matches.js';
export { default as get }     from '../../fn/modules/get-path.js';
export { default as id }      from '../../fn/modules/id.js';
export { default as px, em, rem } from '../modules/parse-length.js';

export { default as exec }    from '../../fn/modules/exec.js';
export { default as slugify } from '../../fn/modules/slugify.js';
//export { default as Pipe }    from '../modules/pipe.js';
export { default as comments } from './comments.js';

import read from './read.js';
import { rewriteURL, rewriteURLs } from './url.js';

import { red, yellow }     from './log.js';

export const entries = Object.entries;
export const keys    = Object.keys;
export const values  = Object.values;

import Literal from './literal.js';

const toExtension  = exec(/\.[\w\d.]+$/, get(0));


/**
imports(url)

Imports all exports of a JS module or JSON file.
**/

// TextDecoder decodes the Uint8Array to unicode text
const decoder = new TextDecoder('utf-8');

export const imports = overload((source, target, url) => toExtension(url), {
    '.js': (source, target, url) => {
        // Current directory absolute
        const currentAbs  = Deno.cwd() + '/';
        // Source dir relative to current working directory
        const sourcedir   = path.dirname(source);
        // Resource path relative to current working directory
        const resource    = path.join(sourcedir, url);
        // Resource path absolute
        const resourceAbs = path.join(currentAbs, resource);
        // Resource path relative to module
        const resourceRel = path.relative(moduleAbs, resourceAbs);

        return import(resourceRel);
    },

    '.json': (source, target, url) => {
        // Current directory absolute
        const currentAbs  = Deno.cwd() + '/';
        // Source dir relative to current working directory
        const sourcedir   = path.dirname(source);
        // Resource path relative to current working directory
        const resource    = path.join(sourcedir, url);
        // Resource path absolute
        //const resourceAbs = path.join(currentAbs, resource);
        // Resource path relative to module
        //const resourceRel = path.relative(moduleAbs, resourceAbs);

//console.log('RRRR', currentAbs);
//console.log('RRRR', sourcedir);
//console.log('RRRR', resource);
//console.log('RRRR', resourceAbs);
//console.log('RRRR', resourceRel);

        return Deno.readFile(resource)
        .then((array) => decoder.decode(array))
        .then(JSON.parse);
    },

    'undefined': (source, target, url) => {
        throw new TypeError('File extension required by imports("' + url + '")');
    },

    default: (source, target, url) => {
        throw new TypeError('File extension ".'
            + toExtension(url) 
            + '" not supported by imports("' + url + '")'
        );
    }
});


/**
include(url, data)
Includes a template from `url`, rendering it with properties of `data` 
as in-scope variables.
**/

const resolveScope = overload(toType, {
    'string': (url, source, target) => {
        return imports(source, target, url);
    },

    'object': (object) => Promise.resolve(object),

    'undefined': () => Promise.resolve(),

    default: (object) => {
        throw new Error('include(url, object) cannot be called with object of type ' + toType(object));
    }
});

function extractBody(html) {
    const pre = /<body[^>]*>/.exec(html);
    if (!pre) { return html; }
    const post = /<\/body\s*>/.exec(html);    
    return html.slice(pre.index + pre[0].length, post.index);
}

export function getAbsoluteFile(source, src) {
    const root     = path.parse(source);
    const dir      = root.dir;
    const relative = src.replace(/#.*$/, '');
//console.log(root, dir, relative);
    return path.join(dir, relative);
}

const renderInclude = overload((source, target, file) => toExtension(file), {
    '.html.literal': (source, target, file, scope) => resolveScope(scope, source, target)
        .then((data) => {
            // Get data keys so that we can reference them as params 
            // inside the template
            const params = data && Object.keys(data).join(',') || '';
            return read(file)
            .then(extractBody)
            .then((template) => Literal(params, template, file))
            .then((render) => render(data, source));
        }),

    '.literal': (source, target, file, scope) => resolveScope(scope, source, target)
        .then((data) => {
            // Get data keys so that we can reference them as params 
            // inside the template
            const params = data && Object.keys(data).join(',') || '';
            return read(file)
            .then((template) => Literal(params, template, file))
            .then((render) => render(data, source));
        }),

    '.html': (source, target, file) => read(file)
        .then(extractBody)
        .then((html) => rewriteURLs(file, source, html)),

    '.css': (source, target, file) => read(file)
        .then((text) => rewriteURLs(file, source, text)),

    '.svg': (source, target, file) => read(file)
        .then((text) => rewriteURLs(file, source, text)),

    // All other files are processed as straight text includes
    'default': (source, target, file) => read(file)
});

export function include(source, target, url, scope) {
    // Get absolute OS file path
    const file = getAbsoluteFile(source, url);
    
    /*
    console.log('====== include(url, scope) ======',
        '\ntarget: ' + target,
        '\nsource: ' + source,
        '\nurl:    ' + url,
        '\nfile:   ' + file
    );
    */

    return renderInclude(source, target, file, scope);
}


/**
add(number|date|time)

Adds `n` to value. Behaviour is overloaded to accept various types of 'n'.
Where `n` is a number, it is summed with value. So to add 1 to any value:

```html
${ pipe(add(1), data.number) }
```

Where 'n' is a duration string in date-like format, value is expected to be a
date and is advanced by the duration. So to advance a date by 18 months:

```html
${ pipe(add('0000-18-00'), data.date) }
```

Where 'n' is a duration string in time-like format, value is expected to be a
time and is advanced by the duration. So to put a time back by 1 hour and 20
seconds:

```html
${ pipe(add('-01:00:20'), data.time) }
```
**/

function toAddType(n) {
    const type = typeof n;
    return type === 'string' ?
        /^\d\d\d\d(?:-|$)/.test(n) ? 'date' :
        /^\d\d(?::|$)/.test(n) ? 'time' :
        'string' :
    type;
}

export const add = overload(toAddType, {
    'date': addDate,
    'time': addTime,
    'string': (a) => (b) => b + a,
    'number': (a) => (b) => b + a,
    'default': function(n) {
        throw new Error('add(value) does not accept values of type ' + typeof n);
    }
});

