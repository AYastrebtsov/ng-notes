import{R as l,r as s}from"./index-DGAqIW1f.js";import{r as E}from"./index-c1JcMxCd.js";var u={},a=E;{var n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;u.createRoot=function(t,e){n.usingClientEntryPoint=!0;try{return a.createRoot(t,e)}finally{n.usingClientEntryPoint=!1}},u.hydrateRoot=function(t,e,r){n.usingClientEntryPoint=!0;try{return a.hydrateRoot(t,e,r)}finally{n.usingClientEntryPoint=!1}}}var o=new Map,R=({callback:t,children:e})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},f=async(t,e)=>{let r=await c(e);return new Promise(i=>{r.render(l.createElement(R,{callback:()=>i(null)},t))})},_=(t,e)=>{let r=o.get(t);r&&(r.unmount(),o.delete(t))},c=async t=>{let e=o.get(t);return e||(e=u.createRoot(t),o.set(t,e)),e};export{f as r,_ as u};