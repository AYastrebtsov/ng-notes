import{r as c}from"./index-DVXBtNgz.js";import{c as m,R as k,u as b,a as v,b as R,d as C,e as p}from"./index-BojaLiPF.js";/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function L(e,n){if(e==null)return{};var a={},r=Object.keys(e),o,t;for(t=0;t<r.length;t++)o=r[t],!(n.indexOf(o)>=0)&&(a[o]=e[o]);return a}const w=["onClick","reloadDocument","replace","state","target","to"];function K(e){let{basename:n,children:a,window:r}=e,o=c.useRef();o.current==null&&(o.current=m({window:r}));let t=o.current,[i,l]=c.useState({action:t.action,location:t.location});return c.useLayoutEffect(()=>t.listen(l),[t]),c.createElement(k,{basename:n,children:a,location:i.location,navigationType:i.action,navigator:t})}function O(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const j=c.forwardRef(function(n,a){let{onClick:r,reloadDocument:o,replace:t=!1,state:i,target:l,to:s}=n,u=L(n,w),h=b(s),g=P(s,{replace:t,state:i,target:l});function y(f){r&&r(f),!f.defaultPrevented&&!o&&g(f)}return c.createElement("a",d({},u,{href:h,onClick:y,ref:a,target:l}))});function P(e,n){let{target:a,replace:r,state:o}=n===void 0?{}:n,t=v(),i=R(),l=C(e);return c.useCallback(s=>{if(s.button===0&&(!a||a==="_self")&&!O(s)){s.preventDefault();let u=!!r||p(i)===p(l);t(e,{replace:u,state:o})}},[i,t,l,r,o,a,e])}export{K as B,j as L};
