import{j as r}from"./jsx-dev-runtime-BETcGmrp.js";import{T as u}from"./index-DmOLfB1G.js";import{h as a,H as c}from"./index-Dt5PkBs3.js";import{S as d}from"./subscriptionConfirmation-DlAuBNQZ.js";import{r as l,a as f}from"./postSubscription-DsIVvAe-.js";import"./index-BdMw_Ax9.js";import"./iframe-DNwh6oNd.js";import"../sb-preview/runtime.js";import"./index-BSE0ybse.js";import"./mapValues-BXPElCjX.js";import"./index-BU6WCtrf.js";import"./index-C-I6vmrZ.js";import"./index-BvvlT_10.js";import"./index-DrFu-skq.js";import"./index-zmhHS-aW.js";import"./useMutation-Djmu82TW.js";import"./mutation-B5pq8hhe.js";import"./QueryClientProvider-DLasFzzO.js";import"./jsx-runtime-B_9IJGoR.js";import"./utils-km2FGkQ4.js";import"./StyledButton-BfTgqHe6.js";import"./api.esm-CK-Pl4SF.js";import"./ripple.esm-CEskJZ5p.js";import"./portal.esm-CvrWT0gn.js";import"./StyledToast-DSRo3MwN.js";import"./index-ByRWxq36.js";import"./store-CMG6tZte.js";import"./delay-DW_e480v.js";const G={title:"Страницы/Главная/Подписки",component:d,tags:["autodocs"],parameters:{docs:{page:()=>r.jsxDEV(r.Fragment,{children:[r.jsxDEV(u,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.stories.tsx",lineNumber:17,columnNumber:11},void 0),r.jsxDEV("h2",{children:"Адрес страницы: / начальная страница, нажать на иконку Подписки в навигации внизу, далее кликнуть на подсвеченную карточку подписки"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.stories.tsx",lineNumber:18,columnNumber:11},void 0),r.jsxDEV("h3",{children:"Используемые запросы:"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.stories.tsx",lineNumber:22,columnNumber:11},void 0),r.jsxDEV("p",{children:["postSubscription() - VITE_POST_SUBSCRIPTION - ","https://preprod.premiya.fivecorners.ru/api/page/setUserSubscriptions"]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.stories.tsx",lineNumber:23,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.stories.tsx",lineNumber:16,columnNumber:9},void 0)}}},s={name:"Дровер с конфирмацией подписки",args:{name:"10% скидка на овощи",id:1,closeConfirmation:()=>{}},parameters:{msw:{handlers:[a.post("https://preprod.premiya.fivecorners.ru/api/page/setUserSubscriptions",async()=>c.json(l))]}}},o={name:"Дровер с ошибкой конфирмацией подписки",args:{name:"10% скидка на овощи",id:1,closeConfirmation:()=>{}},parameters:{msw:{handlers:[a.post("https://preprod.premiya.fivecorners.ru/api/page/setUserSubscriptions",async()=>c.json(f))]}}};var e,n,i;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'Дровер с конфирмацией подписки',
  args: {
    name: '10% скидка на овощи',
    id: 1,
    closeConfirmation: () => {}
  },
  parameters: {
    msw: {
      handlers: [http.post(import.meta.env.VITE_POST_SUBSCRIPTION, async () => {
        return HttpResponse.json(responseSuccess);
      })]
    }
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var t,p,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Дровер с ошибкой конфирмацией подписки',
  args: {
    name: '10% скидка на овощи',
    id: 1,
    closeConfirmation: () => {}
  },
  parameters: {
    msw: {
      handlers: [http.post(import.meta.env.VITE_POST_SUBSCRIPTION, async () => {
        return HttpResponse.json(responseErrorSubscriptionId);
      })]
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const J=["ConfirmationDrawer","ConfirmationDrawerError"];export{s as ConfirmationDrawer,o as ConfirmationDrawerError,J as __namedExportsOrder,G as default};
