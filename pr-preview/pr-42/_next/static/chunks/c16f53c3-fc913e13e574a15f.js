"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{50913:function(e,t,n){n.d(t,{KK:function(){return W},NI:function(){return Y},Qu:function(){return K},XI:function(){return x},YF:function(){return S},bQ:function(){return A},e0:function(){return P},qs:function(){return H},tj:function(){return L}});var r,o=n(2265),u=n(40600),l=n(75224);n(54887);var i=n(94674);let c={...r||(r=n.t(o,2))},s=c.useInsertionEffect||(e=>e());function a(e){let t=o.useRef(()=>{});return s(()=>{t.current=e}),o.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var f="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;let d=!1,v=0,m=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+v++,p=c.useId||function(){let[e,t]=o.useState(()=>d?m():void 0);return f(()=>{null==e&&t(m())},[]),o.useEffect(()=>{d=!0},[]),e},E=o.createContext(null),g=o.createContext(null),y=()=>{var e;return(null==(e=o.useContext(E))?void 0:e.id)||null},b=()=>o.useContext(g);function R(e){return"data-floating-ui-"+e}function h(e){let t=(0,o.useRef)(e);return f(()=>{t.current=e}),t}let w=R("safe-polygon");function k(e,t,n){return n&&!(0,u.r)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function x(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:i,events:c,elements:s}=e,{enabled:d=!0,delay:v=0,handleClose:m=null,mouseOnly:p=!1,restMs:E=0,move:g=!0}=t,R=b(),x=y(),M=h(m),C=h(v),L=h(n),P=o.useRef(),K=o.useRef(-1),T=o.useRef(),I=o.useRef(-1),_=o.useRef(!0),D=o.useRef(!1),A=o.useRef(()=>{}),S=o.useRef(!1),W=o.useCallback(()=>{var e;let t=null==(e=i.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[i]);o.useEffect(()=>{if(d)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(K.current),clearTimeout(I.current),_.current=!0,S.current=!1)}},[d,c]),o.useEffect(()=>{if(!d||!M.current||!n)return;function e(e){W()&&r(!1,e,"hover")}let t=(0,u.Me)(s.floating).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[s.floating,n,r,d,M,W]);let B=o.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let o=k(C.current,"close",P.current);o&&!T.current?(clearTimeout(K.current),K.current=window.setTimeout(()=>r(!1,e,n),o)):t&&(clearTimeout(K.current),r(!1,e,n))},[C,r]),U=a(()=>{A.current(),T.current=void 0}),X=a(()=>{if(D.current){let e=(0,u.Me)(s.floating).body;e.style.pointerEvents="",e.removeAttribute(w),D.current=!1}}),Y=a(()=>!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type));o.useEffect(()=>{if(d&&(0,l.kK)(s.domReference)){var e;let r=s.domReference;return n&&r.addEventListener("mouseleave",c),null==(e=s.floating)||e.addEventListener("mouseleave",c),g&&r.addEventListener("mousemove",t,{once:!0}),r.addEventListener("mouseenter",t),r.addEventListener("mouseleave",o),()=>{var e;n&&r.removeEventListener("mouseleave",c),null==(e=s.floating)||e.removeEventListener("mouseleave",c),g&&r.removeEventListener("mousemove",t),r.removeEventListener("mouseenter",t),r.removeEventListener("mouseleave",o)}}function t(e){if(clearTimeout(K.current),_.current=!1,p&&!(0,u.r)(P.current)||E>0&&!k(C.current,"open"))return;let t=k(C.current,"open",P.current);t?K.current=window.setTimeout(()=>{L.current||r(!0,e,"hover")},t):n||r(!0,e,"hover")}function o(e){if(Y())return;A.current();let t=(0,u.Me)(s.floating);if(clearTimeout(I.current),S.current=!1,M.current&&i.current.floatingContext){n||clearTimeout(K.current),T.current=M.current({...i.current.floatingContext,tree:R,x:e.clientX,y:e.clientY,onClose(){X(),U(),Y()||B(e,!0,"safe-polygon")}});let r=T.current;t.addEventListener("mousemove",r),A.current=()=>{t.removeEventListener("mousemove",r)};return}"touch"===P.current&&(0,u.r3)(s.floating,e.relatedTarget)||B(e)}function c(e){!Y()&&i.current.floatingContext&&(null==M.current||M.current({...i.current.floatingContext,tree:R,x:e.clientX,y:e.clientY,onClose(){X(),U(),Y()||B(e)}})(e))}},[s,d,e,p,E,g,B,U,X,r,n,L,R,C,M,i,Y]),f(()=>{var e,t;if(d&&n&&null!=(e=M.current)&&e.__options.blockPointerEvents&&W()){D.current=!0;let e=s.floating;if((0,l.kK)(s.domReference)&&e){let n=(0,u.Me)(s.floating).body;n.setAttribute(w,"");let r=s.domReference,o=null==R||null==(t=R.nodesRef.current.find(e=>e.id===x))||null==(t=t.context)?void 0:t.elements.floating;return o&&(o.style.pointerEvents=""),n.style.pointerEvents="none",r.style.pointerEvents="auto",e.style.pointerEvents="auto",()=>{n.style.pointerEvents="",r.style.pointerEvents="",e.style.pointerEvents=""}}}},[d,n,x,s,R,M,W]),f(()=>{n||(P.current=void 0,S.current=!1,U(),X())},[n,U,X]),o.useEffect(()=>()=>{U(),clearTimeout(K.current),clearTimeout(I.current),X()},[d,s.domReference,U,X]);let j=o.useMemo(()=>{function e(e){P.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function o(){_.current||L.current||r(!0,t,"hover")}!(!p||(0,u.r)(P.current))||n||0===E||S.current&&e.movementX**2+e.movementY**2<2||(clearTimeout(I.current),"touch"===P.current?o():(S.current=!0,I.current=window.setTimeout(o,E)))}}},[p,r,n,L,E]),H=o.useMemo(()=>({onMouseEnter(){clearTimeout(K.current)},onMouseLeave(e){Y()||B(e.nativeEvent,!1)}}),[B,Y]);return o.useMemo(()=>d?{reference:j,floating:H}:{},[d,j,H])}let M=()=>{},C=o.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:M,setState:M,isInstantPhase:!1}),L=()=>o.useContext(C);function P(e){let{children:t,delay:n,timeoutMs:r=0}=e,[u,l]=o.useReducer((e,t)=>({...e,...t}),{delay:n,timeoutMs:r,initialDelay:n,currentId:null,isInstantPhase:!1}),i=o.useRef(null),c=o.useCallback(e=>{l({currentId:e})},[]);return f(()=>{u.currentId?null===i.current?i.current=u.currentId:u.isInstantPhase||l({isInstantPhase:!0}):(u.isInstantPhase&&l({isInstantPhase:!1}),i.current=null)},[u.currentId,u.isInstantPhase]),o.createElement(C.Provider,{value:o.useMemo(()=>({...u,setState:l,setCurrentId:c}),[u,c])},t)}function K(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,floatingId:o}=e,{id:u,enabled:l=!0}=t,i=null!=u?u:o,c=L(),{currentId:s,setCurrentId:a,initialDelay:d,setState:v,timeoutMs:m}=c;return f(()=>{l&&s&&(v({delay:{open:1,close:k(d,"close")}}),s!==i&&r(!1))},[l,i,r,v,s,d]),f(()=>{function e(){r(!1),v({delay:d,currentId:null})}if(l&&s&&!n&&s===i){if(m){let t=window.setTimeout(e,m);return()=>{clearTimeout(t)}}e()}},[l,n,v,s,i,r,d,m]),f(()=>{l&&a!==M&&n&&a(i)},[l,n,a,i]),c}function T(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let I={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},_={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},D=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function A(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,elements:i,dataRef:c}=e,{enabled:s=!0,escapeKey:f=!0,outsidePress:d=!0,outsidePressEvent:v="pointerdown",referencePress:m=!1,referencePressEvent:p="pointerdown",ancestorScroll:E=!1,bubbles:g,capture:y}=t,h=b(),w=a("function"==typeof d?d:()=>!1),k="function"==typeof d?w:d,x=o.useRef(!1),M=o.useRef(!1),{escapeKey:C,outsidePress:L}=D(g),{escapeKey:P,outsidePress:K}=D(y),A=o.useRef(!1),S=a(e=>{var t;if(!n||!s||!f||"Escape"!==e.key||A.current)return;let o=null==(t=c.current.floatingContext)?void 0:t.nodeId,l=h?T(h.nodesRef.current,o):[];if(!C&&(e.stopPropagation(),l.length>0)){let e=!0;if(l.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,u.MM)(e)?e.nativeEvent:e,"escape-key")}),W=a(e=>{var t;let n=()=>{var t;S(e),null==(t=(0,u.U9)(e))||t.removeEventListener("keydown",n)};null==(t=(0,u.U9)(e))||t.addEventListener("keydown",n)}),B=a(e=>{var t;let n=x.current;x.current=!1;let o=M.current;if(M.current=!1,"click"===v&&o||n||"function"==typeof k&&!k(e))return;let s=(0,u.U9)(e),a="["+R("inert")+"]",f=(0,u.Me)(i.floating).querySelectorAll(a),d=(0,l.kK)(s)?s:null;for(;d&&!(0,l.Py)(d);){let e=(0,l.Ow)(d);if((0,l.Py)(e)||!(0,l.kK)(e))break;d=e}if(f.length&&(0,l.kK)(s)&&!(0,u.ex)(s)&&!(0,u.r3)(s,i.floating)&&Array.from(f).every(e=>!(0,u.r3)(d,e)))return;if((0,l.Re)(s)&&Y){let t=s.clientWidth>0&&s.scrollWidth>s.clientWidth,n=s.clientHeight>0&&s.scrollHeight>s.clientHeight,r=n&&e.offsetX>s.clientWidth;if(n&&"rtl"===(0,l.Dx)(s).direction&&(r=e.offsetX<=s.offsetWidth-s.clientWidth),r||t&&e.offsetY>s.clientHeight)return}let m=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=h&&T(h.nodesRef.current,m).some(t=>{var n;return(0,u.Pe)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,u.Pe)(e,i.floating)||(0,u.Pe)(e,i.domReference)||p)return;let E=h?T(h.nodesRef.current,m):[];if(E.length>0){let e=!0;if(E.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),U=a(e=>{var t;let n=()=>{var t;B(e),null==(t=(0,u.U9)(e))||t.removeEventListener(v,n)};null==(t=(0,u.U9)(e))||t.addEventListener(v,n)});o.useEffect(()=>{if(!n||!s)return;c.current.__escapeKeyBubbles=C,c.current.__outsidePressBubbles=L;let e=-1;function t(e){r(!1,e,"ancestor-scroll")}function o(){window.clearTimeout(e),A.current=!0}function a(){e=window.setTimeout(()=>{A.current=!1},(0,l.Pf)()?5:0)}let d=(0,u.Me)(i.floating);f&&(d.addEventListener("keydown",P?W:S,P),d.addEventListener("compositionstart",o),d.addEventListener("compositionend",a)),k&&d.addEventListener(v,K?U:B,K);let m=[];return E&&((0,l.kK)(i.domReference)&&(m=(0,l.Kx)(i.domReference)),(0,l.kK)(i.floating)&&(m=m.concat((0,l.Kx)(i.floating))),!(0,l.kK)(i.reference)&&i.reference&&i.reference.contextElement&&(m=m.concat((0,l.Kx)(i.reference.contextElement)))),(m=m.filter(e=>{var t;return e!==(null==(t=d.defaultView)?void 0:t.visualViewport)})).forEach(e=>{e.addEventListener("scroll",t,{passive:!0})}),()=>{f&&(d.removeEventListener("keydown",P?W:S,P),d.removeEventListener("compositionstart",o),d.removeEventListener("compositionend",a)),k&&d.removeEventListener(v,K?U:B,K),m.forEach(e=>{e.removeEventListener("scroll",t)}),window.clearTimeout(e)}},[c,i,f,k,v,n,r,E,s,C,L,S,P,W,B,K,U]),o.useEffect(()=>{x.current=!1},[k,v]);let X=o.useMemo(()=>({onKeyDown:S,[I[p]]:e=>{m&&r(!1,e.nativeEvent,"reference-press")}}),[S,r,m,p]),Y=o.useMemo(()=>({onKeyDown:S,onMouseDown(){M.current=!0},onMouseUp(){M.current=!0},[_[v]]:()=>{x.current=!0}}),[S,v]);return o.useMemo(()=>s?{reference:X,floating:Y}:{},[s,X,Y])}function S(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=p(),l=o.useRef({}),[i]=o.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),c=null!=y(),[s,f]=o.useState(r.reference),d=a((e,t,r)=>{l.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),v=o.useMemo(()=>({setPositionReference:f}),[]),m=o.useMemo(()=>({reference:s||r.reference||null,floating:r.floating||null,domReference:r.reference}),[s,r.reference,r.floating]);return o.useMemo(()=>({dataRef:l,open:t,onOpenChange:d,elements:m,events:i,floatingId:u,refs:v}),[t,d,m,i,u,v])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[c,s]=o.useState(null),[d,v]=o.useState(null),m=(null==u?void 0:u.domReference)||c,E=o.useRef(null),g=b();f(()=>{m&&(E.current=m)},[m]);let R=(0,i.YF)({...e,elements:{...u,...d&&{reference:d}}}),h=o.useCallback(e=>{let t=(0,l.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;v(t),R.refs.setReference(t)},[R.refs]),w=o.useCallback(e=>{((0,l.kK)(e)||null===e)&&(E.current=e,s(e)),((0,l.kK)(R.refs.reference.current)||null===R.refs.reference.current||null!==e&&!(0,l.kK)(e))&&R.refs.setReference(e)},[R.refs]),k=o.useMemo(()=>({...R.refs,setReference:w,setPositionReference:h,domReference:E}),[R.refs,w,h]),x=o.useMemo(()=>({...R.elements,domReference:m}),[R.elements,m]),M=o.useMemo(()=>({...R,...r,refs:k,elements:x,nodeId:t}),[R,k,x,t,r]);return f(()=>{r.dataRef.current.floatingContext=M;let e=null==g?void 0:g.nodesRef.current.find(e=>e.id===t);e&&(e.context=M)}),o.useMemo(()=>({...R,context:M,refs:k,elements:x}),[R,k,x,M])}function W(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,events:i,dataRef:c,elements:s}=e,{enabled:a=!0,visibleOnly:f=!0}=t,d=o.useRef(!1),v=o.useRef(),m=o.useRef(!0);o.useEffect(()=>{if(!a)return;let e=(0,l.Jj)(s.domReference);function t(){!n&&(0,l.Re)(s.domReference)&&s.domReference===(0,u.AW)((0,u.Me)(s.domReference))&&(d.current=!0)}function r(){m.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}},[s.domReference,n,a]),o.useEffect(()=>{if(a)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;("reference-press"===t||"escape-key"===t)&&(d.current=!0)}},[i,a]),o.useEffect(()=>()=>{clearTimeout(v.current)},[]);let p=o.useMemo(()=>({onPointerDown(e){(0,u.cr)(e.nativeEvent)||(m.current=!1)},onMouseLeave(){d.current=!1},onFocus(e){if(d.current)return;let t=(0,u.U9)(e.nativeEvent);if(f&&(0,l.kK)(t))try{if((0,u.G6)()&&(0,u.V5)())throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!m.current&&!(0,u.j7)(t))return}r(!0,e.nativeEvent,"focus")},onBlur(e){d.current=!1;let t=e.relatedTarget,n=e.nativeEvent,o=(0,l.kK)(t)&&t.hasAttribute(R("focus-guard"))&&"outside"===t.getAttribute("data-type");v.current=window.setTimeout(()=>{var e;let l=(0,u.AW)(s.domReference?s.domReference.ownerDocument:document);if(t||l!==s.domReference){if((0,u.r3)(null==(e=c.current.floatingContext)?void 0:e.refs.floating.current,l)||(0,u.r3)(s.domReference,l)||o)return;r(!1,n,"focus")}})}}),[c,s.domReference,r,f]);return o.useMemo(()=>a?{reference:p}:{},[a,p])}let B="active",U="selected";function X(e,t,n){let r=new Map,o="item"===n,u=e;if(o&&e){let{[B]:t,[U]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1,"data-floating-ui-focusable":""},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(o&&[B,U].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var l;null==(l=r.get(n))||l.push(u),e[n]=function(){for(var e,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...o)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function Y(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),u=o.useCallback(t=>X(t,e,"reference"),t),l=o.useCallback(t=>X(t,e,"floating"),n),i=o.useCallback(t=>X(t,e,"item"),r);return o.useMemo(()=>({getReferenceProps:u,getFloatingProps:l,getItemProps:i}),[u,l,i])}let j=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function H(e,t){var n;void 0===t&&(t={});let{open:r,floatingId:u}=e,{enabled:l=!0,role:i="dialog"}=t,c=null!=(n=j.get(i))?n:i,s=p(),a=null!=y(),f=o.useMemo(()=>"tooltip"===c||"label"===i?{["aria-"+("label"===i?"labelledby":"describedby")]:r?u:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":"alertdialog"===c?"dialog":c,"aria-controls":r?u:void 0,..."listbox"===c&&{role:"combobox"},..."menu"===c&&{id:s},..."menu"===c&&a&&{role:"menuitem"},..."select"===i&&{"aria-autocomplete":"none"},..."combobox"===i&&{"aria-autocomplete":"list"}},[c,u,a,r,s,i]),d=o.useMemo(()=>{let e={id:u,...c&&{role:c}};return"tooltip"===c||"label"===i?e:{...e,..."menu"===c&&{"aria-labelledby":s}}},[c,u,s,i]),v=o.useCallback(e=>{let{active:t,selected:n}=e,r={role:"option",...t&&{id:u+"-option"}};switch(i){case"select":return{...r,"aria-selected":t&&n};case"combobox":return{...r,...t&&{"aria-selected":!0}}}return{}},[u,i]);return o.useMemo(()=>l?{reference:f,floating:d,item:v}:{},[l,f,d,v])}}}]);