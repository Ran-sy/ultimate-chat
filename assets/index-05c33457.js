(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cl={},QS={get exports(){return Cl},set exports(t){Cl=t}},Cc={},ve={},YS={get exports(){return ve},set exports(t){ve=t}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),XS=Symbol.for("react.portal"),JS=Symbol.for("react.fragment"),ZS=Symbol.for("react.strict_mode"),ek=Symbol.for("react.profiler"),tk=Symbol.for("react.provider"),nk=Symbol.for("react.context"),rk=Symbol.for("react.forward_ref"),ik=Symbol.for("react.suspense"),sk=Symbol.for("react.memo"),ok=Symbol.for("react.lazy"),sy=Symbol.iterator;function ak(t){return t===null||typeof t!="object"?null:(t=sy&&t[sy]||t["@@iterator"],typeof t=="function"?t:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,l0={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c0(){}c0.prototype=Hs.prototype;function Ip(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}var _p=Ip.prototype=new c0;_p.constructor=Ip;u0(_p,Hs.prototype);_p.isPureReactComponent=!0;var oy=Array.isArray,h0=Object.prototype.hasOwnProperty,Ep={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)h0.call(e,r)&&!d0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ja,type:t,key:s,ref:o,props:i,_owner:Ep.current}}function uk(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function lk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ay=/\/+/g;function Vh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lk(""+t.key):e.toString(36)}function il(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case XS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vh(o,0):r,oy(i)?(n="",t!=null&&(n=t.replace(ay,"$&/")+"/"),il(i,e,n,"",function(l){return l})):i!=null&&(Tp(i)&&(i=uk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",oy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Vh(s,a);o+=il(s,e,n,u,i)}else if(u=ak(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Vh(s,a++),o+=il(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bu(t,e,n){if(t==null)return t;var r=[],i=0;return il(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ck(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},sl={transition:null},hk={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:sl,ReactCurrentOwner:Ep};G.Children={map:bu,forEach:function(t,e,n){bu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bu(t,function(){e++}),e},toArray:function(t){return bu(t,function(e){return e})||[]},only:function(t){if(!Tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Hs;G.Fragment=JS;G.Profiler=ek;G.PureComponent=Ip;G.StrictMode=ZS;G.Suspense=ik;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=u0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)h0.call(e,u)&&!d0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ja,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:nk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tk,_context:t},t.Consumer=t};G.createElement=f0;G.createFactory=function(t){var e=f0.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:rk,render:t}};G.isValidElement=Tp;G.lazy=function(t){return{$$typeof:ok,_payload:{_status:-1,_result:t},_init:ck}};G.memo=function(t,e){return{$$typeof:sk,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=sl.transition;sl.transition={};try{t()}finally{sl.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return mt.current.useCallback(t,e)};G.useContext=function(t){return mt.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};G.useEffect=function(t,e){return mt.current.useEffect(t,e)};G.useId=function(){return mt.current.useId()};G.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return mt.current.useMemo(t,e)};G.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};G.useRef=function(t){return mt.current.useRef(t)};G.useState=function(t){return mt.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return mt.current.useTransition()};G.version="18.2.0";(function(t){t.exports=G})(YS);const dk=HS(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fk=ve,pk=Symbol.for("react.element"),mk=Symbol.for("react.fragment"),gk=Object.prototype.hasOwnProperty,yk=fk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vk={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gk.call(e,r)&&!vk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pk,type:t,key:s,ref:o,props:i,_owner:yk.current}}Cc.Fragment=mk;Cc.jsx=p0;Cc.jsxs=p0;(function(t){t.exports=Cc})(QS);const Fe=Cl.jsx,ua=Cl.jsxs;var Od={},Ld={},wk={get exports(){return Ld},set exports(t){Ld=t}},Mt={},Md={},Ik={get exports(){return Md},set exports(t){Md=t}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,j){var q=O.length;O.push(j);e:for(;0<q;){var Ee=q-1>>>1,Oe=O[Ee];if(0<i(Oe,j))O[Ee]=j,O[q]=Oe,q=Ee;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],q=O.pop();if(q!==j){O[0]=q;e:for(var Ee=0,Oe=O.length,Du=Oe>>>1;Ee<Du;){var Br=2*(Ee+1)-1,Uh=O[Br],zr=Br+1,xu=O[zr];if(0>i(Uh,q))zr<Oe&&0>i(xu,Uh)?(O[Ee]=xu,O[zr]=q,Ee=zr):(O[Ee]=Uh,O[Br]=q,Ee=Br);else if(zr<Oe&&0>i(xu,q))O[Ee]=xu,O[zr]=q,Ee=zr;else break e}}return j}function i(O,j){var q=O.sortIndex-j.sortIndex;return q!==0?q:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var j=n(l);j!==null;){if(j.callback===null)r(l);else if(j.startTime<=O)r(l),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(l)}}function _(O){if(w=!1,g(O),!y)if(n(u)!==null)y=!0,$h(C);else{var j=n(l);j!==null&&Fh(_,j.startTime-O)}}function C(O,j){y=!1,w&&(w=!1,m(L),L=-1),p=!0;var q=d;try{for(g(j),h=n(u);h!==null&&(!(h.expirationTime>j)||O&&!Wt());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,d=h.priorityLevel;var Oe=Ee(h.expirationTime<=j);j=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(u)&&r(u),g(j)}else r(u);h=n(u)}if(h!==null)var Du=!0;else{var Br=n(l);Br!==null&&Fh(_,Br.startTime-j),Du=!1}return Du}finally{h=null,d=q,p=!1}}var N=!1,D=null,L=-1,re=5,K=-1;function Wt(){return!(t.unstable_now()-K<re)}function fo(){if(D!==null){var O=t.unstable_now();K=O;var j=!0;try{j=D(!0,O)}finally{j?po():(N=!1,D=null)}}else N=!1}var po;if(typeof f=="function")po=function(){f(fo)};else if(typeof MessageChannel<"u"){var iy=new MessageChannel,GS=iy.port2;iy.port1.onmessage=fo,po=function(){GS.postMessage(null)}}else po=function(){b(fo,0)};function $h(O){D=O,N||(N=!0,po())}function Fh(O,j){L=b(function(){O(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,$h(C))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var q=d;d=j;try{return O()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=d;d=O;try{return j()}finally{d=q}},t.unstable_scheduleCallback=function(O,j,q){var Ee=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Ee+q:Ee):q=Ee,O){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=q+Oe,O={id:c++,callback:j,priorityLevel:O,startTime:q,expirationTime:Oe,sortIndex:-1},q>Ee?(O.sortIndex=q,e(l,O),n(u)===null&&O===n(l)&&(w?(m(L),L=-1):w=!0,Fh(_,q-Ee))):(O.sortIndex=Oe,e(u,O),y||p||(y=!0,$h(C))),O},t.unstable_shouldYield=Wt,t.unstable_wrapCallback=function(O){var j=d;return function(){var q=d;d=j;try{return O.apply(this,arguments)}finally{d=q}}}})(m0);(function(t){t.exports=m0})(Ik);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=ve,Pt=Md;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,la={};function Pi(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(la[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=Object.prototype.hasOwnProperty,_k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uy={},ly={};function Ek(t){return $d.call(ly,t)?!0:$d.call(uy,t)?!1:_k.test(t)?ly[t]=!0:(uy[t]=!0,!1)}function Tk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sk(t,e,n,r){if(e===null||typeof e>"u"||Tk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sp=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sp,kp);Je[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sp,kp);Je[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sp,kp);Je[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cp(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sk(e,n,i,r)&&(n=null),r||i===null?Ek(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ru=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),cy=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Bh;function Po(t){if(Bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+t}var zh=!1;function jh(t,e){if(!t||zh)return"";zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Po(t):""}function kk(t){switch(t.tag){case 5:return Po(t.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return t=jh(t.type,!1),t;case 11:return t=jh(t.type.render,!1),t;case 1:return t=jh(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Xi:return"Portal";case Fd:return"Profiler";case Np:return"StrictMode";case Ud:return"Suspense";case Vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case v0:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dp:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function Ck(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nk(t){var e=_0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){t._valueTracker||(t._valueTracker=Nk(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zd(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&Cp(t,"checked",e,!1)}function jd(t,e){T0(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Oo(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function S0(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function py(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ou,C0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ou=Ou||document.createElement("div"),Ou.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ou.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ak=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){Ak.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=N0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dk=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gd(t,e){if(e){if(Dk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,ps=null,ms=null;function my(t){if(t=tu(t)){if(typeof Yd!="function")throw Error(S(280));var e=t.stateNode;e&&(e=bc(e),Yd(t.stateNode,t.type,e))}}function D0(t){ps?ms?ms.push(t):ms=[t]:ps=t}function x0(){if(ps){var t=ps,e=ms;if(ms=ps=null,my(t),e)for(t=0;t<e.length;t++)my(e[t])}}function b0(t,e){return t(e)}function R0(){}var qh=!1;function P0(t,e,n){if(qh)return t(e,n);qh=!0;try{return b0(t,e,n)}finally{qh=!1,(ps!==null||ms!==null)&&(R0(),x0())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Xd=!1;if(On)try{var go={};Object.defineProperty(go,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Xd=!1}function xk(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var qo=!1,Al=null,Dl=!1,Jd=null,bk={onError:function(t){qo=!0,Al=t}};function Rk(t,e,n,r,i,s,o,a,u){qo=!1,Al=null,xk.apply(bk,arguments)}function Pk(t,e,n,r,i,s,o,a,u){if(Rk.apply(this,arguments),qo){if(qo){var l=Al;qo=!1,Al=null}else throw Error(S(198));Dl||(Dl=!0,Jd=l)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gy(t){if(Oi(t)!==t)throw Error(S(188))}function Ok(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gy(i),t;if(s===r)return gy(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function L0(t){return t=Ok(t),t!==null?M0(t):null}function M0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M0(t);if(e!==null)return e;t=t.sibling}return null}var $0=Pt.unstable_scheduleCallback,yy=Pt.unstable_cancelCallback,Lk=Pt.unstable_shouldYield,Mk=Pt.unstable_requestPaint,Te=Pt.unstable_now,$k=Pt.unstable_getCurrentPriorityLevel,bp=Pt.unstable_ImmediatePriority,F0=Pt.unstable_UserBlockingPriority,xl=Pt.unstable_NormalPriority,Fk=Pt.unstable_LowPriority,U0=Pt.unstable_IdlePriority,Nc=null,pn=null;function Uk(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Nc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:zk,Vk=Math.log,Bk=Math.LN2;function zk(t){return t>>>=0,t===0?32:31-(Vk(t)/Bk|0)|0}var Lu=64,Mu=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function jk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=jk(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=Lu;return Lu<<=1,!(Lu&4194240)&&(Lu=64),t}function Kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function Kk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,Pp,j0,q0,K0,ef=!1,$u=[],ur=null,lr=null,cr=null,da=new Map,fa=new Map,er=[],Wk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vy(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=tu(e),e!==null&&Pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gk(t,e,n,r,i){switch(e){case"focusin":return ur=yo(ur,t,e,n,r,i),!0;case"dragenter":return lr=yo(lr,t,e,n,r,i),!0;case"mouseover":return cr=yo(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,yo(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,yo(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function W0(t){var e=Zr(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,K0(t.priority,function(){j0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qd=r,n.target.dispatchEvent(r),Qd=null}else return e=tu(n),e!==null&&Pp(e),t.blockedOn=n,!1;e.shift()}return!0}function wy(t,e,n){ol(t)&&n.delete(e)}function Hk(){ef=!1,ur!==null&&ol(ur)&&(ur=null),lr!==null&&ol(lr)&&(lr=null),cr!==null&&ol(cr)&&(cr=null),da.forEach(wy),fa.forEach(wy)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Hk)))}function pa(t){function e(i){return vo(i,t)}if(0<$u.length){vo($u[0],t);for(var n=1;n<$u.length;n++){var r=$u[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&vo(ur,t),lr!==null&&vo(lr,t),cr!==null&&vo(cr,t),da.forEach(e),fa.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&er.shift()}var gs=Bn.ReactCurrentBatchConfig,Rl=!0;function Qk(t,e,n,r){var i=ee,s=gs.transition;gs.transition=null;try{ee=1,Op(t,e,n,r)}finally{ee=i,gs.transition=s}}function Yk(t,e,n,r){var i=ee,s=gs.transition;gs.transition=null;try{ee=4,Op(t,e,n,r)}finally{ee=i,gs.transition=s}}function Op(t,e,n,r){if(Rl){var i=tf(t,e,n,r);if(i===null)td(t,e,r,Pl,n),vy(t,r);else if(Gk(i,t,e,n,r))r.stopPropagation();else if(vy(t,r),e&4&&-1<Wk.indexOf(t)){for(;i!==null;){var s=tu(i);if(s!==null&&z0(s),s=tf(t,e,n,r),s===null&&td(t,e,r,Pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else td(t,e,r,null,n)}}var Pl=null;function tf(t,e,n,r){if(Pl=null,t=xp(r),t=Zr(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function G0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($k()){case bp:return 1;case F0:return 4;case xl:case Fk:return 16;case U0:return 536870912;default:return 16}default:return 16}}var ir=null,Lp=null,al=null;function H0(){if(al)return al;var t,e=Lp,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return al=i.slice(t,1<r?1-r:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fu(){return!0}function Iy(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fu:Iy,this.isPropagationStopped=Iy,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fu)},persist:function(){},isPersistent:Fu}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mp=$t(Qs),eu=pe({},Qs,{view:0,detail:0}),Xk=$t(eu),Wh,Gh,wo,Ac=pe({},eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Wh=t.screenX-wo.screenX,Gh=t.screenY-wo.screenY):Gh=Wh=0,wo=t),Wh)},movementY:function(t){return"movementY"in t?t.movementY:Gh}}),_y=$t(Ac),Jk=pe({},Ac,{dataTransfer:0}),Zk=$t(Jk),eC=pe({},eu,{relatedTarget:0}),Hh=$t(eC),tC=pe({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),nC=$t(tC),rC=pe({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iC=$t(rC),sC=pe({},Qs,{data:0}),Ey=$t(sC),oC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uC[t])?!!e[t]:!1}function $p(){return lC}var cC=pe({},eu,{key:function(t){if(t.key){var e=oC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hC=$t(cC),dC=pe({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ty=$t(dC),fC=pe({},eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),pC=$t(fC),mC=pe({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gC=$t(mC),yC=pe({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vC=$t(yC),wC=[9,13,27,32],Fp=On&&"CompositionEvent"in window,Ko=null;On&&"documentMode"in document&&(Ko=document.documentMode);var IC=On&&"TextEvent"in window&&!Ko,Q0=On&&(!Fp||Ko&&8<Ko&&11>=Ko),Sy=String.fromCharCode(32),ky=!1;function Y0(t,e){switch(t){case"keyup":return wC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function _C(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(ky=!0,Sy);case"textInput":return t=e.data,t===Sy&&ky?null:t;default:return null}}function EC(t,e){if(Zi)return t==="compositionend"||!Fp&&Y0(t,e)?(t=H0(),al=Lp=ir=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TC[t.type]:e==="textarea"}function J0(t,e,n,r){D0(r),e=Ol(e,"onChange"),0<e.length&&(n=new Mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wo=null,ma=null;function SC(t){lI(t,0)}function Dc(t){var e=ns(t);if(E0(e))return t}function kC(t,e){if(t==="change")return e}var Z0=!1;if(On){var Qh;if(On){var Yh="oninput"in document;if(!Yh){var Ny=document.createElement("div");Ny.setAttribute("oninput","return;"),Yh=typeof Ny.oninput=="function"}Qh=Yh}else Qh=!1;Z0=Qh&&(!document.documentMode||9<document.documentMode)}function Ay(){Wo&&(Wo.detachEvent("onpropertychange",eI),ma=Wo=null)}function eI(t){if(t.propertyName==="value"&&Dc(ma)){var e=[];J0(e,ma,t,xp(t)),P0(SC,e)}}function CC(t,e,n){t==="focusin"?(Ay(),Wo=e,ma=n,Wo.attachEvent("onpropertychange",eI)):t==="focusout"&&Ay()}function NC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(ma)}function AC(t,e){if(t==="click")return Dc(e)}function DC(t,e){if(t==="input"||t==="change")return Dc(e)}function xC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:xC;function ga(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$d.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xy(t,e){var n=Dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dy(n)}}function tI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nI(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bC(t){var e=nI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tI(n.ownerDocument.documentElement,n)){if(r!==null&&Up(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xy(n,s);var o=xy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RC=On&&"documentMode"in document&&11>=document.documentMode,es=null,nf=null,Go=null,rf=!1;function by(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||es==null||es!==Nl(r)||(r=es,"selectionStart"in r&&Up(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&ga(Go,r)||(Go=r,r=Ol(nf,"onSelect"),0<r.length&&(e=new Mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function Uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:Uu("Animation","AnimationEnd"),animationiteration:Uu("Animation","AnimationIteration"),animationstart:Uu("Animation","AnimationStart"),transitionend:Uu("Transition","TransitionEnd")},Xh={},rI={};On&&(rI=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function xc(t){if(Xh[t])return Xh[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rI)return Xh[t]=e[n];return t}var iI=xc("animationend"),sI=xc("animationiteration"),oI=xc("animationstart"),aI=xc("transitionend"),uI=new Map,Ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){uI.set(t,e),Pi(e,[t])}for(var Jh=0;Jh<Ry.length;Jh++){var Zh=Ry[Jh],PC=Zh.toLowerCase(),OC=Zh[0].toUpperCase()+Zh.slice(1);br(PC,"on"+OC)}br(iI,"onAnimationEnd");br(sI,"onAnimationIteration");br(oI,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(aI,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Pk(r,e,void 0,t),t.currentTarget=null}function lI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,l),s=u}}}if(Dl)throw t=Jd,Dl=!1,Jd=null,t}function ie(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var r=t+"__bubble";n.has(r)||(cI(e,t,2,!1),n.add(r))}function ed(t,e,n){var r=0;e&&(r|=4),cI(n,t,r,e)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Vu]){t[Vu]=!0,y0.forEach(function(n){n!=="selectionchange"&&(LC.has(n)||ed(n,!1,t),ed(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vu]||(e[Vu]=!0,ed("selectionchange",!1,e))}}function cI(t,e,n,r){switch(G0(e)){case 1:var i=Qk;break;case 4:i=Yk;break;default:i=Op}n=i.bind(null,e,n,t),i=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P0(function(){var l=s,c=xp(n),h=[];e:{var d=uI.get(t);if(d!==void 0){var p=Mp,y=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":p=hC;break;case"focusin":y="focus",p=Hh;break;case"focusout":y="blur",p=Hh;break;case"beforeblur":case"afterblur":p=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pC;break;case iI:case sI:case oI:p=nC;break;case aI:p=gC;break;case"scroll":p=Xk;break;case"wheel":p=vC;break;case"copy":case"cut":case"paste":p=iC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ty}var w=(e&4)!==0,b=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var f=l,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=ha(f,m),_!=null&&w.push(va(f,_,g)))),b)break;f=f.return}0<w.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qd&&(y=n.relatedTarget||n.fromElement)&&(Zr(y)||y[Ln]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=l,y=y?Zr(y):null,y!==null&&(b=Oi(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=l),p!==y)){if(w=_y,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Ty,_="onPointerLeave",m="onPointerEnter",f="pointer"),b=p==null?d:ns(p),g=y==null?d:ns(y),d=new w(_,f+"leave",p,n,c),d.target=b,d.relatedTarget=g,_=null,Zr(c)===l&&(w=new w(m,f+"enter",y,n,c),w.target=g,w.relatedTarget=b,_=w),b=_,p&&y)t:{for(w=p,m=y,f=0,g=w;g;g=qi(g))f++;for(g=0,_=m;_;_=qi(_))g++;for(;0<f-g;)w=qi(w),f--;for(;0<g-f;)m=qi(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=qi(w),m=qi(m)}w=null}else w=null;p!==null&&Oy(h,d,p,w,!1),y!==null&&b!==null&&Oy(h,b,y,w,!0)}}e:{if(d=l?ns(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=kC;else if(Cy(d))if(Z0)C=DC;else{C=NC;var N=CC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=AC);if(C&&(C=C(t,l))){J0(h,C,n,c);break e}N&&N(t,d,l),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&qd(d,"number",d.value)}switch(N=l?ns(l):window,t){case"focusin":(Cy(N)||N.contentEditable==="true")&&(es=N,nf=l,Go=null);break;case"focusout":Go=nf=es=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,by(h,n,c);break;case"selectionchange":if(RC)break;case"keydown":case"keyup":by(h,n,c)}var D;if(Fp)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Zi?Y0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Q0&&n.locale!=="ko"&&(Zi||L!=="onCompositionStart"?L==="onCompositionEnd"&&Zi&&(D=H0()):(ir=c,Lp="value"in ir?ir.value:ir.textContent,Zi=!0)),N=Ol(l,L),0<N.length&&(L=new Ey(L,t,null,n,c),h.push({event:L,listeners:N}),D?L.data=D:(D=X0(n),D!==null&&(L.data=D)))),(D=IC?_C(t,n):EC(t,n))&&(l=Ol(l,"onBeforeInput"),0<l.length&&(c=new Ey("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=D))}lI(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=ha(n,s),u!=null&&o.unshift(va(n,u,a))):i||(u=ha(n,s),u!=null&&o.push(va(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MC=/\r\n?/g,$C=/\u0000|\uFFFD/g;function Ly(t){return(typeof t=="string"?t:""+t).replace(MC,`
`).replace($C,"")}function Bu(t,e,n){if(e=Ly(e),Ly(t)!==e&&n)throw Error(S(425))}function Ll(){}var sf=null,of=null;function af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,FC=typeof clearTimeout=="function"?clearTimeout:void 0,My=typeof Promise=="function"?Promise:void 0,UC=typeof queueMicrotask=="function"?queueMicrotask:typeof My<"u"?function(t){return My.resolve(null).then(t).catch(VC)}:uf;function VC(t){setTimeout(function(){throw t})}function nd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ys,wa="__reactProps$"+Ys,Ln="__reactContainer$"+Ys,lf="__reactEvents$"+Ys,BC="__reactListeners$"+Ys,zC="__reactHandles$"+Ys;function Zr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$y(t);t!==null;){if(n=t[sn])return n;t=$y(t)}return e}t=n,n=t.parentNode}return null}function tu(t){return t=t[sn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function bc(t){return t[wa]||null}var cf=[],rs=-1;function Rr(t){return{current:t}}function oe(t){0>rs||(t.current=cf[rs],cf[rs]=null,rs--)}function ne(t,e){rs++,cf[rs]=t.current,t.current=e}var wr={},at=Rr(wr),St=Rr(!1),pi=wr;function ks(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Ml(){oe(St),oe(at)}function Fy(t,e,n){if(at.current!==wr)throw Error(S(168));ne(at,e),ne(St,n)}function hI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Ck(t)||"Unknown",i));return pe({},n,r)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,pi=at.current,ne(at,t),ne(St,St.current),!0}function Uy(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=hI(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,oe(St),oe(at),ne(at,t)):oe(St),ne(St,n)}var kn=null,Rc=!1,rd=!1;function dI(t){kn===null?kn=[t]:kn.push(t)}function jC(t){Rc=!0,dI(t)}function Pr(){if(!rd&&kn!==null){rd=!0;var t=0,e=ee;try{var n=kn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Rc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),$0(bp,Pr),i}finally{ee=e,rd=!1}}return null}var is=[],ss=0,Fl=null,Ul=0,Ft=[],Ut=0,mi=null,Cn=1,Nn="";function qr(t,e){is[ss++]=Ul,is[ss++]=Fl,Fl=t,Ul=e}function fI(t,e,n){Ft[Ut++]=Cn,Ft[Ut++]=Nn,Ft[Ut++]=mi,mi=t;var r=Cn;t=Nn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-Jt(e)+i|n<<i|r,Nn=s+t}else Cn=1<<s|n<<i|r,Nn=t}function Vp(t){t.return!==null&&(qr(t,1),fI(t,1,0))}function Bp(t){for(;t===Fl;)Fl=is[--ss],is[ss]=null,Ul=is[--ss],is[ss]=null;for(;t===mi;)mi=Ft[--Ut],Ft[Ut]=null,Nn=Ft[--Ut],Ft[Ut]=null,Cn=Ft[--Ut],Ft[Ut]=null}var Rt=null,xt=null,ue=!1,Yt=null;function pI(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,xt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:Cn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,xt=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function df(t){if(ue){var e=xt;if(e){var n=e;if(!Vy(t,e)){if(hf(t))throw Error(S(418));e=hr(n.nextSibling);var r=Rt;e&&Vy(t,e)?pI(r,n):(t.flags=t.flags&-4097|2,ue=!1,Rt=t)}}else{if(hf(t))throw Error(S(418));t.flags=t.flags&-4097|2,ue=!1,Rt=t}}}function By(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function zu(t){if(t!==Rt)return!1;if(!ue)return By(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!af(t.type,t.memoizedProps)),e&&(e=xt)){if(hf(t))throw mI(),Error(S(418));for(;e;)pI(t,e),e=hr(e.nextSibling)}if(By(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Rt?hr(t.stateNode.nextSibling):null;return!0}function mI(){for(var t=xt;t;)t=hr(t.nextSibling)}function Cs(){xt=Rt=null,ue=!1}function zp(t){Yt===null?Yt=[t]:Yt.push(t)}var qC=Bn.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Vl=Rr(null),Bl=null,os=null,jp=null;function qp(){jp=os=Bl=null}function Kp(t){var e=Vl.current;oe(Vl),t._currentValue=e}function ff(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Bl=t,jp=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(jp!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(Bl===null)throw Error(S(308));os=t,Bl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var ei=null;function Wp(t){ei===null?ei=[t]:ei.push(t)}function gI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Wp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rp(t,n)}}function zy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=pe({},h,d);break e;case 2:Zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=h}}function jy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var vI=new g0.Component().refs;function pf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=pr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Zt(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=pr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Zt(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=pr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Zt(e,t,r,n),ll(e,t,r))}};function qy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function wI(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=kt(e)?pi:at.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function mf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vI,Gp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=kt(e)?pi:at.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pc.enqueueReplaceState(i,i.state,null),zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ju(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wy(t){var e=t._init;return e(t._payload)}function II(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=mr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=cd(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function u(m,f,g,_){var C=g.type;return C===Ji?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jn&&Wy(C)===f.type)?(_=i(f,g.props),_.ref=Io(m,f,g),_.return=m,_):(_=ml(g.type,g.key,g.props,null,m.mode,_),_.ref=Io(m,f,g),_.return=m,_)}function l(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=hd(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,C){return f===null||f.tag!==7?(f=ui(g,m.mode,_,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=cd(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ru:return g=ml(f.type,f.key,f.props,null,m.mode,g),g.ref=Io(m,null,f),g.return=m,g;case Xi:return f=hd(f,m.mode,g),f.return=m,f;case Jn:var _=f._init;return h(m,_(f._payload),g)}if(Oo(f)||mo(f))return f=ui(f,m.mode,g,null),f.return=m,f;ju(m,f)}return null}function d(m,f,g,_){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ru:return g.key===C?u(m,f,g,_):null;case Xi:return g.key===C?l(m,f,g,_):null;case Jn:return C=g._init,d(m,f,C(g._payload),_)}if(Oo(g)||mo(g))return C!==null?null:c(m,f,g,_,null);ju(m,g)}return null}function p(m,f,g,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ru:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,C);case Xi:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,C);case Jn:var N=_._init;return p(m,f,g,N(_._payload),C)}if(Oo(_)||mo(_))return m=m.get(g)||null,c(f,m,_,C,null);ju(f,_)}return null}function y(m,f,g,_){for(var C=null,N=null,D=f,L=f=0,re=null;D!==null&&L<g.length;L++){D.index>L?(re=D,D=null):re=D.sibling;var K=d(m,D,g[L],_);if(K===null){D===null&&(D=re);break}t&&D&&K.alternate===null&&e(m,D),f=s(K,f,L),N===null?C=K:N.sibling=K,N=K,D=re}if(L===g.length)return n(m,D),ue&&qr(m,L),C;if(D===null){for(;L<g.length;L++)D=h(m,g[L],_),D!==null&&(f=s(D,f,L),N===null?C=D:N.sibling=D,N=D);return ue&&qr(m,L),C}for(D=r(m,D);L<g.length;L++)re=p(D,m,L,g[L],_),re!==null&&(t&&re.alternate!==null&&D.delete(re.key===null?L:re.key),f=s(re,f,L),N===null?C=re:N.sibling=re,N=re);return t&&D.forEach(function(Wt){return e(m,Wt)}),ue&&qr(m,L),C}function w(m,f,g,_){var C=mo(g);if(typeof C!="function")throw Error(S(150));if(g=C.call(g),g==null)throw Error(S(151));for(var N=C=null,D=f,L=f=0,re=null,K=g.next();D!==null&&!K.done;L++,K=g.next()){D.index>L?(re=D,D=null):re=D.sibling;var Wt=d(m,D,K.value,_);if(Wt===null){D===null&&(D=re);break}t&&D&&Wt.alternate===null&&e(m,D),f=s(Wt,f,L),N===null?C=Wt:N.sibling=Wt,N=Wt,D=re}if(K.done)return n(m,D),ue&&qr(m,L),C;if(D===null){for(;!K.done;L++,K=g.next())K=h(m,K.value,_),K!==null&&(f=s(K,f,L),N===null?C=K:N.sibling=K,N=K);return ue&&qr(m,L),C}for(D=r(m,D);!K.done;L++,K=g.next())K=p(D,m,L,K.value,_),K!==null&&(t&&K.alternate!==null&&D.delete(K.key===null?L:K.key),f=s(K,f,L),N===null?C=K:N.sibling=K,N=K);return t&&D.forEach(function(fo){return e(m,fo)}),ue&&qr(m,L),C}function b(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Ji&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ru:e:{for(var C=g.key,N=f;N!==null;){if(N.key===C){if(C=g.type,C===Ji){if(N.tag===7){n(m,N.sibling),f=i(N,g.props.children),f.return=m,m=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jn&&Wy(C)===N.type){n(m,N.sibling),f=i(N,g.props),f.ref=Io(m,N,g),f.return=m,m=f;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===Ji?(f=ui(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=ml(g.type,g.key,g.props,null,m.mode,_),_.ref=Io(m,f,g),_.return=m,m=_)}return o(m);case Xi:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=hd(g,m.mode,_),f.return=m,m=f}return o(m);case Jn:return N=g._init,b(m,f,N(g._payload),_)}if(Oo(g))return y(m,f,g,_);if(mo(g))return w(m,f,g,_);ju(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=cd(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return b}var Ns=II(!0),_I=II(!1),nu={},mn=Rr(nu),Ia=Rr(nu),_a=Rr(nu);function ti(t){if(t===nu)throw Error(S(174));return t}function Hp(t,e){switch(ne(_a,e),ne(Ia,t),ne(mn,nu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}oe(mn),ne(mn,e)}function As(){oe(mn),oe(Ia),oe(_a)}function EI(t){ti(_a.current);var e=ti(mn.current),n=Wd(e,t.type);e!==n&&(ne(Ia,t),ne(mn,n))}function Qp(t){Ia.current===t&&(oe(mn),oe(Ia))}var de=Rr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var id=[];function Yp(){for(var t=0;t<id.length;t++)id[t]._workInProgressVersionPrimary=null;id.length=0}var cl=Bn.ReactCurrentDispatcher,sd=Bn.ReactCurrentBatchConfig,gi=0,fe=null,De=null,Me=null,ql=!1,Ho=!1,Ea=0,KC=0;function nt(){throw Error(S(321))}function Xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Jp(t,e,n,r,i,s){if(gi=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?QC:YC,t=n(r,i),Ho){s=0;do{if(Ho=!1,Ea=0,25<=s)throw Error(S(301));s+=1,Me=De=null,e.updateQueue=null,cl.current=XC,t=n(r,i)}while(Ho)}if(cl.current=Kl,e=De!==null&&De.next!==null,gi=0,Me=De=fe=null,ql=!1,e)throw Error(S(300));return t}function Zp(){var t=Ea!==0;return Ea=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?fe.memoizedState=Me=t:Me=Me.next=t,Me}function qt(){if(De===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Me===null?fe.memoizedState:Me.next;if(e!==null)Me=e,De=t;else{if(t===null)throw Error(S(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?fe.memoizedState=Me=t:Me=Me.next=t}return Me}function Ta(t,e){return typeof e=="function"?e(t):e}function od(t){var e=qt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((gi&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,fe.lanes|=c,yi|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,en(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ad(t){var e=qt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function TI(){}function SI(t,e){var n=fe,r=qt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,em(NI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Sa(9,CI.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(S(349));gi&30||kI(n,e,i)}return i}function kI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function CI(t,e,n,r){e.value=n,e.getSnapshot=r,AI(e)&&DI(t)}function NI(t,e,n){return n(function(){AI(e)&&DI(t)})}function AI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function DI(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function Gy(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=HC.bind(null,fe,t),[e.memoizedState,t]}function Sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xI(){return qt().memoizedState}function hl(t,e,n,r){var i=rn();fe.flags|=t,i.memoizedState=Sa(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Xp(r,o.deps)){i.memoizedState=Sa(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Sa(1|e,n,s,r)}function Hy(t,e){return hl(8390656,8,t,e)}function em(t,e){return Oc(2048,8,t,e)}function bI(t,e){return Oc(4,2,t,e)}function RI(t,e){return Oc(4,4,t,e)}function PI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function OI(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,PI.bind(null,e,t),n)}function tm(){}function LI(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MI(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $I(t,e,n){return gi&21?(en(n,e)||(n=V0(),fe.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function WC(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=sd.transition;sd.transition={};try{t(!1),e()}finally{ee=n,sd.transition=r}}function FI(){return qt().memoizedState}function GC(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},UI(t))VI(e,n);else if(n=gI(t,e,n,r),n!==null){var i=dt();Zt(n,t,r,i),BI(n,e,r)}}function HC(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(UI(t))VI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var u=e.interleaved;u===null?(i.next=i,Wp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=gI(t,e,i,r),n!==null&&(i=dt(),Zt(n,t,r,i),BI(n,e,r))}}function UI(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function VI(t,e){Ho=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rp(t,n)}}var Kl={readContext:jt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},QC={readContext:jt,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,PI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GC.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Gy,useDebugValue:tm,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Gy(!1),e=t[0];return t=WC.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=rn();if(ue){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ue===null)throw Error(S(349));gi&30||kI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hy(NI.bind(null,r,s,t),[t]),r.flags|=2048,Sa(9,CI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Ue.identifierPrefix;if(ue){var n=Nn,r=Cn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YC={readContext:jt,useCallback:LI,useContext:jt,useEffect:em,useImperativeHandle:OI,useInsertionEffect:bI,useLayoutEffect:RI,useMemo:MI,useReducer:od,useRef:xI,useState:function(){return od(Ta)},useDebugValue:tm,useDeferredValue:function(t){var e=qt();return $I(e,De.memoizedState,t)},useTransition:function(){var t=od(Ta)[0],e=qt().memoizedState;return[t,e]},useMutableSource:TI,useSyncExternalStore:SI,useId:FI,unstable_isNewReconciler:!1},XC={readContext:jt,useCallback:LI,useContext:jt,useEffect:em,useImperativeHandle:OI,useInsertionEffect:bI,useLayoutEffect:RI,useMemo:MI,useReducer:ad,useRef:xI,useState:function(){return ad(Ta)},useDebugValue:tm,useDeferredValue:function(t){var e=qt();return De===null?e.memoizedState=t:$I(e,De.memoizedState,t)},useTransition:function(){var t=ad(Ta)[0],e=qt().memoizedState;return[t,e]},useMutableSource:TI,useSyncExternalStore:SI,useId:FI,unstable_isNewReconciler:!1};function Ds(t,e){try{var n="",r=e;do n+=kk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JC=typeof WeakMap=="function"?WeakMap:Map;function zI(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gl||(Gl=!0,Cf=r),gf(t,e)},n}function jI(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gf(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dN.bind(null,t,e,n),e.then(t,t))}function Yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var ZC=Bn.ReactCurrentOwner,It=!1;function ut(t,e,n,r){e.child=t===null?_I(e,null,n,r):Ns(e,t.child,n,r)}function Jy(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=Jp(t,e,n,r,s,i),n=Zp(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ue&&n&&Vp(e),e.flags|=1,ut(t,e,r,i),e.child)}function Zy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qI(t,e,s,r,i)):(t=ml(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function qI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,$n(t,e,i)}return yf(t,e,n,r,i)}function KI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(us,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(us,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(us,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(us,At),At|=r;return ut(t,e,i,n),e.child}function WI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,r,i){var s=kt(n)?pi:at.current;return s=ks(e,s),ys(e,i),n=Jp(t,e,n,r,s,i),r=Zp(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ue&&r&&Vp(e),e.flags|=1,ut(t,e,n,i),e.child)}function ev(t,e,n,r,i){if(kt(n)){var s=!0;$l(e)}else s=!1;if(ys(e,i),e.stateNode===null)dl(t,e),wI(e,n,r),mf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=jt(l):(l=kt(n)?pi:at.current,l=ks(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Ky(e,o,r,l),Zn=!1;var d=e.memoizedState;o.state=d,zl(e,r,o,i),u=e.memoizedState,a!==r||d!==u||St.current||Zn?(typeof c=="function"&&(pf(e,n,c,r),u=e.memoizedState),(a=Zn||qy(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Ht(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=kt(n)?pi:at.current,u=ks(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Ky(e,o,r,u),Zn=!1,d=e.memoizedState,o.state=d,zl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||St.current||Zn?(typeof p=="function"&&(pf(e,n,p,r),y=e.memoizedState),(l=Zn||qy(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vf(t,e,n,r,s,i)}function vf(t,e,n,r,i,s){WI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uy(e,n,!1),$n(t,e,s);r=e.stateNode,ZC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&Uy(e,n,!0),e.child}function GI(t){var e=t.stateNode;e.pendingContext?Fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fy(t,e.context,!1),Hp(t,e.containerInfo)}function tv(t,e,n,r,i){return Cs(),zp(i),e.flags|=256,ut(t,e,n,r),e.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function HI(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=wf,t):nm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wf,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nm(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qu(t,e,n,r){return r!==null&&zp(r),Ns(e,t.child,null,n),t=nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ud(Error(S(422))),qu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ns(e,t.child,null,o),e.child.memoizedState=If(o),e.memoizedState=wf,s);if(!(e.mode&1))return qu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=ud(s,r,void 0),qu(t,e,o,r)}if(a=(o&t.childLanes)!==0,It||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Zt(r,t,i,-1))}return um(),r=ud(Error(S(421))),qu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=hr(i.nextSibling),Rt=e,ue=!0,Yt=null,t!==null&&(Ft[Ut++]=Cn,Ft[Ut++]=Nn,Ft[Ut++]=mi,Cn=t.id,Nn=t.overflow,mi=e),e=nm(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ff(t.return,e,n)}function ld(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function QI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ld(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ld(e,!0,n,null,s);break;case"together":ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tN(t,e,n){switch(e.tag){case 3:GI(e),Cs();break;case 5:EI(e);break;case 1:kt(e.type)&&$l(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?HI(t,e,n):(ne(de,de.current&1),t=$n(t,e,n),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return QI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,KI(t,e,n)}return $n(t,e,n)}var YI,_f,XI,JI;YI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_f=function(){};XI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ti(mn.current);var s=null;switch(n){case"input":i=zd(t,i),r=zd(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Kd(t,i),r=Kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ll)}Gd(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(la.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(la.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};JI=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nN(t,e,n){var r=e.pendingProps;switch(Bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return kt(e.type)&&Ml(),rt(e),null;case 3:return r=e.stateNode,As(),oe(St),oe(at),Yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Df(Yt),Yt=null))),_f(t,e),rt(e),null;case 5:Qp(e);var i=ti(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)XI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return rt(e),null}if(t=ti(mn.current),zu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[wa]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)ie(Mo[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":hy(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":fy(r,s),ie("invalid",r)}Gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Pu(r),dy(r,s,!0);break;case"textarea":Pu(r),py(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ll)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[wa]=r,YI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hd(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)ie(Mo[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":hy(t,r),i=zd(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":fy(t,r),i=Kd(t,r),ie("invalid",t);break;default:i=r}Gd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?A0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ca(t,u):typeof u=="number"&&ca(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ie("scroll",t):u!=null&&Cp(t,s,u,o))}switch(n){case"input":Pu(t),dy(t,r,!1);break;case"textarea":Pu(t),py(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)JI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=ti(_a.current),ti(mn.current),zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return rt(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&xt!==null&&e.mode&1&&!(e.flags&128))mI(),Cs(),e.flags|=98560,s=!1;else if(s=zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[sn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Yt!==null&&(Df(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?be===0&&(be=3):um())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return As(),_f(t,e),t===null&&ya(e.stateNode.containerInfo),rt(e),null;case 10:return Kp(e.type._context),rt(e),null;case 17:return kt(e.type)&&Ml(),rt(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>xs&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return rt(e),null}else 2*Te()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=de.current,ne(de,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return am(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function rN(t,e){switch(Bp(e),e.tag){case 1:return kt(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),oe(St),oe(at),Yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return As(),null;case 10:return Kp(e.type._context),null;case 22:case 23:return am(),null;case 24:return null;default:return null}}var Ku=!1,it=!1,iN=typeof WeakSet=="function"?WeakSet:Set,P=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Ef(t,e,n){try{n()}catch(r){ge(t,e,r)}}var rv=!1;function sN(t,e){if(sf=Rl,t=nI(),Up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(of={focusedElem:t,selectionRange:n},Rl=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ht(e.type,w),b);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){ge(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=rv,rv=!1,y}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ef(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ZI(t){var e=t.alternate;e!==null&&(t.alternate=null,ZI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[wa],delete e[lf],delete e[BC],delete e[zC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e_(t){return t.tag===5||t.tag===3||t.tag===4}function iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(r!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}function kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}var We=null,Qt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)t_(t,e,n),n=n.sibling}function t_(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:it||as(n,e);case 6:var r=We,i=Qt;We=null,Gn(t,e,n),We=r,Qt=i,We!==null&&(Qt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Qt?(t=We,n=n.stateNode,t.nodeType===8?nd(t.parentNode,n):t.nodeType===1&&nd(t,n),pa(t)):nd(We,n.stateNode));break;case 4:r=We,i=Qt,We=n.stateNode.containerInfo,Qt=!0,Gn(t,e,n),We=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ef(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!it&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Gn(t,e,n),it=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iN),e.forEach(function(r){var i=pN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Qt=!1;break e;case 3:We=a.stateNode.containerInfo,Qt=!0;break e;case 4:We=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(We===null)throw Error(S(160));t_(s,o,i),We=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){ge(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,t),e=e.sibling}function n_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),nn(t),r&4){try{Qo(3,t,t.return),Lc(3,t)}catch(w){ge(t,t.return,w)}try{Qo(5,t,t.return)}catch(w){ge(t,t.return,w)}}break;case 1:Gt(e,t),nn(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(Gt(e,t),nn(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(w){ge(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&T0(i,s),Hd(a,o);var l=Hd(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?A0(i,h):c==="dangerouslySetInnerHTML"?C0(i,h):c==="children"?ca(i,h):Cp(i,c,h,l)}switch(a){case"input":jd(i,s);break;case"textarea":S0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[wa]=s}catch(w){ge(t,t.return,w)}}break;case 6:if(Gt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ge(t,t.return,w)}}break;case 3:if(Gt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(w){ge(t,t.return,w)}break;case 4:Gt(e,t),nn(t);break;case 13:Gt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sm=Te())),r&4&&sv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(it=(l=it)||c,Gt(e,t),it=l):Gt(e,t),nn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qo(4,d,d.return);break;case 1:as(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:as(d,d.return);break;case 22:if(d.memoizedState!==null){av(h);continue}}p!==null?(p.return=d,P=p):av(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=N0("display",o))}catch(w){ge(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(w){ge(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gt(e,t),nn(t),r&4&&sv(t);break;case 21:break;default:Gt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e_(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=iv(t);kf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iv(t);Sf(t,a,o);break;default:throw Error(S(161))}}catch(u){ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oN(t,e,n){P=t,r_(t)}function r_(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ku;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||it;a=Ku;var l=it;if(Ku=o,(it=u)&&!l)for(P=i;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?uv(i):u!==null?(u.return=o,P=u):uv(i);for(;s!==null;)P=s,r_(s),s=s.sibling;P=i,Ku=a,it=l}ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):ov(t)}}function ov(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}it||e.flags&512&&Tf(e)}catch(d){ge(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function av(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function uv(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(u){ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ge(e,i,u)}}var s=e.return;try{Tf(e)}catch(u){ge(e,s,u)}break;case 5:var o=e.return;try{Tf(e)}catch(u){ge(e,o,u)}}}catch(u){ge(e,e.return,u)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var aN=Math.ceil,Wl=Bn.ReactCurrentDispatcher,rm=Bn.ReactCurrentOwner,zt=Bn.ReactCurrentBatchConfig,X=0,Ue=null,Ae=null,Qe=0,At=0,us=Rr(0),be=0,ka=null,yi=0,Mc=0,im=0,Yo=null,wt=null,sm=0,xs=1/0,Sn=null,Gl=!1,Cf=null,fr=null,Wu=!1,sr=null,Hl=0,Xo=0,Nf=null,fl=-1,pl=0;function dt(){return X&6?Te():fl!==-1?fl:fl=Te()}function pr(t){return t.mode&1?X&2&&Qe!==0?Qe&-Qe:qC.transition!==null?(pl===0&&(pl=V0()),pl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:G0(t.type)),t):1}function Zt(t,e,n,r){if(50<Xo)throw Xo=0,Nf=null,Error(S(185));Za(t,n,r),(!(X&2)||t!==Ue)&&(t===Ue&&(!(X&2)&&(Mc|=n),be===4&&tr(t,Qe)),Ct(t,r),n===1&&X===0&&!(e.mode&1)&&(xs=Te()+500,Rc&&Pr()))}function Ct(t,e){var n=t.callbackNode;qk(t,e);var r=bl(t,t===Ue?Qe:0);if(r===0)n!==null&&yy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yy(n),e===1)t.tag===0?jC(lv.bind(null,t)):dI(lv.bind(null,t)),UC(function(){!(X&6)&&Pr()}),n=null;else{switch(B0(r)){case 1:n=bp;break;case 4:n=F0;break;case 16:n=xl;break;case 536870912:n=U0;break;default:n=xl}n=h_(n,i_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i_(t,e){if(fl=-1,pl=0,X&6)throw Error(S(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=bl(t,t===Ue?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=X;X|=2;var s=o_();(Ue!==t||Qe!==e)&&(Sn=null,xs=Te()+500,ai(t,e));do try{cN();break}catch(a){s_(t,a)}while(1);qp(),Wl.current=s,X=i,Ae!==null?e=0:(Ue=null,Qe=0,e=be)}if(e!==0){if(e===2&&(i=Zd(t),i!==0&&(r=i,e=Af(t,i))),e===1)throw n=ka,ai(t,0),tr(t,r),Ct(t,Te()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!uN(i)&&(e=Ql(t,r),e===2&&(s=Zd(t),s!==0&&(r=s,e=Af(t,s))),e===1))throw n=ka,ai(t,0),tr(t,r),Ct(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Kr(t,wt,Sn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=sm+500-Te(),10<e)){if(bl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uf(Kr.bind(null,t,wt,Sn),e);break}Kr(t,wt,Sn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aN(r/1960))-r,10<r){t.timeoutHandle=uf(Kr.bind(null,t,wt,Sn),r);break}Kr(t,wt,Sn);break;case 5:Kr(t,wt,Sn);break;default:throw Error(S(329))}}}return Ct(t,Te()),t.callbackNode===n?i_.bind(null,t):null}function Af(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=wt,wt=n,e!==null&&Df(e)),t}function Df(t){wt===null?wt=t:wt.push.apply(wt,t)}function uN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~im,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function lv(t){if(X&6)throw Error(S(327));vs();var e=bl(t,0);if(!(e&1))return Ct(t,Te()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=Zd(t);r!==0&&(e=r,n=Af(t,r))}if(n===1)throw n=ka,ai(t,0),tr(t,e),Ct(t,Te()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,wt,Sn),Ct(t,Te()),null}function om(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(xs=Te()+500,Rc&&Pr())}}function vi(t){sr!==null&&sr.tag===0&&!(X&6)&&vs();var e=X;X|=1;var n=zt.transition,r=ee;try{if(zt.transition=null,ee=1,t)return t()}finally{ee=r,zt.transition=n,X=e,!(X&6)&&Pr()}}function am(){At=us.current,oe(us)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ml();break;case 3:As(),oe(St),oe(at),Yp();break;case 5:Qp(r);break;case 4:As();break;case 13:oe(de);break;case 19:oe(de);break;case 10:Kp(r.type._context);break;case 22:case 23:am()}n=n.return}if(Ue=t,Ae=t=mr(t.current,null),Qe=At=e,be=0,ka=null,im=Mc=yi=0,wt=Yo=null,ei!==null){for(e=0;e<ei.length;e++)if(n=ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return t}function s_(t,e){do{var n=Ae;try{if(qp(),cl.current=Kl,ql){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(gi=0,Me=De=fe=null,Ho=!1,Ea=0,rm.current=null,n===null||n.return===null){be=1,ka=e,Ae=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Qe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Yy(o);if(p!==null){p.flags&=-257,Xy(p,o,a,s,e),p.mode&1&&Qy(s,l,e),e=p,u=l;var y=e.updateQueue;if(y===null){var w=new Set;w.add(u),e.updateQueue=w}else y.add(u);break e}else{if(!(e&1)){Qy(s,l,e),um();break e}u=Error(S(426))}}else if(ue&&a.mode&1){var b=Yy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Xy(b,o,a,s,e),zp(Ds(u,a));break e}}s=u=Ds(u,a),be!==4&&(be=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=zI(s,u,e);zy(s,m);break e;case 1:a=u;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=jI(s,a,e);zy(s,_);break e}}s=s.return}while(s!==null)}u_(n)}catch(C){e=C,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function o_(){var t=Wl.current;return Wl.current=Kl,t===null?Kl:t}function um(){(be===0||be===3||be===2)&&(be=4),Ue===null||!(yi&268435455)&&!(Mc&268435455)||tr(Ue,Qe)}function Ql(t,e){var n=X;X|=2;var r=o_();(Ue!==t||Qe!==e)&&(Sn=null,ai(t,e));do try{lN();break}catch(i){s_(t,i)}while(1);if(qp(),X=n,Wl.current=r,Ae!==null)throw Error(S(261));return Ue=null,Qe=0,be}function lN(){for(;Ae!==null;)a_(Ae)}function cN(){for(;Ae!==null&&!Lk();)a_(Ae)}function a_(t){var e=c_(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?u_(t):Ae=e,rm.current=null}function u_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rN(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ae=null;return}}else if(n=nN(n,e,At),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);be===0&&(be=5)}function Kr(t,e,n){var r=ee,i=zt.transition;try{zt.transition=null,ee=1,hN(t,e,n,r)}finally{zt.transition=i,ee=r}return null}function hN(t,e,n,r){do vs();while(sr!==null);if(X&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kk(t,s),t===Ue&&(Ae=Ue=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wu||(Wu=!0,h_(xl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ee;ee=1;var a=X;X|=4,rm.current=null,sN(t,n),n_(n,t),bC(of),Rl=!!sf,of=sf=null,t.current=n,oN(n),Mk(),X=a,ee=o,zt.transition=s}else t.current=n;if(Wu&&(Wu=!1,sr=t,Hl=i),s=t.pendingLanes,s===0&&(fr=null),Uk(n.stateNode),Ct(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,t=Cf,Cf=null,t;return Hl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Nf?Xo++:(Xo=0,Nf=t):Xo=0,Pr(),null}function vs(){if(sr!==null){var t=B0(Hl),e=zt.transition,n=ee;try{if(zt.transition=null,ee=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Hl=0,X&6)throw Error(S(331));var i=X;for(X|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(P=l;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Qo(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,p=c.return;if(ZI(c),c===l){P=null;break}if(d!==null){d.return=p,P=d;break}P=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(C){ge(a,a.return,C)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(X=i,Pr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Nc,t)}catch{}r=!0}return r}finally{ee=n,zt.transition=e}}return!1}function cv(t,e,n){e=Ds(n,e),e=zI(t,e,1),t=dr(t,e,1),e=dt(),t!==null&&(Za(t,1,e),Ct(t,e))}function ge(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Ds(n,t),t=jI(e,t,1),e=dr(e,t,1),t=dt(),e!==null&&(Za(e,1,t),Ct(e,t));break}}e=e.return}}function dN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(Qe&n)===n&&(be===4||be===3&&(Qe&130023424)===Qe&&500>Te()-sm?ai(t,0):im|=n),Ct(t,e)}function l_(t,e){e===0&&(t.mode&1?(e=Mu,Mu<<=1,!(Mu&130023424)&&(Mu=4194304)):e=1);var n=dt();t=Mn(t,e),t!==null&&(Za(t,e,n),Ct(t,n))}function fN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l_(t,n)}function pN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),l_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,tN(t,e,n);It=!!(t.flags&131072)}else It=!1,ue&&e.flags&1048576&&fI(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;dl(t,e),t=e.pendingProps;var i=ks(e,at.current);ys(e,n),i=Jp(null,e,r,t,i,n);var s=Zp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,$l(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gp(e),i.updater=Pc,e.stateNode=i,i._reactInternals=e,mf(e,r,t,n),e=vf(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&Vp(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(dl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gN(r),t=Ht(r,t),i){case 0:e=yf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Jy(null,e,r,t,n);break e;case 14:e=Zy(null,e,r,Ht(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ev(t,e,r,i,n);case 3:e:{if(GI(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yI(t,e),zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error(S(423)),e),e=tv(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error(S(424)),e),e=tv(t,e,r,n,i);break e}else for(xt=hr(e.stateNode.containerInfo.firstChild),Rt=e,ue=!0,Yt=null,n=_I(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=$n(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return EI(e),t===null&&df(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,af(r,i)?o=null:s!==null&&af(r,s)&&(e.flags|=32),WI(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&df(e),null;case 13:return HI(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ns(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Jy(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Vl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!St.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ff(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=jt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),Zy(t,e,r,i,n);case 15:return qI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),dl(t,e),e.tag=1,kt(r)?(t=!0,$l(e)):t=!1,ys(e,n),wI(e,r,i),mf(e,r,i,n),vf(null,e,r,!0,t,n);case 19:return QI(t,e,n);case 22:return KI(t,e,n)}throw Error(S(156,e.tag))};function h_(t,e){return $0(t,e)}function mN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new mN(t,e,n,r)}function lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gN(t){if(typeof t=="function")return lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Dp)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ji:return ui(n.children,i,s,e);case Np:o=8,i|=8;break;case Fd:return t=Vt(12,n,e,i|2),t.elementType=Fd,t.lanes=s,t;case Ud:return t=Vt(13,n,e,i),t.elementType=Ud,t.lanes=s,t;case Vd:return t=Vt(19,n,e,i),t.elementType=Vd,t.lanes=s,t;case I0:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v0:o=10;break e;case w0:o=9;break e;case Ap:o=11;break e;case Dp:o=14;break e;case Jn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function cd(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function hd(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cm(t,e,n,r,i,s,o,a,u){return t=new yN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gp(s),t}function vN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return wr;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(kt(n))return hI(t,n,e)}return e}function f_(t,e,n,r,i,s,o,a,u){return t=cm(n,r,!0,t,i,s,o,a,u),t.context=d_(null),n=t.current,r=dt(),i=pr(n),s=bn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,Za(t,i,r),Ct(t,r),t}function Fc(t,e,n,r){var i=e.current,s=dt(),o=pr(i);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Zt(t,i,o,s),ll(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hm(t,e){hv(t,e),(t=t.alternate)&&hv(t,e)}function wN(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function dm(t){this._internalRoot=t}Uc.prototype.render=dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Fc(t,e,null,null)};Uc.prototype.unmount=dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){Fc(null,t,null,null)}),e[Ln]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&W0(t)}};function fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function IN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Yl(o);s.call(l)}}var o=f_(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[Ln]=o.current,ya(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Yl(u);a.call(l)}}var u=cm(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=u,t[Ln]=u.current,ya(t.nodeType===8?t.parentNode:t),vi(function(){Fc(e,u,n,r)}),u}function Bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Yl(o);a.call(u)}}Fc(e,o,t,i)}else o=IN(n,e,t,i,r);return Yl(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(Rp(e,n|1),Ct(e,Te()),!(X&6)&&(xs=Te()+500,Pr()))}break;case 13:vi(function(){var r=Mn(t,1);if(r!==null){var i=dt();Zt(r,t,1,i)}}),hm(t,1)}};Pp=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=dt();Zt(e,t,134217728,n)}hm(t,134217728)}};j0=function(t){if(t.tag===13){var e=pr(t),n=Mn(t,e);if(n!==null){var r=dt();Zt(n,t,e,r)}hm(t,e)}};q0=function(){return ee};K0=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Yd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bc(r);if(!i)throw Error(S(90));E0(r),jd(r,i)}}}break;case"textarea":S0(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};b0=om;R0=vi;var _N={usingClientEntryPoint:!1,Events:[tu,ns,bc,D0,x0,om]},Eo={findFiberByHostInstance:Zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},EN={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||wN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Nc=Gu.inject(EN),pn=Gu}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_N;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(S(200));return vN(t,e,null,n)};Mt.createRoot=function(t,e){if(!fm(t))throw Error(S(299));var n=!1,r="",i=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cm(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,ya(t.nodeType===8?t.parentNode:t),new dm(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return vi(t)};Mt.hydrate=function(t,e,n){if(!Vc(e))throw Error(S(200));return Bc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!fm(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=p_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f_(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uc(e)};Mt.render=function(t,e,n){if(!Vc(e))throw Error(S(200));return Bc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(S(40));return t._reactRootContainer?(vi(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Mt.unstable_batchedUpdates=om;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Bc(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Mt})(wk);var fv=Ld;Od.createRoot=fv.createRoot,Od.hydrateRoot=fv.hydrateRoot;const TN="https://ran-sy.github.io/ultimate-chat/assets/vite-4fb126c2.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},g_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new kN;const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CN=function(t){const e=m_(t);return g_.encodeByteArray(e,!0)},Xl=function(t){return CN(t).replace(/\./g,"")},y_=function(t){try{return g_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Jl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!NN(n)||(t[n]=Jl(t[n],e[n]));return t}function NN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=()=>AN().__FIREBASE_DEFAULTS__,xN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&y_(t[1]);return e&&JSON.parse(e)},pm=()=>{try{return DN()||xN()||bN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RN=()=>{var t;return(t=pm())===null||t===void 0?void 0:t.config},PN=t=>{var e;return(e=pm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xl(JSON.stringify(n)),Xl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function mm(){var t;const e=(t=pm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $N(){return typeof self=="object"&&self.self===self}function v_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w_(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FN(){return!mm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ca(){try{return typeof indexedDB=="object"}catch{return!1}}function UN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="FirebaseError";class ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VN,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ft(i,a,r)}}function BN(t,e){return t.replace(zN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mv(s)&&mv(o)){if(!xf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $o(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function I_(t,e){const n=new qN(t,e);return n.subscribe.bind(n)}class qN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dd),i.error===void 0&&(i.error=dd),i.complete===void 0&&(i.complete=dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ON;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HN(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GN(t){return t===Wr?void 0:t}function HN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const __={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},YN=Y.INFO,XN={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},JN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=YN,this._logHandler=JN,this._userLogHandler=null,ym.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?__[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function ZN(t){ym.forEach(e=>{e.setLogLevel(t)})}function eA(t,e){for(const n of ym){let r=null;e&&e.level&&(r=__[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:Y[s].toLowerCase(),message:a,args:o,type:i.name})}}}const tA=(t,e)=>e.some(n=>t instanceof n);let gv,yv;function nA(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rA(){return yv||(yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,bf=new WeakMap,T_=new WeakMap,fd=new WeakMap,vm=new WeakMap;function iA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E_.set(n,t)}).catch(()=>{}),vm.set(e,t),e}function sA(t){if(bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bf.set(t,e)}let Rf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oA(t){Rf=t(Rf)}function aA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pd(this),e,...n);return T_.set(r,e.sort?e.sort():[e]),gr(r)}:rA().includes(t)?function(...e){return t.apply(pd(this),e),gr(E_.get(this))}:function(...e){return gr(t.apply(pd(this),e))}}function uA(t){return typeof t=="function"?aA(t):(t instanceof IDBTransaction&&sA(t),tA(t,nA())?new Proxy(t,Rf):t)}function gr(t){if(t instanceof IDBRequest)return iA(t);if(fd.has(t))return fd.get(t);const e=uA(t);return e!==t&&(fd.set(t,e),vm.set(e,t)),e}const pd=t=>vm.get(t);function lA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],md=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cA.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return md.set(e,s),s}oA(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pf="@firebase/app",wv="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new zc("@firebase/app"),pA="@firebase/app-compat",mA="@firebase/analytics-compat",gA="@firebase/analytics",yA="@firebase/app-check-compat",vA="@firebase/app-check",wA="@firebase/auth",IA="@firebase/auth-compat",_A="@firebase/database",EA="@firebase/database-compat",TA="@firebase/functions",SA="@firebase/functions-compat",kA="@firebase/installations",CA="@firebase/installations-compat",NA="@firebase/messaging",AA="@firebase/messaging-compat",DA="@firebase/performance",xA="@firebase/performance-compat",bA="@firebase/remote-config",RA="@firebase/remote-config-compat",PA="@firebase/storage",OA="@firebase/storage-compat",LA="@firebase/firestore",MA="@firebase/firestore-compat",$A="firebase",FA="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]",UA={[Pf]:"fire-core",[pA]:"fire-core-compat",[gA]:"fire-analytics",[mA]:"fire-analytics-compat",[vA]:"fire-app-check",[yA]:"fire-app-check-compat",[wA]:"fire-auth",[IA]:"fire-auth-compat",[_A]:"fire-rtdb",[EA]:"fire-rtdb-compat",[TA]:"fire-fn",[SA]:"fire-fn-compat",[kA]:"fire-iid",[CA]:"fire-iid-compat",[NA]:"fire-fcm",[AA]:"fire-fcm-compat",[DA]:"fire-perf",[xA]:"fire-perf-compat",[bA]:"fire-rc",[RA]:"fire-rc-compat",[PA]:"fire-gcs",[OA]:"fire-gcs-compat",[LA]:"fire-fst",[MA]:"fire-fst-compat","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Na=new Map;function Zl(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function S_(t,e){t.container.addOrOverwriteComponent(e)}function Er(t){const e=t.name;if(Na.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;Na.set(e,t);for(const n of _r.values())Zl(n,t);return!0}function k_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function VA(t,e,n=Ir){k_(t,e).clearInstance(n)}function BA(){Na.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new Li("app","Firebase",zA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jA=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=FA;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(n||(n=RN()),!n)throw Rn.create("no-options");const s=_r.get(i);if(s){if(xf(n,s.options)&&xf(r,s.config))return s;throw Rn.create("duplicate-app",{appName:i})}const o=new QN(i);for(const u of Na.values())o.addComponent(u);const a=new jA(n,r,o);return _r.set(i,a),a}function qA(t=Ir){const e=_r.get(t);if(!e&&t===Ir)return wm();if(!e)throw Rn.create("no-app",{appName:t});return e}function KA(){return Array.from(_r.values())}async function C_(t){const e=t.name;_r.has(e)&&(_r.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function gn(t,e,n){var r;let i=(r=UA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Er(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function N_(t,e){if(t!==null&&typeof t!="function")throw Rn.create("invalid-log-argument");eA(t,e)}function A_(t){ZN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firebase-heartbeat-database",GA=1,Aa="firebase-heartbeat-store";let gd=null;function D_(){return gd||(gd=lA(WA,GA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Aa)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),gd}async function HA(t){try{return(await D_()).transaction(Aa).objectStore(Aa).get(x_(t))}catch(e){if(e instanceof ft)wi.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function Iv(t,e){try{const r=(await D_()).transaction(Aa,"readwrite");return await r.objectStore(Aa).put(e,x_(t)),r.done}catch(n){if(n instanceof ft)wi.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=1024,YA=30*24*60*60*1e3;class XA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_v(),{heartbeatsToSend:n,unsentEntries:r}=JA(this._heartbeatsCache.heartbeats),i=Xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _v(){return new Date().toISOString().substring(0,10)}function JA(t,e=QA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ca()?UN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ev(t){return Xl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){Er(new wn("platform-logger",e=>new dA(e),"PRIVATE")),Er(new wn("heartbeat",e=>new XA(e),"PRIVATE")),gn(Pf,wv,t),gn(Pf,wv,"esm2017"),gn("fire-js","")}eD("");const tD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ft,SDK_VERSION:Mi,_DEFAULT_ENTRY_NAME:Ir,_addComponent:Zl,_addOrOverwriteComponent:S_,_apps:_r,_clearComponents:BA,_components:Na,_getProvider:k_,_registerComponent:Er,_removeServiceInstance:VA,deleteApp:C_,getApp:qA,getApps:KA,initializeApp:wm,onLog:N_,registerVersion:gn,setLogLevel:A_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this._delegate=e,this.firebase=n,Zl(e,new wn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),C_(this._delegate)))}_getService(e,n=Ir){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ir){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Zl(this._delegate,e)}_addOrOverwriteComponent(e){S_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tv=new Li("app-compat","Firebase",rD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:gn,setLogLevel:A_,onLog:N_,apps:null,SDK_VERSION:Mi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:tD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ir,!pv(e,l))throw Tv.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=wm(l,c);if(pv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Er(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Tv.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&Jl(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){const t=iD(nD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:b_,extendNamespace:e,createSubscribe:I_,ErrorFactory:Li,deepExtend:Jl});function e(n){Jl(t,n)}return t}const sD=b_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new zc("@firebase/app-compat"),oD="@firebase/app-compat",aD="0.2.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){gn(oD,aD,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($N()&&self.firebase!==void 0){Sv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Sv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Tn=sD;uD();var lD="firebase",cD="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.registerVersion(lD,cD,"app-compat");var hD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Im=Im||{},V=hD||self;function ec(){}function jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ru(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dD(t){return Object.prototype.hasOwnProperty.call(t,yd)&&t[yd]||(t[yd]=++fD)}var yd="closure_uid_"+(1e9*Math.random()>>>0),fD=0;function pD(t,e,n){return t.call.apply(t.bind,arguments)}function mD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=pD:st=mD,st.apply(null,arguments)}function Hu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var gD=0;Or.prototype.s=!1;Or.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gD!=0)&&dD(this)};Or.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const R_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _m(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var yD=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",ec,e),V.removeEventListener("test",ec,e)}catch{}return t}();function tc(t){return/^[\s\xa0]*$/.test(t)}var Cv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vd(t,e){return t<e?-1:t>e?1:0}function qc(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return qc().indexOf(t)!=-1}function Em(t){return Em[" "](t),t}Em[" "]=ec;function vD(t){var e=_D;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wD=on("Opera"),bs=on("Trident")||on("MSIE"),P_=on("Edge"),Of=P_||bs,O_=on("Gecko")&&!(qc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),ID=qc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function L_(){var t=V.document;return t?t.documentMode:void 0}var nc;e:{var wd="",Id=function(){var t=qc();if(O_)return/rv:([^\);]+)(\)|;)/.exec(t);if(P_)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ID)return/WebKit\/(\S+)/.exec(t);if(wD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Id&&(wd=Id?Id[1]:""),bs){var _d=L_();if(_d!=null&&_d>parseFloat(wd)){nc=String(_d);break e}}nc=wd}var _D={};function ED(){return vD(function(){let t=0;const e=Cv(String(nc)).split("."),n=Cv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=vd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||vd(i[2].length==0,s[2].length==0)||vd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Lf;if(V.document&&bs){var Nv=L_();Lf=Nv||parseInt(nc,10)||void 0}else Lf=void 0;var TD=Lf;function Da(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(O_){e:{try{Em(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Da.X.h.call(this)}}tt(Da,ot);var SD={2:"touch",3:"pen",4:"mouse"};Da.prototype.h=function(){Da.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var iu="closure_listenable_"+(1e6*Math.random()|0),kD=0;function CD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++kD,this.ba=this.ea=!1}function Kc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Tm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M_(t){const e={};for(const n in t)e[n]=t[n];return e}const Av="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Av.length;s++)n=Av[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wc(t){this.src=t,this.g={},this.h=0}Wc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=$f(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Mf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=R_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $f(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Sm="closure_lm_"+(1e6*Math.random()|0),Ed={};function F_(t,e,n,r,i){if(r&&r.once)return V_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)F_(t,e[s],n,r,i);return null}return n=Nm(n),t&&t[iu]?t.N(e,n,ru(r)?!!r.capture:!!r,i):U_(t,e,n,!1,r,i)}function U_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ru(i)?!!i.capture:!!i,a=Cm(t);if(a||(t[Sm]=a=new Wc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ND(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)yD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(z_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ND(){function t(n){return e.call(t.src,t.listener,n)}const e=AD;return t}function V_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)V_(t,e[s],n,r,i);return null}return n=Nm(n),t&&t[iu]?t.O(e,n,ru(r)?!!r.capture:!!r,i):U_(t,e,n,!0,r,i)}function B_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)B_(t,e[s],n,r,i);else r=ru(r)?!!r.capture:!!r,n=Nm(n),t&&t[iu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=$f(s,n,r,i),-1<n&&(Kc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$f(e,n,r,i)),(n=-1<t?e[t]:null)&&km(n))}function km(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[iu])Mf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(z_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cm(e))?(Mf(n,t),n.h==0&&(n.src=null,e[Sm]=null)):Kc(t)}}}function z_(t){return t in Ed?Ed[t]:Ed[t]="on"+t}function AD(t,e){if(t.ba)t=!0;else{e=new Da(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&km(t),t=n.call(r,e)}return t}function Cm(t){return t=t[Sm],t instanceof Wc?t:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(t){return typeof t=="function"?t:(t[Td]||(t[Td]=function(e){return t.handleEvent(e)}),t[Td])}function Be(){Or.call(this),this.i=new Wc(this),this.P=this,this.I=null}tt(Be,Or);Be.prototype[iu]=!0;Be.prototype.removeEventListener=function(t,e,n,r){B_(this,t,e,n,r)};function Ye(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),$_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qu(o,r,!0,e)&&i}if(o=e.g=t,i=Qu(o,r,!0,e)&&i,i=Qu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qu(o,r,!1,e)&&i}Be.prototype.M=function(){if(Be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kc(n[r]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Mf(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Am=V.JSON.stringify;function DD(){var t=K_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xD{constructor(){this.h=this.g=null}add(e,n){const r=j_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var j_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bD,t=>t.reset());class bD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RD(t){V.setTimeout(()=>{throw t},0)}function q_(t,e){Ff||PD(),Uf||(Ff(),Uf=!0),K_.add(t,e)}var Ff;function PD(){var t=V.Promise.resolve(void 0);Ff=function(){t.then(OD)}}var Uf=!1,K_=new xD;function OD(){for(var t;t=DD();){try{t.h.call(t.g)}catch(n){RD(n)}var e=j_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Uf=!1}function Gc(t,e){Be.call(this),this.h=t||1,this.g=e||V,this.j=st(this.lb,this),this.l=Date.now()}tt(Gc,Be);M=Gc.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ye(this,"tick"),this.ca&&(Dm(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){Gc.X.M.call(this),Dm(this),delete this.g};function xm(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function W_(t){t.g=xm(()=>{t.g=null,t.i&&(t.i=!1,W_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LD extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:W_(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xa(t){Or.call(this),this.h=t,this.g={}}tt(xa,Or);var Dv=[];function G_(t,e,n,r){Array.isArray(n)||(n&&(Dv[0]=n.toString()),n=Dv);for(var i=0;i<n.length;i++){var s=F_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function H_(t){Tm(t.g,function(e,n){this.g.hasOwnProperty(n)&&km(e)},t),t.g={}}xa.prototype.M=function(){xa.X.M.call(this),H_(this)};xa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hc(){this.g=!0}Hc.prototype.Aa=function(){this.g=!1};function MD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function $D(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UD(t,n)+(r?" "+r:"")})}function FD(t,e){t.info(function(){return"TIMEOUT: "+e})}Hc.prototype.info=function(){};function UD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Am(n)}catch{return e}}var $i={},xv=null;function Qc(){return xv=xv||new Be}$i.Pa="serverreachability";function Q_(t){ot.call(this,$i.Pa,t)}tt(Q_,ot);function ba(t){const e=Qc();Ye(e,new Q_(e))}$i.STAT_EVENT="statevent";function Y_(t,e){ot.call(this,$i.STAT_EVENT,t),this.stat=e}tt(Y_,ot);function ht(t){const e=Qc();Ye(e,new Y_(e,t))}$i.Qa="timingevent";function X_(t,e){ot.call(this,$i.Qa,t),this.size=e}tt(X_,ot);function su(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Yc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},J_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bm(){}bm.prototype.h=null;function bv(t){return t.h||(t.h=t.i())}function Z_(){}var ou={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rm(){ot.call(this,"d")}tt(Rm,ot);function Pm(){ot.call(this,"c")}tt(Pm,ot);var Vf;function Xc(){}tt(Xc,bm);Xc.prototype.g=function(){return new XMLHttpRequest};Xc.prototype.i=function(){return{}};Vf=new Xc;function au(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new xa(this),this.O=VD,t=Of?125:void 0,this.T=new Gc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eE}function eE(){this.i=null,this.g="",this.h=!1}var VD=45e3,Bf={},rc={};M=au.prototype;M.setTimeout=function(t){this.O=t};function zf(t,e,n){t.K=1,t.v=Zc(Fn(e)),t.s=n,t.P=!0,tE(t,null)}function tE(t,e){t.F=Date.now(),uu(t),t.A=Fn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),lE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new eE,t.g=xE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new LD(st(t.La,t,t.g),t.N)),G_(t.S,t.g,"readystatechange",t.ib),e=t.H?M_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ba(),MD(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Of||this.g&&(this.h.h||this.g.fa()||Lv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ba(3):ba(2)),Jc(this);var n=this.g.aa();this.Y=n;t:if(nE(this)){var r=Lv(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),Jo(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$D(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tc(a)){var l=a;break t}}l=null}if(n=l)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jf(this,n);else{this.i=!1,this.o=3,ht(12),ni(this),Jo(this);break e}}this.P?(rE(this,c,o),Of&&this.i&&c==3&&(G_(this.S,this.T,"tick",this.hb),this.T.start())):(cs(this.j,this.m,o,null),jf(this,o)),c==4&&ni(this),this.i&&!this.I&&(c==4?CE(this.l,this):(this.i=!1,uu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),ni(this),Jo(this)}}}catch{}finally{}};function nE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function rE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=BD(t,n),i==rc){e==4&&(t.o=4,ht(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bf){t.o=4,ht(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),jf(t,i);nE(t)&&i!=rc&&i!=Bf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vm(e),e.K=!0,ht(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),ni(t),Jo(t))}M.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(Jc(this),rE(this,t,e),this.i&&t!=4&&uu(this))}};function BD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?rc:(n=Number(e.substring(n,r)),isNaN(n)?Bf:(r+=1,r+n>e.length?rc:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,ni(this)};function uu(t){t.V=Date.now()+t.O,iE(t,t.O)}function iE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=su(st(t.gb,t),e)}function Jc(t){t.B&&(V.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(FD(this.j,this.A),this.K!=2&&(ba(),ht(17)),ni(this),this.o=2,Jo(this)):iE(this,this.V-t)};function Jo(t){t.l.G==0||t.I||CE(t.l,t)}function ni(t){Jc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Dm(t.T),H_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qf(n.h,t))){if(!t.J&&qf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)oc(n),nh(n);else break e;Um(n),ht(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=su(st(n.cb,n),6e3));if(1>=dE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ri(n,11)}else if((t.J||n.g==t)&&oc(n),!tc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Om(s,s.h),s.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,le(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=DE(r,r.H?r.ka:null,r.V),o.J){fE(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Jc(a),uu(a)),r.g=o}else SE(r);0<n.i.length&&rh(n)}else l[0]!="stop"&&l[0]!="close"||ri(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ri(n,7):Fm(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ba(4)}catch{}}function zD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jD(t),r=zD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var oE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function li(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof li){this.h=e!==void 0?e:t.h,ic(this,t.j),this.s=t.s,this.g=t.g,sc(this,t.m),this.l=t.l,e=t.i;var n=new Ra;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rv(this,n),this.o=t.o}else t&&(n=String(t).match(oE))?(this.h=!!e,ic(this,n[1]||"",!0),this.s=Fo(n[2]||""),this.g=Fo(n[3]||"",!0),sc(this,n[4]),this.l=Fo(n[5]||"",!0),Rv(this,n[6]||"",!0),this.o=Fo(n[7]||"")):(this.h=!!e,this.i=new Ra(null,this.h))}li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Uo(e,Pv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Uo(e,Pv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Uo(n,n.charAt(0)=="/"?GD:WD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Uo(n,QD)),t.join("")};function Fn(t){return new li(t)}function ic(t,e,n){t.j=n?Fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rv(t,e,n){e instanceof Ra?(t.i=e,YD(t.i,t.h)):(n||(e=Uo(e,HD)),t.i=new Ra(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Zc(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pv=/[#\/\?@]/g,WD=/[#\?:]/g,GD=/[#\?]/g,HD=/[#\?@]/g,QD=/#/g;function Ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lr(t){t.g||(t.g=new Map,t.h=0,t.i&&qD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ra.prototype;M.add=function(t,e){Lr(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aE(t,e){Lr(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uE(t,e){return Lr(t),e=Js(t,e),t.g.has(e)}M.forEach=function(t,e){Lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.oa=function(){Lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.W=function(t){Lr(this);let e=[];if(typeof t=="string")uE(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Lr(this),this.i=null,t=Js(this,t),uE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function lE(t,e,n){aE(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),_m(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YD(t,e){e&&!t.j&&(Lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aE(this,r),lE(this,i,n))},t)),t.j=e}var XD=class{constructor(e,n){this.h=e,this.g=n}};function cE(t){this.l=t||JD,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JD=10;function hE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dE(t){return t.h?1:t.g?t.g.size:0}function qf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Om(t,e){t.g?t.g.add(e):t.h=e}function fE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cE.prototype.cancel=function(){if(this.i=pE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _m(t.i)}function Lm(){}Lm.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Lm.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function ZD(){this.g=new Lm}function ex(t,e,n){const r=n||"";try{sE(t,function(i,s){let o=i;ru(i)&&(o=Am(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tx(t,e){const n=new Hc;if(V.Image){const r=new Image;r.onload=Hu(Yu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Hu(Yu,n,r,"TestLoadImage: error",!1,e),r.onabort=Hu(Yu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Hu(Yu,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lu(t){this.l=t.ac||null,this.j=t.jb||!1}tt(lu,bm);lu.prototype.g=function(){return new eh(this.l,this.j)};lu.prototype.i=function(t){return function(){return t}}({});function eh(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(eh,Be);var Mm=0;M=eh.prototype;M.open=function(t,e){if(this.readyState!=Mm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pa(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cu(this)),this.readyState=Mm};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pa(this)),this.g&&(this.readyState=3,Pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cu(this):Pa(this),this.readyState==3&&mE(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,cu(this))};M.Ua=function(t){this.g&&(this.response=t,cu(this))};M.ga=function(){this.g&&cu(this)};function cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pa(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(eh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nx=V.JSON.parse;function we(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gE,this.K=this.L=!1}tt(we,Be);var gE="",rx=/^https?$/i,ix=["POST","PUT"];M=we.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vf.g(),this.C=this.u?bv(this.u):bv(Vf),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ov(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=R_(ix,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wE(this),0<this.B&&((this.K=sx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=xm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ov(this,s)}};function sx(t){return bs&&ED()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof Im<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Ov(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yE(t),th(t)}function yE(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),th(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),th(this,!0)),we.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?vE(this):this.fb())};M.fb=function(){vE(this)};function vE(t){if(t.h&&typeof Im<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)xm(t.Ha,0,t);else if(Ye(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(oE)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!rx.test(i?i.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",yE(t)}}finally{th(t)}}}}function th(t,e){if(t.g){wE(t);const n=t.g,r=t.C[0]?ec:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function wE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nx(e)}};function Lv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function IE(t){let e="";return Tm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $m(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=IE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function To(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _E(t){this.Ca=0,this.i=[],this.j=new Hc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=To("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=To("baseRetryDelayMs",5e3,t),this.bb=To("retryDelaySeedMs",1e4,t),this.$a=To("forwardChannelMaxRetries",2,t),this.ta=To("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cE(t&&t.concurrentRequestLimit),this.Fa=new ZD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=_E.prototype;M.ma=8;M.G=1;function Fm(t){if(EE(t),t.G==3){var e=t.U++,n=Fn(t.F);le(n,"SID",t.I),le(n,"RID",e),le(n,"TYPE","terminate"),hu(t,n),e=new au(t,t.j,e,void 0),e.K=2,e.v=Zc(Fn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=xE(e.l,null),e.g.da(e.v)),e.F=Date.now(),uu(e)}AE(t)}function nh(t){t.g&&(Vm(t),t.g.cancel(),t.g=null)}function EE(t){nh(t),t.u&&(V.clearTimeout(t.u),t.u=null),oc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function rh(t){hE(t.h)||t.m||(t.m=!0,q_(t.Ja,t),t.C=0)}function ox(t,e){return dE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=su(st(t.Ja,t,e),NE(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new au(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=M_(s),$_(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TE(this,i,e),n=Fn(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),hu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(IE(s)))+"&"+e:this.o&&$m(n,this.o,s)),Om(this.h,i),this.Ya&&le(n,"TYPE","init"),this.O?(le(n,"$req",e),le(n,"SID","null"),i.Z=!0,zf(i,n,null)):zf(i,n,e),this.G=2}}else this.G==3&&(t?Mv(this,t):this.i.length==0||hE(this.h)||Mv(this))};function Mv(t,e){var n;e?n=e.m:n=t.U++;const r=Fn(t.F);le(r,"SID",t.I),le(r,"RID",n),le(r,"AID",t.T),hu(t,r),t.o&&t.s&&$m(r,t.o,t.s),n=new au(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=TE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Om(t.h,n),zf(n,r,e)}function hu(t,e){t.ia&&Tm(t.ia,function(n,r){le(e,r,n)}),t.l&&sE({},function(n,r){le(e,r,n)})}function TE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{ex(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function SE(t){t.g||t.u||(t.Z=1,q_(t.Ia,t),t.A=0)}function Um(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=su(st(t.Ia,t),NE(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,kE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=su(st(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),nh(this),kE(this))};function Vm(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function kE(t){t.g=new au(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Fn(t.sa);le(e,"RID","rpc"),le(e,"SID",t.I),le(e,"CI",t.L?"0":"1"),le(e,"AID",t.T),le(e,"TYPE","xmlhttp"),hu(t,e),t.o&&t.s&&$m(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zc(Fn(e)),n.s=null,n.P=!0,tE(n,t)}M.cb=function(){this.v!=null&&(this.v=null,nh(this),Um(this),ht(19))};function oc(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function CE(t,e){var n=null;if(t.g==e){oc(t),Vm(t),t.g=null;var r=2}else if(qf(t.h,e))n=e.D,fE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Qc(),Ye(r,new X_(r,n)),rh(t)}else SE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&ox(t,e)||r==2&&Um(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ri(t,5);break;case 4:ri(t,10);break;case 3:ri(t,6);break;default:ri(t,2)}}}function NE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ri(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new li("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ic(n,"https"),Zc(n)),tx(n.toString(),r)}else ht(2);t.G=0,t.l&&t.l.va(e),AE(t),EE(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function AE(t){if(t.G=0,t.la=[],t.l){const e=pE(t.h);(e.length!=0||t.i.length!=0)&&(kv(t.la,e),kv(t.la,t.i),t.h.i.length=0,_m(t.i),t.i.length=0),t.l.ua()}}function DE(t,e,n){var r=n instanceof li?Fn(n):new li(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),sc(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new li(null,void 0);r&&ic(s,r),e&&(s.g=e),i&&sc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&le(r,n,e),le(r,"VER",t.ma),hu(t,r),r}function xE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new lu({jb:!0})):new we(t.ra),e.Ka(t.H),e}function bE(){}M=bE.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function ac(){if(bs&&!(10<=Number(TD)))throw Error("Environmental error: no available transport.")}ac.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Be.call(this),this.g=new _E(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!tc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}tt(Ot,Be);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=DE(t,null,t.V),rh(t)};Ot.prototype.close=function(){Fm(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Am(t),t=n);e.i.push(new XD(e.ab++,t)),e.G==3&&rh(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,Fm(this.g),delete this.g,Ot.X.M.call(this)};function RE(t){Rm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(RE,Rm);function PE(){Pm.call(this),this.status=1}tt(PE,Pm);function Zs(t){this.g=t}tt(Zs,bE);Zs.prototype.xa=function(){Ye(this.g,"a")};Zs.prototype.wa=function(t){Ye(this.g,new RE(t))};Zs.prototype.va=function(t){Ye(this.g,new PE)};Zs.prototype.ua=function(){Ye(this.g,"b")};ac.prototype.createWebChannel=ac.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Yc.NO_ERROR=0;Yc.TIMEOUT=8;Yc.HTTP_ERROR=6;J_.COMPLETE="complete";Z_.EventType=ou;ou.OPEN="a";ou.CLOSE="b";ou.ERROR="c";ou.MESSAGE="d";Be.prototype.listen=Be.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var ax=function(){return new ac},ux=function(){return Qc()},Sd=Yc,lx=J_,cx=$i,$v={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},hx=lu,Xu=Z_,dx=we;const Fv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new zc("@firebase/firestore");function Kf(){return Tr.logLevel}function fx(t){Tr.setLogLevel(t)}function T(t,...e){if(Tr.logLevel<=Y.DEBUG){const n=e.map(Bm);Tr.debug(`Firestore (${eo}): ${t}`,...n)}}function Se(t,...e){if(Tr.logLevel<=Y.ERROR){const n=e.map(Bm);Tr.error(`Firestore (${eo}): ${t}`,...n)}}function Rs(t,...e){if(Tr.logLevel<=Y.WARN){const n=e.map(Bm);Tr.warn(`Firestore (${eo}): ${t}`,...n)}}function Bm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+t;throw Se(e),new Error(e)}function $(t,e){t||R()}function px(t,e){t||R()}function x(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yx{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ve,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ve)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new OE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new $e(e)}}class vx{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():($(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wx{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _x{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.A=n.token,new Ix(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ex(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ME(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new he(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new he(0,0))}static max(){return new F(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r){n===void 0?n=0:n>e.length&&R(),r===void 0?r=e.length-n:r>e.length-n&&R(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Q extends Oa{construct(e,n,r){return new Q(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Q(n)}static emptyPath(){return new Q([])}}const Tx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends Oa{construct(e,n,r){return new ke(e,n,r)}static isValidIdentifier(e){return Tx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(Q.fromString(e))}static fromName(e){return new A(Q.fromString(e).popFirst(5))}static empty(){return new A(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new Q(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Wf(t){return t.fields.find(e=>e.kind===2)}function Gr(t){return t.fields.filter(e=>e.kind!==2)}$E.UNKNOWN_ID=-1;class Sx{constructor(e,n){this.fieldPath=e,this.kind=n}}class uc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new uc(0,Lt.min())}}function FE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Lt(i,A.empty(),e)}function UE(t){return new Lt(t.readTime,t.key,-1)}class Lt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lt(F.min(),A.empty(),-1)}static max(){return new Lt(F.max(),A.empty(),-1)}}function zm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=A.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==VE)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new Ve,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Zo(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=jm(r.target.error);this.v.reject(new Zo(e,i))}}static open(e,n,r,i){try{return new ih(n,e.transaction(i,r))}catch(s){throw new Zo(n,s)}}get P(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(T("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Cx(n)}}class Xt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Xt.D(me())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return T("SimpleDb","Removing database:",e),Hr(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ca())return!1;if(Xt.N())return!0;const e=me(),n=Xt.D(e),r=0<n&&n<10,i=Xt.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Zo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new E(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Zo(e,o))},i.onupgradeneeded=s=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=ih.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),v.reject(l))).toPromise();return u.catch(()=>{}),await a.P,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kx{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Hr(this.q.delete())}}class Zo extends E{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function $r(t){return t.name==="IndexedDbTransactionError"}class Cx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(T("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Hr(r)}add(e){return T("SimpleDb","ADD",this.store.name,e,e),Hr(this.store.add(e))}get(e){return Hr(this.store.get(e)).next(n=>(n===void 0&&(n=null),T("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return T("SimpleDb","DELETE",this.store.name,e),Hr(this.store.delete(e))}count(){return T("SimpleDb","COUNT",this.store.name),Hr(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new v((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Z=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=jm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new v((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new kx(a),l=n(a.primaryKey,a.value,u);if(l instanceof v){const c=l.catch(h=>(u.done(),v.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Hr(t){return new v((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=jm(r.target.error);n(i)}})}let Uv=!1;function jm(t){const e=Xt.D(me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Uv||(Uv=!0,setTimeout(()=>{throw r},0)),r}}return t}class Nx{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){T("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{T("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){$r(n)?T("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Mr(n)}await this.nt(6e4)})}}class Ax{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return T("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(T("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=UE(s);zm(o,r)>0&&(r=o)}),new Lt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}_t.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Sr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return t==null}function La(t){return t===0&&1/t==-1/0}function jE(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new xx("Invalid base64 string: "+i):i}}(e);return new Re(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Rx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if($(!!t),typeof t=="string"){let e=0;const n=Rx.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ii(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qE(t){const e=t.mapValue.fields.__previous_value__;return qm(e)?qE(e):e}function Ma(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},gl={nullValue:"NULL_VALUE"};function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qm(t)?4:KE(t)?9007199254740991:10:R()}function In(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ii(r.bytesValue).isEqual(Ii(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?La(s)===La(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vv(s)!==Vv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!In(s[a],o[a])))return!1;return!0}(t,e);default:return R()}}function $a(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Cr(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bv(t.timestampValue,e.timestampValue);case 4:return Bv(Ma(t),Ma(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ii(i),a=Ii(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=B(o[u],a[u]);if(l!==0)return l}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=B(ye(i.latitude),ye(s.latitude));return o!==0?o:B(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Cr(o[u],a[u]);if(l)return l}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===or.mapValue&&s===or.mapValue)return 0;if(i===or.mapValue)return 1;if(s===or.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=B(a[c],l[c]);if(h!==0)return h;const d=Cr(o[a[c]],u[l[c]]);if(d!==0)return d}return B(a.length,l.length)}(t.mapValue,e.mapValue);default:throw R()}}function Bv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=kr(t),r=kr(e),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function Os(t){return Gf(t)}function Gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,A.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Gf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Gf(r.fields[a])}`;return s+"}"}(t.mapValue):R();var e,n}function Ei(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hf(t){return!!t&&"integerValue"in t}function Fa(t){return!!t&&"arrayValue"in t}function zv(t){return!!t&&"nullValue"in t}function jv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yl(t){return!!t&&"mapValue"in t}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Px(t){return"nullValue"in t?gl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ei(Sr.empty(),A.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:R()}function Ox(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ei(Sr.empty(),A.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?or:R()}function qv(t,e){const n=Cr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Kv(t,e){const n=Cr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.position=e,this.inclusive=n}}function Wv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),n.key):r=Cr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{}class W extends WE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Lx(e,n,r):n==="array-contains"?new Fx(e,r):n==="in"?new JE(e,r):n==="not-in"?new Ux(e,r):n==="array-contains-any"?new Vx(e,r):new W(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mx(e,r):new $x(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cr(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(Cr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Z extends WE{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Z(e,n)}matches(e){return Ls(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ls(t){return t.op==="and"}function Qf(t){return t.op==="or"}function Km(t){return GE(t)&&Ls(t)}function GE(t){for(const e of t.filters)if(e instanceof Z)return!1;return!0}function Yf(t){if(t instanceof W)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(Km(t))return t.filters.map(e=>Yf(e)).join(",");{const e=t.filters.map(n=>Yf(n)).join(",");return`${t.op}(${e})`}}function HE(t,e){return t instanceof W?function(n,r){return r instanceof W&&n.op===r.op&&n.field.isEqual(r.field)&&In(n.value,r.value)}(t,e):t instanceof Z?function(n,r){return r instanceof Z&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&HE(s,r.filters[o]),!0):!1}(t,e):void R()}function QE(t,e){const n=t.filters.concat(e);return Z.create(n,t.op)}function YE(t){return t instanceof W?function(e){return`${e.field.canonicalString()} ${e.op} ${Os(e.value)}`}(t):t instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(YE).join(" ,")+"}"}(t):"Filter"}class Lx extends W{constructor(e,n,r){super(e,n,r),this.key=A.fromName(r.referenceValue)}matches(e){const n=A.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mx extends W{constructor(e,n){super(e,"in",n),this.keys=XE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $x extends W{constructor(e,n){super(e,"not-in",n),this.keys=XE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>A.fromName(r.referenceValue))}class Fx extends W{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fa(n)&&$a(n.arrayValue,this.value)}}class JE extends W{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$a(this.value.arrayValue,n)}}class Ux extends W{constructor(e,n){super(e,"not-in",n)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$a(this.value.arrayValue,n)}}class Vx extends W{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(e){return new Hv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new te(this.comparator);return n.data=e,n}}class Hv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ki(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Et([])}unionWith(e){let n=new te(ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new He(ea(this.value))}}function ZE(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new ke([n]);if(yl(r)){const s=ZE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new se(e,0,F.min(),F.min(),F.min(),He.empty(),0)}static newFoundDocument(e,n,r,i){return new se(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new se(e,2,n,F.min(),F.min(),He.empty(),0)}static newUnknownDocument(e,n){return new se(e,3,n,F.min(),F.min(),He.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function Xf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zx(t,e,n,r,i,s,o)}function Ti(t){const e=x(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e._t=n}return e._t}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gv(t.startAt,e.startAt)&&Gv(t.endAt,e.endAt)}function lc(t){return A.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cc(t,e){return t.filters.filter(n=>n instanceof W&&n.field.isEqual(e))}function Qv(t,e,n){let r=gl,i=!0;for(const s of cc(t,e)){let o=gl,a=!0;switch(s.op){case"<":case"<=":o=Px(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=gl}qv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];qv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Yv(t,e,n){let r=or,i=!0;for(const s of cc(t,e)){let o=or,a=!0;switch(s.op){case">=":case">":o=Ox(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=or}Kv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Kv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this.gt=null,this.startAt,this.endAt}}function e1(t,e,n,r,i,s,o,a){return new zn(t,e,n,r,i,s,o,a)}function to(t){return new zn(t)}function Xv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gm(t){return t.collectionGroup!==null}function ci(t){const e=x(t);if(e.wt===null){e.wt=[];const n=sh(e),r=Wm(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ws(n)),e.wt.push(new ws(ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ws(ke.keyField(),s))}}}return e.wt}function Nt(t){const e=x(t);if(!e.gt)if(e.limitType==="F")e.gt=Xf(e.path,e.collectionGroup,ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ci(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ws(s.field,o))}const r=e.endAt?new Nr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Nr(e.startAt.position,e.startAt.inclusive):null;e.gt=Xf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function Jf(t,e){e.getFirstInequalityField(),sh(t);const n=t.filters.concat([e]);return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hc(t,e,n){return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return fu(Nt(t),Nt(e))&&t.limitType===e.limitType}function t1(t){return`${Ti(Nt(t))}|lt:${t.limitType}`}function Zf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>YE(r)).join(", ")}]`),du(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),`Target(${n})`}(Nt(t))}; limitType=${t.limitType})`}function mu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):A.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ci(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Wv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ci(n),r)||n.endAt&&!function(i,s,o){const a=Wv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ci(n),r))}(t,e)}function n1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r1(t){return(e,n)=>{let r=!1;for(const i of ci(t)){const s=jx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jx(t,e,n){const r=t.field.isKeyField()?A.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Cr(a,u):R()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function s1(t){return{integerValue:""+t}}function o1(t,e){return jE(e)?s1(e):i1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._=void 0}}function qx(t,e,n){return t instanceof Ms?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Si?u1(t,e):t instanceof ki?l1(t,e):function(r,i){const s=a1(r,i),o=Jv(s)+Jv(r.It);return Hf(s)&&Hf(r.It)?s1(o):i1(r.Tt,o)}(t,e)}function Kx(t,e,n){return t instanceof Si?u1(t,e):t instanceof ki?l1(t,e):n}function a1(t,e){return t instanceof $s?Hf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ms extends oh{}class Si extends oh{constructor(e){super(),this.elements=e}}function u1(t,e){const n=c1(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends oh{constructor(e){super(),this.elements=e}}function l1(t,e){let n=c1(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class $s extends oh{constructor(e,n){super(),this.Tt=e,this.It=n}}function Jv(t){return ye(t.integerValue||t.doubleValue)}function c1(t){return Fa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.field=e,this.transform=n}}function Wx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Si&&r instanceof Si||n instanceof ki&&r instanceof ki?Ps(n.elements,r.elements,In):n instanceof $s&&r instanceof $s?In(n.It,r.It):n instanceof Ms&&r instanceof Ms}(t.transform,e.transform)}class Gx{constructor(e,n){this.version=e,this.transformResults=n}}class ce{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ce}static exists(e){return new ce(void 0,e)}static updateTime(e){return new ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ah{}function h1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ro(t.key,ce.none()):new no(t.key,t.data,ce.none());{const n=t.data,r=He.empty();let i=new te(ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jn(t.key,r,new Et(i.toArray()),ce.none())}}function Hx(t,e,n){t instanceof no?function(r,i,s){const o=r.value.clone(),a=ew(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(r,i,s){if(!vl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ew(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(d1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof no?function(i,s,o,a){if(!vl(i.precondition,s))return o;const u=i.value.clone(),l=tw(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jn?function(i,s,o,a){if(!vl(i.precondition,s))return o;const u=tw(i.fieldTransforms,a,s),l=s.data;return l.setAll(d1(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return vl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Qx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=a1(r.transform,i||null);s!=null&&(n===null&&(n=He.empty()),n.set(r.field,s))}return n||null}function Zv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ps(n,r,(i,s)=>Wx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class no extends ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jn extends ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function d1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ew(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Kx(o,a,n[i]))}return r}function tw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qx(s,o,e))}return r}class ro extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hm extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,H;function f1(t){switch(t){default:return R();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function p1(t){if(t===void 0)return Se("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ne.OK:return I.OK;case Ne.CANCELLED:return I.CANCELLED;case Ne.UNKNOWN:return I.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return I.INTERNAL;case Ne.UNAVAILABLE:return I.UNAVAILABLE;case Ne.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ne.NOT_FOUND:return I.NOT_FOUND;case Ne.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ne.ABORTED:return I.ABORTED;case Ne.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ne.DATA_LOSS:return I.DATA_LOSS;default:return R()}}(H=Ne||(Ne={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new Ie(A.comparator);function Tt(){return Xx}const m1=new Ie(A.comparator);function Vo(...t){let e=m1;for(const n of t)e=e.insert(n.key,n);return e}function g1(t){let e=m1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hn(){return na()}function y1(){return na()}function na(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jx=new Ie(A.comparator),Zx=new te(A.comparator);function z(...t){let e=Zx;for(const n of t)e=e.add(n);return e}const eb=new te(B);function uh(){return eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yu(F.min(),i,uh(),Tt(),z())}}class vu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vu(r,n,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class v1{constructor(e,n){this.targetId=e,this.Rt=n}}class w1{constructor(e,n,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nw{constructor(){this.bt=0,this.vt=iw(),this.Pt=Re.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=z(),n=z(),r=z();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:R()}}),new vu(this.Pt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=iw()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class tb{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tt(),this.Kt=rw(),this.Gt=new te(B)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.$t(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.$t(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:R()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(lc(s))if(r===0){const o=new A(s.path);this.zt(n,o,se.newNoDocument(o,F.min()))}else $(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&lc(a.target)){const u=new A(a.target.path);this.Ut.get(u)!==null||this.ne(o,u)||this.zt(o,u,se.newNoDocument(u,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=z();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new yu(e,n,this.Gt,this.Ut,r);return this.Ut=Tt(),this.Kt=rw(),this.Gt=new te(B),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new nw,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new te(B),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new nw),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function rw(){return new Ie(A.comparator)}function iw(){return new Ie(A.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ib=(()=>({and:"AND",or:"OR"}))();class sb{constructor(e,n){this.databaseId=e,this.yt=n}}function Fs(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I1(t,e){return t.yt?e.toBase64():e.toUint8Array()}function ob(t,e){return Fs(t,e.toTimestamp())}function Ce(t){return $(!!t),F.fromTimestamp(function(e){const n=kr(e);return new he(n.seconds,n.nanos)}(t))}function Qm(t,e){return function(n){return new Q(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _1(t){const e=Q.fromString(t);return $(x1(e)),e}function Ua(t,e){return Qm(t.databaseId,e.path)}function yn(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new A(T1(n))}function ep(t,e){return Qm(t.databaseId,e)}function E1(t){const e=_1(t);return e.length===4?Q.emptyPath():T1(e)}function Va(t){return new Q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T1(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sw(t,e,n){return{name:Ua(t,e),fields:n.value.mapValue.fields}}function S1(t,e,n){const r=yn(t,e.name),i=Ce(e.updateTime),s=e.createTime?Ce(e.createTime):F.min(),o=new He({mapValue:{fields:e.fields}}),a=se.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function ab(t,e){return"found"in e?function(n,r){$(!!r.found),r.found.name,r.found.updateTime;const i=yn(n,r.found.name),s=Ce(r.found.updateTime),o=r.found.createTime?Ce(r.found.createTime):F.min(),a=new He({mapValue:{fields:r.found.fields}});return se.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){$(!!r.missing),$(!!r.readTime);const i=yn(n,r.missing),s=Ce(r.readTime);return se.newNoDocument(i,s)}(t,e):R()}function ub(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.yt?($(l===void 0||typeof l=="string"),Re.fromBase64String(l||"")):($(l===void 0||l instanceof Uint8Array),Re.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:p1(u.code);return new E(l,u.message||"")}(o);n=new w1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yn(t,r.document.name),s=Ce(r.document.updateTime),o=r.document.createTime?Ce(r.document.createTime):F.min(),a=new He({mapValue:{fields:r.document.fields}}),u=se.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new wl(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yn(t,r.document),s=r.readTime?Ce(r.readTime):F.min(),o=se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yn(t,r.document),s=r.removedTargetIds||[];n=new wl([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Yx(i),o=r.targetId;n=new v1(o,s)}}return n}function Ba(t,e){let n;if(e instanceof no)n={update:sw(t,e.key,e.value)};else if(e instanceof ro)n={delete:Ua(t,e.key)};else if(e instanceof jn)n={update:sw(t,e.key,e.data),updateMask:pb(e.fieldMask)};else{if(!(e instanceof Hm))return R();n={verify:Ua(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ms)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Si)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ki)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $s)return{fieldPath:s.field.canonicalString(),increment:o.It};throw R()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ob(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(t,e.precondition)),n}function tp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ce.updateTime(Ce(i.updateTime)):i.exists!==void 0?ce.exists(i.exists):ce.none()}(e.currentDocument):ce.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)$(o.setToServerValue==="REQUEST_TIME"),a=new Ms;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Si(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ki(l)}else"increment"in o?a=new $s(s,o.increment):R();const u=ke.fromServerFormat(o.fieldPath);return new gu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=yn(t,e.update.name),s=new He({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Et(u.map(l=>ke.fromServerFormat(l)))}(e.updateMask);return new jn(i,s,o,n,r)}return new no(i,s,n,r)}if(e.delete){const i=yn(t,e.delete);return new ro(i,n)}if(e.verify){const i=yn(t,e.verify);return new Hm(i,n)}return R()}function lb(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ce(r.updateTime):Ce(i);return s.isEqual(F.min())&&(s=Ce(i)),new Gx(s,r.transformResults||[])}(n,e))):[]}function k1(t,e){return{documents:[ep(t,e.path)]}}function C1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ep(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ep(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return D1(Z.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Hi(c.field),direction:hb(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.yt||du(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function N1(t){let e=E1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=A1(c);return h instanceof Z&&Km(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ws(Qi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,du(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Nr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Nr(d,h)}(n.endAt)),e1(e,i,o,s,a,"F",u,l)}function cb(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return R()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function A1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Qi(e.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Qi(e.unaryFilter.field);return W.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qi(e.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qi(e.unaryFilter.field);return W.create(s,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(t):t.fieldFilter!==void 0?function(e){return W.create(Qi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>A1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(t):R()}function hb(t){return nb[t]}function db(t){return rb[t]}function fb(t){return ib[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function Qi(t){return ke.fromServerFormat(t.fieldPath)}function D1(t){return t instanceof W?function(e){if(e.op==="=="){if(jv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NAN"}};if(zv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NOT_NAN"}};if(zv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(e.field),op:db(e.op),value:e.value}}}(t):t instanceof Z?function(e){const n=e.getFilters().map(r=>D1(r));return n.length===1?n[0]:{compositeFilter:{op:fb(e.op),filters:n}}}(t):R()}function pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ow(e)),e=mb(t.get(n),e);return ow(e)}function mb(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ow(t){return t+""}function dn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),Q.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&R(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:R()}s=o+2}return new Q(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return[t,pt(e)]}function b1(t,e,n){return[t,pt(e),n]}const gb={},yb=["prefixPath","collectionGroup","readTime","documentId"],vb=["prefixPath","collectionGroup","documentId"],wb=["collectionGroup","readTime","prefixPath","documentId"],Ib=["canonicalId","targetId"],_b=["targetId","path"],Eb=["path","targetId"],Tb=["collectionId","parent"],Sb=["indexId","uid"],kb=["uid","sequenceNumber"],Cb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Nb=["indexId","uid","orderedDocumentKey"],Ab=["userId","collectionPath","documentId"],Db=["userId","collectionPath","largestBatchId"],xb=["userId","collectionGroup","largestBatchId"],R1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bb=[...R1,"documentOverlays"],P1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],O1=P1,Rb=[...O1,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends BE{constructor(e,n){super(),this.re=e,this.currentSequenceNumber=n}}function je(t,e){const n=x(t);return Xt.M(n.re,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=y1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=h1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>Zv(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>Zv(n,r))}}class Xm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=Jx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.oe=e}}function Pb(t,e){let n;if(e.document)n=S1(t.oe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=A.fromSegments(e.noDocument.path),i=Ni(e.noDocument.readTime);n=se.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=A.fromSegments(e.unknownDocument.path),i=Ni(e.unknownDocument.version);n=se.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new he(r[0],r[1]);return F.fromTimestamp(i)}(e.readTime)),n}function uw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:dc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ua(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Fs(i,s.version.toTimestamp()),createTime:Fs(i,s.createTime.toTimestamp())}}(t.oe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ci(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:n.path.toArray(),version:Ci(e.version)}}return r}function dc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ci(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ni(t){const e=new he(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function Qr(t,e){const n=(e.baseMutations||[]).map(s=>tp(t.oe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>tp(t.oe,s)),i=he.fromMillis(e.localWriteTimeMs);return new Ym(e.batchId,i,n,r)}function Bo(t){const e=Ni(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ni(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return t.query.documents!==void 0?($((i=t.query).documents.length===1),r=Nt(to(E1(i.documents[0])))):r=function(s){return Nt(N1(s))}(t.query),new yr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Re.fromBase64String(t.resumeToken))}function M1(t,e){const n=Ci(e.snapshotVersion),r=Ci(e.lastLimboFreeSnapshotVersion);let i;i=lc(e.target)?k1(t.oe,e.target):C1(t.oe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ti(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Zm(t){const e=N1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hc(e,e.limit,"L"):e}function kd(t,e){return new Jm(e.largestBatchId,tp(t.oe,e.overlayMutation))}function lw(t,e){const n=e.path.lastSegment();return[t,pt(e.path.popLast()),n]}function cw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ci(r.readTime),documentKey:pt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{getBundleMetadata(e,n){return hw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ni(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return hw(e).put({bundleId:(r=n).id,createTime:Ci(Ce(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return dw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Zm(i.bundledQuery),readTime:Ni(i.readTime)};var i})}saveNamedQuery(e,n){return dw(e).put(function(r){return{name:r.name,readTime:Ci(Ce(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function hw(t){return je(t,"bundles")}function dw(t){return je(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.Tt=e,this.userId=n}static ue(e,n){const r=n.uid||"";return new lh(e,r)}getOverlay(e,n){return So(e).get(lw(this.userId,n)).next(r=>r?kd(this.Tt,r):null)}getOverlays(e,n){const r=hn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Jm(n,o);i.push(this.ce(e,a))}),v.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(pt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(So(e).Y("collectionPathOverlayIndex",a))}),v.waitFor(s)}getOverlaysForCollection(e,n,r){const i=hn(),s=pt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return So(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=kd(this.Tt,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=hn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return So(e).X({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=kd(this.Tt,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ce(e,n){return So(e).put(function(r,i,s){const[o,a,u]=lw(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ba(r.oe,s.mutation)}}(this.Tt,this.userId,n))}}function So(t){return je(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){}ae(e,n){this.he(e,n),n.le()}he(e,n){if("nullValue"in e)this.fe(n,5);else if("booleanValue"in e)this.fe(n,10),n.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(n,15),n.de(ye(e.integerValue));else if("doubleValue"in e){const r=ye(e.doubleValue);isNaN(r)?this.fe(n,13):(this.fe(n,15),La(r)?n.de(0):n.de(r))}else if("timestampValue"in e){const r=e.timestampValue;this.fe(n,20),typeof r=="string"?n._e(r):(n._e(`${r.seconds||""}`),n.de(r.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,n),this.me(n);else if("bytesValue"in e)this.fe(n,30),n.ge(Ii(e.bytesValue)),this.me(n);else if("referenceValue"in e)this.ye(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.fe(n,45),n.de(r.latitude||0),n.de(r.longitude||0)}else"mapValue"in e?KE(e)?this.fe(n,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,n),this.me(n)):"arrayValue"in e?(this.Ie(e.arrayValue,n),this.me(n)):R()}we(e,n){this.fe(n,25),this.Te(e,n)}Te(e,n){n._e(e)}pe(e,n){const r=e.fields||{};this.fe(n,55);for(const i of Object.keys(r))this.we(i,n),this.he(r[i],n)}Ie(e,n){const r=e.values||[];this.fe(n,50);for(const i of r)this.he(i,n)}ye(e,n){this.fe(n,37),A.fromName(e).path.forEach(r=>{this.fe(n,60),this.Te(r,n)})}fe(e,n){e.de(n)}me(e){e.de(2)}}Yr.Ee=new Yr;function Lb(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function fw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=Lb(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class Mb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ae(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Re(r.value),r=n.next();this.be()}ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.Ve()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=n.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.be()}De(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.Ve()}Ce(e){const n=this.xe(e),r=fw(n);this.Ne(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}ke(e){const n=this.xe(e),r=fw(n);this.Ne(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Oe(){this.Me(255),this.Me(255)}Fe(){this.$e(255),this.$e(255)}reset(){this.position=0}seed(e){this.Ne(e.length),this.buffer.set(e,this.position),this.position+=e.length}Be(){return this.buffer.slice(0,this.position)}xe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Re(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}Pe(e){const n=255&e;n===0?(this.$e(0),this.$e(255)):n===255?(this.$e(255),this.$e(0)):this.$e(e)}be(){this.Me(0),this.Me(1)}Ve(){this.$e(0),this.$e(1)}Me(e){this.Ne(1),this.buffer[this.position++]=e}$e(e){this.Ne(1),this.buffer[this.position++]=~e}Ne(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class $b{constructor(e){this.Le=e}ge(e){this.Le.Ae(e)}_e(e){this.Le.Se(e)}de(e){this.Le.Ce(e)}le(){this.Le.Oe()}}class Fb{constructor(e){this.Le=e}ge(e){this.Le.ve(e)}_e(e){this.Le.De(e)}de(e){this.Le.ke(e)}le(){this.Le.Fe()}}class ko{constructor(){this.Le=new Mb,this.qe=new $b(this.Le),this.Ue=new Fb(this.Le)}seed(e){this.Le.seed(e)}Ke(e){return e===0?this.qe:this.Ue}Be(){return this.Le.Be()}reset(){this.Le.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ge(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Xr(this.indexId,this.documentKey,this.arrayValue,r)}}function Hn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=pw(t.arrayValue,e.arrayValue),n!==0?n:(n=pw(t.directionalValue,e.directionalValue),n!==0?n:A.comparator(t.documentKey,e.documentKey)))}function pw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qe=e.orderBy,this.je=[];for(const n of e.filters){const r=n;r.isInequality()?this.ze=r:this.je.push(r)}}We(e){$(e.collectionGroup===this.collectionId);const n=Wf(e);if(n!==void 0&&!this.He(n))return!1;const r=Gr(e);let i=0,s=0;for(;i<r.length&&this.He(r[i]);++i);if(i===r.length)return!0;if(this.ze!==void 0){const o=r[i];if(!this.Je(this.ze,o)||!this.Ye(this.Qe[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Qe.length||!this.Ye(this.Qe[s++],o))return!1}return!0}He(e){for(const n of this.je)if(this.Je(n,e))return!0;return!1}Je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Ye(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){var e,n;if($(t instanceof W||t instanceof Z),t instanceof W){if(t instanceof JE){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>W.create(t.field,"==",s)))||[];return Z.create(i,"or")}return t}const r=t.filters.map(i=>$1(i));return Z.create(r,t.op)}function Vb(t){if(t.getFilters().length===0)return[];const e=sp($1(t));return $(F1(e)),rp(e)||ip(e)?[e]:e.getFilters()}function rp(t){return t instanceof W}function ip(t){return t instanceof Z&&Km(t)}function F1(t){return rp(t)||ip(t)||function(e){if(e instanceof Z&&Qf(e)){for(const n of e.getFilters())if(!rp(n)&&!ip(n))return!1;return!0}return!1}(t)}function sp(t){if($(t instanceof W||t instanceof Z),t instanceof W)return t;if(t.filters.length===1)return sp(t.filters[0]);const e=t.filters.map(r=>sp(r));let n=Z.create(e,t.op);return n=fc(n),F1(n)?n:($(n instanceof Z),$(Ls(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>eg(r,i)))}function eg(t,e){let n;return $(t instanceof W||t instanceof Z),$(e instanceof W||e instanceof Z),n=t instanceof W?e instanceof W?function(r,i){return Z.create([r,i],"and")}(t,e):mw(t,e):e instanceof W?mw(e,t):function(r,i){if($(r.filters.length>0&&i.filters.length>0),Ls(r)&&Ls(i))return QE(r,i.getFilters());const s=Qf(r)?r:i,o=Qf(r)?i:r,a=s.filters.map(u=>eg(u,o));return Z.create(a,"or")}(t,e),fc(n)}function mw(t,e){if(Ls(e))return QE(e,t.getFilters());{const n=e.filters.map(r=>eg(t,r));return Z.create(n,"or")}}function fc(t){if($(t instanceof W||t instanceof Z),t instanceof W)return t;const e=t.getFilters();if(e.length===1)return fc(e[0]);if(GE(t))return t;const n=e.map(i=>fc(i)),r=[];return n.forEach(i=>{i instanceof W?r.push(i):i instanceof Z&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Z.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.Ze=new tg}addToCollectionParentIndex(e,n){return this.Ze.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Lt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class tg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new te(Q.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new te(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Uint8Array(0);class zb{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new tg,this.tn=new Fr(r=>Ti(r),(r,i)=>fu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:pt(i)};return gw(e).put(s)}return v.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ME(n),""],!1,!0);return gw(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(dn(o.parent))}return r})}addFieldIndex(e,n){const r=el(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=No(e);return s.next(a=>{o.put(cw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=el(e),i=No(e),s=Co(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Co(e);let i=!0;const s=new Map;return v.forEach(this.en(n),o=>this.nn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=z();const a=[];return v.forEach(s,(u,l)=>{var c;T("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Ti(n)}`);const h=function(g,_){const C=Wf(_);if(C===void 0)return null;for(const N of cc(g,C.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(l,u),d=function(g,_){const C=new Map;for(const N of Gr(_))for(const D of cc(g,N.fieldPath))switch(D.op){case"==":case"in":C.set(N.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return C.set(N.fieldPath.canonicalString(),D.value),Array.from(C.values())}return null}(l,u),p=function(g,_){const C=[];let N=!0;for(const D of Gr(_)){const L=D.kind===0?Qv(g,D.fieldPath,g.startAt):Yv(g,D.fieldPath,g.startAt);C.push(L.value),N&&(N=L.inclusive)}return new Nr(C,N)}(l,u),y=function(g,_){const C=[];let N=!0;for(const D of Gr(_)){const L=D.kind===0?Yv(g,D.fieldPath,g.endAt):Qv(g,D.fieldPath,g.endAt);C.push(L.value),N&&(N=L.inclusive)}return new Nr(C,N)}(l,u),w=this.sn(u,l,p),b=this.sn(u,l,y),m=this.rn(u,l,d),f=this.on(u.indexId,h,w,p.inclusive,b,y.inclusive,m);return v.forEach(f,g=>r.J(g,n.limit).next(_=>{_.forEach(C=>{const N=A.fromSegments(C.documentKey);o.has(N)||(o=o.add(N),a.push(N))})}))}).next(()=>a)}return v.resolve(null)})}en(e){let n=this.tn.get(e);return n||(e.filters.length===0?n=[e]:n=Vb(Z.create(e.filters,"and")).map(r=>Xf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.tn.set(e,n),n)}on(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.un(n[h/l]):Zu,p=this.cn(e,d,r[h%l],i),y=this.an(e,d,s[h%l],o),w=a.map(b=>this.cn(e,d,b,!0));c.push(...this.createRange(p,y,w))}return c}cn(e,n,r,i){const s=new Xr(e,A.empty(),n,r);return i?s:s.Ge()}an(e,n,r,i){const s=new Xr(e,A.empty(),n,r);return i?s.Ge():s}nn(e,n){const r=new Ub(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.en(n);return v.forEach(i,s=>this.nn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new te(ke.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}hn(e,n){const r=new ko;for(const i of Gr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ke(i.kind);Yr.Ee.ae(s,o)}return r.Be()}un(e){const n=new ko;return Yr.Ee.ae(e,n.Ke(0)),n.Be()}ln(e,n){const r=new ko;return Yr.Ee.ae(Ei(this.databaseId,n),r.Ke(function(i){const s=Gr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Be()}rn(e,n,r){if(r===null)return[];let i=[];i.push(new ko);let s=0;for(const o of Gr(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&Fa(a))i=this.dn(i,o,a);else{const l=u.Ke(o.kind);Yr.Ee.ae(a,l)}}return this._n(i)}sn(e,n,r){return this.rn(e,n,r.position)}_n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Be();return n}dn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ko;u.seed(a.Be()),Yr.Ee.ae(o,u.Ke(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof W&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=el(e),i=No(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return v.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new uc(c.sequenceNumber,new Lt(Ni(c.readTime),new A(dn(c.documentKey)),c.largestBatchId)):uc.empty(),d=l.fields.map(([p,y])=>new Sx(ke.fromServerFormat(p),y));return new $E(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:B(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=el(e),s=No(e);return this.wn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,u=>s.put(cw(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),v.forEach(a,u=>this.mn(e,i,u).next(l=>{const c=this.gn(s,u);return l.isEqual(c)?v.resolve():this.yn(e,s,u,l,c)}))))})}pn(e,n,r,i){return Co(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.ln(r,n.key),documentKey:n.key.path.toArray()})}In(e,n,r,i){return Co(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.ln(r,n.key),n.key.path.toArray()])}mn(e,n,r){const i=Co(e);let s=new te(Hn);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.ln(r,n)])},(o,a)=>{s=s.add(new Xr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new te(Hn);const i=this.hn(n,e);if(i==null)return r;const s=Wf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Fa(o))for(const a of o.arrayValue.values||[])r=r.add(new Xr(n.indexId,e.key,this.un(a),i))}else r=r.add(new Xr(n.indexId,e.key,Zu,i));return r}yn(e,n,r,i,s){T("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let y=Ki(d),w=Ki(p);for(;y||w;){let b=!1,m=!1;if(y&&w){const f=l(y,w);f<0?m=!0:f>0&&(b=!0)}else y!=null?m=!0:b=!0;b?(c(w),w=Ki(p)):m?(h(y),y=Ki(d)):(y=Ki(d),w=Ki(p))}}(i,s,Hn,a=>{o.push(this.pn(e,n,r,a))},a=>{o.push(this.In(e,n,r,a))}),v.waitFor(o)}wn(e){let n=1;return No(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Hn(o,a)).filter((o,a,u)=>!a||Hn(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Hn(o,e),u=Hn(o,n);if(a===0)i[0]=e.Ge();else if(a>0&&u<0)i.push(o),i.push(o.Ge());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Tn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Zu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Zu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Tn(e,n){return Hn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(yw)}getMinOffset(e,n){return v.mapArray(this.en(n),r=>this.nn(e,r).next(i=>i||R())).next(yw)}}function gw(t){return je(t,"collectionParents")}function Co(t){return je(t,"indexEntries")}function el(t){return je(t,"indexConfiguration")}function No(t){return je(t,"indexState")}function yw(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;zm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Lt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{$(a===1)}));const l=[];for(const c of n.mutations){const h=b1(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return v.waitFor(s).next(()=>l)}function pc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw R();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);class ch{constructor(e,n,r,i){this.userId=e,this.Tt=n,this.indexManager=r,this.referenceDelegate=i,this.En={}}static ue(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ch(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Qn(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Yi(e),o=Qn(e);return o.add({}).next(a=>{$(typeof a=="number");const u=new Ym(a,n,r,i),l=function(d,p,y){const w=y.baseMutations.map(m=>Ba(d.oe,m)),b=y.mutations.map(m=>Ba(d.oe,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:w,mutations:b}}(this.Tt,this.userId,u),c=[];let h=new te((d,p)=>B(d.canonicalString(),p.canonicalString()));for(const d of i){const p=b1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,gb))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.En[a]=u.keys()}),v.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Qn(e).get(n).next(r=>r?($(r.userId===this.userId),Qr(this.Tt,r)):null)}An(e,n){return this.En[n]?v.resolve(this.En[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.En[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Qn(e).X({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&($(a.batchId>=r),s=Qr(this.Tt,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Qn(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Qn(e).W("userMutationsIndex",n).next(r=>r.map(i=>Qr(this.Tt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Il(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Yi(e).X({range:i},(o,a,u)=>{const[l,c,h]=o,d=dn(c);if(l===this.userId&&n.path.isEqual(d))return Qn(e).get(h).next(p=>{if(!p)throw R();$(p.userId===this.userId),s.push(Qr(this.Tt,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new te(B);const i=[];return n.forEach(s=>{const o=Il(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Yi(e).X({range:a},(l,c,h)=>{const[d,p,y]=l,w=dn(p);d===this.userId&&s.path.isEqual(w)?r=r.add(y):h.done()});i.push(u)}),v.waitFor(i).next(()=>this.Rn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Il(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new te(B);return Yi(e).X({range:o},(u,l,c)=>{const[h,d,p]=u,y=dn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Rn(e,a))}Rn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Qn(e).get(s).next(o=>{if(o===null)throw R();$(o.userId===this.userId),r.push(Qr(this.Tt,o))}))}),v.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return U1(e.re,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.bn(n.batchId)}),v.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}bn(e){delete this.En[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Yi(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=dn(s[1]);i.push(u)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return V1(e,this.userId,n)}vn(e){return B1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function V1(t,e,n){const r=Il(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Yi(t).X({range:s,Z:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Qn(t){return je(t,"mutations")}function Yi(t){return je(t,"documentMutations")}function B1(t){return je(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Ai(0)}static Sn(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.referenceDelegate=e,this.Tt=n}allocateTargetId(e){return this.Dn(e).next(n=>{const r=new Ai(n.highestTargetId);return n.highestTargetId=r.next(),this.Cn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Dn(e).next(n=>F.fromTimestamp(new he(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Dn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Dn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Cn(e,i)))}addTargetData(e,n){return this.xn(e,n).next(()=>this.Dn(e).next(r=>(r.targetCount+=1,this.Nn(n,r),this.Cn(e,r))))}updateTargetData(e,n){return this.xn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Wi(e).delete(n.targetId)).next(()=>this.Dn(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.Cn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Wi(e).X((o,a)=>{const u=Bo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Wi(e).X((r,i)=>{const s=Bo(i);n(s)})}Dn(e){return ww(e).get("targetGlobalKey").next(n=>($(n!==null),n))}Cn(e,n){return ww(e).put("targetGlobalKey",n)}xn(e,n){return Wi(e).put(M1(this.Tt,n))}Nn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Dn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ti(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Wi(e).X({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Bo(a);fu(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=nr(e);return n.forEach(o=>{const a=pt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(i)}removeMatchingKeys(e,n,r){const i=nr(e);return v.forEach(n,s=>{const o=pt(s.path);return v.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=nr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=nr(e);let s=z();return i.X({range:r,Z:!0},(o,a,u)=>{const l=dn(o[1]),c=new A(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=pt(n.path),i=IDBKeyRange.bound([r],[ME(r)],!1,!0);let s=0;return nr(e).X({index:"documentTargetsIndex",Z:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ie(e,n){return Wi(e).get(n).next(r=>r?Bo(r):null)}}function Wi(t){return je(t,"targets")}function ww(t){return je(t,"targetGlobal")}function nr(t){return je(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw([t,e],[n,r]){const i=B(t,n);return i===0?B(e,r):i}class qb{constructor(e){this.kn=e,this.buffer=new te(Iw),this.On=0}Mn(){return++this.On}Fn(e){const n=[e,this.Mn()];if(this.buffer.size<this.kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Iw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Kb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.$n=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Bn(6e4)}stop(){this.$n&&(this.$n.cancel(),this.$n=null)}get started(){return this.$n!==null}Bn(e){T("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.$n=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.$n=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$r(n)?T("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mr(n)}await this.Bn(3e5)})}}class Wb{constructor(e,n){this.Ln=e,this.params=n}calculateTargetCount(e,n){return this.Ln.qn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(_t.at);const r=new qb(n);return this.Ln.forEachTarget(e,i=>r.Fn(i.sequenceNumber)).next(()=>this.Ln.Un(e,i=>r.Fn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ln.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ln.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(T("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(vw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(T("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vw):this.Kn(e,n))}getCacheSize(e){return this.Ln.getCacheSize(e)}Kn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(T("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Kf()<=Y.DEBUG&&T("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new Wb(r,i)}(this,n)}qn(e){const n=this.Gn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Gn(e){let n=0;return this.Un(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Un(e,n){return this.Qn(e,(r,i)=>n(i))}addReference(e,n,r){return tl(e,r)}removeReference(e,n,r){return tl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return tl(e,n)}jn(e,n){return function(r,i){let s=!1;return B1(r).tt(o=>V1(r,o,i).next(a=>(a&&(s=!0),v.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Qn(e,(o,a)=>{if(a<=n){const u=this.jn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,F.min()),nr(e).delete([0,pt(o.path)])))});i.push(u)}}).next(()=>v.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return tl(e,n)}Qn(e,n){const r=nr(e);let i,s=_t.at;return r.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==_t.at&&n(new A(dn(i)),s),s=l,i=u):s=_t.at}).next(()=>{s!==_t.at&&n(new A(dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function tl(t,e){return nr(t).put(function(n,r){return{targetId:0,path:pt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.Tt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return jr(e).put(r)}removeEntry(e,n,r){return jr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],dc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.zn(e,r)))}getEntry(e,n){let r=se.newInvalidDocument(n);return jr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ao(n))},(i,s)=>{r=this.Wn(n,s)}).next(()=>r)}Hn(e,n){let r={size:0,document:se.newInvalidDocument(n)};return jr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ao(n))},(i,s)=>{r={document:this.Wn(n,s),size:pc(s)}}).next(()=>r)}getEntries(e,n){let r=Tt();return this.Jn(e,n,(i,s)=>{const o=this.Wn(i,s);r=r.insert(i,o)}).next(()=>r)}Yn(e,n){let r=Tt(),i=new Ie(A.comparator);return this.Jn(e,n,(s,o)=>{const a=this.Wn(s,o);r=r.insert(s,a),i=i.insert(s,pc(o))}).next(()=>({documents:r,Zn:i}))}Jn(e,n,r){if(n.isEmpty())return v.resolve();let i=new te(Tw);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ao(i.first()),Ao(i.last())),o=i.getIterator();let a=o.getNext();return jr(e).X({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=A.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Tw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(Ao(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),dc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return jr(e).W(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=Tt();for(const c of u){const h=this.Wn(A.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(mu(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Tt();const o=Ew(n,r),a=Ew(n,Lt.max());return jr(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.Wn(A.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new Qb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return _w(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}zn(e,n){return _w(e).put("remoteDocumentGlobalKey",n)}Wn(e,n){if(n){const r=Pb(this.Tt,n);if(!(r.isNoDocument()&&r.version.isEqual(F.min())))return r}return se.newInvalidDocument(e)}}function j1(t){return new Hb(t)}class Qb extends z1{constructor(e,n){super(),this.Xn=e,this.trackRemovals=n,this.ts=new Fr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new te((s,o)=>B(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ts.get(s);if(n.push(this.Xn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=uw(this.Xn.Tt,o);i=i.add(s.path.popLast());const l=pc(u);r+=l-a.size,n.push(this.Xn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=uw(this.Xn.Tt,o.convertToNoDocument(F.min()));n.push(this.Xn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Xn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Xn.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.Xn.Hn(e,n).next(r=>(this.ts.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Xn.Yn(e,n).next(({documents:r,Zn:i})=>(i.forEach((s,o)=>{this.ts.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function _w(t){return je(t,"remoteDocumentGlobal")}function jr(t){return je(t,"remoteDocumentsV14")}function Ao(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ew(t,e){const n=e.documentKey.path.toArray();return[t,dc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Tw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=B(n[s],r[s]),i)return i;return i=B(n.length,r.length),i||(i=B(n[n.length-2],r[r.length-2]),i||B(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ta(r.mutation,i,Et.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){const i=hn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tt();const o=na(),a=na();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof jn)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),ta(c.mutation,l,c.mutation.getFieldMask(),he.now())):o.set(l.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Yb(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=na();let i=new Ie((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Et.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=y1();c.forEach(d=>{if(!s.has(d)){const p=h1(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return A.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(hn());let a=-1,u=s;return o.next(l=>v.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:g1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new A(n)).next(r=>{let i=Vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Vo();return this.indexManager.getCollectionParents(e,i).next(o=>v.forEach(o,a=>{const u=function(l,c){return new zn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,se.newInvalidDocument(l)))});let o=Vo();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&ta(l.mutation,u,Et.empty(),he.now()),mu(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return v.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:Ce(r.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:Zm(r.bundledQuery),readTime:Ce(r.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.overlays=new Ie(A.comparator),this.ss=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=hn(),s=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=hn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=hn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return v.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jm(n,r));let s=this.ss.get(n);s===void 0&&(s=z(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.rs=new te(Le.os),this.us=new te(Le.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Le(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Le(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new A(new Q([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new A(new Q([])),r=new Le(n,e),i=new Le(n,e+1);let s=z();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return A.comparator(e.key,n.key)||B(e.gs,n.gs)}static cs(e,n){return B(e.gs,n.gs)||A.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new te(Le.os)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ym(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new te(B);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),v.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;A.isDocumentKey(s)||(s=s.child(""));const o=new Le(new A(s),0);let a=new te(B);return this.ps.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gs)),!0)},o),v.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return v.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new Le(n,0),i=this.ps.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.Rs=e,this.docs=new Ie(A.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():se.newInvalidDocument(n))}getEntries(e,n){let r=Tt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():se.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tt();const o=n.path,a=new A(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||zm(UE(c),r)<=0||(i.has(c.key)||mu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){R()}bs(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tR(this)}getSize(e){return v.resolve(this.size)}}class tR extends z1{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,this.vs=new Fr(n=>Ti(n),fu),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ng,this.targetCount=0,this.Ss=Ai.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),v.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.xn(n),v.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new _t(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new nR(this),this.indexManager=new Bb,this.remoteDocumentCache=function(r){return new eR(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new L1(n),this.Os=new Xb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new Zb(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){T("MemoryPersistence","Starting transaction:",e);const i=new rR(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return v.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class rR extends BE{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Bs=new ng,this.Ls=null}static qs(e){return new hh(e)}get Us(){if(this.Ls)return this.Ls;throw R()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),v.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Us,r=>{const i=A.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return v.or([()=>v.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Tt=e}$(e,n,r,i){const s=new ih("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aw,{unique:!0}),a.createObjectStore("documentMutations")}(e),Sw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Sw(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aw,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return v.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Gs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qs(s)))),r<7&&i>=7&&(o=o.next(()=>this.js(s))),r<8&&i>=8&&(o=o.next(()=>this.zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Ws(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:Ab});u.createIndex("collectionPathOverlayIndex",Db,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",xb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:yb});u.createIndex("documentKeyIndex",vb),u.createIndex("collectionGroupIndex",wb)}(e)).next(()=>this.Hs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.Js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Sb}).createIndex("sequenceNumberIndex",kb,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Cb}).createIndex("documentKeyIndex",Nb,{unique:!1})}(e))),o}Qs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=pc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Gs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>v.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>v.forEach(a,u=>{$(u.userId===s.userId);const l=Qr(this.Tt,u);return U1(e,s.userId,l).next(()=>{})}))}))}js(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const u=new Q(o),l=function(c){return[0,pt(c)]}(u);s.push(n.get(l).next(c=>c?v.resolve():(h=>n.put({targetId:0,path:pt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>v.waitFor(s))})}zs(e,n){e.createObjectStore("collectionParents",{keyPath:Tb});const r=n.store("collectionParents"),i=new tg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:pt(u)})}};return n.store("remoteDocuments").X({Z:!0},(o,a)=>{const u=new Q(o);return s(u.popLast())}).next(()=>n.store("documentMutations").X({Z:!0},([o,a,u],l)=>{const c=dn(a);return s(c.popLast())}))}Ws(e){const n=e.store("targets");return n.X((r,i)=>{const s=Bo(i),o=M1(this.Tt,s);return n.put(o)})}Hs(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new A(Q.fromString(l.document.name).popFirst(5)):l.noDocument?A.fromSegments(l.noDocument.path):l.unknownDocument?A.fromSegments(l.unknownDocument.path):R()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>v.waitFor(i))}Js(e,n){const r=n.store("mutations"),i=j1(this.Tt),s=new K1(hh.qs,this.Tt.oe);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:z();Qr(this.Tt,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),v.forEach(a,(u,l)=>{const c=new $e(l),h=lh.ue(this.Tt,c),d=s.getIndexManager(c),p=ch.ue(c,this.Tt,d,s.referenceDelegate);return new q1(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new np(n,_t.at),u).next()})})}}function Sw(t){t.createObjectStore("targetDocuments",{keyPath:_b}).createIndex("documentTargetsIndex",Eb,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ib,{unique:!0}),t.createObjectStore("targetGlobal")}const Cd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class rg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ys=s,this.window=o,this.document=a,this.Zs=l,this.Xs=c,this.ti=h,this.Cs=null,this.xs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ei=null,this.inForeground=!1,this.ni=null,this.si=null,this.ii=Number.NEGATIVE_INFINITY,this.ri=d=>Promise.resolve(),!rg.C())throw new E(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gb(this,i),this.oi=n+"main",this.Tt=new L1(u),this.ui=new Xt(this.oi,this.ti,new iR(this.Tt)),this.Ns=new jb(this.referenceDelegate,this.Tt),this.remoteDocumentCache=j1(this.Tt),this.Os=new Ob,this.window&&this.window.localStorage?this.ci=this.window.localStorage:(this.ci=null,c===!1&&Se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,Cd);return this.hi(),this.li(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ns.getHighestSequenceNumber(e))}).then(e=>{this.Cs=new _t(e,this.Zs)}).then(()=>{this.xs=!0}).catch(e=>(this.ui&&this.ui.close(),Promise.reject(e)))}di(e){return this.ri=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ui.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ys.enqueueAndForget(async()=>{this.started&&await this.ai()}))}ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>nl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this._i(e).next(n=>{n||(this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)))})}).next(()=>this.wi(e)).next(n=>this.isPrimary&&!n?this.mi(e).next(()=>!1):!!n&&this.gi(e).next(()=>!0))).catch(e=>{if($r(e))return T("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return T("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ys.enqueueRetryable(()=>this.ri(e)),this.isPrimary=e})}_i(e){return Do(e).get("owner").next(n=>v.resolve(this.yi(n)))}pi(e){return nl(e).delete(this.clientId)}async Ii(){if(this.isPrimary&&!this.Ti(this.ii,18e5)){this.ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=je(n,"clientMetadata");return r.W().next(i=>{const s=this.Ei(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ci)for(const n of e)this.ci.removeItem(this.Ai(n.clientId))}}fi(){this.si=this.Ys.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ai().then(()=>this.Ii()).then(()=>this.fi()))}yi(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.Xs?v.resolve(!0):Do(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,Cd);return!1}}return!(!this.networkEnabled||!this.inForeground)||nl(e).W().next(r=>this.Ei(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&T("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.xs=!1,this.bi(),this.si&&(this.si.cancel(),this.si=null),this.vi(),this.Pi(),await this.ui.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new np(e,_t.at);return this.mi(n).next(()=>this.pi(n))}),this.ui.close(),this.Vi()}Ei(e,n){return e.filter(r=>this.Ti(r.updateTimeMs,n)&&!this.Ri(r.clientId))}Si(){return this.runTransaction("getActiveClients","readonly",e=>nl(e).W().next(n=>this.Ei(n,18e5).map(r=>r.clientId)))}get started(){return this.xs}getMutationQueue(e,n){return ch.ue(e,this.Tt,n,this.referenceDelegate)}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zb(e,this.Tt.oe.databaseId)}getDocumentOverlayCache(e){return lh.ue(this.Tt,e)}getBundleCache(){return this.Os}runTransaction(e,n,r){T("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ti)===15?Rb:o===14?O1:o===13?P1:o===12?bb:o===11?R1:void R();var o;let a;return this.ui.runTransaction(e,i,s,u=>(a=new np(u,this.Cs?this.Cs.next():_t.at),n==="readwrite-primary"?this._i(a).next(l=>!!l||this.wi(a)).next(l=>{if(!l)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)),new E(I.FAILED_PRECONDITION,VE);return r(a)}).next(l=>this.gi(a).next(()=>l)):this.Di(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Di(e){return Do(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)&&!this.yi(n)&&!(this.Xs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new E(I.FAILED_PRECONDITION,Cd)})}gi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Do(e).put("owner",n)}static C(){return Xt.C()}mi(e){const n=Do(e);return n.get("owner").next(r=>this.yi(r)?(T("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}Ti(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}hi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ni=()=>{this.Ys.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ai()))},this.document.addEventListener("visibilitychange",this.ni),this.inForeground=this.document.visibilityState==="visible")}vi(){this.ni&&(this.document.removeEventListener("visibilitychange",this.ni),this.ni=null)}li(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ei=()=>{this.bi(),FN()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Ys.enterRestrictedMode(!0),this.Ys.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ei))}Pi(){this.ei&&(this.window.removeEventListener("pagehide",this.ei),this.ei=null)}Ri(e){var n;try{const r=((n=this.ci)===null||n===void 0?void 0:n.getItem(this.Ai(e)))!==null;return T("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Se("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}bi(){if(this.ci)try{this.ci.setItem(this.Ai(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}Vi(){if(this.ci)try{this.ci.removeItem(this.Ai(this.clientId))}catch{}}Ai(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Do(t){return je(t,"owner")}function nl(t){return je(t,"clientMetadata")}function ig(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(Xv(n))return v.resolve(null);let r=Nt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hc(n,null,"F"),r=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Bi(n,a);return this.Li(n,l,o,u.readTime)?this.Mi(e,hc(n,null,"F")):this.qi(e,l,n,u)}))})))}Fi(e,n,r,i){return Xv(n)||i.isEqual(F.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(Kf()<=Y.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zf(n)),this.qi(e,o,n,FE(i,-1)))})}Bi(e,n){let r=new te(r1(e));return n.forEach((i,s)=>{mu(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return Kf()<=Y.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Zf(n)),this.Oi.getDocumentsMatchingQuery(e,n,Lt.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Ie(B),this.Gi=new Fr(s=>Ti(s),fu),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q1(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function G1(t,e,n,r){return new sR(t,e,n,r)}async function H1(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function oR(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const w=u.docVersions.get(p);$(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q1(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function aR(t,e){const n=x(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Re.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,w,b){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,c)&&a.push(n.Ns.updateTargetData(s,p))});let u=Tt(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Y1(s,o,e.documentUpdates).next(c=>{u=c.Hi,l=c.Ji})),!r.isEqual(F.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ki=i,s))}function Y1(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Hi:o,Ji:i}})}function uR(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Us(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new yr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Vs(t,e,n){const r=x(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$r(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function mc(t,e,n){const r=x(t);let i=F.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=x(a),h=c.Gi.get(l);return h!==void 0?v.resolve(c.Ki.get(h)):c.Ns.getTargetData(u,l)}(r,o,Nt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:z())).next(a=>(Z1(r,n1(e),a),{documents:a,Yi:s})))}function X1(t,e){const n=x(t),r=x(n.Ns),i=n.Ki.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ie(s,e).next(o=>o?o.target:null))}function J1(t,e){const n=x(t),r=n.Qi.get(e)||F.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ji.getAllFromCollectionGroup(i,e,FE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Z1(n,e,i),i))}function Z1(t,e,n){let r=t.Qi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}async function lR(t,e,n,r){const i=x(t);let s=z(),o=Tt();for(const l of n){const c=e.Zi(l.metadata.name);l.document&&(s=s.add(c));const h=e.Xi(l);h.setReadTime(e.tr(l.metadata.readTime)),o=o.insert(c,h)}const a=i.ji.newChangeBuffer({trackRemovals:!0}),u=await Us(i,function(l){return Nt(to(Q.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Y1(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Ns.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Ns.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Hi,c.Ji)).next(()=>c.Hi)))}async function cR(t,e,n=z()){const r=await Us(t,Nt(Zm(e.bundledQuery))),i=x(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ce(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Os.saveNamedQuery(s,e);const a=r.withResumeToken(Re.EMPTY_BYTE_STRING,o);return i.Ki=i.Ki.insert(a.targetId,a),i.Ns.updateTargetData(s,a).next(()=>i.Ns.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ns.addMatchingKeys(s,n,r.targetId)).next(()=>i.Os.saveNamedQuery(s,e))})}function kw(t,e){return`firestore_clients_${t}_${e}`}function Cw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Nd(t,e){return`firestore_targets_${t}_${e}`}class gc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static er(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new E(i.error.code,i.error.message))),o?new gc(e,n,i.state,s):(Se("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ra{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static er(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new E(r.error.code,r.error.message))),s?new ra(e,r.state,i):(Se("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}nr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static er(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=uh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jE(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new yc(e,s):(Se("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class og{constructor(e,n){this.clientId=e,this.onlineState=n}static er(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new og(n.clientId,n.onlineState):(Se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class op{constructor(){this.activeTargetIds=uh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ad{constructor(e,n,r,i,s){this.window=e,this.Ys=n,this.persistenceKey=r,this.rr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ur=this.cr.bind(this),this.ar=new Ie(B),this.started=!1,this.hr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.lr=kw(this.persistenceKey,this.rr),this.dr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ar=this.ar.insert(this.rr,new op),this._r=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.wr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.mr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.gr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.yr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ur)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Si();for(const r of e){if(r===this.rr)continue;const i=this.getItem(kw(this.persistenceKey,r));if(i){const s=yc.er(r,i);s&&(this.ar=this.ar.insert(s.clientId,s))}}this.pr();const n=this.storage.getItem(this.gr);if(n){const r=this.Ir(n);r&&this.Tr(r)}for(const r of this.hr)this.cr(r);this.hr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.dr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Er(this.ar)}isActiveQueryTarget(e){let n=!1;return this.ar.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ar(e,"pending")}updateMutationState(e,n,r){this.Ar(e,n,r),this.Rr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Nd(this.persistenceKey,e));if(r){const i=ra.er(e,r);i&&(n=i.state)}}return this.br.sr(e),this.pr(),n}removeLocalQueryTarget(e){this.br.ir(e),this.pr()}isLocalQueryTarget(e){return this.br.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Nd(this.persistenceKey,e))}updateQueryState(e,n,r){this.vr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Rr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ur),this.removeItem(this.lr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return T("SharedClientState","READ",e,n),n}setItem(e,n){T("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){T("SharedClientState","REMOVE",e),this.storage.removeItem(e)}cr(e){const n=e;if(n.storageArea===this.storage){if(T("SharedClientState","EVENT",n.key,n.newValue),n.key===this.lr)return void Se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ys.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this._r.test(n.key)){if(n.newValue==null){const r=this.Sr(n.key);return this.Dr(r,null)}{const r=this.Cr(n.key,n.newValue);if(r)return this.Dr(r.clientId,r)}}else if(this.wr.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(this.mr.test(n.key)){if(n.newValue!==null){const r=this.Or(n.key,n.newValue);if(r)return this.Mr(r)}}else if(n.key===this.gr){if(n.newValue!==null){const r=this.Ir(n.newValue);if(r)return this.Tr(r)}}else if(n.key===this.dr){const r=function(i){let s=_t.at;if(i!=null)try{const o=JSON.parse(i);$(typeof o=="number"),s=o}catch(o){Se("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==_t.at&&this.sequenceNumberHandler(r)}else if(n.key===this.yr){const r=this.Fr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.$r(i)))}}}else this.hr.push(n)})}}get br(){return this.ar.get(this.rr)}pr(){this.setItem(this.lr,this.br.nr())}Ar(e,n,r){const i=new gc(this.currentUser,e,n,r),s=Cw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.nr())}Rr(e){const n=Cw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Pr(e){const n={clientId:this.rr,onlineState:e};this.storage.setItem(this.gr,JSON.stringify(n))}vr(e,n,r){const i=Nd(this.persistenceKey,e),s=new ra(e,n,r);this.setItem(i,s.nr())}Vr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.yr,n)}Sr(e){const n=this._r.exec(e);return n?n[1]:null}Cr(e,n){const r=this.Sr(e);return yc.er(r,n)}Nr(e,n){const r=this.wr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return gc.er(new $e(s),i,n)}Or(e,n){const r=this.mr.exec(e),i=Number(r[1]);return ra.er(i,n)}Ir(e){return og.er(e)}Fr(e){return JSON.parse(e)}async kr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Br(e.batchId,e.state,e.error);T("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Lr(e.targetId,e.state,e.error)}Dr(e,n){const r=n?this.ar.insert(e,n):this.ar.remove(e),i=this.Er(this.ar),s=this.Er(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.qr(o,a).then(()=>{this.ar=r})}Tr(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Er(e){let n=uh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class eT{constructor(){this.Ur=new op,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new op,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);T("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(u=>(T("RestConnection","Received: ",u),u),u=>{throw Rs("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+eo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=dR[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new dx;a.setWithCredentials(!0),a.listenOnce(lx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Sd.NO_ERROR:const l=a.getResponseJson();T("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Sd.TIMEOUT:T("Connection",'RPC "'+e+'" timed out'),o(new E(I.DEADLINE_EXCEEDED,"Request time out"));break;case Sd.HTTP_ERROR:const c=a.getStatus();if(T("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(d.status);o(new E(p,d.message))}else o(new E(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(I.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{T("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ax(),o=ux(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new hx({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");T("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new fR({Yr:y=>{h?T("Connection","Not sending because WebChannel is closed:",y):(c||(T("Connection","Opening WebChannel transport."),l.open(),c=!0),T("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),p=(y,w,b)=>{y.listen(w,m=>{try{b(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,Xu.EventType.OPEN,()=>{h||T("Connection","WebChannel transport opened.")}),p(l,Xu.EventType.CLOSE,()=>{h||(h=!0,T("Connection","WebChannel transport closed"),d.oo())}),p(l,Xu.EventType.ERROR,y=>{h||(h=!0,Rs("Connection","WebChannel transport errored:",y),d.oo(new E(I.UNAVAILABLE,"The operation could not be completed")))}),p(l,Xu.EventType.MESSAGE,y=>{var w;if(!h){const b=y.data[0];$(!!b);const m=b,f=m.error||((w=m[0])===null||w===void 0?void 0:w.error);if(f){T("Connection","WebChannel received error:",f);const g=f.status;let _=function(N){const D=Ne[N];if(D!==void 0)return p1(D)}(g),C=f.message;_===void 0&&(_=I.INTERNAL,C="Unknown error status: "+g+" with message "+f.message),h=!0,d.oo(new E(_,C)),l.close()}else T("Connection","WebChannel received:",b),d.uo(b)}}),p(o,cx.STAT_EVENT,y=>{y.stat===$v.PROXY?T("Connection","Detected buffering proxy"):y.stat===$v.NOPROXY&&T("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof window<"u"?window:null}function _l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new sb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,i,s,o,a,u){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new ag(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Se(n.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new E(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mR extends nT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=ub(this.Tt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Ce(s.readTime):F.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Va(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=lc(a)?{documents:k1(i,a)}:{query:C1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=I1(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Fs(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=cb(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Va(this.Tt),n.removeTarget=e,this.qo(n)}}class gR extends nT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=lb(e.writeResults,e.commitTime),r=Ce(e.commitTime);return this.listener.eu(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Va(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ba(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(I.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(I.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class vR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Se(n),this.cu=!1):T("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=x(a);u.mu.add(4),await io(u),u.pu.set("Unknown"),u.mu.delete(4),await Iu(u)}(this))})}),this.pu=new vR(r,i)}}async function Iu(t){if(Ur(t))for(const e of t.gu)await e(!0)}async function io(t){for(const e of t.gu)await e(!1)}function dh(t,e){const n=x(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),cg(n)?lg(n):oo(n).Mo()&&ug(n,e))}function za(t,e){const n=x(t),r=oo(n);n.wu.delete(e),r.Mo()&&rT(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Ur(n)&&n.pu.set("Unknown"))}function ug(t,e){t.Iu.Ft(e.targetId),oo(t).Jo(e)}function rT(t,e){t.Iu.Ft(e),oo(t).Yo(e)}function lg(t){t.Iu=new tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),oo(t).start(),t.pu.au()}function cg(t){return Ur(t)&&!oo(t).Oo()&&t.wu.size>0}function Ur(t){return x(t).mu.size===0}function iT(t){t.Iu=void 0}async function IR(t){t.wu.forEach((e,n)=>{ug(t,e)})}async function _R(t,e){iT(t),cg(t)?(t.pu.fu(e),lg(t)):t.pu.set("Unknown")}async function ER(t,e,n){if(t.pu.set("Online"),e instanceof w1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vc(t,r)}else if(e instanceof wl?t.Iu.Qt(e):e instanceof v1?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(F.min()))try{const r=await Q1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(u);l&&i.wu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.wu.get(a);if(!u)return;i.wu.set(a,u.withResumeToken(Re.EMPTY_BYTE_STRING,u.snapshotVersion)),rT(i,a);const l=new yr(u.target,a,1,u.sequenceNumber);ug(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await vc(t,r)}}async function vc(t,e,n){if(!$r(e))throw e;t.mu.add(1),await io(t),t.pu.set("Offline"),n||(n=()=>Q1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Iu(t)})}function sT(t,e){return e().catch(n=>vc(t,n,e))}async function so(t){const e=x(t),n=Ar(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;TR(e);)try{const i=await uR(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,SR(e,i)}catch(i){await vc(e,i)}oT(e)&&aT(e)}function TR(t){return Ur(t)&&t._u.length<10}function SR(t,e){t._u.push(e);const n=Ar(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function oT(t){return Ur(t)&&!Ar(t).Oo()&&t._u.length>0}function aT(t){Ar(t).start()}async function kR(t){Ar(t).su()}async function CR(t){const e=Ar(t);for(const n of t._u)e.tu(n.mutations)}async function NR(t,e,n){const r=t._u.shift(),i=Xm.from(r,e,n);await sT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await so(t)}async function AR(t,e){e&&Ar(t).Xo&&await async function(n,r){if(i=r.code,f1(i)&&i!==I.ABORTED){const s=n._u.shift();Ar(n).$o(),await sT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await so(n)}var i}(t,e),oT(t)&&aT(t)}async function Aw(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.mu.add(3),await io(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Iu(n)}async function ap(t,e){const n=x(t);e?(n.mu.delete(2),await Iu(n)):e||(n.mu.add(2),await io(n),n.pu.set("Unknown"))}function oo(t){return t.Tu||(t.Tu=function(e,n,r){const i=x(e);return i.ru(),new mR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:IR.bind(null,t),no:_R.bind(null,t),Ho:ER.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),cg(t)?lg(t):t.pu.set("Unknown")):(await t.Tu.stop(),iT(t))})),t.Tu}function Ar(t){return t.Eu||(t.Eu=function(e,n,r){const i=x(e);return i.ru(),new gR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:kR.bind(null,t),no:AR.bind(null,t),nu:CR.bind(null,t),eu:NR.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await so(t)):(await t.Eu.stop(),t._u.length>0&&(T("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(t,e){if(Se("AsyncQueue",`${e}: ${t}`),$r(t))return new E(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||A.comparator(n.key,r.key):(n,r)=>A.comparator(n.key,r.key),this.keyedMap=Vo(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.Au=new Ie(A.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):R():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.bu=void 0,this.listeners=[]}}class xR{constructor(){this.queries=new Fr(e=>t1(e),pu),this.onlineState="Unknown",this.vu=new Set}}async function dg(t,e){const n=x(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DR),i)try{s.bu=await n.onListen(r)}catch(o){const a=ao(o,`Initialization of query '${Zf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.bu&&e.Vu(s.bu)&&pg(n)}async function fg(t,e){const n=x(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bR(t,e){const n=x(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.bu=i}}r&&pg(n)}function RR(t,e,n){const r=x(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function pg(t){t.vu.forEach(e=>{e.next()})}class mg{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ou||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.Mu=e,this.byteLength=n}Fu(){return"metadata"in this.Mu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.Tt=e}Zi(e){return yn(this.Tt,e)}Xi(e){return e.metadata.exists?S1(this.Tt,e.document,!1):se.newNoDocument(this.Zi(e.metadata.name),this.tr(e.metadata.readTime))}tr(e){return Ce(e)}}class OR{constructor(e,n,r){this.$u=e,this.localStore=n,this.Tt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=uT(e)}Bu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Mu.namedQuery)this.queries.push(e.Mu.namedQuery);else if(e.Mu.documentMetadata){this.documents.push({metadata:e.Mu.documentMetadata}),e.Mu.documentMetadata.exists||++n;const r=Q.fromString(e.Mu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Mu.document&&(this.documents[this.documents.length-1].document=e.Mu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Lu(e){const n=new Map,r=new xw(this.Tt);for(const i of e)if(i.metadata.queries){const s=r.Zi(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||z()).add(s);n.set(o,a)}}return n}async complete(){const e=await lR(this.localStore,new xw(this.Tt),this.documents,this.$u.id),n=this.Lu(this.documents);for(const r of this.queries)await cR(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,qu:this.collectionGroups,Uu:e}}}function uT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.key=e}}class cT{constructor(e){this.key=e}}class hT{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=z(),this.mutatedKeys=z(),this.ju=r1(e),this.zu=new Is(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Dw,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=mu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(r.track({type:3,doc:p}),b=!0):this.Yu(d,p)||(r.track({type:2,doc:p}),b=!0,(u&&this.ju(p,u)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),b=!0):d&&!p&&(r.track({type:1,doc:d}),b=!0,(u||l)&&(a=!0)),b&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((l,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return p(h)-p(d)}(l.type,c.type)||this.ju(l.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,u=a!==this.Gu;return this.Gu=a,s.length!==0||u?{snapshot:new Bs(this.query,e.zu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Dw,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=z(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new cT(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new lT(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=z();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Bs.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class LR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MR{constructor(e){this.key=e,this.ic=!1}}class $R{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Fr(a=>t1(a),pu),this.uc=new Map,this.cc=new Set,this.ac=new Ie(A.comparator),this.hc=new Map,this.lc=new ng,this.fc={},this.dc=new Map,this._c=Ai.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function FR(t,e){const n=Ig(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await Us(n.localStore,Nt(e));n.isPrimaryClient&&dh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gg(n,e,r,a==="current",o.resumeToken)}return i}async function gg(t,e,n,r,i){t.mc=(h,d,p)=>async function(y,w,b,m){let f=w.view.Hu(b);f.Li&&(f=await mc(y.localStore,w.query,!1).then(({documents:C})=>w.view.Hu(C,f)));const g=m&&m.targetChanges.get(w.targetId),_=w.view.applyChanges(f,y.isPrimaryClient,g);return up(y,w.targetId,_.tc),_.snapshot}(t,h,d,p);const s=await mc(t.localStore,e,!0),o=new hT(e,s.Yi),a=o.Hu(s.documents),u=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);up(t,n,l.tc);const c=new LR(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function UR(t,e){const n=x(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!pu(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),za(n.remoteStore,r.targetId),zs(n,r.targetId)}).catch(Mr)):(zs(n,r.targetId),await Vs(n.localStore,r.targetId,!0))}async function VR(t,e,n){const r=_g(t);try{const i=await function(s,o){const a=x(s),u=he.now(),l=o.reduce((d,p)=>d.add(p.key),z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),y=z();return a.ji.getEntries(d,l).next(w=>{p=w,p.forEach((b,m)=>{m.isValidDocument()||(y=y.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{c=w;const b=[];for(const m of o){const f=Qx(m,c.get(m.key).overlayedDocument);f!=null&&b.push(new jn(m.key,f,ZE(f.value.mapValue),ce.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,b,o)}).next(w=>{h=w;const b=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,b)})}).then(()=>({batchId:h.batchId,changes:g1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.fc[s.currentUser.toKey()];u||(u=new Ie(B)),u=u.insert(o,a),s.fc[s.currentUser.toKey()]=u}(r,i.batchId,n),await qn(r,i.changes),await so(r.remoteStore)}catch(i){const s=ao(i,"Failed to persist write");n.reject(s)}}async function dT(t,e){const n=x(t);try{const r=await aR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?$(o.ic):i.removedDocuments.size>0&&($(o.ic),o.ic=!1))}),await qn(n,r,e)}catch(r){await Mr(r)}}function bw(t,e,n){const r=x(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=x(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Pu(o)&&(u=!0)}),u&&pg(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=x(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Ie(A.comparator);o=o.insert(s,se.newNoDocument(s,F.min()));const a=z().add(s),u=new yu(F.min(),new Map,new te(B),o,a);await dT(r,u),r.ac=r.ac.remove(s),r.hc.delete(e),wg(r)}else await Vs(r.localStore,e,!1).then(()=>zs(r,e,n)).catch(Mr)}async function zR(t,e){const n=x(t),r=e.batch.batchId;try{const i=await oR(n.localStore,e);vg(n,r,null),yg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qn(n,i)}catch(i){await Mr(i)}}async function jR(t,e,n){const r=x(t);try{const i=await function(s,o){const a=x(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>($(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);vg(r,e,n),yg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qn(r,i)}catch(i){await Mr(i)}}async function qR(t,e){const n=x(t);Ur(n.remoteStore)||T("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=x(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.dc.get(r)||[];i.push(e),n.dc.set(r,i)}catch(r){const i=ao(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function yg(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function vg(t,e,n){const r=x(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function zs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||fT(t,r)})}function fT(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(za(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),wg(t))}function up(t,e,n){for(const r of n)r instanceof lT?(t.lc.addReference(r.key,e),KR(t,r)):r instanceof cT?(T("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||fT(t,r.key)):R()}function KR(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(T("SyncEngine","New document in limbo: "+n),t.cc.add(r),wg(t))}function wg(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new A(Q.fromString(e)),r=t._c.next();t.hc.set(r,new MR(n)),t.ac=t.ac.insert(n,r),dh(t.remoteStore,new yr(Nt(to(n.path)),r,2,_t.at))}}async function qn(t,e,n){const r=x(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,u)=>{o.push(r.mc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=sg.Ni(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,u){const l=x(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>v.forEach(u,h=>v.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>v.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$r(c))throw c;T("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(r.localStore,s))}async function WR(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const r=await H1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new E(I.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qn(n,r.Wi)}}function GR(t,e){const n=x(t),r=n.hc.get(e);if(r&&r.ic)return z().add(r.key);{let i=z();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}async function HR(t,e){const n=x(t),r=await mc(n.localStore,e.query,!0),i=e.view.nc(r);return n.isPrimaryClient&&up(n,e.targetId,i.tc),i}async function QR(t,e){const n=x(t);return J1(n.localStore,e).then(r=>qn(n,r))}async function YR(t,e,n,r){const i=x(t),s=await function(o,a){const u=x(o),l=x(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.An(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):v.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await so(i.remoteStore):n==="acknowledged"||n==="rejected"?(vg(i,e,r||null),yg(i,e),function(o,a){x(x(o).mutationQueue).bn(a)}(i.localStore,e)):R(),await qn(i,s)):T("SyncEngine","Cannot apply mutation batch with id: "+e)}async function XR(t,e){const n=x(t);if(Ig(n),_g(n),e===!0&&n.wc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Rw(n,r.toArray());n.wc=!0,await ap(n.remoteStore,!0);for(const s of i)dh(n.remoteStore,s)}else if(e===!1&&n.wc!==!1){const r=[];let i=Promise.resolve();n.uc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(zs(n,o),Vs(n.localStore,o,!0))),za(n.remoteStore,o)}),await i,await Rw(n,r),function(s){const o=x(s);o.hc.forEach((a,u)=>{za(o.remoteStore,u)}),o.lc._s(),o.hc=new Map,o.ac=new Ie(A.comparator)}(n),n.wc=!1,await ap(n.remoteStore,!1)}}async function Rw(t,e,n){const r=x(t),i=[],s=[];for(const o of e){let a;const u=r.uc.get(o);if(u&&u.length!==0){a=await Us(r.localStore,Nt(u[0]));for(const l of u){const c=r.oc.get(l),h=await HR(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await X1(r.localStore,o);a=await Us(r.localStore,l),await gg(r,pT(l),o,!1,a.resumeToken)}i.push(a)}return r.rc.Ho(s),i}function pT(t){return e1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function JR(t){const e=x(t);return x(x(e.localStore).persistence).Si()}async function ZR(t,e,n,r){const i=x(t);if(i.wc)return void T("SyncEngine","Ignoring unexpected query state notification.");const s=i.uc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await J1(i.localStore,n1(s[0])),a=yu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Re.EMPTY_BYTE_STRING);await qn(i,o,a);break}case"rejected":await Vs(i.localStore,e,!0),zs(i,e,r);break;default:R()}}async function eP(t,e,n){const r=Ig(t);if(r.wc){for(const i of e){if(r.uc.has(i)){T("SyncEngine","Adding an already active target "+i);continue}const s=await X1(r.localStore,i),o=await Us(r.localStore,s);await gg(r,pT(s),o.targetId,!1,o.resumeToken),dh(r.remoteStore,o)}for(const i of n)r.uc.has(i)&&await Vs(r.localStore,i,!1).then(()=>{za(r.remoteStore,i),zs(r,i)}).catch(Mr)}}function Ig(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.rc.Ho=bR.bind(null,e.eventManager),e.rc.gc=RR.bind(null,e.eventManager),e}function _g(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}function tP(t,e,n){const r=x(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=x(h),y=Ce(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",w=>p.Os.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(uT(a));const u=new OR(a,i.localStore,s.Tt);let l=await s.yc();for(;l;){const h=await u.Bu(l);h&&o._updateProgress(h),l=await s.yc()}const c=await u.complete();return await qn(i,c.Uu,void 0),await function(h,d){const p=x(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Os.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.qu)}catch(a){return Rs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class mT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return G1(this.persistence,new W1,e.initialUser,this.Tt)}Tc(e){return new K1(hh.qs,this.Tt)}Ic(e){return new eT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gT extends mT{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await _g(this.bc.syncEngine),await so(this.bc.remoteStore),await this.persistence.di(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ec(e){return G1(this.persistence,new W1,e.initialUser,this.Tt)}Ac(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Kb(r,e.asyncQueue,n)}Rc(e,n){const r=new Ax(n,this.persistence);return new Nx(e.asyncQueue,r)}Tc(e){const n=ig(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new rg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,tT(),_l(),this.Tt,this.sharedClientState,!!this.forceOwnership)}Ic(e){return new eT}}class nP extends gT{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof Ad&&(this.sharedClientState.syncEngine={Br:YR.bind(null,n),Lr:ZR.bind(null,n),qr:eP.bind(null,n),Si:JR.bind(null,n),$r:QR.bind(null,n)},await this.sharedClientState.start()),await this.persistence.di(async r=>{await XR(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Ic(e){const n=tT();if(!Ad.C(n))throw new E(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ig(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ad(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Eg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xR}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new pR(i));var i;return function(s,o,a,u){return new yR(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>bw(this.syncEngine,a,0),o=Nw.C()?new Nw:new hR,new wR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new $R(r,i,s,o,a,u);return l&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);T("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await io(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.Vc=e,this.Tt=n,this.metadata=new Ve,this.buffer=new Uint8Array,this.Sc=new TextDecoder("utf-8"),this.Dc().then(r=>{r&&r.Fu()?this.metadata.resolve(r.Mu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Mu)}`))},r=>this.metadata.reject(r))}close(){return this.Vc.cancel()}async getMetadata(){return this.metadata.promise}async yc(){return await this.getMetadata(),this.Dc()}async Dc(){const e=await this.Cc();if(e===null)return null;const n=this.Sc.decode(e),r=Number(n);isNaN(r)&&this.xc(`length string (${n}) is not valid number`);const i=await this.Nc(r);return new PR(JSON.parse(i),e.length+r)}kc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Cc(){for(;this.kc()<0&&!await this.Oc(););if(this.buffer.length===0)return null;const e=this.kc();e<0&&this.xc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Nc(e){for(;this.buffer.length<e;)await this.Oc()&&this.xc("Reached the end of bundle when more is expected.");const n=this.Sc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}xc(e){throw this.Vc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Oc(){const e=await this.Vc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=x(r),o=Va(s.Tt)+"/documents",a={documents:i.map(h=>Ua(s.Tt,h))},u=await s.mo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=ab(s.Tt,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());$(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ro(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=A.fromPath(r);this.mutations.push(new Hm(i,this.precondition(i)))}),await async function(n,r){const i=x(n),s=Va(i.Tt)+"/documents",o={writes:r.map(a=>Ba(i.Tt,a))};await i.lo("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw R();n=F.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new E(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?ce.exists(!1):ce.updateTime(n):ce.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new E(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ce.updateTime(n)}return ce.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Mc=r.maxAttempts,this.ko=new ag(this.asyncQueue,"transaction_retry")}run(){this.Mc-=1,this.Fc()}Fc(){this.ko.vo(async()=>{const e=new iP(this.datastore),n=this.$c(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Bc(i)}))}).catch(r=>{this.Bc(r)})})}$c(e){try{const n=this.updateFunction(e);return!du(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Bc(e){this.Mc>0&&this.Lc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Fc(),Promise.resolve()))):this.deferred.reject(e)}Lc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!f1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=LE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ao(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yT(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await H1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tg(t);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Aw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Aw(e.remoteStore,s)),t.onlineComponents=e}async function Tg(t){return t.offlineComponents||(T("FirestoreClient","Using default OfflineComponentProvider"),await yT(t,new mT)),t.offlineComponents}async function ph(t){return t.onlineComponents||(T("FirestoreClient","Using default OnlineComponentProvider"),await vT(t,new Eg)),t.onlineComponents}function wT(t){return Tg(t).then(e=>e.persistence)}function Sg(t){return Tg(t).then(e=>e.localStore)}function IT(t){return ph(t).then(e=>e.remoteStore)}function kg(t){return ph(t).then(e=>e.syncEngine)}function aP(t){return ph(t).then(e=>e.datastore)}async function js(t){const e=await ph(t),n=e.eventManager;return n.onListen=FR.bind(null,e.syncEngine),n.onUnlisten=UR.bind(null,e.syncEngine),n}function uP(t){return t.asyncQueue.enqueue(async()=>{const e=await wT(t),n=await IT(t);return e.setNetworkEnabled(!0),function(r){const i=x(r);return i.mu.delete(0),Iu(i)}(n)})}function lP(t){return t.asyncQueue.enqueue(async()=>{const e=await wT(t),n=await IT(t);return e.setNetworkEnabled(!1),async function(r){const i=x(r);i.mu.add(0),await io(i),i.pu.set("Offline")}(n)})}function cP(t,e){const n=new Ve;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=x(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new E(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ao(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Sg(t),e,n)),n.promise}function _T(t,e,n={}){const r=new Ve;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new fh({next:h=>{s.enqueueAndForget(()=>fg(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new E(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new E(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new mg(to(o.path),l,{includeMetadataChanges:!0,Ou:!0});return dg(i,c)}(await js(t),t.asyncQueue,e,n,r)),r.promise}function hP(t,e){const n=new Ve;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await mc(r,i,!0),a=new hT(i,o.Yi),u=a.Hu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=ao(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Sg(t),e,n)),n.promise}function ET(t,e,n={}){const r=new Ve;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new fh({next:h=>{s.enqueueAndForget(()=>fg(i,c)),h.fromCache&&a.source==="server"?u.reject(new E(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new mg(o,l,{includeMetadataChanges:!0,Ou:!0});return dg(i,c)}(await js(t),t.asyncQueue,e,n,r)),r.promise}function dP(t,e){const n=new fh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).vu.add(i),i.next()}(await js(t),n)),()=>{n.Pc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).vu.delete(i)}(await js(t),n))}}function fP(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new rP(u,l)}(function(u,l){if(u instanceof Uint8Array)return Pw(u,l);if(u instanceof ArrayBuffer)return Pw(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,wu(e));t.asyncQueue.enqueueAndForget(async()=>{tP(await kg(t),i,r)})}function pP(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=x(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Os.getNamedQuery(s,r))}(await Sg(t),e))}const Ow=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e,n){if(!n)throw new E(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TT(t,e,n,r){if(e===!0&&r===!0)throw new E(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lw(t){if(!A.isDocumentKey(t))throw new E(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mw(t){if(A.isDocumentKey(t))throw new E(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R()}function J(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new E(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ST(t,e){if(e<=0)throw new E(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,TT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $w({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $w(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mx;switch(n.type){case"gapi":const r=n.client;return new wx(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ow.get(e);n&&(T("ComponentProvider","Removing Datastore"),Ow.delete(e),n.terminate())}(this),Promise.resolve()}}function mP(t,e,n,r={}){var i;const s=(t=J(t,_u))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Rs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=$e.MOCK_USER;else{o=LN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new E(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(u)}t._authCredentials=new gx(new OE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}}class Ze{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ze(this.firestore,e,this._query)}}class vn extends Ze{constructor(e,n,r){super(e,n,to(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new A(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}function kT(t,e,...n){if(t=U(t),Cg("collection","path",e),t instanceof _u){const r=Q.fromString(e,...n);return Mw(r),new vn(t,null,r)}{if(!(t instanceof ae||t instanceof vn))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Q.fromString(e,...n));return Mw(r),new vn(t.firestore,null,r)}}function gP(t,e){if(t=J(t,_u),Cg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ze(t,null,function(n){return new zn(Q.emptyPath(),n)}(e))}function wc(t,e,...n){if(t=U(t),arguments.length===1&&(e=LE.R()),Cg("doc","path",e),t instanceof _u){const r=Q.fromString(e,...n);return Lw(r),new ae(t,null,new A(r))}{if(!(t instanceof ae||t instanceof vn))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Q.fromString(e,...n));return Lw(r),new ae(t.firestore,t instanceof vn?t.converter:null,new A(r))}}function CT(t,e){return t=U(t),e=U(e),(t instanceof ae||t instanceof vn)&&(e instanceof ae||e instanceof vn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Ng(t,e){return t=U(t),e=U(e),t instanceof Ze&&e instanceof Ze&&t.firestore===e.firestore&&pu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new ag(this,"async_queue_retry"),this.Hc=()=>{const n=_l();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=_l();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=_l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ve;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!$r(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&R()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function lp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vP{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ve,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=-1;class _e extends _u{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new yP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NT(this),this._firestoreClient.terminate()}}function qe(t){return t._firestoreClient||NT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Dx(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oP(t._authCredentials,t._appCheckCredentials,t._queue,r)}function IP(t,e){DT(t=J(t,_e));const n=qe(t),r=t._freezeSettings(),i=new Eg;return AT(n,i,new gT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function _P(t){DT(t=J(t,_e));const e=qe(t),n=t._freezeSettings(),r=new Eg;return AT(e,r,new nP(r,n.cacheSizeBytes))}function AT(t,e,n){const r=new Ve;return t.asyncQueue.enqueue(async()=>{try{await yT(t,n),await vT(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===I.FAILED_PRECONDITION||o.code===I.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Rs("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function EP(t){if(t._initialized&&!t._terminated)throw new E(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ve;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Xt.C())return Promise.resolve();const r=n+"main";await Xt.delete(r)}(ig(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function TP(t){return function(e){const n=new Ve;return e.asyncQueue.enqueueAndForget(async()=>qR(await kg(e),n)),n.promise}(qe(t=J(t,_e)))}function SP(t){return uP(qe(t=J(t,_e)))}function kP(t){return lP(qe(t=J(t,_e)))}function CP(t,e){const n=qe(t=J(t,_e)),r=new vP;return fP(n,t._databaseId,e,r),r}function NP(t,e){return pP(qe(t=J(t,_e)),e).then(n=>n?new Ze(t,null,n.query):null)}function DT(t){if(t._initialized||t._terminated)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Re.fromBase64String(e))}catch(n){throw new E(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _n(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^__.*__$/;class DP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new no(e,this.data,n,this.fieldTransforms)}}class xT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class yh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ic(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(bT(this.ra)&&AP.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class xP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||wu(e)}wa(e,n,r,i=!1){return new yh({ra:e,methodName:n,_a:r,path:ke.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Vi(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new xP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vh(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);bg("Data must be an object, but it was:",o,r);const a=OT(r,o);let u,l;if(s.merge)u=new Et(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=cp(e,h,n);if(!o.contains(d))throw new E(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MT(c,d)||c.push(d)}u=new Et(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new DP(new He(a),u,l)}class Eu extends Ui{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function RT(t,e,n){return new yh({ra:3,_a:e.settings._a,methodName:t._methodName,ca:n},e.databaseId,e.Tt,e.ignoreUndefinedProperties)}class Ag extends Ui{_toFieldTransform(e){return new gu(e.path,new Ms)}isEqual(e){return e instanceof Ag}}class bP extends Ui{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=RT(this,e,!0),r=this.ma.map(s=>Bi(s,n)),i=new Si(r);return new gu(e.path,i)}isEqual(e){return this===e}}class RP extends Ui{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=RT(this,e,!0),r=this.ma.map(s=>Bi(s,n)),i=new ki(r);return new gu(e.path,i)}isEqual(e){return this===e}}class PP extends Ui{constructor(e,n){super(e),this.ga=n}_toFieldTransform(e){const n=new $s(e.Tt,o1(e.Tt,this.ga));return new gu(e.path,n)}isEqual(e){return this===e}}function Dg(t,e,n,r){const i=t.wa(1,e,n);bg("Data must be an object, but it was:",i,r);const s=[],o=He.empty();Fi(r,(u,l)=>{const c=Rg(e,u,n);l=U(l);const h=i.ha(c);if(l instanceof Eu)s.push(c);else{const d=Bi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Et(s);return new xT(o,a,i.fieldTransforms)}function xg(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[cp(e,r,n)],u=[i];if(s.length%2!=0)throw new E(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cp(e,s[d])),u.push(s[d+1]);const l=[],c=He.empty();for(let d=a.length-1;d>=0;--d)if(!MT(l,a[d])){const p=a[d];let y=u[d];y=U(y);const w=o.ha(p);if(y instanceof Eu)l.push(p);else{const b=Bi(y,w);b!=null&&(l.push(p),c.set(p,b))}}const h=new Et(l);return new xT(c,h,o.fieldTransforms)}function PT(t,e,n,r=!1){return Bi(n,t.wa(r?4:3,e))}function Bi(t,e){if(LT(t=U(t)))return bg("Unsupported field value:",e,t),OT(t,e);if(t instanceof Ui)return function(n,r){if(!bT(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Bi(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return o1(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=he.fromDate(n);return{timestampValue:Fs(r.Tt,i)}}if(n instanceof he){const i=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fs(r.Tt,i)}}if(n instanceof gh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _n)return{bytesValue:I1(r.Tt,n._byteString)};if(n instanceof ae){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${mh(n)}`)}(t,e)}function OT(t,e){const n={};return zE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=Bi(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof gh||t instanceof _n||t instanceof ae||t instanceof Ui)}function bg(t,e,n){if(!LT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=mh(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function cp(t,e,n){if((e=U(e))instanceof Dr)return e._internalPath;if(typeof e=="string")return Rg(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const OP=new RegExp("[~\\*/\\[\\]]");function Rg(t,e,n){if(e.search(OP)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dr(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new E(I.INVALID_ARGUMENT,a+t+u)}function MT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LP extends ja{data(){return super.data()}}function wh(t,e){return typeof e=="string"?Rg(t,e):e instanceof Dr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pg{}class Tu extends Pg{}function Yn(t,e,...n){let r=[];e instanceof Pg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Og).length,o=i.filter(a=>a instanceof Ih).length;if(s>1||s>0&&o>0)throw new E(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ih extends Tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ih(e,n,r)}_apply(e){const n=this._parse(e);return UT(e._query,n),new Ze(e.firestore,e.converter,Jf(e._query,n))}_parse(e){const n=Vi(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new E(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Uw(c,l);const d=[];for(const p of c)d.push(Fw(a,i,p));h={arrayValue:{values:d}}}else h=Fw(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Uw(c,l),h=PT(o,s,c,l==="in"||l==="not-in");return W.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MP(t,e,n){const r=e,i=wh("where",t);return Ih._create(i,r,n)}class Og extends Pg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Og(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Z.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)UT(s,a),s=Jf(s,a)}(e._query,n),new Ze(e.firestore,e.converter,Jf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lg extends Tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ws(i,s);return function(a,u){if(Wm(a)===null){const l=sh(a);l!==null&&VT(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new Ze(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new zn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function $P(t,e="asc"){const n=e,r=wh("orderBy",t);return Lg._create(r,n)}class _h extends Tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _h(e,n,r)}_apply(e){return new Ze(e.firestore,e.converter,hc(e._query,this._limit,this._limitType))}}function FP(t){return ST("limit",t),_h._create("limit",t,"F")}function UP(t){return ST("limitToLast",t),_h._create("limitToLast",t,"L")}class Eh extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){const n=FT(e,this.type,this._docOrFields,this._inclusive);return new Ze(e.firestore,e.converter,function(r,i){return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function VP(...t){return Eh._create("startAt",t,!0)}function BP(...t){return Eh._create("startAfter",t,!1)}class Th extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Th(e,n,r)}_apply(e){const n=FT(e,this.type,this._docOrFields,this._inclusive);return new Ze(e.firestore,e.converter,function(r,i){return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function zP(...t){return Th._create("endBefore",t,!1)}function jP(...t){return Th._create("endAt",t,!0)}function FT(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof ja)return function(i,s,o,a,u){if(!a)throw new E(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of ci(i))if(c.field.isKeyField())l.push(Ei(s,a.key));else{const h=a.data.field(c.field);if(qm(h))throw new E(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new E(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Nr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Vi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new E(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new E(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Gm(s)&&y.indexOf("/")!==-1)throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=s.path.child(Q.fromString(y));if(!A.isDocumentKey(w))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const b=new A(w);d.push(Ei(o,b))}else{const w=PT(a,u,y);d.push(w)}}return new Nr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Fw(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new E(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gm(e)&&n.indexOf("/")!==-1)throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Q.fromString(n));if(!A.isDocumentKey(r))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ei(t,new A(r))}if(n instanceof ae)return Ei(t,n._key);throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function Uw(t,e){if(!Array.isArray(t)||t.length===0)throw new E(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UT(t,e){if(e.isInequality()){const r=sh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new E(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Wm(t);s!==null&&VT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function VT(t,e,n){if(!n.isEqual(e))throw new E(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Mg{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw R()}}convertObject(e,n){const r={};return Fi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gh(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const n=kr(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Q.fromString(e);$(x1(r));const i=new Sr(r.get(1),r.get(3)),s=new A(r.popFirst(5));return i.isEqual(n)||Se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class qP extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Un extends ja{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ia extends Un{data(e={}){return super.data(e)}}class xr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ii(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ia(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ii(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ii(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:KP(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function BT(t,e){return t instanceof Un&&e instanceof Un?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof xr&&e instanceof xr&&t._firestore===e._firestore&&Ng(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){t=J(t,ae);const e=J(t.firestore,_e);return _T(qe(e),t._key).then(n=>$g(e,t,n))}class zi extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,n)}}function GP(t){t=J(t,ae);const e=J(t.firestore,_e),n=qe(e),r=new zi(e);return cP(n,t._key).then(i=>new Un(e,r,t._key,i,new ii(i!==null&&i.hasLocalMutations,!0),t.converter))}function HP(t){t=J(t,ae);const e=J(t.firestore,_e);return _T(qe(e),t._key,{source:"server"}).then(n=>$g(e,t,n))}function QP(t){t=J(t,Ze);const e=J(t.firestore,_e),n=qe(e),r=new zi(e);return $T(t._query),ET(n,t._query).then(i=>new xr(e,r,t,i))}function YP(t){t=J(t,Ze);const e=J(t.firestore,_e),n=qe(e),r=new zi(e);return hP(n,t._query).then(i=>new xr(e,r,t,i))}function XP(t){t=J(t,Ze);const e=J(t.firestore,_e),n=qe(e),r=new zi(e);return ET(n,t._query,{source:"server"}).then(i=>new xr(e,r,t,i))}function Vw(t,e,n){t=J(t,ae);const r=J(t.firestore,_e),i=Sh(t.converter,e,n);return Su(r,[vh(Vi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ce.none())])}function Bw(t,e,n,...r){t=J(t,ae);const i=J(t.firestore,_e),s=Vi(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Dr?xg(s,"updateDoc",t._key,e,n,r):Dg(s,"updateDoc",t._key,e),Su(i,[o.toMutation(t._key,ce.exists(!0))])}function JP(t){return Su(J(t.firestore,_e),[new ro(t._key,ce.none())])}function ZP(t,e){const n=J(t.firestore,_e),r=wc(t),i=Sh(t.converter,e);return Su(n,[vh(Vi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ce.exists(!1))]).then(()=>r)}function _c(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||lp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(lp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ae)l=J(t.firestore,_e),c=to(t._key.path),u={next:h=>{e[o]&&e[o]($g(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=J(t,Ze);l=J(h.firestore,_e),c=h._query;const d=new zi(l);u={next:p=>{e[o]&&e[o](new xr(l,d,h,p))},error:e[o+1],complete:e[o+2]},$T(t._query)}return function(h,d,p,y){const w=new fh(y),b=new mg(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>dg(await js(h),b)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>fg(await js(h),b))}}(qe(l),c,a,u)}function eO(t,e){return dP(qe(t=J(t,_e)),lp(e)?e:{next:e})}function Su(t,e){return function(n,r){const i=new Ve;return n.asyncQueue.enqueueAndForget(async()=>VR(await kg(n),r,i)),i.promise}(qe(t),e)}function $g(t,e,n){const r=n.docs.get(e._key),i=new zi(t);return new Un(t,i,e._key,r,new ii(n.hasPendingWrites,n.fromCache),e.converter)}const tO={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Vi(e)}set(e,n,r){this._verifyNotCommitted();const i=rr(e,this._firestore),s=Sh(i.converter,n,r),o=vh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ce.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=rr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Dr?xg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Dg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ce.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=rr(e,this._firestore);return this._mutations=this._mutations.concat(new ro(n._key,ce.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function rr(t,e){if((t=U(t)).firestore!==e)throw new E(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Vi(e)}get(e){const n=rr(e,this._firestore),r=new qP(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return R();const s=i[0];if(s.isFoundDocument())return new ja(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ja(this._firestore,r,n._key,null,n.converter);throw R()})}set(e,n,r){const i=rr(e,this._firestore),s=Sh(i.converter,n,r),o=vh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=rr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Dr?xg(this._dataReader,"Transaction.update",s._key,n,r,i):Dg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=rr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=rr(e,this._firestore),r=new zi(this._firestore);return super.get(e).then(i=>new Un(this._firestore,r,n._key,i._document,new ii(!1,!1),n.converter))}}function iO(t,e,n){t=J(t,_e);const r=Object.assign(Object.assign({},tO),n);return function(i){if(i.maxAttempts<1)throw new E(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Ve;return i.asyncQueue.enqueueAndForget(async()=>{const u=await aP(i);new sP(i.asyncQueue,u,o,s,a).run()}),a.promise}(qe(t),i=>e(new rO(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(){return new Eu("deleteField")}function oO(){return new Ag("serverTimestamp")}function aO(...t){return new bP("arrayUnion",t)}function uO(...t){return new RP("arrayRemove",t)}function lO(t){return new PP("increment",t)}(function(t,e=!0){(function(n){eo=n})(Mi),Er(new wn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _e(new yx(n.getProvider("auth-internal")),new _x(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sr(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gn(Fv,"3.8.4",t),gn(Fv,"3.8.4","esm2017")})();const cO="@firebase/firestore-compat",hO="0.3.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function jw(){if(!bx())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class qa{constructor(e){this._delegate=e}static fromBase64String(e){return jw(),new qa(_n.fromBase64String(e))}static fromUint8Array(e){return zw(),new qa(_n.fromUint8Array(e))}toBase64(){return jw(),this._delegate.toBase64()}toUint8Array(){return zw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){return dO(t,["next","error","complete"])}function dO(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{enableIndexedDbPersistence(e,n){return IP(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return _P(e._delegate)}clearIndexedDbPersistence(e){return EP(e._delegate)}}class zT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Sr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Rs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){mP(this._delegate,e,n,r)}enableNetwork(){return SP(this._delegate)}disableNetwork(){return kP(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,TT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return TP(this._delegate)}onSnapshotsInSync(e){return eO(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qs(this,kT(this._delegate,e))}catch(n){throw ct(n,"collection()","Firestore.collection()")}}doc(e){try{return new Bt(this,wc(this._delegate,e))}catch(n){throw ct(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new lt(this,gP(this._delegate,e))}catch(n){throw ct(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return iO(this._delegate,n=>e(new jT(this,n)))}batch(){return qe(this._delegate),new qT(new nO(this._delegate,e=>Su(this._delegate,e)))}loadBundle(e){return CP(this._delegate,e)}namedQuery(e){return NP(this._delegate,e).then(n=>n?new lt(this,n):null)}}class kh extends Mg{constructor(e){super(),this.firestore=e}convertBytes(e){return new qa(new _n(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Bt.forKey(n,this.firestore,null)}}function pO(t){fx(t)}class jT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}get(e){const n=si(e);return this._delegate.get(n).then(r=>new Ka(this._firestore,new Un(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=si(e);return r?(Fg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=si(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=si(e);return this._delegate.delete(n),this}}class qT{constructor(e){this._delegate=e}set(e,n,r){const i=si(e);return r?(Fg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=si(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=si(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Di{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new ia(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wa(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Di.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Di(e,new kh(e),n),i.set(n,s)),s}}Di.INSTANCES=new WeakMap;class Bt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Bt(n,new ae(n._delegate,r,new A(e)))}static forKey(e,n,r){return new Bt(n,new ae(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qs(this.firestore,kT(this._delegate,e))}catch(n){throw ct(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ae?CT(this._delegate,e):!1}set(e,n){n=Fg("DocumentReference.set",n);try{return n?Vw(this._delegate,e,n):Vw(this._delegate,e)}catch(r){throw ct(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Bw(this._delegate,e):Bw(this._delegate,e,n,...r)}catch(i){throw ct(i,"updateDoc()","DocumentReference.update()")}}delete(){return JP(this._delegate)}onSnapshot(...e){const n=KT(e),r=WT(e,i=>new Ka(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return _c(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=GP(this._delegate):(e==null?void 0:e.source)==="server"?n=HP(this._delegate):n=WP(this._delegate),n.then(r=>new Ka(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Bt(this.firestore,e?this._delegate.withConverter(Di.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ct(t,e,n){return t.message=t.message.replace(e,n),t}function KT(t){for(const e of t)if(typeof e=="object"&&!hp(e))return e;return{}}function WT(t,e){var n,r;let i;return hp(t[0])?i=t[0]:hp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ka{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Bt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return BT(this._delegate,e._delegate)}}class Wa extends Ka{data(e){const n=this._delegate.data(e);return px(n!==void 0),n}}class lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}where(e,n,r){try{return new lt(this.firestore,Yn(this._delegate,MP(e,n,r)))}catch(i){throw ct(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new lt(this.firestore,Yn(this._delegate,$P(e,n)))}catch(r){throw ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new lt(this.firestore,Yn(this._delegate,FP(e)))}catch(n){throw ct(n,"limit()","Query.limit()")}}limitToLast(e){try{return new lt(this.firestore,Yn(this._delegate,UP(e)))}catch(n){throw ct(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new lt(this.firestore,Yn(this._delegate,VP(...e)))}catch(n){throw ct(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new lt(this.firestore,Yn(this._delegate,BP(...e)))}catch(n){throw ct(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new lt(this.firestore,Yn(this._delegate,zP(...e)))}catch(n){throw ct(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new lt(this.firestore,Yn(this._delegate,jP(...e)))}catch(n){throw ct(n,"endAt()","Query.endAt()")}}isEqual(e){return Ng(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=YP(this._delegate):(e==null?void 0:e.source)==="server"?n=XP(this._delegate):n=QP(this._delegate),n.then(r=>new dp(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=KT(e),r=WT(e,i=>new dp(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return _c(this._delegate,n,r)}withConverter(e){return new lt(this.firestore,e?this._delegate.withConverter(Di.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class mO{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Wa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class dp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Wa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new mO(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Wa(this._firestore,r))})}isEqual(e){return BT(this._delegate,e._delegate)}}class qs extends lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Bt(this.firestore,e):null}doc(e){try{return e===void 0?new Bt(this.firestore,wc(this._delegate)):new Bt(this.firestore,wc(this._delegate,e))}catch(n){throw ct(n,"doc()","CollectionReference.doc()")}}add(e){return ZP(this._delegate,e).then(n=>new Bt(this.firestore,n))}isEqual(e){return CT(this._delegate,e._delegate)}withConverter(e){return new qs(this.firestore,e?this._delegate.withConverter(Di.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function si(t){return J(t,ae)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(...e){this._delegate=new Dr(...e)}static documentId(){return new Ug(ke.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof Dr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this._delegate=e}static serverTimestamp(){const e=oO();return e._methodName="FieldValue.serverTimestamp",new Jr(e)}static delete(){const e=sO();return e._methodName="FieldValue.delete",new Jr(e)}static arrayUnion(...e){const n=aO(...e);return n._methodName="FieldValue.arrayUnion",new Jr(n)}static arrayRemove(...e){const n=uO(...e);return n._methodName="FieldValue.arrayRemove",new Jr(n)}static increment(e){const n=lO(e);return n._methodName="FieldValue.increment",new Jr(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={Firestore:zT,GeoPoint:gh,Timestamp:he,Blob:qa,Transaction:jT,WriteBatch:qT,DocumentReference:Bt,DocumentSnapshot:Ka,Query:lt,QueryDocumentSnapshot:Wa,QuerySnapshot:dp,CollectionReference:qs,FieldPath:Ug,FieldValue:Jr,setLogLevel:pO,CACHE_SIZE_UNLIMITED:wP};function yO(t,e){t.INTERNAL.registerComponent(new wn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},gO)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){yO(t,(e,n)=>new zT(e,n,new fO)),t.registerVersion(cO,hO)}vO(Tn);function Vg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const xo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Gi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function GT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IO=wO,_O=GT,HT=new Li("auth","Firebase",GT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new zc("@firebase/auth");function El(t,...e){qw.logLevel<=Y.ERROR&&qw.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Bg(t,...e)}function Xe(t,...e){return Bg(t,...e)}function QT(t,e,n){const r=Object.assign(Object.assign({},_O()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function uo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),QT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return HT.create(t,...e)}function k(t,e,...n){if(!t)throw Bg(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function tn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Map;function bt(t){tn(t instanceof Function,"Expected a class definition");let e=Kw.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kw.set(t,e),e)}function EO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zg(){return Ww()==="http:"||Ww()==="https:"}function Ww(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zg()||v_()||"connection"in navigator)?navigator.onLine:!0}function SO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=MN()||gm()}get(){return TO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=new ku(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ke(t,e,n,r,i={}){return XT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),YT.fetch()(JT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function XT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kO),e);try{const i=new NO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw zo(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw QT(t,c,l);et(t,c)}}catch(i){if(i instanceof ft)throw i;et(t,"internal-error",{message:String(i)})}}async function Kn(t,e,n,r,i={}){const s=await Ke(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function JT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jg(t.config,i):`${t.config.apiScheme}://${i}`}class NO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),CO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){return Ke(t,"POST","/v1/accounts:delete",e)}async function DO(t,e){return Ke(t,"POST","/v1/accounts:update",e)}async function xO(t,e){return Ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bO(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Ch(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sa(Dd(i.auth_time)),issuedAtTime:sa(Dd(i.iat)),expirationTime:sa(Dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const i=y_(n);return i?JSON.parse(i):(El("Failed to decode base64 JWT payload"),null)}catch(i){return El("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RO(t){const e=Ch(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ft&&PO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vn(t,xO(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$O(s.providerUserInfo):[],a=MO(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ZT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function LO(t){const e=U(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $O(t){return t.map(e=>{var{providerId:n}=e,r=Vg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){const n=await XT(t,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=JT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qa;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ZT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bO(this,e)}reload(){return LO(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vn(this,AO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:C,providerData:N,stsTokenManager:D}=n;k(g&&D,e,"internal-error");const L=Qa.fromJSON(this.name,D);k(typeof g=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),k(typeof _=="boolean",e,"internal-error"),k(typeof C=="boolean",e,"internal-error"),Xn(p,e.name),Xn(y,e.name),Xn(w,e.name),Xn(b,e.name),Xn(m,e.name),Xn(f,e.name);const re=new hi({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:L,createdAt:m,lastLoginAt:f});return N&&Array.isArray(N)&&(re.providerData=N.map(K=>Object.assign({},K))),b&&(re._redirectEventId=b),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qa;i.updateFromServerResponse(n);const s=new hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eS.type="NONE";const Ks=eS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=di(this.userKey,i.apiKey,s),this.fullPersistenceKey=di("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(bt(Ks),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||bt(Ks);const o=di(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=hi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _s(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iS(e))return"Blackberry";if(sS(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||nS(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tS(t=me()){return/firefox\//i.test(t)}function qg(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nS(t=me()){return/crios\//i.test(t)}function rS(t=me()){return/iemobile/i.test(t)}function Cu(t=me()){return/android/i.test(t)}function iS(t=me()){return/blackberry/i.test(t)}function sS(t=me()){return/webos/i.test(t)}function lo(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UO(t=me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function VO(t=me()){var e;return lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BO(){return w_()&&document.documentMode===10}function oS(t=me()){return lo(t)||Cu(t)||sS(t)||iS(t)||/windows phone/i.test(t)||rS(t)}function zO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e=[]){let n;switch(t){case"Browser":n=Gw(me());break;case"Worker":n=`${Gw(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hw(this),this.idTokenSubscription=new Hw(this),this.beforeStateQueue=new jO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ze(t){return U(t)}class Hw{constructor(e){this.auth=e,this.observer=null,this.addObserver=I_(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KO(t,e,n){const r=ze(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uS(e),{host:o,port:a}=WO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GO()}function uS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WO(t){const e=uS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qw(o)}}}function Qw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e){return Ke(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function cS(t,e){return Ke(t,"POST","/v1/accounts:update",e)}async function HO(t,e){return Ke(t,"POST","/v1/accounts:update",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function Nh(t,e){return Ke(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function YO(t,e){return Nh(t,e)}async function XO(t,e){return Nh(t,e)}async function JO(t,e){return Nh(t,e)}async function ZO(t,e){return Nh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function tL(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends co{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return QO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eL(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tL(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL="http://localhost";class En extends co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new En(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}buildRequest(){const e={requestUri:nL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(t,e){return Ke(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function iL(t,e){return Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function sL(t,e){const n=await Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw zo(t,"account-exists-with-different-credential",n);return n}const oL={USER_NOT_FOUND:"user-not-found"};async function aL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),oL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends co{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new fi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new fi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return iL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return sL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return aL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new fi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lL(t){const e=ls($o(t)).link,n=e?ls($o(e)).deep_link_id:null,r=ls($o(t)).deep_link_id;return(r?ls($o(r)).link:null)||r||n||e||t}class Ah{constructor(e){var n,r,i,s,o,a;const u=ls($o(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=uL((i=u.mode)!==null&&i!==void 0?i:null);k(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lL(e);try{return new Ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ah.parseLink(n);return k(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Es extends ho{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),En._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),En._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Es.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Es.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Es(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ho{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return En._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ho{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL="http://localhost";class Ws extends co{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ws(r,s)}static _create(e,n){return new Ws(e,n)}buildRequest(){return{requestUri:cL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="saml.";class Ec extends Wn{constructor(e){k(e.startsWith(hL),"argument-error"),super(e)}static credentialFromResult(e){return Ec.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ec.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ws.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ws._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ho{constructor(){super("twitter.com")}static credential(e,n){return En._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){return Kn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hi._fromIdTokenResponse(e,r,i),o=Yw(r);return new Kt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yw(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(t){var e;const n=ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hS(n,{returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends ft{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tc(e,n,r,i)}}function dS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t,e){const n=U(t);await Dh(!0,n,e);const{providerUserInfo:r}=await DO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=fS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kg(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}async function Dh(t,e,n){await Ha(e);const r=fS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vn(t,dS(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Ch(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),Kt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e,n=!1){const r="signIn",i=await dS(t,r,e),s=await Kt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xh(t,e){return mS(ze(t),e)}async function gS(t,e){const n=U(t);return await Dh(!1,n,e.providerId),Kg(n,e)}async function yS(t,e){return pS(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(t,e){return Kn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mL(t,e){const n=ze(t),r=await pL(n,{token:e,returnSecureToken:!0}),i=await Kt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Wg._fromServerResponse(e,n):et(e,"internal-error")}}class Wg extends bh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Wg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e,n){const r=U(t),i={requestType:"PASSWORD_RESET",email:e};n&&Rh(r,i,n),await XO(r,i)}async function yL(t,e,n){await lS(U(t),{oobCode:e,newPassword:n})}async function vL(t,e){await HO(U(t),{oobCode:e})}async function vS(t,e){const n=U(t),r=await lS(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=bh._fromServerResponse(ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function wL(t,e){const{data:n}=await vS(U(t),e);return n.email}async function IL(t,e,n){const r=ze(t),i=await hS(r,{returnSecureToken:!0,email:e,password:n}),s=await Kt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function _L(t,e,n){return xh(U(t),Vr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EL(t,e,n){const r=U(t),i={requestType:"EMAIL_SIGNIN",email:e};k(n.handleCodeInApp,r,"argument-error"),n&&Rh(r,i,n),await JO(r,i)}function TL(t,e){const n=Ah.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function SL(t,e,n){const r=U(t),i=Vr.credentialWithLink(e,n||Ga());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t,e){return Ke(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(t,e){const n=zg()?Ga():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await kL(U(t),r);return i||[]}async function NL(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Rh(n.auth,i,e);const{email:s}=await YO(n.auth,i);s!==t.email&&await t.reload()}async function AL(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Rh(r.auth,s,n);const{email:o}=await ZO(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(t,e){return Ke(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vn(r,DL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bL(t,e){return wS(U(t),e,null)}function RL(t,e){return wS(U(t),null,e)}async function wS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Vn(t,cS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ch(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ts(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new OL(s,i);case"github.com":return new LL(s,i);case"google.com":return new ML(s,i);case"twitter.com":return new $L(s,i,t.screenName||null);case"custom":case"anonymous":return new Ts(s,null);default:return new Ts(s,r,i)}}class Ts{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class IS extends Ts{constructor(e,n,r,i){super(e,n,r),this.username=i}}class OL extends Ts{constructor(e,n){super(e,"facebook.com",n)}}class LL extends IS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ML extends Ts{constructor(e,n){super(e,"google.com",n)}}class $L extends IS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function FL(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:PL(n)}function UL(t,e,n,r){return U(t).onAuthStateChanged(e,n,r)}class oi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new oi("enroll",e,n)}static _fromMfaPendingCredential(e){return new oi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return oi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return oi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>bh._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=oi._fromMfaPendingCredential(i.mfaPendingCredential);return new Gg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Kt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),Kt._forOperation(n.user,n.operationType,l);default:et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function VL(t,e){var n;const r=U(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Gg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function zL(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function jL(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class Hg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>bh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hg(e)}async getSession(){return oi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Vn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Vn(this.user,jL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xd=new WeakMap;function qL(t){const e=U(t);return xd.has(e)||xd.set(e,Hg._fromUser(e)),xd.get(e)}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(){const t=me();return qg(t)||lo(t)}const WL=1e3,GL=10;class ES extends _S{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KL()&&zO(),this.fallbackToPolling=oS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ES.type="LOCAL";const Qg=ES;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends _S{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TS.type="SESSION";const xi=TS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await HL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Nu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function YL(t){xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function XL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZL(){return Yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebaseLocalStorageDb",eM=1,kc="firebaseLocalStorage",kS="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(t,e){return t.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function tM(){const t=indexedDB.deleteDatabase(SS);return new Au(t).toPromise()}function fp(){const t=indexedDB.open(SS,eM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kc,{keyPath:kS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await tM(),e(await fp()))})})}async function Xw(t,e,n){const r=Oh(t,!0).put({[kS]:e,value:n});return new Au(r).toPromise()}async function nM(t,e){const n=Oh(t,!1).get(e),r=await new Au(n).toPromise();return r===void 0?null:r.value}function Jw(t,e){const n=Oh(t,!0).delete(e);return new Au(n).toPromise()}const rM=800,iM=3;class CS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(ZL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XL(),!this.activeServiceWorker)return;this.sender=new QL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fp();return await Xw(e,Sc,"1"),await Jw(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oh(i,!1).getAll();return new Au(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CS.type="LOCAL";const Xa=CS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t,e){return Ke(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function oM(t,e){return Ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aM(t){return(await Ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uM().appendChild(r)})}function AS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=500,cM=6e4,rl=1e12;class hM{constructor(e){this.auth=e,this.counter=rl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new dM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||rl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||rl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||rl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class dM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=fM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cM)},lM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=AS("rcb"),pM=new ku(3e4,6e4),mM="https://www.google.com/recaptcha/api.js?";class gM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return k(yM(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(Xe(e,"network-request-failed"))},pM.get());xe()[bd]=()=>{xe().clearTimeout(s),delete xe()[bd];const a=xe().grecaptcha;if(!a){i(Xe(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${mM}?${Xs({onload:bd,render:"explicit",hl:n})}`;NS(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class vM{async load(e){return new hM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="recaptcha",wM={theme:"light",type:"image"};let IM=class{constructor(e,n=Object.assign({},wM),r){this.parameters=n,this.type=DS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vM:new gM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(zg()&&!Yg(),this.auth,"internal-error"),await _M(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await aM(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function _M(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=fi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function EM(t,e,n){const r=ze(t),i=await Lh(r,e,U(n));return new Xg(i,s=>xh(r,s))}async function TM(t,e,n){const r=U(t);await Dh(!1,r,"phone");const i=await Lh(r.auth,e,U(n));return new Xg(i,s=>gS(r,s))}async function SM(t,e,n){const r=U(t),i=await Lh(r.auth,e,U(n));return new Xg(i,s=>yS(r,s))}async function Lh(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===DS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await BL(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await sM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await rL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function kM(t,e){await Kg(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi=class Tl{constructor(e){this.providerId=Tl.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,n){return Lh(this.auth,e,U(n))}static credential(e,n){return fi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Tl.credentialFromTaggedObject(n)}static credentialFromError(e){return Tl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?fi._fromTokenResponse(n,r):null}};bi.PROVIDER_ID="phone";bi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e){return e?bt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CM(t){return mS(t.auth,new Jg(t),t.bypassAuthState)}function NM(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),pS(n,new Jg(t),t.bypassAuthState)}async function AM(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Kg(n,new Jg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CM;case"linkViaPopup":case"linkViaRedirect":return AM;case"reauthViaPopup":case"reauthViaRedirect":return NM;default:et(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=new ku(2e3,1e4);async function xM(t,e,n){const r=ze(t);uo(t,e,Wn);const i=ji(r,n);return new Dn(r,"signInViaPopup",e,i).executeNotNull()}async function bM(t,e,n){const r=U(t);uo(r.auth,e,Wn);const i=ji(r.auth,n);return new Dn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function RM(t,e,n){const r=U(t);uo(r.auth,e,Wn);const i=ji(r.auth,n);return new Dn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Dn extends xS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DM.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM="pendingRedirect",oa=new Map;class OM extends xS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const r=await LM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LM(t,e){const n=RS(e),r=bS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Zg(t,e){return bS(t)._set(RS(e),"true")}function MM(){oa.clear()}function ey(t,e){oa.set(t._key(),e)}function bS(t){return bt(t._redirectPersistence)}function RS(t){return di(PM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e,n){return FM(t,e,n)}async function FM(t,e,n){const r=ze(t);uo(t,e,Wn),await r._initializationPromise;const i=ji(r,n);return await Zg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function UM(t,e,n){return VM(t,e,n)}async function VM(t,e,n){const r=U(t);uo(r.auth,e,Wn),await r.auth._initializationPromise;const i=ji(r.auth,n);await Zg(i,r.auth);const s=await PS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function BM(t,e,n){return zM(t,e,n)}async function zM(t,e,n){const r=U(t);uo(r.auth,e,Wn),await r.auth._initializationPromise;const i=ji(r.auth,n);await Dh(!1,r,e.providerId),await Zg(i,r.auth);const s=await PS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function jM(t,e){return await ze(t)._initializationPromise,Mh(t,e,!1)}async function Mh(t,e,n=!1){const r=ze(t),i=ji(r,e),o=await new OM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function PS(t){const e=Nu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=10*60*1e3;class OS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zw(e))}saveEventToCache(e){this.cachedEventUids.add(Zw(e)),this.lastProcessedEventTime=Date.now()}}function Zw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e={}){return Ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GM=/^https?/;async function HM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MS(t);for(const n of e)try{if(QM(n))return}catch{}et(t,"unauthorized-domain")}function QM(t){const e=Ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GM.test(n))return!1;if(WM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=new ku(3e4,6e4);function e0(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XM(t){return new Promise((e,n)=>{var r,i,s;function o(){e0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e0(),n(Xe(t,"network-request-failed"))},timeout:YM.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=AS("iframefcb");return xe()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},NS(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function JM(t){return Sl=Sl||XM(t),Sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=new ku(5e3,15e3),e$="__/auth/iframe",t$="emulator/auth/iframe",n$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i$(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jg(e,t$):`https://${t.config.authDomain}/${e$}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=r$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xs(r).slice(1)}`}async function s$(t){const e=await JM(t),n=xe().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:i$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},ZM.get());function u(){xe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a$=500,u$=600,l$="_blank",c$="http://localhost";class t0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h$(t,e,n,r=a$,i=u$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},o$),{width:r.toString(),height:i.toString(),top:s,left:o}),l=me().toLowerCase();n&&(a=nS(l)?l$:n),tS(l)&&(e=e||c$,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(VO(l)&&a!=="_self")return d$(e||"",a),new t0(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new t0(h)}function d$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f$="__/auth/handler",p$="emulator/auth/handler";function pp(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof Wn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof ho){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${m$(t)}?${Xs(a).slice(1)}`}function m$({config:t}){return t.emulator?jg(t,p$):`https://${t.authDomain}/${f$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="webStorageSupport";class g${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=Mh,this._overrideRedirectResult=ey}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=pp(e,n,r,Ga(),i);return h$(e,o,Nu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),YL(pp(e,n,r,Ga(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s$(e),r=new OS(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rd,{type:Rd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rd];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oS()||qg()||lo()}}const y$=g$;class v${constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return fn("unexpected MultiFactorSessionType")}}}class ty extends v${constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ty(e)}_finalizeEnroll(e,n,r){return zL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return oM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $S{constructor(){}static assertion(e){return ty._fromCredential(e)}}$S.FACTOR_ID="phone";var n0="@firebase/auth",r0="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _$(t){Er(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),k(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aS(t)},c=new qO(a,u,l);return EO(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new wn("auth-internal",e=>{const n=ze(e.getProvider("auth").getImmediate());return(r=>new w$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(n0,r0,I$(t)),gn(n0,r0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$=5*60;PN("authIdTokenMaxAge");_$("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T$=2e3;async function S$(t,e,n){var r;const{BuildInfo:i}=Ri();tn(e.sessionId,"AuthEvent did not contain a session ID");const s=await D$(e.sessionId),o={};return lo()?o.ibi=i.packageName:Cu()?o.apn=i.packageName:et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,pp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function k$(t){const{BuildInfo:e}=Ri(),n={};lo()?n.iosBundleId=e.packageName:Cu()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await MS(t,n)}function C$(t){const{cordova:e}=Ri();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,UO()?"_blank":"_system","location=yes"),n(i)})})}async function N$(t,e,n){const{cordova:r}=Ri();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Xe(t,"redirect-cancelled-by-user"))},T$))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Cu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function A$(t){var e,n,r,i,s,o,a,u,l,c;const h=Ri();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function D$(t){const e=x$(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function x$(t){if(tn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b$=20;class R$ extends OS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function P$(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:M$(),postBody:null,tenantId:t.tenantId,error:Xe(t,"no-auth-event")}}function O$(t,e){return mp()._set(gp(t),e)}async function i0(t){const e=await mp()._get(gp(t));return e&&await mp()._remove(gp(t)),e}function L$(t,e){var n,r;const i=F$(e);if(i.includes("/__/auth/callback")){const s=kl(i),o=s.firebaseError?$$(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Xe(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function M$(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<b$;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function mp(){return bt(Qg)}function gp(t){return di("authEvent",t.config.apiKey,t.name)}function $$(t){try{return JSON.parse(t)}catch{return null}}function F$(t){const e=kl(t),n=e.link?decodeURIComponent(e.link):void 0,r=kl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return kl(i).link||i||r||n||t}function kl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ls(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=500;class V${constructor(){this._redirectPersistence=xi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mh,this._overrideRedirectResult=ey}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new R$(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){A$(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),MM(),await this._originValidation(e);const o=P$(e,r,i);await O$(e,o);const a=await S$(e,o,n),u=await C$(a);return N$(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k$(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ri(),o=setTimeout(async()=>{await i0(e),n.onEvent(s0())},U$),a=async c=>{clearTimeout(o);const h=await i0(e);let d=null;h&&(c!=null&&c.url)&&(d=L$(h,c.url)),n.onEvent(d||s0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Ri().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const B$=V$;function s0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z$(t,e){ze(t)._logFramework(e)}var j$="@firebase/auth-compat",q$="0.3.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$=1e3;function aa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function W$(){return aa()==="http:"||aa()==="https:"}function FS(t=me()){return!!((aa()==="file:"||aa()==="ionic:"||aa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function G$(){return gm()||mm()}function H$(){return w_()&&(document==null?void 0:document.documentMode)===11}function Q$(t=me()){return/Edge\/\d+/.test(t)}function Y$(t=me()){return H$()||Q$(t)}function US(){try{const t=self.localStorage,e=Nu();if(t)return t.setItem(e,"1"),t.removeItem(e),Y$()?Ca():!0}catch{return ny()&&Ca()}return!1}function ny(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Pd(){return(W$()||v_()||FS())&&!G$()&&US()&&!ny()}function VS(){return FS()&&typeof document<"u"}async function X$(){return VS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},K$);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function J$(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={LOCAL:"local",NONE:"none",SESSION:"session"},bo=k,BS="persistence";function Z$(t,e){if(bo(Object.values(Dt).includes(e),t,"invalid-persistence-type"),gm()){bo(e!==Dt.SESSION,t,"unsupported-persistence-type");return}if(mm()){bo(e===Dt.NONE,t,"unsupported-persistence-type");return}if(ny()){bo(e===Dt.NONE||e===Dt.LOCAL&&Ca(),t,"unsupported-persistence-type");return}bo(e===Dt.NONE||US(),t,"unsupported-persistence-type")}async function yp(t){await t._initializationPromise;const e=zS(),n=di(BS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function eF(t,e){const n=zS();if(!n)return[];const r=di(BS,t,e);switch(n.getItem(r)){case Dt.NONE:return[Ks];case Dt.LOCAL:return[Xa,xi];case Dt.SESSION:return[xi];default:return[]}}function zS(){var t;try{return((t=J$())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=k;class ar{constructor(){this.browserResolver=bt(y$),this.cordovaResolver=bt(B$),this.underlyingResolver=null,this._redirectPersistence=xi,this._completeRedirectFn=Mh,this._overrideRedirectResult=ey}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return VS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return tF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await X$();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){return t.unwrap()}function nF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(t){return qS(t)}function iF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new sF(t,VL(t,e))}else if(r){const i=qS(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function qS(t){const{_tokenResponse:e}=t instanceof ft?t.customData:t;if(!e)return null;if(!(t instanceof ft)&&"temporaryProof"in e&&"phoneNumber"in e)return bi.credentialFromResult(t);const n=e.providerId;if(!n||n===xo.PASSWORD)return null;let r;switch(n){case xo.GOOGLE:r=un;break;case xo.FACEBOOK:r=an;break;case xo.GITHUB:r=ln;break;case xo.TWITTER:r=cn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ws._create(n,a):En._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Es(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof ft?r.credentialFromError(t):r.credentialFromResult(t)}function vt(t,e){return e.catch(n=>{throw n instanceof ft&&iF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:rF(n),additionalUserInfo:FL(n),user:xn.getOrCreate(i)}})}async function vp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>vt(t,n.confirm(r))}}class sF{constructor(e,n){this.resolver=n,this.auth=nF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vt(jS(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._delegate=e,this.multiFactor=qL(e)}static getOrCreate(e){return xn.USER_MAP.has(e)||xn.USER_MAP.set(e,new xn(e)),xn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vt(this.auth,gS(this._delegate,e))}async linkWithPhoneNumber(e,n){return vp(this.auth,TM(this._delegate,e,n))}async linkWithPopup(e){return vt(this.auth,RM(this._delegate,e,ar))}async linkWithRedirect(e){return await yp(ze(this.auth)),BM(this._delegate,e,ar)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vt(this.auth,yS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return vp(this.auth,SM(this._delegate,e,n))}reauthenticateWithPopup(e){return vt(this.auth,bM(this._delegate,e,ar))}async reauthenticateWithRedirect(e){return await yp(ze(this.auth)),UM(this._delegate,e,ar)}sendEmailVerification(e){return NL(this._delegate,e)}async unlink(e){return await fL(this._delegate,e),this}updateEmail(e){return bL(this._delegate,e)}updatePassword(e){return RL(this._delegate,e)}updatePhoneNumber(e){return kM(this._delegate,e)}updateProfile(e){return xL(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return AL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}xn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=k;class wp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ro(r,"invalid-api-key",{appName:e.name}),Ro(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ar:void 0;this._delegate=n.initialize({options:{persistence:oF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(IO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){KO(this._delegate,e,n)}applyActionCode(e){return vL(this._delegate,e)}checkActionCode(e){return vS(this._delegate,e)}confirmPasswordReset(e,n){return yL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return vt(this._delegate,IL(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return CL(this._delegate,e)}isSignInWithEmailLink(e){return TL(this._delegate,e)}async getRedirectResult(){Ro(Pd(),this._delegate,"operation-not-supported-in-this-environment");const e=await jM(this._delegate,ar);return e?vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){z$(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=o0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=o0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return EL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return gL(this._delegate,e,n||void 0)}async setPersistence(e){Z$(this._delegate,e);let n;switch(e){case Dt.SESSION:n=xi;break;case Dt.LOCAL:n=await bt(Xa)._isAvailable()?Xa:Qg;break;case Dt.NONE:n=Ks;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vt(this._delegate,dL(this._delegate))}signInWithCredential(e){return vt(this._delegate,xh(this._delegate,e))}signInWithCustomToken(e){return vt(this._delegate,mL(this._delegate,e))}signInWithEmailAndPassword(e,n){return vt(this._delegate,_L(this._delegate,e,n))}signInWithEmailLink(e,n){return vt(this._delegate,SL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return vp(this._delegate,EM(this._delegate,e,n))}async signInWithPopup(e){return Ro(Pd(),this._delegate,"operation-not-supported-in-this-environment"),vt(this._delegate,xM(this._delegate,e,ar))}async signInWithRedirect(e){return Ro(Pd(),this._delegate,"operation-not-supported-in-this-environment"),await yp(this._delegate),$M(this._delegate,e,ar)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return wL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wp.Persistence=Dt;function o0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&xn.getOrCreate(o)),error:e,complete:n}}function oF(t,e){const n=eF(t,e);if(typeof self<"u"&&!n.includes(Xa)&&n.push(Xa),typeof window<"u")for(const r of[Qg,xi])n.includes(r)||n.push(r);return n.includes(Ks)||n.push(Ks),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.providerId="phone",this._delegate=new bi(jS(Tn.auth()))}static credential(e,n){return bi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ry.PHONE_SIGN_IN_METHOD=bi.PHONE_SIGN_IN_METHOD;ry.PROVIDER_ID=bi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=k;class uF{constructor(e,n,r=Tn.app()){var i;aF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new IM(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF="auth-compat";function cF(t){t.INTERNAL.registerComponent(new wn(lF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Gi.EMAIL_SIGNIN,PASSWORD_RESET:Gi.PASSWORD_RESET,RECOVER_EMAIL:Gi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Gi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Gi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Gi.VERIFY_EMAIL}},EmailAuthProvider:Vr,FacebookAuthProvider:an,GithubAuthProvider:ln,GoogleAuthProvider:un,OAuthProvider:Es,SAMLAuthProvider:Ec,PhoneAuthProvider:ry,PhoneMultiFactorGenerator:$S,RecaptchaVerifier:uF,TwitterAuthProvider:cn,Auth:wp,AuthCredential:co,Error:ft}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(j$,q$)}cF(Tn);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function hF(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function dF(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var hs=function(){return hs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},hs.apply(this,arguments)},KS=function(t){return{loading:t==null,value:t}},fF=function(){return function(t,e){switch(e.type){case"error":return hs(hs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return KS(e.defaultValue);case"value":return hs(hs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},pF=function(t){var e=t?t():void 0,n=ve.useReducer(fF(),KS(e)),r=n[0],i=n[1],s=ve.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=ve.useCallback(function(u){i({type:"error",error:u})},[]),a=ve.useCallback(function(u){i({type:"value",value:u})},[]);return ve.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},mF=function(t,e){var n=pF(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return ve.useEffect(function(){var u=UL(t,function(l){return hF(void 0,void 0,void 0,function(){var c;return dF(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(l)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(l),[2]}})})},s);return function(){u()}},[t]),[a,i,r]};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ds=function(){return ds=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ds.apply(this,arguments)},WS=function(t){return{loading:t==null,value:t}},gF=function(){return function(t,e){switch(e.type){case"error":return ds(ds({},t),{error:e.error,loading:!1,value:void 0});case"reset":return WS(e.defaultValue);case"value":return ds(ds({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},yF=function(t){var e=t?t():void 0,n=ve.useReducer(gF(),WS(e)),r=n[0],i=n[1],s=ve.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=ve.useCallback(function(u){i({type:"error",error:u})},[]),a=ve.useCallback(function(u){i({type:"value",value:u})},[]);return ve.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},vF=function(t,e,n){var r=ve.useRef(t);return ve.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},wF=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Ng(t,e);return n||r},IF=function(t,e){return vF(t,wF,e)},_F=function(t,e){var n=yF(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,u=n.value,l=IF(t,s);return ve.useEffect(function(){if(!l.current){a(void 0);return}var c=e!=null&&e.snapshotListenOptions?_c(l.current,e.snapshotListenOptions,a,o):_c(l.current,a,o);return function(){c()}},[l.current]),[u,i,r]},EF=function(t,e){var n=_F(t,e),r=n[0],i=n[1],s=n[2],o=TF(r,e==null?void 0:e.snapshotOptions,e==null?void 0:e.initialValue);return[o,i,s,r]},TF=function(t,e,n){return ve.useMemo(function(){var r;return(r=t==null?void 0:t.docs.map(function(i){return i.data(e)}))!==null&&r!==void 0?r:n},[t,e])};Tn.initializeApp({apiKey:"AIzaSyAdXMku4263_SZd_RSohv8A4JdvKyMRMjs",authDomain:"ultimatechat-00.firebaseapp.com",projectId:"ultimatechat-00",storageBucket:"ultimatechat-00.appspot.com",messagingSenderId:"332219460816",appId:"1:332219460816:web:0b969f135e00f99ed742d5"});const Gs=Tn.auth(),SF=Tn.firestore();function kF(){const[t]=mF(Gs);return ua("div",{className:"App",children:[ua("header",{className:"header",children:[Fe("img",{src:TN}),Fe("h2",{children:"ULTIMATE CHAT"}),Fe("div",{children:t?Fe(NF,{}):""})]}),Fe("section",{className:"bg-img",children:t?Fe(AF,{}):Fe(CF,{})})]})}function CF(){return Fe("button",{onClick:()=>{const e=new Tn.auth.GoogleAuthProvider;Gs.signInWithPopup(e)},children:"Sign in with google"})}function NF(){return Gs.currentUser&&Fe("button",{onClick:()=>Gs.signOut(),children:"Sign Out"})}function AF(){const t=ve.useRef(),e=SF.collection("messages"),n=e.orderBy("createdAt").limit(25),[r]=EF(n,{idField:"id"}),[i,s]=ve.useState(""),o=async a=>{a.preventDefault();const{uid:u,photoURL:l}=Gs.currentUser;await e.add({text:i,createdAt:Tn.firestore.FieldValue.serverTimestamp(),uid:u,photoURL:l}),s(""),t.current.scrollIntoView({behavior:"smooth"})};return ua("div",{className:"chat",children:[Fe("main",{children:r&&r.map(a=>Fe(DF,{message:a},a.id))}),Fe("div",{ref:t}),ua("form",{className:"send-form",onSubmit:i.trim()?o:a=>a.preventDefault(),children:[Fe("input",{className:"write-message",type:"text",value:i,onChange:a=>s(a.target.value)}),Fe("button",{type:"submit",children:"Send"})]})]})}function DF(t){const{text:e,uid:n,photoURL:r,id:i}=t.message,s=n===Gs.currentUser.uid?"sent":"received";return ua("div",{className:`message ${s}`,children:[Fe("img",{src:r,alt:"/"}),Fe("p",{children:e})]},i)}Od.createRoot(document.getElementById("root")).render(Fe(dk.StrictMode,{children:Fe(kF,{})}));
