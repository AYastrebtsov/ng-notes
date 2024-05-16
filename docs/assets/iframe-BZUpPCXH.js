function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./constructor.stories-B3LrW0Q0.js","./jsx-dev-runtime-BETcGmrp.js","./index-BdMw_Ax9.js","./index-CbOq3YHG.js","./index-BwQhoTO9.js","./mapValues-ChqGHMta.js","./index-C72NkCm4.js","./index-C-I6vmrZ.js","./index-DuUjvt_u.js","./index-DrFu-skq.js","./index-zmhHS-aW.js","./StyledInputText-DL-FrD6C.js","./utils-Dyyo_Bbn.js","./api.esm-DPODbszm.js","./componentbase.esm-CZx7eTCo.js","./components-1ZpOYl75.js","./FixedFloatLabel-DVdzIc9N.js","./StyledSelect-CWIMA9bp.js","./index.esm-BPWPgF8-.js","./csstransition.esm-ku30S8Pi.js","./index-ByRWxq36.js","./ripple.esm-CnRQdetG.js","./StyledRadioButton-DVZUvL9H.js","./StyledCheckboxMultiple-C2DUxrtN.js","./checkbox.esm-BNOGzJqF.js","./StyledPhotoCheckbox-Bj2dDQb1.js","./StyledRipple-BPrRq6xm.js","./StyledCheckbox-Jj9H_0A9.js","./FiexedFloatLabel.stories-HWL55dU-.js","./StyledCheckbox.stories-nTDAGB6z.js","./StyledCheckboxMultiple.stories-1wh9dU-k.js","./StyledInputText.stories-Dt_ykM2x.js","./StyledPhotoCheckbox.stories-BOfQHsoX.js","./StyledRadioButton.stories-ZOFLP6rc.js","./StyledRipple.stories-J8f5RuVC.js","./StyledSelect.stories-CfKC6ef9.js","./account.stories-mfzITnel.js","./bik.stories-B4SG_bNk.js","./card.stories-D1HNz_gO.js","./file.stories-tC1CvXGp.js","./inn.stories-hHRVoMlN.js","./mask.stories-BFhs_fGG.js","./number.stories-BHNsEjTb.js","./otp.stories-CXcHPHw7.js","./photo.stories-Cp1Ji4yz.js","./snils.stories-CuaEAeQR.js","./entry-preview-BUkViroY.js","./react-18-BOOkAbAX.js","./entry-preview-docs-CrmYugjs.js","./isPlainObject-CqtoKmPc.js","./preview-BcRBvaiQ.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-CJIjO9RJ.js","./preview-e84g0aq4.js","./preview-C8wSS0rn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const R="modulepreload",h=function(n,i){return new URL(n,i).href},E={},t=function(i,a,p){let e=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(a.map(_=>{if(_=h(_,p),_ in E)return;E[_]=!0;const u=_.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(!!p)for(let l=r.length-1;l>=0;l--){const m=r[l];if(m.href===_&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${O}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":R,u||(s.as="script",s.crossOrigin=""),s.href=_,c&&s.setAttribute("nonce",c),document.head.appendChild(s),u)return new Promise((l,m)=>{s.addEventListener("load",l),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${_}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});y.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const T={"./app/shared/constructor/constructor.stories.tsx":async()=>t(()=>import("./constructor.stories-B3LrW0Q0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url),"./app/shared/ui/FixedFloatLabel/FiexedFloatLabel.stories.tsx":async()=>t(()=>import("./FiexedFloatLabel.stories-HWL55dU-.js"),__vite__mapDeps([28,1,2]),import.meta.url),"./app/shared/ui/StyledCheckbox/StyledCheckbox.stories.tsx":async()=>t(()=>import("./StyledCheckbox.stories-nTDAGB6z.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,27,12,24,13,14,18,15]),import.meta.url),"./app/shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple.stories.tsx":async()=>t(()=>import("./StyledCheckboxMultiple.stories-1wh9dU-k.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,23,12,24,13,14,18,15]),import.meta.url),"./app/shared/ui/StyledInputText/StyledInputText.stories.tsx":async()=>t(()=>import("./StyledInputText.stories-Dt_ykM2x.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16]),import.meta.url),"./app/shared/ui/StyledPhotoCheckbox/StyledPhotoCheckbox.stories.tsx":async()=>t(()=>import("./StyledPhotoCheckbox.stories-BOfQHsoX.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8,9,25,12,26,21,13,14,24,18,15,19,20]),import.meta.url),"./app/shared/ui/StyledRadioButton/StyledRadioButton.stories.tsx":async()=>t(()=>import("./StyledRadioButton.stories-ZOFLP6rc.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,22,12,13,14,15]),import.meta.url),"./app/shared/ui/StyledRipple/StyledRipple.stories.tsx":async()=>t(()=>import("./StyledRipple.stories-J8f5RuVC.js"),__vite__mapDeps([34,1,2,26,21,13,14]),import.meta.url),"./app/shared/ui/StyledSelect/StyledSelect.stories.tsx":async()=>t(()=>import("./StyledSelect.stories-CfKC6ef9.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,17,12,13,14,18,19,20,15,21,16]),import.meta.url),"./app/shared/ui/wip/account.stories.tsx":async()=>t(()=>import("./account.stories-mfzITnel.js"),__vite__mapDeps([36,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/bik.stories.tsx":async()=>t(()=>import("./bik.stories-B4SG_bNk.js"),__vite__mapDeps([37,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/card.stories.tsx":async()=>t(()=>import("./card.stories-D1HNz_gO.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/file.stories.tsx":async()=>t(()=>import("./file.stories-tC1CvXGp.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/inn.stories.tsx":async()=>t(()=>import("./inn.stories-hHRVoMlN.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/mask.stories.tsx":async()=>t(()=>import("./mask.stories-BFhs_fGG.js"),__vite__mapDeps([41,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/number.stories.tsx":async()=>t(()=>import("./number.stories-BHNsEjTb.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/otp.stories.tsx":async()=>t(()=>import("./otp.stories-CXcHPHw7.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/photo.stories.tsx":async()=>t(()=>import("./photo.stories-Cp1Ji4yz.js"),__vite__mapDeps([44,1,2,3,4,5,6,7,8,9]),import.meta.url),"./app/shared/ui/wip/snils.stories.tsx":async()=>t(()=>import("./snils.stories-CuaEAeQR.js"),__vite__mapDeps([45,1,2,3,4,5,6,7,8,9]),import.meta.url)};async function L(n){return T[n]()}const{composeConfigs:f,PreviewWeb:v,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const n=await Promise.all([t(()=>import("./entry-preview-BUkViroY.js"),__vite__mapDeps([46,2,47,6]),import.meta.url),t(()=>import("./entry-preview-docs-CrmYugjs.js"),__vite__mapDeps([48,8,5,2,20,9,49]),import.meta.url),t(()=>import("./preview-BcRBvaiQ.js"),__vite__mapDeps([50,7]),import.meta.url),t(()=>import("./preview-CSKaT9TD.js"),[],import.meta.url),t(()=>import("./preview-DbT1mggi.js"),[],import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([51,9]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t(()=>import("./preview-CKBNSrda.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([52,9]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-D2d-74FL.js"),[],import.meta.url),t(()=>import("./preview-CJIjO9RJ.js").then(i=>i.p),__vite__mapDeps([53,2,5,4,49,7,9]),import.meta.url),t(()=>import("./preview-e84g0aq4.js"),__vite__mapDeps([54,1,2,53,5,4,49,7,9,10,13,12,55]),import.meta.url)]);return f(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(L,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
