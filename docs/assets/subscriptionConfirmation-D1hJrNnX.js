import{j as e}from"./jsx-dev-runtime-BETcGmrp.js";import{u as c}from"./useMutation-Djmu82TW.js";import{p}from"./postSubscription-DsIVvAe-.js";import{S as t}from"./StyledButton-BfTgqHe6.js";import{u as l}from"./StyledToast-ChYbD6sG.js";import{u as d}from"./store-Z64qRVOu.js";const b=({name:r,id:a,closeConfirmation:i})=>{const s=d(n=>n.user.apiToken),{StyledToast:m,showToast:o}=l(),{mutate:u}=c({mutationFn:p,onSuccess:n=>{n.massage==="Подписка успешно оформлена"&&(o({variant:"success",text:n.massage}),setTimeout(()=>{i(!1)},3e3))},onError:n=>{o({variant:"info",sticky:!0,text:n.message})}});return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"absolute -top-3 left-1/2 mx-auto mb-2 h-1 w-[38px] -translate-x-1/2 rounded-full bg-white opacity-75"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:44,columnNumber:7},void 0),e.jsxDEV("p",{className:"font-Inter text-base font-bold leading-5 text-black",children:["Вы точно хотите оформить подписку:"," ",e.jsxDEV("span",{className:"font-Inter text-D50032 text-base font-bold leading-5",children:["«",r,"»"]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:46,columnNumber:7},void 0),e.jsxDEV("div",{className:"mt-7 flex gap-3",children:[e.jsxDEV(t,{label:"Нет",plain:!0,onClick:()=>i(!1)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:52,columnNumber:9},void 0),e.jsxDEV(t,{label:"Да",onClick:()=>u({api_token:s||"",subscription_id:a})},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:51,columnNumber:7},void 0),e.jsxDEV(m,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:57,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/routes/_index/components/subscriptions/subscriptionConfirmation/subscriptionConfirmation.tsx",lineNumber:43,columnNumber:5},void 0)};b.__docgenInfo={description:"",methods:[],displayName:"SubscriptionConfirmation",props:{name:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"number"},description:""},closeConfirmation:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""}}};export{b as S};
