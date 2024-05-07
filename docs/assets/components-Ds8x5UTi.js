import{r as s}from"./index-BdMw_Ax9.js";import{P as ye,D as N,a as Oe,O as q,Z as le,c as G}from"./api.esm-CEpbZOGc.js";import{b as xt,c as de,d as Et,C as Ae,u as De,e as Ie,f as gn,g as bn}from"./componentbase.esm-DDX_NIJ5.js";import{R as wn}from"./index-C72NkCm4.js";import{j as xn}from"./jsx-dev-runtime-BETcGmrp.js";import{_ as En}from"./iframe-eSz_Qt68.js";function Sn(e){if(Array.isArray(e))return e}function Pn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,i,l,o=[],c=!0,d=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=i.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(f){d=!0,r=f}finally{try{if(!c&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw r}}return o}}function ft(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Rn(e,t){if(e){if(typeof e=="string")return ft(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ft(e,t)}}function Cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(e,t){return Sn(e)||Pn(e,t)||Rn(e,t)||Cn()}var Ne={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return q.getMergedProps(t,Ne.defaultProps)},getOtherProps:function(t){return q.getDiffProps(t,Ne.defaultProps)}},St=s.memo(function(e){var t=Ne.getProps(e),n=s.useContext(ye),a=s.useState(t.visible&&N.isClient()),r=Ln(a,2),i=r[0],l=r[1];xt(function(){N.isClient()&&!i&&(l(!0),t.onMounted&&t.onMounted())}),de(function(){t.onMounted&&t.onMounted()},[i]),Et(function(){t.onUnmounted&&t.onUnmounted()});var o=t.element||t.children;if(o&&i){var c=t.appendTo||n&&n.appendTo||Oe.appendTo;return q.isFunction(c)&&(c=c()),c||(c=document.body),c==="self"?o:wn.createPortal(o,c)}return null});St.displayName="Portal";function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},he.apply(this,arguments)}function X(e){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(e)}function Tn(e,t){if(X(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(X(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function On(e){var t=Tn(e,"string");return X(t)==="symbol"?t:String(t)}function Pt(e,t,n){return t=On(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Nn(e){if(Array.isArray(e))return $e(e)}function $n(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rt(e,t){if(e){if(typeof e=="string")return $e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(e,t)}}function _n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e){return Nn(e)||$n(e)||Rt(e)||_n()}function Mn(e){if(Array.isArray(e))return e}function An(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,i,l,o=[],c=!0,d=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=i.call(n)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(f){d=!0,r=f}finally{try{if(!c&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw r}}return o}}function Dn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,t){return Mn(e)||An(e,t)||Rt(e,t)||Dn()}var In={root:function(t){var n=t.positionState,a=t.classNameState;return G("p-tooltip p-component",Pt({},"p-tooltip-".concat(n),!0),a)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},kn={arrow:function(t){var n=t.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},Fn=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,se=Ae.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:In,styles:Fn,inlineStyles:kn}});function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(n),!0).forEach(function(a){Pt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Wn=s.memo(s.forwardRef(function(e,t){var n=De(),a=s.useContext(ye),r=se.getProps(e,a),i=s.useState(!1),l=J(i,2),o=l[0],c=l[1],d=s.useState(r.position),f=J(d,2),p=f[0],h=f[1],C=s.useState(""),x=J(C,2),L=x[0],$=x[1],_={props:r,state:{visible:o,position:p,className:L},context:{right:p==="right",left:p==="left",top:p==="top",bottom:p==="bottom"}},S=se.setMetaData(_),R=S.ptm,P=S.cx,j=S.sx,Y=S.isUnstyled;Ie(se.css.styles,Y,{name:"tooltip"});var w=s.useRef(null),I=s.useRef(null),E=s.useRef(null),k=s.useRef(null),W=s.useRef(!0),Je=s.useRef({}),Ze=s.useRef(null),Zt=gn({listener:function(u){!N.isTouchDevice()&&A(u)}}),qe=J(Zt,2),qt=qe[0],Xt=qe[1],Gt=bn({target:E.current,listener:function(u){A(u)},when:o}),Xe=J(Gt,2),Qt=Xe[0],en=Xe[1],tn=function(u){return!(r.content||T(u,"tooltip"))},nn=function(u){return!(r.content||T(u,"tooltip")||r.children)},xe=function(u){return T(u,"mousetrack")||r.mouseTrack},Ge=function(u){return T(u,"disabled")==="true"||et(u,"disabled")||r.disabled},Qe=function(u){return T(u,"showondisabled")||r.showOnDisabled},te=function(){return T(E.current,"autohide")||r.autoHide},T=function(u,m){return et(u,"data-pr-".concat(m))?u.getAttribute("data-pr-".concat(m)):null},et=function(u,m){return u&&u.hasAttribute(m)},tt=function(u){var m=[T(u,"showevent")||r.showEvent],b=[T(u,"hideevent")||r.hideEvent];if(xe(u))m=["mousemove"],b=["mouseleave"];else{var y=T(u,"event")||r.event;y==="focus"&&(m=["focus"],b=["blur"]),y==="both"&&(m=["focus","mouseenter"],b=["blur","mouseleave"])}return{showEvents:m,hideEvents:b}},rn=function(u){return T(u,"position")||p},an=function(u){var m=T(u,"mousetracktop")||r.mouseTrackTop,b=T(u,"mousetrackleft")||r.mouseTrackLeft;return{top:m,left:b}},nt=function(u,m){if(I.current){var b=T(u,"tooltip")||r.content;b?(I.current.innerHTML="",I.current.appendChild(document.createTextNode(b)),m()):r.children&&m()}},rt=function(u){nt(E.current,function(){var m=Ze.current,b=m.pageX,y=m.pageY;r.autoZIndex&&!le.get(w.current)&&le.set("tooltip",w.current,a&&a.autoZIndex||Oe.autoZIndex,r.baseZIndex||a&&a.zIndex.tooltip||Oe.zIndex.tooltip),w.current.style.left="",w.current.style.top="",te()&&(w.current.style.pointerEvents="none");var g=xe(E.current)||u==="mouse";(g&&!k.current||g)&&(k.current={width:N.getOuterWidth(w.current),height:N.getOuterHeight(w.current)}),at(E.current,{x:b,y},u)})},ne=function(u){E.current=u.currentTarget;var m=Ge(E.current),b=nn(Qe(E.current)&&m?E.current.firstChild:E.current);if(!(b||m))if(Ze.current=u,o)re("updateDelay",rt);else{var y=ae(r.onBeforeShow,{originalEvent:u,target:E.current});y&&re("showDelay",function(){c(!0),ae(r.onShow,{originalEvent:u,target:E.current})})}},A=function(u){if(it(),o){var m=ae(r.onBeforeHide,{originalEvent:u,target:E.current});m&&re("hideDelay",function(){!te()&&W.current===!1||(le.clear(w.current),N.removeClass(w.current,"p-tooltip-active"),c(!1),ae(r.onHide,{originalEvent:u,target:E.current}))})}},at=function(u,m,b){var y=0,g=0,O=b||p;if((xe(u)||O=="mouse")&&m){var M={width:N.getOuterWidth(w.current),height:N.getOuterHeight(w.current)};y=m.x,g=m.y;var st=an(u),ie=st.top,oe=st.left;switch(O){case"left":y=y-(M.width+oe),g=g-(M.height/2-ie);break;case"right":case"mouse":y=y+oe,g=g-(M.height/2-ie);break;case"top":y=y-(M.width/2-oe),g=g-(M.height+ie);break;case"bottom":y=y-(M.width/2-oe),g=g+ie;break}y<=0||k.current.width>M.width?(w.current.style.left="0px",w.current.style.right=window.innerWidth-M.width-y+"px"):(w.current.style.right="",w.current.style.left=y+"px"),w.current.style.top=g+"px",N.addClass(w.current,"p-tooltip-active")}else{var Pe=N.findCollisionPosition(O),mn=T(u,"my")||r.my||Pe.my,hn=T(u,"at")||r.at||Pe.at;w.current.style.padding="0px",N.flipfitCollision(w.current,u,mn,hn,function(Re){var ut=Re.at,Ce=ut.x,vn=ut.y,yn=Re.my.x,ct=r.at?Ce!=="center"&&Ce!==yn?Ce:vn:Re.at["".concat(Pe.axis)];w.current.style.padding="",h(ct),on(ct),N.addClass(w.current,"p-tooltip-active")})}},on=function(u){if(w.current){var m=getComputedStyle(w.current);u==="left"?w.current.style.left=parseFloat(m.left)-parseFloat(m.paddingLeft)*2+"px":u==="top"&&(w.current.style.top=parseFloat(m.top)-parseFloat(m.paddingTop)*2+"px")}},ln=function(){te()||(W.current=!1)},sn=function(u){te()||(W.current=!0,A(u))},un=function(u){if(u){var m=tt(u),b=m.showEvents,y=m.hideEvents,g=ot(u);b.forEach(function(O){return g==null?void 0:g.addEventListener(O,ne)}),y.forEach(function(O){return g==null?void 0:g.addEventListener(O,A)})}},cn=function(u){if(u){var m=tt(u),b=m.showEvents,y=m.hideEvents,g=ot(u);b.forEach(function(O){return g==null?void 0:g.removeEventListener(O,ne)}),y.forEach(function(O){return g==null?void 0:g.removeEventListener(O,A)})}},re=function(u,m){it();var b=T(E.current,u.toLowerCase())||r[u];b?Je.current["".concat(u)]=setTimeout(function(){return m()},b):m()},ae=function(u){if(u){for(var m=arguments.length,b=new Array(m>1?m-1:0),y=1;y<m;y++)b[y-1]=arguments[y];var g=u.apply(void 0,b);return g===void 0&&(g=!0),g}return!0},it=function(){Object.values(Je.current).forEach(function(u){return clearTimeout(u)})},ot=function(u){if(u){if(Qe(u)){if(!u.hasWrapper){var m=document.createElement("div"),b=u.nodeName==="INPUT";return b?N.addMultipleClasses(m,"p-tooltip-target-wrapper p-inputwrapper"):N.addClass(m,"p-tooltip-target-wrapper"),u.parentNode.insertBefore(m,u),m.appendChild(u),u.hasWrapper=!0,m}return u.parentElement}else if(u.hasWrapper){var y;(y=u.parentElement).replaceWith.apply(y,Un(u.parentElement.childNodes)),delete u.hasWrapper}return u}return null},fn=function(u){Se(u),Ee(u)},Ee=function(u){lt(u||r.target,un)},Se=function(u){lt(u||r.target,cn)},lt=function(u,m){if(u=q.getRefElement(u),u)if(N.isElement(u))m(u);else{var b=function(g){var O=N.find(document,g);O.forEach(function(M){m(M)})};u instanceof Array?u.forEach(function(y){b(y)}):b(u)}};xt(function(){o&&E.current&&Ge(E.current)&&A()}),de(function(){return Ee(),function(){Se()}},[ne,A,r.target]),de(function(){if(o){var v=rn(E.current),u=T(E.current,"classname");h(v),$(u),rt(v),qt(),Qt()}else h(r.position),$(""),E.current=null,k.current=null,W.current=!0;return function(){Xt(),en()}},[o]),de(function(){o&&re("updateDelay",function(){nt(E.current,function(){at(E.current)})})},[r.content]),Et(function(){A(),le.clear(w.current)}),s.useImperativeHandle(t,function(){return{props:r,updateTargetEvents:fn,loadTargetEvents:Ee,unloadTargetEvents:Se,show:ne,hide:A,getElement:function(){return w.current},getTarget:function(){return E.current}}});var dn=function(){var u=tn(E.current),m=n({id:r.id,className:G(r.className,P("root",{positionState:p,classNameState:L})),style:r.style,role:"tooltip","aria-hidden":o,onMouseEnter:function(O){return ln()},onMouseLeave:function(O){return sn(O)}},se.getOtherProps(r),R("root")),b=n({className:P("arrow"),style:j("arrow",jn({},_))},R("arrow")),y=n({className:P("text")},R("text"));return s.createElement("div",he({ref:w},m),s.createElement("div",b),s.createElement("div",he({ref:I},y),u&&r.children))};if(o){var pn=dn();return s.createElement(St,{element:pn,appendTo:r.appendTo,visible:!0})}return null}));Wn.displayName="Tooltip";var Bn={root:function(t){var n=t.props,a=t.horizontal,r=t.vertical;return G("p-divider p-component p-divider-".concat(n.layout," p-divider-").concat(n.type),{"p-divider-left":a&&(!n.align||n.align==="left"),"p-divider-right":a&&n.align==="right","p-divider-center":a&&n.align==="center"||r&&(!n.align||n.align==="center"),"p-divider-top":r&&n.align==="top","p-divider-bottom":r&&n.align==="bottom"},n.className)},content:"p-divider-content"},zn=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,Hn={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},ue=Ae.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:Bn,styles:zn,inlineStyles:Hn}}),Vn=s.forwardRef(function(e,t){var n=De(),a=s.useContext(ye),r=ue.getProps(e,a),i=ue.setMetaData({props:r}),l=i.ptm,o=i.cx,c=i.sx,d=i.isUnstyled;Ie(ue.css.styles,d,{name:"divider"});var f=s.useRef(null),p=r.layout==="horizontal",h=r.layout==="vertical";s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return f.current}}});var C=n({ref:f,style:c("root"),className:G(r.className,o("root",{horizontal:p,vertical:h})),"aria-orientation":r.layout,role:"separator"},ue.getOtherProps(r),l("root")),x=n({className:o("content")},l("content"));return s.createElement("div",C,s.createElement("div",x,r.children))});Vn.displayName="Divider";var Kn={root:"p-float-label"},Yn=`
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
}`,ce=Ae.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:Kn,styles:Yn}}),Ct=s.memo(s.forwardRef(function(e,t){var n=De(),a=s.useContext(ye),r=ce.getProps(e,a),i=s.useRef(t),l=ce.setMetaData({props:r}),o=l.ptm,c=l.cx,d=l.isUnstyled;Ie(ce.css.styles,d,{name:"floatlabel"}),s.useEffect(function(){q.combinedRefs(i,t)},[i,t]);var f=n({ref:i,className:G(c("root"))},ce.getOtherProps(r),o("root"));return s.createElement("span",f,r.children)}));Ct.displayName="FloatLabel";const ya=({...e})=>s.useMemo(()=>xn.jsxDEV(Ct,{...e},void 0,!1,{fileName:"/Users/andrey/Documents/work/marriator/app/shared/ui/FixedFloatLabel/FixedFloatLabel.tsx",lineNumber:11,columnNumber:17},void 0),[e]);/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_e.apply(this,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));function U(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ge(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ue(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function be(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var mt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mt||(mt={}));function Jn(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?be(t):t,r=sr(a.pathname||"/",n);if(r==null)return null;let i=Lt(e);Zn(i);let l=null;for(let o=0;l==null&&o<i.length;++o){let c=lr(r);l=ar(i[o],c)}return l}function Lt(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,l,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(U(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=B([a,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(U(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Lt(i.children,t,f,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:nr(d,i.index),routesMeta:f})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))r(i,l);else for(let c of Tt(i.path))r(i,l,c)}),t}function Tt(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let l=Tt(a.join("/")),o=[];return o.push(...l.map(c=>c===""?i:[i,c].join("/"))),r&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Zn(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rr(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const qn=/^:[\w-]+$/,Xn=3,Gn=2,Qn=1,er=10,tr=-2,ht=e=>e==="*";function nr(e,t){let n=e.split("/"),a=n.length;return n.some(ht)&&(a+=tr),t&&(a+=Gn),n.filter(r=>!ht(r)).reduce((r,i)=>r+(qn.test(i)?Xn:i===""?Qn:er),a)}function rr(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function ar(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],c=l===n.length-1,d=r==="/"?t:t.slice(r.length)||"/",f=ir({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},d);if(!f)return null;Object.assign(a,f.params);let p=o.route;i.push({params:a,pathname:B([r,f.pathname]),pathnameBase:dr(B([r,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(r=B([r,f.pathnameBase]))}return i}function ir(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=or(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce((d,f,p)=>{let{paramName:h,isOptional:C}=f;if(h==="*"){let L=o[p]||"";l=i.slice(0,i.length-L.length).replace(/(.)\/+$/,"$1")}const x=o[p];return C&&!x?d[h]=void 0:d[h]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function or(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ge(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function lr(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ge(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function ur(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?be(e):e;return{pathname:n?n.startsWith("/")?n:cr(n,t):t,search:pr(a),hash:mr(r)}}function cr(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Le(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fr(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ot(e,t){let n=fr(e);return t?n.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Nt(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=be(e):(r=_e({},e),U(!r.pathname||!r.pathname.includes("?"),Le("?","pathname","search",r)),U(!r.pathname||!r.pathname.includes("#"),Le("#","pathname","hash",r)),U(!r.search||!r.search.includes("#"),Le("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,o;if(l==null)o=n;else{let p=t.length-1;if(!a&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),p-=1;r.pathname=h.join("/")}o=p>=0?t[p]:"/"}let c=ur(r,o),d=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const B=e=>e.join("/").replace(/\/\/+/g,"/"),dr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,$t=["post","put","patch","delete"];new Set($t);const hr=["get",...$t];new Set(hr);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Me.apply(this,arguments)}const Q=s.createContext(null);Q.displayName="DataRouter";const ke=s.createContext(null);ke.displayName="DataRouterState";const vr=s.createContext(null);vr.displayName="Await";const D=s.createContext(null);D.displayName="Navigation";const Fe=s.createContext(null);Fe.displayName="Location";const V=s.createContext({outlet:null,matches:[],isDataRoute:!1});V.displayName="Route";const yr=s.createContext(null);yr.displayName="RouteError";function je(e,t){let{relative:n}=t===void 0?{}:t;We()||U(!1,"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=s.useContext(D),{hash:i,pathname:l,search:o}=ee(e,{relative:n}),c=l;return a!=="/"&&(c=l==="/"?a:B([a,l])),r.createHref({pathname:c,search:o,hash:i})}function We(){return s.useContext(Fe)!=null}function K(){return We()||U(!1,"useLocation() may be used only in the context of a <Router> component."),s.useContext(Fe).location}const _t="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ut(e){s.useContext(D).static||s.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=s.useContext(V);return e?Sr():br()}function br(){We()||U(!1,"useNavigate() may be used only in the context of a <Router> component.");let e=s.useContext(Q),{basename:t,future:n,navigator:a}=s.useContext(D),{matches:r}=s.useContext(V),{pathname:i}=K(),l=JSON.stringify(Ot(r,n.v7_relativeSplatPath)),o=s.useRef(!1);return Ut(()=>{o.current=!0}),s.useCallback(function(d,f){if(f===void 0&&(f={}),ge(o.current,_t),!o.current)return;if(typeof d=="number"){a.go(d);return}let p=Nt(d,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:B([t,p.pathname])),(f.replace?a.replace:a.push)(p,f.state,f)},[t,a,l,i,e])}function ee(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=s.useContext(D),{matches:r}=s.useContext(V),{pathname:i}=K(),l=JSON.stringify(Ot(r,a.v7_relativeSplatPath));return s.useMemo(()=>Nt(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}var Mt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mt||{}),Be=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Be||{});function At(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function wr(e){let t=s.useContext(Q);return t||U(!1,At(e)),t}function xr(e){let t=s.useContext(V);return t||U(!1,At(e)),t}function Dt(e){let t=xr(e),n=t.matches[t.matches.length-1];return n.route.id||U(!1,e+' can only be used on routes that contain a unique "id"'),n.route.id}function Er(){return Dt(Be.UseRouteId)}function Sr(){let{router:e}=wr(Mt.UseNavigateStable),t=Dt(Be.UseNavigateStable),n=s.useRef(!1);return Ut(()=>{n.current=!0}),s.useCallback(function(r,i){i===void 0&&(i={}),ge(n.current,_t),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Me({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vt||(vt={}));function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function He(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}var yt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yt||(yt={}));function gt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Pr(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce((d,f,p)=>{let{paramName:h,isOptional:C}=f;if(h==="*"){let L=o[p]||"";l=i.slice(0,i.length-L.length).replace(/(.)\/+$/,"$1")}const x=o[p];return C&&!x?d[h]=void 0:d[h]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function Pr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),He(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Rr=e=>e.join("/").replace(/\/\/+/g,"/"),It=["post","put","patch","delete"];new Set(It);const Cr=["get",...It];new Set(Cr);/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}function Ve(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const pe="get",me="application/x-www-form-urlencoded";function we(e){return e!=null&&typeof e.tagName=="string"}function Lr(e){return we(e)&&e.tagName.toLowerCase()==="button"}function Tr(e){return we(e)&&e.tagName.toLowerCase()==="form"}function Or(e){return we(e)&&e.tagName.toLowerCase()==="input"}function Nr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $r(e,t){return e.button===0&&(!t||t==="_self")&&!Nr(e)}let fe=null;function _r(){if(fe===null)try{new FormData(document.createElement("form"),0),fe=!1}catch{fe=!0}return fe}const Ur=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Te(e){return e!=null&&!Ur.has(e)?(He(!1,'"'+e+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` '+('and will default to "'+me+'"')),null):e}function Mr(e,t){let n,a,r,i,l;if(Tr(e)){let o=e.getAttribute("action");a=o?z(o,t):null,n=e.getAttribute("method")||pe,r=Te(e.getAttribute("enctype"))||me,i=new FormData(e)}else if(Lr(e)||Or(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||o.getAttribute("action");if(a=c?z(c,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||pe,r=Te(e.getAttribute("formenctype"))||Te(o.getAttribute("enctype"))||me,i=new FormData(o,e),!_r()){let{name:d,type:f,value:p}=e;if(f==="image"){let h=d?d+".":"";i.append(h+"x","0"),i.append(h+"y","0")}else d&&i.append(d,p)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pe,a=null,r=me,l=e}return i&&r==="text/plain"&&(l=i,i=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:i,body:l}}const Ar=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Dr=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ir=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"],kr="6";try{window.__reactRouterVersion=kr}catch{}const kt=s.createContext({isTransitioning:!1});kt.displayName="ViewTransition";const Fr=s.createContext(new Map);Fr.displayName="Fetchers";const jr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=s.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:i,replace:l,state:o,target:c,to:d,preventScrollReset:f,unstable_viewTransition:p}=t,h=Ve(t,Ar),{basename:C}=s.useContext(D),x,L=!1;if(typeof d=="string"&&Wr.test(d)&&(x=d,jr))try{let R=new URL(window.location.href),P=d.startsWith("//")?new URL(R.protocol+d):new URL(d),j=z(P.pathname,C);P.origin===R.origin&&j!=null?d=j+P.search+P.hash:L=!0}catch{He(!1,'<Link to="'+d+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let $=je(d,{relative:r}),_=Hr(d,{replace:l,state:o,target:c,preventScrollReset:f,relative:r,unstable_viewTransition:p});function S(R){a&&a(R),R.defaultPrevented||_(R)}return s.createElement("a",H({},h,{href:x||$,onClick:L||i?a:S,ref:n,target:c}))});Ke.displayName="Link";const Ft=s.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:r=!1,className:i="",end:l=!1,style:o,to:c,unstable_viewTransition:d,children:f}=t,p=Ve(t,Dr),h=ee(c,{relative:p.relative}),C=K(),x=s.useContext(ke),{navigator:L,basename:$}=s.useContext(D),_=x!=null&&qr(h)&&d===!0,S=L.encodeLocation?L.encodeLocation(h).pathname:h.pathname,R=C.pathname,P=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(R=R.toLowerCase(),P=P?P.toLowerCase():null,S=S.toLowerCase()),P&&$&&(P=z(P,$)||P);const j=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let Y=R===S||!l&&R.startsWith(S)&&R.charAt(j)==="/",w=P!=null&&(P===S||!l&&P.startsWith(S)&&P.charAt(S.length)==="/"),I={isActive:Y,isPending:w,isTransitioning:_},E=Y?a:void 0,k;typeof i=="function"?k=i(I):k=[i,Y?"active":null,w?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let W=typeof o=="function"?o(I):o;return s.createElement(Ke,H({},p,{"aria-current":E,className:k,ref:n,style:W,to:c,unstable_viewTransition:d}),typeof f=="function"?f(I):f)});Ft.displayName="NavLink";const Br=s.forwardRef((e,t)=>{let{fetcherKey:n,navigate:a,reloadDocument:r,replace:i,state:l,method:o=pe,action:c,onSubmit:d,relative:f,preventScrollReset:p,unstable_viewTransition:h}=e,C=Ve(e,Ir),x=Jr(),L=Zr(c,{relative:f}),$=o.toLowerCase()==="get"?"get":"post",_=S=>{if(d&&d(S),S.defaultPrevented)return;S.preventDefault();let R=S.nativeEvent.submitter,P=(R==null?void 0:R.getAttribute("formmethod"))||o;x(R||S.currentTarget,{fetcherKey:n,method:P,navigate:a,replace:i,state:l,relative:f,preventScrollReset:p,unstable_viewTransition:h})};return s.createElement("form",H({ref:t,method:$,action:L,onSubmit:r?d:_},C))});Br.displayName="Form";var ve;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ve||(ve={}));var bt;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bt||(bt={}));function zr(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function jt(e){let t=s.useContext(Q);return t||ze(!1,zr(e)),t}function Hr(e,t){let{target:n,replace:a,state:r,preventScrollReset:i,relative:l,unstable_viewTransition:o}=t===void 0?{}:t,c=gr(),d=K(),f=ee(e,{relative:l});return s.useCallback(p=>{if($r(p,n)){p.preventDefault();let h=a!==void 0?a:Ue(d)===Ue(f);c(e,{replace:h,state:r,preventScrollReset:i,relative:l,unstable_viewTransition:o})}},[d,c,f,a,r,n,e,i,l,o])}function Vr(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let Kr=0,Yr=()=>"__"+String(++Kr)+"__";function Jr(){let{router:e}=jt(ve.UseSubmit),{basename:t}=s.useContext(D),n=Er();return s.useCallback(function(a,r){r===void 0&&(r={}),Vr();let{action:i,method:l,encType:o,formData:c,body:d}=Mr(a,t);if(r.navigate===!1){let f=r.fetcherKey||Yr();e.fetch(f,n,r.action||i,{preventScrollReset:r.preventScrollReset,formData:c,body:d,formMethod:r.method||l,formEncType:r.encType||o,unstable_flushSync:r.unstable_flushSync})}else e.navigate(r.action||i,{preventScrollReset:r.preventScrollReset,formData:c,body:d,formMethod:r.method||l,formEncType:r.encType||o,replace:r.replace,state:r.state,fromRouteId:n,unstable_flushSync:r.unstable_flushSync,unstable_viewTransition:r.unstable_viewTransition})},[e,t,n])}function Zr(e,t){let{relative:n}=t===void 0?{}:t,{basename:a}=s.useContext(D),r=s.useContext(V);r||ze(!1,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),l=H({},ee(e||".",{relative:n})),o=K();if(e==null){l.search=o.search;let c=new URLSearchParams(l.search);c.has("index")&&c.get("index")===""&&(c.delete("index"),l.search=c.toString()?"?"+c.toString():"")}return(!e||e===".")&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(l.pathname=l.pathname==="/"?a:Rr([a,l.pathname])),Ue(l)}function qr(e,t){t===void 0&&(t={});let n=s.useContext(kt);n==null&&ze(!1,"`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=jt(ve.useViewTransitionState),r=ee(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=z(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=z(n.nextLocation.pathname,a)||n.nextLocation.pathname;return gt(r.pathname,l)!=null||gt(r.pathname,i)!=null}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Xr(e,t){if(e.id in t)return t[e.id];try{let n=await En(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch{return window.__remixContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(e){return e!=null&&typeof e.page=="string"}function Qr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ea(e,t,n){let a=await Promise.all(e.map(async r=>{let i=await Xr(t.routes[r.route.id],n);return i.links?i.links():[]}));return aa(a.flat(1).filter(Qr).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function wt(e,t,n,a,r,i){let l=Bt(e),o=(f,p)=>n[p]?f.route.id!==n[p].route.id:!0,c=(f,p)=>{var h;return n[p].pathname!==f.pathname||((h=n[p].route.path)===null||h===void 0?void 0:h.endsWith("*"))&&n[p].params["*"]!==f.params["*"]};return i==="data"&&r.search!==l.search?t.filter((f,p)=>{if(!a.routes[f.route.id].hasLoader)return!1;if(o(f,p)||c(f,p))return!0;if(f.route.shouldRevalidate){var C;let x=f.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((C=n[0])===null||C===void 0?void 0:C.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):t.filter((f,p)=>{let h=a.routes[f.route.id];return(i==="assets"||h.hasLoader)&&(o(f,p)||c(f,p))})}function ta(e,t,n){let a=Bt(e);return Wt(t.filter(r=>n.routes[r.route.id].hasLoader).map(r=>{let{pathname:i,search:l}=a,o=new URLSearchParams(l);return o.set("_data",r.route.id),`${i}?${o}`}))}function na(e,t){return Wt(e.map(n=>{let a=t.routes[n.route.id],r=[a.module];return a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function Wt(e){return[...new Set(e)]}function ra(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function aa(e,t){let n=new Set,a=new Set(t);return e.reduce((r,i)=>{if(t&&!Gr(i)&&i.as==="script"&&i.href&&a.has(i.href))return r;let o=JSON.stringify(ra(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function Bt(e){let t=be(e);return t.search===void 0&&(t.search=""),t}function ia(){let e=s.useContext(Q);return Ye(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function oa(){let e=s.useContext(ke);return Ye(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}const zt=s.createContext(void 0);zt.displayName="Remix";function Ht(){let e=s.useContext(zt);return Ye(e,"You must render this element inside a <Remix> element"),e}function Vt(e,t){let[n,a]=s.useState(!1),[r,i]=s.useState(!1),{onFocus:l,onBlur:o,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=s.useRef(null);s.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let x=$=>{$.forEach(_=>{i(_.isIntersecting)})},L=new IntersectionObserver(x,{threshold:.5});return p.current&&L.observe(p.current),()=>{L.disconnect()}}},[e]);let h=()=>{e==="intent"&&a(!0)},C=()=>{e==="intent"&&(a(!1),i(!1))};return s.useEffect(()=>{if(n){let x=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(x)}}},[n]),[r,p,{onFocus:Z(l,h),onBlur:Z(o,C),onMouseEnter:Z(c,h),onMouseLeave:Z(d,C),onTouchStart:Z(f,h)}]}const Kt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let la=s.forwardRef(({to:e,prefetch:t="none",...n},a)=>{let r=typeof e=="string"&&Kt.test(e),i=je(e),[l,o,c]=Vt(t,n);return s.createElement(s.Fragment,null,s.createElement(Ft,F({},n,c,{ref:Jt(a,o),to:e})),l&&!r?s.createElement(Yt,{page:i}):null)});la.displayName="NavLink";let sa=s.forwardRef(({to:e,prefetch:t="none",...n},a)=>{let r=typeof e=="string"&&Kt.test(e),i=je(e),[l,o,c]=Vt(t,n);return s.createElement(s.Fragment,null,s.createElement(Ke,F({},n,c,{ref:Jt(a,o),to:e})),l&&!r?s.createElement(Yt,{page:i}):null)});sa.displayName="Link";function Z(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Yt({page:e,...t}){let{router:n}=ia(),a=s.useMemo(()=>Jn(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?s.createElement(ca,F({page:e,matches:a},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ua(e){let{manifest:t,routeModules:n}=Ht(),[a,r]=s.useState([]);return s.useEffect(()=>{let i=!1;return ea(e,t,n).then(l=>{i||r(l)}),()=>{i=!0}},[e,t,n]),a}function ca({page:e,matches:t,...n}){let a=K(),{manifest:r}=Ht(),{matches:i}=oa(),l=s.useMemo(()=>wt(e,t,i,r,a,"data"),[e,t,i,r,a]),o=s.useMemo(()=>wt(e,t,i,r,a,"assets"),[e,t,i,r,a]),c=s.useMemo(()=>ta(e,l,r),[l,e,r]),d=s.useMemo(()=>na(o,r),[o,r]),f=ua(o);return s.createElement(s.Fragment,null,c.map(p=>s.createElement("link",F({key:p,rel:"prefetch",as:"fetch",href:p},n))),d.map(p=>s.createElement("link",F({key:p,rel:"modulepreload",href:p},n))),f.map(({key:p,link:h})=>s.createElement("link",F({key:p},h))))}function Jt(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}export{Vn as D,ya as F,sa as L,St as P,Wn as T};
