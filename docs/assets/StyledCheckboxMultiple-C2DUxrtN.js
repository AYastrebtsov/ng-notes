import{j as t}from"./jsx-dev-runtime-BETcGmrp.js";import{c as i}from"./utils-Dyyo_Bbn.js";import{r as o}from"./index-BdMw_Ax9.js";import{C as d}from"./checkbox.esm-BNOGzJqF.js";import{D as a,L as m}from"./components-1ZpOYl75.js";const p="checkboxMultiple",c="http://json-schema.org/draft-07/schema#",y="Schema for checkboxMultiple",h="object",x={inputtype:{type:"string",const:"checkboxMultiple"},name:{type:"string"},value:{type:"array",items:{type:"string"}},validation:{type:"string",enum:["none","default"]},heading:{type:"string"},error:{type:"string"},status:{type:"string",const:"warning"},dividerTop:{type:"boolean",const:!0},dividerBottom:{type:"boolean",const:!0},helperInfo:{type:"object",minProperties:1,properties:{text:{type:"string"},link:{type:"object",properties:{text:{type:"string"},path:{type:"string"},type:{type:"string",enum:["internal","external"]}},required:["text","path","type"]}},additionalProperties:!1},options:{type:"array",minItems:1,items:{type:"object",properties:{value:{type:"string"},label:{type:"string"},disabled:{type:"boolean"}},required:["value","label","disabled"]}}},b=["inputtype","name","value","options","validation"],M={$id:p,$schema:c,title:y,type:h,properties:x,required:b},f=({...e})=>t.jsxDEV(d,{...e},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:13,columnNumber:3},void 0),s=o.forwardRef((e,u)=>t.jsxDEV("div",{ref:u,className:e.className,children:[e.dividerTop?t.jsxDEV(a,{pt:{root:{className:"bg-Grey_4 h-px mb-4"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:50,columnNumber:9},void 0):null,t.jsxDEV("div",{className:e.inputClassName,children:[e.heading||e.error||e.helperInfo?t.jsxDEV("div",{className:"mb-3",children:[e.heading?t.jsxDEV("p",{className:i("font-Golos text-sm/4 font-bold text-Black",{"text-Red":e.error}),children:e.heading},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:57,columnNumber:15},void 0):null,e.error?t.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Red",children:e.error},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:67,columnNumber:15},void 0):null,e.helperInfo?t.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Corp_1",children:[e.helperInfo.text," ",e.helperInfo.link?t.jsxDEV(t.Fragment,{children:e.helperInfo.link.type==="internal"?t.jsxDEV(m,{className:"underline",to:e.helperInfo.link.path,children:e.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:77,columnNumber:23},void 0):t.jsxDEV("a",{className:"underline",href:e.helperInfo.link.path,children:e.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:84,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:75,columnNumber:19},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:72,columnNumber:15},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:55,columnNumber:11},void 0):null,t.jsxDEV("div",{className:"grid gap-y-2",children:[" ",e.options.map(r=>t.jsxDEV("div",{className:i("relative flex items-center gap-x-2",{"pointer-events-none opacity-35":r.disabled}),children:[t.jsxDEV(f,{onChange:n=>{const l=[...e.value];n.checked?l.push(n.value):l.splice(l.indexOf(n.value),1),e.onChange(l)},checked:e.value.includes(r.value),name:e.name,value:r.value,inputId:r.label,disabled:r.disabled,invalid:!!e.error,status:e.status},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:107,columnNumber:15},void 0),t.jsxDEV("label",{htmlFor:r.label,className:"font-Golos text-sm/4 font-normal text-Black",children:r.label},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:124,columnNumber:15},void 0)]},r.value,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:101,columnNumber:13},void 0))]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:98,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:53,columnNumber:7},void 0),e.dividerBottom?t.jsxDEV(a,{pt:{root:{className:"bg-Grey_4 h-px mt-4"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:136,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.tsx",lineNumber:48,columnNumber:5},void 0));s.displayName="StyledCheckboxMultiple";s.__docgenInfo={description:"",methods:[],displayName:"StyledCheckboxMultiple",props:{inputtype:{required:!0,tsType:{name:"literal",value:'"checkboxMultiple"'},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}}],raw:`{
  value: string;
  label: string;
  disabled: boolean;
}[]`},description:""},validation:{required:!1,tsType:{name:"union",raw:'"default" | "none"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"none"'}]},description:""},heading:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"literal",value:'"warning"'},description:""},helperInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:'"external" | "internal"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"internal"'}],required:!0}}]},required:!1}}]}},description:""},dividerTop:{required:!1,tsType:{name:"literal",value:"true"},description:""},dividerBottom:{required:!1,tsType:{name:"literal",value:"true"},description:""},className:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}}};export{s as S,M as s};
