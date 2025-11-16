const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-BB7k4JRf.js","assets/Login-CSRTZrbo.css","assets/Register-Dw0F7dP8.js","assets/Register-NG0AGFD-.css","assets/ForgotPassword-axLMQUxE.js","assets/ForgotPassword-DegqAYYw.css","assets/Dashboard-CWrXROuy.js","assets/Dashboard-BQt_LVxy.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},on=[],ze=()=>{},sa=()=>!1,Mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zs=t=>t.startsWith("onUpdate:"),ge=Object.assign,Js=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tl=Object.prototype.hasOwnProperty,Q=(t,e)=>Tl.call(t,e),V=Array.isArray,an=t=>Ur(t)==="[object Map]",ia=t=>Ur(t)==="[object Set]",H=t=>typeof t=="function",fe=t=>typeof t=="string",kt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",oa=t=>(oe(t)||H(t))&&H(t.then)&&H(t.catch),aa=Object.prototype.toString,Ur=t=>aa.call(t),Al=t=>Ur(t).slice(8,-1),ca=t=>Ur(t)==="[object Object]",Ys=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rn=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rl=/-\w/g,xe=Fr(t=>t.replace(Rl,e=>e.slice(1).toUpperCase())),Cl=/\B([A-Z])/g,Yt=Fr(t=>t.replace(Cl,"-$1").toLowerCase()),Br=Fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qr=Fr(t=>t?`on${Br(t)}`:""),Pt=(t,e)=>!Object.is(t,e),lr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},la=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ni;const Vr=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qs(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Dl(r):Qs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||oe(t))return t}const Pl=/;(?![^(]*\))/g,Ol=/:([^]+)/,Nl=/\/\*[^]*?\*\//g;function Dl(t){const e={};return t.replace(Nl,"").split(Pl).forEach(n=>{if(n){const r=n.split(Ol);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zs(t){let e="";if(fe(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Zs(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xl=qs(kl);function ua(t){return!!t||t===""}const fa=t=>!!(t&&t.__v_isRef===!0),Ll=t=>fe(t)?t:t==null?"":V(t)||oe(t)&&(t.toString===aa||!H(t.toString))?fa(t)?Ll(t.value):JSON.stringify(t,da,2):String(t),da=(t,e)=>fa(e)?da(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Zr(r,i)+" =>"]=s,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zr(n))}:kt(e)?Zr(e):oe(e)&&!V(e)&&!ca(e)?String(e):e,Zr=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class ha{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=de,!e&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=de;try{return de=this,e()}finally{de=n}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){this._on>0&&--this._on===0&&(de=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pa(t){return new ha(t)}function ga(){return de}function Ml(t,e=!1){de&&de.cleanups.push(t)}let re;const es=new WeakSet;class ma{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,es.has(this)&&(es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||va(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Di(this),ya(this);const e=re,n=Le;re=this,Le=!0;try{return this.fn()}finally{ba(this),re=e,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ni(e);this.deps=this.depsTail=void 0,Di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Es(this)&&this.run()}get dirty(){return Es(this)}}let _a=0,Cn,Pn;function va(t,e=!1){if(t.flags|=8,e){t.next=Pn,Pn=t;return}t.next=Cn,Cn=t}function ei(){_a++}function ti(){if(--_a>0)return;if(Pn){let e=Pn;for(Pn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cn;){let e=Cn;for(Cn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ya(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ba(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ni(r),Ul(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Es(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ea(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ea(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fn)||(t.globalVersion=Fn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Es(t))))return;t.flags|=2;const e=t.dep,n=re,r=Le;re=t,Le=!0;try{ya(t);const s=t.fn(t._value);(e.version===0||Pt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,Le=r,ba(t),t.flags&=-3}}function ni(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ni(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ul(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Le=!0;const Ia=[];function lt(){Ia.push(Le),Le=!1}function ut(){const t=Ia.pop();Le=t===void 0?!0:t}function Di(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Fn=0;class Fl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ri{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!re||!Le||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Fl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,wa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Fn++,this.notify(e)}notify(e){ei();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ti()}}}function wa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vr=new WeakMap,Wt=Symbol(""),Is=Symbol(""),Bn=Symbol("");function he(t,e,n){if(Le&&re){let r=vr.get(t);r||vr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ri),s.map=r,s.key=n),s.track()}}function rt(t,e,n,r,s,i){const o=vr.get(t);if(!o){Fn++;return}const a=c=>{c&&c.trigger()};if(ei(),e==="clear")o.forEach(a);else{const c=V(t),l=c&&Ys(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Bn||!kt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Bn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Wt)),an(t)&&a(o.get(Is)));break;case"delete":c||(a(o.get(Wt)),an(t)&&a(o.get(Is)));break;case"set":an(t)&&a(o.get(Wt));break}}ti()}function Bl(t,e){const n=vr.get(t);return n&&n.get(e)}function Zt(t){const e=J(t);return e===t?e:(he(e,"iterate",Bn),Me(t)?e:e.map(ye))}function si(t){return he(t=J(t),"iterate",Bn),t}const Vl={__proto__:null,[Symbol.iterator](){return ts(this,Symbol.iterator,ye)},concat(...t){return Zt(this).concat(...t.map(e=>V(e)?Zt(e):e))},entries(){return ts(this,"entries",t=>(t[1]=ye(t[1]),t))},every(t,e){return Ze(this,"every",t,e,void 0,arguments)},filter(t,e){return Ze(this,"filter",t,e,n=>n.map(ye),arguments)},find(t,e){return Ze(this,"find",t,e,ye,arguments)},findIndex(t,e){return Ze(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ze(this,"findLast",t,e,ye,arguments)},findLastIndex(t,e){return Ze(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ze(this,"forEach",t,e,void 0,arguments)},includes(...t){return ns(this,"includes",t)},indexOf(...t){return ns(this,"indexOf",t)},join(t){return Zt(this).join(t)},lastIndexOf(...t){return ns(this,"lastIndexOf",t)},map(t,e){return Ze(this,"map",t,e,void 0,arguments)},pop(){return bn(this,"pop")},push(...t){return bn(this,"push",t)},reduce(t,...e){return ki(this,"reduce",t,e)},reduceRight(t,...e){return ki(this,"reduceRight",t,e)},shift(){return bn(this,"shift")},some(t,e){return Ze(this,"some",t,e,void 0,arguments)},splice(...t){return bn(this,"splice",t)},toReversed(){return Zt(this).toReversed()},toSorted(t){return Zt(this).toSorted(t)},toSpliced(...t){return Zt(this).toSpliced(...t)},unshift(...t){return bn(this,"unshift",t)},values(){return ts(this,"values",ye)}};function ts(t,e,n){const r=si(t),s=r[e]();return r!==t&&!Me(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Hl=Array.prototype;function Ze(t,e,n,r,s,i){const o=si(t),a=o!==t&&!Me(t),c=o[e];if(c!==Hl[e]){const f=c.apply(t,i);return a?ye(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,ye(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function ki(t,e,n,r){const s=si(t);let i=n;return s!==t&&(Me(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ye(a),c,t)}),s[e](i,...r)}function ns(t,e,n){const r=J(t);he(r,"iterate",Bn);const s=r[e](...n);return(s===-1||s===!1)&&ai(n[0])?(n[0]=J(n[0]),r[e](...n)):s}function bn(t,e,n=[]){lt(),ei();const r=J(t)[e].apply(t,n);return ti(),ut(),r}const jl=qs("__proto__,__v_isRef,__isVue"),Sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function Wl(t){kt(t)||(t=String(t));const e=J(this);return he(e,"has",t),e.hasOwnProperty(t)}class Ta{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zl:Pa:i?Ca:Ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){let c;if(o&&(c=Vl[n]))return c;if(n==="hasOwnProperty")return Wl}const a=Reflect.get(e,n,le(e)?e:r);if((kt(n)?Sa.has(n):jl(n))||(s||he(e,"get",n),i))return a;if(le(a)){const c=o&&Ys(n)?a:a.value;return s&&oe(c)?Ss(c):c}return oe(a)?s?Ss(a):zn(a):a}}class Aa extends Ta{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=qt(i);if(!Me(r)&&!qt(r)&&(i=J(i),r=J(r)),!V(e)&&le(i)&&!le(r))return c||(i.value=r),!0}const o=V(e)&&Ys(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,le(e)?e:s);return e===J(s)&&(o?Pt(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kt(n)||!Sa.has(n))&&he(e,"has",n),r}ownKeys(e){return he(e,"iterate",V(e)?"length":Wt),Reflect.ownKeys(e)}}class $l extends Ta{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gl=new Aa,Kl=new $l,ql=new Aa(!0);const ws=t=>t,sr=t=>Reflect.getPrototypeOf(t);function zl(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=an(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ws:e?Ts:ye;return!e&&he(i,"iterate",c?Is:Wt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jl(t,e){const n={get(s){const i=this.__v_raw,o=J(i),a=J(s);t||(Pt(s,a)&&he(o,"get",s),he(o,"get",a));const{has:c}=sr(o),l=e?ws:t?Ts:ye;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&he(J(s),"iterate",Wt),s.size},has(s){const i=this.__v_raw,o=J(i),a=J(s);return t||(Pt(s,a)&&he(o,"has",s),he(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=J(a),l=e?ws:t?Ts:ye;return!t&&he(c,"iterate",Wt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ge(n,t?{add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear")}:{add(s){!e&&!Me(s)&&!qt(s)&&(s=J(s));const i=J(this);return sr(i).has.call(i,s)||(i.add(s),rt(i,"add",s,s)),this},set(s,i){!e&&!Me(i)&&!qt(i)&&(i=J(i));const o=J(this),{has:a,get:c}=sr(o);let l=a.call(o,s);l||(s=J(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Pt(i,u)&&rt(o,"set",s,i):rt(o,"add",s,i),this},delete(s){const i=J(this),{has:o,get:a}=sr(i);let c=o.call(i,s);c||(s=J(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&rt(i,"delete",s,void 0),l},clear(){const s=J(this),i=s.size!==0,o=s.clear();return i&&rt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zl(s,t,e)}),n}function ii(t,e){const n=Jl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const Yl={get:ii(!1,!1)},Xl={get:ii(!1,!0)},Ql={get:ii(!0,!1)};const Ra=new WeakMap,Ca=new WeakMap,Pa=new WeakMap,Zl=new WeakMap;function eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(t){return t.__v_skip||!Object.isExtensible(t)?0:eu(Al(t))}function zn(t){return qt(t)?t:oi(t,!1,Gl,Yl,Ra)}function Oa(t){return oi(t,!1,ql,Xl,Ca)}function Ss(t){return oi(t,!0,Kl,Ql,Pa)}function oi(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=tu(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function $t(t){return qt(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function qt(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function ai(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ci(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&la(t,"__v_skip",!0),t}const ye=t=>oe(t)?zn(t):t,Ts=t=>oe(t)?Ss(t):t;function le(t){return t?t.__v_isRef===!0:!1}function cn(t){return Na(t,!1)}function nu(t){return Na(t,!0)}function Na(t,e){return le(t)?t:new ru(t,e)}class ru{constructor(e,n){this.dep=new ri,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Me(e)||qt(e);e=r?e:J(e),Pt(e,n)&&(this._rawValue=e,this._value=r?e:ye(e),this.dep.trigger())}}function Gt(t){return le(t)?t.value:t}const su={get:(t,e,n)=>e==="__v_raw"?t:Gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Da(t){return $t(t)?t:new Proxy(t,su)}function iu(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=au(t,n);return e}class ou{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Bl(J(this._object),this._key)}}function au(t,e,n){const r=t[e];return le(r)?r:new ou(t,e,n)}class cu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ri(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return va(this,!0),!0}get value(){const e=this.dep.track();return Ea(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lu(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new cu(r,s,n)}const or={},yr=new WeakMap;let Vt;function uu(t,e=!1,n=Vt){if(n){let r=yr.get(n);r||yr.set(n,r=[]),r.push(t)}}function fu(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=N=>s?N:Me(N)||s===!1||s===0?st(N,1):st(N);let u,f,p,m,w=!1,C=!1;if(le(t)?(f=()=>t.value,w=Me(t)):$t(t)?(f=()=>l(t),w=!0):V(t)?(C=!0,w=t.some(N=>$t(N)||Me(N)),f=()=>t.map(N=>{if(le(N))return N.value;if($t(N))return l(N);if(H(N))return c?c(N,2):N()})):H(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){lt();try{p()}finally{ut()}}const N=Vt;Vt=u;try{return c?c(t,3,[m]):t(m)}finally{Vt=N}}:f=ze,e&&s){const N=f,j=s===!0?1/0:s;f=()=>st(N(),j)}const F=ga(),D=()=>{u.stop(),F&&F.active&&Js(F.effects,u)};if(i&&e){const N=e;e=(...j)=>{N(...j),D()}}let O=C?new Array(t.length).fill(or):or;const k=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const j=u.run();if(s||w||(C?j.some((ae,z)=>Pt(ae,O[z])):Pt(j,O))){p&&p();const ae=Vt;Vt=u;try{const z=[j,O===or?void 0:C&&O[0]===or?[]:O,m];O=j,c?c(e,3,z):e(...z)}finally{Vt=ae}}}else u.run()};return a&&a(k),u=new ma(f),u.scheduler=o?()=>o(k,!1):k,m=N=>uu(N,!1,u),p=u.onStop=()=>{const N=yr.get(u);if(N){if(c)c(N,4);else for(const j of N)j();yr.delete(u)}},e?r?k(!0):O=u.run():o?o(k.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function st(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,le(t))st(t.value,e,n);else if(V(t))for(let r=0;r<t.length;r++)st(t[r],e,n);else if(ia(t)||an(t))t.forEach(r=>{st(r,e,n)});else if(ca(t)){for(const r in t)st(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&st(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jn(t,e,n,r){try{return r?t(...r):t()}catch(s){Hr(s,e,n)}}function Xe(t,e,n,r){if(H(t)){const s=Jn(t,e,n,r);return s&&oa(s)&&s.catch(i=>{Hr(i,e,n)}),s}if(V(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xe(t[i],e,n,r));return s}}function Hr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){lt(),Jn(i,null,10,[t,c,l]),ut();return}}du(t,n,s,r,o)}function du(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const be=[];let Ge=-1;const ln=[];let It=null,tn=0;const ka=Promise.resolve();let br=null;function li(t){const e=br||ka;return t?e.then(this?t.bind(this):t):e}function hu(t){let e=Ge+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Vn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ui(t){if(!(t.flags&1)){const e=Vn(t),n=be[be.length-1];!n||!(t.flags&2)&&e>=Vn(n)?be.push(t):be.splice(hu(e),0,t),t.flags|=1,xa()}}function xa(){br||(br=ka.then(Ma))}function pu(t){V(t)?ln.push(...t):It&&t.id===-1?It.splice(tn+1,0,t):t.flags&1||(ln.push(t),t.flags|=1),xa()}function xi(t,e,n=Ge+1){for(;n<be.length;n++){const r=be[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function La(t){if(ln.length){const e=[...new Set(ln)].sort((n,r)=>Vn(n)-Vn(r));if(ln.length=0,It){It.push(...e);return}for(It=e,tn=0;tn<It.length;tn++){const n=It[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,tn=0}}const Vn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ma(t){try{for(Ge=0;Ge<be.length;Ge++){const e=be[Ge];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ge<be.length;Ge++){const e=be[Ge];e&&(e.flags&=-2)}Ge=-1,be.length=0,La(),br=null,(be.length||ln.length)&&Ma()}}let Pe=null,Ua=null;function Er(t){const e=Pe;return Pe=t,Ua=t&&t.type.__scopeId||null,e}function gu(t,e=Pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sr(-1);const i=Er(e);let o;try{o=t(...s)}finally{Er(i),r._d&&Sr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function b_(t,e){if(Pe===null)return t;const n=Gr(Pe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=te]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&st(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ft(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(lt(),Xe(c,n,8,[t.el,a,t,e]),ut())}}const mu=Symbol("_vte"),_u=t=>t.__isTeleport,vu=Symbol("_leaveCb");function fi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fa(t,e){return H(t)?ge({name:t.name},e,{setup:t}):t}function Ba(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ir=new WeakMap;function On(t,e,n,r,s=!1){if(V(t)){t.forEach((w,C)=>On(w,e&&(V(e)?e[C]:e),n,r,s));return}if(Nn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&On(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Gr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===te?a.refs={}:a.refs,f=a.setupState,p=J(f),m=f===te?sa:w=>Q(p,w);if(l!=null&&l!==c){if(Li(e),fe(l))u[l]=null,m(l)&&(f[l]=null);else if(le(l)){l.value=null;const w=e;w.k&&(u[w.k]=null)}}if(H(c))Jn(c,a,12,[o,u]);else{const w=fe(c),C=le(c);if(w||C){const F=()=>{if(t.f){const D=w?m(c)?f[c]:u[c]:c.value;if(s)V(D)&&Js(D,i);else if(V(D))D.includes(i)||D.push(i);else if(w)u[c]=[i],m(c)&&(f[c]=u[c]);else{const O=[i];c.value=O,t.k&&(u[t.k]=O)}}else w?(u[c]=o,m(c)&&(f[c]=o)):C&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const D=()=>{F(),Ir.delete(t)};D.id=-1,Ir.set(t,D),Ce(D,n)}else Li(t),F()}}}function Li(t){const e=Ir.get(t);e&&(e.flags|=8,Ir.delete(t))}Vr().requestIdleCallback;Vr().cancelIdleCallback;const Nn=t=>!!t.type.__asyncLoader,Va=t=>t.type.__isKeepAlive;function yu(t,e){Ha(t,"a",e)}function bu(t,e){Ha(t,"da",e)}function Ha(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Va(s.parent.vnode)&&Eu(r,e,n,s),s=s.parent}}function Eu(t,e,n,r){const s=jr(e,t,r,!0);ja(()=>{Js(r[e],s)},n)}function jr(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lt();const a=Yn(n),c=Xe(e,n,t,o);return a(),ut(),c});return r?s.unshift(i):s.push(i),i}}const ht=t=>(e,n=pe)=>{(!jn||t==="sp")&&jr(t,(...r)=>e(...r),n)},Iu=ht("bm"),wu=ht("m"),Su=ht("bu"),Tu=ht("u"),Au=ht("bum"),ja=ht("um"),Ru=ht("sp"),Cu=ht("rtg"),Pu=ht("rtc");function Ou(t,e=pe){jr("ec",t,e)}const Nu="components";function Du(t,e){return xu(Nu,t,!0,e)||t}const ku=Symbol.for("v-ndc");function xu(t,e,n=!0,r=!1){const s=Pe||pe;if(s){const i=s.type;{const a=Sf(i,!1);if(a&&(a===e||a===xe(e)||a===Br(xe(e))))return i}const o=Mi(s[t]||i[t],e)||Mi(s.appContext[t],e);return!o&&r?i:o}}function Mi(t,e){return t&&(t[e]||t[xe(e)]||t[Br(xe(e))])}const As=t=>t?uc(t)?Gr(t):As(t.parent):null,Dn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>As(t.parent),$root:t=>As(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$a(t),$forceUpdate:t=>t.f||(t.f=()=>{ui(t.update)}),$nextTick:t=>t.n||(t.n=li.bind(t.proxy)),$watch:t=>nf.bind(t)}),rs=(t,e)=>t!==te&&!t.__isScriptSetup&&Q(t,e),Lu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rs(r,e))return o[e]=1,r[e];if(s!==te&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==te&&Q(n,e))return o[e]=4,n[e];Rs&&(o[e]=0)}}const u=Dn[e];let f,p;if(u)return e==="$attrs"&&he(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==te&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rs(s,e)?(s[e]=n,!0):r!==te&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==te&&a[0]!=="$"&&Q(t,a)||rs(e,a)||(c=i[0])&&Q(c,a)||Q(r,a)||Q(Dn,a)||Q(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ui(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rs=!0;function Mu(t){const e=$a(t),n=t.proxy,r=t.ctx;Rs=!1,e.beforeCreate&&Fi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:w,activated:C,deactivated:F,beforeDestroy:D,beforeUnmount:O,destroyed:k,unmounted:N,render:j,renderTracked:ae,renderTriggered:z,errorCaptured:G,serverPrefetch:$,expose:se,inheritAttrs:me,components:Ae,directives:Ie,filters:Mt}=e;if(l&&Uu(l,r,null),o)for(const W in o){const Y=o[W];H(Y)&&(r[W]=Y.bind(n))}if(s){const W=s.call(n,n);oe(W)&&(t.data=zn(W))}if(Rs=!0,i)for(const W in i){const Y=i[W],Qe=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):ze,vt=!H(Y)&&H(Y.set)?Y.set.bind(n):ze,Ve=ke({get:Qe,set:vt});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:we=>Ve.value=we})}if(a)for(const W in a)Wa(a[W],r,n,W);if(c){const W=H(c)?c.call(n):c;Reflect.ownKeys(W).forEach(Y=>{ur(Y,W[Y])})}u&&Fi(u,t,"c");function ie(W,Y){V(Y)?Y.forEach(Qe=>W(Qe.bind(n))):Y&&W(Y.bind(n))}if(ie(Iu,f),ie(wu,p),ie(Su,m),ie(Tu,w),ie(yu,C),ie(bu,F),ie(Ou,G),ie(Pu,ae),ie(Cu,z),ie(Au,O),ie(ja,N),ie(Ru,$),V(se))if(se.length){const W=t.exposed||(t.exposed={});se.forEach(Y=>{Object.defineProperty(W,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===ze&&(t.render=j),me!=null&&(t.inheritAttrs=me),Ae&&(t.components=Ae),Ie&&(t.directives=Ie),$&&Ba(t)}function Uu(t,e,n=ze){V(t)&&(t=Cs(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fi(t,e,n){Xe(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wa(t,e,n,r){let s=r.includes(".")?rc(n,r):()=>n[r];if(fe(t)){const i=e[t];H(i)&&kn(s,i)}else if(H(t))kn(s,t.bind(n));else if(oe(t))if(V(t))t.forEach(i=>Wa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&kn(s,i,t)}}function $a(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>wr(c,l,o,!0)),wr(c,e,o)),oe(e)&&i.set(e,c),c}function wr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wr(t,i,n,!0),s&&s.forEach(o=>wr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Fu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fu={data:Bi,props:Vi,emits:Vi,methods:Sn,computed:Sn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Sn,directives:Sn,watch:Vu,provide:Bi,inject:Bu};function Bi(t,e){return e?t?function(){return ge(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Bu(t,e){return Sn(Cs(t),Cs(e))}function Cs(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ge(Object.create(null),t,e):e}function Vi(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:ge(Object.create(null),Ui(t),Ui(e??{})):e}function Vu(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function Ga(){return{app:null,config:{isNativeTag:sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function ju(t,e){return function(r,s=null){H(r)||(r=ge({},r)),s!=null&&!oe(s)&&(s=null);const i=Ga(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Hu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Af,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(l,...f)):H(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||Ne(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,Gr(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xe(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Kt;Kt=l;try{return u()}finally{Kt=f}}};return l}}let Kt=null;function ur(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=lc();if(r||Kt){let s=Kt?Kt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function Wu(){return!!(lc()||Kt)}const Ka={},qa=()=>Object.create(Ka),za=t=>Object.getPrototypeOf(t)===Ka;function $u(t,e,n,r=!1){const s={},i=qa();t.propsDefaults=Object.create(null),Ja(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Oa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Wr(t.emitsOptions,p))continue;const m=e[p];if(c)if(Q(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const w=xe(p);s[w]=Ps(c,a,w,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Ja(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=Yt(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ps(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&rt(t.attrs,"set","")}function Ja(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Rn(c))continue;const l=e[c];let u;s&&Q(s,u=xe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Wr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||te;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ps(s,c,f,l[f],t,!Q(l,f))}}return o}function Ps(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Yn(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Yt(n))&&(r=!0))}return r}const Ku=new WeakMap;function Ya(t,e,n=!1){const r=n?Ku:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[p,m]=Ya(f,e,!0);ge(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,on),on;if(V(i))for(let u=0;u<i.length;u++){const f=xe(i[u]);Hi(f)&&(o[f]=te)}else if(i)for(const u in i){const f=xe(u);if(Hi(f)){const p=i[u],m=o[f]=V(p)||H(p)?{type:p}:ge({},p),w=m.type;let C=!1,F=!0;if(V(w))for(let D=0;D<w.length;++D){const O=w[D],k=H(O)&&O.name;if(k==="Boolean"){C=!0;break}else k==="String"&&(F=!1)}else C=H(w)&&w.name==="Boolean";m[0]=C,m[1]=F,(C||Q(m,"default"))&&a.push(f)}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Hi(t){return t[0]!=="$"&&!Rn(t)}const di=t=>t==="_"||t==="_ctx"||t==="$stable",hi=t=>V(t)?t.map(Ke):[Ke(t)],qu=(t,e,n)=>{if(e._n)return e;const r=gu((...s)=>hi(e(...s)),n);return r._c=!1,r},Xa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(di(s))continue;const i=t[s];if(H(i))e[s]=qu(s,i,r);else if(i!=null){const o=hi(i);e[s]=()=>o}}},Qa=(t,e)=>{const n=hi(e);t.slots.default=()=>n},Za=(t,e,n)=>{for(const r in e)(n||!di(r))&&(t[r]=e[r])},zu=(t,e,n)=>{const r=t.slots=qa();if(t.vnode.shapeFlag&32){const s=e._;s?(Za(r,e,n),n&&la(r,"_",s,!0)):Xa(e,r)}else e&&Qa(t,e)},Ju=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Za(s,e,n):(i=!e.$stable,Xa(e,s)),o=e}else e&&(Qa(t,e),o={default:1});if(i)for(const a in s)!di(a)&&o[a]==null&&delete s[a]},Ce=ff;function Yu(t){return Xu(t)}function Xu(t,e){const n=Vr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=ze,insertStaticContent:w}=t,C=(d,h,g,v=null,b=null,_=null,T=void 0,S=null,I=!!h.dynamicChildren)=>{if(d===h)return;d&&!En(d,h)&&(v=y(d),we(d,b,_,!0),d=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:E,ref:M,shapeFlag:R}=h;switch(E){case $r:F(d,h,g,v);break;case Dt:D(d,h,g,v);break;case is:d==null&&O(h,g,v,T);break;case nt:Ae(d,h,g,v,b,_,T,S,I);break;default:R&1?j(d,h,g,v,b,_,T,S,I):R&6?Ie(d,h,g,v,b,_,T,S,I):(R&64||R&128)&&E.process(d,h,g,v,b,_,T,S,I,x)}M!=null&&b?On(M,d&&d.ref,_,h||d,!h):M==null&&d&&d.ref!=null&&On(d.ref,null,_,d,!0)},F=(d,h,g,v)=>{if(d==null)r(h.el=a(h.children),g,v);else{const b=h.el=d.el;h.children!==d.children&&l(b,h.children)}},D=(d,h,g,v)=>{d==null?r(h.el=c(h.children||""),g,v):h.el=d.el},O=(d,h,g,v)=>{[d.el,d.anchor]=w(d.children,h,g,v,d.el,d.anchor)},k=({el:d,anchor:h},g,v)=>{let b;for(;d&&d!==h;)b=p(d),r(d,g,v),d=b;r(h,g,v)},N=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},j=(d,h,g,v,b,_,T,S,I)=>{if(h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),d==null)ae(h,g,v,b,_,T,S,I);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),$(d,h,b,_,T,S,I)}finally{E&&E._endPatch()}}},ae=(d,h,g,v,b,_,T,S)=>{let I,E;const{props:M,shapeFlag:R,transition:L,dirs:B}=d;if(I=d.el=o(d.type,_,M&&M.is,M),R&8?u(I,d.children):R&16&&G(d.children,I,null,v,b,ss(d,_),T,S),B&&Ft(d,null,v,"created"),z(I,d,d.scopeId,T,v),M){for(const ne in M)ne!=="value"&&!Rn(ne)&&i(I,ne,null,M[ne],_,v);"value"in M&&i(I,"value",null,M.value,_),(E=M.onVnodeBeforeMount)&&$e(E,v,d)}B&&Ft(d,null,v,"beforeMount");const q=Qu(b,L);q&&L.beforeEnter(I),r(I,h,g),((E=M&&M.onVnodeMounted)||q||B)&&Ce(()=>{E&&$e(E,v,d),q&&L.enter(I),B&&Ft(d,null,v,"mounted")},b)},z=(d,h,g,v,b)=>{if(g&&m(d,g),v)for(let _=0;_<v.length;_++)m(d,v[_]);if(b){let _=b.subTree;if(h===_||ic(_.type)&&(_.ssContent===h||_.ssFallback===h)){const T=b.vnode;z(d,T,T.scopeId,T.slotScopeIds,b.parent)}}},G=(d,h,g,v,b,_,T,S,I=0)=>{for(let E=I;E<d.length;E++){const M=d[E]=S?wt(d[E]):Ke(d[E]);C(null,M,h,g,v,b,_,T,S)}},$=(d,h,g,v,b,_,T)=>{const S=h.el=d.el;let{patchFlag:I,dynamicChildren:E,dirs:M}=h;I|=d.patchFlag&16;const R=d.props||te,L=h.props||te;let B;if(g&&Bt(g,!1),(B=L.onVnodeBeforeUpdate)&&$e(B,g,h,d),M&&Ft(h,d,g,"beforeUpdate"),g&&Bt(g,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&u(S,""),E?se(d.dynamicChildren,E,S,g,v,ss(h,b),_):T||Y(d,h,S,null,g,v,ss(h,b),_,!1),I>0){if(I&16)me(S,R,L,g,b);else if(I&2&&R.class!==L.class&&i(S,"class",null,L.class,b),I&4&&i(S,"style",R.style,L.style,b),I&8){const q=h.dynamicProps;for(let ne=0;ne<q.length;ne++){const Z=q[ne],Se=R[Z],Te=L[Z];(Te!==Se||Z==="value")&&i(S,Z,Se,Te,b,g)}}I&1&&d.children!==h.children&&u(S,h.children)}else!T&&E==null&&me(S,R,L,g,b);((B=L.onVnodeUpdated)||M)&&Ce(()=>{B&&$e(B,g,h,d),M&&Ft(h,d,g,"updated")},v)},se=(d,h,g,v,b,_,T)=>{for(let S=0;S<h.length;S++){const I=d[S],E=h[S],M=I.el&&(I.type===nt||!En(I,E)||I.shapeFlag&198)?f(I.el):g;C(I,E,M,null,v,b,_,T,!0)}},me=(d,h,g,v,b)=>{if(h!==g){if(h!==te)for(const _ in h)!Rn(_)&&!(_ in g)&&i(d,_,h[_],null,b,v);for(const _ in g){if(Rn(_))continue;const T=g[_],S=h[_];T!==S&&_!=="value"&&i(d,_,S,T,b,v)}"value"in g&&i(d,"value",h.value,g.value,b)}},Ae=(d,h,g,v,b,_,T,S,I)=>{const E=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:B}=h;B&&(S=S?S.concat(B):B),d==null?(r(E,g,v),r(M,g,v),G(h.children||[],g,M,b,_,T,S,I)):R>0&&R&64&&L&&d.dynamicChildren?(se(d.dynamicChildren,L,g,b,_,T,S),(h.key!=null||b&&h===b.subTree)&&ec(d,h,!0)):Y(d,h,g,M,b,_,T,S,I)},Ie=(d,h,g,v,b,_,T,S,I)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?b.ctx.activate(h,g,v,T,I):Mt(h,g,v,b,_,T,I):_t(d,h,I)},Mt=(d,h,g,v,b,_,T)=>{const S=d.component=yf(d,v,b);if(Va(d)&&(S.ctx.renderer=x),bf(S,!1,T),S.asyncDep){if(b&&b.registerDep(S,ie,T),!d.el){const I=S.subTree=Ne(Dt);D(null,I,h,g),d.placeholder=I.el}}else ie(S,d,h,g,b,_,T)},_t=(d,h,g)=>{const v=h.component=d.component;if(lf(d,h,g))if(v.asyncDep&&!v.asyncResolved){W(v,h,g);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ie=(d,h,g,v,b,_,T)=>{const S=()=>{if(d.isMounted){let{next:R,bu:L,u:B,parent:q,vnode:ne}=d;{const je=tc(d);if(je){R&&(R.el=ne.el,W(d,R,T)),je.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Z=R,Se;Bt(d,!1),R?(R.el=ne.el,W(d,R,T)):R=ne,L&&lr(L),(Se=R.props&&R.props.onVnodeBeforeUpdate)&&$e(Se,q,R,ne),Bt(d,!0);const Te=Wi(d),He=d.subTree;d.subTree=Te,C(He,Te,f(He.el),y(He),d,b,_),R.el=Te.el,Z===null&&uf(d,Te.el),B&&Ce(B,b),(Se=R.props&&R.props.onVnodeUpdated)&&Ce(()=>$e(Se,q,R,ne),b)}else{let R;const{el:L,props:B}=h,{bm:q,m:ne,parent:Z,root:Se,type:Te}=d,He=Nn(h);Bt(d,!1),q&&lr(q),!He&&(R=B&&B.onVnodeBeforeMount)&&$e(R,Z,h),Bt(d,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Te);const je=d.subTree=Wi(d);C(null,je,g,v,d,b,_),h.el=je.el}if(ne&&Ce(ne,b),!He&&(R=B&&B.onVnodeMounted)){const je=h;Ce(()=>$e(R,Z,je),b)}(h.shapeFlag&256||Z&&Nn(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Ce(d.a,b),d.isMounted=!0,h=g=v=null}};d.scope.on();const I=d.effect=new ma(S);d.scope.off();const E=d.update=I.run.bind(I),M=d.job=I.runIfDirty.bind(I);M.i=d,M.id=d.uid,I.scheduler=()=>ui(M),Bt(d,!0),E()},W=(d,h,g)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,Gu(d,h.props,v,g),Ju(d,h.children,g),lt(),xi(d),ut()},Y=(d,h,g,v,b,_,T,S,I=!1)=>{const E=d&&d.children,M=d?d.shapeFlag:0,R=h.children,{patchFlag:L,shapeFlag:B}=h;if(L>0){if(L&128){vt(E,R,g,v,b,_,T,S,I);return}else if(L&256){Qe(E,R,g,v,b,_,T,S,I);return}}B&8?(M&16&&De(E,b,_),R!==E&&u(g,R)):M&16?B&16?vt(E,R,g,v,b,_,T,S,I):De(E,b,_,!0):(M&8&&u(g,""),B&16&&G(R,g,v,b,_,T,S,I))},Qe=(d,h,g,v,b,_,T,S,I)=>{d=d||on,h=h||on;const E=d.length,M=h.length,R=Math.min(E,M);let L;for(L=0;L<R;L++){const B=h[L]=I?wt(h[L]):Ke(h[L]);C(d[L],B,g,null,b,_,T,S,I)}E>M?De(d,b,_,!0,!1,R):G(h,g,v,b,_,T,S,I,R)},vt=(d,h,g,v,b,_,T,S,I)=>{let E=0;const M=h.length;let R=d.length-1,L=M-1;for(;E<=R&&E<=L;){const B=d[E],q=h[E]=I?wt(h[E]):Ke(h[E]);if(En(B,q))C(B,q,g,null,b,_,T,S,I);else break;E++}for(;E<=R&&E<=L;){const B=d[R],q=h[L]=I?wt(h[L]):Ke(h[L]);if(En(B,q))C(B,q,g,null,b,_,T,S,I);else break;R--,L--}if(E>R){if(E<=L){const B=L+1,q=B<M?h[B].el:v;for(;E<=L;)C(null,h[E]=I?wt(h[E]):Ke(h[E]),g,q,b,_,T,S,I),E++}}else if(E>L)for(;E<=R;)we(d[E],b,_,!0),E++;else{const B=E,q=E,ne=new Map;for(E=q;E<=L;E++){const Re=h[E]=I?wt(h[E]):Ke(h[E]);Re.key!=null&&ne.set(Re.key,E)}let Z,Se=0;const Te=L-q+1;let He=!1,je=0;const yn=new Array(Te);for(E=0;E<Te;E++)yn[E]=0;for(E=B;E<=R;E++){const Re=d[E];if(Se>=Te){we(Re,b,_,!0);continue}let We;if(Re.key!=null)We=ne.get(Re.key);else for(Z=q;Z<=L;Z++)if(yn[Z-q]===0&&En(Re,h[Z])){We=Z;break}We===void 0?we(Re,b,_,!0):(yn[We-q]=E+1,We>=je?je=We:He=!0,C(Re,h[We],g,null,b,_,T,S,I),Se++)}const Ci=He?Zu(yn):on;for(Z=Ci.length-1,E=Te-1;E>=0;E--){const Re=q+E,We=h[Re],Pi=h[Re+1],Oi=Re+1<M?Pi.el||Pi.placeholder:v;yn[E]===0?C(null,We,g,Oi,b,_,T,S,I):He&&(Z<0||E!==Ci[Z]?Ve(We,g,Oi,2):Z--)}}},Ve=(d,h,g,v,b=null)=>{const{el:_,type:T,transition:S,children:I,shapeFlag:E}=d;if(E&6){Ve(d.component.subTree,h,g,v);return}if(E&128){d.suspense.move(h,g,v);return}if(E&64){T.move(d,h,g,x);return}if(T===nt){r(_,h,g);for(let R=0;R<I.length;R++)Ve(I[R],h,g,v);r(d.anchor,h,g);return}if(T===is){k(d,h,g);return}if(v!==2&&E&1&&S)if(v===0)S.beforeEnter(_),r(_,h,g),Ce(()=>S.enter(_),b);else{const{leave:R,delayLeave:L,afterLeave:B}=S,q=()=>{d.ctx.isUnmounted?s(_):r(_,h,g)},ne=()=>{_._isLeaving&&_[vu](!0),R(_,()=>{q(),B&&B()})};L?L(_,q,ne):ne()}else r(_,h,g)},we=(d,h,g,v=!1,b=!1)=>{const{type:_,props:T,ref:S,children:I,dynamicChildren:E,shapeFlag:M,patchFlag:R,dirs:L,cacheIndex:B}=d;if(R===-2&&(b=!1),S!=null&&(lt(),On(S,null,g,d,!0),ut()),B!=null&&(h.renderCache[B]=void 0),M&256){h.ctx.deactivate(d);return}const q=M&1&&L,ne=!Nn(d);let Z;if(ne&&(Z=T&&T.onVnodeBeforeUnmount)&&$e(Z,h,d),M&6)Ut(d.component,g,v);else{if(M&128){d.suspense.unmount(g,v);return}q&&Ft(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,g,x,v):E&&!E.hasOnce&&(_!==nt||R>0&&R&64)?De(E,h,g,!1,!0):(_===nt&&R&384||!b&&M&16)&&De(I,h,g),v&&Xt(d)}(ne&&(Z=T&&T.onVnodeUnmounted)||q)&&Ce(()=>{Z&&$e(Z,h,d),q&&Ft(d,null,h,"unmounted")},g)},Xt=d=>{const{type:h,el:g,anchor:v,transition:b}=d;if(h===nt){Qt(g,v);return}if(h===is){N(d);return}const _=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:S}=b,I=()=>T(g,_);S?S(d.el,_,I):I()}else _()},Qt=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Ut=(d,h,g)=>{const{bum:v,scope:b,job:_,subTree:T,um:S,m:I,a:E}=d;ji(I),ji(E),v&&lr(v),b.stop(),_&&(_.flags|=8,we(T,d,h,g)),S&&Ce(S,h),Ce(()=>{d.isUnmounted=!0},h)},De=(d,h,g,v=!1,b=!1,_=0)=>{for(let T=_;T<d.length;T++)we(d[T],h,g,v,b)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[mu];return g?p(g):h};let P=!1;const A=(d,h,g)=>{d==null?h._vnode&&we(h._vnode,null,null,!0):C(h._vnode||null,d,h,null,null,null,g),h._vnode=d,P||(P=!0,xi(),La(),P=!1)},x={p:C,um:we,m:Ve,r:Xt,mt:Mt,mc:G,pc:Y,pbc:se,n:y,o:t};return{render:A,hydrate:void 0,createApp:ju(A)}}function ss({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ec(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=wt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ec(o,a)),a.type===$r&&a.patchFlag!==-1&&(a.el=o.el),a.type===Dt&&!a.el&&(a.el=o.el)}}function Zu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tc(e)}function ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ef=Symbol.for("v-scx"),tf=()=>Ue(ef);function kn(t,e,n){return nc(t,e,n)}function nc(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,a=ge({},n),c=e&&r||!e&&i!=="post";let l;if(jn){if(i==="sync"){const m=tf();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=ze,m.resume=ze,m.pause=ze,m}}const u=pe;a.call=(m,w,C)=>Xe(m,u,w,C);let f=!1;i==="post"?a.scheduler=m=>{Ce(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,w)=>{w?m():ui(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=fu(t,e,a);return jn&&(l?l.push(p):c&&p()),p}function nf(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?rc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Yn(this),a=nc(s,i.bind(r),n);return o(),a}function rc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const rf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xe(e)}Modifiers`]||t[`${Yt(e)}Modifiers`];function sf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&rf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>fe(u)?u.trim():u)),o.number&&(s=n.map(Xs)));let a,c=r[a=Qr(e)]||r[a=Qr(xe(e))];!c&&i&&(c=r[a=Qr(Yt(e))]),c&&Xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(l,t,6,s)}}const of=new WeakMap;function sc(t,e,n=!1){const r=n?of:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=sc(l,e,!0);u&&(a=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):ge(o,i),oe(t)&&r.set(t,o),o)}function Wr(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Yt(e))||Q(t,e))}function Wi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:w,inheritAttrs:C}=t,F=Er(t);let D,O;try{if(n.shapeFlag&4){const N=s||r,j=N;D=Ke(l.call(j,N,u,f,m,p,w)),O=a}else{const N=e;D=Ke(N.length>1?N(f,{attrs:a,slots:o,emit:c}):N(f,null)),O=e.props?a:af(a)}}catch(N){xn.length=0,Hr(N,t,1),D=Ne(Dt)}let k=D;if(O&&C!==!1){const N=Object.keys(O),{shapeFlag:j}=k;N.length&&j&7&&(i&&N.some(zs)&&(O=cf(O,i)),k=pn(k,O,!1,!0))}return n.dirs&&(k=pn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&fi(k,n.transition),D=k,Er(F),D}const af=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},cf=(t,e)=>{const n={};for(const r in t)(!zs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$i(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Wr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$i(r,o,l):!0:!!o;return!1}function $i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function uf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ic=t=>t.__isSuspense;function ff(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):pu(t)}const nt=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),is=Symbol.for("v-stc"),xn=[];let Oe=null;function fr(t=!1){xn.push(Oe=t?null:[])}function df(){xn.pop(),Oe=xn[xn.length-1]||null}let Hn=1;function Sr(t,e=!1){Hn+=t,t<0&&Oe&&e&&(Oe.hasOnce=!0)}function oc(t){return t.dynamicChildren=Hn>0?Oe||on:null,df(),Hn>0&&Oe&&Oe.push(t),t}function Gi(t,e,n,r,s,i){return oc(Ar(t,e,n,r,s,i,!0))}function ac(t,e,n,r,s){return oc(Ne(t,e,n,r,s,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const cc=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||le(t)||H(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function Ar(t,e=null,n=null,r=0,s=null,i=t===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cc(e),ref:e&&dr(e),scopeId:Ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return a?(pi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),Hn>0&&!o&&Oe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Oe.push(c),c}const Ne=hf;function hf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ku)&&(t=Dt),Tr(t)){const a=pn(t,e,!0);return n&&pi(a,n),Hn>0&&!i&&Oe&&(a.shapeFlag&6?Oe[Oe.indexOf(t)]=a:Oe.push(a)),a.patchFlag=-2,a}if(Tf(t)&&(t=t.__vccOpts),e){e=pf(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=Zs(a)),oe(c)&&(ai(c)&&!V(c)&&(c=ge({},c)),e.style=Qs(c))}const o=fe(t)?1:ic(t)?128:_u(t)?64:oe(t)?4:H(t)?2:0;return Ar(t,e,n,r,s,o,i,!0)}function pf(t){return t?ai(t)||za(t)?ge({},t):t:null}function pn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?mf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&cc(l),ref:e&&e.ref?n&&i?V(i)?i.concat(dr(e)):[i,dr(e)]:dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&fi(u,c.clone(u)),u}function gf(t=" ",e=0){return Ne($r,null,t,e)}function E_(t="",e=!1){return e?(fr(),ac(Dt,null,t)):Ne(Dt,null,t)}function Ke(t){return t==null||typeof t=="boolean"?Ne(Dt):V(t)?Ne(nt,null,t.slice()):Tr(t)?wt(t):Ne($r,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!za(e)?e._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),r&64?(n=16,e=[gf(e)]):n=8);t.children=e,t.shapeFlag|=n}function mf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zs([e.class,r.class]));else if(s==="style")e.style=Qs([e.style,r.style]);else if(Mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){Xe(t,e,7,[n,r])}const _f=Ga();let vf=0;function yf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_f,i={uid:vf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ha(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ya(r,s),emitsOptions:sc(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sf.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const lc=()=>pe||Pe;let Rr,Os;{const t=Vr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rr=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),Os=e("__VUE_SSR_SETTERS__",n=>jn=n)}const Yn=t=>{const e=pe;return Rr(t),t.scope.on(),()=>{t.scope.off(),Rr(e)}},Ki=()=>{pe&&pe.scope.off(),Rr(null)};function uc(t){return t.vnode.shapeFlag&4}let jn=!1;function bf(t,e=!1,n=!1){e&&Os(e);const{props:r,children:s}=t.vnode,i=uc(t);$u(t,r,i,e),zu(t,s,n||e);const o=i?Ef(t,e):void 0;return e&&Os(!1),o}function Ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lu);const{setup:r}=n;if(r){lt();const s=t.setupContext=r.length>1?wf(t):null,i=Yn(t),o=Jn(r,t,0,[t.props,s]),a=oa(o);if(ut(),i(),(a||t.sp)&&!Nn(t)&&Ba(t),a){if(o.then(Ki,Ki),e)return o.then(c=>{qi(t,c)}).catch(c=>{Hr(c,t,0)});t.asyncDep=o}else qi(t,o)}else fc(t)}function qi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Da(e)),fc(t)}function fc(t,e,n){const r=t.type;t.render||(t.render=r.render||ze);{const s=Yn(t);lt();try{Mu(t)}finally{ut(),s()}}}const If={get(t,e){return he(t,"get",""),t[e]}};function wf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,If),slots:t.slots,emit:t.emit,expose:e}}function Gr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Da(ci(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dn)return Dn[n](t)},has(e,n){return n in e||n in Dn}})):t.proxy}function Sf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Tf(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>lu(t,e,jn);function dc(t,e,n){try{Sr(-1);const r=arguments.length;return r===2?oe(e)&&!V(e)?Tr(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),Ne(t,e,n))}finally{Sr(1)}}const Af="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ns;const zi=typeof window<"u"&&window.trustedTypes;if(zi)try{Ns=zi.createPolicy("vue",{createHTML:t=>t})}catch{}const hc=Ns?t=>Ns.createHTML(t):t=>t,Rf="http://www.w3.org/2000/svg",Cf="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,Ji=tt&&tt.createElement("template"),Pf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tt.createElementNS(Rf,t):e==="mathml"?tt.createElementNS(Cf,t):n?tt.createElement(t,{is:n}):tt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tt.createTextNode(t),createComment:t=>tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ji.innerHTML=hc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ji.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Of=Symbol("_vtc");function Nf(t,e,n){const r=t[Of];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yi=Symbol("_vod"),Df=Symbol("_vsh"),kf=Symbol(""),xf=/(?:^|;)\s*display\s*:/;function Lf(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hr(r,a,"")}else for(const o in e)n[o]==null&&hr(r,o,"");for(const o in n)o==="display"&&(i=!0),hr(r,o,n[o])}else if(s){if(e!==n){const o=r[kf];o&&(n+=";"+o),r.cssText=n,i=xf.test(n)}}else e&&t.removeAttribute("style");Yi in t&&(t[Yi]=i?r.display:"",t[Df]&&(r.display="none"))}const Xi=/\s*!important$/;function hr(t,e,n){if(V(n))n.forEach(r=>hr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Mf(t,e);Xi.test(n)?t.setProperty(Yt(r),n.replace(Xi,""),"important"):t[r]=n}}const Qi=["Webkit","Moz","ms"],os={};function Mf(t,e){const n=os[e];if(n)return n;let r=xe(e);if(r!=="filter"&&r in t)return os[e]=r;r=Br(r);for(let s=0;s<Qi.length;s++){const i=Qi[s]+r;if(i in t)return os[e]=i}return e}const Zi="http://www.w3.org/1999/xlink";function eo(t,e,n,r,s,i=xl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zi,e.slice(6,e.length)):t.setAttributeNS(Zi,e,n):n==null||i&&!ua(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kt(n)?String(n):n)}function to(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?hc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ua(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function nn(t,e,n,r){t.addEventListener(e,n,r)}function Uf(t,e,n,r){t.removeEventListener(e,n,r)}const no=Symbol("_vei");function Ff(t,e,n,r,s=null){const i=t[no]||(t[no]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bf(e);if(r){const l=i[e]=jf(r,s);nn(t,a,l,c)}else o&&(Uf(t,a,o,c),i[e]=void 0)}}const ro=/(?:Once|Passive|Capture)$/;function Bf(t){let e;if(ro.test(t)){e={};let r;for(;r=t.match(ro);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yt(t.slice(2)),e]}let as=0;const Vf=Promise.resolve(),Hf=()=>as||(Vf.then(()=>as=0),as=Date.now());function jf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(Wf(r,n.value),e,5,[r])};return n.value=t,n.attached=Hf(),n}function Wf(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const so=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$f=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Nf(t,r,o):e==="style"?Lf(t,n,r):Mr(e)?zs(e)||Ff(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gf(t,e,r,o))?(to(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!fe(r))?to(t,xe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),eo(t,e,r,o))};function Gf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&so(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return so(e)&&fe(n)?!1:e in t}const io=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>lr(e,n):e};function Kf(t){t.target.composing=!0}function oo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cs=Symbol("_assign");function ao(t,e,n){return e&&(t=t.trim()),n&&(t=Xs(t)),t}const I_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cs]=io(s);const i=r||s.props&&s.props.type==="number";nn(t,e?"change":"input",o=>{o.target.composing||t[cs](ao(t.value,n,i))}),(n||i)&&nn(t,"change",()=>{t.value=ao(t.value,n,i)}),e||(nn(t,"compositionstart",Kf),nn(t,"compositionend",oo),nn(t,"change",oo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[cs]=io(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},qf=["ctrl","shift","alt","meta"],zf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qf.some(n=>t[`${n}Key`]&&!e.includes(n))},w_=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=zf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Jf=ge({patchProp:$f},Pf);let co;function Yf(){return co||(co=Yu(Jf))}const Xf=(...t)=>{const e=Yf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Qf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zf(t){return fe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pc;const Kr=t=>pc=t,gc=Symbol();function Ds(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ln;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ln||(Ln={}));function ed(){const t=pa(!0),e=t.run(()=>cn({}));let n=[],r=[];const s=ci({install(i){Kr(s),s._a=i,i.provide(gc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mc=()=>{};function lo(t,e,n,r=mc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ga()&&Ml(s),s}function en(t,...e){t.slice().forEach(n=>{n(...e)})}const td=t=>t(),uo=Symbol(),ls=Symbol();function ks(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ds(s)&&Ds(r)&&t.hasOwnProperty(n)&&!le(r)&&!$t(r)?t[n]=ks(s,r):t[n]=r}return t}const nd=Symbol();function rd(t){return!Ds(t)||!t.hasOwnProperty(nd)}const{assign:Et}=Object;function sd(t){return!!(le(t)&&t.effect)}function id(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=iu(n.state.value[t]);return Et(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=ci(ke(()=>{Kr(n);const m=n._s.get(t);return o[p].call(m,m)})),f),{}))}return c=_c(t,l,e,n,r,!0),c}function _c(t,e,n={},r,s,i){let o;const a=Et({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],m;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),cn({});let C;function F(G){let $;l=u=!1,typeof G=="function"?(G(r.state.value[t]),$={type:Ln.patchFunction,storeId:t,events:m}):(ks(r.state.value[t],G),$={type:Ln.patchObject,payload:G,storeId:t,events:m});const se=C=Symbol();li().then(()=>{C===se&&(l=!0)}),u=!0,en(f,$,r.state.value[t])}const D=i?function(){const{state:$}=n,se=$?$():{};this.$patch(me=>{Et(me,se)})}:mc;function O(){o.stop(),f=[],p=[],r._s.delete(t)}const k=(G,$="")=>{if(uo in G)return G[ls]=$,G;const se=function(){Kr(r);const me=Array.from(arguments),Ae=[],Ie=[];function Mt(W){Ae.push(W)}function _t(W){Ie.push(W)}en(p,{args:me,name:se[ls],store:j,after:Mt,onError:_t});let ie;try{ie=G.apply(this&&this.$id===t?this:j,me)}catch(W){throw en(Ie,W),W}return ie instanceof Promise?ie.then(W=>(en(Ae,W),W)).catch(W=>(en(Ie,W),Promise.reject(W))):(en(Ae,ie),ie)};return se[uo]=!0,se[ls]=$,se},N={_p:r,$id:t,$onAction:lo.bind(null,p),$patch:F,$reset:D,$subscribe(G,$={}){const se=lo(f,G,$.detached,()=>me()),me=o.run(()=>kn(()=>r.state.value[t],Ae=>{($.flush==="sync"?u:l)&&G({storeId:t,type:Ln.direct,events:m},Ae)},Et({},c,$)));return se},$dispose:O},j=zn(N);r._s.set(t,j);const z=(r._a&&r._a.runWithContext||td)(()=>r._e.run(()=>(o=pa()).run(()=>e({action:k}))));for(const G in z){const $=z[G];if(le($)&&!sd($)||$t($))i||(w&&rd($)&&(le($)?$.value=w[G]:ks($,w[G])),r.state.value[t][G]=$);else if(typeof $=="function"){const se=k($,G);z[G]=se,a.actions[G]=$}}return Et(j,z),Et(J(j),z),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:G=>{F($=>{Et($,G)})}}),r._p.forEach(G=>{Et(j,o.run(()=>G({store:j,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(j.$state,w),l=!0,u=!0,j}/*! #__NO_SIDE_EFFECTS__ */function od(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const l=Wu();return a=a||(l?Ue(gc,null):null),a&&Kr(a),a=pc,a._s.has(r)||(i?_c(r,e,s,a):id(r,s,a)),a._s.get(r)}return o.$id=r,o}var fo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ad=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ad(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new cd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const w=l<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ld=function(t){const e=vc(t);return yc.encodeByteArray(e,!0)},bc=function(t){return ld(t).replace(/\./g,"")},Ec=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=()=>ud().__FIREBASE_DEFAULTS__,dd=()=>{if(typeof process>"u"||typeof fo>"u")return;const t=fo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ec(t[1]);return e&&JSON.parse(e)},gi=()=>{try{return fd()||dd()||hd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pd=t=>{var e,n;return(n=(e=gi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ic=()=>{var t;return(t=gi())===null||t===void 0?void 0:t.config},wc=t=>{var e;return(e=gi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function _d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bd(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ed(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wd,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xt(s,a,r)}}function Sd(t,e){return t.replace(Td,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Td=/\{\$([^}]+)}/g;function Ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ho(i)&&ho(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ho(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function An(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rd(t,e){const n=new Cd(t,e);return n.subscribe.bind(n)}class Cd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=us),s.error===void 0&&(s.error=us),s.complete===void 0&&(s.complete=us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function us(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nd(t){return t===Ht?void 0:t}function Dd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Od(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const xd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ld=ee.INFO,Md={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ud=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Md[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=Ld,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Fd=(t,e)=>e.some(n=>t instanceof n);let po,go;function Bd(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vd(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,xs=new WeakMap,Ac=new WeakMap,fs=new WeakMap,mi=new WeakMap;function Hd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ot(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tc.set(n,t)}).catch(()=>{}),mi.set(e,t),e}function jd(t){if(xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xs.set(t,e)}let Ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ac.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wd(t){Ls=t(Ls)}function $d(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ds(this),e,...n);return Ac.set(r,e.sort?e.sort():[e]),Ot(r)}:Vd().includes(t)?function(...e){return t.apply(ds(this),e),Ot(Tc.get(this))}:function(...e){return Ot(t.apply(ds(this),e))}}function Gd(t){return typeof t=="function"?$d(t):(t instanceof IDBTransaction&&jd(t),Fd(t,Bd())?new Proxy(t,Ls):t)}function Ot(t){if(t instanceof IDBRequest)return Hd(t);if(fs.has(t))return fs.get(t);const e=Gd(t);return e!==t&&(fs.set(t,e),mi.set(e,t)),e}const ds=t=>mi.get(t);function Kd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const qd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],hs=new Map;function mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return hs.set(e,i),i}Wd(t=>({...t,get:(e,n,r)=>mo(e,n)||t.get(e,n,r),has:(e,n)=>!!mo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ms="@firebase/app",_o="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Sc("@firebase/app"),Xd="@firebase/app-compat",Qd="@firebase/analytics-compat",Zd="@firebase/analytics",eh="@firebase/app-check-compat",th="@firebase/app-check",nh="@firebase/auth",rh="@firebase/auth-compat",sh="@firebase/database",ih="@firebase/data-connect",oh="@firebase/database-compat",ah="@firebase/functions",ch="@firebase/functions-compat",lh="@firebase/installations",uh="@firebase/installations-compat",fh="@firebase/messaging",dh="@firebase/messaging-compat",hh="@firebase/performance",ph="@firebase/performance-compat",gh="@firebase/remote-config",mh="@firebase/remote-config-compat",_h="@firebase/storage",vh="@firebase/storage-compat",yh="@firebase/firestore",bh="@firebase/vertexai-preview",Eh="@firebase/firestore-compat",Ih="firebase",wh="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",Sh={[Ms]:"fire-core",[Xd]:"fire-core-compat",[Zd]:"fire-analytics",[Qd]:"fire-analytics-compat",[th]:"fire-app-check",[eh]:"fire-app-check-compat",[nh]:"fire-auth",[rh]:"fire-auth-compat",[sh]:"fire-rtdb",[ih]:"fire-data-connect",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[lh]:"fire-iid",[uh]:"fire-iid-compat",[fh]:"fire-fcm",[dh]:"fire-fcm-compat",[hh]:"fire-perf",[ph]:"fire-perf-compat",[gh]:"fire-rc",[mh]:"fire-rc-compat",[_h]:"fire-gcs",[vh]:"fire-gcs-compat",[yh]:"fire-fst",[Eh]:"fire-fst-compat",[bh]:"fire-vertex","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,Th=new Map,Fs=new Map;function vo(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Fs.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Fs.set(e,t);for(const n of Pr.values())vo(n,t);for(const n of Th.values())vo(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qe(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Xn("app","Firebase",Ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=wh;function Cc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Us,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Ic()),!n)throw Nt.create("no-options");const i=Pr.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new kd(s);for(const c of Fs.values())o.addComponent(c);const a=new Rh(n,r,o);return Pr.set(s,a),a}function Ch(t=Us){const e=Pr.get(t);if(!e&&t===Us&&Ic())return Cc();if(!e)throw Nt.create("no-app",{appName:t});return e}function un(t,e,n){var r;let s=(r=Sh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}Wn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebase-heartbeat-database",Oh=1,$n="firebase-heartbeat-store";let ps=null;function Pc(){return ps||(ps=Kd(Ph,Oh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),ps}async function Nh(t){try{const n=(await Pc()).transaction($n),r=await n.objectStore($n).get(Oc(t));return await n.done,r}catch(e){if(e instanceof xt)ft.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function yo(t,e){try{const r=(await Pc()).transaction($n,"readwrite");await r.objectStore($n).put(e,Oc(t)),await r.done}catch(n){if(n instanceof xt)ft.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(r.message)}}}function Oc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=1024,kh=30*24*60*60*1e3;class xh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bo(),{heartbeatsToSend:r,unsentEntries:s}=Lh(this._heartbeatsCache.heartbeats),i=bc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ft.warn(n),""}}}function bo(){return new Date().toISOString().substring(0,10)}function Lh(t,e=Dh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ed()?Id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eo(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){Wn(new gn("platform-logger",e=>new Jd(e),"PRIVATE")),Wn(new gn("heartbeat",e=>new xh(e),"PRIVATE")),un(Ms,_o,t),un(Ms,_o,"esm2017"),un("fire-js","")}Uh("");function _i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fh=Nc,Dc=new Xn("auth","Firebase",Nc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Sc("@firebase/auth");function Bh(t,...e){Or.logLevel<=ee.WARN&&Or.warn(`Auth (${Zn}): ${t}`,...e)}function pr(t,...e){Or.logLevel<=ee.ERROR&&Or.error(`Auth (${Zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,...e){throw vi(t,...e)}function Je(t,...e){return vi(t,...e)}function kc(t,e,n){const r=Object.assign(Object.assign({},Fh()),{[e]:n});return new Xn("auth","Firebase",r).create(e,{appName:t.name})}function ct(t){return kc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dc.create(t,...e)}function U(t,e,...n){if(!t)throw vi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function dt(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vh(){return Io()==="http:"||Io()==="https:"}function Io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vh()||vd()||"connection"in navigator)?navigator.onLine:!0}function jh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=md()||yd()}get(){return Hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new er(3e4,6e4);function gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,r,s={}){return Lc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return _d()||(l.referrerPolicy="no-referrer"),xc.fetch()(Mc(t,t.config.apiHost,n,a),l)})}async function Lc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wh),e);try{const s=new Kh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kc(t,u,l);Fe(t,u)}}catch(s){if(s instanceof xt)throw s;Fe(t,"network-request-failed",{message:String(s)})}}async function tr(t,e,n,r,s={}){const i=await mt(t,e,n,r,s);return"mfaPendingCredential"in i&&Fe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yi(t.config,s):`${t.config.apiScheme}://${s}`}function Gh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),$h.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}function wo(t){return t!==void 0&&t.enterprise!==void 0}class qh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zh(t,e){return mt(t,"GET","/v2/recaptchaConfig",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function Uc(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yh(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=bi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(gs(s.auth_time)),issuedAtTime:Mn(gs(s.iat)),expirationTime:Mn(gs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gs(t){return Number(t)*1e3}function bi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ec(n);return s?JSON.parse(s):(pr("Failed to decode base64 JWT payload"),null)}catch(s){return pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function So(t){const e=bi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&Xh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,Uc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fc(i.providerUserInfo):[],a=ep(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Zh(t){const e=pt(t);await Nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ep(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fc(t){return t.map(e=>{var{providerId:n}=e,r=_i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e){const n=await Lc(t,{},async()=>{const r=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Mc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function np(t,e){return mt(t,"POST","/v2/accounts:revokeToken",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):So(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=So(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yh(this,e)}reload(){return Zh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Gn(this,Jh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:N,isAnonymous:j,providerData:ae,stsTokenManager:z}=n;U(k&&z,e,"internal-error");const G=fn.fromJSON(this.name,z);U(typeof k=="string",e,"internal-error"),yt(f,e.name),yt(p,e.name),U(typeof N=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),yt(m,e.name),yt(w,e.name),yt(C,e.name),yt(F,e.name),yt(D,e.name),yt(O,e.name);const $=new ot({uid:k,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:j,photoURL:w,phoneNumber:m,tenantId:C,stsTokenManager:G,createdAt:D,lastLoginAt:O});return ae&&Array.isArray(ae)&&($.providerData=ae.map(se=>Object.assign({},se))),F&&($._redirectEventId=F),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new fn;s.updateFromServerResponse(n);const i=new ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new fn;a.updateFromIdToken(r);const c=new ot({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map;function at(t){dt(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bc.type="NONE";const Ao=Bc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dn(at(Ao),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(Ao);const o=gr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ot._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new dn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new dn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gc(e))return"Blackberry";if(Kc(e))return"Webos";if(Hc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if($c(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vc(t=Ee()){return/firefox\//i.test(t)}function Hc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=Ee()){return/crios\//i.test(t)}function Wc(t=Ee()){return/iemobile/i.test(t)}function $c(t=Ee()){return/android/i.test(t)}function Gc(t=Ee()){return/blackberry/i.test(t)}function Kc(t=Ee()){return/webos/i.test(t)}function Ei(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rp(t=Ee()){var e;return Ei(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sp(){return bd()&&document.documentMode===10}function qc(t=Ee()){return Ei(t)||$c(t)||Kc(t)||Gc(t)||/windows phone/i.test(t)||Wc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e=[]){let n;switch(t){case"Browser":n=Ro(Ee());break;case"Worker":n=`${Ro(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(t,e={}){return mt(t,"GET","/v2/passwordPolicy",gt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=6;class cp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ap,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Co(this),this.idTokenSubscription=new Co(this),this.beforeStateQueue=new ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uc(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(ct(this));const n=e?pt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await op(this),n=new cp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await np(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lt(t){return pt(t)}class Co{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function up(t){qr=t}function Jc(t){return qr.loadJS(t)}function fp(){return qr.recaptchaEnterpriseScript}function dp(){return qr.gapiScript}function hp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pp="recaptcha-enterprise",gp="NO_RECAPTCHA";class mp{constructor(e){this.type=pp,this.auth=Lt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new qh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;wo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fp();c.length!==0&&(c+=a),Jc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Po(t,e,n,r=!1){const s=new mp(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dr(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Po(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Po(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;Fe(s,"already-initialized")}return n.initialize({options:e})}function vp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yp(t,e,n){const r=Lt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yc(e),{host:o,port:a}=bp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ep()}function Yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bp(t){const e=Yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oo(o)}}}function Oo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ep(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Ip(t,e){return mt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e){return tr(t,"POST","/v1/accounts:signInWithPassword",gt(t,e))}async function Sp(t,e){return mt(t,"POST","/v1/accounts:sendOobCode",gt(t,e))}async function Tp(t,e){return Sp(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}async function Rp(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ii{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dr(e,n,"signInWithPassword",wp);case"emailLink":return Ap(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dr(e,r,"signUpPassword",Ip);case"emailLink":return Rp(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e){return tr(t,"POST","/v1/accounts:signInWithIdp",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="http://localhost";class zt extends Ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:Cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Op(t){const e=Tn(An(t)).link,n=e?Tn(An(e)).deep_link_id:null,r=Tn(An(t)).deep_link_id;return(r?Tn(An(r)).link:null)||r||n||e||t}class wi{constructor(e){var n,r,s,i,o,a;const c=Tn(An(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Pp((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Op(e);try{return new wi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wi.parseLink(n);return U(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends nr{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends nr{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends nr{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t,e){return tr(t,"POST","/v1/accounts:signUp",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ot._fromIdTokenResponse(e,r,s),o=No(r);return new Jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=No(r);return new Jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function No(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kr(e,n,r,s)}}function Qc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,r):i})}async function Dp(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,e,n=!1){const{auth:r}=t;if(qe(r.app))return Promise.reject(ct(r));const s="reauthenticate";try{const i=await Gn(t,Qc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=bi(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Jt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t,e,n=!1){if(qe(t.app))return Promise.reject(ct(t));const r="signIn",s=await Qc(t,r,e),i=await Jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xp(t,e){return Zc(Lt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){const e=Lt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lp(t,e,n){const r=Lt(t);await Dr(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Tp)}async function Mp(t,e,n){if(qe(t.app))return Promise.reject(ct(t));const r=Lt(t),o=await Dr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Np).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&el(t),c}),a=await Jt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Up(t,e,n){return qe(t.app)?Promise.reject(ct(t)):xp(pt(t),vn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&el(t),r})}function Fp(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function Bp(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function Vp(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}function Hp(t){return pt(t).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1e3,Wp=10;class nl extends tl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nl.type="LOCAL";const $p=nl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rl.type="SESSION";const sl=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Gp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Si("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function qp(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function zp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yp(){return il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firebaseLocalStorageDb",Xp=1,Lr="firebaseLocalStorage",al="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jr(t,e){return t.transaction([Lr],e?"readwrite":"readonly").objectStore(Lr)}function Qp(){const t=indexedDB.deleteDatabase(ol);return new rr(t).toPromise()}function Hs(){const t=indexedDB.open(ol,Xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lr,{keyPath:al})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lr)?e(r):(r.close(),await Qp(),e(await Hs()))})})}async function Do(t,e,n){const r=Jr(t,!0).put({[al]:e,value:n});return new rr(r).toPromise()}async function Zp(t,e){const n=Jr(t,!1).get(e),r=await new rr(n).toPromise();return r===void 0?null:r.value}function ko(t,e){const n=Jr(t,!0).delete(e);return new rr(n).toPromise()}const eg=800,tg=3;class cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zr._getInstance(Yp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hs();return await Do(e,xr,"1"),await ko(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Do(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ko(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jr(s,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cl.type="LOCAL";const ng=cl;new er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){return e?at(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sg(t){return Zc(t.auth,new Ti(t),t.bypassAuthState)}function ig(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),kp(n,new Ti(t),t.bypassAuthState)}async function og(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Dp(n,new Ti(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sg;case"linkViaPopup":case"linkViaRedirect":return og;case"reauthViaPopup":case"reauthViaRedirect":return ig;default:Fe(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new er(2e3,1e4);class sn extends ll{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ag.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="pendingRedirect",mr=new Map;class lg extends ll{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(t,e){const n=hg(e),r=dg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fg(t,e){mr.set(t._key(),e)}function dg(t){return at(t._redirectPersistence)}function hg(t){return gr(cg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){if(qe(t.app))return Promise.reject(ct(t));const r=Lt(t),s=rg(r,e),o=await new lg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=10*60*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xo(e))}saveEventToCache(e){this.cachedEventUids.add(xo(e)),this.lastProcessedEventTime=Date.now()}}function xo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Ig(n))return}catch{}Fe(t,"unauthorized-domain")}function Ig(t){const e=Bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bg.test(n))return!1;if(yg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new er(3e4,6e4);function Lo(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sg(t){return new Promise((e,n)=>{var r,s,i;function o(){Lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lo(),n(Je(t,"network-request-failed"))},timeout:wg.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=hp("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Jc(`${dp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _r=null,e})}let _r=null;function Tg(t){return _r=_r||Sg(t),_r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new er(5e3,15e3),Rg="__/auth/iframe",Cg="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ng(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yi(e,Cg):`https://${t.config.authDomain}/${Rg}`,r={apiKey:e.apiKey,appName:t.name,v:Zn},s=Og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qn(r).slice(1)}`}async function Dg(t){const e=await Tg(t),n=Ye().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Ng(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},Ag.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xg=500,Lg=600,Mg="_blank",Ug="http://localhost";class Mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fg(t,e,n,r=xg,s=Lg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=jc(l)?Mg:n),Vc(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,w])=>`${p}${m}=${w},`,"");if(rp(l)&&a!=="_self")return Bg(e||"",a),new Mo(null);const f=window.open(e||"",a,u);U(f,t,"popup-blocked");try{f.focus()}catch{}return new Mo(f)}function Bg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__/auth/handler",Hg="emulator/auth/handler",jg=encodeURIComponent("fac");async function Uo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zn,eventId:s};if(e instanceof Xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ad(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof nr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${jg}=${encodeURIComponent(c)}`:"";return`${Wg(t)}?${Qn(a).slice(1)}${l}`}function Wg({config:t}){return t.emulator?yi(t,Hg):`https://${t.authDomain}/${Vg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class $g{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sl,this._completeRedirectFn=pg,this._overrideRedirectResult=fg}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Uo(e,n,r,Bs(),s);return Fg(e,o,Si())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Uo(e,n,r,Bs(),s);return qp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Dg(e),r=new mg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ms,{type:ms},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ms];o!==void 0&&n(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||Hc()||Ei()}}const Gg=$g;var Fo="@firebase/auth",Bo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zg(t){Wn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zc(t)},l=new lp(r,s,i,c);return vp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new gn("auth-internal",e=>{const n=Lt(e.getProvider("auth").getImmediate());return(r=>new Kg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Fo,Bo,qg(t)),un(Fo,Bo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=5*60,Yg=wc("authIdTokenMaxAge")||Jg;let Vo=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yg)return;const s=n==null?void 0:n.token;Vo!==s&&(Vo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qg(t=Ch()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_p(t,{popupRedirectResolver:Gg,persistence:[ng,$p,sl]}),r=wc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Xg(i.toString());Bp(n,o,()=>o(n.currentUser)),Fp(n,a=>o(a))}}const s=pd("auth");return s&&yp(n,`http://${s}`),n}function Zg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}up({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zg("Browser");var em="firebase",tm="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(em,tm,"app");const nm={apiKey:"AIzaSyAcz-TUeNKcFQ-leTz00v3ncYPT0Jtpj6E",authDomain:"vue-firebase-35f51.firebaseapp.com",projectId:"vue-firebase-35f51",storageBucket:"vue-firebase-35f51.firebasestorage.app",messagingSenderId:"968767339724",appId:"1:968767339724:web:7ae084bd691ad819419669",measurementId:"G-JLN4Y34K1G"},rm=Cc(nm),In=Qg(rm),Ai=od("auth",()=>{const t=cn(null),e=cn(!0),n=cn(null);return{user:t,loading:e,error:n,initAuth:()=>new Promise(l=>{Vp(In,u=>{t.value=u,e.value=!1,l(u)})}),register:async(l,u)=>{try{n.value=null;const f=await Mp(In,l,u);return t.value=f.user,{success:!0}}catch(f){return n.value=f.message,{success:!1,error:f.message}}},login:async(l,u)=>{try{n.value=null;const f=await Up(In,l,u);return t.value=f.user,{success:!0}}catch(f){return n.value=f.message,{success:!1,error:f.message}}},logout:async()=>{try{return n.value=null,await Hp(In),t.value=null,{success:!0}}catch(l){return n.value=l.message,{success:!1,error:l.message}}},resetPassword:async l=>{try{return n.value=null,await Lp(In,l),{success:!0}}catch(u){return n.value=u.message,{success:!1,error:u.message}}},clearError:()=>{n.value=null}}}),sm=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},im={id:"app"},om={key:0,class:"loading-screen"},am={__name:"App",setup(t){const e=Ai();return(n,r)=>{const s=Du("router-view");return fr(),Gi("div",im,[Gt(e).loading?(fr(),Gi("div",om,[...r[0]||(r[0]=[Ar("div",{class:"spinner"},null,-1),Ar("p",null,"Loading...",-1)])])):(fr(),ac(s,{key:1}))])}}},cm=sm(am,[["__scopeId","data-v-40773713"]]),lm="modulepreload",um=function(t){return"/vue-firebase-auth/"+t},Ho={},cr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=um(c),c in Ho)return;Ho[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":lm,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const rn=typeof document<"u";function fl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fl(t.default)}const X=Object.assign;function _s(t,e){const n={};for(const r in e){const s=e[r];n[r]=Be(s)?s.map(t):t(s)}return n}const Un=()=>{},Be=Array.isArray;function jo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const dl=/#/g,dm=/&/g,hm=/\//g,pm=/=/g,gm=/\?/g,hl=/\+/g,mm=/%5B/g,_m=/%5D/g,pl=/%5E/g,vm=/%60/g,gl=/%7B/g,ym=/%7C/g,ml=/%7D/g,bm=/%20/g;function Ri(t){return t==null?"":encodeURI(""+t).replace(ym,"|").replace(mm,"[").replace(_m,"]")}function Em(t){return Ri(t).replace(gl,"{").replace(ml,"}").replace(pl,"^")}function js(t){return Ri(t).replace(hl,"%2B").replace(bm,"+").replace(dl,"%23").replace(dm,"%26").replace(vm,"`").replace(gl,"{").replace(ml,"}").replace(pl,"^")}function Im(t){return js(t).replace(pm,"%3D")}function wm(t){return Ri(t).replace(dl,"%23").replace(gm,"%3F")}function Sm(t){return wm(t).replace(hm,"%2F")}function qn(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Tm=/\/$/,Am=t=>t.replace(Tm,"");function vs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,a>0?a:e.length),s=t(i.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Om(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:qn(o)}}function Rm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(e.matched[r],n.matched[s])&&_l(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _l(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Pm(t[n],e[n]))return!1;return!0}function Pm(t,e){return Be(t)?$o(t,e):Be(e)?$o(e,t):t===e}function $o(t,e){return Be(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Om(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ws=function(t){return t.pop="pop",t.push="push",t}({}),ys=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Nm(t){if(!t)if(rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Am(t)}const Dm=/^[^#]+#/;function km(t,e){return t.replace(Dm,"#")+e}function xm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yr=()=>({left:window.scrollX,top:window.scrollY});function Lm(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Go(t,e){return(history.state?history.state.position-e:-1)+t}const $s=new Map;function Mm(t,e){$s.set(t,e)}function Um(t){const e=$s.get(t);return $s.delete(t),e}function Fm(t){return typeof t=="string"||t&&typeof t=="object"}function vl(t){return typeof t=="string"||typeof t=="symbol"}let ce=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const yl=Symbol("");ce.MATCHER_NOT_FOUND+"",ce.NAVIGATION_GUARD_REDIRECT+"",ce.NAVIGATION_ABORTED+"",ce.NAVIGATION_CANCELLED+"",ce.NAVIGATION_DUPLICATED+"";function _n(t,e){return X(new Error,{type:t,[yl]:!0},e)}function et(t,e){return t instanceof Error&&yl in t&&(e==null||!!(t.type&e))}const Bm=["params","query","hash"];function Vm(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Bm)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Hm(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(hl," "),i=s.indexOf("="),o=qn(i<0?s:s.slice(0,i)),a=i<0?null:qn(s.slice(i+1));if(o in e){let c=e[o];Be(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function Ko(t){let e="";for(let n in t){const r=t[n];if(n=Im(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(r)?r.map(s=>s&&js(s)):[r&&js(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Be(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wm=Symbol(""),qo=Symbol(""),Xr=Symbol(""),bl=Symbol(""),Gs=Symbol("");function wn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function St(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(_n(ce.NAVIGATION_ABORTED,{from:n,to:e})):p instanceof Error?c(p):Fm(p)?c(_n(ce.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function bs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fl(c)){const l=(c.__vccOpts||c)[e];l&&i.push(St(l,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=fm(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&St(p,n,r,o,a,s)()}))}}return i}function $m(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>mn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>mn(l,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Gm=()=>location.protocol+"//"+location.host;function El(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Wo(a,"")}return Wo(n,t)+r+s}function Km(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=El(t,location),w=n.value,C=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===w){o=null;return}F=C?p.position-C.position:0}else r(m);s.forEach(D=>{D(n.value,w,{delta:F,type:Ws.pop,direction:F?F>0?ys.forward:ys.back:ys.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(X({},p.state,{scroll:Yr()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:f}}function zo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yr():null}}function qm(t){const{history:e,location:n}=window,r={value:El(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Gm()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){i(c,X({},e.state,zo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=X({},s.value,e.state,{forward:c,scroll:Yr()});i(u.current,u,!0),i(c,X({},zo(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function zm(t){t=Nm(t);const e=qm(t),n=Km(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:km.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let jt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var ue=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(ue||{});const Jm={type:jt.Static,value:""},Ym=/[a-zA-Z0-9_]/;function Xm(t){if(!t)return[[]];if(t==="/")return[[Jm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=ue.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===ue.Static?i.push({type:jt.Static,value:l}):n===ue.Param||n===ue.ParamRegExp||n===ue.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:jt.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==ue.ParamRegExp){r=n,n=ue.EscapeNext;continue}switch(n){case ue.Static:c==="/"?(l&&f(),o()):c===":"?(f(),n=ue.Param):p();break;case ue.EscapeNext:p(),n=r;break;case ue.Param:c==="("?n=ue.ParamRegExp:Ym.test(c)?p():(f(),n=ue.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case ue.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=ue.ParamRegExpEnd:u+=c;break;case ue.ParamRegExpEnd:f(),n=ue.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===ue.ParamRegExp&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}const Jo="[^/]+?",Qm={sensitive:!1,strict:!1,start:!0,end:!0};var ve=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(ve||{});const Zm=/[.+*?^${}()[\]/\\]/g;function e_(t,e){const n=X({},Qm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[ve.Root];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=ve.Segment+(n.sensitive?ve.BonusCaseSensitive:0);if(p.type===jt.Static)f||(s+="/"),s+=p.value.replace(Zm,"\\$&"),m+=ve.Static;else if(p.type===jt.Param){const{value:w,repeatable:C,optional:F,regexp:D}=p;i.push({name:w,repeatable:C,optional:F});const O=D||Jo;if(O!==Jo){m+=ve.BonusCustomRegExp;try{`${O}`}catch(N){throw new Error(`Invalid custom RegExp for param "${w}" (${O}): `+N.message)}}let k=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(k=F&&l.length<2?`(?:/${k})`:"/"+k),F&&(k+="?"),s+=k,m+=ve.Dynamic,F&&(m+=ve.BonusOptional),C&&(m+=ve.BonusRepeatable),O===".*"&&(m+=ve.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=ve.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",w=i[p-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===jt.Static)u+=m.value;else if(m.type===jt.Param){const{value:w,repeatable:C,optional:F}=m,D=w in l?l[w]:"";if(Be(D)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const O=Be(D)?D.join("/"):D;if(!O)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function t_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===ve.Static+ve.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===ve.Static+ve.Segment?1:-1:0}function Il(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=t_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yo(r))return 1;if(Yo(s))return-1}return s.length-r.length}function Yo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const n_={strict:!1,end:!0,sensitive:!1};function r_(t,e,n){const r=e_(Xm(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function s_(t,e){const n=[],r=new Map;e=jo(n_,e);function s(f){return r.get(f)}function i(f,p,m){const w=!m,C=Qo(f);C.aliasOf=m&&m.record;const F=jo(e,f),D=[C];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of N)D.push(Qo(X({},C,{components:m?m.record.components:C.components,path:j,aliasOf:m?m.record:C})))}let O,k;for(const N of D){const{path:j}=N;if(p&&j[0]!=="/"){const ae=p.record.path,z=ae[ae.length-1]==="/"?"":"/";N.path=p.record.path+(j&&z+j)}if(O=r_(N,p,F),m?m.alias.push(O):(k=k||O,k!==O&&k.alias.push(O),w&&f.name&&!Zo(O)&&o(f.name)),wl(O)&&c(O),C.children){const ae=C.children;for(let z=0;z<ae.length;z++)i(ae[z],O,m&&m.children[z])}m=m||O}return k?()=>{o(k)}:Un}function o(f){if(vl(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=a_(f,n);n.splice(p,0,f),f.record.name&&!Zo(f)&&r.set(f.record.name,f)}function l(f,p){let m,w={},C,F;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw _n(ce.MATCHER_NOT_FOUND,{location:f});F=m.record.name,w=X(Xo(p.params,m.keys.filter(k=>!k.optional).concat(m.parent?m.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Xo(f.params,m.keys.map(k=>k.name))),C=m.stringify(w)}else if(f.path!=null)C=f.path,m=n.find(k=>k.re.test(C)),m&&(w=m.parse(C),F=m.record.name);else{if(m=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!m)throw _n(ce.MATCHER_NOT_FOUND,{location:f,currentLocation:p});F=m.record.name,w=X({},p.params,f.params),C=m.stringify(w)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:F,path:C,params:w,matched:D,meta:o_(D)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Xo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:i_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function i_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function o_(t){return t.reduce((e,n)=>X(e,n.meta),{})}function a_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Il(t,e[i])<0?r=i:n=i+1}const s=c_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function c_(t){let e=t;for(;e=e.parent;)if(wl(e)&&Il(t,e)===0)return e}function wl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ea(t){const e=Ue(Xr),n=Ue(bl),r=ke(()=>{const c=Gt(t.to);return e.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(mn.bind(null,u));if(p>-1)return p;const m=ta(c[l-2]);return l>1&&ta(u)===m&&f[f.length-1].path!==m?f.findIndex(mn.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&h_(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&_l(n.params,r.value.params));function a(c={}){if(d_(c)){const l=e[Gt(t.replace)?"replace":"push"](Gt(t.to)).catch(Un);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function l_(t){return t.length===1?t[0]:t}const u_=Fa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ea,setup(t,{slots:e}){const n=zn(ea(t)),{options:r}=Ue(Xr),s=ke(()=>({[na(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[na(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&l_(e.default(n));return t.custom?i:dc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),f_=u_;function d_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function h_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Be(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ta(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const na=(t,e,n)=>t??e??n,p_=Fa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Gs),s=ke(()=>t.route||r.value),i=Ue(qo,0),o=ke(()=>{let l=Gt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);ur(qo,ke(()=>o.value+1)),ur(Wm,a),ur(Gs,s);const c=cn();return kn(()=>[c.value,a.value,t.name],([l,u,f],[p,m,w])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!mn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ra(n.default,{Component:p,route:l});const m=f.props[u],w=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=dc(p,X({},w,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ra(n.default,{Component:F,route:l})||F}}});function ra(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const g_=p_;function m_(t){const e=s_(t.routes,t),n=t.parseQuery||Hm,r=t.stringifyQuery||Ko,s=t.history,i=wn(),o=wn(),a=wn(),c=nu(bt);let l=bt;rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_s.bind(null,y=>""+y),f=_s.bind(null,Sm),p=_s.bind(null,qn);function m(y,P){let A,x;return vl(y)?(A=e.getRecordMatcher(y),x=P):x=y,e.addRoute(x,A)}function w(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function C(){return e.getRoutes().map(y=>y.record)}function F(y){return!!e.getRecordMatcher(y)}function D(y,P){if(P=X({},P||c.value),typeof y=="string"){const g=vs(n,y,P.path),v=e.resolve({path:g.path},P),b=s.createHref(g.fullPath);return X(g,v,{params:p(v.params),hash:qn(g.hash),redirectedFrom:void 0,href:b})}let A;if(y.path!=null)A=X({},y,{path:vs(n,y.path,P.path).path});else{const g=X({},y.params);for(const v in g)g[v]==null&&delete g[v];A=X({},y,{params:f(g)}),P.params=f(P.params)}const x=e.resolve(A,P),K=y.hash||"";x.params=u(p(x.params));const d=Rm(r,X({},y,{hash:Em(K),path:x.path})),h=s.createHref(d);return X({fullPath:d,hash:K,query:r===Ko?jm(y.query):y.query||{}},x,{redirectedFrom:void 0,href:h})}function O(y){return typeof y=="string"?vs(n,y,c.value.path):X({},y)}function k(y,P){if(l!==y)return _n(ce.NAVIGATION_CANCELLED,{from:P,to:y})}function N(y){return z(y)}function j(y){return N(X(O(y),{replace:!0}))}function ae(y,P){const A=y.matched[y.matched.length-1];if(A&&A.redirect){const{redirect:x}=A;let K=typeof x=="function"?x(y,P):x;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=O(K):{path:K},K.params={}),X({query:y.query,hash:y.hash,params:K.path!=null?{}:y.params},K)}}function z(y,P){const A=l=D(y),x=c.value,K=y.state,d=y.force,h=y.replace===!0,g=ae(A,x);if(g)return z(X(O(g),{state:typeof g=="object"?X({},K,g.state):K,force:d,replace:h}),P||A);const v=A;v.redirectedFrom=P;let b;return!d&&Cm(r,x,A)&&(b=_n(ce.NAVIGATION_DUPLICATED,{to:v,from:x}),Ve(x,x,!0,!1)),(b?Promise.resolve(b):se(v,x)).catch(_=>et(_)?et(_,ce.NAVIGATION_GUARD_REDIRECT)?_:vt(_):Y(_,v,x)).then(_=>{if(_){if(et(_,ce.NAVIGATION_GUARD_REDIRECT))return z(X({replace:h},O(_.to),{state:typeof _.to=="object"?X({},K,_.to.state):K,force:d}),P||v)}else _=Ae(v,x,!0,h,K);return me(v,x,_),_})}function G(y,P){const A=k(y,P);return A?Promise.reject(A):Promise.resolve()}function $(y){const P=Qt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function se(y,P){let A;const[x,K,d]=$m(y,P);A=bs(x.reverse(),"beforeRouteLeave",y,P);for(const g of x)g.leaveGuards.forEach(v=>{A.push(St(v,y,P))});const h=G.bind(null,y,P);return A.push(h),De(A).then(()=>{A=[];for(const g of i.list())A.push(St(g,y,P));return A.push(h),De(A)}).then(()=>{A=bs(K,"beforeRouteUpdate",y,P);for(const g of K)g.updateGuards.forEach(v=>{A.push(St(v,y,P))});return A.push(h),De(A)}).then(()=>{A=[];for(const g of d)if(g.beforeEnter)if(Be(g.beforeEnter))for(const v of g.beforeEnter)A.push(St(v,y,P));else A.push(St(g.beforeEnter,y,P));return A.push(h),De(A)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),A=bs(d,"beforeRouteEnter",y,P,$),A.push(h),De(A))).then(()=>{A=[];for(const g of o.list())A.push(St(g,y,P));return A.push(h),De(A)}).catch(g=>et(g,ce.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function me(y,P,A){a.list().forEach(x=>$(()=>x(y,P,A)))}function Ae(y,P,A,x,K){const d=k(y,P);if(d)return d;const h=P===bt,g=rn?history.state:{};A&&(x||h?s.replace(y.fullPath,X({scroll:h&&g&&g.scroll},K)):s.push(y.fullPath,K)),c.value=y,Ve(y,P,A,h),vt()}let Ie;function Mt(){Ie||(Ie=s.listen((y,P,A)=>{if(!Ut.listening)return;const x=D(y),K=ae(x,Ut.currentRoute.value);if(K){z(X(K,{replace:!0,force:!0}),x).catch(Un);return}l=x;const d=c.value;rn&&Mm(Go(d.fullPath,A.delta),Yr()),se(x,d).catch(h=>et(h,ce.NAVIGATION_ABORTED|ce.NAVIGATION_CANCELLED)?h:et(h,ce.NAVIGATION_GUARD_REDIRECT)?(z(X(O(h.to),{force:!0}),x).then(g=>{et(g,ce.NAVIGATION_ABORTED|ce.NAVIGATION_DUPLICATED)&&!A.delta&&A.type===Ws.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Y(h,x,d))).then(h=>{h=h||Ae(x,d,!1),h&&(A.delta&&!et(h,ce.NAVIGATION_CANCELLED)?s.go(-A.delta,!1):A.type===Ws.pop&&et(h,ce.NAVIGATION_ABORTED|ce.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),me(x,d,h)}).catch(Un)}))}let _t=wn(),ie=wn(),W;function Y(y,P,A){vt(y);const x=ie.list();return x.length?x.forEach(K=>K(y,P,A)):console.error(y),Promise.reject(y)}function Qe(){return W&&c.value!==bt?Promise.resolve():new Promise((y,P)=>{_t.add([y,P])})}function vt(y){return W||(W=!y,Mt(),_t.list().forEach(([P,A])=>y?A(y):P()),_t.reset()),y}function Ve(y,P,A,x){const{scrollBehavior:K}=t;if(!rn||!K)return Promise.resolve();const d=!A&&Um(Go(y.fullPath,0))||(x||!A)&&history.state&&history.state.scroll||null;return li().then(()=>K(y,P,d)).then(h=>h&&Lm(h)).catch(h=>Y(h,y,P))}const we=y=>s.go(y);let Xt;const Qt=new Set,Ut={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:C,resolve:D,options:t,push:N,replace:j,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:Qe,install(y){y.component("RouterLink",f_),y.component("RouterView",g_),y.config.globalProperties.$router=Ut,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Gt(c)}),rn&&!Xt&&c.value===bt&&(Xt=!0,N(s.location).catch(x=>{}));const P={};for(const x in bt)Object.defineProperty(P,x,{get:()=>c.value[x],enumerable:!0});y.provide(Xr,Ut),y.provide(bl,Oa(P)),y.provide(Gs,c);const A=y.unmount;Qt.add(y),y.unmount=function(){Qt.delete(y),Qt.size<1&&(l=bt,Ie&&Ie(),Ie=null,c.value=bt,Xt=!1,W=!1),A()}}};function De(y){return y.reduce((P,A)=>P.then(()=>$(A)),Promise.resolve())}return Ut}function S_(){return Ue(Xr)}const __=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:()=>cr(()=>import("./Login-BB7k4JRf.js"),__vite__mapDeps([0,1])),meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:()=>cr(()=>import("./Register-Dw0F7dP8.js"),__vite__mapDeps([2,3])),meta:{requiresGuest:!0}},{path:"/forgot-password",name:"ForgotPassword",component:()=>cr(()=>import("./ForgotPassword-axLMQUxE.js"),__vite__mapDeps([4,5])),meta:{requiresGuest:!0}},{path:"/dashboard",name:"Dashboard",component:()=>cr(()=>import("./Dashboard-CWrXROuy.js"),__vite__mapDeps([6,7])),meta:{requiresAuth:!0}}],Sl=m_({history:zm(),routes:__});Sl.beforeEach(async(t,e,n)=>{const r=Ai();r.loading&&await r.initAuth();const s=t.matched.some(a=>a.meta.requiresAuth),i=t.matched.some(a=>a.meta.requiresGuest),o=!!r.user;s&&!o?n("/login"):i&&o?n("/dashboard"):n()});const Ks=Xf(cm),v_=ed();Ks.use(v_);const y_=Ai();y_.initAuth().then(()=>{Ks.use(Sl),Ks.mount("#app")});export{sm as _,Ar as a,E_ as b,Gi as c,b_ as d,Ne as e,gu as f,Du as g,gf as h,S_ as i,Gt as j,fr as o,cn as r,Ll as t,Ai as u,I_ as v,w_ as w};
