// Literal 0.2.1 (Built 2021-06-14 01:31)


function w(e){return e}function f(e,t){return function(){let r=e.apply(this,arguments),o=t[r]||t.default;if(!o)throw new Error('overload() no handler for "'+r+'"');return o.apply(this,arguments)}}function j(e){return typeof e}var Ne=!1;function _(e){var t=new Map;return function(r){if(Ne&&r===void 0)throw new Error("Fn: cache() called with undefined.");if(Ne&&arguments.length>1)throw new Error("Fn: cache() called with "+arguments.length+" arguments. Accepts exactly 1.");if(t.has(r))return t.get(r);var o=e(r);return t.set(r,o),o}}var xt=!1,jt=Array.prototype;function vt(e,t){return typeof e=="function"?e.apply(null,t):e}function H(e,t,n){n=n||e.length;var r=n===1?t?e:_(e):_(function(o){return H(function(){var i=[o];return i.push.apply(i,arguments),e.apply(null,i)},t,n-1)});return function o(i){return arguments.length===0?o:arguments.length===1?r(i):arguments.length>=n?e.apply(null,arguments):vt(r(i),jt.slice.call(arguments,1))}}if(xt){let e=H,t=function(){var r=function(){};try{Object.defineProperty(r,"length",{value:2})}catch(o){return!1}return r.length===2}(),n=function(o,i,s,c){return c.toString=function(){return/function\s*[\w\d]*\s*\([,\w\d\s]*\)/.exec(s.toString())+" { ["+o+"] }"},t&&Object.defineProperty(c,"length",{value:i}),c};H=function(o,i,s){return s=s||o.length,n("curried",s,o,e(o,i,s))}}var a=H;function d(){}var Et=f(w,{is:d,tag:d,html:function(e,t,n){t.innerHTML=n},text:function(e,t,n){t.textContent=n},children:function(e,t,n){t.innerHTML="",n.forEach(r=>{t.appendChild(r)})},points:D,cx:D,cy:D,r:D,preserveAspectRatio:D,viewBox:D,default:function(e,t,n){e in t?t[e]=n:t.setAttribute(e,n)}});function D(e,t,n){t.setAttribute(e,n)}function Tt(e,t){for(var n=Object.keys(t),r=n.length;r--;)Et(n[r],e,t[n[r]]);return e}var U=a(Tt,!0);var Nt="http://www.w3.org/2000/svg",Ae=document.createElement("div");function At(e,t){var n=document.createElement(e);return t&&(n.innerHTML=t),n}function g(e,t){var n=document.createElementNS(Nt,e);return t&&(n.innerHTML=t),n}var C=f(w,{comment:function(e,t){return document.createComment(t||"")},fragment:function(e,t){var n=document.createDocumentFragment();if(t){Ae.innerHTML=t;let r=Ae.childNodes;for(;r[0];)n.appendChild(r[0])}return n},text:function(e,t){return document.createTextNode(t||"")},circle:g,ellipse:g,g,glyph:g,image:g,line:g,rect:g,use:g,path:g,pattern:g,polygon:g,polyline:g,svg:g,default:At});function Ot(){return Array.prototype.map.call(arguments,j).join(" ")}function Oe(e){if(typeof e!="string")throw new Error("create(object, content) object must have string property .tag or .tagName")}var De=f(Ot,{string:C,"string undefined":C,"string string":C,"string object":function(e,t){return U(C(e,""),t)},"object string":function(e,t){let n=e.tag||e.tagName;return Oe(n),U(C(n,t),e)},"object object":function(e,t){let n=e.tag||e.tagName;return Oe(n),U(U(C(n,""),e),t)},default:function(){throw new Error('create(tag, content) does not accept argument types "'+Array.prototype.map.call(arguments,j).join(" ")+'"')}});function oe(e,t,n){let r;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(r=n,n=r.input.slice(n.index+n[0].length+(n.consumed||0)));let o=e.exec(n);if(!o)return;let i=t(o);return r&&(r.consumed=(r.consumed||0)+o.index+o[0].length+(o.consumed||0)),i}var _r=a(oe,!0);function Dt(e,t,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function Ct(e,t,n){let r=-1;for(;++r<n.length;)t=n[r]!==void 0&&e[r]?e[r](t,n):t;return e.done?e.done(t,n):e.close?e.close(t,n):t}function Rt(e,t,n,r){let o=oe(e,i=>Ct(t,n,i),r);return o===void 0?t.catch?t.catch(n,r):Dt(e,t,r):o}var Ce=a(Rt,!0);var Re=window.DEBUG===!0,p=Symbol("internals"),N=Symbol("shadow");var ke=Object.defineProperties,kt={a:HTMLAnchorElement,div:HTMLDivElement,p:HTMLParagraphElement,br:HTMLBRElement,img:HTMLImageElement,ol:HTMLOListElement,ul:HTMLUListElement,template:HTMLTemplateElement},Pt={type:{value:"text"},name:{set:function(e){return this.setAttribute("name",e)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[p].form}},labels:{get:function(){return this[p].labels}},validity:{get:function(){return this[p].validity}},validationMessage:{get:function(){return this[p].validationMessage}},willValidate:{get:function(){return this[p].willValidate}},checkValidity:{value:function(){return this[p].checkValidity()}},reportValidity:{value:function(){return this[p].reportValidity()}}},St={},Pe={once:!0},Bt=0,Se=!1;function Lt(e){return kt[e]||window["HTML"+e[0].toUpperCase()+e.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+e+'"')})()}var qt=Ce(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(e,t)=>({name:t[1]}),2:(e,t)=>({name:t[3],tag:t[2]}),catch:function(e,t){throw new Error(`Element name must be of the form 'element-name' or 'tag is="element-name"' (`+t+")")}},null);function Gt(e,t){if(e.hasOwnProperty(t)){let n=e[t];delete e[t],e[t]=n}return e}function Ut(e,t){e._initialLoad=!0;let n=e.attachShadow({mode:t.mode||"closed",delegatesFocus:t.focusable||!1});return e[N]=n,n}function Vt(e){if(e.attachInternals)return e.attachInternals();let t=De("input",{type:"hidden",name:e.name});return t.setFormValue=function(n){this.value=n},t}function Mt(e){e._initialAttributes={},e._n=0}function _t(e,t,n){let r=e._initialAttributes;for(;e._n<t.length&&r[t[e._n]]!==void 0;)n[t[e._n]].call(e,r[t[e._n]]),++e._n}function Be(e,t,n){if(!e._initialAttributes)return;let r=e._initialAttributes;for(;e._n<t.length;)r[t[e._n]]!==void 0&&n[t[e._n]]&&n[t[e._n]].call(e,r[t[e._n]]),++e._n;delete e._initialAttributes,delete e._n}function Ht(e){return!!e.attribute}function Ft(e){return e.set||e.get||e.hasOwnProperty("value")}function $t(e,t){return Ht(t[1])&&(e.attributes[t[0]]=t[1].attribute),Ft(t[1])&&(e.properties[t[0]]=t[1]),e}function V(e,t){if(typeof t=="string")throw new Error("we dont support element(name, tag, options) anymore.");let{name:n,tag:r}=qt(e),o=typeof r=="string"?Lt(r):HTMLElement,{attributes:i,properties:s}=t.properties?Object.entries(t.properties).reduce($t,{attributes:{},properties:{}}):St;function c(){let u=Reflect.construct(o,arguments,c),x=t.construct&&t.construct.length>Bt?Ut(u,t):void 0;return c.formAssociated&&(u[p]=Vt(u)),r&&(Se=!0),t.construct&&t.construct.call(u,x,u[p]),i&&(Mt(u),Promise.resolve(1).then(function(){Be(u,c.observedAttributes,i)})),s&&Object.keys(s).reduce(Gt,u),u}let m=c.prototype=Object.create(o.prototype,s);return s&&s.value&&(c.formAssociated=!0,ke(m,Pt),(t.enable||t.disable)&&(m.formDisabledCallback=function(u){return u?t.disable&&t.disable.call(this,this[N],this[p]):t.enable&&t.enable.call(this,this[N],this[p])}),t.reset&&(m.formResetCallback=function(){return t.reset.call(this,this[N],this[p])}),t.restore&&(m.formStateRestoreCallback=function(){return t.restore.call(this,this[N],this[p])})),i&&(c.observedAttributes=Object.keys(i),m.attributeChangedCallback=function(u,x,T){if(!this._initialAttributes)return i[u].call(this,T);this._initialAttributes[u]=T,_t(this,c.observedAttributes,i)}),m.connectedCallback=function(){let u=this,x=u[N],T=u[p];if(u._initialAttributes&&Be(u,c.observedAttributes,i),u[p]&&!u.attachInternals&&u.appendChild(u[p]),u._initialLoad){let G=x.querySelectorAll('link[rel="stylesheet"]');if(G.length){let bt=0,ne=G.length,Te=function(jr){++bt>=G.length&&(delete u._initialLoad,t.load&&t.load.call(u,x))};for(;ne--;)G[ne].addEventListener("load",Te,Pe),G[ne].addEventListener("error",function(re){console.log("Failed to load stylesheet",re.target.href),Te(re)},Pe);t.connect&&t.connect.call(this,x,T)}else t.connect&&t.connect.call(this,x,T),t.load&&t.load.call(this,x,T)}else t.connect&&t.connect.call(this,x,T)},t.disconnect&&(m.disconnectedCallback=function(){return t.disconnect.call(this,this[N],this[p])}),Re&&console.log("%cElement","color: #3a8ab0; font-weight: 600;","<"+(r?r+" is="+n+"":n)+">"),window.customElements.define(n,c,r&&{extends:r}),r&&!Se&&(Re&&console.warn("Browser does not support customised built-in elements. Attempting to (partially) polyfill those elements already in the DOM, with some caveats."),document.querySelectorAll('[is="'+n+'"]').forEach(u=>{ke(u,s),t.construct.apply(u)})),c}var It={done:!0},Wt={next:()=>It},A=Object.freeze({shift:d,push:d,join:function(){return""},forEach:d,map:function(){return this},filter:function(){return this},indexOf:function(){return-1},start:d,stop:d,length:0,[Symbol.iterator]:()=>Wt});function ie(e){var t=e.id;if(!t){do t=Math.ceil(Math.random()*1e5);while(document.getElementById(t));e.id=t}return t}function R(e){return e.nodeType===3}var Xt={1:"element",3:"text",8:"comment",9:"document",10:"doctype",11:"fragment"};function Le(e){return Xt[e.nodeType]}function Jt(e,t,n){let r=e(t),o=e(n);return o===r?0:r>o?1:-1}var qe=a(Jt,!0);function Ge(e,t){if(e===t)return!0;if(e===null||t===null||typeof e!="object"||typeof t!="object")return!1;let n=Object.keys(e),r=Object.keys(t),o=n.length;for(;o--;){if(e[n[o]]===void 0){if(t[n[o]]!==void 0)return!1}else if(!t.hasOwnProperty(n[o])||!Ge(e[n[o]],t[n[o]]))return!1;let i=r.indexOf(n[o]);i>-1&&r.splice(i,1)}for(o=r.length;o--;)if(t[r[o]]===void 0){if(e[r[o]]!==void 0)return!1}else return!1;return!0}var Ue=a(Ge,!0);function zt(e,t){let n;for(n in e)if(e[n]!==t[n])return!1;return!0}var Ve=a(zt,!0);var Me=/\[?([-\w]+)(?:=(['"])([^\2]+)\2|(true|false)|((?:\d*\.)?\d+))?\]?\.?/g;function Qt(e,t,n){for(var r=n.length,o=-1;++o<r;)if(n[o][e]===t)return n[o]}function Yt(e,t,n,r){var o=e.exec(t);if(!o)throw new Error('Fn.getPath(path, object): invalid path "'+t+'"');var i=o[1],s=o[3]?Qt(i,o[2]?o[3]:o[4]?Boolean(o[4]):parseFloat(o[5]),n):n[i];return r(e,t,s)}function _e(e,t,n){return e.lastIndex===t.length?n:n&&typeof n=="object"?Yt(e,t,n,_e):void 0}function Zt(e,t){return Me.lastIndex=0,_e(Me,e,t)}var He=a(Zt,!0);function se(e){if(typeof e=="string")return e.trim().toLowerCase().replace(/^[\W_]+/,"").replace(/[\W_]+$/,"").replace(/[\W_]+/g,"-")}var Kt=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function en(e,t){if(typeof t=="number")return t;var n=Kt.exec(t);if(!n||!e[n[2]||""]){if(!e.catch)throw new Error('Cannot parse value "'+t+'" with provided units '+Object.keys(e).join(", "));return n?e.catch(parseFloat(n[1]),n[2]):e.catch(parseFloat(t))}return e[n[2]||""](parseFloat(n[1]))}var Fe=a(en);var ue=f(j,{number:w,string:Fe({px:e=>e,em:e=>16*e,rem:e=>16*e,catch:(e,t)=>{if(Number.isNaN(e))throw new Error("Invalid CSS length NaN");if(t)throw new Error("Invalid CSS length value: "+e+" unit: "+t);return e}})}),$e=ue;function Ie(e){return ue(e)/16}function We(e){return ue(e)/16}var tn={by:qe,entries:Object.entries,em:Ie,equals:Ue,get:He,keys:Object.keys,matches:Ve,px:$e,rem:We,slugify:se,values:Object.values},y=tn;function nn(e,t){return t[e]}var ce=a(nn,!0);function rn(e){let t=e[0];return/^\w/.test(t)}function F(e={},t,n,r){let o=Object.entries(e).filter(rn),i=o.map(ce(0)),s=o.map(ce(1));return r?new Function(...i,"return async ("+t+") => {"+(n||"")+"}").apply(r,s):new Function(...i,"return async function("+t+"){"+(n||"")+"}").apply(null,s)}var on=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),sn={green:"#d8cd17",yellow:"#eac60c",orange:"#ffa000",red:"#ff003a"},O=on?function(t,n,r="#d8cd17"){console.log("%cLiteral %c"+t+" %c"+n,"color: #81868f; font-weight: 600;","color: "+(sn[r]||r)+"; font-weight: 300;","color: #81868f; font-weight: 300;")}:d;var un=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),cn=["render","NaN","Infinity","undefined","do","if","in","for","let","new","try","var","case","else","enum","eval","null","this","true","void","with","await","break","catch","class","const","false","super","throw","while","yield","delete","export","import","public","return","static","switch","typeof","default","extends","finally","package","private","continue","debugger","function","arguments","interface","protected","implements","instanceof"],Xe={Unexpected:"• Non-template backticks must be escaped: \\`\n• ${} accepts any valid JS expression\n"},ae="  ";function an(e,t,n){O("compile",e+" { "+n+" }"),n.split(/\s*,\s*/).forEach(r=>{if(cn.includes(r))throw new SyntaxError("Reserved word "+r+" cannot be used as template variable");t[r]&&O("warning","template variable "+r+" overrides scope "+typeof t[r]+" "+(typeof t[r]=="function"?r+"()":r),"red")})}function ln(e,t,n){console.log(""),console.log(t.slice(0,1e3)+(t.length>1e3?`

...
`:`
`)),console.log(n.constructor.name+":",n.message,"parsing",'"'+(e.length<60?e:e.slice(0,16)+" ... "+e.slice(-8))+'"');let r=n.message.slice(0,10);Xe[r]&&console.log(`
Hints
`+Xe[r]),console.log(""),console.log("")}var $={};function fn(e){let t=e[0];return/^\w/.test(t)}function dn(e){return e.split(/\s*[,\s]\s*/).filter(fn).sort().join(", ")}function h(e,t,n,r,o="data"){if(typeof n!="string")throw new Error("Template is not a string");let i=r||n;if($[i])return $[i];let s=t&&dn(t),c=`
`+(r?ae+"// Render "+r+`
`:"")+(s?ae+"const { "+s+" } = "+o+`;
`:"")+ae+"return this.resolve`"+n+"`;\n";if(un)try{an(r||(i.trim().length>45?"`"+i.trim().slice(0,33).replace(/ *\n */g," ")+" ... "+i.trim().slice(-8).replace(/ *\n */g," ")+"`":"`"+i.trim().replace(/ *\n */g," ")+"`"),e,"data"+(s?", "+s:""));let m=F(e,"data = {}",c);return $[i]=function(){return O("render ",r||(i.trim().length>45?"`"+i.trim().slice(0,33).replace(/ *\n */g," ")+" ... "+i.trim().slice(-8).replace(/ *\n */g," ")+"`":"`"+i.trim().replace(/ *\n */g," ")+"`"),"orange"),m.apply(this,arguments)}}catch(m){throw ln(i,c,m),m}return $[i]=F(e,"data = {}",c)}var pn=/\s*(\([\w,\s]*\))/,mn=/function(?:\s+\w+)?\s*(\([\w,\s]*\))/,k=f(j,{boolean:e=>e+"",function:e=>e.prototype?(e.name||"function")+(mn.exec(e.toString())||[])[1]:(pn.exec(e.toString())||[])[1]+" ⇒ ()",number:e=>Number.isNaN(e)?"":Number.isFinite(e)?e+"":e<0?"-∞":"∞",string:w,symbol:e=>e.toString(),undefined:e=>"",object:f(e=>e&&e.constructor.name,{RegExp:e=>e.source,null:()=>"",default:e=>JSON.stringify(e,null,2)}),default:JSON.stringify});var hn=Object.assign,gn=e=>e&&typeof e=="object"&&e.then,M=e=>e.reduce((t,n)=>n===""||n===void 0?t:t+n);function yn(e,t,n){return e&&typeof e=="object"?e.then?e.then(r=>t===""?r:t+r):e.find?e.find(gn)?Promise.all(e).then(r=>t===""?M(r.map(n)):t+M(r.map(n))):t===""?M(e.map(n)):t+M(e.map(n)):t===""?n(e):t+n(e):t===""?n(e):t+n(e)}function le(e){let t=e[0];return M(t.map((n,r)=>r<=e.length?yn(e[r+1],n,k):n===""?void 0:n))}function l(e,t,n,r,o){this.consts=e,this.source=t,this.node=n,this.path=r,this.name=o}hn(l.prototype,{resolve:function(){return Promise.all(arguments).then(le).then(this.update)}});var wn=Object.assign;function bn(e,t,n){return n===e.getAttribute(t)?0:(e.setAttribute(t,n),1)}function I(e,t,n,r,o){l.apply(this,arguments),this.render=h(y,e,t,null,"arguments[1]"),this.update=i=>bn(n,o,i)}wn(I.prototype,l.prototype);var xn=Object.assign;function jn(e,t,n){if(t in e){if(!!n===e[t])return 0;e[t]=n}else n?e.setAttribute(t,t):e.removeAttribute(t);return 1}function W(e,t,n,r,o){l.apply(this,arguments),this.render=h(y,e,t,null,"arguments[1]"),this.update=i=>jn(n,o,i),n.removeAttribute(o)}xn(W.prototype,l.prototype);function fe(e){return!!e||e!=null&&!Number.isNaN(e)}var de=Object.assign,vn=window.CustomEvent,pe={bubbles:!0,cancelable:!0};function me(e,t){let n;typeof e=="object"&&(n=de({},pe,e),e=n.type,delete n.type),t&&t.detail&&(n?n.detail=t.detail:n=de({detail:t.detail},pe));var r=new vn(e,n||pe);return t&&(delete t.detail,de(r,t)),r}function En(e,t){let n;typeof e=="object"&&(n=e,e=n.type,delete n.type);var r=me(e,n);return t.dispatchEvent(r),t}var X=a(En,!0);var P={changeEvent:"dom-update"};var Tn=Object.assign,Nn=/^\s*$/;function An(e){return!Nn.test(e)}function On(e){if(e.length!==2||e[0].find(An))throw new Error("A checked attribute may contain only one ${ tag }, optionally surrounded by white space");return e[1]}function Dn(e,t){let n=fe(e.getAttribute("value"))?t+""===e.value:!!t;return n===e.checked?0:(e.checked=n,P.changeEvent&&X(P.changeEvent,e),1)}function J(e,t,n,r,o="checked"){l.apply(this,arguments),this.render=h(y,e,t,null,"arguments[1]"),this.update=i=>Dn(n,i),n.checked=!1}Tn(J.prototype,l.prototype,{resolve:function(){return Promise.all(arguments).then(On).then(this.update)}});function Cn(e,t){if(t.slice)return t.slice(e);if(t.rest)return t.rest(e);for(var n=[],r=t.length-e;r--;)n[r]=t[r+e];return n}var Je=a(Cn,!0);function z(e){return function(n){var r=e[n]||e.default;return r&&r.apply(this,Je(1,arguments))}}var S=Object.assign,B={headers:function(e){return{}},body:w,onresponse:function(e){if(e.redirected){window.location=e.url;return}return e}},Rn=z({"application/x-www-form-urlencoded":function(e){return S(e,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})},"application/json":function(e){return S(e,{"Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"})},"multipart/form-data":function(e){return S(e,{"Content-Type":"multipart/form-data","X-Requested-With":"XMLHttpRequest"})},"audio/wav":function(e){return S(e,{"Content-Type":"audio/wav","X-Requested-With":"XMLHttpRequest"})},default:function(e){return S(e,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})}}),Sn=z({"application/json":function(e){return e.get?kn(e):JSON.stringify(e)},"application/x-www-form-urlencoded":function(e){return e.get?ze(e):Qe(e)},"multipart/form-data":function(e){return e.get?e:Pn(e)}});function kn(e){return JSON.stringify(Array.from(e.entries()).reduce(function(t,n){return t[n[0]]=n[1],t},{}))}function ze(e){return new URLSearchParams(e).toString()}function Qe(e){return Object.keys(e).reduce((t,n)=>(t.append(n,e[n]),t),new URLSearchParams)}function Pn(e){throw new Error("TODO: dataToFormData(data)")}function Bn(e,t){return t instanceof FormData?e+"?"+ze(t):e+"?"+Qe(t)}function Ln(e,t,n,r){let o=typeof n=="string"?n:n&&n["Content-Type"]||"application/json",i=Rn(o,S(B.headers&&t?B.headers(t):{},typeof n=="string"?A:n)),s={method:e,headers:i,credentials:"same-origin",signal:r&&r.signal};return e!=="GET"&&(s.body=Sn(o,B.body?B.body(t):t)),s}var Un={"text/html":Gn,"application/json":qn,"multipart/form-data":Ye,"application/x-www-form-urlencoded":Ye,audio:he,"audio/wav":he,"audio/m4a":he};function he(e){return e.blob()}function qn(e){return e.json().catch(t=>{throw new Error("Cannot parse JSON "+e.url+". "+t.message+"")})}function Ye(e){return e.formData()}function Gn(e){return e.text()}function Vn(e){if(B.onresponse&&(e=B.onresponse(e)),!e.ok)throw new Error(e.statusText+"");let t=e.headers.get("Content-Type").replace(/\;.*$/,"");return Un[t](e)}function Ze(e="GET",t,n,r="application/json"){(t.startsWith("application/")||t.startsWith("multipart/")||t.startsWith("text/")||t.startsWith("audio/"))&&(console.trace("request(method, url, data, contenttype) parameter order has changed. You passed (method, contenttype, url, data)."),t=arguments[1],n=arguments[2],r=arguments[3]),e=e.toUpperCase(),e==="GET"&&n&&(t=Bn(t,n));let o=Ln(e,n,r,arguments[4]);return fetch(t,o).then(Vn)}function Ke(e){return Ze("GET",e)}var gi=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),Mn=/\.([\w-]+)(?:#|\?|$)/,_n=/#(\w+)(?:\(([^\)]*)\))?$/,Hn=["","default",""],Q=f(e=>Mn.exec(e)[1],{js:e=>{let[t,n,r]=_n.exec(e)||Hn,o=e[0]==="."?new URL(e,window.location):e;return r?import(o).then(i=>{if(typeof i[n]!="function")throw new Error("Export "+o+" is not a function");return new i[n](...JSON.parse("["+r.replace(/'/g,'"')+"]"))}):import(o).then(i=>i[n])},json:e=>Ke(e)});function Fn(e,t){if(!/^#/.test(e))throw new Error('Template: Only #fragment identifiers currently supported as include() urls ("'+e+'")');let n=new v(e.slice(1));return typeof t=="string"?Q(t).then(r=>n.render(r)):n.render(t||{}),n}var et=a(Fn);var Ci=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),tt=Object.assign,$n=Object.create,In=tt({},y,{include:et});function Wn(e,t,n){let r=n.length,o=-1;for(;++o<r;)e=nt(e,t,n[o]);return e}function nt(e,t,n){if(n&&typeof n=="object"){if(typeof n.length=="number")return Wn(e,t,n);if(n instanceof Node||n instanceof v)return e&&t.push(e),t.push(n),""}return e+k(n)}function Xn(e){let t=e[0],n=[],r=-1,o="";for(;t[++r]!==void 0;)o=nt(o+t[r],n,e[r+1]);return o&&n.push(o),n}function rt(e,t){return e.after?e.after(t):e.last.after(t),1}function ot(e,t){return t.stop&&t.stop(),e+=t.remove()||1,e}function ge(e,t){return e.nodeValue!==t?(e.nodeValue=t,1):0}function it(e,t,n){let r=0,o;typeof n[0]=="string"?(r+=ge(e,n[0]),o=0):(r+=ge(e,""),o=-1);let i=0,s;for(;s=n[++o];){if(typeof s=="string"){for(;i<t.length&&!R(t[i]);)r=t.splice(i,1).reduce(ot,r);if(t[i])r+=ge(t[i],s);else{let c=document.createTextNode(s);r+=rt(t[i-1],c),t.push(c)}}else r+=rt(t[i-1]||e,s.fragment),t.splice(i,0,s);++i}return r=t.splice(i).reduce(ot,r),r}function L(e,t,n,r,o="content"){l.apply(this,arguments);let i=this.children=[];this.render=h(In,e,t,null,"arguments[1]"),this.update=s=>it(n,i,s)}tt(L.prototype,{clone:function(e){let t=$n(L.prototype),n=t.children=[];return t.node=e,t.path=this.path,t.render=this.render,t.update=r=>it(e,n,r),t},resolve:function(){return Promise.all(arguments).then(Xn).then(this.update)}});var Jn=Object.assign,zn=[],Qn=f((e,t)=>t,{class:e=>e.classList});function Yn(e,t){t instanceof Node?e.push(t):t&&typeof t=="object"&&t.length!==void 0?e.push.apply(e,t):e.push(k(t))}function Zn(e){let[t]=e,n=[];for(var r=-1,o;t[++r]!==void 0;)t[r]&&n.push(t[r]),o=e[r+1],o!==void 0&&o!==""&&Yn(n,o);return n}function Kn(e,t,n,r){let o=t.length;for(;o--;)n.indexOf(t[o])!==-1&&t.splice(o,1);return t.length&&(e.remove.apply(e,t),++r),e.add.apply(e,n),++r}function Y(e,t,n,r,o){l.apply(this,arguments);let i=Qn(n,o),s=zn;this.render=h(y,e,t,null,"arguments[1]"),this.update=c=>{let m=Kn(i,s,c,0);return s=c,m},n.setAttribute(o,"")}Jn(Y.prototype,l.prototype,{resolve:function(){return Promise.all(arguments).then(Zn).then(this.update)}});var st=Object.assign,ut=/^\s*$/,er={number:"number",range:"number"};function ct(e,t){return e===void 0?t:e+t}function tr(e){let t=e[0],n=ut.test(t[0])?void 0:t[0],r=0;for(;t[++r]!==void 0;)n=ct(n,e[r]),ut.test(t[r])||(n=ct(n,t[r]));return n}function nr(e,t,n){return t in e?e[t]=n:e.setAttribute(t,n),1}function at(e,t){if(document.activeElement===e)return 0;let n=er[e.type]||"string";if(t=typeof t===n?t:null,t===e.value||t+""===e.value)return 0;let r=nr(e,"value",t);return P.changeEvent&&X(P.changeEvent,e),r}function Z(e,t,n,r,o="value"){l.apply(this,arguments),this.render=h(y,e,t,null,"arguments[1]"),this.update=i=>at(n,i)}st(Z.prototype,l.prototype,{resolve:function(){return Promise.all(arguments).then(tr).then(this.update)}});function ye(e,t,n,r,o="value"){l.apply(this,arguments),this.render=h(y,e,t,null,"arguments[1]"),this.update=i=>at(n,i)}st(ye.prototype,l.prototype,{resolve:function(){return Promise.all(arguments).then(le).then(this.update)}});var lt=document.createElement("textarea");function K(e){return lt.innerHTML=e,lt.value}var ns=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),ft={types:{button:["name","value"],checkbox:["required","value","checked"],date:["required","min","max","step","value"],hidden:["value"],image:["src"],number:["required","min","max","step","value"],radio:["required","value","checked"],range:["min","max","step","value"],reset:["value"],submit:["value"],time:["required","min","max","step","value"],default:["required","value"]}},E=/\$\{/;function dt(e,t,n,r,o){let i=o.value;if(!i||!E.test(i))return;let s=o.localName;e.push(new I(t,i,r,n,s))}function we(e,t,n,r,o){let i=o.value;if(!i||!E.test(i))return;let s=o.localName;e.push(new W(t,i,r,n,s))}function rr(e,t,n,r,o){let i=o.value;if(!i||!E.test(i))return;let s=o.localName;e.push(new Y(t,i,r,n,s))}function or(e,t,n,r,o){let i=o.value;!i||!E.test(i)||e.push(new Z(t,i,r,n))}function be(e,t,n,r,o){let i=o.value;!i||!E.test(i)||e.push(new ye(t,i,r,n))}function ir(e,t,n,r,o){let i=o.value;!i||!E.test(i)||e.push(new J(t,i,r,n))}var sr=f((e,t,n,r,o)=>o.localName,{checked:ir,class:rr,datetime:function(t,n,r,o,i){console.log("Todo: compile datetime")},disabled:we,hidden:we,"inner-content":function(e,t,n,r,o){let i=o.value;!i||!E.test(i)||(r.removeAttribute(o.localName),e.push(new L(t,K(i),r,n)))},required:we,value:f((e,t,n,r,o)=>""+r.type,{text:be,search:be,"select-one":be,default:or,undefined:dt}),default:dt});function pt(e,t,n,r){let o=r.attributes;for(var i=-1,s;s=o[++i];)sr(e,t,n,r,s)}function xe(e,t,n,r){let o=r.childNodes;if(o){let i=-1;for(;o[++i];)mt(e,t,n?n+"."+i:n+i,o[i])}}function ur(e,t,n,r){let o=r.type;if(!o)return;let i=ft.types[o]||ft.types.default;pt(e,t,n,r,i)}var cr=f((e,t,n,r)=>r.tagName.toLowerCase(),{defs:d,default:(e,t,n,r)=>{xe(e,t,n,r),pt(e,t,n,r),ur(e,t,n,r)}}),mt=f((e,t,n,r)=>Le(r),{comment:d,element:(e,t,n,r)=>(cr(e,t,n,r),e),fragment:(e,t,n,r)=>(xe(e,t,n,r),e),text:(e,t,n,r)=>{let o=r.nodeValue;return o&&E.test(o)&&e.push(new L(t,K(o),r,n)),e},doctype:d,document:(e,t,n,r)=>(xe(e,t,n,r),e),default:()=>{throw new Error("Node not compileable")}}),ht=mt;var ee=Symbol("target"),te=Symbol("observer"),je=Symbol("sets"),os=Array.prototype,is=Object.freeze([]),ar=Object.isExtensible;function lr(e,t){let n=e.indexOf(t);return n>-1&&e.splice(n,1),e}function ve(e,t,n){if(!!e)for(var r=-1;e[++r];)e[r](t,n)}function fr(e){return e&&ar(e)&&!Node.prototype.isPrototypeOf(e)&&(typeof BaseAudioContext=="undefined"||!BaseAudioContext.prototype.isPrototypeOf(e))&&!(e instanceof Date)&&!(e instanceof RegExp)&&!(e instanceof Map)&&!(e instanceof WeakMap)&&!(e instanceof Set)&&!(window.WeakSet&&e instanceof WeakSet)&&!ArrayBuffer.isView(e)}function dr(e){let t={gets:[],sets:[]};return e[te]=new Proxy(e,{get:function(r,o,i){if(typeof o=="symbol")return o===ee?r:o===te?i:o===je?t:r[o];let s;return(s=Object.getOwnPropertyDescriptor(r,o),!s||s.writable)&&ve(t.gets,o),b(r[o])||r[o]},set:function(r,o,i,s){return r[o]===i||(r[o]=i&&typeof i=="object"&&i[ee]||i,i=r[o],ve(t.sets,o,i)),!0}})}function b(e){return e?e[te]||(fr(e)?dr(e):void 0):void 0}b.notify=function(t,n,r){let o=t[te];if(!o)return;let i=o[ee],s=o[je].sets;ve(s,n,r===void 0?i[n]:r)};b.target=function(t){return t&&t[ee]||t};function Ee(e,t,n){this.fns=t[je][e+"s"],this.fn=n,this.fns.push(n)}Ee.prototype.stop=function(){lr(this.fns,this.fn)};b.gets=function(t,n){return new Ee("get",t,n)};b.sets=function(t,n){return new Ee("set",t,n)};var pr=window.DEBUG===!0||window.DEBUG&&window.DEBUG.includes("literal"),mr=Object.assign,q={};function gt(e,t){return t+e}function hr(e){return e!==0}function yt(e){e.reduce(gt,0)!==0&&O("mutate ",e.reduce(gt,0),"#ff7246")}function gr(e,t){return/^[a-zA-Z]/.test(t)?e:e.childNodes[t]}function yr(e,t){return e.split(/\./).reduce(gr,t)}function wr(e){return new e.constructor(e.consts,e.source,yr(e.path,this),e.path,e.name)}function br(e){let t=e.rendered;if(!t){e.rendered={};return}let n;for(n in t)t[n]=void 0}function wt(e,t,n){br(e);let r=b.gets(t,(i,s)=>e.rendered[i]=!0),o=e.render(t,n);return r.stop(),o}function xr(e){let t=e.childNodes[0],n=e.childNodes[e.childNodes.length-1];if(R(t)||e.prependChild(document.createTextNode("")),R(n)){let r=/\s*$/.exec(n.nodeValue);n.nodeValue=r.input.slice(0,r.index),e.appendChild(document.createTextNode(r[0]))}else e.appendChild(document.createTextNode(""))}function v(e){let t=typeof e=="string"?e:ie(e);if(q[t]){this.consts=q[t].consts,this.content=q[t].content,this.fragment=q[t].content.cloneNode(!0),this.first=this.fragment.childNodes[0],this.last=this.fragment.childNodes[this.fragment.childNodes.length-1],this.renderers=q[t].renderers.map(wr,this.fragment),this.sets=A;return}if(e=typeof e=="string"?document.getElementById(e):e,pr){if(!e)throw new Error('Template id="'+t+'" not found in document');if(!e.content)throw new Error('Element id="'+t+'" is not a <template> (no content fragment)');e.dataset.data!==void 0&&O("render","data-data attribute will be ignored","red")}xr(e.content),this.consts=e.dataset?Object.keys(e.dataset):A,this.content=e.content,this.fragment=e.content.cloneNode(!0),this.first=this.fragment.childNodes[0],this.last=this.fragment.childNodes[this.fragment.childNodes.length-1],this.renderers=ht([],this.consts.join(", "),"",this.fragment),this.sets=A,q[t]=this}mr(v.prototype,{render:function(e={}){let t=b.target(e);if(t===this.data)return this.fragment;this.data=t;let n=b(t),r=this.renderers;return this.sets.stop(),this.sets=n?b.sets(n,(o,i)=>{let s=r.map(c=>c.rendered[o]?wt(c,n,t):0);!s.find(hr)||Promise.all(s).then(yt)}):A,Promise.all(r.map(o=>wt(o,n,t))).then(o=>(yt(o),this.fragment))},stop:function(){this.sets.stop(),this.render=d},remove:function(){let e=0,t=this.last;for(;t!==this.first;){let n=t.previousSibling;t.remove(),++e,t=n}return this.first.remove(),++e}});var ys=V('<template is="literal-template">',{construct:function(){this.instanceCount=0},properties:{render:{value:function(e){let t=new v(this);return++this.instanceCount,t.render(e),t.fragment}}}});V("literal-include",{construct:function(){this.hasAttribute("src")||console.error("<literal-include> src attribute required",this);let e=new Promise((n,r)=>{this.resolveSrc=n,this.rejectSrc=r}),t=new Promise((n,r)=>{this.resolveData=n,this.rejectData=r});e.then(n=>{if(n.render)return t.then(r=>{this.after(n.render(r)),this.remove()});this.after(n.content.cloneNode(!0)),this.remove()}).catch(n=>console.error(n,this))},connect:function(){this.resolveData({})},properties:{data:{attribute:function(e){this.resolveData(Q(e))}},src:{attribute:function(e){if(!e)return this.rejectSrc('<literal-include> source src="'+e+'" is empty');let t=e.replace(/^#/,""),n=document.getElementById(t);if(!n)return this.rejectSrc("<literal-include> src template not found");this.resolveSrc(n)}}}});