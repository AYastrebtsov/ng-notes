import{j as u}from"./jsx-dev-runtime-BETcGmrp.js";import{c as He}from"./utils-Dyyo_Bbn.js";import{r as i}from"./index-BdMw_Ax9.js";import{S as be}from"./StyledRipple-BPrRq6xm.js";import{C as Wt}from"./checkbox.esm-qyHFQybt.js";import{T as Qt,P as $e,D as Ae,L as Ge}from"./components-D8tJroy6.js";import{P as De,O as U,c as N,I as Ce,U as en,a as re,D as h,Z as he,l as tn}from"./api.esm-DPODbszm.js";import{C as we,u as Ee,a as je,f as nn,g as rn,h as te,c as an,b as ye,e as on,E as ln}from"./componentbase.esm-CZx7eTCo.js";import{S as sn,C as Fe,T as un}from"./csstransition.esm-_prziQ3-.js";import{R as ke}from"./ripple.esm-CnRQdetG.js";import{I as Je}from"./index.esm-BPWPgF8-.js";const cn="photoCheckbox",dn="http://json-schema.org/draft-07/schema#",pn="Schema for photoCheckbox",mn="object",fn={inputtype:{type:"string",const:"photoCheckbox"},name:{type:"string"},value:{type:"array",items:{type:"string"}},validation:{type:"string",enum:["none","default"]},heading:{type:"string"},error:{type:"string"},status:{type:"string",const:"warning"},dividerTop:{type:"boolean",const:!0},dividerBottom:{type:"boolean",const:!0},helperInfo:{type:"object",minProperties:1,properties:{text:{type:"string"},link:{type:"object",properties:{text:{type:"string"},path:{type:"string"},type:{type:"string",enum:["internal","external"]}},required:["text","path","type"]}},additionalProperties:!1},options:{type:"array",minItems:1,items:{type:"object",properties:{value:{type:"string"},label:{type:"string"},disabled:{type:"boolean"},img:{type:"string"},text:{type:"string"},details:{type:"object",properties:{text:{type:"string"},details:{type:"string"},img:{type:"string"},link:{type:"object",properties:{text:{type:"string"},path:{type:"string"},type:{type:"string",enum:["internal","external"]}},required:["text","path","type"]}},required:["text","details","img"]}},required:["value","label","disabled","img"]}}},gn=["inputtype","name","value","options","validation"],Xn={$id:cn,$schema:dn,title:pn,type:mn,properties:fn,required:gn};function ae(){return ae=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},ae.apply(this,arguments)}function oe(t){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},oe(t)}function bn(t,r){if(oe(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,r||"default");if(oe(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function hn(t){var r=bn(t,"string");return oe(r)==="symbol"?r:String(r)}function R(t,r,e){return r=hn(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var yn={root:function(r){var e=r.props;return N("p-badge p-component",R({"p-badge-no-gutter":U.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":U.isEmpty(e.value),"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge"},"p-badge-".concat(e.severity),e.severity!==null))}},vn=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,ce=we.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:yn,styles:vn}});function Xe(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function xn(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Xe(Object(e),!0).forEach(function(a){R(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Xe(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var We=i.memo(i.forwardRef(function(t,r){var e=Ee(),a=i.useContext(De),n=ce.getProps(t,a),g=ce.setMetaData(xn({props:n},n.__parentMetadata)),x=g.ptm,P=g.cx,p=g.isUnstyled;je(ce.css.styles,p,{name:"badge"});var S=i.useRef(null);i.useImperativeHandle(r,function(){return{props:n,getElement:function(){return S.current}}});var O=e({ref:S,style:n.style,className:N(n.className,P("root"))},ce.getOtherProps(n),x("root"));return i.createElement("span",O,n.value)}));We.displayName="Badge";var Cn={icon:function(r){var e=r.props;return N("p-button-icon p-c",R({},"p-button-icon-".concat(e.iconPos),e.label))},loadingIcon:function(r){var e=r.props,a=r.className;return N(a,{"p-button-loading-icon":e.loading})},label:"p-button-label p-c",root:function(r){var e=r.props,a=r.size,n=r.disabled;return N("p-button p-component",R(R(R(R({"p-button-icon-only":(e.icon||e.loading)&&!e.label&&!e.children,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-disabled":n,"p-button-loading":e.loading,"p-button-outlined":e.outlined,"p-button-raised":e.raised,"p-button-link":e.link,"p-button-text":e.text,"p-button-rounded":e.rounded,"p-button-loading-label-only":e.loading&&!e.icon&&e.label},"p-button-loading-".concat(e.iconPos),e.loading&&e.label),"p-button-".concat(a),a),"p-button-".concat(e.severity),e.severity),"p-button-plain",e.plain))}},de=we.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:Cn}});function Ze(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function ve(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Ze(Object(e),!0).forEach(function(a){R(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ze(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var ne=i.memo(i.forwardRef(function(t,r){var e=Ee(),a=i.useContext(De),n=de.getProps(t,a),g=n.disabled||n.loading,x=ve(ve({props:n},n.__parentMetadata),{},{context:{disabled:g}}),P=de.setMetaData(x),p=P.ptm,S=P.cx,O=P.isUnstyled;je(de.css.styles,O,{name:"button",styled:!0});var C=i.useRef(r);if(i.useEffect(function(){U.combinedRefs(C,r)},[C,r]),n.visible===!1)return null;var _=function(){var w=N("p-button-icon p-c",R({},"p-button-icon-".concat(n.iconPos),n.label)),Y=e({className:S("icon")},p("icon"));w=N(w,{"p-button-loading-icon":n.loading});var q=e({className:S("loadingIcon",{className:w})},p("loadingIcon")),H=n.loading?n.loadingIcon||i.createElement(sn,ae({},q,{spin:!0})):n.icon;return Ce.getJSXIcon(H,ve({},Y),{props:n})},G=function(){var w=e({className:S("label")},p("label"));return n.label?i.createElement("span",w,n.label):!n.children&&!n.label&&i.createElement("span",ae({},w,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},B=function(){if(n.badge){var w=e({className:N(n.badgeClassName),value:n.badge,unstyled:n.unstyled,__parentMetadata:{parent:x}},p("badge"));return i.createElement(We,w,n.badge)}return null},I=!g||n.tooltipOptions&&n.tooltipOptions.showOnDisabled,M=U.isNotEmpty(n.tooltip)&&I,F={large:"lg",small:"sm"},L=F[n.size],X=_(),b=G(),c=B(),D=n.label?n.label+(n.badge?" "+n.badge:""):n["aria-label"],K=e({ref:C,"aria-label":D,className:N(n.className,S("root",{size:L,disabled:g})),disabled:g},de.getOtherProps(n),p("root"));return i.createElement(i.Fragment,null,i.createElement("button",K,X,b,n.children,c,i.createElement(ke,null)),M&&i.createElement(Qt,ae({target:C,content:n.tooltip,pt:p("tooltip")},n.tooltipOptions)))}));ne.displayName="Button";function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Pe.apply(this,arguments)}var Qe=i.memo(i.forwardRef(function(t,r){var e=Je.getPTI(t);return i.createElement("svg",Pe({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"}))}));Qe.displayName="WindowMaximizeIcon";function Se(){return Se=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Se.apply(this,arguments)}var et=i.memo(i.forwardRef(function(t,r){var e=Je.getPTI(t);return i.createElement("svg",Se({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"}))}));et.displayName="WindowMinimizeIcon";function me(){return me=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},me.apply(this,arguments)}function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ie(t)}function Ne(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function kn(t){if(Array.isArray(t))return Ne(t)}function Pn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tt(t,r){if(t){if(typeof t=="string")return Ne(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ne(t,r)}}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nn(t){return kn(t)||Pn(t)||tt(t)||Sn()}function Dn(t,r){if(ie(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,r||"default");if(ie(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function wn(t){var r=Dn(t,"string");return ie(r)==="symbol"?r:String(r)}function nt(t,r,e){return r=wn(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function En(t){if(Array.isArray(t))return t}function jn(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a,n,g,x,P=[],p=!0,S=!1;try{if(g=(e=e.call(t)).next,r===0){if(Object(e)!==e)return;p=!1}else for(;!(p=(a=g.call(e)).done)&&(P.push(a.value),P.length!==r);p=!0);}catch(O){S=!0,n=O}finally{try{if(!p&&e.return!=null&&(x=e.return(),Object(x)!==x))return}finally{if(S)throw n}}return P}}function On(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,r){return En(t)||jn(t,r)||tt(t,r)||On()}function Ke(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function In(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Ke(Object(e),!0).forEach(function(a){nt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ke(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var zn={closeButtonIcon:"p-dialog-header-close-icon",closeButton:"p-dialog-header-icon p-dialog-header-close p-link",maximizableIcon:"p-dialog-header-maximize-icon",maximizableButton:"p-dialog-header-icon p-dialog-header-maximize p-link",header:function(r){var e=r.props;return N("p-dialog-header",e.headerClassName)},headerTitle:"p-dialog-title",headerIcons:"p-dialog-header-icons",content:function(r){var e=r.props;return N("p-dialog-content",e.contentClassName)},footer:function(r){var e=r.props;return N("p-dialog-footer",e.footerClassName)},mask:function(r){var e=r.props,a=r.maskVisibleState,n=["center","left","right","top","top-left","top-right","bottom","bottom-left","bottom-right"],g=n.find(function(x){return x===e.position||x.replace("-","")===e.position});return N("p-dialog-mask",g?"p-dialog-".concat(g):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-dialog-visible":a,"p-dialog-draggable":e.draggable,"p-dialog-resizable":e.resizable},e.maskClassName)},root:function(r){var e=r.props,a=r.maximized,n=r.context;return N("p-dialog p-component",{"p-dialog-rtl":e.rtl,"p-dialog-maximized":a,"p-dialog-default":!a,"p-input-filled":n&&n.inputStyle==="filled"||re.inputStyle==="filled","p-ripple-disabled":n&&n.ripple===!1||re.ripple===!1})},transition:"p-dialog"},Rn=`
@layer primereact {
    .p-dialog-mask {
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-dialog-visible {
        display: flex;
    }
    
    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-dialog {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        max-height: 90%;
        transform: scale(1);
        position: relative;
    }
    
    .p-dialog-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-dialog-header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-dialog-footer {
        flex-shrink: 0;
    }
    
    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
        align-self: flex-start;
        flex-shrink: 0;
    }
    
    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-dialog .p-dialog-title {
        flex-grow: 1;
    }
    
    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }
    
    /* Animation */
    /* Center */
    .p-dialog-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-dialog-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-dialog-enter-done {
        transform: none;
    }
    
    .p-dialog-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-top-left .p-dialog,
    .p-dialog-top-right .p-dialog,
    .p-dialog-bottom-left .p-dialog,
    .p-dialog-bottom-right .p-dialog {
        margin: 0.75em;
    }
    
    .p-dialog-top .p-dialog-enter,
    .p-dialog-top .p-dialog-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-dialog-bottom .p-dialog-enter,
    .p-dialog-bottom .p-dialog-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-dialog-left .p-dialog-enter,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-enter,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-enter,
    .p-dialog-bottom-left .p-dialog-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-dialog-right .p-dialog-enter,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-enter,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-enter,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-top-left .p-dialog-enter-active,
    .p-dialog-bottom-left .p-dialog-enter-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-top-right .p-dialog-enter-active,
    .p-dialog-bottom-right .p-dialog-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s ease-out;
    }
    
    .p-dialog-top .p-dialog-exit-active,
    .p-dialog-bottom .p-dialog-exit-active,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-exit-active,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transition: all 0.3s ease-out;
    }
    
    /* Maximize */
    .p-dialog-maximized {
        transition: none;
        transform: none;
        margin: 0;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }
    
    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }
    
    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }
    
    /* Resizable */
    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
    
    .p-dialog-draggable .p-dialog-header {
        cursor: move;
    }        
}
`,_n={mask:function(r){var e=r.props;return In({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"||e.position==="top-left"||e.position==="bottom-left"?"flex-start":e.position==="right"||e.position==="top-right"||e.position==="bottom-right"?"flex-end":"center",alignItems:e.position==="top"||e.position==="top-left"||e.position==="top-right"?"flex-start":e.position==="bottom"||e.position==="bottom-left"||e.position==="bottom-right"?"flex-end":"center",pointerEvents:!e.modal&&"none"},e.maskStyle)}},pe=we.extend({defaultProps:{__TYPE:"Dialog",__parentMetadata:null,appendTo:null,ariaCloseIconLabel:null,baseZIndex:0,blockScroll:!1,breakpoints:null,className:null,closable:!0,closeIcon:null,closeOnEscape:!0,content:null,contentClassName:null,contentStyle:null,dismissableMask:!1,draggable:!0,focusOnShow:!0,footer:null,footerClassName:null,header:null,headerClassName:null,headerStyle:null,icons:null,id:null,keepInViewport:!0,maskClassName:null,maskStyle:null,maximizable:!1,maximizeIcon:null,maximized:!1,minX:0,minY:0,minimizeIcon:null,modal:!0,onClick:null,onDrag:null,onDragEnd:null,onDragStart:null,onHide:null,onMaskClick:null,onMaximize:null,onResize:null,onResizeEnd:null,onResizeStart:null,onShow:null,position:"center",resizable:!0,rtl:!1,showHeader:!0,style:null,transitionOptions:null,visible:!1,children:void 0},css:{classes:zn,styles:Rn,inlineStyles:_n}});function Ye(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function xe(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(e),!0).forEach(function(a){nt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ye(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var rt=i.forwardRef(function(t,r){var e=Ee(),a=i.useContext(De),n=pe.getProps(t,a),g=n.id?n.id:en(),x=i.useState(g),P=z(x,2),p=P[0];P[1];var S=i.useState(!1),O=z(S,2),C=O[0],_=O[1],G=i.useState(!1),B=z(G,2),I=B[0],M=B[1],F=i.useState(n.maximized),L=z(F,2),X=L[0],b=L[1],c=i.useRef(null),D=i.useRef(null),K=i.useRef(null),Z=i.useRef(null),w=i.useRef(null),Y=i.useRef(null),q=i.useRef(null),H=i.useRef(!1),le=i.useRef(!1),$=i.useRef(null),A=i.useRef(null),J=i.useRef(null),Oe=i.useRef(g),fe=i.useRef(null),W=n.onMaximize?n.maximized:X,Ie=I&&(n.blockScroll||n.maximizable&&W),ze=n.closable&&n.closeOnEscape&&I,Re=nn("dialog",ze),se=pe.setMetaData(xe(xe({props:n},n.__parentMetadata),{},{state:{id:p,maximized:W,containerVisible:C}})),E=se.ptm,j=se.cx,ot=se.sx,_e=se.isUnstyled;je(pe.css.styles,_e,{name:"dialog"}),rn({callback:function(o){ue(o)},when:ze&&Re,priority:[ln.DIALOG,Re]});var it=te({type:"keydown",listener:function(o){return Nt(o)}}),Ve=z(it,2),lt=Ve[0],st=Ve[1],ut=te({type:"mousemove",target:function(){return window.document},listener:function(o){return Ot(o)}}),Te=z(ut,2),ct=Te[0],dt=Te[1],pt=te({type:"mouseup",target:function(){return window.document},listener:function(o){return It(o)}}),Ue=z(pt,2),mt=Ue[0],ft=Ue[1],gt=te({type:"mousemove",target:function(){return window.document},listener:function(o){return wt(o)}}),Be=z(gt,2),bt=Be[0],ht=Be[1],yt=te({type:"mouseup",target:function(){return window.document},listener:function(o){return Et(o)}}),Me=z(yt,2),vt=Me[0],xt=Me[1],ue=function(o){n.onHide(),o.preventDefault()},Ct=function(){var o=document.activeElement,s=o&&c.current&&c.current.contains(o);!s&&n.closable&&n.showHeader&&q.current&&q.current.focus()},kt=function(o){K.current=o.target,n.onPointerDown&&n.onPointerDown(o)},Pt=function(o){n.dismissableMask&&n.modal&&D.current===o.target&&!K.current&&ue(o),n.onMaskClick&&n.onMaskClick(o),K.current=null},St=function(o){n.onMaximize?n.onMaximize({originalEvent:o,maximized:!W}):b(function(s){return!s}),o.preventDefault()},Nt=function(o){var s=o.currentTarget;if(!(!s||!s.primeDialogParams)){var m=s.primeDialogParams,f=m.length,v=m[f-1]?m[f-1].id:void 0;if(v===p){var k=document.getElementById(v);if(o.key==="Tab"){o.preventDefault();var d=h.getFocusableElements(k);if(d&&d.length>0)if(!document.activeElement)d[0].focus();else{var y=d.indexOf(document.activeElement);o.shiftKey?y===-1||y===0?d[d.length-1].focus():d[y-1].focus():y===-1||y===d.length-1?d[0].focus():d[y+1].focus()}}}}},Dt=function(o){h.hasClass(o.target,"p-dialog-header-icon")||h.hasClass(o.target.parentElement,"p-dialog-header-icon")||n.draggable&&(H.current=!0,$.current=o.pageX,A.current=o.pageY,c.current.style.margin="0",h.addClass(document.body,"p-unselectable-text"),n.onDragStart&&n.onDragStart(o))},wt=function(o){if(H.current){var s=h.getOuterWidth(c.current),m=h.getOuterHeight(c.current),f=o.pageX-$.current,v=o.pageY-A.current,k=c.current.getBoundingClientRect(),d=k.left+f,y=k.top+v,Q=h.getViewport(),ee=getComputedStyle(c.current),V=parseFloat(ee.marginLeft),T=parseFloat(ee.marginTop);c.current.style.position="fixed",n.keepInViewport?(d>=n.minX&&d+s<Q.width&&($.current=o.pageX,c.current.style.left=d-V+"px"),y>=n.minY&&y+m<Q.height&&(A.current=o.pageY,c.current.style.top=y-T+"px")):($.current=o.pageX,c.current.style.left=d-V+"px",A.current=o.pageY,c.current.style.top=y-T+"px"),n.onDrag&&n.onDrag(o)}},Et=function(o){H.current&&(H.current=!1,h.removeClass(document.body,"p-unselectable-text"),n.onDragEnd&&n.onDragEnd(o))},jt=function(o){n.resizable&&(le.current=!0,$.current=o.pageX,A.current=o.pageY,h.addClass(document.body,"p-unselectable-text"),n.onResizeStart&&n.onResizeStart(o))},Le=function(o,s,m){!m&&(m=h.getViewport());var f=parseInt(o);return/^(\d+|(\.\d+))(\.\d+)?%$/.test(o)?f*(m[s]/100):f},Ot=function(o){if(le.current){var s=o.pageX-$.current,m=o.pageY-A.current,f=h.getOuterWidth(c.current),v=h.getOuterHeight(c.current),k=c.current.getBoundingClientRect(),d=h.getViewport(),y=!parseInt(c.current.style.top)||!parseInt(c.current.style.left),Q=Le(c.current.style.minWidth,"width",d),ee=Le(c.current.style.minHeight,"height",d),V=f+s,T=v+m;y&&(V=V+s,T=T+m),(!Q||V>Q)&&k.left+V<d.width&&(c.current.style.width=V+"px"),(!ee||T>ee)&&k.top+T<d.height&&(c.current.style.height=T+"px"),$.current=o.pageX,A.current=o.pageY,n.onResize&&n.onResize(o)}},It=function(o){le.current&&(le.current=!1,h.removeClass(document.body,"p-unselectable-text"),n.onResizeEnd&&n.onResizeEnd(o))},zt=function(){c.current.style.position="",c.current.style.left="",c.current.style.top="",c.current.style.margin=""},Rt=function(){c.current.setAttribute(Oe.current,"")},_t=function(){n.onShow&&n.onShow(),n.focusOnShow&&Ct(),Ut()},Vt=function(){n.modal&&!_e()&&h.addClass(D.current,"p-component-overlay-leave")},Tt=function(){H.current=!1,he.clear(D.current),_(!1),qe(),h.focus(fe.current),fe.current=null},Ut=function(){Mt()},qe=function(){Lt()},Bt=function(){var o=document.primeDialogParams&&document.primeDialogParams.some(function(s){return s.hasBlockScroll});o?h.blockBodyScroll():h.unblockBodyScroll()},ge=function(o){if(o&&I){var s={id:p,hasBlockScroll:Ie};document.primeDialogParams||(document.primeDialogParams=[]);var m=document.primeDialogParams.findIndex(function(f){return f.id===p});m===-1?document.primeDialogParams=[].concat(Nn(document.primeDialogParams),[s]):document.primeDialogParams=document.primeDialogParams.toSpliced(m,1,s)}else document.primeDialogParams=document.primeDialogParams&&document.primeDialogParams.filter(function(f){return f.id!==p});Bt()},Mt=function(){n.draggable&&(bt(),vt()),n.resizable&&(ct(),mt()),lt()},Lt=function(){ht(),xt(),dt(),ft(),st()},qt=function(){J.current=h.createInlineStyle(a&&a.nonce||re.nonce,a&&a.styleContainer);var o="";for(var s in n.breakpoints)o=o+`
                @media screen and (max-width: `.concat(s,`) {
                     [data-pc-name="dialog"][`).concat(Oe.current,`] {
                        width: `).concat(n.breakpoints[s],` !important;
                    }
                }
            `);J.current.innerHTML=o},Ht=function(){J.current=h.removeInlineStyle(J.current)};an(function(){ge(!0),n.visible&&_(!0)}),i.useEffect(function(){return n.breakpoints&&qt(),function(){Ht()}},[n.breakpoints]),ye(function(){n.visible&&!C&&_(!0),n.visible!==I&&C&&M(n.visible),n.visible&&(fe.current=document.activeElement)},[n.visible,C]),ye(function(){C&&(he.set("modal",D.current,a&&a.autoZIndex||re.autoZIndex,n.baseZIndex||a&&a.zIndex.modal||re.zIndex.modal),M(!0))},[C]),ye(function(){ge(!0)},[Ie,I]),on(function(){qe(),ge(!1),h.removeInlineStyle(J.current),he.clear(D.current)}),i.useImperativeHandle(r,function(){return{props:n,resetPosition:zt,getElement:function(){return c.current},getMask:function(){return D.current},getContent:function(){return Z.current},getHeader:function(){return w.current},getFooter:function(){return Y.current},getCloseButton:function(){return q.current}}});var $t=function(){if(n.closable){var o=n.ariaCloseIconLabel||tn("close"),s=e({className:j("closeButtonIcon"),"aria-hidden":!0},E("closeButtonIcon")),m=n.closeIcon||i.createElement(un,s),f=Ce.getJSXIcon(m,xe({},s),{props:n}),v=e({ref:q,type:"button",className:j("closeButton"),"aria-label":o,onClick:ue},E("closeButton"));return i.createElement("button",v,f,i.createElement(ke,null))}return null},At=function(){var o,s=e({className:j("maximizableIcon")},E("maximizableIcon"));W?o=n.minimizeIcon||i.createElement(et,s):o=n.maximizeIcon||i.createElement(Qe,s);var m=Ce.getJSXIcon(o,s,{props:n});if(n.maximizable){var f=e({type:"button",className:j("maximizableButton"),onClick:St},E("maximizableButton"));return i.createElement("button",f,m,i.createElement(ke,null))}return null},Gt=function(){if(n.showHeader){var o=$t(),s=At(),m=U.getJSXElement(n.icons,n),f=U.getJSXElement(n.header,n),v=p+"_header",k=e({ref:w,style:n.headerStyle,className:j("header"),onMouseDown:Dt},E("header")),d=e({id:v,className:j("headerTitle")},E("headerTitle")),y=e({className:j("headerIcons")},E("headerIcons"));return i.createElement("div",k,i.createElement("div",d,f),i.createElement("div",y,m,s,o))}return null},Ft=function(){var o=p+"_content",s=e({id:o,ref:Z,style:n.contentStyle,className:j("content")},E("content"));return i.createElement("div",s,n.children)},Xt=function(){var o=U.getJSXElement(n.footer,n),s=e({ref:Y,className:j("footer")},E("footer"));return o&&i.createElement("div",s,o)},Zt=function(){return n.resizable?i.createElement("span",{className:"p-resizable-handle",style:{zIndex:90},onMouseDown:jt}):null},Kt=function(o){var s,m=o.maskProps,f=o.rootProps,v=o.transitionProps,k={header:n.header,content:n.message,message:n==null||(s=n.children)===null||s===void 0||(s=s[1])===null||s===void 0||(s=s.props)===null||s===void 0?void 0:s.children},d={headerRef:w,contentRef:Z,footerRef:Y,closeRef:q,hide:ue,message:k};return i.createElement("div",m,i.createElement(Fe,me({nodeRef:c},v),i.createElement("div",f,U.getJSXElement(t.content,d))))},Yt=function(o){var s=o.maskProps,m=o.rootProps,f=o.transitionProps,v=Gt(),k=Ft(),d=Xt(),y=Zt();return i.createElement("div",s,i.createElement(Fe,me({nodeRef:c},f),i.createElement("div",m,v,k,d,y)))},Jt=function(){var o=p+"_header",s=p+"_content",m={enter:n.position==="center"?150:300,exit:n.position==="center"?150:300},f=e({ref:D,style:ot("mask"),className:j("mask"),onPointerUp:Pt},E("mask")),v=e({ref:c,id:p,className:N(n.className,j("root",{props:n,maximized:W,context:a})),style:n.style,onClick:n.onClick,role:"dialog","aria-labelledby":o,"aria-describedby":s,"aria-modal":n.modal,onPointerDown:kt},pe.getOtherProps(n),E("root")),k=e({classNames:j("transition"),timeout:m,in:I,options:n.transitionOptions,unmountOnExit:!0,onEnter:Rt,onEntered:_t,onExiting:Vt,onExited:Tt},E("transition"));if(t!=null&&t.content){var d=Kt({maskProps:f,rootProps:v,transitionProps:k});return i.createElement($e,{element:d,appendTo:n.appendTo,visible:!0})}var y=Yt({maskProps:f,rootProps:v,transitionProps:k});return i.createElement($e,{element:y,appendTo:n.appendTo,visible:!0})};return C&&Jt()});rt.displayName="Dialog";const Vn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3crect%20x='0.249985'%20y='0.25'%20width='17.5'%20height='17.5'%20rx='8.75'%20fill='%23C5C5CD'/%3e%3cpath%20d='M5.24998%205.25L12.75%2012.75'%20stroke='%23F4F5F9'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.75%205.25L5.24998%2012.75'%20stroke='%23F4F5F9'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",at=i.forwardRef((t,r)=>{var x,P,p,S,O,C,_,G,B,I,M,F,L,X;const[e,a]=i.useState(null),[n,g]=i.useState(!1);return u.jsxDEV("div",{ref:r,className:t.className,children:[t.dividerTop?u.jsxDEV(Ae,{pt:{root:{className:"bg-Grey_4 h-px mb-[22px]"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:69,columnNumber:11},void 0):null,u.jsxDEV("div",{className:t.inputClassName,children:[t.heading||t.error||t.helperInfo?u.jsxDEV("div",{className:"mb-[38px]",children:[t.heading?u.jsxDEV("p",{className:He("font-Golos text-sm/4 font-bold text-Black",{"text-Red":t.error}),children:t.heading},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:76,columnNumber:17},void 0):null,t.error?u.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Red",children:t.error},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:85,columnNumber:17},void 0):null,t.helperInfo?u.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Corp_1",children:[t.helperInfo.text," ",t.helperInfo.link?u.jsxDEV(u.Fragment,{children:t.helperInfo.link.type==="internal"?u.jsxDEV(Ge,{className:"underline",to:t.helperInfo.link.path,children:t.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:95,columnNumber:25},void 0):u.jsxDEV("a",{className:"underline",href:t.helperInfo.link.path,children:t.helperInfo.link.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:102,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:93,columnNumber:21},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:90,columnNumber:17},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:74,columnNumber:13},void 0):null,u.jsxDEV("div",{className:"grid grid-cols-2 gap-x-2 gap-y-[14px]",children:t.options.map(b=>u.jsxDEV("div",{className:He("overflow-hidden",{"pointer-events-none opacity-35":b.disabled}),children:[u.jsxDEV("label",{htmlFor:b.label,children:[u.jsxDEV("div",{className:"relative mb-[10px] h-[114px] w-full overflow-hidden rounded-md",children:[u.jsxDEV("img",{src:b.img,alt:"checkbox banner",className:"h-full w-full object-cover"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:126,columnNumber:21},void 0),u.jsxDEV(Wt,{onChange:c=>{const D=[...t.value];c.checked?D.push(c.value):D.splice(D.indexOf(c.value),1),t.onChange(D)},checked:t.value.includes(b.value),name:t.name,value:b.value,inputId:b.label,disabled:b.disabled,invalid:!!t.error,pt:{root:{className:"absolute right-2 top-2 bg-White"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:131,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:125,columnNumber:19},void 0),u.jsxDEV("p",{className:"font-Golos text-sm/4 font-bold text-Black",children:b.label},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:151,columnNumber:19},void 0),b.text?u.jsxDEV("p",{className:"mt-1 line-clamp-2 font-Golos text-xs font-normal text-Black",children:b.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:155,columnNumber:21},void 0):null]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:124,columnNumber:17},void 0),b.details?u.jsxDEV(ne,{outlined:!0,label:"Подробнее",pt:{root:{className:"mt-[14px]"}},onClick:()=>{a(b),g(!0)},children:u.jsxDEV(be,{pt:{root:{style:{background:"rgba(199, 50, 155, 0.8)"}}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:171,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:162,columnNumber:19},void 0):null]},b.value,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:118,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:116,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:72,columnNumber:9},void 0),t.dividerBottom?u.jsxDEV(Ae,{pt:{root:{className:"bg-Grey_4 h-px mt-[22px]"}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:186,columnNumber:11},void 0):null,u.jsxDEV(rt,{visible:n,onHide:()=>{g(!1)},children:e!==null?u.jsxDEV("div",{children:[u.jsxDEV("div",{className:"relative mb-4 h-[176px] w-full overflow-hidden rounded-t-lg",children:[u.jsxDEV("button",{className:"absolute right-3 top-3 overflow-hidden",onClick:()=>{g(!1)},children:[u.jsxDEV("img",{className:"block h-[18px] w-[18px]",src:Vn,alt:"close dialog"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:204,columnNumber:19},void 0),u.jsxDEV(be,{pt:{root:{style:{background:"rgba(199, 50, 155, 0.8)"}}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:209,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:198,columnNumber:17},void 0),u.jsxDEV("img",{src:(x=e.details)==null?void 0:x.img,alt:"checkbox banner",className:"h-full w-full object-cover"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:218,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:197,columnNumber:15},void 0),u.jsxDEV("div",{className:"grid gap-y-2 p-4 pb-8",children:[u.jsxDEV("p",{className:"font-Golos text-lg/6 font-bold text-Black",children:(P=e.details)==null?void 0:P.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:225,columnNumber:17},void 0),u.jsxDEV("p",{className:"font-Golos text-sm/4 font-normal text-Black",children:(p=e.details)==null?void 0:p.details},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:228,columnNumber:17},void 0),u.jsxDEV("p",{className:"font-Golos text-xs font-normal text-Corp_1",children:(S=e.details)!=null&&S.link?u.jsxDEV(u.Fragment,{children:((C=(O=e.details)==null?void 0:O.link)==null?void 0:C.type)==="internal"?u.jsxDEV(Ge,{className:"underline",to:(G=(_=e.details)==null?void 0:_.link)==null?void 0:G.path,children:(I=(B=e.details)==null?void 0:B.link)==null?void 0:I.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:235,columnNumber:25},void 0):u.jsxDEV("a",{className:"underline",href:(F=(M=e.details)==null?void 0:M.link)==null?void 0:F.path,children:(X=(L=e.details)==null?void 0:L.link)==null?void 0:X.text},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:242,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:233,columnNumber:21},void 0):null},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:231,columnNumber:17},void 0),t.value.includes(e.value)?u.jsxDEV("div",{children:[u.jsxDEV("p",{className:"mb-[11px] mt-[18px] font-Golos text-lg/6 font-normal text-Black",children:"Отменить выбор ?"},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:267,columnNumber:21},void 0),u.jsxDEV("div",{className:"flex gap-x-1",children:[u.jsxDEV(ne,{label:"Нет",outlined:!0,onClick:()=>{g(!1)},children:u.jsxDEV(be,{pt:{root:{style:{background:"rgba(199, 50, 155, 0.8)"}}}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:279,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:272,columnNumber:23},void 0),u.jsxDEV(ne,{label:"Да",onClick:()=>{const b=[...t.value];b.splice(b.indexOf(e.value),1),setTimeout(()=>{t.onChange(b)},250),g(!1)}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:287,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:271,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:266,columnNumber:19},void 0):u.jsxDEV(ne,{label:"Выбрать",onClick:()=>{const b=[...t.value];b.push(e.value),setTimeout(()=>{t.onChange(b)},250),g(!1)}},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:254,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:224,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:196,columnNumber:13},void 0):null},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:189,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.tsx",lineNumber:67,columnNumber:7},void 0)});at.displayName="StyledPhotoCheckbox";at.__docgenInfo={description:"",methods:[],displayName:"StyledPhotoCheckbox",props:{inputtype:{required:!0,tsType:{name:"literal",value:'"photoCheckbox"'},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  disabled: boolean;
  label: string;

  img: string;
  text?: string;
  details?: {
    text: string;
    details: string;
    img: string;
    link?: {
      text: string;
      path: string;
      type: "external" | "internal";
    };
  };
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"img",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!1}},{key:"details",value:{name:"signature",type:"object",raw:`{
  text: string;
  details: string;
  img: string;
  link?: {
    text: string;
    path: string;
    type: "external" | "internal";
  };
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"details",value:{name:"string",required:!0}},{key:"img",value:{name:"string",required:!0}},{key:"link",value:{name:"signature",type:"object",raw:`{
  text: string;
  path: string;
  type: "external" | "internal";
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:'"external" | "internal"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"internal"'}],required:!0}}]},required:!1}}]},required:!1}}]}}],raw:`{
  value: string;
  disabled: boolean;
  label: string;

  img: string;
  text?: string;
  details?: {
    text: string;
    details: string;
    img: string;
    link?: {
      text: string;
      path: string;
      type: "external" | "internal";
    };
  };
}[]`},description:""},error:{required:!1,tsType:{name:"string"},description:""},validation:{required:!0,tsType:{name:"union",raw:'"default" | "none"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"none"'}]},description:""},heading:{required:!1,tsType:{name:"string"},description:""},helperInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:'"external" | "internal"',elements:[{name:"literal",value:'"external"'},{name:"literal",value:'"internal"'}],required:!0}}]},required:!1}}]}},description:""},dividerTop:{required:!1,tsType:{name:"literal",value:"true"},description:""},dividerBottom:{required:!1,tsType:{name:"literal",value:"true"},description:""},className:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}}};export{at as S,Xn as s};
