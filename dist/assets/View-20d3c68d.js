import{j as R,a as Z,R as q,r as Ye}from"./index-cb346ee5.js";const Ae=({children:e,type:t,align:n})=>R("p",{className:`typography ${t} ${n}`,children:e});function je({children:e,type:t,actionFunc:n,id:r}){return R("button",{className:`button ${t}`,type:"button",onClick:()=>n(r),children:e})}const xt=({deleteAction:e,makeImportantAction:t,important:n,content:r,id:s})=>R("div",{className:"card",children:Z("div",{className:"card-content",children:[R(Ae,{type:`body1 capitalize ${n?"important":""}`,align:"left",children:r}),Z("div",{className:"btn-group",children:[R(je,{type:"detail",actionFunc:t,id:s,children:"Make Important"}),R(je,{type:"delete",actionFunc:e,id:s,children:"Delete"})]})]})}),Ct=()=>R(Ae,{type:"head2 uppercase",align:"left",children:"Number of notes: 12"}),_t=({addNote:e})=>{const[t,n]=q.useState("");return Z("div",{className:"note",children:[R("input",{type:"text",name:"note",id:"note",onChange:r=>n(r.target.value)}),R("button",{type:"submit",onClick:()=>e(t),children:"Add"})]})};function Ze(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:Te}=Object,ge=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>ge(t)===e),te=e=>t=>typeof t===e,{isArray:M}=Array,V=te("undefined");function Pt(e){return e!==null&&!V(e)&&e.constructor!==null&&!V(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tt=C("ArrayBuffer");function Dt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tt(e.buffer),t}const Ft=te("string"),F=te("function"),nt=te("number"),Ne=e=>e!==null&&typeof e=="object",Lt=e=>e===!0||e===!1,G=e=>{if(ge(e)!=="object")return!1;const t=Te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ut=C("Date"),Bt=C("File"),It=C("Blob"),jt=C("FileList"),Mt=e=>Ne(e)&&F(e.pipe),Ht=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||et.call(e)===t||F(e.toString)&&e.toString()===t)},vt=C("URLSearchParams"),kt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function rt(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const st=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ot=e=>!V(e)&&e!==st;function me(){const{caseless:e}=ot(this)&&this||{},t={},n=(r,s)=>{const i=e&&rt(t,s)||s;G(t[i])&&G(r)?t[i]=me(t[i],r):G(r)?t[i]=me({},r):M(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&J(arguments[r],n);return t}const qt=(e,t,n,{allOwnKeys:r}={})=>(J(t,(s,i)=>{n&&F(s)?e[i]=Ze(s,n):e[i]=s},{allOwnKeys:r}),e),Vt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Jt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&Te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$t=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wt=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!nt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Te(Uint8Array)),Gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Xt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Qt=C("HTMLFormElement"),Yt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zt=C("RegExp"),it=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},en=e=>{it(e,(t,n)=>{if(F(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(F(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tn=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return M(e)?r(e):r(String(e).split(t)),n},nn=()=>{},rn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ae="abcdefghijklmnopqrstuvwxyz",He="0123456789",at={DIGIT:He,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+He},sn=(e=16,t=at.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function on(e){return!!(e&&F(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const an=e=>{const t=new Array(10),n=(r,s)=>{if(Ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=M(r)?[]:{};return J(r,(o,c)=>{const d=n(o,s+1);!V(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:M,isArrayBuffer:tt,isBuffer:Pt,isFormData:Ht,isArrayBufferView:Dt,isString:Ft,isNumber:nt,isBoolean:Lt,isObject:Ne,isPlainObject:G,isUndefined:V,isDate:Ut,isFile:Bt,isBlob:It,isRegExp:Zt,isFunction:F,isStream:Mt,isURLSearchParams:vt,isTypedArray:Kt,isFileList:jt,forEach:J,merge:me,extend:qt,trim:kt,stripBOM:Vt,inherits:zt,toFlatObject:Jt,kindOf:ge,kindOfTest:C,endsWith:$t,toArray:Wt,forEachEntry:Gt,matchAll:Xt,isHTMLForm:Qt,hasOwnProperty:Me,hasOwnProp:Me,reduceDescriptors:it,freezeMethods:en,toObjectSet:tn,toCamelCase:Yt,noop:nn,toFiniteNumber:rn,findKey:rt,global:st,isContextDefined:ot,ALPHABET:at,generateString:sn,isSpecCompliantForm:on,toJSONObject:an};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ct=E.prototype,ut={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ut[e]={value:e}});Object.defineProperties(E,ut);Object.defineProperty(ct,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,i)=>{const o=Object.create(ct);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),E.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const cn=null;function Ee(e){return a.isPlainObject(e)||a.isArray(e)}function lt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ve(e,t,n){return e?e.concat(t).map(function(s,i){return s=lt(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function un(e){return a.isArray(e)&&!e.some(Ee)}const ln=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ne(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,b){return!a.isUndefined(b[h])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new E("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function f(l,h,b){let S=l;if(l&&!b&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&un(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(S=a.toArray(l)))return h=lt(h),S.forEach(function(U,H){!(a.isUndefined(U)||U===null)&&t.append(o===!0?ve([h],H,i):o===null?h:h+"[]",u(U))}),!1}return Ee(l)?!0:(t.append(ve(b,h,i),u(l)),!1)}const p=[],y=Object.assign(ln,{defaultVisitor:f,convertValue:u,isVisitable:Ee});function m(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(S,A){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(A)?A.trim():A,h,y))===!0&&m(S,h?h.concat(A):[A])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function ke(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function xe(e,t){this._pairs=[],e&&ne(e,this,t)}const ft=xe.prototype;ft.append=function(t,n){this._pairs.push([t,n])};ft.toString=function(t){const n=t?function(r){return t.call(this,r,ke)}:ke;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function fn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dt(e,t,n){if(!t)return e;const r=n&&n.encode||fn,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new xe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class dn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qe=dn,pt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pn=typeof URLSearchParams<"u"?URLSearchParams:xe,hn=typeof FormData<"u"?FormData:null,mn=typeof Blob<"u"?Blob:null,En=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),yn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:pn,FormData:hn,Blob:mn},isStandardBrowserEnv:En,isStandardBrowserWebWorkerEnv:yn,protocols:["http","https","file","blob","url","data"]};function wn(e,t){return ne(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ht(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Sn(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(bn(r),s,n,0)}),n}return null}const On={"Content-Type":void 0};function Rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:pt,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ht(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ne(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Rn(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){re.headers[t]={}});a.forEach(["post","put","patch"],function(t){re.headers[t]=a.merge(On)});const Ce=re,An=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&An[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ve=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function X(e){return e===!1||e==null?e:a.isArray(e)?e.map(X):String(e)}function gn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Nn(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ce(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class se{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,u){const f=k(d);if(!f)throw new Error("header name must be a non-empty string");const p=a.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=X(c))}const o=(c,d)=>a.forEach(c,(u,f)=>i(u,f,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Nn(t)?o(Tn(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return gn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=k(o),o){const c=a.findKey(r,o);c&&(!n||ce(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ce(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=X(s),delete n[i];return}const c=t?xn(i):String(i).trim();c!==i&&delete n[i],n[c]=X(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ve]=this[Ve]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=k(o);r[c]||(Cn(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(se.prototype);a.freezeMethods(se);const x=se;function ue(e,t){const n=this||Ce,r=t||n,s=x.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function mt(e){return!!(e&&e.__CANCEL__)}function $(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits($,E,{__CANCEL__:!0});function _n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Fn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Et(e,t){return e&&!Dn(t)?Fn(e,t):t}const Ln=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Un(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Bn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),f=r[i];o||(o=u),n[s]=d,r[s]=u;let p=i,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const m=f&&u-f;return m?Math.round(y*1e3/m):void 0}}function ze(e,t){let n=0;const r=Bn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),u=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const In=typeof XMLHttpRequest<"u",jn=In&&function(e){return new Promise(function(n,r){let s=e.data;const i=x.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+l))}const f=Et(e.baseURL,e.url);u.open(e.method.toUpperCase(),dt(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const m=x.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};_n(function(S){n(S),d()},function(S){r(S),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new E("Request aborted",E.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||pt;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new E(l,h.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,u)),u=null},T.isStandardBrowserEnv){const m=(e.withCredentials||Ln(f))&&e.xsrfCookieName&&Pn.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(l,h){u.setRequestHeader(h,l)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ze(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ze(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=m=>{u&&(r(!m||m.type?new $(null,e,u):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Un(f);if(y&&T.protocols.indexOf(y)===-1){r(new E("Unsupported protocol "+y+":",E.ERR_BAD_REQUEST,e));return}u.send(s||null)})},Q={http:cn,xhr:jn};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Mn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?Q[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(Q,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Q};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $(null,e)}function Je(e){return le(e),e.headers=x.from(e.headers),e.data=ue.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Mn.getAdapter(e.adapter||Ce.adapter)(e).then(function(r){return le(e),r.data=ue.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return mt(r)||(le(e),r&&r.response&&(r.response.data=ue.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const $e=e=>e instanceof x?e.toJSON():e;function I(e,t){t=t||{};const n={};function r(u,f,p){return a.isPlainObject(u)&&a.isPlainObject(f)?a.merge.call({caseless:p},u,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(u,f,p){if(a.isUndefined(f)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,f,p)}function i(u,f){if(!a.isUndefined(f))return r(void 0,f)}function o(u,f){if(a.isUndefined(f)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function c(u,f,p){if(p in t)return r(u,f);if(p in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,f)=>s($e(u),$e(f),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const p=d[f]||s,y=p(e[f],t[f],f);a.isUndefined(y)&&p!==c||(n[f]=y)}),n}const yt="1.3.4",_e={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_e[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const We={};_e.transitional=function(t,n,r){function s(i,o){return"[Axios v"+yt+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new E(s(o," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!We[o]&&(We[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Hn(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new E("option "+i+" must be "+d,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+i,E.ERR_BAD_OPTION)}}const ye={assertOptions:Hn,validators:_e},_=ye.validators;class ee{constructor(t){this.defaults=t,this.interceptors={request:new qe,response:new qe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=I(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ye.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!==void 0&&ye.assertOptions(s,{encode:_.function,serialize:_.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete i[l]}),n.headers=x.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let f,p=0,y;if(!d){const l=[Je.bind(this),void 0];for(l.unshift.apply(l,c),l.push.apply(l,u),y=l.length,f=Promise.resolve(n);p<y;)f=f.then(l[p++],l[p++]);return f}y=c.length;let m=n;for(p=0;p<y;){const l=c[p++],h=c[p++];try{m=l(m)}catch(b){h.call(this,b);break}}try{f=Je.call(this,m)}catch(l){return Promise.reject(l)}for(p=0,y=u.length;p<y;)f=f.then(u[p++],u[p++]);return f}getUri(t){t=I(this.defaults,t);const n=Et(t.baseURL,t.url);return dt(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){ee.prototype[t]=function(n,r){return this.request(I(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(I(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ee.prototype[t]=n(),ee.prototype[t+"Form"]=n(!0)});const Y=ee;class Pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new $(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Pe(function(s){t=s}),cancel:t}}}const vn=Pe;function kn(e){return function(n){return e.apply(null,n)}}function qn(e){return a.isObject(e)&&e.isAxiosError===!0}const we={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(we).forEach(([e,t])=>{we[t]=e});const Vn=we;function wt(e){const t=new Y(e),n=Ze(Y.prototype.request,t);return a.extend(n,Y.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return wt(I(e,s))},n}const w=wt(Ce);w.Axios=Y;w.CanceledError=$;w.CancelToken=vn;w.isCancel=mt;w.VERSION=yt;w.toFormData=ne;w.AxiosError=E;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=kn;w.isAxiosError=qn;w.mergeConfig=I;w.AxiosHeaders=x;w.formToJSON=e=>ht(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=Vn;w.default=w;const zn=w;var Ke={},Jn={get exports(){return Ke},set exports(e){Ke=e}},bt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=Ye;function $n(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:$n,Kn=j.useState,Gn=j.useEffect,Xn=j.useLayoutEffect,Qn=j.useDebugValue;function Yn(e,t){var n=t(),r=Kn({inst:{value:n,getSnapshot:t}}),s=r[0].inst,i=r[1];return Xn(function(){s.value=n,s.getSnapshot=t,fe(s)&&i({inst:s})},[e,n,t]),Gn(function(){return fe(s)&&i({inst:s}),e(function(){fe(s)&&i({inst:s})})},[e]),Qn(n),n}function fe(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Zn(e,t){return t()}var er=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Zn:Yn;bt.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:er;(function(e){e.exports=bt})(Jn);const P=new WeakMap,de={},W={},D=()=>{},N=D(),pe=Object,L=e=>e===N,B=e=>typeof e=="function",oe=(e,t)=>({...e,...t}),St="undefined",De=typeof window!=St,be=typeof document!=St,tr=(e,t)=>{const n=P.get(e);return[()=>e.get(t)||de,r=>{if(!L(t)){const s=e.get(t);t in W||(W[t]=s),n[5](t,oe(s,r),s||de)}},n[6],()=>!L(t)&&t in W?W[t]:e.get(t)||de]},K=new WeakMap;let nr=0;const z=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let s,i;if(pe(e)===e&&!r&&n!=RegExp){if(s=K.get(e),s)return s;if(s=++nr+"~",K.set(e,s),n==Array){for(s="@",i=0;i<e.length;i++)s+=z(e[i])+",";K.set(e,s)}if(n==pe){s="#";const o=pe.keys(e).sort();for(;!L(i=o.pop());)L(e[i])||(s+=i+":"+z(e[i])+",");K.set(e,s)}}else s=r?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return s};let Se=!0;const rr=()=>Se,[Oe,Re]=De&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[D,D],sr=()=>{const e=be&&document.visibilityState;return L(e)||e!=="hidden"},or=e=>(be&&document.addEventListener("visibilitychange",e),Oe("focus",e),()=>{be&&document.removeEventListener("visibilitychange",e),Re("focus",e)}),ir=e=>{const t=()=>{Se=!0,e()},n=()=>{Se=!1};return Oe("online",t),Oe("offline",n),()=>{Re("online",t),Re("offline",n)}},ar={isOnline:rr,isVisible:sr},cr={initFocus:or,initReconnect:ir};q.useId;const Ot=!De||"Deno"in window,he=typeof navigator<"u"&&navigator.connection,Ge=!Ot&&he&&(["slow-2g","2g"].includes(he.effectiveType)||he.saveData),Rt=e=>{if(B(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?z(e):"",[e,t]};let ur=0;const Xe=()=>++ur,lr=0,fr=1,dr=2;async function pr(...e){const[t,n,r,s]=e,i=oe({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let o=i.populateCache;const c=i.rollbackOnError;let d=i.optimisticData;const u=i.revalidate!==!1,f=m=>typeof c=="function"?c(m):c!==!1,p=i.throwOnError;if(B(n)){const m=n,l=[],h=t.keys();for(let b=h.next();!b.done;b=h.next()){const S=b.value;!S.startsWith("$inf$")&&m(t.get(S)._k)&&l.push(S)}return Promise.all(l.map(y))}return y(n);async function y(m){const[l]=Rt(m);if(!l)return;const[h,b]=tr(t,l),[S,A,U]=P.get(t),H=S[l],Fe=()=>u&&(delete U[l],H&&H[0])?H[0](dr).then(()=>h().data):h().data;if(e.length<3)return Fe();let O=r,g;const Le=Xe();A[l]=[Le,0];const Ue=!L(d),Be=h(),gt=Be.data,Ie=Be._c,v=L(Ie)?gt:Ie;if(Ue&&(d=B(d)?d(v):d,b({data:d,_c:v})),B(O))try{O=O(v)}catch(ie){g=ie}if(O&&B(O.then))if(O=await O.catch(ie=>{g=ie}),Le!==A[l][0]){if(g)throw g;return O}else g&&Ue&&f(g)&&(o=!0,O=v,b({data:O,_c:N}));o&&(g||(B(o)&&(O=o(O,v)),b({data:O,_c:N}))),A[l][1]=Xe();const Nt=await Fe();if(b({_c:N}),g){if(p)throw g;return}return o?Nt:O}}const Qe=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},hr=(e,t)=>{if(!P.has(e)){const n=oe(cr,t),r={},s=pr.bind(N,e);let i=D;const o={},c=(f,p)=>{const y=o[f]||[];return o[f]=y,y.push(p),()=>y.splice(y.indexOf(p),1)},d=(f,p,y)=>{e.set(f,p);const m=o[f];if(m)for(let l=m.length;l--;)m[l](p,y)},u=()=>{if(!P.has(e)&&(P.set(e,[r,{},{},{},s,d,c]),!Ot)){const f=n.initFocus(setTimeout.bind(N,Qe.bind(N,r,lr))),p=n.initReconnect(setTimeout.bind(N,Qe.bind(N,r,fr)));i=()=>{f&&f(),p&&p(),P.delete(e)}}};return u(),[e,s,u,i]}return[e,P.get(e)[4]]},mr=(e,t,n,r,s)=>{const i=n.errorRetryCount,o=s.retryCount,c=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!L(i)&&o>i||setTimeout(r,c,s)},Er=(e,t)=>z(e)==z(t),[At,yr]=hr(new Map);oe({onLoadingSlow:D,onSuccess:D,onError:D,onErrorRetry:mr,onDiscarded:D,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ge?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ge?5e3:3e3,compare:Er,isPaused:()=>!1,cache:At,mutate:yr,fallback:{}},ar);Ye.createContext({});const Tt=De&&window.__SWR_DEVTOOLS_USE__,wr=Tt?window.__SWR_DEVTOOLS_USE__:[],br=()=>{Tt&&(window.__SWR_DEVTOOLS_REACT__=q)},Sr=e=>(t,n,r)=>e(t,n&&((...i)=>{const o=Rt(t)[0],[,,,c]=P.get(At),d=c[o];return d?(delete c[o],d):n(...i)}),r);wr.concat(Sr);br();const Rr=()=>{const[e,t]=q.useState(),n=()=>(e.length>0?Math.max(...e.map(c=>c.id)):0)+1,r=o=>{const c={id:n(),content:o,important:!1},d=[...e].concat(c);t(d)},s=o=>{const c=[...e];for(let d=0;d<c.length;d++)c[d].id===o&&(c[d].important=!c[d].important);t([...c])},i=o=>{console.log("Delete"+o)};return q.useEffect(()=>{(async()=>{const c=await zn.get("http://localhost:3001/api/notes");t(c.data)})()},[]),Z("section",{className:"note-list",children:[R("div",{className:"note-list-title",children:R(Ae,{type:"head1",align:"center",children:"important notes"})}),R(Ct,{}),R(_t,{addNote:r}),e==null?void 0:e.map(o=>R(xt,{id:o.id,content:o.content,important:o.important,deleteAction:i,makeImportantAction:s},o.id))]})};export{Rr as default};
