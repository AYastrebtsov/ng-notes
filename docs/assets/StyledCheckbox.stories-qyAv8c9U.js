import{j as u}from"./jsx-dev-runtime-BETcGmrp.js";import{T as K,D as M,d as W,C as Y,A as q,e as z}from"./index-BN4VhSEn.js";import{S as r,s as G}from"./StyledCheckbox-B9Tj9T7J.js";import"./index-BdMw_Ax9.js";import"./iframe-L8bQ74Sw.js";import"../sb-preview/runtime.js";import"./index-BwQhoTO9.js";import"./mapValues-ChqGHMta.js";import"./index-C72NkCm4.js";import"./index-C-I6vmrZ.js";import"./index-DuUjvt_u.js";import"./index-DrFu-skq.js";import"./utils-Dyyo_Bbn.js";import"./checkbox.esm-qyHFQybt.js";import"./api.esm-DPODbszm.js";import"./componentbase.esm-CZx7eTCo.js";import"./index.esm-BPWPgF8-.js";import"./components-D8tJroy6.js";const{useArgs:t}=__STORYBOOK_MODULE_PREVIEW_API__,ce={title:"Общие компоненты/Поля ввода/checkbox",component:r,tags:["autodocs"],parameters:{docs:{page:()=>u.jsxDEV(u.Fragment,{children:[u.jsxDEV(K,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:22,columnNumber:11},void 0),u.jsxDEV(M,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:23,columnNumber:11},void 0),u.jsxDEV("h2",{children:"JSON Schema"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:24,columnNumber:11},void 0),u.jsxDEV(W,{language:"json",code:JSON.stringify(G,null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:25,columnNumber:11},void 0),u.jsxDEV(Y,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:29,columnNumber:11},void 0),u.jsxDEV(q,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:30,columnNumber:11},void 0),u.jsxDEV(z,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:31,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:21,columnNumber:9},void 0),description:{component:`тип - checkbox
<p>Основан на https://primereact.org/checkbox</p>`}}}},i={name:"Базовый вид",args:{inputtype:"checkbox",validation:"none",name:"radio",value:!1,label:"Моё доверенное лицо",onChange:()=>{}},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,validation:e.validation,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:73,columnNumber:7},this)}},d={name:"Заполненный",args:{inputtype:"checkbox",name:"radio",value:!0,validation:"none",label:"Моё доверенное лицо",onChange:()=>{}},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,validation:e.validation,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:125,columnNumber:7},this)}},s={name:"Ошибка",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},error:"Ошибка!"},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,validation:e.validation,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:177,columnNumber:7},this)}},l={name:"Статус",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},status:"warning"},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,status:e.status,validation:e.validation,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:229,columnNumber:7},this)}},p={name:"Отключенный",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},disabled:!0},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,status:e.status,disabled:e.disabled,validation:e.validation,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:281,columnNumber:7},this)}},m={name:"Заголовок",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},heading:"Заголовок"},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,status:e.status,validation:e.validation,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:333,columnNumber:7},this)}},v={name:"Вспомогательный текст",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},helperInfo:{text:"Текст"}},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,validation:e.validation,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:385,columnNumber:7},this)}},c={name:"Вспомогательный текст и ссылка",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},helperInfo:{text:"Текст и ",link:{type:"external",path:"https://www.google.com/",text:"cсылка"}}},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,name:e.name,label:e.label,error:e.error,validation:e.validation,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:437,columnNumber:7},this)}},h={name:"Разделители",args:{inputtype:"checkbox",name:"radio",value:!1,validation:"none",label:"Моё доверенное лицо",onChange:()=>{},dividerBottom:!0,dividerTop:!0},render:function(e){const[,n]=t();return u.jsxDEV(r,{inputtype:e.inputtype,value:e.value,validation:e.validation,name:e.name,label:e.label,error:e.error,status:e.status,disabled:e.disabled,dividerBottom:e.dividerBottom,dividerTop:e.dividerTop,heading:e.heading,helperInfo:e.helperInfo,onChange:a=>{n({value:!a.target.value})}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx",lineNumber:489,columnNumber:7},this)}};var g,b,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Базовый вид",
  args: {
    inputtype: "checkbox",
    validation: "none",
    name: "radio",
    value: false,
    label: "Моё доверенное лицо",
    onChange: () => {}
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} validation={args.validation} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,f,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Заполненный",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: true,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {}
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} validation={args.validation} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(E=(f=d.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var C,B,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Ошибка",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    error: "Ошибка!"
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} validation={args.validation} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var A,D,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Статус",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    status: "warning"
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} status={args.status} validation={args.validation} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,T,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Отключенный",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    disabled: true

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} status={args.status} disabled={args.disabled} validation={args.validation} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(N=(T=p.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var I,R,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Заголовок",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    heading: "Заголовок"

    // dividerBottom: true,
    // dividerTop: true,

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} status={args.status} validation={args.validation} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var P,U,V;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Вспомогательный текст",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    // dividerBottom: true,
    // dividerTop: true,

    helperInfo: {
      text: "Текст"
      // link: {
      //   type: "external",
      //   path: "https://www.google.com/",
      //   text: "cсылка",
      // },
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} validation={args.validation} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,_,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Вспомогательный текст и ссылка",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    // dividerBottom: true,
    // dividerTop: true,

    helperInfo: {
      text: "Текст и ",
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "cсылка"
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} name={args.name} label={args.label} error={args.error} validation={args.validation} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var L,H,J;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Разделители",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    dividerBottom: true,
    dividerTop: true

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <StyledCheckbox inputtype={args.inputtype} value={args.value} validation={args.validation} name={args.name} label={args.label} error={args.error} status={args.status} disabled={args.disabled} dividerBottom={args.dividerBottom} dividerTop={args.dividerTop} heading={args.heading} helperInfo={args.helperInfo} onChange={evt => {
      updateArgs({
        value: !evt.target.value
      });
    }} />;
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const he=["Primary","PrimaryChecked","PrimaryError","PrimaryStatus","PrimaryDisabled","PrimaryHeading","PrimaryText","PrimaryTextAndLink","PrimaryTextDividers"];export{i as Primary,d as PrimaryChecked,p as PrimaryDisabled,s as PrimaryError,m as PrimaryHeading,l as PrimaryStatus,v as PrimaryText,c as PrimaryTextAndLink,h as PrimaryTextDividers,he as __namedExportsOrder,ce as default};
