import{j as r}from"./jsx-dev-runtime-BETcGmrp.js";import{c as t}from"./utils-Dyyo_Bbn.js";import{r as l}from"./index-BdMw_Ax9.js";import{C as s}from"./checkbox.esm-BNOGzJqF.js";import{D as n,L as o}from"./components-1ZpOYl75.js";const d="checkbox",u="http://json-schema.org/draft-07/schema#",m="Schema for checkbox",c="object",h={inputtype:{type:"string",const:"checkbox"},name:{type:"string"},value:{type:"boolean"},label:{type:"string"},validation:{type:"string",enum:["none","checked","unchecked"]},heading:{type:"string"},error:{type:"string"},status:{type:"string",const:"warning"},disabled:{type:"boolean",const:!0},dividerTop:{type:"boolean",const:!0},dividerBottom:{type:"boolean",const:!0},helperInfo:{type:"object",minProperties:1,properties:{text:{type:"string"},link:{type:"object",properties:{text:{type:"string"},path:{type:"string"},type:{type:"string",enum:["internal","external"]}},required:["text","path","type"]}},additionalProperties:!1}},x=["inputtype","name","value","label","validation"],v={$id:d,$schema:u,title:m,type:c,properties:h,required:x},y=({...e})=>r.jsxDEV(s,{...e},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:13,columnNumber:3},void 0),a=l.forwardRef((e,i)=>r.jsxDEV("div",{ref:i,className:e.className,children:[e.dividerTop?r.jsxDEV(n,{pt:{root:{className:"bg-Grey_4 h-px mb-4"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:48,columnNumber:9},void 0):null,r.jsxDEV("div",{className:e.inputClassName,children:[e.heading||e.error||e.helperInfo?r.jsxDEV("div",{className:"mb-3",children:[e.heading?r.jsxDEV("p",{className:t("font-Golos text-sm/4 font-bold text-Black",{"text-Red":e.error}),children:e.heading},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:55,columnNumber:15},void 0):null,e.error?r.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Red",children:e.error},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:65,columnNumber:15},void 0):null,e.helperInfo?r.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Corp_1",children:[e.helperInfo.text," ",e.helperInfo.link?r.jsxDEV(r.Fragment,{children:e.helperInfo.link.type==="internal"?r.jsxDEV(o,{className:"underline",to:e.helperInfo.link.path,children:e.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:75,columnNumber:23},void 0):r.jsxDEV("a",{className:"underline",href:e.helperInfo.link.path,children:e.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:82,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:73,columnNumber:19},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:70,columnNumber:15},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:53,columnNumber:11},void 0):null,r.jsxDEV("div",{className:"grid gap-y-2",children:r.jsxDEV("div",{className:t("relative flex items-center gap-x-2",{"pointer-events-none opacity-35":e.disabled}),children:[r.jsxDEV(y,{onChange:e.onChange,checked:e.value,name:e.name,value:e.value,inputId:e.label,disabled:e.disabled,invalid:!!e.error,status:e.status},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:102,columnNumber:13},void 0),r.jsxDEV("label",{htmlFor:e.label,className:"font-Golos text-sm/4 font-normal text-Black",children:e.label},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:112,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:97,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:96,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:51,columnNumber:7},void 0),e.dividerBottom?r.jsxDEV(n,{pt:{root:{className:"bg-Grey_4 h-px mt-4"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:123,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckbox/StyledCheckbox.tsx",lineNumber:46,columnNumber:5},void 0));a.displayName="StyledCheckbox";a.__docgenInfo={description:"",methods:[],displayName:"StyledCheckbox",props:{inputtype:{required:!0,tsType:{name:"literal",value:'"checkbox"'},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:'CheckboxProps["onChange"]',raw:'CheckboxProps["onChange"]'},description:""},validation:{required:!0,tsType:{name:"union",raw:'"none" | "checked" | "unchecked"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'}]},description:""},heading:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"literal",value:'"warning"'},description:""},disabled:{required:!1,tsType:{name:"literal",value:"true"},description:""},helperInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text?: string;
  link?: {
    text: string;
    path: string;
    type: "external" | "internal";
  };
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"link",value:{name:"signature",type:"object",raw:`{
  text: string;
  path: string;
  type: "external" | "internal";
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:'"external" | "internal"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"internal"'}],required:!0}}]},required:!1}}]}},description:""},dividerTop:{required:!1,tsType:{name:"literal",value:"true"},description:""},dividerBottom:{required:!1,tsType:{name:"literal",value:"true"},description:""},className:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}}};export{a as S,v as s};
