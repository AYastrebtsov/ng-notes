function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-CceWlVgA.js","./index-BdMw_Ax9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-L8bQ74Sw.js";import{R as e,r as c}from"./index-BdMw_Ax9.js";import{r as l,u}from"./react-18-BOOkAbAX.js";import{f as h,g as E,H as d,h as x}from"./index-BN4VhSEn.js";import"../sb-preview/runtime.js";import"./index-C72NkCm4.js";import"./index-BwQhoTO9.js";import"./mapValues-ChqGHMta.js";import"./index-C-I6vmrZ.js";import"./index-DuUjvt_u.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},f=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},O=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{p(()=>import("./index-CceWlVgA.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:a})=>l(e.createElement(f,{showException:i,key:Math.random()},e.createElement(a,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{O as DocsRenderer,_ as defaultComponents};