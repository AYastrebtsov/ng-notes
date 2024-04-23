var I=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var a=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},h=(e,t,s,r)=>(I(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);import{r as k}from"./index-BdMw_Ax9.js";import{j as W}from"./jsx-runtime-B_9IJGoR.js";var B=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},C=typeof window>"u"||"Deno"in globalThis;function ae(){}function ce(e,t){return typeof e=="function"?e(t):e}function X(e){return typeof e=="number"&&e>=0&&e!==1/0}function le(e,t){return Math.max(e+(t||0)-Date.now(),0)}function fe(e,t){const{type:s="all",exact:r,fetchStatus:n,predicate:c,queryKey:d,stale:l}=e;if(d){if(r){if(t.queryHash!==Y(d,t.options))return!1}else if(!K(t.queryKey,d))return!1}if(s!=="all"){const y=t.isActive();if(s==="active"&&!y||s==="inactive"&&y)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||n&&n!==t.state.fetchStatus||c&&!c(t))}function he(e,t){const{exact:s,status:r,predicate:n,mutationKey:c}=e;if(c){if(!t.options.mutationKey)return!1;if(s){if(R(t.options.mutationKey)!==R(c))return!1}else if(!K(t.options.mutationKey,c))return!1}return!(r&&t.state.status!==r||n&&!n(t))}function Y(e,t){return((t==null?void 0:t.queryKeyHashFn)||R)(e)}function R(e){return JSON.stringify(e,(t,s)=>x(s)?Object.keys(s).sort().reduce((r,n)=>(r[n]=s[n],r),{}):s)}function K(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!K(e[s],t[s])):!1}function q(e,t){if(e===t)return e;const s=D(e)&&D(t);if(s||x(e)&&x(t)){const r=s?e:Object.keys(e),n=r.length,c=s?t:Object.keys(t),d=c.length,l=s?[]:{};let y=0;for(let v=0;v<d;v++){const f=s?v:c[v];!s&&e[f]===void 0&&t[f]===void 0&&r.includes(f)?(l[f]=void 0,y++):(l[f]=q(e[f],t[f]),l[f]===e[f]&&e[f]!==void 0&&y++)}return n===d&&y===n?e:l}return t}function de(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function D(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function x(e){if(!U(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!U(s)||!s.hasOwnProperty("isPrototypeOf"))}function U(e){return Object.prototype.toString.call(e)==="[object Object]"}function Z(e){return new Promise(t=>{setTimeout(t,e)})}function ye(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?q(e,t):t}function me(e,t,s=0){const r=[...e,t];return s&&r.length>s?r.slice(1):r}function ve(e,t,s=0){const r=[t,...e];return s&&r.length>s?r.slice(0,-1):r}var be=Symbol(),S,p,T,A,$=(A=class extends B{constructor(){super();b(this,S,void 0);b(this,p,void 0);b(this,T,void 0);h(this,T,t=>{if(!C&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){a(this,p)||this.setEventListener(a(this,T))}onUnsubscribe(){var t;this.hasListeners()||((t=a(this,p))==null||t.call(this),h(this,p,void 0))}setEventListener(t){var s;h(this,T,t),(s=a(this,p))==null||s.call(this),h(this,p,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){a(this,S)!==t&&(h(this,S,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof a(this,S)=="boolean"?a(this,S):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},S=new WeakMap,p=new WeakMap,T=new WeakMap,A),ee=new $,F,w,L,G,te=(G=class extends B{constructor(){super();b(this,F,!0);b(this,w,void 0);b(this,L,void 0);h(this,L,t=>{if(!C&&window.addEventListener){const s=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",r)}}})}onSubscribe(){a(this,w)||this.setEventListener(a(this,L))}onUnsubscribe(){var t;this.hasListeners()||((t=a(this,w))==null||t.call(this),h(this,w,void 0))}setEventListener(t){var s;h(this,L,t),(s=a(this,w))==null||s.call(this),h(this,w,t(this.setOnline.bind(this)))}setOnline(t){a(this,F)!==t&&(h(this,F,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return a(this,F)}},F=new WeakMap,w=new WeakMap,L=new WeakMap,G),H=new te;function se(e){return Math.min(1e3*2**e,3e4)}function re(e){return(e??"online")==="online"?H.isOnline():!0}var V=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function pe(e){return e instanceof V}function we(e){let t=!1,s=0,r=!1,n,c,d;const l=new Promise((u,o)=>{c=u,d=o}),y=u=>{var o;r||(m(new V(u)),(o=e.abort)==null||o.call(e))},v=()=>{t=!0},f=()=>{t=!1},P=()=>!ee.isFocused()||e.networkMode!=="always"&&!H.isOnline(),i=u=>{var o;r||(r=!0,(o=e.onSuccess)==null||o.call(e,u),n==null||n(),c(u))},m=u=>{var o;r||(r=!0,(o=e.onError)==null||o.call(e,u),n==null||n(),d(u))},Q=()=>new Promise(u=>{var o;n=E=>{const O=r||!P();return O&&u(E),O},(o=e.onPause)==null||o.call(e)}).then(()=>{var u;n=void 0,r||(u=e.onContinue)==null||u.call(e)}),M=()=>{if(r)return;let u;try{u=e.fn()}catch(o){u=Promise.reject(o)}Promise.resolve(u).then(i).catch(o=>{var N;if(r)return;const E=e.retry??(C?0:3),O=e.retryDelay??se,J=typeof O=="function"?O(s,o):O,_=E===!0||typeof E=="number"&&s<E||typeof E=="function"&&E(s,o);if(t||!_){m(o);return}s++,(N=e.onFail)==null||N.call(e,s,o),Z(J).then(()=>{if(P())return Q()}).then(()=>{t?m(o):M()})})};return re(e.networkMode)?M():Q().then(M),{promise:l,cancel:y,continue:()=>(n==null?void 0:n())?l:Promise.resolve(),cancelRetry:v,continueRetry:f}}function ne(){let e=[],t=0,s=i=>{i()},r=i=>{i()},n=i=>setTimeout(i,0);const c=i=>{n=i},d=i=>{let m;t++;try{m=i()}finally{t--,t||v()}return m},l=i=>{t?e.push(i):n(()=>{s(i)})},y=i=>(...m)=>{l(()=>{i(...m)})},v=()=>{const i=e;e=[],i.length&&n(()=>{r(()=>{i.forEach(m=>{s(m)})})})};return{batch:d,batchCalls:y,schedule:l,setNotifyFunction:i=>{s=i},setBatchNotifyFunction:i=>{r=i},setScheduler:c}}var Ee=ne(),j,z,Se=(z=class{constructor(){b(this,j,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),X(this.gcTime)&&h(this,j,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(C?1/0:5*60*1e3))}clearGcTimeout(){a(this,j)&&(clearTimeout(a(this,j)),h(this,j,void 0))}},j=new WeakMap,z),g=k.createContext(void 0),je=e=>{const t=k.useContext(g);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Oe=({client:e,children:t})=>(k.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),W.jsx(g.Provider,{value:e,children:t}));export{Oe as Q,Se as R,B as S,Ee as a,re as b,we as c,de as d,Y as e,he as f,ve as g,R as h,pe as i,me as j,ee as k,ce as l,fe as m,ae as n,H as o,K as p,C as q,ye as r,be as s,le as t,je as u,X as v};