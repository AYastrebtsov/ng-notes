import{j as m}from"./jsx-dev-runtime-BETcGmrp.js";import{r as e}from"./index-BdMw_Ax9.js";import{P as d,O as x,c as h}from"./api.esm-DPODbszm.js";import{C as y,u as v,a as F}from"./componentbase.esm-CZx7eTCo.js";var g={root:"p-float-label"},P=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,l=y.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:g,styles:P}}),r=e.memo(e.forwardRef(function(a,t){var p=v(),i=e.useContext(d),n=l.getProps(a,i),o=e.useRef(t),s=l.setMetaData({props:n}),f=s.ptm,b=s.cx,c=s.isUnstyled;F(l.css.styles,c,{name:"floatlabel"}),e.useEffect(function(){x.combinedRefs(o,t)},[o,t]);var u=p({ref:o,className:h(b("root"))},l.getOtherProps(n),f("root"));return e.createElement("span",u,n.children)}));r.displayName="FloatLabel";const w=({...a})=>e.useMemo(()=>m.jsxDEV(r,{...a},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/FixedFloatLabel/FixedFloatLabel.tsx",lineNumber:11,columnNumber:17},void 0),[a]);export{w as F};
