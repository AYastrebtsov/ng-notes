import{j as e}from"./jsx-dev-runtime-CsvOyHnx.js";import{T as z,D as H}from"./index-LVPIffbB.js";import{h as x,d as c,H as p}from"./utils-CBgc07CQ.js";import{u as R,a as N,s as T,c as A,b as L}from"./store-B5FxAW76.js";import{c as F}from"./utils-B6PcESyr.js";import{r as y}from"./index-DGAqIW1f.js";import{c as K,a as J,u as q,b,C as Q,o as G}from"./object-CqZ4xLrp.js";import{I as W}from"./IntroHeader-wm-TfW1Q.js";import{I as X}from"./InfoLink-Db79jLAq.js";import{S as Z}from"./StyledButton-CXOy1qY9.js";import{S as Y}from"./StyledOptInput-7Lg98cgI.js";import{S as O}from"./StyledRipple--WHW6LNT.js";import{u as $}from"./StyledToast-D-aPMoEP.js";import{g as ee}from"./getBeginRegistrer-I6MBuyyL.js";import{d as re}from"./index-CXarZTwe.js";import{P as se}from"./Provider-BpjKgELG.js";import"./iframe-CRS2fnS0.js";import"../sb-preview/runtime.js";import"./index-CefgwqXd.js";import"./mapValues-Dca9BJLA.js";import"./index-c1JcMxCd.js";import"./index-C-I6vmrZ.js";import"./index-BVq1MPD2.js";import"./index-DrFu-skq.js";import"./QueryClientProvider-scR_tWxP.js";import"./jsx-runtime-MMghOlKT.js";import"./ArrowIcon-BrB_fVFW.js";import"./index-CcQzjw1b.js";import"./api.esm-CqhHtwfv.js";import"./ripple.esm-xpvgVRPj.js";import"./iconbase.esm-DVzm6e2S.js";import"./extends-CCbyfPlC.js";import"./index-DTJzODqJ.js";const te=async({api_token:r,code:s})=>{const a=new URL("https://premialoyality.ru/api/loymax/phoneCode");a.searchParams.append("api_token",r),a.searchParams.append("code",s);const i=await fetch(a);if(!i.ok)throw new Error("Произошел сбой запроса. Повторите попытку");const o=await i.json();if(o.status==="Error")throw new Error(o.result.result.message);if(o.result.result.state==="Error")throw new Error(o.result.result.message);if(o.result.data===void 0)throw new Error("Не удалось получить ответ");return o},w={result:{data:{token_type:"bearer",access_token:"qEolVCQ-UBzLFkob2xk2pQbGdh8ngx72kOXDjc6h345N5iKifee6G0biAPysrrmwP9Zly5HpoOZikI4hLmagsPP0qx9bHp3KuMTSpkzFQ8zXzJool1iMfy_wynVDdMd9s5CEKYQpvDDIcAL9zIrRU-vaM_ML843pPBPV3MJyrJreo8k5S7uaGH8k9EfZPLw9ujJoiVWtdIBk3zzJKq_PoK8M__M16BWOlz0nidP38kL4T2nqADNPctQHiJl4Hlzrl1eihSKb8dIcnuEahByzxBLrxfPIh3mVOzhj_54MJMCHWd2J5UXm7bc85dBkz2ueDd9XKzH0z7dqgZPIH58HpiPYCQExcspNAKk-umP3kBG80yVZw02iFBUnM_WsKPpNP_i4gUE5D4WsXB1lDoQIYeEWAUUrEynhYBNmFFShTRI",refresh_token:"5ba5163545d54f29a35ed65b469afb41",expires_in:2592e3},result:{state:"Success",httpCode:200,message:null,messageCode:null,exception:null,validationErrors:null}},status:"Success"},g={result:{result:{state:"Error",httpCode:400,message:"Неправильный код подтверждения. Осталось 6 попыток.",messageCode:null,exception:null,validationErrors:null}},status:"Error"};x.get("https://premialoyality.ru/api/loymax/phoneCode",async({request:r})=>new URL(r.url).searchParams.get("scenario")==="error"?(await c(2e3),p.json(g)):(await c(2e3),p.json(w)));const oe=K({code:J().length(4).required()}),ae=(r,s)=>r===void 0&&s===null?"Введите код безопасности":r!==void 0&&s===null?"Укажите код полностью":r===void 0&&s!==null||r!==void 0&&s!==null?"Неверный код безопасности":"Введите код безопасности";function V(){const r=R(),s=re(),{StyledToast:a,showToast:i}=$(),o=N(t=>t.user.apiToken),m=N(t=>t.user.phoneValue),[n,h]=y.useState(60),{handleSubmit:U,control:P,reset:I,formState:{errors:d}}=q({defaultValues:{code:""},resolver:G(oe)}),{mutate:M,error:f,isPending:C}=b({mutationFn:te,onSuccess:()=>{s("/fio")},onError:()=>{I()}}),{mutate:B}=b({mutationFn:ee,onMutate:()=>{i({variant:"info",text:`На номер ${m} повторно отправлен SMS-код`})}});return y.useEffect(()=>{const t=setInterval(()=>{n>0&&h(n-1)},1e3);return()=>clearInterval(t)},[n]),e.jsxDEV("div",{className:"flex h-dvh flex-col",children:[null,e.jsxDEV(W,{arrowAction:()=>{s(-1)},closeAction:()=>{s(-1)},className:"px-2 pt-2"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:104,columnNumber:7},this),e.jsxDEV("div",{className:"flex flex-grow flex-col px-3 pb-7 pt-[14px]",children:[e.jsxDEV("h1",{className:"pb-6 font-Inter text-base/5 font-bold text-212121",children:["Вы получите смс на номер",e.jsxDEV("br",{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:117,columnNumber:11},this)," ",m]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:115,columnNumber:9},this),e.jsxDEV("p",{className:F("pb-[14px] font-Inter text-[0.688rem]/[0.875rem] font-medium text-8D929A",{"text-D50032":d.code},{"text-D50032":f}),children:ae(d.code,f)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:120,columnNumber:9},this),e.jsxDEV("form",{onSubmit:U(t=>{console.log(t),r(T(t.code)),M({api_token:o||"",code:t.code})}),className:"flex flex-grow flex-col",children:[e.jsxDEV(Q,{name:"code",control:P,defaultValue:"",render:({field:t})=>e.jsxDEV(Y,{error:d.code?!0:f!==null,...t},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:150,columnNumber:15},this)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:145,columnNumber:11},this),e.jsxDEV(Z,{type:"submit",label:"Далее",loading:C,className:"mt-auto"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:154,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:134,columnNumber:9},this),e.jsxDEV("button",{disabled:n!==0,className:"relative mt-[18px] min-h-9 overflow-hidden rounded-md border-0 text-center font-Inter text-xs/[1.125rem] font-medium text-D50032 disabled:text-8D929A",onClick:()=>{h(60),B(m.replace(/\D/g,""))},children:[n!==0?`Не получили СМС? Повторная отправка возможна через ${n} секунд`:"Отправить код повторно",e.jsxDEV(O,{pt:{root:{style:{background:"rgba(145, 47, 70, 0.3)"}}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:168,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:157,columnNumber:9},this),e.jsxDEV(X,{className:"m-auto mt-[10px]",to:"/info",text:"Инфо"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:175,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:114,columnNumber:7},this),e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:177,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.tsx",lineNumber:101,columnNumber:5},this)}V.__docgenInfo={description:"",methods:[],displayName:"Sms"};const j=({children:r})=>e.jsxDEV(se,{store:A({reducer:{user:L({name:"user",initialState:{apiToken:"mock_api_tocken_123456789",phoneValue:"+7 915 457 24 90"},reducers:{}}).reducer}}),children:r},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:9,columnNumber:3},void 0),Te={title:"Страницы/Sms",component:V,tags:["autodocs"],parameters:{layout:{padded:!1},docs:{page:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(z,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:48,columnNumber:11},void 0),e.jsxDEV(H,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:49,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:47,columnNumber:9},void 0),description:{component:`<p>Адрес страницы: /sms</p>
<p>Используемые запросы:</p>
<p>getSendSms() - VITE_SEND_SMS - https://premialoyality.ru/api/loymax/phoneCode</p>
<p>getBeginRegister() - VITE_BEGIN_REGISTER - https://premialoyality.ru/api/loymax/beginRegister</p>`}}}},l={name:"Sms",decorators:[r=>e.jsxDEV(j,{children:r()},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:62,columnNumber:25},void 0)],parameters:{msw:{handlers:{auth:x.get("https://premialoyality.ru/api/loymax/phoneCode",async()=>(await c(2e3),p.json(w)))}}}},u={name:"Sms - ошибка",decorators:[r=>e.jsxDEV(j,{children:r()},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/sms/route.stories.tsx",lineNumber:77,columnNumber:25},void 0)],parameters:{msw:{handlers:{auth:x.get("https://premialoyality.ru/api/loymax/phoneCode",async()=>(await c(2e3),p.json(g)))}}}};var D,E,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Sms',
  decorators: [story => <Mockstore>{story()}</Mockstore>],
  parameters: {
    msw: {
      handlers: {
        auth: http.get(import.meta.env.VITE_SEND_SMS, async () => {
          await delay(2000);
          return HttpResponse.json(responseSuccess);
        })
      }
    }
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var k,v,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Sms - ошибка',
  decorators: [story => <Mockstore>{story()}</Mockstore>],
  parameters: {
    msw: {
      handlers: {
        auth: http.get(import.meta.env.VITE_SEND_SMS, async () => {
          await delay(2000);
          return HttpResponse.json(responseError);
        })
      }
    }
  }
}`,...(_=(v=u.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const Ae=["Primary","PrimaryError"];export{l as Primary,u as PrimaryError,Ae as __namedExportsOrder,Te as default};