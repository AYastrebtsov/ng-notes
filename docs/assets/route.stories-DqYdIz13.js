var as=(t,s,n)=>{if(!s.has(t))throw TypeError("Cannot "+n)};var a=(t,s,n)=>(as(t,s,"read from private field"),n?n.call(t):s.get(t)),u=(t,s,n)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,n)},q=(t,s,n,o)=>(as(t,s,"write to private field"),o?o.call(t,n):s.set(t,n),n);var m=(t,s,n)=>(as(t,s,"access private method"),n);import{j as l}from"./jsx-runtime-_e34SzbC.js";import{T as As,D as Bs}from"./index-Bsd13j-q.js";import{f as Hs,Q as Vs}from"./queryClient-DmQdYsl8.js";import{S as Ks,l as os,n as Gs,q as ds,u as zs,t as Ws,g as Xs,r as gs,a as Is,v as Ys,Q as $s}from"./QueryClientProvider--9jJntYg.js";import{s as Js,h as ys,d as Y,H as $}from"./utils-CLBOLGHf.js";import{r as c}from"./index-DVXBtNgz.js";import{S as Zs}from"./StyledRipple-CNImIO0m.js";import{P as sn}from"./api.esm-vZf3A5nu.js";import{C as nn,d as tn,e as an,c as Qs}from"./ripple.esm-D99TQ-Py.js";import{A as on}from"./ArrowIcon-nbckv7rS.js";import{a as rn}from"./index-BojaLiPF.js";import"./iframe-BWFzkPgu.js";import"../sb-preview/runtime.js";import"./index-CMHnigvr.js";import"./mapValues-BA7I9QKQ.js";import"./index-RMSiDl4v.js";import"./index-C-I6vmrZ.js";import"./index-8IunTYrG.js";import"./index-DrFu-skq.js";import"./extends-CCbyfPlC.js";var b,p,F,h,R,j,g,D,C,E,O,S,x,I,P,Q,U,rs,M,es,L,ps,A,ls,B,is,H,us,V,qs,J,Ns,Rs,en=(Rs=class extends Ks{constructor(s,n){super();u(this,P);u(this,U);u(this,M);u(this,L);u(this,A);u(this,B);u(this,H);u(this,V);u(this,J);u(this,b,void 0);u(this,p,void 0);u(this,F,void 0);u(this,h,void 0);u(this,R,void 0);u(this,j,void 0);u(this,g,void 0);u(this,D,void 0);u(this,C,void 0);u(this,E,void 0);u(this,O,void 0);u(this,S,void 0);u(this,x,void 0);u(this,I,new Set);this.options=n,q(this,b,s),q(this,g,null),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,p).addObserver(this),vs(a(this,p),this.options)?m(this,P,Q).call(this):this.updateResult(),m(this,A,ls).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return fs(a(this,p),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return fs(a(this,p),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,m(this,B,is).call(this),m(this,H,us).call(this),a(this,p).removeObserver(this)}setOptions(s,n){const o=this.options,r=a(this,p);if(this.options=a(this,b).defaultQueryOptions(s),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");m(this,V,qs).call(this),a(this,p).setOptions(this.options),o._defaulted&&!os(this.options,o)&&a(this,b).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,p),observer:this});const e=this.hasListeners();e&&ks(a(this,p),r,this.options,o)&&m(this,P,Q).call(this),this.updateResult(n),e&&(a(this,p)!==r||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&m(this,U,rs).call(this);const i=m(this,M,es).call(this);e&&(a(this,p)!==r||this.options.enabled!==o.enabled||i!==a(this,x))&&m(this,L,ps).call(this,i)}getOptimisticResult(s){const n=a(this,b).getQueryCache().build(a(this,b),s),o=this.createResult(n,s);return ln(this,o)&&(q(this,h,o),q(this,j,this.options),q(this,R,a(this,p).state)),o}getCurrentResult(){return a(this,h)}trackResult(s,n){const o={};return Object.keys(s).forEach(r=>{Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),n==null||n(r),s[r])})}),o}trackProp(s){a(this,I).add(s)}getCurrentQuery(){return a(this,p)}refetch({...s}={}){return this.fetch({...s})}fetchOptimistic(s){const n=a(this,b).defaultQueryOptions(s),o=a(this,b).getQueryCache().build(a(this,b),n);return o.isFetchingOptimistic=!0,o.fetch().then(()=>this.createResult(o,n))}fetch(s){return m(this,P,Q).call(this,{...s,cancelRefetch:s.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,h)))}createResult(s,n){var Ts;const o=a(this,p),r=this.options,e=a(this,h),i=a(this,R),y=a(this,j),k=s!==o?s.state:a(this,F),{state:z}=s;let f={...z},K=!1,_;if(n._optimisticResults){const T=this.hasListeners(),ts=!T&&vs(s,n),Ls=T&&ks(s,o,n,r);(ts||Ls)&&(f={...f,...Hs(z.data,s.options)}),n._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:hs,errorUpdatedAt:cs,status:w}=f;if(n.select&&f.data!==void 0)if(e&&f.data===(i==null?void 0:i.data)&&n.select===a(this,D))_=a(this,C);else try{q(this,D,n.select),_=n.select(f.data),_=gs(e==null?void 0:e.data,_,n),q(this,C,_),q(this,g,null)}catch(T){q(this,g,T)}else _=f.data;if(n.placeholderData!==void 0&&_===void 0&&w==="pending"){let T;if(e!=null&&e.isPlaceholderData&&n.placeholderData===(y==null?void 0:y.placeholderData))T=e.data;else if(T=typeof n.placeholderData=="function"?n.placeholderData((Ts=a(this,E))==null?void 0:Ts.state.data,a(this,E)):n.placeholderData,n.select&&T!==void 0)try{T=n.select(T),q(this,g,null)}catch(ts){q(this,g,ts)}T!==void 0&&(w="success",_=gs(e==null?void 0:e.data,T,n),K=!0)}a(this,g)&&(hs=a(this,g),_=a(this,C),cs=Date.now(),w="error");const Z=f.fetchStatus==="fetching",ss=w==="pending",ns=w==="error",bs=ss&&Z,_s=_!==void 0;return{status:w,fetchStatus:f.fetchStatus,isPending:ss,isSuccess:w==="success",isError:ns,isInitialLoading:bs,isLoading:bs,data:_,dataUpdatedAt:f.dataUpdatedAt,error:hs,errorUpdatedAt:cs,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>k.dataUpdateCount||f.errorUpdateCount>k.errorUpdateCount,isFetching:Z,isRefetching:Z&&!ss,isLoadingError:ns&&!_s,isPaused:f.fetchStatus==="paused",isPlaceholderData:K,isRefetchError:ns&&_s,isStale:ms(s,n),refetch:this.refetch}}updateResult(s){const n=a(this,h),o=this.createResult(a(this,p),this.options);if(q(this,R,a(this,p).state),q(this,j,this.options),a(this,R).data!==void 0&&q(this,E,a(this,p)),os(o,n))return;q(this,h,o);const r={},e=()=>{if(!n)return!0;const{notifyOnChangeProps:i}=this.options,y=typeof i=="function"?i():i;if(y==="all"||!y&&!a(this,I).size)return!0;const d=new Set(y??a(this,I));return this.options.throwOnError&&d.add("error"),Object.keys(a(this,h)).some(k=>{const z=k;return a(this,h)[z]!==n[z]&&d.has(z)})};(s==null?void 0:s.listeners)!==!1&&e()&&(r.listeners=!0),m(this,J,Ns).call(this,{...r,...s})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&m(this,A,ls).call(this)}},b=new WeakMap,p=new WeakMap,F=new WeakMap,h=new WeakMap,R=new WeakMap,j=new WeakMap,g=new WeakMap,D=new WeakMap,C=new WeakMap,E=new WeakMap,O=new WeakMap,S=new WeakMap,x=new WeakMap,I=new WeakMap,P=new WeakSet,Q=function(s){m(this,V,qs).call(this);let n=a(this,p).fetch(this.options,s);return s!=null&&s.throwOnError||(n=n.catch(Gs)),n},U=new WeakSet,rs=function(){if(m(this,B,is).call(this),ds||a(this,h).isStale||!zs(this.options.staleTime))return;const n=Ws(a(this,h).dataUpdatedAt,this.options.staleTime)+1;q(this,O,setTimeout(()=>{a(this,h).isStale||this.updateResult()},n))},M=new WeakSet,es=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,p)):this.options.refetchInterval)??!1},L=new WeakSet,ps=function(s){m(this,H,us).call(this),q(this,x,s),!(ds||this.options.enabled===!1||!zs(a(this,x))||a(this,x)===0)&&q(this,S,setInterval(()=>{(this.options.refetchIntervalInBackground||Xs.isFocused())&&m(this,P,Q).call(this)},a(this,x)))},A=new WeakSet,ls=function(){m(this,U,rs).call(this),m(this,L,ps).call(this,m(this,M,es).call(this))},B=new WeakSet,is=function(){a(this,O)&&(clearTimeout(a(this,O)),q(this,O,void 0))},H=new WeakSet,us=function(){a(this,S)&&(clearInterval(a(this,S)),q(this,S,void 0))},V=new WeakSet,qs=function(){const s=a(this,b).getQueryCache().build(a(this,b),this.options);if(s===a(this,p))return;const n=a(this,p);q(this,p,s),q(this,F,s.state),this.hasListeners()&&(n==null||n.removeObserver(this),s.addObserver(this))},J=new WeakSet,Ns=function(s){Is.batch(()=>{s.listeners&&this.listeners.forEach(n=>{n(a(this,h))}),a(this,b).getQueryCache().notify({query:a(this,p),type:"observerResultsUpdated"})})},Rs);function pn(t,s){return s.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&s.retryOnMount===!1)}function vs(t,s){return pn(t,s)||t.state.data!==void 0&&fs(t,s,s.refetchOnMount)}function fs(t,s,n){if(s.enabled!==!1){const o=typeof n=="function"?n(t):n;return o==="always"||o!==!1&&ms(t,s)}return!1}function ks(t,s,n,o){return(t!==s||o.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&ms(t,n)}function ms(t,s){return s.enabled!==!1&&t.isStaleByTime(s.staleTime)}function ln(t,s){return!os(t.getCurrentResult(),s)}var Fs=c.createContext(!1),un=()=>c.useContext(Fs);Fs.Provider;function qn(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var fn=c.createContext(qn()),yn=()=>c.useContext(fn),mn=(t,s)=>{(t.suspense||t.throwOnError)&&(s.isReset()||(t.retryOnMount=!1))},hn=t=>{c.useEffect(()=>{t.clearReset()},[t])},cn=({result:t,errorResetBoundary:s,throwOnError:n,query:o})=>t.isError&&!s.isReset()&&!t.isFetching&&o&&Js(n,[t.error,o]),bn=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},_n=(t,s)=>(t==null?void 0:t.suspense)&&s.isPending,Tn=(t,s,n)=>s.fetchOptimistic(t).catch(()=>{n.clearReset()});function dn(t,s,n){const o=Ys(n),r=un(),e=yn(),i=o.defaultQueryOptions(t);i._optimisticResults=r?"isRestoring":"optimistic",bn(i),mn(i,e),hn(e);const[y]=c.useState(()=>new s(o,i)),d=y.getOptimisticResult(i);if(c.useSyncExternalStore(c.useCallback(k=>{const z=r?()=>{}:y.subscribe(Is.batchCalls(k));return y.updateResult(),z},[y,r]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),c.useEffect(()=>{y.setOptions(i,{listeners:!1})},[i,y]),_n(i,d))throw Tn(i,y,e);if(cn({result:d,errorResetBoundary:e,throwOnError:i.throwOnError,query:o.getQueryCache().get(i.queryHash)}))throw d.error;return i.notifyOnChangeProps?d:y.trackResult(d)}function zn(t,s){return dn(t,en,s)}const gn=["postInfo"],vn=async()=>{const t=new URL("https://premialoyality.ru/api/page/getInfoPage"),s=await fetch(t,{method:"POST"});if(!s.ok)throw new Error("Произошел сбой запроса. Повторите попытку");const n=await s.json();if(n.status==="error")throw new Error("Произошла ошибка. Повторите попытку");if(n.status!=="success")throw new Error("Что-то пошло не так, повторите попытку");return n},Ds={result:{info:[{id:1,title:"ПРАВИЛА УЧАСТИЯ В ПРОГРАММЕ ЛОЯЛЬНОСТИ «ПРЕМИЯ»",text:`<p style="text-align:center"><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Настоящие Правила определяют условия участия в программе лояльности &laquo;Премия&raquo; (далее &ndash; Программа) и являются публичной офертой ООО &laquo;Смарт&raquo; на участие в Программе на определенных Правилами условиях.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ТЕРМИНЫ И ИХ ОПРЕДЕЛЕНИЯ:</span></span></strong></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Оператор</strong>&raquo; - общество с ограниченной ответственностью &laquo;Смарт&raquo; (ОГРН 1112468003284, ИНН 2464231675, юридический адрес: Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17), обеспечивающее реализацию Программы и осуществляющее управление Программой.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Участник</strong>&raquo; - физическое лицо, являющееся держателем Бонусной карты и присоединившееся к Программе (совершившее акцепт публичной оферты) любым из обозначенных в Правилах способом.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонусная карта</strong>&raquo; - имеющая уникальный номер пластиковая и/или виртуальная карта, используемая для идентификации Участника и получения участником Поощрений. Бонусная карта не является банковской картой; зачисление денежных средств на Бонусную карту, а также снятие денежных средств с Бонусной карты невозможны.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Пластиковая карта</strong>&raquo; - пластиковая бонусная карта, приобретаемая Участником в торговых точках Оператора.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Виртуальная карта</strong>&raquo; - виртуальная бонусная карта, оформляемая Участником в Мобильном приложении в виде штрих-кода (</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">QR</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">-кода). Имеющаяся у Участника Пластиковая карта может быть зарегистрирована в Мобильном приложении в качестве Виртуальной карты.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонус</strong>&raquo; - условная единица, зачисляемая Оператором на Бонусный счёт Участника Программы в установленном настоящими Правилами порядке и списываемая с Бонусного счёта в случае использования Бонусов для получения скидки при приобретении товаров/услуг в торговых точках Оператора. Бонус не является и не может являться средством платежа, не имеет денежного выражения, не может быть обналичен, подарен или иным образом передан третьему лицу по сделке, а также передан по наследству.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Премия&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> - количество Бонусов, начисляемое Участнику в связи с наступлением определенных Оператором условий.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Бонусный счёт</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&raquo; - совокупность хранящихся у Оператора информационных данных о количестве начисленных, списанных Бонусов, а также о текущем балансе Бонусов каждого Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Поощрение</strong>&raquo; - выгода, предоставляемая Участнику при приобретении товаров/услуг в торговых точках Оператора. Формы Поощрения:</span></span></p>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">предоставление скидки с цены товара/услуги при предъявлении Бонусной карты в размере, равном количеству списанных с Бонусного счёта Участника Бонусов;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">предоставление скидки с цены товара/услуги при предъявлении Бонусной карты в установленном Оператором размере без одновременного списания Бонусов с Бонусного счёта Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">иные формы по усмотрению Оператора.</span></span></li>\r
</ul>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Прямая скидка&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> - скидка с цены товара/услуги без одновременного списания Бонусов с Бонусного счёта Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонусная операция</strong>&raquo; - совершенная Участником операция по приобретению товаров или услуг в торговых точках Оператора, являющаяся основанием для начисления Бонусов на Бонусный счёт Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Сайт Программы</strong>&raquo; - </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">www</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">krasyar</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ru</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">/</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">premia</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Мобильное приложение</strong>&raquo; - специализированное программное обеспечение для установки на мобильные устройства на базе платформ </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">IOS</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> и </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Android</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Контакт-Центр</strong>&raquo; - организованный Оператором или привлеченными им лицами по телефону 8-800-775-89-50 центр поддержки Программы, осуществляющий информационно-справочное обслуживание Участников (звонок на территории Российской Федерации бесплатный).</span></span></p>\r
\r
<p>&nbsp;</p>\r
\r
<ol>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ОБЩИЕ ПОЛОЖЕНИЯ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В момент присоединения к Программе в порядке, установленном в п.2.1. Правил, Участник принимает и обязуется безоговорочно выполнять условия настоящих Правил (акцептует публичную оферту).</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе в любое время в одностороннем порядке вносить изменения в Правила, разместив актуальную редакцию Правил на Сайте Программы и в Мобильном приложении с указанием даты вступления новой редакции в силу.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе утверждать дополнения к Правилам, действующие в течение ограниченного срока действия и/или в отношении ограниченного круга торговых точек Оператора. Информация об утверждении/отмене таких дополнений размещается на сайте Программы.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник обязуется самостоятельно отслеживать внесение изменений в Правила на сайте Программы и/или в Мобильном приложении. Совершение Участником любой операции, направленной на начисление или списание Бонусов с Бонусного счёта, после вступления в силу изменений в Правила является подтверждением согласия Участника с новой редакцией Правил. В случае несогласия с внесенными в Правила изменениями Участник вправе отказаться от участия в Программе в порядке, предусмотренном в разделе 6 настоящих Правил.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="3">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Программа действует во всех торговых точках Оператора, осуществляющих деятельность под коммерческими обозначениями &laquo;Красный Яр&raquo;, &laquo;Батон&raquo;, &laquo;Батончик&raquo;. При наличии ограничений, распространяющихся на конкретные торговые точки (невозможность начисления или списания бонусов или иные ограничения), информация о таких ограничениях размещается непосредственно в таких торговых точках.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Программа действует до её отмены по решению Оператора. Информация об отмене Программы размещается на Сайте Программы.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="2">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ПРИСОЕДИНЕНИЕ К ПРОГРАММЕ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участником Программы может быть любое физическое лицо, в соответствии с Гражданским кодексом РФ обладающее гражданской дееспособностью. Физическое лицо признается Участником Программы <strong>с момента получения Бонусной карты </strong>(приобретения Пластиковой карты либо оформления Виртуальной карты). Фактом предъявления Бонусной карты при совершении покупки в торговой точке Оператора Участник дополнительно подтверждает ознакомление и согласие с настоящими Правилами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Возможность списывать Бонусы <strong>доступна только Участникам, зарегистрировавшим Бонусную карту.</strong></span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Регистрация Бонусной карты производится путём привязки к номеру мобильного телефона Участника одним из следующих способов:</span></span>\r
		<ul>\r
			<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
			<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span></li>\r
		</ul>\r
		</li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">На один номер мобильного телефона может быть зарегистрирована только одна активная Бонусная карта, при этом указанный при регистрации номер телефона автоматически авторизуется для управления Бонусным счётом Участника с помощью ввода последних 4 цифр номера сброс-звонка или вводом ранее придуманного Участником пароля.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник Программы обязан обеспечить конфиденциальность данных, использованных им при регистрации в Мобильном приложении.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник Программы несет ответственность за достоверность данных, указанных при регистрации в Программе, а также за своевременное обновление этих данных.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="3">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">НАЧИСЛЕНИЕ БОНУСОВ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В рамках действия Программы на Бонусный счёт Участника начисляются Бонусы, которые впоследствии могут быть использованы Участником для получения скидки. Бонусы начисляются:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При совершении Участником Бонусных операций;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При выполнении Участником иных условий, определенных Оператором;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В иных случаях, определенных Оператором.</span></span>\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор в одностороннем порядке определяет перечень товаров и услуг, при приобретении которых на Бонусный счёт Участника начисляется определенное количество Бонусов (Бонусные операции), а также количество Бонусов, начисляемых за совершение Бонусных операций. Оператором могут быть предусмотрены следующие способы определения количества Бонусов, подлежащих начислению за совершение Бонусных операций:</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В процентах от цены конкретного товара/услуги;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В твердой сумме при приобретении конкретного товара/услуги;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В процентах от общей суммы покупки;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В твердой сумме при совершении покупки на определенную сумму;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Иные способы по усмотрению Оператора.</span></span></li>\r
</ul>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе ограничить максимальное количество товаров, при приобретении которых начисляются Бонусы, а также установить иные ограничения.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="3">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Если Оператором не установлено иное, Бонусы начисляются Участникам за приобретение товаров из категорий, выбранных Участником в Мобильном приложении.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Количество начисляемых на Бонусный счёт Участника в текущем месяце Бонусов определяется, помимо прочего, присвоенным Бонусной карте в предшествующем месяце <strong>статусом</strong>. Правила присвоения статусов определены в разделе 5 Правил. Количество Бонусов, начисляемых Участникам разных статусов, определяется Оператором дополнительно.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о товарах и услугах, при приобретении которых начисляются Бонусы, о действующих ограничениях, а также о способах начисления и количестве Бонусов может размещаться непосредственно в торговых точках Оператора, на Сайте Программы, в Мобильном приложении, в рекламной и печатной продукции Оператора, а также доводиться до сведения Участников иными способами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае, если при расчёте за покупку Участник использует купон, предоставляющий право на применение разовой скидки определенного размера, или списывает Бонусы, то Бонусы будут начислены на сумму покупки после применения скидки.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Предъявление Бонусной карты кассиру торговой точки при совершении Бонусной операции до момента оплаты товара/услуги является обязательным условием для начисления Бонусов.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы начисляются Оператором на Бонусный счёт Участника в течение суток с момента совершения Бонусной операции. По техническим причинам указанный срок может быть продлен Оператором в одностороннем порядке. Оператор не несет ответственности за какой-либо ущерб, причиненный вследствие невозможности своевременно начислить Бонусы.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о Бонусах, которые будут начислены Участнику за совершенную Бонусную операцию, размещается в Мобильном приложении. Участник самостоятельно контролирует соответствие количества Бонусов, которые должны быть начислены в соответствии с размещенной в торговой точке рекламной информацией, количеству Бонусов, указанному в Мобильном приложении.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="4">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">СПИСАНИЕ БОНУСОВ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Начисленные на Бонусный счёт Участника Бонусы могут быть использованы Участником для получения скидки при приобретении товаров/услуг в торговых точках Оператора на условиях, предусмотренных Правилами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы при совершении покупки могут быть списаны только при условии предъявления Бонусной карты до закрытия кассового чека. Участник самостоятельно определяет сумму Бонусов, подлежащую списанию с Бонусного счёта Участника для получения скидки, но в любом случае не более максимально доступной к списанию суммы. Распределение общей суммы скидки по стоимости приобретаемых товаров производится по усмотрению Оператора.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Списание Бонусов при получении скидки происходит по курсу 1 Бонус = 1 Рубль скидки. Количество Бонусов, используемых Участником для получения скидки, определяется Участником самостоятельно с учётом следующих ограничений:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Размер скидки не может превышать общего количества Бонусов на Бонусном счёте Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Максимальный размер скидки при совершении одной покупки по одному кассовому чеку &ndash; не более 50%;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Скидка не предоставляется на товар, за приобретение которого на Бонусный счёт Участника начисляются Бонусы &ndash; стоимость такого товара оплачивается полностью;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При приобретении товара, в отношении которого законодательством установлена минимальная розничная цена, максимальный размер скидки на данный товар рассчитывается по формуле: цена товара минус минимальная розничная цена;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В соответствии с пп. &laquo;б&raquo; п.1 ст.16 федерального закона от 23.02.2013г. №15-ФЗ &laquo;Об охране здоровья граждан от воздействия окружающего табачного дыма и последствий потребления табака&raquo; при приобретении табачных изделий применение Бонусов для получения скидки невозможно;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В течение одного календарного месяца с одного Бонусного счёта может быть списано не более 2000 бонусов, лимит списаний будет отображаться в мобильном приложении Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе установить предельный процент скидки, которая может быть предоставлена Участнику при совершении покупки.</span></span></li>\r
</ul>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператором могут устанавливаться иные ограничения при приобретении товаров или услуг с использованием Бонусов, информация о которых доводится до Участников в порядке, установленном Правилами.</span></span></p>\r
\r
<ul>\r
	<li style="list-style-type:none">\r
	<ol start="4">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Использование Бонусов для получения скидки возможно при совершении любой покупки в торговых точках Оператора, за исключением следующих случаев:</span></span></li>\r
	</ol>\r
	</li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">отсутствие регистрации в программе лояльности;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">отсутствие связи с сервером Оператора в торговой точке, в которой происходит покупка;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">неисправность Бонусной карты участника или оборудования, используемого в торговой точке для считывания Бонусных карт;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">иные случаи, препятствующие получению Участником скидки при совершении покупки.</span></span>\r
	<ol start="5">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Восстановление Бонусов, списанных по инициативе Участника при получении скидки, не производится.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае возврата Участником товара, приобретенного с использованием Бонусов, Участнику возвращаются денежные средства, фактически уплаченные за товар. Бонусы, использованные для получения скидки с цены возвращенного товара, восстанавливаются на Бонусном счёте Участника в течение 14 (четырнадцати) дней с даты возврата.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе по своему усмотрению при совершении каждой покупки предоставить Участнику, предъявившему Бонусную карту, скидку в размере не более 99 (девяносто девяти) копеек со списанием с Бонусного счёта Участника соответствующего количества Бонусов &ndash; подтверждение от Участника в этом случае не требуется. Участник не вправе требовать какого-либо возмещения Бонусов, списанных (аннулированных) с Бонусного счёта как по инициативе Участника, так и по инициативе Оператора в предусмотренных Правилами случаях.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы автоматически аннулируются и не могут быть использованы для получения Поощрения по истечении 6 (шести) месяцев с даты их начисления. В отношении некоторых категорий Бонусов Оператор вправе установить более короткий срок до их аннулирования, который будет отображен в мобильном приложении.</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="5">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ПРЯМАЯ СКИДКА</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В определенных Оператором случаях Участнику может предоставляться скидка с цены товара без списания Бонусов с Бонусного счёта (прямая скидка). </span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Условием получения прямой скидки в дискаунтерах &laquo;Батон&raquo; и &laquo;Батончик&raquo; является предъявление Бонусной карты кассиру при расчёте за товар. Для получения прямой скидки в гастрономах &laquo;Красный Яр&raquo; кассиру необходимо предъявить <strong>зарегистрированную</strong> Бонусную карту.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Количество товаров, которые могут быть приобретены с прямой скидкой, может быть ограничено.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="6">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">СТАТУСЫ БОНУСНОЙ КАРТЫ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Вид и величина Поощрения, предоставляемого Участнику в расчётном месяце, в числе прочего определяются статусом, присвоенным Бонусной карте по итогам предыдущего месяца.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Изменение статуса Бонусной карты происходит автоматически в 00:00 часов каждого первого дня месяца. В случае, если изменение статуса не произошло автоматически, Оператор осуществляет такое изменение по заявлению Участника, переданного Оператору по телефону контакт-центра либо через Мобильное приложение или Сайт Программы. Количество Бонусов, начисленных Участнику с первого числа месяца по дату фактического изменения статуса, пересчитывается в соответствии с корректным статусом Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Статус Бонусной карты присваивается исходя из общей стоимости совершенных покупок в торговых точках Оператора в прошедшем месяце. Покупка считается совершенной в момент закрытия кассового чека. Не учитываются для целей присвоения статуса покупки, совершенные в течение часа после совершения предыдущей покупки, а также покупки, совершенные без предъявления Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Виды статусов Бонусных карт:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Просто так&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму по 2 999,99 (две тысячи девятьсот девяносто девять) рублей 99 копеек включительно;</span></span></li>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Для друзей&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму от 3 000,00 (трех тысяч) рублей по 6 999,99 (шесть тысяч девятьсот девяносто девять) рублей 99 копеек включительно;</span></span></li>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;С любовью&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму от 7000,00 (семи тысяч) рублей и более.</span></span>\r
	<ol start="5">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о статусе Бонусной карты отображается в Мобильном приложении</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="7">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">БЛОКИРОВКА БОНУСНОГО СЧЁТА И ПЛАСТИКОВОЙ КАРТЫ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник вправе в любой момент отказаться от участия в Программе путем блокировки Бонусного счёта одним из следующих способов:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span>\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник автоматически исключается из Программы, а его Бонусный счёт блокируется в случае отзыва Участником согласия на обработку персональных данных.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе в одностороннем порядке заблокировать Бонусный счёт любого Участника без предварительного предупреждения и последующего уведомления в случае нарушения Участником настоящих Правил, предоставления Участником Оператору недостоверных или некорректных сведений, а также по иным причинам по усмотрению Оператора. В случае блокировки Бонусного счёта по изложенным в настоящем пункте основаниям все Бонусы на Бонусном счёте аннулируются Оператором в одностороннем порядке без какого-либо возмещения.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае прекращения участия в Программе по любому основанию все Бонусы на Бонусном счёте Участника аннулируются, а Бонусная карта блокируется.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник несет ответственность за сохранность Пластиковой карты и ограничение доступа к ней третьих лиц. Оператор особо оговаривает, что факт предъявления Бонусной карты является достаточным основанием для списания или начисления Бонусов на Бонусный счёт - Оператор не проверяет личность лица, предъявившего Бонусную карту. Оператор не возмещает Участнику Бонусы, списанные с Бонусного счёта в связи с предъявлением незаблокированной в установленном Правилами порядке Пластиковой карты Участника при совершении покупки третьими лицами, получившими доступ к Пластиковой карте.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае утраты либо повреждения Пластиковой карты Участник осуществляет её блокировку одним из следующих способов:</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span>\r
	<ol start="7">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае блокировки Пластиковой карты без блокировки Бонусного счёта Участник может использовать Виртуальную карту, а также приобрести новую Пластиковую карту и привязать её к тому же номеру телефона &ndash; в этом случае Бонусы на Бонусном счёте не аннулируются.</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="8">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Присоединяясь к Программе и регистрирую Бонусную карту, Участник самостоятельно и по своей инициативе предоставляет Оператору следующие персональные данные: фамилия, имя, отчество, пол; год, месяц и дата рождения; год, месяц и дата рождения несовершеннолетних детей; номер мобильного телефона, электронная почта, место жительства (город, улица, дом) и предоставляет Оператору и привлеченным Оператором к реализации Программы юридическим лицам право осуществлять обработку указанных персональных данных с использованием средств автоматизации или без таковых, в том числе их сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение. </span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник предоставляет Оператору и привлеченным Оператором к реализации Программы юридическим лицам согласие на обработку своих персональных данных в целях, связанных с обеспечением нормального функционирования Программы, выполнением Оператором обязательств, вытекающих из Правил, оценкой и анализом функционирования Программы, получением от Оператора уведомлений и информации, связанных с функционированием программы, а также получения рекламных объявлений Оператора. Согласие предоставляется Участником на весь срок действия Программы.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник предоставляет Оператору право обрабатывать информацию о совершенных Участником с использованием Бонусной карты покупках в торговых точках Оператора с целью обеспечения нормального функционирования Программы, направления Участнику персональных предложений, а также проведения любых статистических, маркетинговых и иных исследований.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Согласие Участника на обработку персональных данных может быть отозвано Участником в любой момент путем направления на юридический адрес Оператора (Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17) письменного уведомления об отзыве согласия с указанием фамилии, имени и отчества Участника, а также номера Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Регистрируя Бонусную карту, Участник выражает свое согласие на получение от Оператора на свой мобильный телефон и адрес электронной почты, указанные при регистрации Бонусной карты, уведомлений, объявлений, сообщений, непосредственной связанных с функционированием Программы, а также объявлений и сообщений рекламного характера. Участник вправе отказаться от получения таких сообщений через Контакт-центр, а также направив на юридический адрес Оператора письменный отказ.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>`},{id:2,title:"Пользовательское соглашение",text:`<p>Настоящее Пользовательское соглашение (Соглашение) определяет порядок и условия использования Сайта и его функционала (сервиса) Пользователем. <br>\r
 <br>\r
1. Общие положения.<br>\r
1.1. Пользователь обязан ознакомиться с Соглашением до момента использования сервиса Сайта. <br>\r
1.2. Использование Пользователем сервиса Сайта подтверждает ознакомление Пользователя с Соглашением и согласие с его условиями. Пользователь принимает условия Соглашения в полном объеме и без каких-либо изъятий.<br>\r
1.3. Компания вправе в любое время в одностороннем порядке вносить изменения в Соглашение, при этом актуальная редакция Соглашения размещается Компанией на Сайте с указанием даты вступления редакции в силу. В момент размещения на Сайте Соглашения в новой редакции предыдущая редакция признается утратившей силу.<br>\r
1.4. Пользователь обязуется самостоятельно отслеживать внесение изменений в Соглашение на Сайте. Совершение Пользователем действий по использованию сервиса Сайта после вступления в силу изменений в Соглашение является подтверждением ознакомления и согласия Пользователя с новой редакцией Соглашения. В случае несогласия с внесенными в Соглашение изменениями Пользователь должен отказаться от использования сервиса Сайта. <br>\r
1.5. К отношениям между Компанией и Пользователем также применяются соглашения и правила, указанные в тексте настоящего Соглашения. <br>\r
2. Термины и определения<br>\r
«Компания» - общество с ограниченной ответственностью «Смарт» (ОГРН 1112468003284, ИНН 2464231675, юридический адрес: Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17). <br>\r
«Пользователь» – лицо, использующее Сайт и его функционал для ознакомления с представленными в нем материалами. <br>\r
 «Сайт» – совокупность информационных материалов, размещённых в сети Интернет по адресу: www.premia.krasyar.ru<br>\r
Использование сервиса Сайта. <br>\r
2.1. Пользователь вправе использовать сервис Сайта в личных, семейных, домашних и иных целях, не связанных с осуществлением предпринимательской деятельности и в количествах, обеспечивающих разумную уверенность Компании в соблюдении настоящего условия. <br>\r
2.2. Для использования сервиса Сайта Пользователь вводит имя, фамилию, отчество, номер телефона, адрес электронной почты;<br>\r
2.3. Используя сервис Сайта Пользователь тем самым:<br>\r
• подтверждает свою дееспособность и финансовую состоятельность;<br>\r
• соглашается принимать от Компании звонки и сообщения на номер телефона и адрес электронной почты, указанные при регистрации;<br>\r
• принимает на себя ответственность за исполнение обязательств, возникающих у него вследствие использования сервиса Сайта, в том числе по оплате и приемке от Компании заказанного товара;<br>\r
• подтверждает и принимает на себя ответственность за точность, полноту и достоверность вводимых им данных;<br>\r
• принимает на себя риски, связанные с допущенными им ошибками и неточностями в предоставлении личных данных;<br>\r
2.4. Пользователь несет ответственность за полноту, достаточность и корректность данных, введенных при использовании сервиса Сайта.<br>\r
2.5. В случае выявления факта предоставления Пользователем недостоверной информации при использовании сервиса Сайта Компания имеет право отказать Пользователю в использовании сервиса. Компания не несет ответственности за последствия предоставления Пользователем недостоверной информации.<br>\r
2.6. При использовании Сайта Пользователь не вправе: <br>\r
• выдавать себя за другого человека или представителя организации и/или сообщества без достаточных на то прав;<br>\r
• нарушать нормальную работу Сайта; <br>\r
• использовать сервис Сайта в противоправных целях;<br>\r
• содействовать действиям, направленным на нарушение ограничений и запретов, налагаемых Соглашением.<br>\r
2.7. Компания вправе направлять Пользователю информационные сообщения посредством любых средств связи. Используя сервис Сайта, Пользователь также в соответствии с ч. 1 ст. 18 Федерального закона «О рекламе» дает свое согласие на получение сообщений рекламного характера. Пользователь вправе отказаться от получения сообщений рекламного характера путем направления уведомления.<br>\r
2.8. При использования сервиса Сайта стороны соглашения руководствуются Правилами работы сервиса, Правилами возврата товара и иными документами, регламентирующих порядок и условия использования сервиса Сайта.<br>\r
3. Персональные данные<br>\r
3.1. Информация, предоставленная Пользователем, является конфиденциальной.<br>\r
3.2. Принимая настоящее Соглашение, Пользователь дает Компании согласие на обработку своих персональных данных, сообщенных Пользователем при использовании сервиса Сайта, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными Пользователя, в том числе на сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, обезличивание, блокирование, удаление, уничтожение персональных данных, передачу персональных данных (распространение, предоставление, доступ) Пользователя третьими лицами Компании. При обработке персональных данных Компания использует следующие способы: автоматизированный, неавтоматизированный, смешанный.<br>\r
3.3. Пользователь предоставляет Компании и привлеченным Компанией лицам согласие на обработку своих персональных данных в целях, связанных с оформлением заказов, выполнением Компанией обязательств, вытекающих из настоящего Соглашения, обеспечением нормального функционирования Сайта в соответствии с настоящим Соглашением, оценкой и анализом функционирования Сайта, обеспечения защиты и безопасности персональных данных, получением от Компании уведомлений и информации, связанных с функционированием Сайта, а также рекламных объявлений Компании. <br>\r
3.4. Пользователь предоставляет Компании право обрабатывать информацию о совершенных Пользователем покупках дистанционных способом с целью обеспечения нормального функционирования Сайта, направления Пользователю персональных предложений, а также проведения любых статистических, маркетинговых и иных исследований.<br>\r
3.5. Согласие на обработку персональных данных даётся Пользователем до достижения целей обработки персональных данных или до момента утраты необходимости в достижении таких целей. <br>\r
3.6. Согласие Пользователя на обработку персональных данных может быть отозвано Пользователем в любой момент путем направления на юридический адрес Компании (Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17) письменного уведомления об отзыве согласия.<br>\r
3.7. Компания вправе использовать технологию cookies. (cookies — служебная информация, посылаемая веб-сервером на компьютер пользователя, для сохранения в браузере. Применяется для сохранения данных, специфичных для данного пользователя и используемых веб-сервером для различных целей). Cookies не содержат конфиденциальную информацию и не передаются третьим лицам.<br>\r
4. Интеллектуальная собственность <br>\r
4.1. Права на Сайт, в том числе раскладку и компоненты, включая товарные знаки, логотипы и доменные имена, размещенные на Сайте, защищены действующим законодательством об интеллектуальной собственности и принадлежат Компании либо используются Компанией на законных основаниях, и их использование Вами возможно только с разрешения Компании.<br>\r
4.2. Использование Сайта допускается только в целях, определенных в п. 3.1. Соглашения. <br>\r
4.3. Запрещено копировать, воспроизводить, изменять, редактировать, скачивать, модифицировать, декомпилировать, передавать или распространять в какой бы то ни было форме, на каких бы то ни было носителях информации, целиком или частично, какие-либо компоненты Сайта без получения предварительного письменного согласия Компании.<br>\r
4.4. Копирование Сайта или каких-либо его компонентов разрешено только для личного использования в некоммерческих целях на Вашем личном электронном устройстве.<br>\r
4.5. При любом разрешенном использовании материалов Сайта или его компонентов:<br>\r
• необходимо сохранять объекты, содержащиеся на Сайте, в неизменном виде с сохранением в том числе водяных знаков, меток и других официальных уведомлений и указаний на принадлежность авторских и исключительных прав; <br>\r
• запрещено предпринимать попытки к изменению, в том числе с целью уничтожения или изменения каких-либо указаний на правообладателя.<br>\r
4.6. Использование элементов Сайта без разрешения Компании каким-либо способом и в целях иных, чем разрешены настоящим Соглашением, является незаконным и может повлечь за собой привлечение к ответственности в соответствии с законодательством Российской Федерации.<br>\r
5. Отсутствие гарантий, ограничение ответственности<br>\r
5.1. Компания предоставляет Пользователю возможность использования сервиса Сайта, включая сведения о ценах и описания товаров, «как есть» без каких-либо гарантий. Это означает, среди прочего, что Компания:<br>\r
• не гарантирует отсутствие ошибок в работе Сайта;<br>\r
• не несет ответственности за скорость и бесперебойную работу Сайта, его совместимость с программным обеспечением и техническими средствами Пользователя и иных лиц;<br>\r
• не несет ответственности за причинение каких-либо убытков, которые возникли или могут возникнуть при пользовании сервиса Сайта или в связи с этим;<br>\r
• не несет ответственности, связанной с каким-либо искажением, изменением содержания Сайта при его использовании;<br>\r
• не несет ответственности за неисполнение либо ненадлежащее исполнение своих обязательств в связи с обновлением программного обеспечения Сайта и техническими сбоями в телекоммуникационных и/или энергетических сетях, действия вредоносных программ, а также недобросовестных действий третьих лиц, направленных на несанкционированный доступ и/или выведение из строя Сайта, и вызванные ими потерю информации;<br>\r
• не несет ответственности за неисполнение либо ненадлежащее исполнение своих обязательств вследствие невозможности связаться с Пользователем по предоставленному им номеру телефона ввиду неработоспособности телефона, отсутствия на лицевом счету телефонного номера денежных средств, произошедшего сбоя в работе оператора связи, недоступности Пользователя и т.п.;<br>\r
• не несет ответственности за изменение программного обеспечения Сайта, в результате которого ограничивается или становится невозможным доступ к Сайту;<br>\r
• не несет ответственности за действия Пользователя на Сайте;<br>\r
• не несет ответственности за какие-либо повреждения программного и/или аппаратного обеспечения Пользователя, возникшие в результате использования Сайта; <br>\r
• не гарантирует предоставление доступа к Сайту, если устройство Пользователя не поддерживает формат, необходимый для воспроизведения представленной на нем информации;<br>\r
• не несет ответственности за временную неработоспособность системы, обеспечивающей прием и перевод платежей Пользователя, вызванную обстоятельствами непреодолимой силы и иными не зависящими от Компании причинами.<br>\r
6.2. Компания не несет ответственности:<br>\r
• за используемые Пользователем каналы связи и соответственно за любой финансовый или другой ущерб, причиненный вследствие использования некачественных или незащищенных каналов связи<br>\r
• за действия банков, платежных систем, мобильных операторов связи и пр. в случае невыполнения ими своих обязательств перед Пользователем, а также <br>\r
• за неисполнение либо ненадлежащее исполнение своих обязательств, если это вызвано действиями/бездействием Пользователя, находящимися вне контроля Компании, в том числе в результате совершения ошибочных действий/бездействия Пользователя.<br>\r
• за нарушение настоящего Соглашения, если такое нарушение вызвано действием обстоятельств непреодолимой силы (форс-мажор), включая: действия органов государственной власти, пожар, наводнение, землетрясение, другие стихийные действия, отсутствие электроэнергии и/или сбои работы компьютерной сети, забастовки, гражданские волнения, беспорядки, перекрытие или разрушение автомобильных дорог и любые иные обстоятельства, не ограничиваясь перечисленными, которые могут повлиять на выполнение Компании своих обязательств перед Пользователем.<br>\r
6.3. Ответственность Компании ограничена стоимостью оформленного Пользователем и не исполненного Компанией заказа с использованием сервиса Сайта.<br>\r
6.4. В случае нарушения Пользователем Соглашения Компания вправе отказать Пользователю в использовании сервиса мобильного приложения и/или исполнении оформленного заказа.<br>\r
7. Иные положения<br>\r
7.1. Если по тем или иным причинам одно или несколько положений настоящего Соглашения будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Соглашения.<br>\r
</p>`},{id:3,title:"Политика конфиденциальности",text:`<p>СОГЛАСИЕ <br />НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>\r
<p>&nbsp;</p>\r
<p>Я, _______________________________________________________________,</p>\r
<p><sup>(<em>ФИО)</em></sup></p>\r
<p>паспорт ___________ выдан _______________________________________________,</p>\r
<p><em><sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (серия, номер)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(когда и кем выдан)</sup></em><sup></sup></p>\r
<p>адрес регистрации:_______________________________________________________,</p>\r
<p>в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ &laquo;О персональных данных&raquo;, даю свое согласие на обработку в <em><u>Федеральном казначействе </u></em>моих персональных данных, относящихся исключительно к перечисленным ниже категориям персональных данных: фамилия, имя, отчество; пол; дата рождения; тип документа, удостоверяющего личность; данные документа, удостоверяющего личность; гражданство.</p>\r
<p>Я даю согласие на использование персональных данных исключительно в целях <em><u>участия в конкурсе антикоррупционного плаката, проводимого Федеральным казначейством </u></em><em><u>в рамках исполнения пункта 38 Национального плана противодействия коррупции на 2021&ndash;2024 годы, утвержденного Указом Президента Российской Федерации от 16 августа 2021 г. № 478 <br />&laquo;О Национальном плане противодействия коррупции на 2021&ndash;2024 годы&raquo;</u></em>, <br />а также на хранение данных об этих результатах на электронных носителях.</p>\r
<p>Настоящее согласие предоставляется мной на осуществление действий в отношении моих персональных данных, которые необходимы для достижения указанных выше целей, включая (без ограничения) сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу третьим лицам для осуществления действий по обмену информацией, обезличивание, блокирование персональных данных, а также осуществление любых иных действий, предусмотренных действующим законодательством Российской Федерации.</p>\r
<p>Я проинформирован, что <em><u>Федеральное казначейство</u></em> гарантирует обработку моих персональных данных в соответствии с действующим законодательством Российской Федерации как неавтоматизированным, так и автоматизированным способами.</p>\r
<p>Данное согласие действует до достижения целей обработки персональных данных или в течение срока хранения информации.</p>\r
<p>Данное согласие может быть отозвано в любой момент по моему&nbsp; письменному заявлению.&nbsp;</p>\r
<p>Я подтверждаю, что, давая такое согласие, я действую по собственной воле и в своих интересах.</p>\r
<ol>\r
<li>пункт 1</li>\r
<li>пункт 2</li>\r
</ol>`},{id:4,title:"Что такое программа лояльности «Премия»?",text:`<h2><a name="_Toc115960685"></a><a name="_Toc116035492"></a>Что такое программа лояльности &laquo;Премия&raquo;?</h2>\r
<p>&laquo;Премия&raquo; - это программа лояльности, которая действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;.</p>\r
<p>Участники программы лояльности получают премию за покупки в виде бонусов, которые возвращаются на карту.</p>\r
<p>Бонусами премия можно оплатить до 50% от стоимости покупки.</p>\r
<h2><a name="_Toc115960687"></a><a name="_Toc116035493"></a>Что дает участие в бонусной программе &laquo;Премия&raquo;?</h2>\r
<p>Регистрируясь в бонусной программе, вы получаете скидки и бонусы за покупку товаров и можете рассчитываться ими в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;.</p>\r
<p>Чем больше вы тратите в месяц, тем выше уровень Премии, а значит больше бонусов за покупку товаров из наборов категорий.</p>\r
<h2><a name="_Toc115960688"></a><a name="_Toc116035494"></a>Как стать участником программы лояльности &laquo;Премия&raquo;?</h2>\r
<p>Для участия в программе &laquo;Премия&raquo; необходимо зарегистрироваться по номеру телефона и получить виртуальную карту &laquo;Премия&raquo; в мобильном приложении или приобрести карту &laquo;Премия&raquo; на кассе за 19,90 рублей (в гастрономах Красный Яр и дискаунтерах &laquo;Батон&raquo;).</p>\r
<h2><a name="_Toc115960689"></a><a name="_Toc116035495"></a>Как можно зарегистрировать карту &laquo;Премия&raquo;?</h2>\r
<p>Карту можно зарегистрировать, скачав мобильное приложение &laquo;Премия&raquo; или позвонив по номеру 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960699"></a><a name="_Toc116035496"></a>В прошлом месяце у меня премия была больше, почему сейчас начисляется меньше?</h2>\r
<p>Статус программы лояльности &laquo;Премия&raquo; присваивается на основании суммы покупок, совершенных в прошлом месяце. В предыдущем месяце вы потратили меньше средств и не перешли порог следующего статуса.</p>\r
<h3 style="text-align: center; color: #3f7320;"></h3>`},{id:5,title:"Какие преимущества у программы лояльности «Премия»?",text:`<p>Преимущества программы лояльности «Премия» <br>\r
Какие бывают статусы? Как заработать новый статус? И что он дает? <br>\r
Размер Премии зависит от суммы покупок:<br>\r
Статус «Просто Так» с первой покупки;<br>\r
Статус «Для Друзей» от 3000 рублей;<br>\r
Статус «С Любовью» от 7000 рублей.<br>\r
От статусов зависит % начислений бонусов в наборах категорий, статус обновляется первого числа каждого месяца. <br>\r
Как узнать какой у меня статус?<br>\r
Вы можете проверить свой уровень самостоятельно в мобильном приложении или позвонив в колл-центр по номеру 8-800-775-89-50.<br>\r
Что такое наборы категорий?<br>\r
Наборы категорий находятся в мобильном приложении в них представлены товары, на которые начисляется разный размер премии в зависимости от статусов. <br>\r
Наборы категорий обновляются первого числа каждого месяца. Каждый месяц нужно выбирать новый набор, чтобы получать бонусы Премия на категории товаров.<br>\r
Как часто надо выбирать набор? <br>\r
Каждый месяц первого числа обновляются наборы категорий, которые необходимо выбрать после обновления.<br>\r
Сколько категорий в наборе? <br>\r
Количество категорий в наборе от 3 штук, они меняются в зависимости от сезонов и на основе предпочтений покупателей, если у вас есть предложения, пишите их в экспресс-отзывах в мобильном приложении «Премия». <br>\r
Я хочу выбрать другой набор категорий, как это сделать? <br>\r
Набор категорий можно выбрать только один раз в месяц в мобильном приложении «Премия», обновление наборов категорий происходит каждый месяц первого числа. <br>\r
Как получать больше бонусов Премия?<br>\r
В мобильном приложении «Премия» есть раздел «Цели», при достижении которых за определенный срок, вы получаете дополнительное бонусное начисление, которое указано в разделе. <br>\r
Каждый четверг обновляются персональные предложения, за покупку которых можно дополнительно получить % премии, указанный в мобильном приложении. <br>\r
Персональные предложения и цели выбираются на основе анализа истории покупок, частоты и суммы потраченных средств в прошлом месяце, поэтому они могут быть предложены не всем покупателям. <br>\r
Как выбрать набор категорий товаров с начислением премии если у меня нет мобильного приложения? <br>\r
Выбрать набор категорий можно только в мобильном приложении «Премия». Установите мобильное приложение на ваш смартфон и получайте доступ ко всем привилегиям программы лояльности «Премия». <br>\r
Можно ли выбрать набор категорий товаров с начислением премии на сайте программы лояльности? <br>\r
Выбрать набор категорий можно только в мобильном приложении «Премия». Установите мобильное приложение на ваш смартфон и получайте доступ ко всем привилегиям программы лояльности «Премия». <br>\r
Как выбрать «Любимый товар»?</p>\r
\r
<p>Данный функционал более не доступен в программе лояльности «Премия», воспользуйтесь другими привилегиями участника («Наборы категорий», «Персональные предложения, «Цели»).</p><br>\r
<br>`},{id:6,title:"Что такое бонусы?",text:`<h2><a name="_Toc115960686"></a><a name="_Toc116035507"></a>Что такое премия?</h2>\r
<p>&nbsp;Это бонусы, которые возвращаются на карту &laquo;Премия&raquo; при покупке определенных товаров и наборов категорий, которые можно выбрать в мобильном приложении &laquo;Премия&raquo;. Размер премии зависит от уровня &laquo;Премии&raquo;.</p>\r
<h2><a name="_Toc115960694"></a><a name="_Toc115960702"></a><a name="_Toc116035508"></a>Как быстро начисляются бонусы?</h2>\r
<p>Бонусы зачисляются на карту в течение суток после совершения покупки.</p>\r
<h2><a name="_Toc116035509"></a>Есть ли у бонусов срок действия?</h2>\r
<p>Бонусы сгорают спустя 6 месяцев с момента начисления. Дополнительно есть экспресс бонусы с более коротким сроком жизни.</p>\r
<h2><a name="_Toc116035509"></a> Есть ли ограничения по начислению бонусов? </h2>\r
<p> Суммарно в месяц может быть начислено не более 3000 бонусов. По отдельным акциям есть ограничение по начислению в день или период проведения акции, подробная информация об ограничениях будет размещена в рекламных материалах.</p>\r
<h2><a name="_Toc115960701"></a><a name="_Toc116035510"></a>Сколько у меня бонусов?</h2>\r
<p>Информация о сумме начисленных бонусов отображается в мобильном приложении &laquo;Премия&raquo;, а также количество бонусов можно уточнить у операторов&nbsp;&nbsp; колл-центра по номеру 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960705"></a><a name="_Toc116035511"></a>Мне не начислили бонусы. Что делать?</h2>\r
<p>Свяжитесь с нами отправьте фотографию чека удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc116035512"></a>Можно ли получить бонусы за покупку акционного товара?</h2>\r
<p>Бонусы начисляются за покупку любого товара из вашего набора, любые ограничения или изменения описаны в блоке с набором. &nbsp;</p>\r
<h2><a name="_Toc115960695"></a><a name="_Toc116035513"></a>Какая скидка предоставляется по карте &laquo;Премия&raquo;?</h2>\r
<p>По карте &laquo;Премия&raquo; вы можете приобретать товары со скидкой, указанной на ценнике.</p>\r
<h2><a name="_Toc115960700"></a><a name="_Toc116035514"></a>Как узнать по какой цене я могу купить товар и какую премию получу?</h2>\r
<p>Какое количество премии вы получите можно рассчитать исходя из того, какой набор вы выбрали и какой % начислений бонусов будет исходя и статуса.</p>\r
<p>Вся подробная информация размещена в мобильном приложении. Премия не начисляется на товары, выделенные специальным ценником.</p>\r
<h2><a name="_Toc115960703"></a><a name="_Toc116035515"></a>Как рассчитаться бонусами?</h2>\r
<p>По зарегистрированной карте &laquo;Премия&raquo; можно оплатить до 50% от суммы покупки, за исключением табачной продукции и товаров, на которые начисляется &laquo;Премия&raquo;. За алкогольную продукцию можно рассчитаться только на сумму выше МРЦ (минимальной розничной цены).</p>\r
<p>Сумму МРЦ можно уточнить на стенде с алкогольной продукцией.</p>\r
<p>1 бонус &ndash; это 1 рубль</p>\r
<p>Списать можно не белее 3 000 бонусов в месяц. </p>\r
<h2><a name="_Toc115960711"></a><a name="_Toc116035516"></a>Можно списывать бонусы Премия с виртуальной карты по QR-коду?</h2>\r
<p>Списать бонусы можно с виртуальной карты в мобильном приложении. Но в период технических работ или в целях сохранения бонусов, списание может быть приостановлено на неопределенный срок. Информация об этом будет в торговом зале и в мобильном приложении.</p>\r
<h2><a name="_Toc115960712"></a><a name="_Toc116035517"></a>Кто-то другой списывает мои бонусы. Что делать?</h2>\r
<p>Для решения проблемы связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`},{id:7,title:"Где действует карта «Премия»?",text:`<h2><a name="_Toc115960696"></a><a name="_Toc116035519"></a>Где действует карта &laquo;Премия&raquo;?</h2>\r
<p>Карта Премия действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo; на территории Красноярского края, республики Хакасия и республики Тыва.</p>\r
<h2><a name="_Toc115960706"></a><a name="_Toc116035520"></a>Можно ли снять деньги с карты? Можно ли переводить бонусы между своими картами?</h2>\r
<p>Бонусами можно рассчитаться только гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;, обмен бонусов на денежные средства невозможен. Перевод бонусов между картами &laquo;Премия&raquo; невозможен.</p>\r
<h2><a name="_Toc115960707"></a><a name="_Toc116035521"></a>Старая карта с Вишней будет работать?</h2>\r
<p>Да. Карта &laquo;Премия&raquo; действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo; не зависимо от внешнего вида.</p>\r
<h2><a name="_Toc115960708"></a><a name="_Toc116035522"></a>Что делать, если карта оказалась бракованной, не работает?</h2>\r
<p>Карту можно заменить магазине на кассе, для сохранения Премии и бонусов карта должна быть зарегистрирована.</p>\r
<p>&nbsp;После приобретения новой карты, обратитесь за помощью к нашим операторам, они перенесут ваши данные на новую карту. Связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960709"></a><a name="_Toc116035523"></a>Карта потерялась или ее украли, что делать?</h2>\r
<p>Необходимо приобрести новую карту &laquo;Премия&raquo; и зарегистрировать ее на ваш номер телефона, либо использовать виртуальную карту в мобильном приложении.</p>\r
<p>Если карта зарегистрирована, бонусы и статус карты сохранится.</p>\r
<p>И обратиться по данным каналам связи:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960710"></a><a name="_Toc116035524"></a>Карту забыл дома, и вспомнил на кассе, что делать?</h2>\r
<p>Воспользуйтесь виртуальной картой Премия в мобильном приложении. Все скидки и акции действуют при предъявлении виртуальной карты &laquo;Премия&raquo;. Вы можете зарегистрировать виртуальную карту через мобильное приложение.</p>\r
<h2><a name="_Toc115960713"></a><a name="_Toc116035525"></a>Моя карта Премия заблокирована. Что делать?</h2>\r
<p>Для решения проблемы связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`},{id:8,title:"Остались вопросы?",text:`<p>Свяжитесь с нами любым удобным способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`}],questionsAndAnswers:[{id:4,questions:"Куда пропали любимые товары?",answers:"Мы отключили данный функционал в новой программе лояльности."},{id:5,questions:"Почему не получается выбрать набор категорий",answers:'Проверьте, пожалуйста, есть ли у вас кнопка "Выбрать", если она отсутствует, то вы уже выбрали набор. Наборы обновляются 1 числа каждого месяца. Если же кнопка есть, но она не активна, просим вас написать нам.'}]},status:"success"},Us={result:{info:[{id:1,title:"ПРАВИЛА УЧАСТИЯ В ПРОГРАММЕ ЛОЯЛЬНОСТИ «ПРЕМИЯ»",text:`<p style="text-align:center"><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Настоящие Правила определяют условия участия в программе лояльности &laquo;Премия&raquo; (далее &ndash; Программа) и являются публичной офертой ООО &laquo;Смарт&raquo; на участие в Программе на определенных Правилами условиях.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ТЕРМИНЫ И ИХ ОПРЕДЕЛЕНИЯ:</span></span></strong></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Оператор</strong>&raquo; - общество с ограниченной ответственностью &laquo;Смарт&raquo; (ОГРН 1112468003284, ИНН 2464231675, юридический адрес: Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17), обеспечивающее реализацию Программы и осуществляющее управление Программой.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Участник</strong>&raquo; - физическое лицо, являющееся держателем Бонусной карты и присоединившееся к Программе (совершившее акцепт публичной оферты) любым из обозначенных в Правилах способом.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонусная карта</strong>&raquo; - имеющая уникальный номер пластиковая и/или виртуальная карта, используемая для идентификации Участника и получения участником Поощрений. Бонусная карта не является банковской картой; зачисление денежных средств на Бонусную карту, а также снятие денежных средств с Бонусной карты невозможны.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Пластиковая карта</strong>&raquo; - пластиковая бонусная карта, приобретаемая Участником в торговых точках Оператора.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Виртуальная карта</strong>&raquo; - виртуальная бонусная карта, оформляемая Участником в Мобильном приложении в виде штрих-кода (</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">QR</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">-кода). Имеющаяся у Участника Пластиковая карта может быть зарегистрирована в Мобильном приложении в качестве Виртуальной карты.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонус</strong>&raquo; - условная единица, зачисляемая Оператором на Бонусный счёт Участника Программы в установленном настоящими Правилами порядке и списываемая с Бонусного счёта в случае использования Бонусов для получения скидки при приобретении товаров/услуг в торговых точках Оператора. Бонус не является и не может являться средством платежа, не имеет денежного выражения, не может быть обналичен, подарен или иным образом передан третьему лицу по сделке, а также передан по наследству.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Премия&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> - количество Бонусов, начисляемое Участнику в связи с наступлением определенных Оператором условий.</span></span></p>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Бонусный счёт</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&raquo; - совокупность хранящихся у Оператора информационных данных о количестве начисленных, списанных Бонусов, а также о текущем балансе Бонусов каждого Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Поощрение</strong>&raquo; - выгода, предоставляемая Участнику при приобретении товаров/услуг в торговых точках Оператора. Формы Поощрения:</span></span></p>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">предоставление скидки с цены товара/услуги при предъявлении Бонусной карты в размере, равном количеству списанных с Бонусного счёта Участника Бонусов;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">предоставление скидки с цены товара/услуги при предъявлении Бонусной карты в установленном Оператором размере без одновременного списания Бонусов с Бонусного счёта Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">иные формы по усмотрению Оператора.</span></span></li>\r
</ul>\r
\r
<p><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Прямая скидка&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> - скидка с цены товара/услуги без одновременного списания Бонусов с Бонусного счёта Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Бонусная операция</strong>&raquo; - совершенная Участником операция по приобретению товаров или услуг в торговых точках Оператора, являющаяся основанием для начисления Бонусов на Бонусный счёт Участника.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Сайт Программы</strong>&raquo; - </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">www</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">krasyar</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ru</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">/</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">premia</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Мобильное приложение</strong>&raquo; - специализированное программное обеспечение для установки на мобильные устройства на базе платформ </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">IOS</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> и </span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Android</span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;<strong>Контакт-Центр</strong>&raquo; - организованный Оператором или привлеченными им лицами по телефону 8-800-775-89-50 центр поддержки Программы, осуществляющий информационно-справочное обслуживание Участников (звонок на территории Российской Федерации бесплатный).</span></span></p>\r
\r
<p>&nbsp;</p>\r
\r
<ol>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ОБЩИЕ ПОЛОЖЕНИЯ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В момент присоединения к Программе в порядке, установленном в п.2.1. Правил, Участник принимает и обязуется безоговорочно выполнять условия настоящих Правил (акцептует публичную оферту).</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе в любое время в одностороннем порядке вносить изменения в Правила, разместив актуальную редакцию Правил на Сайте Программы и в Мобильном приложении с указанием даты вступления новой редакции в силу.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе утверждать дополнения к Правилам, действующие в течение ограниченного срока действия и/или в отношении ограниченного круга торговых точек Оператора. Информация об утверждении/отмене таких дополнений размещается на сайте Программы.</span></span></p>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник обязуется самостоятельно отслеживать внесение изменений в Правила на сайте Программы и/или в Мобильном приложении. Совершение Участником любой операции, направленной на начисление или списание Бонусов с Бонусного счёта, после вступления в силу изменений в Правила является подтверждением согласия Участника с новой редакцией Правил. В случае несогласия с внесенными в Правила изменениями Участник вправе отказаться от участия в Программе в порядке, предусмотренном в разделе 6 настоящих Правил.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="3">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Программа действует во всех торговых точках Оператора, осуществляющих деятельность под коммерческими обозначениями &laquo;Красный Яр&raquo;, &laquo;Батон&raquo;, &laquo;Батончик&raquo;. При наличии ограничений, распространяющихся на конкретные торговые точки (невозможность начисления или списания бонусов или иные ограничения), информация о таких ограничениях размещается непосредственно в таких торговых точках.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Программа действует до её отмены по решению Оператора. Информация об отмене Программы размещается на Сайте Программы.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="2">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ПРИСОЕДИНЕНИЕ К ПРОГРАММЕ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участником Программы может быть любое физическое лицо, в соответствии с Гражданским кодексом РФ обладающее гражданской дееспособностью. Физическое лицо признается Участником Программы <strong>с момента получения Бонусной карты </strong>(приобретения Пластиковой карты либо оформления Виртуальной карты). Фактом предъявления Бонусной карты при совершении покупки в торговой точке Оператора Участник дополнительно подтверждает ознакомление и согласие с настоящими Правилами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Возможность списывать Бонусы <strong>доступна только Участникам, зарегистрировавшим Бонусную карту.</strong></span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Регистрация Бонусной карты производится путём привязки к номеру мобильного телефона Участника одним из следующих способов:</span></span>\r
		<ul>\r
			<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
			<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span></li>\r
		</ul>\r
		</li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">На один номер мобильного телефона может быть зарегистрирована только одна активная Бонусная карта, при этом указанный при регистрации номер телефона автоматически авторизуется для управления Бонусным счётом Участника с помощью ввода последних 4 цифр номера сброс-звонка или вводом ранее придуманного Участником пароля.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник Программы обязан обеспечить конфиденциальность данных, использованных им при регистрации в Мобильном приложении.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник Программы несет ответственность за достоверность данных, указанных при регистрации в Программе, а также за своевременное обновление этих данных.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="3">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">НАЧИСЛЕНИЕ БОНУСОВ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В рамках действия Программы на Бонусный счёт Участника начисляются Бонусы, которые впоследствии могут быть использованы Участником для получения скидки. Бонусы начисляются:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При совершении Участником Бонусных операций;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При выполнении Участником иных условий, определенных Оператором;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В иных случаях, определенных Оператором.</span></span>\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор в одностороннем порядке определяет перечень товаров и услуг, при приобретении которых на Бонусный счёт Участника начисляется определенное количество Бонусов (Бонусные операции), а также количество Бонусов, начисляемых за совершение Бонусных операций. Оператором могут быть предусмотрены следующие способы определения количества Бонусов, подлежащих начислению за совершение Бонусных операций:</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В процентах от цены конкретного товара/услуги;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В твердой сумме при приобретении конкретного товара/услуги;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В процентах от общей суммы покупки;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В твердой сумме при совершении покупки на определенную сумму;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Иные способы по усмотрению Оператора.</span></span></li>\r
</ul>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе ограничить максимальное количество товаров, при приобретении которых начисляются Бонусы, а также установить иные ограничения.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="3">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Если Оператором не установлено иное, Бонусы начисляются Участникам за приобретение товаров из категорий, выбранных Участником в Мобильном приложении.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Количество начисляемых на Бонусный счёт Участника в текущем месяце Бонусов определяется, помимо прочего, присвоенным Бонусной карте в предшествующем месяце <strong>статусом</strong>. Правила присвоения статусов определены в разделе 5 Правил. Количество Бонусов, начисляемых Участникам разных статусов, определяется Оператором дополнительно.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о товарах и услугах, при приобретении которых начисляются Бонусы, о действующих ограничениях, а также о способах начисления и количестве Бонусов может размещаться непосредственно в торговых точках Оператора, на Сайте Программы, в Мобильном приложении, в рекламной и печатной продукции Оператора, а также доводиться до сведения Участников иными способами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае, если при расчёте за покупку Участник использует купон, предоставляющий право на применение разовой скидки определенного размера, или списывает Бонусы, то Бонусы будут начислены на сумму покупки после применения скидки.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Предъявление Бонусной карты кассиру торговой точки при совершении Бонусной операции до момента оплаты товара/услуги является обязательным условием для начисления Бонусов.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы начисляются Оператором на Бонусный счёт Участника в течение суток с момента совершения Бонусной операции. По техническим причинам указанный срок может быть продлен Оператором в одностороннем порядке. Оператор не несет ответственности за какой-либо ущерб, причиненный вследствие невозможности своевременно начислить Бонусы.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о Бонусах, которые будут начислены Участнику за совершенную Бонусную операцию, размещается в Мобильном приложении. Участник самостоятельно контролирует соответствие количества Бонусов, которые должны быть начислены в соответствии с размещенной в торговой точке рекламной информацией, количеству Бонусов, указанному в Мобильном приложении.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="4">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">СПИСАНИЕ БОНУСОВ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Начисленные на Бонусный счёт Участника Бонусы могут быть использованы Участником для получения скидки при приобретении товаров/услуг в торговых точках Оператора на условиях, предусмотренных Правилами.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы при совершении покупки могут быть списаны только при условии предъявления Бонусной карты до закрытия кассового чека. Участник самостоятельно определяет сумму Бонусов, подлежащую списанию с Бонусного счёта Участника для получения скидки, но в любом случае не более максимально доступной к списанию суммы. Распределение общей суммы скидки по стоимости приобретаемых товаров производится по усмотрению Оператора.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Списание Бонусов при получении скидки происходит по курсу 1 Бонус = 1 Рубль скидки. Количество Бонусов, используемых Участником для получения скидки, определяется Участником самостоятельно с учётом следующих ограничений:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Размер скидки не может превышать общего количества Бонусов на Бонусном счёте Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Максимальный размер скидки при совершении одной покупки по одному кассовому чеку &ndash; не более 50%;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Скидка не предоставляется на товар, за приобретение которого на Бонусный счёт Участника начисляются Бонусы &ndash; стоимость такого товара оплачивается полностью;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">При приобретении товара, в отношении которого законодательством установлена минимальная розничная цена, максимальный размер скидки на данный товар рассчитывается по формуле: цена товара минус минимальная розничная цена;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В соответствии с пп. &laquo;б&raquo; п.1 ст.16 федерального закона от 23.02.2013г. №15-ФЗ &laquo;Об охране здоровья граждан от воздействия окружающего табачного дыма и последствий потребления табака&raquo; при приобретении табачных изделий применение Бонусов для получения скидки невозможно;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В течение одного календарного месяца с одного Бонусного счёта может быть списано не более 2000 бонусов, лимит списаний будет отображаться в мобильном приложении Участника;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе установить предельный процент скидки, которая может быть предоставлена Участнику при совершении покупки.</span></span></li>\r
</ul>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператором могут устанавливаться иные ограничения при приобретении товаров или услуг с использованием Бонусов, информация о которых доводится до Участников в порядке, установленном Правилами.</span></span></p>\r
\r
<ul>\r
	<li style="list-style-type:none">\r
	<ol start="4">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Использование Бонусов для получения скидки возможно при совершении любой покупки в торговых точках Оператора, за исключением следующих случаев:</span></span></li>\r
	</ol>\r
	</li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">отсутствие регистрации в программе лояльности;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">отсутствие связи с сервером Оператора в торговой точке, в которой происходит покупка;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">неисправность Бонусной карты участника или оборудования, используемого в торговой точке для считывания Бонусных карт;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">иные случаи, препятствующие получению Участником скидки при совершении покупки.</span></span>\r
	<ol start="5">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Восстановление Бонусов, списанных по инициативе Участника при получении скидки, не производится.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае возврата Участником товара, приобретенного с использованием Бонусов, Участнику возвращаются денежные средства, фактически уплаченные за товар. Бонусы, использованные для получения скидки с цены возвращенного товара, восстанавливаются на Бонусном счёте Участника в течение 14 (четырнадцати) дней с даты возврата.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе по своему усмотрению при совершении каждой покупки предоставить Участнику, предъявившему Бонусную карту, скидку в размере не более 99 (девяносто девяти) копеек со списанием с Бонусного счёта Участника соответствующего количества Бонусов &ndash; подтверждение от Участника в этом случае не требуется. Участник не вправе требовать какого-либо возмещения Бонусов, списанных (аннулированных) с Бонусного счёта как по инициативе Участника, так и по инициативе Оператора в предусмотренных Правилами случаях.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Бонусы автоматически аннулируются и не могут быть использованы для получения Поощрения по истечении 6 (шести) месяцев с даты их начисления. В отношении некоторых категорий Бонусов Оператор вправе установить более короткий срок до их аннулирования, который будет отображен в мобильном приложении.</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="5">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ПРЯМАЯ СКИДКА</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В определенных Оператором случаях Участнику может предоставляться скидка с цены товара без списания Бонусов с Бонусного счёта (прямая скидка). </span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Условием получения прямой скидки в дискаунтерах &laquo;Батон&raquo; и &laquo;Батончик&raquo; является предъявление Бонусной карты кассиру при расчёте за товар. Для получения прямой скидки в гастрономах &laquo;Красный Яр&raquo; кассиру необходимо предъявить <strong>зарегистрированную</strong> Бонусную карту.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Количество товаров, которые могут быть приобретены с прямой скидкой, может быть ограничено.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="6">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">СТАТУСЫ БОНУСНОЙ КАРТЫ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Вид и величина Поощрения, предоставляемого Участнику в расчётном месяце, в числе прочего определяются статусом, присвоенным Бонусной карте по итогам предыдущего месяца.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Изменение статуса Бонусной карты происходит автоматически в 00:00 часов каждого первого дня месяца. В случае, если изменение статуса не произошло автоматически, Оператор осуществляет такое изменение по заявлению Участника, переданного Оператору по телефону контакт-центра либо через Мобильное приложение или Сайт Программы. Количество Бонусов, начисленных Участнику с первого числа месяца по дату фактического изменения статуса, пересчитывается в соответствии с корректным статусом Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Статус Бонусной карты присваивается исходя из общей стоимости совершенных покупок в торговых точках Оператора в прошедшем месяце. Покупка считается совершенной в момент закрытия кассового чека. Не учитываются для целей присвоения статуса покупки, совершенные в течение часа после совершения предыдущей покупки, а также покупки, совершенные без предъявления Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Виды статусов Бонусных карт:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Просто так&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму по 2 999,99 (две тысячи девятьсот девяносто девять) рублей 99 копеек включительно;</span></span></li>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;Для друзей&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму от 3 000,00 (трех тысяч) рублей по 6 999,99 (шесть тысяч девятьсот девяносто девять) рублей 99 копеек включительно;</span></span></li>\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">&laquo;С любовью&raquo;</span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;"> &ndash; присваивается Участникам, совершившим в прошедшем месяце покупки на сумму от 7000,00 (семи тысяч) рублей и более.</span></span>\r
	<ol start="5">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Информация о статусе Бонусной карты отображается в Мобильном приложении</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="7">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">БЛОКИРОВКА БОНУСНОГО СЧЁТА И ПЛАСТИКОВОЙ КАРТЫ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник вправе в любой момент отказаться от участия в Программе путем блокировки Бонусного счёта одним из следующих способов:</span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span>\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник автоматически исключается из Программы, а его Бонусный счёт блокируется в случае отзыва Участником согласия на обработку персональных данных.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Оператор вправе в одностороннем порядке заблокировать Бонусный счёт любого Участника без предварительного предупреждения и последующего уведомления в случае нарушения Участником настоящих Правил, предоставления Участником Оператору недостоверных или некорректных сведений, а также по иным причинам по усмотрению Оператора. В случае блокировки Бонусного счёта по изложенным в настоящем пункте основаниям все Бонусы на Бонусном счёте аннулируются Оператором в одностороннем порядке без какого-либо возмещения.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае прекращения участия в Программе по любому основанию все Бонусы на Бонусном счёте Участника аннулируются, а Бонусная карта блокируется.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник несет ответственность за сохранность Пластиковой карты и ограничение доступа к ней третьих лиц. Оператор особо оговаривает, что факт предъявления Бонусной карты является достаточным основанием для списания или начисления Бонусов на Бонусный счёт - Оператор не проверяет личность лица, предъявившего Бонусную карту. Оператор не возмещает Участнику Бонусы, списанные с Бонусного счёта в связи с предъявлением незаблокированной в установленном Правилами порядке Пластиковой карты Участника при совершении покупки третьими лицами, получившими доступ к Пластиковой карте.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае утраты либо повреждения Пластиковой карты Участник осуществляет её блокировку одним из следующих способов:</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<ul>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">По телефону Контакт-центра 8-800-775-89-50;</span></span></li>\r
	<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В Мобильном приложении.</span></span>\r
	<ol start="7">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">В случае блокировки Пластиковой карты без блокировки Бонусного счёта Участник может использовать Виртуальную карту, а также приобрести новую Пластиковую карту и привязать её к тому же номеру телефона &ndash; в этом случае Бонусы на Бонусном счёте не аннулируются.</span></span></li>\r
	</ol>\r
	</li>\r
</ul>\r
\r
<p>&nbsp;</p>\r
\r
<ol start="8">\r
	<li><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ</span></span></strong>\r
\r
	<ol>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Присоединяясь к Программе и регистрирую Бонусную карту, Участник самостоятельно и по своей инициативе предоставляет Оператору следующие персональные данные: фамилия, имя, отчество, пол; год, месяц и дата рождения; год, месяц и дата рождения несовершеннолетних детей; номер мобильного телефона, электронная почта, место жительства (город, улица, дом) и предоставляет Оператору и привлеченным Оператором к реализации Программы юридическим лицам право осуществлять обработку указанных персональных данных с использованием средств автоматизации или без таковых, в том числе их сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение. </span></span></li>\r
	</ol>\r
	</li>\r
</ol>\r
\r
<p><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник предоставляет Оператору и привлеченным Оператором к реализации Программы юридическим лицам согласие на обработку своих персональных данных в целях, связанных с обеспечением нормального функционирования Программы, выполнением Оператором обязательств, вытекающих из Правил, оценкой и анализом функционирования Программы, получением от Оператора уведомлений и информации, связанных с функционированием программы, а также получения рекламных объявлений Оператора. Согласие предоставляется Участником на весь срок действия Программы.</span></span></p>\r
\r
<ol>\r
	<li style="list-style-type:none">\r
	<ol start="2">\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Участник предоставляет Оператору право обрабатывать информацию о совершенных Участником с использованием Бонусной карты покупках в торговых точках Оператора с целью обеспечения нормального функционирования Программы, направления Участнику персональных предложений, а также проведения любых статистических, маркетинговых и иных исследований.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Согласие Участника на обработку персональных данных может быть отозвано Участником в любой момент путем направления на юридический адрес Оператора (Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17) письменного уведомления об отзыве согласия с указанием фамилии, имени и отчества Участника, а также номера Бонусной карты.</span></span></li>\r
		<li><span style="font-size:10.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Регистрируя Бонусную карту, Участник выражает свое согласие на получение от Оператора на свой мобильный телефон и адрес электронной почты, указанные при регистрации Бонусной карты, уведомлений, объявлений, сообщений, непосредственной связанных с функционированием Программы, а также объявлений и сообщений рекламного характера. Участник вправе отказаться от получения таких сообщений через Контакт-центр, а также направив на юридический адрес Оператора письменный отказ.</span></span></li>\r
	</ol>\r
	</li>\r
</ol>`},{id:2,title:"Пользовательское соглашение",text:`<p>Настоящее Пользовательское соглашение (Соглашение) определяет порядок и условия использования Сайта и его функционала (сервиса) Пользователем. <br>\r
 <br>\r
1. Общие положения.<br>\r
1.1. Пользователь обязан ознакомиться с Соглашением до момента использования сервиса Сайта. <br>\r
1.2. Использование Пользователем сервиса Сайта подтверждает ознакомление Пользователя с Соглашением и согласие с его условиями. Пользователь принимает условия Соглашения в полном объеме и без каких-либо изъятий.<br>\r
1.3. Компания вправе в любое время в одностороннем порядке вносить изменения в Соглашение, при этом актуальная редакция Соглашения размещается Компанией на Сайте с указанием даты вступления редакции в силу. В момент размещения на Сайте Соглашения в новой редакции предыдущая редакция признается утратившей силу.<br>\r
1.4. Пользователь обязуется самостоятельно отслеживать внесение изменений в Соглашение на Сайте. Совершение Пользователем действий по использованию сервиса Сайта после вступления в силу изменений в Соглашение является подтверждением ознакомления и согласия Пользователя с новой редакцией Соглашения. В случае несогласия с внесенными в Соглашение изменениями Пользователь должен отказаться от использования сервиса Сайта. <br>\r
1.5. К отношениям между Компанией и Пользователем также применяются соглашения и правила, указанные в тексте настоящего Соглашения. <br>\r
2. Термины и определения<br>\r
«Компания» - общество с ограниченной ответственностью «Смарт» (ОГРН 1112468003284, ИНН 2464231675, юридический адрес: Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17). <br>\r
«Пользователь» – лицо, использующее Сайт и его функционал для ознакомления с представленными в нем материалами. <br>\r
 «Сайт» – совокупность информационных материалов, размещённых в сети Интернет по адресу: www.premia.krasyar.ru<br>\r
Использование сервиса Сайта. <br>\r
2.1. Пользователь вправе использовать сервис Сайта в личных, семейных, домашних и иных целях, не связанных с осуществлением предпринимательской деятельности и в количествах, обеспечивающих разумную уверенность Компании в соблюдении настоящего условия. <br>\r
2.2. Для использования сервиса Сайта Пользователь вводит имя, фамилию, отчество, номер телефона, адрес электронной почты;<br>\r
2.3. Используя сервис Сайта Пользователь тем самым:<br>\r
• подтверждает свою дееспособность и финансовую состоятельность;<br>\r
• соглашается принимать от Компании звонки и сообщения на номер телефона и адрес электронной почты, указанные при регистрации;<br>\r
• принимает на себя ответственность за исполнение обязательств, возникающих у него вследствие использования сервиса Сайта, в том числе по оплате и приемке от Компании заказанного товара;<br>\r
• подтверждает и принимает на себя ответственность за точность, полноту и достоверность вводимых им данных;<br>\r
• принимает на себя риски, связанные с допущенными им ошибками и неточностями в предоставлении личных данных;<br>\r
2.4. Пользователь несет ответственность за полноту, достаточность и корректность данных, введенных при использовании сервиса Сайта.<br>\r
2.5. В случае выявления факта предоставления Пользователем недостоверной информации при использовании сервиса Сайта Компания имеет право отказать Пользователю в использовании сервиса. Компания не несет ответственности за последствия предоставления Пользователем недостоверной информации.<br>\r
2.6. При использовании Сайта Пользователь не вправе: <br>\r
• выдавать себя за другого человека или представителя организации и/или сообщества без достаточных на то прав;<br>\r
• нарушать нормальную работу Сайта; <br>\r
• использовать сервис Сайта в противоправных целях;<br>\r
• содействовать действиям, направленным на нарушение ограничений и запретов, налагаемых Соглашением.<br>\r
2.7. Компания вправе направлять Пользователю информационные сообщения посредством любых средств связи. Используя сервис Сайта, Пользователь также в соответствии с ч. 1 ст. 18 Федерального закона «О рекламе» дает свое согласие на получение сообщений рекламного характера. Пользователь вправе отказаться от получения сообщений рекламного характера путем направления уведомления.<br>\r
2.8. При использования сервиса Сайта стороны соглашения руководствуются Правилами работы сервиса, Правилами возврата товара и иными документами, регламентирующих порядок и условия использования сервиса Сайта.<br>\r
3. Персональные данные<br>\r
3.1. Информация, предоставленная Пользователем, является конфиденциальной.<br>\r
3.2. Принимая настоящее Соглашение, Пользователь дает Компании согласие на обработку своих персональных данных, сообщенных Пользователем при использовании сервиса Сайта, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными Пользователя, в том числе на сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, обезличивание, блокирование, удаление, уничтожение персональных данных, передачу персональных данных (распространение, предоставление, доступ) Пользователя третьими лицами Компании. При обработке персональных данных Компания использует следующие способы: автоматизированный, неавтоматизированный, смешанный.<br>\r
3.3. Пользователь предоставляет Компании и привлеченным Компанией лицам согласие на обработку своих персональных данных в целях, связанных с оформлением заказов, выполнением Компанией обязательств, вытекающих из настоящего Соглашения, обеспечением нормального функционирования Сайта в соответствии с настоящим Соглашением, оценкой и анализом функционирования Сайта, обеспечения защиты и безопасности персональных данных, получением от Компании уведомлений и информации, связанных с функционированием Сайта, а также рекламных объявлений Компании. <br>\r
3.4. Пользователь предоставляет Компании право обрабатывать информацию о совершенных Пользователем покупках дистанционных способом с целью обеспечения нормального функционирования Сайта, направления Пользователю персональных предложений, а также проведения любых статистических, маркетинговых и иных исследований.<br>\r
3.5. Согласие на обработку персональных данных даётся Пользователем до достижения целей обработки персональных данных или до момента утраты необходимости в достижении таких целей. <br>\r
3.6. Согласие Пользователя на обработку персональных данных может быть отозвано Пользователем в любой момент путем направления на юридический адрес Компании (Красноярский край, г. Красноярск, ул. Карамзина, д.25, пом.17) письменного уведомления об отзыве согласия.<br>\r
3.7. Компания вправе использовать технологию cookies. (cookies — служебная информация, посылаемая веб-сервером на компьютер пользователя, для сохранения в браузере. Применяется для сохранения данных, специфичных для данного пользователя и используемых веб-сервером для различных целей). Cookies не содержат конфиденциальную информацию и не передаются третьим лицам.<br>\r
4. Интеллектуальная собственность <br>\r
4.1. Права на Сайт, в том числе раскладку и компоненты, включая товарные знаки, логотипы и доменные имена, размещенные на Сайте, защищены действующим законодательством об интеллектуальной собственности и принадлежат Компании либо используются Компанией на законных основаниях, и их использование Вами возможно только с разрешения Компании.<br>\r
4.2. Использование Сайта допускается только в целях, определенных в п. 3.1. Соглашения. <br>\r
4.3. Запрещено копировать, воспроизводить, изменять, редактировать, скачивать, модифицировать, декомпилировать, передавать или распространять в какой бы то ни было форме, на каких бы то ни было носителях информации, целиком или частично, какие-либо компоненты Сайта без получения предварительного письменного согласия Компании.<br>\r
4.4. Копирование Сайта или каких-либо его компонентов разрешено только для личного использования в некоммерческих целях на Вашем личном электронном устройстве.<br>\r
4.5. При любом разрешенном использовании материалов Сайта или его компонентов:<br>\r
• необходимо сохранять объекты, содержащиеся на Сайте, в неизменном виде с сохранением в том числе водяных знаков, меток и других официальных уведомлений и указаний на принадлежность авторских и исключительных прав; <br>\r
• запрещено предпринимать попытки к изменению, в том числе с целью уничтожения или изменения каких-либо указаний на правообладателя.<br>\r
4.6. Использование элементов Сайта без разрешения Компании каким-либо способом и в целях иных, чем разрешены настоящим Соглашением, является незаконным и может повлечь за собой привлечение к ответственности в соответствии с законодательством Российской Федерации.<br>\r
5. Отсутствие гарантий, ограничение ответственности<br>\r
5.1. Компания предоставляет Пользователю возможность использования сервиса Сайта, включая сведения о ценах и описания товаров, «как есть» без каких-либо гарантий. Это означает, среди прочего, что Компания:<br>\r
• не гарантирует отсутствие ошибок в работе Сайта;<br>\r
• не несет ответственности за скорость и бесперебойную работу Сайта, его совместимость с программным обеспечением и техническими средствами Пользователя и иных лиц;<br>\r
• не несет ответственности за причинение каких-либо убытков, которые возникли или могут возникнуть при пользовании сервиса Сайта или в связи с этим;<br>\r
• не несет ответственности, связанной с каким-либо искажением, изменением содержания Сайта при его использовании;<br>\r
• не несет ответственности за неисполнение либо ненадлежащее исполнение своих обязательств в связи с обновлением программного обеспечения Сайта и техническими сбоями в телекоммуникационных и/или энергетических сетях, действия вредоносных программ, а также недобросовестных действий третьих лиц, направленных на несанкционированный доступ и/или выведение из строя Сайта, и вызванные ими потерю информации;<br>\r
• не несет ответственности за неисполнение либо ненадлежащее исполнение своих обязательств вследствие невозможности связаться с Пользователем по предоставленному им номеру телефона ввиду неработоспособности телефона, отсутствия на лицевом счету телефонного номера денежных средств, произошедшего сбоя в работе оператора связи, недоступности Пользователя и т.п.;<br>\r
• не несет ответственности за изменение программного обеспечения Сайта, в результате которого ограничивается или становится невозможным доступ к Сайту;<br>\r
• не несет ответственности за действия Пользователя на Сайте;<br>\r
• не несет ответственности за какие-либо повреждения программного и/или аппаратного обеспечения Пользователя, возникшие в результате использования Сайта; <br>\r
• не гарантирует предоставление доступа к Сайту, если устройство Пользователя не поддерживает формат, необходимый для воспроизведения представленной на нем информации;<br>\r
• не несет ответственности за временную неработоспособность системы, обеспечивающей прием и перевод платежей Пользователя, вызванную обстоятельствами непреодолимой силы и иными не зависящими от Компании причинами.<br>\r
6.2. Компания не несет ответственности:<br>\r
• за используемые Пользователем каналы связи и соответственно за любой финансовый или другой ущерб, причиненный вследствие использования некачественных или незащищенных каналов связи<br>\r
• за действия банков, платежных систем, мобильных операторов связи и пр. в случае невыполнения ими своих обязательств перед Пользователем, а также <br>\r
• за неисполнение либо ненадлежащее исполнение своих обязательств, если это вызвано действиями/бездействием Пользователя, находящимися вне контроля Компании, в том числе в результате совершения ошибочных действий/бездействия Пользователя.<br>\r
• за нарушение настоящего Соглашения, если такое нарушение вызвано действием обстоятельств непреодолимой силы (форс-мажор), включая: действия органов государственной власти, пожар, наводнение, землетрясение, другие стихийные действия, отсутствие электроэнергии и/или сбои работы компьютерной сети, забастовки, гражданские волнения, беспорядки, перекрытие или разрушение автомобильных дорог и любые иные обстоятельства, не ограничиваясь перечисленными, которые могут повлиять на выполнение Компании своих обязательств перед Пользователем.<br>\r
6.3. Ответственность Компании ограничена стоимостью оформленного Пользователем и не исполненного Компанией заказа с использованием сервиса Сайта.<br>\r
6.4. В случае нарушения Пользователем Соглашения Компания вправе отказать Пользователю в использовании сервиса мобильного приложения и/или исполнении оформленного заказа.<br>\r
7. Иные положения<br>\r
7.1. Если по тем или иным причинам одно или несколько положений настоящего Соглашения будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Соглашения.<br>\r
</p>`},{id:3,title:"Политика конфиденциальности",text:`<p>СОГЛАСИЕ <br />НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>\r
<p>&nbsp;</p>\r
<p>Я, _______________________________________________________________,</p>\r
<p><sup>(<em>ФИО)</em></sup></p>\r
<p>паспорт ___________ выдан _______________________________________________,</p>\r
<p><em><sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (серия, номер)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(когда и кем выдан)</sup></em><sup></sup></p>\r
<p>адрес регистрации:_______________________________________________________,</p>\r
<p>в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ &laquo;О персональных данных&raquo;, даю свое согласие на обработку в <em><u>Федеральном казначействе </u></em>моих персональных данных, относящихся исключительно к перечисленным ниже категориям персональных данных: фамилия, имя, отчество; пол; дата рождения; тип документа, удостоверяющего личность; данные документа, удостоверяющего личность; гражданство.</p>\r
<p>Я даю согласие на использование персональных данных исключительно в целях <em><u>участия в конкурсе антикоррупционного плаката, проводимого Федеральным казначейством </u></em><em><u>в рамках исполнения пункта 38 Национального плана противодействия коррупции на 2021&ndash;2024 годы, утвержденного Указом Президента Российской Федерации от 16 августа 2021 г. № 478 <br />&laquo;О Национальном плане противодействия коррупции на 2021&ndash;2024 годы&raquo;</u></em>, <br />а также на хранение данных об этих результатах на электронных носителях.</p>\r
<p>Настоящее согласие предоставляется мной на осуществление действий в отношении моих персональных данных, которые необходимы для достижения указанных выше целей, включая (без ограничения) сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу третьим лицам для осуществления действий по обмену информацией, обезличивание, блокирование персональных данных, а также осуществление любых иных действий, предусмотренных действующим законодательством Российской Федерации.</p>\r
<p>Я проинформирован, что <em><u>Федеральное казначейство</u></em> гарантирует обработку моих персональных данных в соответствии с действующим законодательством Российской Федерации как неавтоматизированным, так и автоматизированным способами.</p>\r
<p>Данное согласие действует до достижения целей обработки персональных данных или в течение срока хранения информации.</p>\r
<p>Данное согласие может быть отозвано в любой момент по моему&nbsp; письменному заявлению.&nbsp;</p>\r
<p>Я подтверждаю, что, давая такое согласие, я действую по собственной воле и в своих интересах.</p>\r
<ol>\r
<li>пункт 1</li>\r
<li>пункт 2</li>\r
</ol>`},{id:4,title:"Что такое программа лояльности «Премия»?",text:`<h2><a name="_Toc115960685"></a><a name="_Toc116035492"></a>Что такое программа лояльности &laquo;Премия&raquo;?</h2>\r
<p>&laquo;Премия&raquo; - это программа лояльности, которая действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;.</p>\r
<p>Участники программы лояльности получают премию за покупки в виде бонусов, которые возвращаются на карту.</p>\r
<p>Бонусами премия можно оплатить до 50% от стоимости покупки.</p>\r
<h2><a name="_Toc115960687"></a><a name="_Toc116035493"></a>Что дает участие в бонусной программе &laquo;Премия&raquo;?</h2>\r
<p>Регистрируясь в бонусной программе, вы получаете скидки и бонусы за покупку товаров и можете рассчитываться ими в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;.</p>\r
<p>Чем больше вы тратите в месяц, тем выше уровень Премии, а значит больше бонусов за покупку товаров из наборов категорий.</p>\r
<h2><a name="_Toc115960688"></a><a name="_Toc116035494"></a>Как стать участником программы лояльности &laquo;Премия&raquo;?</h2>\r
<p>Для участия в программе &laquo;Премия&raquo; необходимо зарегистрироваться по номеру телефона и получить виртуальную карту &laquo;Премия&raquo; в мобильном приложении или приобрести карту &laquo;Премия&raquo; на кассе за 19,90 рублей (в гастрономах Красный Яр и дискаунтерах &laquo;Батон&raquo;).</p>\r
<h2><a name="_Toc115960689"></a><a name="_Toc116035495"></a>Как можно зарегистрировать карту &laquo;Премия&raquo;?</h2>\r
<p>Карту можно зарегистрировать, скачав мобильное приложение &laquo;Премия&raquo; или позвонив по номеру 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960699"></a><a name="_Toc116035496"></a>В прошлом месяце у меня премия была больше, почему сейчас начисляется меньше?</h2>\r
<p>Статус программы лояльности &laquo;Премия&raquo; присваивается на основании суммы покупок, совершенных в прошлом месяце. В предыдущем месяце вы потратили меньше средств и не перешли порог следующего статуса.</p>\r
<h3 style="text-align: center; color: #3f7320;"></h3>`},{id:5,title:"Какие преимущества у программы лояльности «Премия»?",text:`<p>Преимущества программы лояльности «Премия» <br>\r
Какие бывают статусы? Как заработать новый статус? И что он дает? <br>\r
Размер Премии зависит от суммы покупок:<br>\r
Статус «Просто Так» с первой покупки;<br>\r
Статус «Для Друзей» от 3000 рублей;<br>\r
Статус «С Любовью» от 7000 рублей.<br>\r
От статусов зависит % начислений бонусов в наборах категорий, статус обновляется первого числа каждого месяца. <br>\r
Как узнать какой у меня статус?<br>\r
Вы можете проверить свой уровень самостоятельно в мобильном приложении или позвонив в колл-центр по номеру 8-800-775-89-50.<br>\r
Что такое наборы категорий?<br>\r
Наборы категорий находятся в мобильном приложении в них представлены товары, на которые начисляется разный размер премии в зависимости от статусов. <br>\r
Наборы категорий обновляются первого числа каждого месяца. Каждый месяц нужно выбирать новый набор, чтобы получать бонусы Премия на категории товаров.<br>\r
Как часто надо выбирать набор? <br>\r
Каждый месяц первого числа обновляются наборы категорий, которые необходимо выбрать после обновления.<br>\r
Сколько категорий в наборе? <br>\r
Количество категорий в наборе от 3 штук, они меняются в зависимости от сезонов и на основе предпочтений покупателей, если у вас есть предложения, пишите их в экспресс-отзывах в мобильном приложении «Премия». <br>\r
Я хочу выбрать другой набор категорий, как это сделать? <br>\r
Набор категорий можно выбрать только один раз в месяц в мобильном приложении «Премия», обновление наборов категорий происходит каждый месяц первого числа. <br>\r
Как получать больше бонусов Премия?<br>\r
В мобильном приложении «Премия» есть раздел «Цели», при достижении которых за определенный срок, вы получаете дополнительное бонусное начисление, которое указано в разделе. <br>\r
Каждый четверг обновляются персональные предложения, за покупку которых можно дополнительно получить % премии, указанный в мобильном приложении. <br>\r
Персональные предложения и цели выбираются на основе анализа истории покупок, частоты и суммы потраченных средств в прошлом месяце, поэтому они могут быть предложены не всем покупателям. <br>\r
Как выбрать набор категорий товаров с начислением премии если у меня нет мобильного приложения? <br>\r
Выбрать набор категорий можно только в мобильном приложении «Премия». Установите мобильное приложение на ваш смартфон и получайте доступ ко всем привилегиям программы лояльности «Премия». <br>\r
Можно ли выбрать набор категорий товаров с начислением премии на сайте программы лояльности? <br>\r
Выбрать набор категорий можно только в мобильном приложении «Премия». Установите мобильное приложение на ваш смартфон и получайте доступ ко всем привилегиям программы лояльности «Премия». <br>\r
Как выбрать «Любимый товар»?</p>\r
\r
<p>Данный функционал более не доступен в программе лояльности «Премия», воспользуйтесь другими привилегиями участника («Наборы категорий», «Персональные предложения, «Цели»).</p><br>\r
<br>`},{id:6,title:"Что такое бонусы?",text:`<h2><a name="_Toc115960686"></a><a name="_Toc116035507"></a>Что такое премия?</h2>\r
<p>&nbsp;Это бонусы, которые возвращаются на карту &laquo;Премия&raquo; при покупке определенных товаров и наборов категорий, которые можно выбрать в мобильном приложении &laquo;Премия&raquo;. Размер премии зависит от уровня &laquo;Премии&raquo;.</p>\r
<h2><a name="_Toc115960694"></a><a name="_Toc115960702"></a><a name="_Toc116035508"></a>Как быстро начисляются бонусы?</h2>\r
<p>Бонусы зачисляются на карту в течение суток после совершения покупки.</p>\r
<h2><a name="_Toc116035509"></a>Есть ли у бонусов срок действия?</h2>\r
<p>Бонусы сгорают спустя 6 месяцев с момента начисления. Дополнительно есть экспресс бонусы с более коротким сроком жизни.</p>\r
<h2><a name="_Toc116035509"></a> Есть ли ограничения по начислению бонусов? </h2>\r
<p> Суммарно в месяц может быть начислено не более 3000 бонусов. По отдельным акциям есть ограничение по начислению в день или период проведения акции, подробная информация об ограничениях будет размещена в рекламных материалах.</p>\r
<h2><a name="_Toc115960701"></a><a name="_Toc116035510"></a>Сколько у меня бонусов?</h2>\r
<p>Информация о сумме начисленных бонусов отображается в мобильном приложении &laquo;Премия&raquo;, а также количество бонусов можно уточнить у операторов&nbsp;&nbsp; колл-центра по номеру 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960705"></a><a name="_Toc116035511"></a>Мне не начислили бонусы. Что делать?</h2>\r
<p>Свяжитесь с нами отправьте фотографию чека удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc116035512"></a>Можно ли получить бонусы за покупку акционного товара?</h2>\r
<p>Бонусы начисляются за покупку любого товара из вашего набора, любые ограничения или изменения описаны в блоке с набором. &nbsp;</p>\r
<h2><a name="_Toc115960695"></a><a name="_Toc116035513"></a>Какая скидка предоставляется по карте &laquo;Премия&raquo;?</h2>\r
<p>По карте &laquo;Премия&raquo; вы можете приобретать товары со скидкой, указанной на ценнике.</p>\r
<h2><a name="_Toc115960700"></a><a name="_Toc116035514"></a>Как узнать по какой цене я могу купить товар и какую премию получу?</h2>\r
<p>Какое количество премии вы получите можно рассчитать исходя из того, какой набор вы выбрали и какой % начислений бонусов будет исходя и статуса.</p>\r
<p>Вся подробная информация размещена в мобильном приложении. Премия не начисляется на товары, выделенные специальным ценником.</p>\r
<h2><a name="_Toc115960703"></a><a name="_Toc116035515"></a>Как рассчитаться бонусами?</h2>\r
<p>По зарегистрированной карте &laquo;Премия&raquo; можно оплатить до 50% от суммы покупки, за исключением табачной продукции и товаров, на которые начисляется &laquo;Премия&raquo;. За алкогольную продукцию можно рассчитаться только на сумму выше МРЦ (минимальной розничной цены).</p>\r
<p>Сумму МРЦ можно уточнить на стенде с алкогольной продукцией.</p>\r
<p>1 бонус &ndash; это 1 рубль</p>\r
<p>Списать можно не белее 3 000 бонусов в месяц. </p>\r
<h2><a name="_Toc115960711"></a><a name="_Toc116035516"></a>Можно списывать бонусы Премия с виртуальной карты по QR-коду?</h2>\r
<p>Списать бонусы можно с виртуальной карты в мобильном приложении. Но в период технических работ или в целях сохранения бонусов, списание может быть приостановлено на неопределенный срок. Информация об этом будет в торговом зале и в мобильном приложении.</p>\r
<h2><a name="_Toc115960712"></a><a name="_Toc116035517"></a>Кто-то другой списывает мои бонусы. Что делать?</h2>\r
<p>Для решения проблемы связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`},{id:7,title:"Где действует карта «Премия»?",text:`<h2><a name="_Toc115960696"></a><a name="_Toc116035519"></a>Где действует карта &laquo;Премия&raquo;?</h2>\r
<p>Карта Премия действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo; на территории Красноярского края, республики Хакасия и республики Тыва.</p>\r
<h2><a name="_Toc115960706"></a><a name="_Toc116035520"></a>Можно ли снять деньги с карты? Можно ли переводить бонусы между своими картами?</h2>\r
<p>Бонусами можно рассчитаться только гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo;, обмен бонусов на денежные средства невозможен. Перевод бонусов между картами &laquo;Премия&raquo; невозможен.</p>\r
<h2><a name="_Toc115960707"></a><a name="_Toc116035521"></a>Старая карта с Вишней будет работать?</h2>\r
<p>Да. Карта &laquo;Премия&raquo; действует в гастрономах &laquo;Красный Яр&raquo; и дискаунтерах &laquo;Батон&raquo; не зависимо от внешнего вида.</p>\r
<h2><a name="_Toc115960708"></a><a name="_Toc116035522"></a>Что делать, если карта оказалась бракованной, не работает?</h2>\r
<p>Карту можно заменить магазине на кассе, для сохранения Премии и бонусов карта должна быть зарегистрирована.</p>\r
<p>&nbsp;После приобретения новой карты, обратитесь за помощью к нашим операторам, они перенесут ваши данные на новую карту. Связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960709"></a><a name="_Toc116035523"></a>Карта потерялась или ее украли, что делать?</h2>\r
<p>Необходимо приобрести новую карту &laquo;Премия&raquo; и зарегистрировать ее на ваш номер телефона, либо использовать виртуальную карту в мобильном приложении.</p>\r
<p>Если карта зарегистрирована, бонусы и статус карты сохранится.</p>\r
<p>И обратиться по данным каналам связи:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>\r
<h2><a name="_Toc115960710"></a><a name="_Toc116035524"></a>Карту забыл дома, и вспомнил на кассе, что делать?</h2>\r
<p>Воспользуйтесь виртуальной картой Премия в мобильном приложении. Все скидки и акции действуют при предъявлении виртуальной карты &laquo;Премия&raquo;. Вы можете зарегистрировать виртуальную карту через мобильное приложение.</p>\r
<h2><a name="_Toc115960713"></a><a name="_Toc116035525"></a>Моя карта Премия заблокирована. Что делать?</h2>\r
<p>Для решения проблемы связаться с нами можно любым удобным для вас способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`},{id:8,title:"Остались вопросы?",text:`<p>Свяжитесь с нами любым удобным способом:</p>\r
<p>в Мобильном приложении в разделе &laquo;Экспресс отзывы&raquo;;</p>\r
<p>в Телеграм канале @ operatorkrasyar;</p>\r
<p>в ВКонтакте <a href="https://vk.com/krasyar">https://vk.com/krasyar</a> и https://vk.com/baton_discount ;</p>\r
<p>на почту <a href="mailto:vopros@krasyar.ru">vopros@krasyar.ru</a>;</p>\r
<p>по номеру телефона 8-800-775-89-50.</p>`}],questionsAndAnswers:[{id:4,questions:"Куда пропали любимые товары?",answers:"Мы отключили данный функционал в новой программе лояльности."},{id:5,questions:"Почему не получается выбрать набор категорий",answers:'Проверьте, пожалуйста, есть ли у вас кнопка "Выбрать", если она отсутствует, то вы уже выбрали набор. Наборы обновляются 1 числа каждого месяца. Если же кнопка есть, но она не активна, просим вас написать нам.'}]},status:"error"};ys.post("https://premialoyality.ru/api/page/getInfoPage",async({request:t})=>new URL(t.url).searchParams.get("scenario")==="error"?(await Y(2e3),$.json(Us)):(await Y(2e3),$.json(Ds)));function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},N(t)}function kn(t,s){if(N(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,s||"default");if(N(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function xn(t){var s=kn(t,"string");return N(s)==="symbol"?s:String(s)}function wn(t,s,n){return s=xn(s),s in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}var Rn={root:function(s){var n=s.props;return Qs("p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-none":n.animation==="none"})}},On=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,Sn={root:{position:"relative"}},G=nn.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:Rn,inlineStyles:Sn,styles:On}});function xs(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);s&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function ws(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?xs(Object(n),!0).forEach(function(o){wn(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xs(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var v=c.memo(c.forwardRef(function(t,s){var n=tn(),o=c.useContext(sn),r=G.getProps(t,o),e=G.setMetaData({props:r}),i=e.ptm,y=e.cx,d=e.sx,k=e.isUnstyled;an(G.css.styles,k,{name:"skeleton"});var z=c.useRef(null);c.useImperativeHandle(s,function(){return{props:r,getElement:function(){return z.current}}});var f=r.size?{width:r.size,height:r.size,borderRadius:r.borderRadius}:{width:r.width,height:r.height,borderRadius:r.borderRadius},K=n({ref:z,className:Qs(r.className,y("root")),style:ws(ws({},f),d("root")),"aria-hidden":!0},G.getOtherProps(r),i("root"));return c.createElement("div",K)}));v.displayName="Skeleton";const Pn=t=>{if(t.id){const s=t.data.result.info.find(n=>n.id===t.id);if(!s)throw new Error("Элемент с заданным ID не найден!");return s}else if(t.title){const s=t.data.result.info.find(n=>n.title.toLowerCase().includes(t.title));if(!s)throw new Error("Элемент с указанным текстом не найден!");return s}return{id:-1,title:"Ошибка",text:'<p style="text-align:center">Не удалось загрузить данные страницы.</p>'}};function jn(t){return{__html:t}}function Ms(){const t=rn(),{data:s,isLoading:n,isSuccess:o,isError:r}=zn({queryKey:[gn[0]],queryFn:vn,select:e=>Pn({data:e,title:"правила участия"})});return l.jsxs("div",{children:[l.jsxs("div",{className:"border-[rgba(141, 146, 154, 0.15)] flex items-center gap-x-1 border-b p-4",children:[l.jsxs("button",{onClick:()=>{t(-1)},className:"relative w-6 min-w-6 overflow-hidden rounded-md",children:[l.jsx(on,{}),l.jsx(Zs,{pt:{root:{style:{background:"rgba(145, 47, 70, 0.3)"}}}})]}),n?l.jsx(v,{height:"24px"}):null,r?l.jsx("h1",{className:"truncate font-Golos text-base/6 font-normal text-212121",children:"Возникла ошибка!"}):null,o?l.jsx("h1",{className:"truncate font-Golos text-base/6 font-normal text-212121",children:s.title}):null]}),l.jsxs("div",{className:"p-6",children:[n?l.jsxs(l.Fragment,{children:[l.jsx(v,{height:"16px",className:"mb-2"}),l.jsx(v,{height:"16px",className:"mb-2"}),l.jsx(v,{height:"16px",className:"mb-2"}),l.jsx(v,{width:"75%",height:"16px",className:"mb-2"}),l.jsx(v,{width:"75%",height:"16px",className:"mb-2"}),l.jsx(v,{height:"16px",className:"mb-2"}),l.jsx(v,{width:"50%",height:"16px",className:"mb-2"})]}):null,r?l.jsx("p",{className:"grid gap-y-3 font-Golos text-xs font-normal text-912F46",children:"Не удалось получить запрошенные данные. Пожалуйста повторите попытку."}):null,o?l.jsx("p",{className:"grid gap-y-3 font-Golos text-xs font-normal text-[#8d929a]",dangerouslySetInnerHTML:jn(s.text)}):null]})]})}Ms.__docgenInfo={description:"",methods:[],displayName:"InfoTerms"};const Cn=new Vs({defaultOptions:{queries:{retry:!1,staleTime:100}}}),En=()=>l.jsx($s,{client:Cn,children:l.jsx(Ms,{})}),tt={title:"Страницы/Инфо/Условия использвания",component:En,tags:["autodocs"],parameters:{layout:{padded:!1},docs:{page:()=>l.jsxs(l.Fragment,{children:[l.jsx(As,{}),l.jsx(Bs,{})]}),description:{component:`<p>Адрес страницы: /info/terms</p>
<p>Используемые запросы:</p>
<p>postInfo() - VITE_POST_INFO - https://premialoyality.ru/api/page/getInfoPage</p>`}}}},W={name:"Условия использвания",parameters:{msw:{handlers:[ys.post("https://premialoyality.ru/api/page/getInfoPage",async()=>(await Y(2e3),$.json(Ds)))]}}},X={name:"Условия использвания (ошибка)",parameters:{msw:{handlers:[ys.post("https://premialoyality.ru/api/page/getInfoPage",async()=>(await Y(2e3),$.json(Us)))]}}};var Os,Ss,Ps;W.parameters={...W.parameters,docs:{...(Os=W.parameters)==null?void 0:Os.docs,source:{originalSource:`{
  name: 'Условия использвания',
  parameters: {
    msw: {
      handlers: [http.post(import.meta.env.VITE_POST_INFO, async () => {
        await delay(2000);
        return HttpResponse.json(responseSuccess);
      })]
    }
  }
}`,...(Ps=(Ss=W.parameters)==null?void 0:Ss.docs)==null?void 0:Ps.source}}};var js,Cs,Es;X.parameters={...X.parameters,docs:{...(js=X.parameters)==null?void 0:js.docs,source:{originalSource:`{
  name: 'Условия использвания (ошибка)',
  parameters: {
    msw: {
      handlers: [http.post(import.meta.env.VITE_POST_INFO, async () => {
        await delay(2000);
        return HttpResponse.json(responseError);
      })]
    }
  }
}`,...(Es=(Cs=X.parameters)==null?void 0:Cs.docs)==null?void 0:Es.source}}};const at=["Primary","PrimaryError"];export{W as Primary,X as PrimaryError,at as __namedExportsOrder,tt as default};
