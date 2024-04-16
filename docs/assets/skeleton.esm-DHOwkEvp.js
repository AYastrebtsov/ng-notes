import{r as s}from"./index-BdMw_Ax9.js";import{P as h}from"./api.esm-CK-Pl4SF.js";import{C as P,b as S,d as O,c as m}from"./ripple.esm-CEskJZ5p.js";function a(t){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}function w(t,e){if(a(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(a(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function k(t){var e=w(t,"string");return a(e)==="symbol"?e:String(e)}function j(t,e,r){return e=k(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x={root:function(e){var r=e.props;return m("p-skeleton p-component",{"p-skeleton-circle":r.shape==="circle","p-skeleton-none":r.animation==="none"})}},R=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,E={root:{position:"relative"}},l=P.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:x,inlineStyles:E,styles:R}});function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?c(Object(r),!0).forEach(function(n){j(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var _=s.memo(s.forwardRef(function(t,e){var r=S(),n=s.useContext(h),o=l.getProps(t,n),i=l.setMetaData({props:o}),f=i.ptm,y=i.cx,d=i.sx,b=i.isUnstyled;O(l.css.styles,b,{name:"skeleton"});var p=s.useRef(null);s.useImperativeHandle(e,function(){return{props:o,getElement:function(){return p.current}}});var v=o.size?{width:o.size,height:o.size,borderRadius:o.borderRadius}:{width:o.width,height:o.height,borderRadius:o.borderRadius},g=r({ref:p,className:m(o.className,y("root")),style:u(u({},v),d("root")),"aria-hidden":!0},l.getOtherProps(o),f("root"));return s.createElement("div",g)}));_.displayName="Skeleton";export{_ as S};
