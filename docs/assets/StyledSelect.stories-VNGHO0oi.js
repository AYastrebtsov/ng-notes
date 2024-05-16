import{j as u}from"./jsx-dev-runtime-BETcGmrp.js";import{T,D as _,d as I,C as O,A as H,e as J}from"./index-BN4VhSEn.js";import{S as r,s as K}from"./StyledSelect-Cd1AdUzf.js";import"./index-BdMw_Ax9.js";import"./iframe-L8bQ74Sw.js";import"../sb-preview/runtime.js";import"./index-BwQhoTO9.js";import"./mapValues-ChqGHMta.js";import"./index-C72NkCm4.js";import"./index-C-I6vmrZ.js";import"./index-DuUjvt_u.js";import"./index-DrFu-skq.js";import"./utils-Dyyo_Bbn.js";import"./api.esm-DPODbszm.js";import"./componentbase.esm-CZx7eTCo.js";import"./index.esm-BPWPgF8-.js";import"./csstransition.esm-_prziQ3-.js";import"./index-ByRWxq36.js";import"./components-D8tJroy6.js";import"./ripple.esm-CnRQdetG.js";import"./FixedFloatLabel-DVdzIc9N.js";const{useArgs:t}=__STORYBOOK_MODULE_PREVIEW_API__,ie={title:"Общие компоненты/Поля ввода/select",component:r,tags:["autodocs"],parameters:{docs:{page:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(T,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:24,columnNumber:11},void 0),u.jsxDEV(_,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:25,columnNumber:11},void 0),u.jsxDEV("h2",{children:"JSON Schema"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:26,columnNumber:11},void 0),u.jsxDEV(I,{language:"json",code:JSON.stringify(K,null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:27,columnNumber:11},void 0),u.jsxDEV(O,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:31,columnNumber:11},void 0),u.jsxDEV(H,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:32,columnNumber:11},void 0),u.jsxDEV(J,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:33,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:23,columnNumber:9},void 0),description:{component:`тип - select
<p>Основан на https://primereact.org/dropdown</p>`}}}},o={name:"Выпадающее меню (базовый вид)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}]},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:88,columnNumber:7},this)}},d={name:"Выпадающее меню (отключенный)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],disabled:!0},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,disabled:e.disabled},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:145,columnNumber:7},this)}},i={name:"Выпадающее меню (с заголовком)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],heading:"Заголовок"},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,heading:e.heading},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:203,columnNumber:7},this)}},p={name:"Выпадающее меню (ошибка)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],error:"Ошибка!"},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,error:e.error},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:261,columnNumber:7},this)}},c={name:"Выпадающее меню (статус)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],status:"warning"},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,status:e.status},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:319,columnNumber:7},this)}},m={name:"Выпадающее меню (вспомогательная информация)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],helperInfo:{text:"Вспомогательный текст и",link:{type:"external",path:"https://www.google.com/",text:"ссылка"}}},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,helperInfo:e.helperInfo},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:384,columnNumber:7},this)}},v={name:"Выпадающее меню (разделители)",args:{inputtype:"select",name:"select",value:null,placeholder:"Выберете пункт",onChange:()=>{},options:[{value:"first",label:"Первый",disabled:!0},{value:"second",label:"Второй",disabled:!1},{value:"third",label:"Третий",disabled:!1},{value:"fourth",label:"Четвёртый",disabled:!1},{value:"fifth",label:"Пятый",disabled:!1}],dividerTop:!0,dividerBottom:!0},render:function(e){const[,n]=t();function a(l){n({value:l.value})}return u.jsxDEV(r,{inputtype:"select",name:e.name,value:e.value,placeholder:e.placeholder,onChange:a,options:e.options,dividerTop:e.dividerTop,dividerBottom:e.dividerBottom},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledSelect/StyledSelect.stories.tsx",lineNumber:443,columnNumber:7},this)}};var f,b,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Выпадающее меню (базовый вид)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }]
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} />;
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,y,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Выпадающее меню (отключенный)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    disabled: true
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} disabled={args.disabled} />;
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,D,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Выпадающее меню (с заголовком)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    heading: "Заголовок"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} heading={args.heading} />;
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var B,N,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Выпадающее меню (ошибка)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    error: "Ошибка!"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} error={args.error} />;
  }
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,x,w;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Выпадающее меню (статус)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    status: "warning"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} status={args.status} />;
  }
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var j,k,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Выпадающее меню (вспомогательная информация)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    helperInfo: {
      text: "Вспомогательный текст и",
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "ссылка"
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} helperInfo={args.helperInfo} />;
  }
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var P,U,V;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Выпадающее меню (разделители)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [{
      value: "first",
      label: "Первый",
      disabled: true
    }, {
      value: "second",
      label: "Второй",
      disabled: false
    }, {
      value: "third",
      label: "Третий",
      disabled: false
    }, {
      value: "fourth",
      label: "Четвёртый",
      disabled: false
    }, {
      value: "fifth",
      label: "Пятый",
      disabled: false
    }],
    dividerTop: true,
    dividerBottom: true
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: DropdownChangeEvent) {
      updateArgs({
        value: evt.value
      });
    }
    return <StyledSelect inputtype="select" name={args.name} value={args.value} placeholder={args.placeholder} onChange={onChange} options={args.options} dividerTop={args.dividerTop} dividerBottom={args.dividerBottom} />;
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const pe=["Primary","PrimaryDisabled","PrimaryHeading","PrimaryError","PrimaryStatus","PrimaryHelper","PrimaryDividers"];export{o as Primary,d as PrimaryDisabled,v as PrimaryDividers,p as PrimaryError,i as PrimaryHeading,m as PrimaryHelper,c as PrimaryStatus,pe as __namedExportsOrder,ie as default};
