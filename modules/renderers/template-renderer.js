
/** 
TemplateRenderer(template)

Import the `TemplateRenderer` constructor from the main module:

```js
import TemplateRenderer from 'https://stephen.band/literal/module.js';
```

The `TemplateRenderer` constructor takes a template element, or the `id` of a 
template element, and creates a renderer of a clone of the template's content.
A renderer manages an asynchronous lifecycle of content renders, updating its 
DOM nodes in response to changing data.

```js
const renderer = new TemplateRenderer('id');
const data     = {};

// Cue data for render then add it to the DOM
renderer
.render(data)
.then(() => document.body.append(renderer.content));
```
**/

import get         from '../../../fn/modules/get.js';
import getPath     from '../../../fn/modules/get-path.js';
import nothing     from '../../../fn/modules/nothing.js';
import identify    from '../../../dom/modules/identify.js';
import isTextNode  from '../../../dom/modules/is-text-node.js';
import compileNode from '../compile-node.js';
import { Observer, getTarget } from '../../../fn/observer/observer.js';
import observe     from '../../../fn/observer/observe.js';
import stats, { meta } from './analytics.js';
import Renderer, { removeNodes } from './renderer.js';

const assign = Object.assign;
const cache  = {};


/*
TemplateRenderer
Descendant paths are stored in the form `"1.12.3.class"`, enabling fast 
cloning of template instances without retraversing their DOMs looking for 
literal attributes and text.
*/

function child(parent, index) {
    return /^[a-zA-Z]/.test(index) ?
        parent :
        parent.childNodes[index] ;
}

function getDescendant(path, root) {
    // If path is empty return root
    const p = path && path.split(/\./);
    return path ?
        p.reduce(child, root) :
        root ;
}

function isMarkerNode(node) {
    // Markers should be spaces-only else we risk unrendered content being 
    // inserted into the DOM. If it's not a text node, it's not a marker 
    // node because it could contain something that contains unrendered code.
    if (!isTextNode(node)) { 
        return false;
    }

    const text  = node.nodeValue;
    const space = /^\s*/.exec(text);

    // If text is more than just space return false
    return space[0].length === text.length;
}

function prepareContent(content) {
    // Due to the way HTML is usually written the vast majority of templates
    // start and end with a text node, usually containing some white space
    // and new lines. The renderer uses these as delimiters for the start and
    // end of templated content – where it can. If the template does NOT start 
    // or end with a text node, we insert text nodes where needed.
    const first = content.childNodes[0];
    const last  = content.childNodes[content.childNodes.length - 1];

    if (!isMarkerNode(first)) {
        content.prepend(document.createTextNode(''));
    }

    if (!isMarkerNode(last)) {
        content.append(document.createTextNode(''));
    }
}

function newRenderer(renderer) {
    // `this` is the parent renderer of the new renderer
    const node    = getDescendant(renderer.path, this.content);
    const element = isTextNode(node) ? node.parentNode : node ;
    return new renderer.constructor(node, renderer, element);
}

export default function TemplateRenderer(template) {
    // TemplateRenderer may be called with a string id or a template element
    const id = typeof template === 'string' ?
        template :
        identify(template) ;

    this.id          = ++meta.count;
    this.observables = nothing;

    // If the template is already compiled, clone the compiled contents to 
    // this renderer and bind them to a new fragment
    if (cache[id]) {
        const template = cache[id].template;
        this.template  = template;
        this.content   = template.content ? template.content.cloneNode(true) : template.cloneNode(true) ;
        this.first     = this.content.childNodes[0];
        this.last      = this.content.childNodes[this.content.childNodes.length - 1];
        this.contents = cache[id].contents.map(newRenderer, this);
        ++stats['#' + id].template;
        ++stats.Totals.template;
        return;
    }

    template = typeof template === 'string' ?
        document.getElementById(template[0] === '#' ? template.slice(1) : template) :
        template ;

    if (window.DEBUG) {
        if (!template) {
            throw new Error('Template id="' + id + '" not found in document');
        }
        /*
        if (!template.content) {
            throw new Error('Element id="' + id + '" is not a <template> (no content fragment)');
        }
        */
    }

    /** 
    .content

    A fragment that initially contains the renderer's DOM nodes. On creation of
    a renderer they are in an unrendered state. They are guaranteed to be in a 
    rendered state on resolution of the first `.render()` promise. 
    
    The fragment may be inserted into the DOM at any time, at which point it 
    will no longer contain the renderer's DOM nodes, however the renderer 
    continues to manage these nodes wherever they end up.
    **/
    template.content && prepareContent(template.content);

    this.template  = template;
    this.content   = template.content ? template.content.cloneNode(true) : template.cloneNode(true) ;
    this.first     = this.content.childNodes[0];
    this.last      = this.content.childNodes[this.content.childNodes.length - 1];

    // Analytics (must be declared before contents)
    stats['#' + id] = { template: 1 };
    ++stats.Totals.template;

    // compileNode(contents, options, content, template)
    // The options object contains information for renderer objects. It is 
    // mutated as it is passed to each renderer (specifically path, name, 
    // source properties). We can do this because renderer construction is 
    // synchronous within a template.
    this.contents = compileNode([], { template: id, path: '' }, this.content, template.content || template);

    cache[id] = this;
}

function stop(object) {
    object.stop();
}

/**
.render(data)
Cues `data` to be rendered in the next render batch. Returns a promise that
resolves when the batch is finished rendering.

The `data` object is observed for mutations, and the renderer updates it 
content until either a new data object is cued or the renderer is stopped.
**/

assign(TemplateRenderer.prototype, {
    /**
    .render(data)
    Cues `data` to be rendered in the next render batch. Returns a promise that
    resolves when the batch is finished rendering.
    
    The `data` object is observed for mutations, and the renderer updates it 
    content until either a new data object is cued or the renderer is stopped.
    **/

    render: function(object) {
        if (this.observables.length) {
            console.log('#' + this.template.id + ' stopping observing data\n.' + this.observables.map(get('path')).join('\n.'));
        }

        this.observables.forEach(stop);
        this.observables = nothing;

        const data = object ? getTarget(object) : null ;

        // Deduplicate. Not sure this is entirely necessary.
        if (data === this.data) {
            return Promise.reject('Attempt to render with same object as last render');
        }

        this.data = data;
        return Renderer.prototype.render.apply(this, arguments);
    },

    update: function(object) {
        //console.log(this.constructor.name + '#' + this.id + '.update()');

        if (!object) {
            // Remove all but the first node to the renderer's content fragment
            const nodes = [];
            let node = this.first;

            while (node !== this.last) {
                node = node.nextSibling;
                nodes.push(node);
            }

            this.content.append.apply(this.content, nodes);
            return nodes.length;
        }
    
        const data      = getTarget(object);
        const observer  = Observer(data);
        const contents = this.contents;
        var count = 0;

        // This has to happen synchronously in order to collect gets...
        contents.forEach((renderer) => count += renderer.update(observer, data));

        // If this.first is not in the content fragment, it must be in the 
        // parent DOM being used as a marker. It's time for its freshly rendered 
        // brethren to join it.
        if (this.content.firstChild && this.first !== this.content.firstChild) {
            this.first.after(this.content);
            ++count;
        }

        this.observables = observer ?
            contents.flatMap((renderer) => 
                renderer.paths.map((path) => 
                    // Don't getPath() of the observer here, that really makes 
                    // the machine think too hard
                    assign(observe(path, data, getPath(path, data)).each((value) =>
                        // Next renders are cued which batches them
                        renderer.render(observer)
                    ), { path })
                )
            ) :
            nothing ;

        console.log('#' + this.template.id + ' observing data\n.' + this.observables.map(get('path')).join('\n.'));

        return count;
    },

    connect: Renderer.prototype.connect,

    /** 
    .stop()
    Stops the renderer and all descendent contents. All observers are stopped,
    handlers registered with `.done()` are called, and no more data can be cued 
    for rendering. Rendered content is left in the DOM, but it is now static.
    **/

    stop: function() {
        // We must not empty .contents, they are compiled and cached and may 
        // be cloned. We can stop listening to sets and make .render() a
        // noop though.
        //this.contents.forEach(stop);
        this.observables.forEach(stop);
        this.observables = nothing;
        return Renderer.prototype.stop.apply(this, arguments);
    },


    /** 
    .remove()
    Removes rendered content from the DOM.
    **/
    remove: function() {
        return removeNodes(this.first, this.last);
    },

    /** 
    .replaceWith()
    Removes rendered content from the DOM and inserts arguments in its place.
    **/
    replaceWith: function() {
        this.first.before.apply(this.first, arguments);
        return this.remove();
    }
});
