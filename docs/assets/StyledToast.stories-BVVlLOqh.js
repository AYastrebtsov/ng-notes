import{j as u}from"./jsx-dev-runtime-CsvOyHnx.js";import{T as L,D as j}from"./index-LVPIffbB.js";import{u as w}from"./StyledToast-D-aPMoEP.js";import"./index-DGAqIW1f.js";import"./iframe-CRS2fnS0.js";import"../sb-preview/runtime.js";import"./index-CefgwqXd.js";import"./mapValues-Dca9BJLA.js";import"./index-c1JcMxCd.js";import"./index-C-I6vmrZ.js";import"./index-BVq1MPD2.js";import"./index-DrFu-skq.js";import"./api.esm-CqhHtwfv.js";import"./ripple.esm-xpvgVRPj.js";import"./extends-CCbyfPlC.js";import"./index-DTJzODqJ.js";import"./iconbase.esm-DVzm6e2S.js";const _=({variant:A,text:k,sticky:i,life:n})=>{const{StyledToast:b,showToast:h,closeToast:q}=w();return u.jsxDEV(u.Fragment,{children:[u.jsxDEV(b,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:23,columnNumber:7},void 0),u.jsxDEV("button",{onClick:()=>{h({variant:A,text:k,...i&&{sticky:i},...n&&{life:n}})},children:"вызвать уведомление"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:24,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:22,columnNumber:5},void 0)},$={title:"Общие компоненты/Уведомление",component:_,tags:["autodocs"],parameters:{docs:{page:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(L,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:55,columnNumber:11},void 0),u.jsxDEV(j,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:56,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/shared/ui/StyledToast/StyledToast.stories.tsx",lineNumber:54,columnNumber:9},void 0),description:{component:`<p>Основано на https://primereact.org/toast/</p>
<p>Для использования необходимо воспользоваться хуком <strong>useStyledToast</strong></p>
<p>Хук предоставляет компонент <strong>StyledToast</strong> который необходимо отрендерить в DOM узле и две функции:</p>
<p><strong>showToast</strong> вызывает уведомление с переданными в данную функцию параметрами</p>
<p><strong>closeToast</strong> закрывает все вызыванные уведомления с текущем DOM узле</p>`}}}},e={name:"Информационное уведомление скрываемое через 3 секунды",args:{variant:"info",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies."}},t={name:"Информационное уведомление перманентное",args:{variant:"info",sticky:!0,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. "}},s={name:"Информационное уведомление кастомное время закрытия",args:{variant:"info",life:1e3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. "}},r={name:"Успешное уведомление скрываемое через 3 секунды",args:{variant:"success",text:"Lorem ipsum!"}},a={name:"Успешное уведомление перманентное",args:{variant:"success",text:"Lorem ipsum!",sticky:!0}},o={name:"Успешное уведомление кастомное время закрытия",args:{variant:"success",text:"Lorem ipsum!",life:1e3}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Информационное уведомление скрываемое через 3 секунды',
  args: {
    variant: 'info',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies.'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,d,D;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Информационное уведомление перманентное',
  args: {
    variant: 'info',
    sticky: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. '
  }
}`,...(D=(d=t.parameters)==null?void 0:d.docs)==null?void 0:D.source}}};var E,g,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Информационное уведомление кастомное время закрытия',
  args: {
    variant: 'info',
    life: 1000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. '
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,T,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Успешное уведомление скрываемое через 3 секунды',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!'
  }
}`,...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var f,x,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Успешное уведомление перманентное',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!',
    sticky: true
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var F,v,N;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Успешное уведомление кастомное время закрытия',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!',
    life: 1000
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const u4=["PrimaryToast","PrimaryToastSticky","PrimaryToastSecond","SuccessToast","SuccessToastSticky","SuccessToastSecond"];export{e as PrimaryToast,s as PrimaryToastSecond,t as PrimaryToastSticky,r as SuccessToast,o as SuccessToastSecond,a as SuccessToastSticky,u4 as __namedExportsOrder,$ as default};
