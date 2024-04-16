var G=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(G(s,t,"read from private field"),e?e.call(s):t.get(s)),n=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},o=(s,t,e,i)=>(G(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var l=(s,t,e)=>(G(s,t,"access private method"),e);import{S as Ct,d as J,n as Ot,q as lt,v as dt,t as St,k as Et,r as ft,a as vt,u as wt}from"./QueryClientProvider-DLasFzzO.js";import{f as Qt}from"./query-BvtTCI56.js";import{r as R}from"./index-BdMw_Ax9.js";import"./jsx-runtime-B_9IJGoR.js";import{s as It}from"./utils-km2FGkQ4.js";var y,a,M,p,E,U,g,L,x,D,w,Q,O,P,I,T,A,X,B,Y,j,Z,k,$,_,tt,V,et,W,st,z,gt,bt,Ft=(bt=class extends Ct{constructor(t,e){super();n(this,I);n(this,A);n(this,B);n(this,j);n(this,k);n(this,_);n(this,V);n(this,W);n(this,z);n(this,y,void 0);n(this,a,void 0);n(this,M,void 0);n(this,p,void 0);n(this,E,void 0);n(this,U,void 0);n(this,g,void 0);n(this,L,void 0);n(this,x,void 0);n(this,D,void 0);n(this,w,void 0);n(this,Q,void 0);n(this,O,void 0);n(this,P,new Set);this.options=e,o(this,y,t),o(this,g,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,a).addObserver(this),pt(r(this,a),this.options)?l(this,I,T).call(this):this.updateResult(),l(this,k,$).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return rt(r(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return rt(r(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,_,tt).call(this),l(this,V,et).call(this),r(this,a).removeObserver(this)}setOptions(t,e){const i=this.options,f=r(this,a);if(this.options=r(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");l(this,W,st).call(this),r(this,a).setOptions(this.options),i._defaulted&&!J(this.options,i)&&r(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,a),observer:this});const u=this.hasListeners();u&&yt(r(this,a),f,this.options,i)&&l(this,I,T).call(this),this.updateResult(e),u&&(r(this,a)!==f||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&l(this,A,X).call(this);const h=l(this,B,Y).call(this);u&&(r(this,a)!==f||this.options.enabled!==i.enabled||h!==r(this,O))&&l(this,j,Z).call(this,h)}getOptimisticResult(t){const e=r(this,y).getQueryCache().build(r(this,y),t),i=this.createResult(e,t);return xt(this,i)&&(o(this,p,i),o(this,U,this.options),o(this,E,r(this,a).state)),i}getCurrentResult(){return r(this,p)}trackResult(t,e){const i={};return Object.keys(t).forEach(f=>{Object.defineProperty(i,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),e==null||e(f),t[f])})}),i}trackProp(t){r(this,P).add(t)}getCurrentQuery(){return r(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=r(this,y).defaultQueryOptions(t),i=r(this,y).getQueryCache().build(r(this,y),e);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,e))}fetch(t){return l(this,I,T).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,p)))}createResult(t,e){var ct;const i=r(this,a),f=this.options,u=r(this,p),h=r(this,E),d=r(this,U),F=t!==i?t.state:r(this,M),{state:C}=t;let c={...C},at=!1,v;if(e._optimisticResults){const b=this.hasListeners(),K=!b&&pt(t,e),Rt=b&&yt(t,i,e,f);(K||Rt)&&(c={...c,...Qt(C.data,t.options)}),e._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:nt,errorUpdatedAt:ht,status:S}=c;if(e.select&&c.data!==void 0)if(u&&c.data===(h==null?void 0:h.data)&&e.select===r(this,L))v=r(this,x);else try{o(this,L,e.select),v=e.select(c.data),v=ft(u==null?void 0:u.data,v,e),o(this,x,v),o(this,g,null)}catch(b){o(this,g,b)}else v=c.data;if(e.placeholderData!==void 0&&v===void 0&&S==="pending"){let b;if(u!=null&&u.isPlaceholderData&&e.placeholderData===(d==null?void 0:d.placeholderData))b=u.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((ct=r(this,D))==null?void 0:ct.state.data,r(this,D)):e.placeholderData,e.select&&b!==void 0)try{b=e.select(b),o(this,g,null)}catch(K){o(this,g,K)}b!==void 0&&(S="success",v=ft(u==null?void 0:u.data,b,e),at=!0)}r(this,g)&&(nt=r(this,g),v=r(this,x),ht=Date.now(),S="error");const H=c.fetchStatus==="fetching",N=S==="pending",q=S==="error",ot=N&&H,ut=v!==void 0;return{status:S,fetchStatus:c.fetchStatus,isPending:N,isSuccess:S==="success",isError:q,isInitialLoading:ot,isLoading:ot,data:v,dataUpdatedAt:c.dataUpdatedAt,error:nt,errorUpdatedAt:ht,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>F.dataUpdateCount||c.errorUpdateCount>F.errorUpdateCount,isFetching:H,isRefetching:H&&!N,isLoadingError:q&&!ut,isPaused:c.fetchStatus==="paused",isPlaceholderData:at,isRefetchError:q&&ut,isStale:it(t,e),refetch:this.refetch}}updateResult(t){const e=r(this,p),i=this.createResult(r(this,a),this.options);if(o(this,E,r(this,a).state),o(this,U,this.options),r(this,E).data!==void 0&&o(this,D,r(this,a)),J(i,e))return;o(this,p,i);const f={},u=()=>{if(!e)return!0;const{notifyOnChangeProps:h}=this.options,d=typeof h=="function"?h():h;if(d==="all"||!d&&!r(this,P).size)return!0;const m=new Set(d??r(this,P));return this.options.throwOnError&&m.add("error"),Object.keys(r(this,p)).some(F=>{const C=F;return r(this,p)[C]!==e[C]&&m.has(C)})};(t==null?void 0:t.listeners)!==!1&&u()&&(f.listeners=!0),l(this,z,gt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,k,$).call(this)}},y=new WeakMap,a=new WeakMap,M=new WeakMap,p=new WeakMap,E=new WeakMap,U=new WeakMap,g=new WeakMap,L=new WeakMap,x=new WeakMap,D=new WeakMap,w=new WeakMap,Q=new WeakMap,O=new WeakMap,P=new WeakMap,I=new WeakSet,T=function(t){l(this,W,st).call(this);let e=r(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Ot)),e},A=new WeakSet,X=function(){if(l(this,_,tt).call(this),lt||r(this,p).isStale||!dt(this.options.staleTime))return;const e=St(r(this,p).dataUpdatedAt,this.options.staleTime)+1;o(this,w,setTimeout(()=>{r(this,p).isStale||this.updateResult()},e))},B=new WeakSet,Y=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,a)):this.options.refetchInterval)??!1},j=new WeakSet,Z=function(t){l(this,V,et).call(this),o(this,O,t),!(lt||this.options.enabled===!1||!dt(r(this,O))||r(this,O)===0)&&o(this,Q,setInterval(()=>{(this.options.refetchIntervalInBackground||Et.isFocused())&&l(this,I,T).call(this)},r(this,O)))},k=new WeakSet,$=function(){l(this,A,X).call(this),l(this,j,Z).call(this,l(this,B,Y).call(this))},_=new WeakSet,tt=function(){r(this,w)&&(clearTimeout(r(this,w)),o(this,w,void 0))},V=new WeakSet,et=function(){r(this,Q)&&(clearInterval(r(this,Q)),o(this,Q,void 0))},W=new WeakSet,st=function(){const t=r(this,y).getQueryCache().build(r(this,y),this.options);if(t===r(this,a))return;const e=r(this,a);o(this,a,t),o(this,M,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},z=new WeakSet,gt=function(t){vt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(r(this,p))}),r(this,y).getQueryCache().notify({query:r(this,a),type:"observerResultsUpdated"})})},bt);function Ut(s,t){return t.enabled!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function pt(s,t){return Ut(s,t)||s.state.data!==void 0&&rt(s,t,t.refetchOnMount)}function rt(s,t,e){if(t.enabled!==!1){const i=typeof e=="function"?e(s):e;return i==="always"||i!==!1&&it(s,t)}return!1}function yt(s,t,e,i){return(s!==t||i.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&it(s,e)}function it(s,t){return t.enabled!==!1&&s.isStaleByTime(t.staleTime)}function xt(s,t){return!J(s.getCurrentResult(),t)}var mt=R.createContext(!1),Dt=()=>R.useContext(mt);mt.Provider;function Pt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var Tt=R.createContext(Pt()),Mt=()=>R.useContext(Tt),Lt=(s,t)=>{(s.suspense||s.throwOnError)&&(t.isReset()||(s.retryOnMount=!1))},At=s=>{R.useEffect(()=>{s.clearReset()},[s])},Bt=({result:s,errorResetBoundary:t,throwOnError:e,query:i})=>s.isError&&!t.isReset()&&!s.isFetching&&i&&It(e,[s.error,i]),jt=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},kt=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,_t=(s,t,e)=>t.fetchOptimistic(s).catch(()=>{e.clearReset()});function Vt(s,t,e){if(typeof s!="object"||Array.isArray(s))throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');const i=wt(e),f=Dt(),u=Mt(),h=i.defaultQueryOptions(s);h._optimisticResults=f?"isRestoring":"optimistic",jt(h),Lt(h,u),At(u);const[d]=R.useState(()=>new t(i,h)),m=d.getOptimisticResult(h);if(R.useSyncExternalStore(R.useCallback(F=>{const C=f?()=>{}:d.subscribe(vt.batchCalls(F));return d.updateResult(),C},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),R.useEffect(()=>{d.setOptions(h,{listeners:!1})},[h,d]),kt(h,m))throw _t(h,d,u);if(Bt({result:m,errorResetBoundary:u,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw m.error;return h.notifyOnChangeProps?m:d.trackResult(m)}function Jt(s,t){return Vt(s,Ft,t)}export{Jt as u};
