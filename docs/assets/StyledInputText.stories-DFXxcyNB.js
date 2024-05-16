import{j as a}from"./jsx-dev-runtime-BETcGmrp.js";import{T as Z,D as $,d as ee,C as ne,A as te,e as ue}from"./index-BN4VhSEn.js";import{S as r,s as ae}from"./StyledInputText-Dq7HALrh.js";import"./index-BdMw_Ax9.js";import"./iframe-L8bQ74Sw.js";import"../sb-preview/runtime.js";import"./index-BwQhoTO9.js";import"./mapValues-ChqGHMta.js";import"./index-C72NkCm4.js";import"./index-C-I6vmrZ.js";import"./index-DuUjvt_u.js";import"./index-DrFu-skq.js";import"./utils-Dyyo_Bbn.js";import"./api.esm-DPODbszm.js";import"./componentbase.esm-CZx7eTCo.js";import"./components-D8tJroy6.js";import"./FixedFloatLabel-DVdzIc9N.js";const{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,Ie={title:"Общие компоненты/Поля ввода/text",component:r,tags:["autodocs"],parameters:{docs:{page:()=>a.jsxDEV(a.Fragment,{children:[a.jsxDEV(Z,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:22,columnNumber:11},void 0),a.jsxDEV($,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:23,columnNumber:11},void 0),a.jsxDEV("h2",{children:"JSON Schema"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:24,columnNumber:11},void 0),a.jsxDEV(ee,{language:"json",code:JSON.stringify(ae,null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:25,columnNumber:11},void 0),a.jsxDEV(ne,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:29,columnNumber:11},void 0),a.jsxDEV(te,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:30,columnNumber:11},void 0),a.jsxDEV(ue,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:31,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:21,columnNumber:9},void 0),description:{component:`тип - text
<p>Основан на https://primereact.org/inputtext/</p>`}}}},i={name:"text (базовый вид)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",validation:"none",onChange:()=>{}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:60,columnNumber:7},this)}},s={name:"text (ошибка)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",error:"Ошибка!",validation:"none",onChange:()=>{}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,error:e.error,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:91,columnNumber:7},this)}},d={name:"text (вспомогательный текст)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},validation:"none",helperInfo:{text:"Вспомогательный текст"}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,helperInfo:e.helperInfo,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:125,columnNumber:7},this)}},p={name:"text (вспомогательная ссылка)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},validation:"none",helperInfo:{link:{type:"external",path:"https://www.google.com/",text:"Ссылка"}}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,helperInfo:e.helperInfo,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:163,columnNumber:7},this)}},m={name:"text (вспомогательные текст и ссылка)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},validation:"none",helperInfo:{text:"Вспомогательный текст и",link:{type:"external",path:"https://www.google.com/",text:"ссылка"}}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,helperInfo:e.helperInfo,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:202,columnNumber:7},this)}},c={name:"text (вспомогательные текст и ссылка и ошибка)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},error:"Ошибка!",validation:"none",helperInfo:{text:"Вспомогательный текст и",link:{type:"external",path:"https://www.google.com/",text:"ссылка"}}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,error:e.error,helperInfo:e.helperInfo,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:242,columnNumber:7},this)}},v={name:"text (статус поля)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},validation:"none",status:"warning"},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,status:e.status,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:275,columnNumber:7},this)}},g={name:"text (отключенное поле)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",onChange:()=>{},validation:"none",disabled:!0},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,disabled:e.disabled,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:307,columnNumber:7},this)}},h={name:"text (заполненное поле)",args:{inputtype:"text",name:"text",value:"заполненное поле",placeholder:"Текстовое поле",validation:"none",onChange:()=>{}},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:338,columnNumber:7},this)}},x={name:"text (заголовок)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",validation:"none",onChange:()=>{},heading:"Заголовок поля"},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,heading:e.heading,validation:e.validation},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:369,columnNumber:7},this)}},y={name:"text (разделители)",args:{inputtype:"text",name:"text",value:"",placeholder:"Текстовое поле",validation:"none",onChange:()=>{},dividerTop:!0,dividerBottom:!0,inputClassName:"ml-4"},render:function(e){const[,n]=o();function t(u){n({value:u.target.value})}return a.jsxDEV(r,{inputtype:"text",name:e.name,placeholder:e.placeholder,value:e.value,onChange:t,validation:e.validation,dividerTop:e.dividerTop,dividerBottom:e.dividerBottom,inputClassName:e.inputClassName},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledInputText/StyledInputText.stories.tsx",lineNumber:403,columnNumber:7},this)}};var E,f,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "text (базовый вид)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {}
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} validation={args.validation} />;
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var I,T,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "text (ошибка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    error: "Ошибка!",
    validation: "none",
    onChange: () => {}
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} error={args.error} validation={args.validation} />;
  }
}`,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var S,N,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "text (вспомогательный текст)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    helperInfo: {
      text: "Вспомогательный текст"
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} helperInfo={args.helperInfo} validation={args.validation} />;
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var B,b,w;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "text (вспомогательная ссылка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    helperInfo: {
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "Ссылка"
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} helperInfo={args.helperInfo} validation={args.validation} />;
  }
}`,...(w=(b=p.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var R,k,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "text (вспомогательные текст и ссылка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
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
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} helperInfo={args.helperInfo} validation={args.validation} />;
  }
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var P,j,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "text (вспомогательные текст и ссылка и ошибка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    error: "Ошибка!",
    validation: "none",
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
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} error={args.error} helperInfo={args.helperInfo} validation={args.validation} />;
  }
}`,...(V=(j=c.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var U,L,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "text (статус поля)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    status: "warning"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} status={args.status} validation={args.validation} />;
  }
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,_,O;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "text (отключенное поле)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    disabled: true
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} disabled={args.disabled} validation={args.validation} />;
  }
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var J,K,W;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "text (заполненное поле)",
  args: {
    inputtype: "text",
    name: "text",
    value: "заполненное поле",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {}
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} validation={args.validation} />;
  }
}`,...(W=(K=h.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Y,q,z;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "text (заголовок)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
    heading: "Заголовок поля"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} heading={args.heading} validation={args.validation} />;
  }
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,Q,X;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "text (разделители)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
    dividerTop: true,
    dividerBottom: true,
    inputClassName: "ml-4"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({
        value: evt.target.value
      });
    }
    return <StyledInputText inputtype="text" name={args.name} placeholder={args.placeholder} value={args.value} onChange={onChange} validation={args.validation} dividerTop={args.dividerTop} dividerBottom={args.dividerBottom} inputClassName={args.inputClassName} />;
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Te=["Primary","PrimaryError","PrimaryText","PrimaryLink","PrimaryTextLink","PrimaryTextLinkError","PrimaryTextStatus","PrimaryTextDisabled","PrimaryTextValue","PrimaryTextheading","PrimaryDividers"];export{i as Primary,y as PrimaryDividers,s as PrimaryError,p as PrimaryLink,d as PrimaryText,g as PrimaryTextDisabled,m as PrimaryTextLink,c as PrimaryTextLinkError,v as PrimaryTextStatus,h as PrimaryTextValue,x as PrimaryTextheading,Te as __namedExportsOrder,Ie as default};
