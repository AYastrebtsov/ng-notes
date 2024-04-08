import{S as g}from"./StyledOptInput-B4qGEzBe.js";import"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";import"./utils-B6PcESyr.js";const v={title:"Общие компоненты/Sms-код",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`<p>Поле для ввода SMS</p>
<p>Основана на https://github.com/guilhermerodz/input-otp</p>`}}}},e={name:"Sms-Code",args:{onComplete:u=>{alert(`Вы ввели код ${u}`)}}},r={name:"Sms-Code (Ошибка)",args:{onComplete:u=>{alert(`Вы ввели код ${u}`)},error:!0}},a={name:"Sms-Code (Отключенное)",args:{onComplete:u=>{alert(`Вы ввели код ${u}`)},disabled:!0}},o={name:"Sms-Code (Отключенное c ошибкой)",args:{onComplete:u=>{alert(`Вы ввели код ${u}`)},error:!0,disabled:!0}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Sms-Code',
  args: {
    onComplete: value => {
      alert(\`Вы ввели код \${value}\`);
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sms-Code (Ошибка)',
  args: {
    onComplete: value => {
      alert(\`Вы ввели код \${value}\`);
    },
    error: true
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Sms-Code (Отключенное)',
  args: {
    onComplete: value => {
      alert(\`Вы ввели код \${value}\`);
    },
    disabled: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var E,S,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Sms-Code (Отключенное c ошибкой)',
  args: {
    onComplete: value => {
      alert(\`Вы ввели код \${value}\`);
    },
    error: true,
    disabled: true
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const A=["Primary","PrimaryError","PrimaryDisabled","PrimaryErroDisabled"];export{e as Primary,a as PrimaryDisabled,o as PrimaryErroDisabled,r as PrimaryError,A as __namedExportsOrder,v as default};
