import{r as o}from"./index-BdMw_Ax9.js";import{P as ae}from"./api.esm-CK-Pl4SF.js";import{C as le,D as y,O as ce,u as ie,a as Z,c as oe}from"./ripple.esm-CEskJZ5p.js";import{I as se}from"./inputtext.esm-9srZuwRb.js";function A(){return A=Object.assign?Object.assign.bind():function(I){for(var h=1;h<arguments.length;h++){var x=arguments[h];for(var t in x)Object.prototype.hasOwnProperty.call(x,t)&&(I[t]=x[t])}return I},A.apply(this,arguments)}var Y=le.extend({defaultProps:{__TYPE:"InputMask",autoClear:!0,autoFocus:!1,className:null,disabled:!1,id:null,mask:null,maxLength:null,name:null,onBlur:null,onChange:null,onComplete:null,onFocus:null,placeholder:null,readOnly:!1,required:!1,size:null,slotChar:"_",style:null,tabIndex:null,tooltip:null,tooltipOptions:null,type:"text",unmask:!1,value:null,children:void 0}}),fe=o.memo(o.forwardRef(function(I,h){var x=o.useContext(ae),t=Y.getProps(I,x),a=o.useRef(null),b=o.useRef(null),B=o.useRef(0),s=o.useRef([]),f=o.useRef([]),v=o.useRef(0),M=o.useRef(null),N=o.useRef(!1),P=o.useRef(null),_=o.useRef(null),R=o.useRef(null),E=o.useRef(null),S=o.useRef(null),K=o.useRef(!1),G={props:t},p=function(e,n){var r,u,l,i=a.current;return!i||!i.offsetParent||i!==document.activeElement?null:(typeof e=="number"?(u=e,l=typeof n=="number"?n:u,i.setSelectionRange?i.setSelectionRange(u,l):i.createTextRange&&(r=i.createTextRange(),r.collapse(!0),r.moveEnd("character",l),r.moveStart("character",u),r.select())):i.setSelectionRange?(u=i.selectionStart,l=i.selectionEnd):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),u=0-r.duplicate().moveStart("character",-1e5),l=u+r.text.length),{begin:u,end:l})},D=function(){for(var e=b.current;e<=B.current;e++)if(s.current[e]&&f.current[e]===d(e))return!1;return!0},d=o.useCallback(function(c){return c<t.slotChar.length?t.slotChar.charAt(c):t.slotChar.charAt(0)},[t.slotChar]),F=function(){return t.unmask?w():a.current&&a.current.value},C=function(e){for(;++e<v.current&&!s.current[e];);return e},J=function(e){for(;--e>=0&&!s.current[e];);return e},T=function(e,n){var r,u;if(!(e<0)){for(r=e,u=C(n);r<v.current;r++)if(s.current[r]){if(u<v.current&&s.current[r].test(f.current[u]))f.current[r]=f.current[u],f.current[u]=d(u);else break;u=C(u)}k(),p(Math.max(b.current,e))}},Q=function(e){var n,r,u,l;for(n=e,r=d(e);n<v.current;n++)if(s.current[n])if(u=C(n),l=f.current[n],f.current[n]=r,u<v.current&&s.current[u].test(l))r=l;else break},W=function(e){var n=a.current.value,r=p();if(r){if(M.current.length&&M.current.length>n.length){for(m(!0);r.begin>0&&!s.current[r.begin-1];)r.begin--;if(r.begin===0)for(;r.begin<b.current&&!s.current[r.begin];)r.begin++;p(r.begin,r.begin)}else{for(m(!0);r.begin<v.current&&!s.current[r.begin];)r.begin++;p(r.begin,r.begin)}t.onComplete&&D()&&t.onComplete({originalEvent:e,value:F()}),g(e)}},L=function(e){if(N.current=!1,m(),g(e),V(),t.onBlur&&t.onBlur(e),a.current.value!==P.current){var n=document.createEvent("HTMLEvents");n.initEvent("change",!0,!1),a.current.dispatchEvent(n)}},X=function(e){if(!t.readOnly){var n=e.which||e.keyCode,r,u,l;if(M.current=a.current.value,n===8||n===46||y.isIOS()&&n===127){if(r=p(),!r)return;u=r.begin,l=r.end,l-u===0&&(u=n!==46?J(u):l=C(u-1),l=n===46?C(l):l),O(u,l),T(u,l-1),g(e),e.preventDefault()}else n===13?(L(e),g(e)):n===27&&(a.current.value=P.current,p(0,m()),g(e),e.preventDefault())}},$=function(e){if(!t.readOnly){var n=p();if(n){var r=e.which||e.keyCode,u,l,i,H;if(!(e.ctrlKey||e.altKey||e.metaKey||r<32)){if(r&&r!==13){if(n.end-n.begin!==0&&(O(n.begin,n.end),T(n.begin,n.end-1)),u=C(n.begin-1),u<v.current&&(l=String.fromCharCode(r),s.current[u].test(l))){if(Q(u),f.current[u]=l,k(),i=C(u),y.isAndroid()){var ue=function(){p(i)};setTimeout(ue,0)}else p(i);n.begin<=B.current&&(H=D())}e.preventDefault()}g(e),t.onComplete&&H&&t.onComplete({originalEvent:e,value:F()})}}}},O=function(e,n){var r;for(r=e;r<n&&r<v.current;r++)s.current[r]&&(f.current[r]=d(r))},k=function(){a.current&&(a.current.value=f.current.join(""))},m=function(e){_.current=!0;var n=a.current&&a.current.value,r=-1,u,l,i;for(u=0,i=0;u<v.current;u++)if(s.current[u]){for(f.current[u]=d(u);i++<n.length;)if(l=n.charAt(i-1),s.current[u].test(l)){f.current[u]=l,r=u;break}if(i>n.length){O(u+1,v.current);break}}else f.current[u]===n.charAt(i)&&i++,u<R.current&&(r=u);return e?k():r+1<R.current?t.autoClear||f.current.join("")===E.current?(a.current&&a.current.value&&(a.current.value=""),O(0,v.current)):k():(k(),a.current&&(a.current.value=a.current.value.substring(0,r+1))),R.current?u:b.current},ee=function(e){if(!t.readOnly){N.current=!0,clearTimeout(S.current);var n;a.current?P.current=a.current.value:P.current="",n=m()||0,S.current=setTimeout(function(){a.current===document.activeElement&&(k(),n===t.mask.replace("?","").length?p(0,n):p(n),V())},100),t.onFocus&&t.onFocus(e)}},re=function(e){K.current?W(e):z(e)},z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!t.readOnly){if(!n){var r=m(!0);p(r)}g(e),t.onComplete&&D()&&t.onComplete({originalEvent:e,value:F()})}},w=o.useCallback(function(){for(var c=[],e=0;e<f.current.length;e++){var n=f.current[e];s.current[e]&&n!==d(e)&&c.push(n)}return c.join("")},[d]),g=function(e){if(t.onChange){var n=t.unmask?w():e&&e.target.value;t.onChange({originalEvent:e,value:E.current!==n?n:"",stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},target:{name:t.name,id:t.id,value:E.current!==n?n:""}})}},V=function(){a.current&&a.current.value&&a.current.value.length>0?y.addClass(a.current,"p-filled"):y.removeClass(a.current,"p-filled")},j=function(e){var n;return a.current&&(t.value==null?a.current.value="":(a.current.value=t.value,n=m(e),setTimeout(function(){if(a.current)return k(),m(e)},10)),P.current=a.current.value),V(),n},q=o.useCallback(function(){return t.unmask?t.value!==w():E.current!==a.current.value&&a.current.value!==t.value},[t.unmask,t.value,w]),U=function(){if(t.mask){s.current=[],R.current=t.mask.length,v.current=t.mask.length,b.current=null;var e={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};K.current=y.isChrome()&&y.isAndroid();for(var n=t.mask.split(""),r=0;r<n.length;r++){var u=n[r];u==="?"?(v.current--,R.current=r):e[u]?(s.current.push(new RegExp(e[u])),b.current===null&&(b.current=s.current.length-1),r<R.current&&(B.current=s.current.length-1)):s.current.push(null)}f.current=[];for(var l=0;l<n.length;l++){var i=n[l];i!=="?"&&(e[i]?f.current.push(d(l)):f.current.push(i))}E.current=f.current.join("")}};o.useImperativeHandle(h,function(){return{props:t,focus:function(){return y.focus(a.current)},getElement:function(){return a.current}}}),o.useEffect(function(){ce.combinedRefs(a,h)},[a,h]),ie(function(){U(),j()}),Z(function(){U(),p(j(!0)),t.unmask&&g()},[t.mask]),Z(function(){q()&&j()},[q]);var ne=Y.getOtherProps(t),te=oe("p-inputmask",t.className);return o.createElement(se,A({ref:a,autoFocus:t.autoFocus,id:t.id,type:t.type,name:t.name,style:t.style,className:te},ne,{placeholder:t.placeholder,size:t.size,maxLength:t.maxLength,tabIndex:t.tabIndex,disabled:t.disabled,readOnly:t.readOnly,onFocus:ee,onBlur:L,onKeyDown:X,onKeyPress:$,onInput:re,onPaste:function(e){return z(e,!0)},required:t.required,tooltip:t.tooltip,tooltipOptions:t.tooltipOptions,pt:t.pt,unstyled:t.unstyled,__parentMetadata:{parent:G}}))}));fe.displayName="InputMask";export{fe as I};
