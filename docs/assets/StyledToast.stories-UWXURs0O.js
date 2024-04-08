import{j as u}from"./jsx-runtime-_e34SzbC.js";import{T as q,D as P}from"./index-Bsd13j-q.js";import{u as O}from"./StyledToast-_thc0YPA.js";import"./index-DVXBtNgz.js";import"./iframe-BWFzkPgu.js";import"../sb-preview/runtime.js";import"./index-CMHnigvr.js";import"./mapValues-BA7I9QKQ.js";import"./index-RMSiDl4v.js";import"./index-C-I6vmrZ.js";import"./index-8IunTYrG.js";import"./index-DrFu-skq.js";import"./api.esm-vZf3A5nu.js";import"./ripple.esm-D99TQ-Py.js";import"./extends-CCbyfPlC.js";import"./iconbase.esm-JCNRNy3-.js";const w=({variant:L,text:j,sticky:i,life:c})=>{const{StyledToast:k,showToast:h,closeToast:M}=O();return u.jsxs(u.Fragment,{children:[u.jsx(k,{}),u.jsx("button",{onClick:()=>{h({variant:L,text:j,...i&&{sticky:i},...c&&{life:c}})},children:"вызвать уведомление"})]})},Z={title:"Общие компоненты/Уведомление",component:w,tags:["autodocs"],parameters:{docs:{page:()=>u.jsxs(u.Fragment,{children:[u.jsx(q,{}),u.jsx(P,{})]}),description:{component:`<p>Основано на https://primereact.org/toast/</p>
<p>Для использования необходимо воспользоваться хуком <strong>useStyledToast</strong></p>
<p>Хук предоставляет компонент <strong>StyledToast</strong> который необходимо отрендерить в DOM узле и две функции:</p>
<p><strong>showToast</strong> вызывает уведомление с переданными в данную функцию параметрами</p>
<p><strong>closeToast</strong> закрывает все вызыванные уведомления с текущем DOM узле</p>`}}}},t={name:"Информационное уведомление скрываемое через 3 секунды",args:{variant:"info",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies."}},s={name:"Информационное уведомление перманентное",args:{variant:"info",sticky:!0,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. "}},e={name:"Информационное уведомление кастомное время закрытия",args:{variant:"info",life:1e3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. "}},r={name:"Успешное уведомление скрываемое через 3 секунды",args:{variant:"success",text:"Lorem ipsum!"}},a={name:"Успешное уведомление перманентное",args:{variant:"success",text:"Lorem ipsum!",sticky:!0}},o={name:"Успешное уведомление кастомное время закрытия",args:{variant:"success",text:"Lorem ipsum!",life:1e3}};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Информационное уведомление скрываемое через 3 секунды',
  args: {
    variant: 'info',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies.'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var E,l,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Информационное уведомление перманентное',
  args: {
    variant: 'info',
    sticky: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. '
  }
}`,...(D=(l=s.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};var d,g,C;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Информационное уведомление кастомное время закрытия',
  args: {
    variant: 'info',
    life: 1000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor elit ac elit consequat, vitae accumsan mi ultricies. '
  }
}`,...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var B,F,S;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Успешное уведомление скрываемое через 3 секунды',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!'
  }
}`,...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var T,x,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Успешное уведомление перманентное',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!',
    sticky: true
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,A,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Успешное уведомление кастомное время закрытия',
  args: {
    variant: 'success',
    text: 'Lorem ipsum!',
    life: 1000
  }
}`,...(f=(A=o.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const $=["PrimaryToast","PrimaryToastSticky","PrimaryToastSecond","SuccessToast","SuccessToastSticky","SuccessToastSecond"];export{t as PrimaryToast,e as PrimaryToastSecond,s as PrimaryToastSticky,r as SuccessToast,o as SuccessToastSecond,a as SuccessToastSticky,$ as __namedExportsOrder,Z as default};
