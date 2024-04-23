var N=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(N(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},u=(t,e,s,a)=>(N(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var E=(t,e,s,a)=>({set _(i){u(t,e,i,s)},get _(){return r(t,e,a)}});import{S as Y,e as Z,a as l,m as $,f as L,n as m,s as H,g as re,j as ae,k as ie,o as U,l as ne,h as z,p as G}from"./QueryClientProvider-DLasFzzO.js";import{Q as ue}from"./query-BvtTCI56.js";import{M as he}from"./mutation-B5pq8hhe.js";var y,V,oe=(V=class extends Y{constructor(e={}){super();o(this,y,void 0);this.config=e,u(this,y,new Map)}build(e,s,a){const i=s.queryKey,h=s.queryHash??Z(i,s);let f=this.get(h);return f||(f=new ue({cache:this,queryKey:i,queryHash:h,options:e.defaultQueryOptions(s),state:a,defaultOptions:e.getQueryDefaults(i)}),this.add(f)),f}add(e){r(this,y).has(e.queryHash)||(r(this,y).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=r(this,y).get(e.queryHash);s&&(e.destroy(),s===e&&r(this,y).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){l.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return r(this,y).get(e)}getAll(){return[...r(this,y).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(a=>$(s,a))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(a=>$(e,a)):s}notify(e){l.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){l.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){l.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},y=new WeakMap,V),c,D,b,W,le=(W=class extends Y{constructor(e={}){super();o(this,c,void 0);o(this,D,void 0);o(this,b,void 0);this.config=e,u(this,c,[]),u(this,D,0)}build(e,s,a){const i=new he({mutationCache:this,mutationId:++E(this,D)._,options:e.defaultMutationOptions(s),state:a});return this.add(i),i}add(e){r(this,c).push(e),this.notify({type:"added",mutation:e})}remove(e){u(this,c,r(this,c).filter(s=>s!==e)),this.notify({type:"removed",mutation:e})}clear(){l.batch(()=>{r(this,c).forEach(e=>{this.remove(e)})})}getAll(){return r(this,c)}find(e){const s={exact:!0,...e};return r(this,c).find(a=>L(s,a))}findAll(e={}){return r(this,c).filter(s=>L(e,s))}notify(e){l.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){return u(this,b,(r(this,b)??Promise.resolve()).then(()=>{const e=r(this,c).filter(s=>s.state.isPaused);return l.batch(()=>e.reduce((s,a)=>s.then(()=>a.continue().catch(m)),Promise.resolve()))}).then(()=>{u(this,b,void 0)})),r(this,b)}},c=new WeakMap,D=new WeakMap,b=new WeakMap,W);function ce(t){return{onFetch:(e,s)=>{const a=async()=>{var T,S,I,j,B;const i=e.options,h=(I=(S=(T=e.fetchOptions)==null?void 0:T.meta)==null?void 0:S.fetchMore)==null?void 0:I.direction,f=((j=e.state.data)==null?void 0:j.pages)||[],K=((B=e.state.data)==null?void 0:B.pageParams)||[],x={pages:[],pageParams:[]};let C=!1;const ee=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(e.signal.aborted?C=!0:e.signal.addEventListener("abort",()=>{C=!0}),e.signal)})},te=e.options.queryFn&&e.options.queryFn!==H?e.options.queryFn:()=>(e.options.queryFn===H&&console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.options.queryHash}'`),Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),k=async(d,g,P)=>{if(C)return Promise.reject();if(g==null&&d.pages.length)return Promise.resolve(d);const A={queryKey:e.queryKey,pageParam:g,direction:P?"backward":"forward",meta:e.options.meta};ee(A);const se=await te(A),{maxPages:R}=e.options,_=P?re:ae;return{pages:_(d.pages,se,R),pageParams:_(d.pageParams,g,R)}};let O;if(h&&f.length){const d=h==="backward",g=d?fe:J,P={pages:f,pageParams:K},A=g(i,P);O=await k(P,A,d)}else{O=await k(x,K[0]??i.initialPageParam);const d=t??f.length;for(let g=1;g<d;g++){const P=J(i,O);O=await k(O,P)}}return O};e.options.persister?e.fetchFn=()=>{var i,h;return(h=(i=e.options).persister)==null?void 0:h.call(i,a,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=a}}}function J(t,{pages:e,pageParams:s}){const a=e.length-1;return t.getNextPageParam(e[a],e,s[a],s)}function fe(t,{pages:e,pageParams:s}){var a;return(a=t.getPreviousPageParam)==null?void 0:a.call(t,e[0],e,s[0],s)}var n,p,v,q,M,Q,w,F,X,pe=(X=class{constructor(t={}){o(this,n,void 0);o(this,p,void 0);o(this,v,void 0);o(this,q,void 0);o(this,M,void 0);o(this,Q,void 0);o(this,w,void 0);o(this,F,void 0);u(this,n,t.queryCache||new oe),u(this,p,t.mutationCache||new le),u(this,v,t.defaultOptions||{}),u(this,q,new Map),u(this,M,new Map),u(this,Q,0)}mount(){E(this,Q)._++,r(this,Q)===1&&(u(this,w,ie.subscribe(async t=>{t&&(await this.resumePausedMutations(),r(this,n).onFocus())})),u(this,F,U.subscribe(async t=>{t&&(await this.resumePausedMutations(),r(this,n).onOnline())})))}unmount(){var t,e;E(this,Q)._--,r(this,Q)===0&&((t=r(this,w))==null||t.call(this),u(this,w,void 0),(e=r(this,F))==null||e.call(this),u(this,F,void 0))}isFetching(t){return r(this,n).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return r(this,p).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=r(this,n).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const s=this.defaultQueryOptions(t),a=r(this,n).build(this,s);return t.revalidateIfStale&&a.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return r(this,n).findAll(t).map(({queryKey:e,state:s})=>{const a=s.data;return[e,a]})}setQueryData(t,e,s){const a=this.defaultQueryOptions({queryKey:t}),i=r(this,n).get(a.queryHash),h=i==null?void 0:i.state.data,f=ne(e,h);if(f!==void 0)return r(this,n).build(this,a).setData(f,{...s,manual:!0})}setQueriesData(t,e,s){return l.batch(()=>r(this,n).findAll(t).map(({queryKey:a})=>[a,this.setQueryData(a,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=r(this,n).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=r(this,n);l.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=r(this,n),a={type:"active",...t};return l.batch(()=>(s.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(a,e)))}cancelQueries(t={},e={}){const s={revert:!0,...e},a=l.batch(()=>r(this,n).findAll(t).map(i=>i.cancel(s)));return Promise.all(a).then(m).catch(m)}invalidateQueries(t={},e={}){return l.batch(()=>{if(r(this,n).findAll(t).forEach(a=>{a.invalidate()}),t.refetchType==="none")return Promise.resolve();const s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){const s={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},a=l.batch(()=>r(this,n).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let h=i.fetch(void 0,s);return s.throwOnError||(h=h.catch(m)),i.state.fetchStatus==="paused"?Promise.resolve():h}));return Promise.all(a).then(m)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=r(this,n).build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(m).catch(m)}fetchInfiniteQuery(t){return t.behavior=ce(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(m).catch(m)}resumePausedMutations(){return U.isOnline()?r(this,p).resumePausedMutations():Promise.resolve()}getQueryCache(){return r(this,n)}getMutationCache(){return r(this,p)}getDefaultOptions(){return r(this,v)}setDefaultOptions(t){u(this,v,t)}setQueryDefaults(t,e){r(this,q).set(z(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...r(this,q).values()];let s={};return e.forEach(a=>{G(t,a.queryKey)&&(s={...s,...a.defaultOptions})}),s}setMutationDefaults(t,e){r(this,M).set(z(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...r(this,M).values()];let s={};return e.forEach(a=>{G(t,a.mutationKey)&&(s={...s,...a.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...r(this,v).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Z(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===H&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...r(this,v).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){r(this,n).clear(),r(this,p).clear()}},n=new WeakMap,p=new WeakMap,v=new WeakMap,q=new WeakMap,M=new WeakMap,Q=new WeakMap,w=new WeakMap,F=new WeakMap,X);export{pe as Q};