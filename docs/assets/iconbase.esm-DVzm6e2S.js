import{r as f}from"./index-DGAqIW1f.js";import{R as y}from"./index-c1JcMxCd.js";import{P as b,a as v}from"./api.esm-CqhHtwfv.js";import{D as p,u as h,a as M,b as O,O as u,c as _}from"./ripple.esm-xpvgVRPj.js";function A(t){if(Array.isArray(t))return t}function I(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,a,s,i,l=[],n=!0,m=!1;try{if(s=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;n=!1}else for(;!(n=(o=s.call(r)).done)&&(l.push(o.value),l.length!==e);n=!0);}catch(g){m=!0,a=g}finally{try{if(!n&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(m)throw a}}return l}}function P(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function S(t,e){if(t){if(typeof t=="string")return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(t,e)}}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(t,e){return A(t)||I(t,e)||S(t,e)||E()}var d={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(e){return u.getMergedProps(e,d.defaultProps)},getOtherProps:function(e){return u.getDiffProps(e,d.defaultProps)}},T=f.memo(function(t){var e=d.getProps(t),r=f.useContext(b),o=f.useState(e.visible&&p.isClient()),a=R(o,2),s=a[0],i=a[1];h(function(){p.isClient()&&!s&&(i(!0),e.onMounted&&e.onMounted())}),M(function(){e.onMounted&&e.onMounted()},[s]),O(function(){e.onUnmounted&&e.onUnmounted()});var l=e.element||e.children;if(l&&s){var n=e.appendTo||r&&r.appendTo||v.appendTo;return u.isFunction(n)&&(n=n()),n||(n=document.body),n==="self"?l:y.createPortal(l,n)}return null});T.displayName="Portal";var c={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(e){return u.getMergedProps(e,c.defaultProps)},getOtherProps:function(e){return u.getDiffProps(e,c.defaultProps)},getPTI:function(e){var r=u.isEmpty(e.label),o=c.getOtherProps(e),a={className:_("p-icon",{"p-icon-spin":e.spin},e.className),role:r?void 0:"img","aria-label":r?void 0:e.label,"aria-hidden":r};return u.getMergedProps(o,a)}};export{c as I,T as P};