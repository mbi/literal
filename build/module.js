// Literal 0.5.0 (Built 2021-10-12 12:57)


function B(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var o=t(r);return e.set(r,o),o}}var xn=Array.prototype;function vn(t,e){return typeof t=="function"?t.apply(null,e):t}function be(t,e,n){n=n||t.length;var r=n===1?e?t:B(t):B(function(o){return be(function(){var i=[o];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function o(i){return arguments.length===0?o:arguments.length===1?r(i):arguments.length>=n?t.apply(null,arguments):vn(r(i),xn.slice.call(arguments,1))}}var p=be;function d(t,e){return function(){let r=t.apply(this,arguments),o=e[r]||e.default;if(!o)throw new Error('overload() no handler for "'+r+'"');return o.apply(this,arguments)}}function et(t){return function(n,...r){var o=t[n]||t.default;return o&&o.apply(this,r)}}function h(t){return t}var H=Object.assign,_={headers:function(t){return{}},body:h,onresponse:function(t){if(t.redirected){window.location=t.url;return}return t}},jn=et({"application/x-www-form-urlencoded":function(t){return H(t,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})},"application/json":function(t){return H(t,{"Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"})},"multipart/form-data":function(t){return H(t,{"Content-Type":"multipart/form-data","X-Requested-With":"XMLHttpRequest"})},"audio/wav":function(t){return H(t,{"Content-Type":"audio/wav","X-Requested-With":"XMLHttpRequest"})},default:function(t){return H(t,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})}}),En=et({"application/json":function(t){return t.get?Tn(t):JSON.stringify(t)},"application/x-www-form-urlencoded":function(t){return t.get?xe(t):ve(t)},"multipart/form-data":function(t){return t.get?t:On(t)}});function Tn(t){return JSON.stringify(Array.from(t.entries()).reduce(function(e,n){return e[n[0]]=n[1],e},{}))}function xe(t){return new URLSearchParams(t).toString()}function ve(t){return Object.keys(t).reduce((e,n)=>(e.append(n,t[n]),e),new URLSearchParams)}function On(t){throw new Error("TODO: dataToFormData(data)")}function An(t,e){return e instanceof FormData?t+"?"+xe(e):t+"?"+ve(e)}function Sn(t,e,n,r){let o=typeof n=="string"?n:n&&n["Content-Type"]||"application/json",i=jn(o,H(_.headers&&e?_.headers(e):{},typeof n=="string"?{}:n)),c={method:t,headers:i,credentials:"same-origin",signal:r&&r.signal};return t!=="GET"&&(c.body=En(o,_.body?_.body(e):e)),c}var Nn={"text/html":Ln,"application/json":kn,"multipart/form-data":je,"application/x-www-form-urlencoded":je,audio:Tt,"audio/wav":Tt,"audio/m4a":Tt};function Tt(t){return t.blob()}function kn(t){return t.json().catch(e=>{throw new Error("Cannot parse JSON "+t.url+". "+e.message+"")})}function je(t){return t.formData()}function Ln(t){return t.text()}function Cn(t){if(_.onresponse&&(t=_.onresponse(t)),!t.ok)throw new Error(t.statusText+"");let e=t.headers.get("Content-Type").replace(/\;.*$/,"");return Nn[e](t)}function Ee(t="GET",e,n,r="application/json"){if(e.startsWith("application/")||e.startsWith("multipart/")||e.startsWith("text/")||e.startsWith("audio/"))throw new Error("request(method, url, data, contenttype) parameter order has changed. You passed (method, contenttype, url, data).");t=t.toUpperCase(),t==="GET"&&n&&(e=An(e,n));let o=Sn(t,n,r,arguments[4]);return fetch(e,o).then(Cn)}function nt(t){return Ee("GET",t)}var Pn=/\.([\w-]+)(?:#|\?|$)/;var Rn=[],S=d(t=>(Pn.exec(t)||Rn)[1],{js:t=>import(t[0]==="."?new URL(t,window.location):t).then(n=>n.default),default:B(t=>nt(t))});function Ot(t,e){let n=document.createRange();if(e){let r=document.getElementsByTagName(e).item(0);n.selectNode(r)}return n.createContextualFragment(t)}var Te=/\.?([\w-]+)/g;function Dn(t,e,n){var r=t.exec(e);if(!r)throw new Error('getPath(path, object): invalid path "'+e+'" at index '+t.lastIndex);return Oe(t,e,n[r[1]])}function Oe(t,e,n){return t.lastIndex===e.length?n:n?Dn(t,e,n):void 0}function Mn(t,e){return Te.lastIndex=0,Oe(Te,t,e)}var rt=p(Mn,!0);function l(){}var Bn=Object.defineProperties,Hn=Object.freeze;function Ae(){return this}var T=Hn(Bn([],{shift:{value:l},push:{value:l},each:{value:l},forEach:{value:l},start:{value:l},stop:{value:l},done:{value:l},join:{value:function(){return""}},map:{value:Ae},filter:{value:Ae},reduce:{value:function(t,e){return e}}}));function At(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function ot(t){return t.nodeType===3}var _n={1:"element",3:"text",8:"comment",9:"document",10:"doctype",11:"fragment"};function St(t){return _n[t.nodeType]}function qn(t,e,n){let r=t(e),o=t(n);return o===r?0:r>o?1:-1}var Se=p(qn,!0);function Nt(t,e,n){let r;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(r=n,n=r.input.slice(n.index+n[0].length+(n.consumed||0)));let o=t.exec(n);if(!o)return;let i=e(o);return r&&(r.consumed=(r.consumed||0)+o.index+o[0].length+(o.consumed||0)),i}var Zo=p(Nt,!0);function Fn(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function Vn(t,e,n){let r=-1;for(;++r<n.length;)e=n[r]!==void 0&&t[r]?t[r](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function Gn(t,e,n,r){let o=Nt(t,i=>Vn(e,n,i),r);return o===void 0?e.catch?e.catch(n,r):Fn(t,e,r):o}var it=p(Gn,!0);function Ne(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),r=Object.keys(e),o=n.length;for(;o--;){if(t[n[o]]===void 0){if(e[n[o]]!==void 0)return!1}else if(!e.hasOwnProperty(n[o])||!Ne(t[n[o]],e[n[o]]))return!1;let i=r.indexOf(n[o]);i>-1&&r.splice(i,1)}for(o=r.length;o--;)if(e[r[o]]===void 0){if(t[r[o]]!==void 0)return!1}else return!1;return!0}var ke=p(Ne,!0);function Un(t,e){let n;for(n in t)if(t[n]!==e[n])return!1;return!0}var Le=p(Un,!0);function kt(t){if(t=typeof t=="number"?t+"":t.trim(),typeof t=="string")return t.toLowerCase().replace(/^[\W_]+/,"").replace(/[\W_]+$/,"").replace(/[\W_]+/g,"-")}function Lt(t){if(typeof t.length=="number")return t[t.length-1]}function N(t){return typeof t}var Wn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function $n(t,e){if(typeof e=="number")return e;var n=Wn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var Ce=p($n);var In=/px$/,Pe={"transform:translateX":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=st(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=st(e);return parseFloat(n[5])},"transform:scale":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=st(e),r=parseFloat(n[0]),o=parseFloat(n[1]);return Math.sqrt(r*r+o*o)},"transform:rotate":function(t){var e=z("transform",t);if(!e||e==="none")return 0;var n=st(e),r=parseFloat(n[0]),o=parseFloat(n[1]);return Math.atan2(o,r)}};function st(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function z(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function Ct(t,e){if(Pe[t])return Pe[t](e);var n=z(t,e);return typeof n=="string"&&In.test(n)?parseFloat(n):n}var Pt;function Rt(){return Pt||(Pt=Ct("font-size",document.documentElement))}window.addEventListener("resize",()=>Pt=void 0);var X=d(N,{number:h,string:Ce({em:function(t){return Rt()*t},px:function(t){return t},rem:function(t){return Rt()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100}})});function Dt(t){return X(t)/Rt()}var Re=Dt;function De(t){return 100*X(t)/window.innerWidth}function Me(t){return 100*X(t)/window.innerHeight}var zn=Object.assign,Xn=Object.defineProperties,Jn=Object.isExtensible,j=Symbol("observer");function ut(t,e){let n=t.indexOf(e);return n>-1&&t.splice(n,1),t}function g(t){return t&&t[j]&&t[j].target||t}function Mt(t,e){let r=e[j].observables;return r[t]||(r[t]=[])}function Bt(t){return t[j].sets||(t[j].sets=[])}function ct(t,e,n){if(!t||!t.length)return 0;t=t.slice(0);for(var r=-1;t[++r];)t[r].fn(e,n);return r}function Qn(t){return t&&Jn(t)&&!Node.prototype.isPrototypeOf(t)&&(typeof BaseAudioContext=="undefined"||!BaseAudioContext.prototype.isPrototypeOf(t))&&!(t instanceof Date)&&!(t instanceof RegExp)&&!(t instanceof Map)&&!(t instanceof WeakMap)&&!(t instanceof Set)&&!(window.WeakSet&&t instanceof WeakSet)&&!ArrayBuffer.isView(t)}var Be={[j]:{}};function He(){this.observables={},this.gets=[],this.sets=void 0}zn(He.prototype,{get:function(e,n,r){let o=e[n];if(typeof n=="symbol"||n==="__proto__")return o;let i=Object.getOwnPropertyDescriptor(e,n);(i?i.writable||i.set:o===void 0)&&ct(this.gets,n);let E=k(o);if(!E)return o;for(var y=-1;this.gets[++y];)this.gets[y].listen(n);return E},set:function(e,n,r,o){if(typeof n=="symbol"||n==="__proto__")return e[n]=r,!0;if(e[n]===r)return!0;for(var i=-1;this.gets[++i];)this.gets[i].unlisten(n);return e[n]=g(r),r=e[n],ct(this.observables[n],r),ct(this.sets,r),!0},deleteProperty:function(t,e){if(typeof e=="symbol"||e==="__proto__")return delete t[e],!0;if(!t.hasOwnProperty(e))return!0;delete t[e];let n=this.observables[e];return n&&ct(n,t[e]),!0}});function Yn(t){let e=new He,n=new Proxy(t,e);return e.observer=n,e.target=t,Be[j].value=e,Xn(t,Be),n}function k(t){return t?t[j]&&t[j].observer||(Qn(t)?Yn(t):void 0):void 0}var P=Object.assign,R=Object.create,J=Object.defineProperties,_e={consumer:{writable:!0},stopables:{writable:!0}},Zn={push:function(){let e=arguments.length,n=-1;for(;++n<e;)this.consumer.push(arguments[n])},stop:function(){throw new Error("TODO: Implement stream mouth stop()")}};function Kn(t){return t.stop?t.stop():t()}function tr(t){t.forEach(Kn),t.length=0}function f(t){if(!f.prototype.isPrototypeOf(this))return new f(t);let e=this;this.start=function(){let n=P(R(e),Zn);return P(e,t(n)),this}}P(f.prototype,{map:function(t){return this.pipe(new Ht(t))},filter:function(t){return this.pipe(new _t(t))},reduce:function(t,e){return this.pipe(new Ft(t,e)).start()},scan:function(t,e){return this.pipe(new Vt(t,e))},each:function(t){return this.pipe(new Gt(t)).start()},pipe:function(t){return t.start=this.start,t.done&&t.done(this),this.consumer=t},take:function(t){this.pipe(new qt(t))},done:function(t){return this.stopables=this.stopables||[],this.stopables.push(t),this},start:function(){},stop:function(){return this.consumer=T,this.stopables&&tr(this.stopables),this}});P(f,{from:function(t){return new f(e=>e.push.apply(e,t))},of:function(){return this.from(arguments)}});var Q=P({fn:{value:h}},_e);function Ht(t){Q.fn.value=t,J(this,Q)}Ht.prototype=R(f.prototype);Ht.prototype.push=function(e){return e!==void 0&&this.consumer.push(this.fn(e)),this};function _t(t){Q.fn.value=t,J(this,Q)}_t.prototype=R(f.prototype);_t.prototype.push=function(e){return e!==void 0&&this.fn(e)&&this.consumer.push(e),this};var qe=P({n:{value:0}},_e);function qt(t){if(typeof t!="number"||t<1)throw new Error("stream.take(n) accepts non-zero positive integers as n ("+t+")");qe.n.value=t,J(this,qe)}qt.prototype=R(f.prototype);qt.prototype.push=function(e){return this.consumer.push(e),--this.n||this.stop(),this};var q=P({value:{writable:!0}},Q);function Ft(t,e){q.fn.value=t,q.value.value=e,J(this,q)}Ft.prototype=R(f.prototype);Ft.prototype.push=function(e){return e!==void 0&&(this.value=this.fn(this.value,e)),new Promise((n,r)=>{this.done(()=>n(this.value))})};function Vt(t,e){q.fn.value=t,q.value.value=e,J(this,q)}Vt.prototype=R(f.prototype);Vt.prototype.push=function(e){return e!==void 0&&(this.value=this.fn(this.value,e),this.consumer.push(this.value)),this};function Gt(t){this.push=t}Gt.prototype=R(f.prototype);Gt.prototype.pipe=function(){throw new Error("Stream cannot .pipe() from consumed stream")};var er=Object.assign,Ut=/(^\.?|\.)\s*([\w-]*)\s*/g;function Wt(t,e,n,r){if(!t.length)throw new Error("Path is empty!");Ut.lastIndex=e;let o=Ut.exec(t);if(!o)throw new Error("Cant parse path "+this.path+" at index "+this.index);if(this.target=n,this.path=t,this.index=Ut.lastIndex,this.output=r,this.index>=this.path.length&&(this.fn=this.output),o[2])this.key=o[2],this.listen(),this.fn(this.target[this.key]);else{if(o[1]!==".")throw new Error('Path must end with "." (',o[1],t,") Todo: observe all mutations");this.key=".",this.listen(),this.fn(this.target)}}er(Wt.prototype,{fn:function(t){let e=typeof t;if(!t||e!=="object"&&e!=="function"){this.child&&(this.child.stop(),this.child=void 0),this.output(void 0);return}if(this.child?(this.child.unlisten(),this.child.target=t,this.child.listen()):this.child=new Wt(this.path,this.index,t,this.output),this.child.key===".")throw new Error("Arrrrgh");this.child.fn(t[this.child.key])},listen:function(){if(!k(this.target))return;let e=this.key==="."?Bt(this.target):Mt(this.key,this.target);if(e.includes(this))throw new Error("observe.listen this is already bound");e.push(this)},unlisten:function(){let t=this.key==="."?Bt(this.target):Mt(this.key,this.target);ut(t,this)},stop:function(){this.unlisten(),this.child&&this.child.stop(),this.child=void 0}});function at(t,e,n){return new f(r=>r.done(new Wt(t,0,e,o=>{o!==n&&(n=o,r.push(o))})))}var nr=Object.assign;function $t(t){return new f(e=>{let n={},r=-1,o;for(;o=t[++r];){let i=r;o.each(c=>{n[i]=c,e.push(nr({},n))})}})}function It(){return $t(arguments)}function zt(t,e,n){return new at(t,g(e),n)}function Fe(t,e){t=typeof t=="string"?t.split(/\s+/):t;let n=g(e),r=t.map((o,i)=>new at(o,n,arguments[i+2]));return r.length>1?new $t(r):r[0]}function rr(t){return new f(e=>{let n=-1,r;for(;r=t[++n];)r.each&&r.each(o=>e.push(o))||e.push.apply(e,r)})}function Xt(){return rr(arguments)}var Jt=Array.prototype;function Ve(t){return t.length>0}function Ge(t,e,n){return t[n]=e.shift(),t}function or(t){return[]}function ir(t){let e=Jt.map.call(t,or);return new f(n=>Jt.forEach.call(t,(r,o)=>{let i=e[o];r.each&&r.each(c=>{i.push(c),e.every(Ve)&&n.push(e.reduce(Ge,{}))})||Jt.forEach.call(r,c=>{i.push(c),e.every(Ve)&&n.push(e.reduce(Ge,{}))})}))}function Qt(){return ir(arguments)}var sr=Object.assign,Ue=Object.entries,Yt={assign:sr,by:Se,capture:it,combine:It,ceil:Math.ceil,define:Object.defineProperties,entries:Ue,equals:ke,floor:Math.floor,get:rt,id:h,keys:Object.keys,last:Lt,matches:Le,merge:Xt,zip:Qt,noop:l,observe:Fe,Observer:k,overload:d,print:l,round:Math.round,paramify:function(t){let e=typeof t=="object"&&typeof t.length!="number"?Ue(t).flatMap(n=>n[1]===void 0?T:n[1]&&typeof n[1]=="object"&&n[1].map?n[1].map(r=>[n[0],r]):[n]):t;return new URLSearchParams(e)},slugify:kt,Stream:f,translate:function(t){return window.translations&&window.translations[t]||t},values:Object.values,px:X,em:Re,rem:Dt,vw:De,vh:Me},x=Yt;function Zt(t,e){if(Yt[t])throw new Error('Literal: function "'+t+'" already registered');return Yt[t]=e,e}function ur(t,e){return e[t]}var Kt=p(ur,!0);function cr(t){let e=t[0];return/^\w/.test(e)}function te(t={},e,n,r){let o=Object.entries(t).filter(cr),i=o.map(Kt(0)),c=o.map(Kt(1));return r?new Function(...i,"return ("+e+") => {"+(n||"")+"}").apply(r,c):new Function(...i,"return function("+e+"){"+(n||"")+"}").apply(null,c)}var We="  ",lt={};function w(t,e,n,r,o,i){if(typeof n!="string")throw new Error("Template is not a string");let c=r||n;if(lt[c])return lt[c];let E=`
`+(r?We+"// Template #"+r+`
`:"")+We+"return this.resolve`"+n+"`;\n";if(!1)try{}catch(y){}return lt[c]=te(t,e,E)}var ar=Object.assign,lr=Object.values;function fr(t){t.stop()}function ee(t,e,n){this.children={},this.target=g(t),this.path=e,this.root=n,t[j].gets.push(this)}ar(ee.prototype,{listen:function(t){if(this.children[t])return;let e=this.path?this.path+".":"";this.children[t]=new ee(this.target[t],e+t,this.root)},unlisten:function(t){!this.children[t]||(this.children[t].stop(),delete this.children[t])},fn:function(t){let e=this.path?this.path+".":"";this.root.push(e+t)},stop:function(){ut(this.target[j].gets,this),lr(this.children).forEach(fr)}});function ne(t){return new f(e=>e.done(new ee(g(t),"",e)))}var Y=[],$e=Promise.resolve(Y),ft;function pr(t){if(!1)var e,n;for(var r;r=t.shift();)r.update.apply(r,r.cuedArguments),r.cuedArguments=void 0,r.cued=!1;ft=void 0}function Ie(t,e){return t.cuedArguments=e,t.cued?$e:(ft||(ft=$e.then(pr)),Y.push(t),t.cued=!0,ft)}function ze(t){if(!Y.length||!t.cued)return;let e=Y.indexOf(t);e>0&&Y.splice(e,1),t.cuedArguments=void 0,t.cued=!1}var dr=/\s*(\([\w,\s]*\))/,mr=/function(?:\s+\w+)?\s*(\([\w,\s]*\))/,L=d(N,{boolean:t=>t+"",function:t=>t.prototype?(t.name||"function")+(mr.exec(t.toString())||[])[1]:(dr.exec(t.toString())||[])[1]+" ⇒ {…}",number:t=>Number.isNaN(t)?"":Number.isFinite(t)?t+"":t<0?"-∞":"∞",string:h,symbol:t=>t.toString(),undefined:t=>"",object:d(t=>t&&t.constructor.name,{RegExp:t=>"/"+t.source+"/",null:()=>"",default:t=>JSON.stringify(t,null,2)}),default:JSON.stringify});var s={Totals:{template:0,text:0,attribute:0,boolean:0,class:0,checked:0,value:0}},D={count:0};var hr=Object.assign,gr=t=>t&&typeof t=="object"&&t.then,Z=t=>t.reduce((e,n)=>n===""||n===void 0?e:e+n);function yr(t,e,n){return t&&typeof t=="object"?t.then?t.then(r=>e===""?r:e+r):t.find?t.find(gr)?Promise.all(t).then(r=>e===""?Z(r.map(n)):e+Z(r.map(n))):e===""?Z(t.map(n)):e+Z(t.map(n)):e===""?n(t):e+n(t):e===""?n(t):e+n(t)}function F(t){let e=t[0];return Z(e.map((n,r)=>r<=t.length?yr(t[r+1],n,L):n===""?void 0:n))}function pt(t,e){let n=e,r=0;for(;n&&n!==t;){let o=n.previousSibling;n.remove(),n=o,++r}return t.constructor.prototype.remove.apply(t),++r,r}function wr(t){return t.stop?t.stop():t()}var re="-fns";function Xe(t){let e=t+re;return function(r){if(this.status===name){r();return}(this[e]||(this[e]=[])).push(r)}}function br(t){t()}function xr(t,e){let[n,r,o,i]=t;return e[r]&&e[r](i),t}function Je(t,e,n,r){if(t.status===n)return;let o=t.contents;o&&o.reduce(xr,arguments);let i=t[n+re];return i&&i.forEach(br),t}function vr(t,e){if(!t.includes(e)){for(var n;(n=t[t.length-1])&&n.length<e.length&&e.startsWith(n);)--t.length;t.push(e)}}function a(t,e,n){this.element=n||t,this.node=t,this.path=e.path,this.id=++D.count,this.count=0,this.template=e.template}hr(a.prototype,{render:function(t){return Ie(this,arguments)},update:function(e){let n=this["stop"+re];n&&(n.forEach(wr),n.length=0);let r=this.paths||(this.paths=[]);r.length=0;let o=e?ne(e).each(c=>vr(r,c)):T;++this.count;let i=this.literally(e,g(e),this.element);return o.stop(),i},connected:Xe("dom"),connect:function(){Je(this,"connect","dom")},done:Xe("done"),stop:function(){return ze(this),this.render=l,Je(this,"stop","done"),this}});var jr=Object.assign;function Er(t,e,n){return n===t.getAttribute(e)?0:(t.setAttribute(e,n),1)}function dt(t,e){a.apply(this,arguments),this.name=e.name,this.literally=e.literally||w(x,"data, state, element",e.source,null,e,this.element);let n="#"+e.template;++s[n].attribute||(s[n].attribute=1),++s.Totals.attribute}jr(dt.prototype,a.prototype,{resolve:function(){let t=F(arguments);return Er(this.node,this.name,t)}});var Tr=Object.assign;function Or(t,e,n){if(e in t){if(!!n===t[e])return 0;t[e]=n}else n?t.setAttribute(e,e):t.removeAttribute(e);return 1}function mt(t,e){a.apply(this,arguments),this.name=e.name,this.literally=e.literally||w(x,"data, state, element",e.source,null,e,this.element),t.removeAttribute(this.name);let n="#"+e.template;++s[n].boolean||(s[n].boolean=1),++s.Totals.boolean}Tr(mt.prototype,a.prototype,{resolve:function(){let t=F(arguments);return Or(this.node,this.name,t)}});function oe(t){return!!t||t!=null&&!Number.isNaN(t)}var ie=Object.assign,Ar=window.CustomEvent,se={bubbles:!0,cancelable:!0};function ue(t,e){let n;typeof t=="object"&&(n=ie({},se,t),t=n.type,delete n.type),e&&e.detail&&(n?n.detail=e.detail:n=ie({detail:e.detail},se));var r=new Ar(t,n||se);return e&&(delete e.detail,ie(r,e)),r}function Sr(t,e){let n;typeof t=="object"&&(n=t,t=n.type,delete n.type);let r=ue(t,n);return e.dispatchEvent(r)}var ht=p(Sr,!0);var V={changeEvent:"dom-update"};var Nr=Object.assign,kr=/^\s*$/;function Lr(t){return!kr.test(t)}function Cr(t){return""+t}function Pr(t,e,n){let r=typeof e=="boolean"?e:n?t.type==="checkbox"&&e&&e.map?e.map(Cr).includes(t.value):e+""===t.value:!!e;return r===t.checked?0:(t.checked=r,V.changeEvent&&ht(V.changeEvent,t),1)}function gt(t,e){a.apply(this,arguments),this.name="checked",this.literally=e.literally||w(x,"data, state, element",e.source,null,e,this.element),this.hasValue=oe(t.getAttribute("value")),t.removeAttribute("checked");let n="#"+e.template;++s[n].checked||(s[n].checked=1),++s.Totals.checked}Nr(gt.prototype,a.prototype,{resolve:function(e,n){if(arguments.length!==2||e.find(Lr))throw new Error("A checked attribute may contain only one ${ tag }, optionally surrounded by white space");return Pr(this.node,n,this.hasValue)}});var Rr=d(h,{is:l,tag:l,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(r=>{e.appendChild(r)})},points:G,cx:G,cy:G,r:G,preserveAspectRatio:G,viewBox:G,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function G(t,e,n){e.setAttribute(t,n)}function Dr(t,e){for(var n=Object.keys(e),r=n.length;r--;)Rr(n[r],t,e[n[r]]);return t}var K=p(Dr,!0);var Mr="http://www.w3.org/2000/svg",Qe=document.createElement("div");function Br(t,e){var n=document.createElement(t);return e&&(n.innerHTML=e),n}function v(t,e){var n=document.createElementNS(Mr,t);return e&&(n.innerHTML=e),n}var U=d(h,{comment:function(t,e){return document.createComment(e||"")},fragment:function(t,e){var n=document.createDocumentFragment();if(e){Qe.innerHTML=e;let r=Qe.childNodes;for(;r[0];)n.appendChild(r[0])}return n},text:function(t,e){return document.createTextNode(e||"")},circle:v,ellipse:v,g:v,glyph:v,image:v,line:v,rect:v,use:v,path:v,pattern:v,polygon:v,polyline:v,svg:v,default:Br});function Hr(){return Array.prototype.map.call(arguments,N).join(" ")}function Ye(t){if(typeof t!="string")throw new Error("create(object, content) object must have string property .tag or .tagName")}var W=d(Hr,{string:U,"string undefined":U,"string string":U,"string object":function(t,e){return K(U(t,""),e)},"object string":function(t,e){let n=t.tag||t.tagName;return Ye(n),K(U(n,e),t)},"object object":function(t,e){let n=t.tag||t.tagName;return Ye(n),K(K(U(n,""),t),e)},default:function(){throw new Error('create(tag, content) does not accept argument types "'+Array.prototype.map.call(arguments,N).join(" ")+'"')}});var ce=Object.assign;function Ze(t,e){if(!e||typeof e!="object")return!1;if(!e.nodeType&&typeof e.length=="number")return console.log("TODO: promised or streamed value is an array - deal wid' it"),!0;if(e instanceof Node)return t.content.replaceWith(e),t.content=e,!0;if(e instanceof A)return t.content.replaceWith(e.content),t.content=e,t.status==="dom"&&e.connect(),!0;if(e.each){let n=new ae(e);return t.content.replaceWith(n.content),t.content=n,t.status==="dom"&&n.connect(),!0}if(e.then){let n=new yt(e);return t.content.replaceWith(n.content),t.content=n,t.status==="dom"&&n.connect(),!0}}function yt(t){this.content=W("text",""),this.status="pending",this.id=++D.count,t.then(e=>this.status!=="done"&&this.push(e)).catch(e=>this.print(e))}ce(yt.prototype,{push:function(t){return Ze(this,t)?this:(this.content.textContent=L(t),this)},print:function(){this.content.remove()},remove:function(){this.content.remove()},replaceWith:function(t){this.content.replaceWith(t)},stop:function(){this.status!=="done"&&(this.status="done",this.content.stop&&this.content.stop())},connect:function(){this.status!=="dom"&&(this.status="dom",this.content.connect&&this.content.connect())}});function ae(t){let e=W("text","");this.marker=e,this.content=e,this.id=++D.count,this.producer=t,t.pipe(this).start()}ce(ae.prototype,yt.prototype,{push:function(t){return le(this.content),Ze(this,t)?this:(this.marker.textContent=L(t),this.content!==this.marker&&(this.content.replaceWith(this.marker),this.content=this.marker),this)},stop:function(){this.status!=="done"&&(this.status="done",this.producer.stop&&this.producer.stop(),this.content.stop&&this.content.stop())}});function _r(t,e,n){let r=n.length,o=-1;for(;++o<r;)e=Ke(t,e,n[o]);return e}function Ke(t,e,n){let r=t.contents;if(n&&typeof n=="object"){if(!n.nodeType&&typeof n.length=="number")return _r(t,e,n);if(n instanceof Node||n instanceof A)return e&&r.push(e),r.push(n),"";if(n.each)return e&&r.push(e),r.push(new ae(n)),"";if(n instanceof Promise)return e&&r.push(e),r.push(new yt(n)),""}return e+L(n)}function wt(t,e){return t.nodeValue!==e?(t.nodeValue=e,1):0}function le(t){t&&typeof t=="object"&&t.stop&&t.stop()}function tn(t){return typeof t=="string"?t:t.content?tn(t.content):t}function qr(t,e,n,r){let o=0;return n=n.slice().map(tn),e.previousSibling!==t&&(o+=pt(t.nextSibling,e.previousSibling)),typeof n[0]=="string"?o+=wt(t,n.shift()):o+=wt(t,""),typeof n[n.length-1]=="string"?o+=wt(e,n.pop()):o+=wt(e,""),n.length&&(t.after.apply(t,n),r==="dom"&&n.forEach(i=>{console.log("DOES THIS EVER HAPPEN? renderer.connect()",i),i.connect&&i.connect()}),o+=n.length),o}function tt(t,e,n){a.apply(this,arguments),this.first=t,this.last=document.createTextNode(""),this.first.after(this.last),this.contents=[],this.literally=e.literally||w(x,"data, state, element",e.source,null,e,n);let r="#"+e.template;++s[r].text||(s[r].text=1),++s.Totals.text}ce(tt.prototype,a.prototype,{render:function(){return this.contents.forEach(le),this.contents.length=0,a.prototype.render.apply(this,arguments)},update:function(){return this.contents.forEach(le),this.contents.length=0,a.prototype.update.apply(this,arguments)},resolve:function(t){let e=-1,n="";for(;t[++e]!==void 0;)n=Ke(this,n+t[e],arguments[e+1]);return n&&this.contents.push(n),qr(this.first,this.last,this.contents,this.status)}});var Fr=Object.assign,Vr=[],Gr=d((t,e)=>e,{class:t=>t.classList});function Ur(t){return t&&typeof t=="object"&&t.length!==void 0?t.join(" "):L(t)}function Wr(t){let[e]=t;for(var n="",r=-1,o;e[++r]!==void 0;)e[r]&&(n+=" "+e[r]),o=t[r+1],o!==void 0&&o!==""&&(n+=" "+Ur(o));return n}function $r(t,e,n,r){let o=e.length;for(;o--;)t.indexOf(e[o])!==-1&&e.splice(o,1);return e.length&&(t.remove.apply(t,e),++r),t.add.apply(t,n),++r}function bt(t,e){a.apply(this,arguments),this.name=e.name,this.tokens=Gr(t,e.name),this.cached=Vr,this.literally=e.literally||w(x,"data, state, element",e.source,null,e,t),t.setAttribute(this.name,"");let n="#"+e.template;++s[n].class||(s[n].class=1),++s.Totals.class}Fr(bt.prototype,a.prototype,{resolve:function(){let e=Wr(arguments).trim().split(/\s+/),n=$r(this.tokens,this.cached,e,0);return this.cached=e,n}});var en=Object.assign,nn=/^\s*$/,Ir={number:"number",range:"number"};function rn(t,e){return t===void 0?e:t+e}function zr(t){let e=t[0],n=nn.test(e[0])?void 0:e[0],r=0;for(;e[++r]!==void 0;)n=rn(n,t[r]),nn.test(e[r])||(n=rn(n,e[r]));return n}function Xr(t,e,n){if(n===null)throw new Error("VALUE");return e in t?t[e]=n:t.setAttribute(e,n),1}function on(t,e){if(document.activeElement===t)return 0;let n=Ir[t.type];if(e=n===void 0||typeof e===n?e:null,e===t.value||e+""===t.value)return 0;let r=Xr(t,"value",e);return V.changeEvent&&ht(V.changeEvent,t),r}function xt(t,e){a.apply(this,arguments),this.name="value",this.literally=e.literally||w(x,"data, state, element",e.source,null,e,t);let n="#"+e.template;++s[n].value||(s[n].value=1),++s.Totals.value}en(xt.prototype,a.prototype,{resolve:function(){let t=zr(arguments);return on(this.node,t)}});function fe(t,e){a.apply(this,arguments),this.name="value",this.literally=e.literally||w(x,"data, state, element",e.source,null,e,t);let n="#"+e.template;++s[n].value||(s[n].value=1)}en(fe.prototype,a.prototype,{resolve:function(){let t=F(arguments);return on(this.node,t)}});var sn=document.createElement("textarea");function vt(t){return sn.innerHTML=t,sn.value}var Jr=Array.prototype,pe=/\$\{/;function $(t,e,n,r,o,i){!r||!pe.test(r)||(i.source=r,i.name=o,t.push(new e(n,i)))}function un(t,e,n,r){$(t,dt,n,r.value,r.localName,e)}function de(t,e,n,r){$(t,mt,n,r.value,r.localName,e)}function Qr(t,e,n,r){$(t,bt,n,r.value,r.localName,e)}function Yr(t,e,n,r){$(t,xt,n,r.value,"value",e)}function me(t,e,n,r){$(t,fe,n,r.value,"value",e)}var Zr=d((t,e,n,r)=>r.localName,{checked:function(e,n,r,o){$(e,gt,r,o.value,"checked",n)},class:Qr,datetime:function(e,n,r,o){},disabled:de,hidden:de,"inner-content":function(t,e,n,r){let o=r.value;!o||!pe.test(o)||(n.removeAttribute(r.localName),e.source=vt(o),e.name="innerHTML",t.push(new tt(n,e)))},required:de,value:d((t,e,n,r)=>""+n.type,{text:me,search:me,"select-one":me,default:Yr,undefined:un}),default:un});function Kr(t,e,n){let r=Jr.slice.apply(n.attributes);for(var o=-1,i;i=r[++o];)Zr(t,e,n,i)}function he(t,e,n){let r=n.childNodes;if(r){let o=e.path,i=-1;for(;r[++i];)e.path=o?o+"."+i:""+i,cn(t,e,r[i],n);e.path=o}return t}var to=d((t,e,n)=>n.tagName.toLowerCase(),{defs:l,default:(t,e,n)=>(he(t,e,n),Kr(t,e,n),t)}),cn=d((t,e,n)=>St(n),{comment:l,element:to,fragment:he,text:(t,e,n,r)=>{let o=n.nodeValue;return o&&pe.test(o)&&(e.source=vt(o),e.name=null,t.push(new tt(n,e,r))),t},doctype:l,document:(t,e,n)=>(he(t,e,n),t),default:()=>{throw new Error("Node not compileable")}}),an=cn;var eo=Object.assign,jt={};function no(t,e){return/^[a-zA-Z]/.test(e)?t:t.childNodes[e]}function ro(t,e){return t.split(/\./).reduce(no,e)}function ln(t){if(!ot(t))return!1;let e=t.nodeValue;return/^\s*/.exec(e)[0].length===e.length}function oo(t){let e=t.childNodes[0],n=t.childNodes[t.childNodes.length-1];ln(e)||t.prepend(document.createTextNode("")),ln(n)||t.append(document.createTextNode(""))}function io(t){let e=ro(t.path,this.content),n=ot(e)?e.parentNode:e;return new t.constructor(e,t,n)}function A(t){let e=typeof t=="string"?t:At(t);if(this.id=++D.count,this.observables=T,jt[e]){let n=jt[e].template;this.template=n,this.content=n.content.cloneNode(!0),this.first=this.content.childNodes[0],this.last=this.content.childNodes[this.content.childNodes.length-1],this.contents=jt[e].contents.map(io,this),++s["#"+e].template,++s.Totals.template;return}t=typeof t=="string"?document.getElementById(t):t,oo(t.content),this.template=t,this.content=t.content.cloneNode(!0),this.first=this.content.childNodes[0],this.last=this.content.childNodes[this.content.childNodes.length-1],s["#"+e]={template:1},++s.Totals.template,this.contents=an([],{template:e,path:""},this.content,t.content),jt[e]=this}function fn(t){t.stop()}eo(A.prototype,{render:function(t){this.observables.forEach(fn),this.observables=T;let e=t?g(t):null;return e===this.data?Promise.reject("Attempt to render with same object as last render"):(this.data=e,a.prototype.render.apply(this,arguments))},update:function(t){if(!t){let o=[],i=this.first;for(;i!==this.last;)i=i.nextSibling,o.push(i);this.content.append.apply(this.content,o);return}let e=g(t),n=k(e),r=this.contents;return r.forEach(o=>o.update(n,e)),this.content.firstChild&&this.first!==this.content.firstChild&&this.first.after(this.content),this.observables=n?r.flatMap(o=>o.paths.map(i=>zt(i,e,rt(i,e)).each(c=>o.render(n)))):T,this.content},connect:a.prototype.connect,stop:function(){return this.observables.forEach(fn),this.observables=T,a.prototype.stop.apply(this,arguments)},remove:function(){return pt(this.first,this.last)},replaceWith:function(){return this.first.before.apply(this.first,arguments),this.remove()}});function so(t,e){if(!/^#/.test(t))return nt(t).then(Ot);let n=new A(t.slice(1));if(typeof e=="string")return S(e).then(o=>n.render(o)).then(()=>n);let r=g(e);return r&&r.then?r.then(o=>n.render(o)).then(()=>n):n.render(r||{}).then(()=>n)}var pn=p(so);var dn=l;var m=Symbol("internals"),M=Symbol("shadow"),mn=Object.defineProperties,uo={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},co={type:{value:"text"},name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[m].form}},labels:{get:function(){return this[m].labels}},validity:{get:function(){return this[m].validity}},validationMessage:{get:function(){return this[m].validationMessage}},willValidate:{get:function(){return this[m].willValidate}},checkValidity:{value:function(){return this[m].checkValidity()}},reportValidity:{value:function(){return this[m].reportValidity()}}},ao={},hn={once:!0},lo=0,gn=!1;function fo(t){return uo[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var po=it(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function mo(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function ho(t,e){t._initialLoad=!0;let n=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(e.stylesheet){let r=W("link",{rel:"stylesheet",href:e.stylesheet});n.append(r)}return t[M]=n,n}function go(t){if(t.attachInternals)return t.attachInternals();let e=W("input",{type:"hidden",name:t.name});return e.setFormValue=function(n){this.value=n},e}function yo(t){t._initialAttributes={},t._n=0}function wo(t,e,n){let r=t._initialAttributes;for(;t._n<e.length&&r[e[t._n]]!==void 0;)n[e[t._n]].call(t,r[e[t._n]]),++t._n}function yn(t,e,n){if(!t._initialAttributes)return;let r=t._initialAttributes;for(;t._n<e.length;)r[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,r[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function bo(t){return!!t.attribute}function xo(t){return t.set||t.get||t.hasOwnProperty("value")}function wn(t,e){return bo(e[1])&&(t.attributes[e[0]]=e[1].attribute),xo(e[1])&&(t.properties[e[0]]=e[1]),t}function ge(t,e,n){let{name:r,tag:o}=po(t),i=typeof o=="string"?fo(o):HTMLElement,{attributes:c,properties:E}=n?Object.entries(n).reduce(wn,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(wn,{attributes:{},properties:{}}):ao;function y(){let u=Reflect.construct(i,arguments,y),b=e.construct&&e.construct.length>lo?ho(u,e):void 0;return y.formAssociated&&(u[m]=go(u)),o&&(gn=!0),e.construct&&e.construct.call(u,b,u[m]),c&&(yo(u),Promise.resolve(1).then(function(){yn(u,y.observedAttributes,c)})),E&&Object.keys(E).reduce(mo,u),u}let C=y.prototype=Object.create(i.prototype,E);return E&&E.value&&(y.formAssociated=!0,mn(C,co),(e.enable||e.disable)&&(C.formDisabledCallback=function(u){return u?e.disable&&e.disable.call(this,this[M],this[m]):e.enable&&e.enable.call(this,this[M],this[m])}),e.reset&&(C.formResetCallback=function(){return e.reset.call(this,this[M],this[m])}),e.restore&&(C.formStateRestoreCallback=function(){return e.restore.call(this,this[M],this[m])})),c&&(y.observedAttributes=Object.keys(c),C.attributeChangedCallback=function(u,b,O){if(!this._initialAttributes)return c[u].call(this,O);this._initialAttributes[u]=O,wo(this,y.observedAttributes,c)}),C.connectedCallback=function(){let u=this,b=u[M],O=u[m];if(u._initialAttributes&&yn(u,y.observedAttributes,c),u[m]&&!u.attachInternals&&u.appendChild(u[m]),u._initialLoad){let I=b.querySelectorAll('link[rel="stylesheet"]');if(I.length){let bn=0,Et=I.length,ye=function(Ao){++bn>=I.length&&(delete u._initialLoad,e.load&&e.load.call(u,b))};for(;Et--;)I[Et].addEventListener("load",ye,hn),I[Et].addEventListener("error",function(we){ye(we)},hn);e.connect&&e.connect.call(this,b,O)}else e.connect&&e.connect.call(this,b,O),e.load&&e.load.call(this,b,O)}else e.connect&&e.connect.call(this,b,O)},e.disconnect&&(C.disconnectedCallback=function(){return e.disconnect.call(this,this[M],this[m])}),dn("element()","<"+(o?o+" is="+r+"":r)+">"),window.customElements.define(r,y,o&&{extends:o}),o&&!gn&&document.querySelectorAll('[is="'+r+'"]').forEach(u=>{mn(u,E),e.construct&&e.construct.apply(u);let b;for(b in c){let O=u.attributes[b];O&&c[b].call(u,O.value)}e.connect&&e.connect.apply(u)}),y}var vo=/^\/|\.|^https?:\/\//;function jo(t){try{return JSON.parse(t)}catch(e){return t}}function Eo(t){return vo.test(t)?S(t):jo(t)}function To(t,e){let n={},r=t.length;for(;r--;)n[t[r]]=e[r];return n}ge("<literal-include>",{construct:function(){let t=Object.keys(this.dataset),e=Object.values(this.dataset),n=t.length?Promise.all(e.map(Eo)).then(r=>To(t,r)):new Promise((r,o)=>{this.resolveData=r,this.rejectData=o});new Promise((r,o)=>{this.resolveSrc=r,this.rejectSrc=o}).then(r=>n.then(o=>{let i=new A(r);i.render(o).then(()=>{this.replaceWith(i.content),i.connect()}).catch(l),this.renderer=i})).catch(l)},connect:function(){this.resolveData&&this.resolveData({})}},{data:{attribute:function(t){this.data=t},get:function(){if(this.renderer)return this.renderer.data},set:function(t){if(this.renderer){t?typeof t=="string"?S(t).then(e=>this.renderer.render(e)):this.renderer.render(t):this.renderer.render(null);return}if(!this.resolveData)throw new Error("<literal-include> may possess either data-* attributes or a single data attribute, not both");if(t)typeof t=="string"?this.resolveData(S(t)):this.resolveData(t);else return}},src:{attribute:function(t){if(!t)return this.rejectSrc('<literal-include> source src="'+t+'" is empty');let e=t.replace(/^#/,""),n=document.getElementById(e);if(!n)return this.rejectSrc("<literal-include> src template not found");this.resolveSrc(n)}}});var Oo={renderers:s};Zt("include",pn);Zt("request",S);export{k as Observer,A as Template,Oo as analytics,lt as compiled,zt as observe,Zt as register};
//# sourceMappingURL=module.js.map