(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function tx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Zh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function yM(){if(kv)return Jo;kv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var d in c)d!=="key"&&(f[d]=c[d])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:h,ref:c!==void 0?c:null,props:f}}return Jo.Fragment=e,Jo.jsx=a,Jo.jsxs=a,Jo}var jv;function MM(){return jv||(jv=1,Zh.exports=yM()),Zh.exports}var E=MM(),Kh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function EM(){if(Xv)return le;Xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function R(P){return P===null||typeof P!="object"?null:(P=M&&P[M]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function B(P,ft,$){this.props=P,this.context=ft,this.refs=x,this.updater=$||C}B.prototype.isReactComponent={},B.prototype.setState=function(P,ft){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ft,"setState")},B.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=B.prototype;function N(P,ft,$){this.props=P,this.context=ft,this.refs=x,this.updater=$||C}var k=N.prototype=new I;k.constructor=N,y(k,B.prototype),k.isPureReactComponent=!0;var G=Array.isArray;function z(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(P,ft,$){var it=$.ref;return{$$typeof:o,type:P,key:ft,ref:it!==void 0?it:null,props:$}}function V(P,ft){return w(P.type,ft,P.props)}function at(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ut(P){var ft={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function($){return ft[$]})}var _t=/\/+/g;function ct(P,ft){return typeof P=="object"&&P!==null&&P.key!=null?ut(""+P.key):ft.toString(36)}function W(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(ft){P.status==="pending"&&(P.status="fulfilled",P.value=ft)},function(ft){P.status==="pending"&&(P.status="rejected",P.reason=ft)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function st(P,ft,$,it,Mt){var Ut=typeof P;(Ut==="undefined"||Ut==="boolean")&&(P=null);var Rt=!1;if(P===null)Rt=!0;else switch(Ut){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(P.$$typeof){case o:case e:Rt=!0;break;case v:return Rt=P._init,st(Rt(P._payload),ft,$,it,Mt)}}if(Rt)return Mt=Mt(P),Rt=it===""?"."+ct(P,0):it,G(Mt)?($="",Rt!=null&&($=Rt.replace(_t,"$&/")+"/"),st(Mt,ft,$,"",function(O){return O})):Mt!=null&&(at(Mt)&&(Mt=V(Mt,$+(Mt.key==null||P&&P.key===Mt.key?"":(""+Mt.key).replace(_t,"$&/")+"/")+Rt)),ft.push(Mt)),1;Rt=0;var Et=it===""?".":it+":";if(G(P))for(var qt=0;qt<P.length;qt++)it=P[qt],Ut=Et+ct(it,qt),Rt+=st(it,ft,$,Ut,Mt);else if(qt=R(P),typeof qt=="function")for(P=qt.call(P),qt=0;!(it=P.next()).done;)it=it.value,Ut=Et+ct(it,qt++),Rt+=st(it,ft,$,Ut,Mt);else if(Ut==="object"){if(typeof P.then=="function")return st(W(P),ft,$,it,Mt);throw ft=String(P),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function K(P,ft,$){if(P==null)return P;var it=[],Mt=0;return st(P,it,"","",function(Ut){return ft.call($,Ut,Mt++)}),it}function vt(P){if(P._status===-1){var ft=P._result,$=ft();$.then(function(it){(P._status===0||P._status===-1)&&(P._status=1,P._result=it,$.status===void 0&&($.status="fulfilled",$.value=it))},function(it){(P._status===0||P._status===-1)&&(P._status=2,P._result=it,$.status===void 0&&($.status="rejected",$.reason=it))}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var St=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Gt(P){var ft=q.T,$={};$.types=ft!==null?ft.types:null,q.T=$;try{var it=P(),Mt=q.S;Mt!==null&&Mt($,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(z,St)}catch(Ut){St(Ut)}finally{ft!==null&&$.types!==null&&(ft.types=$.types),q.T=ft}}function re(P){var ft=q.T;if(ft!==null){var $=ft.types;$===null?ft.types=[P]:$.indexOf(P)===-1&&$.push(P)}else Gt(re.bind(null,P))}var be={map:K,forEach:function(P,ft,$){K(P,function(){ft.apply(this,arguments)},$)},count:function(P){var ft=0;return K(P,function(){ft++}),ft},toArray:function(P){return K(P,function(ft){return ft})||[]},only:function(P){if(!at(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return le.Activity=m,le.Children=be,le.Component=B,le.Fragment=a,le.Profiler=c,le.PureComponent=N,le.StrictMode=r,le.Suspense=g,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(P){return q.H.useMemoCache(P)}},le.addTransitionType=re,le.cache=function(P){return function(){return P.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(P,ft,$){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var it=y({},P.props),Mt=P.key;if(ft!=null)for(Ut in ft.key!==void 0&&(Mt=""+ft.key),ft)!D.call(ft,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ft.ref===void 0||(it[Ut]=ft[Ut]);var Ut=arguments.length-2;if(Ut===1)it.children=$;else if(1<Ut){for(var Rt=Array(Ut),Et=0;Et<Ut;Et++)Rt[Et]=arguments[Et+2];it.children=Rt}return w(P.type,Mt,it)},le.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:f,_context:P},P},le.createElement=function(P,ft,$){var it,Mt={},Ut=null;if(ft!=null)for(it in ft.key!==void 0&&(Ut=""+ft.key),ft)D.call(ft,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(Mt[it]=ft[it]);var Rt=arguments.length-2;if(Rt===1)Mt.children=$;else if(1<Rt){for(var Et=Array(Rt),qt=0;qt<Rt;qt++)Et[qt]=arguments[qt+2];Mt.children=Et}if(P&&P.defaultProps)for(it in Rt=P.defaultProps,Rt)Mt[it]===void 0&&(Mt[it]=Rt[it]);return w(P,Ut,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(P){return{$$typeof:d,render:P}},le.isValidElement=at,le.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:vt}},le.memo=function(P,ft){return{$$typeof:_,type:P,compare:ft===void 0?null:ft}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(P){return q.H.use(P)},le.useActionState=function(P,ft,$){return q.H.useActionState(P,ft,$)},le.useCallback=function(P,ft){return q.H.useCallback(P,ft)},le.useContext=function(P){return q.H.useContext(P)},le.useDebugValue=function(){},le.useDeferredValue=function(P,ft){return q.H.useDeferredValue(P,ft)},le.useEffect=function(P,ft){return q.H.useEffect(P,ft)},le.useEffectEvent=function(P){return q.H.useEffectEvent(P)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(P,ft,$){return q.H.useImperativeHandle(P,ft,$)},le.useInsertionEffect=function(P,ft){return q.H.useInsertionEffect(P,ft)},le.useLayoutEffect=function(P,ft){return q.H.useLayoutEffect(P,ft)},le.useMemo=function(P,ft){return q.H.useMemo(P,ft)},le.useOptimistic=function(P,ft){return q.H.useOptimistic(P,ft)},le.useReducer=function(P,ft,$){return q.H.useReducer(P,ft,$)},le.useRef=function(P){return q.H.useRef(P)},le.useState=function(P){return q.H.useState(P)},le.useSyncExternalStore=function(P,ft,$){return q.H.useSyncExternalStore(P,ft,$)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.0",le}var qv;function Ep(){return qv||(qv=1,Kh.exports=EM()),Kh.exports}var Hn=Ep();const TM=tx(Hn);var Qh={exports:{}},$o={},Jh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function bM(){return Yv||(Yv=1,(function(o){function e(W,st){var K=W.length;W.push(st);t:for(;0<K;){var vt=K-1>>>1,St=W[vt];if(0<c(St,st))W[vt]=st,W[K]=St,K=vt;else break t}}function a(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var st=W[0],K=W.pop();if(K!==st){W[0]=K;t:for(var vt=0,St=W.length,Gt=St>>>1;vt<Gt;){var re=2*(vt+1)-1,be=W[re],P=re+1,ft=W[P];if(0>c(be,K))P<St&&0>c(ft,be)?(W[vt]=ft,W[P]=K,vt=P):(W[vt]=be,W[re]=K,vt=re);else if(P<St&&0>c(ft,K))W[vt]=ft,W[P]=K,vt=P;else break t}}return st}function c(W,st){var K=W.sortIndex-st.sortIndex;return K!==0?K:W.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],_=[],v=1,m=null,S=3,M=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(W){for(var st=a(_);st!==null;){if(st.callback===null)r(_);else if(st.startTime<=W)r(_),st.sortIndex=st.expirationTime,e(g,st);else break;st=a(_)}}function k(W){if(C=!1,N(W),!R)if(a(g)!==null)R=!0,G||(G=!0,at());else{var st=a(_);st!==null&&ct(k,st.startTime-W)}}var G=!1,z=-1,q=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<q)}function V(){if(y=!1,G){var W=o.unstable_now();D=W;var st=!0;try{t:{R=!1,C&&(C=!1,B(z),z=-1),M=!0;var K=S;try{e:{for(N(W),m=a(g);m!==null&&!(m.expirationTime>W&&w());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,S=m.priorityLevel;var St=vt(m.expirationTime<=W);if(W=o.unstable_now(),typeof St=="function"){m.callback=St,N(W),st=!0;break e}m===a(g)&&r(g),N(W)}else r(g);m=a(g)}if(m!==null)st=!0;else{var Gt=a(_);Gt!==null&&ct(k,Gt.startTime-W),st=!1}}break t}finally{m=null,S=K,M=!1}st=void 0}}finally{st?at():G=!1}}}var at;if(typeof I=="function")at=function(){I(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,_t=ut.port2;ut.port1.onmessage=V,at=function(){_t.postMessage(null)}}else at=function(){x(V,0)};function ct(W,st){z=x(function(){W(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(W){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var K=S;S=st;try{return W()}finally{S=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(W,st){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=S;S=W;try{return st()}finally{S=K}},o.unstable_scheduleCallback=function(W,st,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,W){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,W={id:v++,callback:st,priorityLevel:W,startTime:K,expirationTime:St,sortIndex:-1},K>vt?(W.sortIndex=K,e(_,W),a(g)===null&&W===a(_)&&(C?(B(z),z=-1):C=!0,ct(k,K-vt))):(W.sortIndex=St,e(g,W),R||M||(R=!0,G||(G=!0,at()))),W},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(W){var st=S;return function(){var K=S;S=st;try{return W.apply(this,arguments)}finally{S=K}}}})($h)),$h}var Wv;function AM(){return Wv||(Wv=1,Jh.exports=bM()),Jh.exports}var td={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function RM(){if(Zv)return Rn;Zv=1;var o=Ep();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:S}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.browser=function(v){return{$$typeof:f,_reason:v}},Rn.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,S)},Rn.flushSync=function(v){var m=g.T,S=r.p;try{if(g.T=null,r.p=2,v)return v()}finally{g.T=m,r.p=S,r.d.f()}},Rn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(v,m))},Rn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Rn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,M=_(S,m.crossOrigin),R=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?r.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:R,fetchPriority:C}):S==="script"&&r.d.X(v,{crossOrigin:M,integrity:R,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=_(m.as,m.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(v)},Rn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,M=_(S,m.crossOrigin);r.d.L(v,S,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=_(m.as,m.crossOrigin);r.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(v)},Rn.requestFormReset=function(v){r.d.r(v)},Rn.unstable_batchedUpdates=function(v,m){return v(m)},Rn.useFormState=function(v,m,S){return g.H.useFormState(v,m,S)},Rn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Rn.version="19.3.0",Rn}var Kv;function CM(){if(Kv)return td.exports;Kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=RM(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function wM(){if(Qv)return $o;Qv=1;var o=AM(),e=Ep(),a=CM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var i=t,s=n;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return g(l),t;if(u===s)return g(l),n;u=u.sibling}throw Error(r(188))}if(i.return!==s.return)i=l,s=u;else{for(var p=!1,T=l.child;T;){if(T===i){p=!0,i=l,s=u;break}if(T===s){p=!0,s=l,i=u;break}T=T.sibling}if(!p){for(T=u.child;T;){if(T===i){p=!0,i=u,s=l;break}if(T===s){p=!0,s=u,i=l;break}T=T.sibling}if(!p)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,i,s,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,s,l,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,i,s,l,u))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],i=S(t);return i===null||C(n,t,i.child,{foundSelf:!1}),n}function C(t,n,i,s){for(;i!==null;){if(i===n)s.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(s.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(t,n,i.child,s))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,B=null;function I(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function N(t,n,i){return t===i?(B=t,!1):t===n?(B!==null&&(x=t),!0):!1}function k(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,i){for(var s=0,l=t;l;l=i(l))s++;l=0;for(var u=n;u;u=i(u))l++;for(;0<s-l;)t=i(t),s--;for(;0<l-s;)n=i(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var z=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),P=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),$=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ut:return"Profiler";case at:return"StrictMode";case st:return"Suspense";case K:return"SuspenseList";case Gt:return"Activity";case P:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ct:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case W:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},He=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=He[se],He[se]=null,se--)}function ie(t,n){se++,He[se]=t.current,t.current=n}var Ft=Qt(null),oe=Qt(null),je=Qt(null),qe=Qt(null);function U(t,n){switch(ie(je,n),ie(oe,t),ie(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J_(n),t=$_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function b(){Lt(Ft),Lt(oe),Lt(je)}function et(t){var n=t.memoizedState;n!==null&&(Nr._currentValue=n.memoizedState,ie(qe,t)),n=Ft.current;var i=$_(n,t.type);n!==i&&(ie(oe,t),ie(Ft,i))}function pt(t){oe.current===t&&(Lt(Ft),Lt(oe)),qe.current===t&&(Lt(qe),Nr._currentValue=O)}var xt,ht;function kt(t){if(xt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",ht=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+ht}var Ct=!1;function Wt(t,n){if(!t||Ct)return"";Ct=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Nt){var j=Nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Nt){j=Nt}mt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){j=Nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Nt){if(Nt&&j&&typeof Nt.stack=="string")return[Nt.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),p=u[0],T=u[1];if(p&&T){var L=p.split(`
`),Y=T.split(`
`);for(l=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;if(s===L.length||l===Y.length)for(s=L.length-1,l=Y.length-1;1<=s&&0<=l&&L[s]!==Y[l];)l--;for(;1<=s&&0<=l;s--,l--)if(L[s]!==Y[l]){if(s!==1||l!==1)do if(s--,l--,0>l||L[s]!==Y[l]){var nt=`
`+L[s].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=s&&0<=l);break}}}finally{Ct=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function bt(t){try{var n="",i=null;do n+=Kt(t,i),i=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ue=o.unstable_requestPaint,H=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,gt=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ce=o.log,Ge=o.unstable_setDisableYieldValue,Se=null,Je=null;function dn(t){if(typeof ce=="function"&&Ge(t),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Se,t)}catch{}}var wn=Math.clz32?Math.clz32:xl,$i=Math.log,oo=Math.LN2;function xl(t){return t>>>=0,t===0?32:31-($i(t)/oo|0)|0}var ls=256,ta=262144,cs=4194304;function oi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function us(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~u,s!==0?l=oi(s):(p&=T,p!==0?l=oi(p):i||(i=T&~t,i!==0&&(l=oi(i))))):(T=s&~u,T!==0?l=oi(T):p!==0?l=oi(p):i||(i=s&~t,i!==0&&(l=oi(i)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,i=n&-n,u>=i||u===32&&(i&4194048)!==0)?n:l}function Ea(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Sl(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var s=31-wn(i),l=1<<s;n|=t[s],i&=~l}return n}function Mu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var t=cs;return cs<<=1,(cs&62914560)===0&&(cs=4194304),t}function lo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function fs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Eu(t,n,i,s,l,u){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var T=t.entanglements,L=t.expirationTimes,Y=t.hiddenUpdates;for(i=p&~i;0<i;){var nt=31-wn(i),mt=1<<nt;T[nt]=0,L[nt]=-1;var j=Y[nt];if(j!==null)for(Y[nt]=null,nt=0;nt<j.length;nt++){var tt=j[nt];tt!==null&&(tt.lane&=-536870913)}i&=~mt}s!==0&&A(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~n))}function A(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-wn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function Z(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-wn(i),l=1<<s;l&n|t[s]&n&&(t[s]|=n),i&=~l}}function rt(t,n){var i=n&-n;return i=(i&42)!==0?1:ot(i),(i&(t.suspendedLanes|n))!==0?0:i}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function Pt(t,n){var i=qt.p;try{return qt.p=t,n()}finally{qt.p=i}}var Bt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Bt,jt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,_e="__reactListeners$"+Bt,ze="__reactHandles$"+Bt,Ke="__reactResources$"+Bt,Ue="__reactMarker$"+Bt,Re="__reactLoad$"+Bt;function te(t){delete t[wt],delete t[jt],delete t[_e],delete t[ze]}function Le(t){var n;if(n=t[wt])return n;for(var i=t.parentNode;i;){if(n=i[ee]||i[wt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=gv(t);t!==null;){if(i=t[wt])return i;t=gv(t)}return n}t=i,i=t.parentNode}return null}function me(t){if(t=t[wt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function pn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Zn(t){var n=t[Ke];return n||(n=t[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ce(t){t[Ue]=!0}function Ta(t){t[Re]=void 0}var Ye=new Set,On={};function on(t,n){tn(t,n),tn(t+"Capture",n)}function tn(t,n){for(On[t]=n,t=0;t<n.length;t++)Ye.add(n[t])}var Dn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ws={},Li={};function Hx(t){return Ot.call(Li,t)?!0:Ot.call(Ws,t)?!1:Dn.test(t)?Li[t]=!0:(Ws[t]=!0,!1)}var we=!1;function Bp(){var t=we;return we=!1,t}function Ml(t,n,i){if(Hx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function El(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ea(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,s)}}function Kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gx(t,n,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){i=""+p,u.call(this,p)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tu(t){if(!t._valueTracker){var n=Fp(t)?"checked":"value";t._valueTracker=Gx(t,n,""+t[n])}}function Hp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=Fp(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}var Vx=/[\n"\\]/g;function li(t){return t.replace(Vx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bu(t,n,i,s,l,u,p,T){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Kn(n)):t.value!==""+Kn(n)&&(t.value=""+Kn(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?p==="number"&&t.value==n?Au(t,Kn(t.value)):Au(t,Kn(n)):i!=null?Au(t,Kn(i)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Kn(T):t.removeAttribute("name")}function Gp(t,n,i,s,l,u,p,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Tu(t);return}i=i!=null?""+Kn(i):"",n=n!=null?""+Kn(n):i,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Tu(t)}function Au(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Zs(t,n,i,s){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Kn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Vp(t,n,i){if(n!=null&&(n=""+Kn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Kn(i):""}function kp(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=Kn(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),Tu(t)}function Ks(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jp(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||kx.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Xp(t,n,i){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",we=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&i[l]!==s&&(jp(t,l,s),we=!0)}else for(var u in n)n.hasOwnProperty(u)&&jp(t,u,n[u])}function Ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(t){return Xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Cu=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qs=null,Js=null;function qp(t){var n=me(t);if(n&&(t=n.stateNode)){var i=t[jt]||null;t:switch(t=n.stateNode,n.type){case"input":if(bu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var l=s[jt]||null;if(!l)throw Error(r(90));bu(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&Hp(s)}break t;case"textarea":Vp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Zs(t,!!i.multiple,n,!1)}}}var Du=!1;function Yp(t,n,i){if(Du)return t(n,i);Du=!0;try{var s=t(n);return s}finally{if(Du=!1,(Qs!==null||Js!==null)&&(Tc(),Qs&&(n=Qs,t=Js,Js=Qs=null,qp(n),t)))for(n=0;n<t.length;n++)qp(t[n])}}function co(t,n){var i=t.stateNode;if(i===null)return null;var s=i[jt]||null;if(s===null)return null;i=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(na)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Nu=!1}var ba=null,Uu=null,bl=null;function Wp(){if(bl)return bl;var t,n=Uu,i=n.length,s,l="value"in ba?ba.value:ba.textContent,u=l.length;for(t=0;t<i&&n[t]===l[t];t++);var p=i-t;for(s=1;s<=p&&n[i-s]===l[u-s];s++);return bl=l.slice(t,1<s?1-s:void 0)}function Al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Zp(){return!1}function zn(t){function n(i,s,l,u,p){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(i=t[T],this[T]=i?i(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Rl:Zp,this.isPropagationStopped=Zp,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=zn(Aa),fo=z({},Aa,{view:0,detail:0}),qx=zn(fo),Lu,Ou,ho,wl=z({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Lu=t.screenX-ho.screenX,Ou=t.screenY-ho.screenY):Ou=Lu=0,ho=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Kp=zn(wl),Yx=z({},wl,{dataTransfer:0}),Wx=zn(Yx),Zx=z({},fo,{relatedTarget:0}),zu=zn(Zx),Kx=z({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=zn(Kx),Jx=z({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=zn(Jx),tS=z({},Aa,{data:0}),Qp=zn(tS),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iS[t])?!!n[t]:!1}function Pu(){return aS}var sS=z({},fo,{key:function(t){if(t.key){var n=eS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=zn(sS),oS=z({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=zn(oS),lS=z({},Aa,{submitter:0}),cS=zn(lS),uS=z({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),fS=zn(uS),hS=z({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=zn(hS),pS=z({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=zn(pS),gS=z({},Aa,{newState:0,oldState:0,source:0}),_S=zn(gS),vS=[9,13,27,32],Iu=na&&"CompositionEvent"in window,po=null;na&&"documentMode"in document&&(po=document.documentMode);var xS=na&&"TextEvent"in window&&!po,$p=na&&(!Iu||po&&8<po&&11>=po),tm=" ",em=!1;function nm(t,n){switch(t){case"keyup":return vS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function SS(t,n){switch(t){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(em=!0,tm);case"textInput":return t=n.data,t===tm&&em?null:t;default:return null}}function yS(t,n){if($s)return t==="compositionend"||!Iu&&nm(t,n)?(t=Wp(),bl=Uu=ba=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $p&&n.locale!=="ko"?null:n.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!MS[t.type]:n==="textarea"}function sm(t,n,i,s){Qs?Js?Js.push(s):Js=[s]:Qs=s,n=Dc(n,"onChange"),0<n.length&&(i=new Cl("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var mo=null,go=null;function ES(t){q_(t,0)}function Dl(t){var n=pn(t);if(Hp(n))return t}function rm(t,n){if(t==="change")return n}var om=!1;if(na){var Bu;if(na){var Fu="oninput"in document;if(!Fu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Fu=typeof lm.oninput=="function"}Bu=Fu}else Bu=!1;om=Bu&&(!document.documentMode||9<document.documentMode)}function cm(){mo&&(mo.detachEvent("onpropertychange",um),go=mo=null)}function um(t){if(t.propertyName==="value"&&Dl(go)){var n=[];sm(n,go,t,wu(t)),Yp(ES,n)}}function TS(t,n,i){t==="focusin"?(cm(),mo=n,go=i,mo.attachEvent("onpropertychange",um)):t==="focusout"&&cm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(go)}function AS(t,n){if(t==="click")return Dl(n)}function RS(t,n){if(t==="input"||t==="change")return Dl(n)}function CS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:CS;function _o(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!Ot.call(n,l)||!Qn(t[l],n[l]))return!1}return!0}function Hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,n){var i=fm(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=fm(i)}}function dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Hu(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Hu(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wS=na&&"documentMode"in document&&11>=document.documentMode,tr=null,Vu=null,vo=null,ku=!1;function mm(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ku||tr==null||tr!==Hu(s)||(s=tr,"selectionStart"in s&&Gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vo&&_o(vo,s)||(vo=s,s=Dc(Vu,"onSelect"),0<s.length&&(n=new Cl("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=tr)))}function hs(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var er={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},ju={},gm={};na&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ds(t){if(ju[t])return ju[t];if(!er[t])return t;var n=er[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in gm)return ju[t]=n[i];return t}var _m=ds("animationend"),vm=ds("animationiteration"),xm=ds("animationstart"),DS=ds("transitionrun"),NS=ds("transitionstart"),US=ds("transitioncancel"),Sm=ds("transitionend"),ym=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function yi(t,n){ym.set(t,n),on(n,[t])}var LS=0;function ia(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=bi.identifierPrefix;var i=LS++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Mm(t){if(t==null||typeof t=="string")return t;var n=null,i=yr;if(i!==null)for(var s=0;s<i.length;s++){var l=t[i[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function aa(t,n){return t=Mm(t),n=Mm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],nr=0,qu=0;function Ul(){for(var t=nr,n=qu=nr=0;n<t;){var i=ci[n];ci[n++]=null;var s=ci[n];ci[n++]=null;var l=ci[n];ci[n++]=null;var u=ci[n];if(ci[n++]=null,s!==null&&l!==null){var p=s.pending;p===null?l.next=l:(l.next=p.next,p.next=l),s.pending=l}u!==0&&Em(i,l,u)}}function Ll(t,n,i,s){ci[nr++]=t,ci[nr++]=n,ci[nr++]=i,ci[nr++]=s,qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,n,i,s){return Ll(t,n,i,s),Ol(t)}function ps(t,n){return Ll(t,null,null,n),Ol(t)}function Em(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-wn(i),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=i|536870912),u):null}function Ol(t){if(50<Ho)throw Ho=0,Ec=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ir={};function OS(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,i,s){return new OS(t,n,i,s)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,n){var i=t.alternate;return i===null?(i=Gn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Tm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function zl(t,n,i,s,l,u){var p=0;if(s=t,typeof s=="function")Wu(s)&&(p=1);else if(typeof s=="string")p=lM(t,i,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Gt:return t=Gn(31,i,n,l),t.elementType=Gt,t.lanes=u,t;case V:return ms(i.children,l,u,n);case at:p=8,l|=24;break;case ut:return t=Gn(12,i,n,l|2),t.elementType=ut,t.lanes=u,t;case st:return t=Gn(13,i,n,l),t.elementType=st,t.lanes=u,t;case K:return t=Gn(19,i,n,l),t.elementType=K,t.lanes=u,t;case re:case P:return t=l|32,t=Gn(30,i,n,t),t.elementType=P,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ct:p=10;break t;case _t:p=9;break t;case W:p=11;break t;case vt:p=14;break t;case St:p=16,s=null;break t}p=29,i=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(p,i,n,l),n.elementType=t,n.type=s,n.lanes=u,n}function ms(t,n,i,s){return t=Gn(7,t,s,n),t.lanes=i,t}function Zu(t,n,i){return t=Gn(6,t,null,n),t.lanes=i,t}function bm(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,i){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Am=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var i=Am.get(t);return i!==void 0?i:(n={value:t,source:n,stack:bt(n)},Am.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var ar=[],sr=0,Pl=null,xo=0,fi=[],hi=0,Ra=null,zi=1,Pi="";function ra(t,n){ar[sr++]=xo,ar[sr++]=Pl,Pl=t,xo=n}function Rm(t,n,i){fi[hi++]=zi,fi[hi++]=Pi,fi[hi++]=Ra,Ra=t;var s=zi;t=Pi;var l=32-wn(s)-1;s&=~(1<<l),i+=1;var u=32-wn(n)+l;if(30<u){var p=l-l%5;u=(s&(1<<p)-1).toString(32),s>>=p,l-=p,zi=1<<32-wn(n)+l|i<<l|s,Pi=u+t}else zi=1<<u|i<<l|s,Pi=t}function Il(t){t.return!==null&&(ra(t,1),Rm(t,1,0))}function Qu(t){for(;t===Pl;)Pl=ar[--sr],ar[sr]=null,xo=ar[--sr],ar[sr]=null;for(;t===Ra;)Ra=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null}function Cm(t,n){fi[hi++]=zi,fi[hi++]=Pi,fi[hi++]=Ra,zi=n.id,Pi=n.overflow,Ra=t}var vn=null,We=null,ge=!1,Ca=null,di=!1,Ju=Error(r(519));function wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(ui(n,t)),Ju}function wm(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[wt]=t,n[jt]=s,i){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(i=0;i<Vo.length;i++)xe(Vo[i],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Gp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),kp(n,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||K_(n.textContent,i)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||wa(t,!0)}function Bl(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:vn=vn.return}}function rr(t){if(t!==vn)return!1;if(!ge)return Bl(t),ge=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||wh(t.type,t.memoizedProps)),i=!i),i&&We&&wa(t),Bl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=mv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=mv(t)}else n===27?(n=We,Xa(t.type)?(t=Bh,Bh=null,We=t):We=n):We=vn?mi(t.stateNode.nextSibling):null;return!0}function gs(){We=vn=null,ge=!1}function $u(){var t=Ca;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ca=null),t}function So(t){Ca===null?Ca=[t]:Ca.push(t)}var tf=Qt(null),_s=null,oa=null;function Da(t,n,i){ie(tf,n._currentValue),n._currentValue=i}function la(t){t._currentValue=tf.current,Lt(tf)}function Fl(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function ef(t,n,i,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var p=l.child;u=u.firstContext;t:for(;u!==null;){var T=u;u=l;for(var L=0;L<n.length;L++)if(T.context===n[L]){u.lanes|=i,T=u.alternate,T!==null&&(T.lanes|=i),Fl(u.return,i,t),s||(p=null);break t}u=T.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(r(341));p.lanes|=i,u=p.alternate,u!==null&&(u.lanes|=i),Fl(p,i,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,p=l.alternate,p!==null&&(p.lanes|=i),Fl(l.return,i,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function vs(t,n,i,s){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var T=l.type;Qn(l.pendingProps.value,p.value)||(t!==null?t.push(T):t=[T])}}else if(l===qe.current){if(p=l.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Nr):t=[Nr])}l=l.return}return t!==null&&ef(n,t,i,s),n.flags|=262144,t!==null}function Hl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){_s=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Dm(_s,t)}function Gl(t,n){return _s===null&&xs(t),Dm(t,n)}function Dm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},oa===null){if(t===null)throw Error(r(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return i}var zS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},PS=o.unstable_scheduleCallback,IS=o.unstable_NormalPriority,ln={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new zS,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&PS(IS,function(){t.controller.abort()})}function Nm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];i.indexOf(s)===-1&&i.push(s)}}}var Mo=null;function BS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Eo=null,af=0,Ss=0,or=null;function FS(t,n){if(Eo===null){var i=Eo=[];af=0,Ss=Sh(),or={status:"pending",value:void 0,then:function(s){i.push(s)}}}return af++,n.then(Um,Um),n}function Um(){if(--af===0&&(Mo=null,Eo!==null)){or!==null&&(or.status="fulfilled");var t=Eo;Eo=null,Ss=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function HS(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),s}var Lm=Et.S;Et.S=function(t,n){if(b_=H(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&FS(t,n),Mo!==null)for(var i=br;i!==null;)Nm(i,Mo),i=i.next;if(i=t.types,i!==null){for(var s=br;s!==null;)Nm(s,i),s=s.next;if(Ss!==0){s=Mo,s===null&&(s=Mo=[]);for(var l=0;l<i.length;l++){var u=i[l];s.indexOf(u)===-1&&s.push(u)}}}Lm!==null&&Lm(t,n)};var ys=Qt(null);function sf(){var t=ys.current;return t!==null?t:Xe.pooledCache}function Vl(t,n){n===null?ie(ys,ys.current):ie(ys,n.pool)}function Om(){var t=sf();return t===null?null:{parent:ln._currentValue,pool:t}}var lr=Error(r(460)),rf=Error(r(474)),kl=Error(r(542)),jl={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Oi,Oi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t}throw Es=n,lr}}function Ms(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Es=i,lr):i}}var Es=null;function Im(){if(Es===null)throw Error(r(459));var t=Es;return Es=null,t}function Bm(t){if(t===lr||t===kl)throw Error(r(483))}var cr=null,To=0;function Xl(t){var n=To;return To+=1,cr===null&&(cr=[]),Pm(cr,t,n)}function Na(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ql(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){function n(X,F){if(t){var J=X.deletions;J===null?(X.deletions=[F],X.flags|=16):J.push(F)}}function i(X,F){if(!t)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function s(X){for(var F=new Map;X!==null;)X.key===null?F.set(X.index,X):F.set(X.key,X),X=X.sibling;return F}function l(X,F){return X=sa(X,F),X.index=0,X.sibling=null,X}function u(X,F,J){return X.index=J,t?(J=X.alternate,J!==null?(J=J.index,J<F?(X.flags|=2,F):J):(X.flags|=134217730,F)):(X.flags|=1048576,F)}function p(X){return t&&X.alternate===null&&(X.flags|=134217730),X}function T(X,F,J,dt){return F===null||F.tag!==6?(F=Zu(J,X.mode,dt),F.return=X,F):(F=l(F,J),F.return=X,F)}function L(X,F,J,dt){var Ht=J.type;return Ht===V?(X=nt(X,F,J.props.children,dt,J.key),Na(X,J),X):F!==null&&(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ms(Ht)===F.type)?(F=l(F,J.props),Na(F,J),F.return=X,F):(F=zl(J.type,J.key,J.props,null,X.mode,dt),Na(F,J),F.return=X,F)}function Y(X,F,J,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=Ku(J,X.mode,dt),F.return=X,F):(F=l(F,J.children||[]),F.return=X,F)}function nt(X,F,J,dt,Ht){return F===null||F.tag!==7?(F=ms(J,X.mode,dt,Ht),F.return=X,F):(F=l(F,J),F.return=X,F)}function mt(X,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=Zu(""+F,X.mode,J),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case D:return J=zl(F.type,F.key,F.props,null,X.mode,J),Na(J,F),J.return=X,J;case w:return F=Ku(F,X.mode,J),F.return=X,F;case St:return F=Ms(F),mt(X,F,J)}if(Rt(F)||it(F))return F=ms(F,X.mode,J,null),F.return=X,F;if(typeof F.then=="function")return mt(X,Xl(F),J);if(F.$$typeof===ct)return mt(X,Gl(X,F),J);ql(X,F)}return null}function j(X,F,J,dt){var Ht=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(X,F,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ht?L(X,F,J,dt):null;case w:return J.key===Ht?Y(X,F,J,dt):null;case St:return J=Ms(J),j(X,F,J,dt)}if(Rt(J)||it(J))return Ht!==null?null:nt(X,F,J,dt,null);if(typeof J.then=="function")return j(X,F,Xl(J),dt);if(J.$$typeof===ct)return j(X,F,Gl(X,J),dt);ql(X,J)}return null}function tt(X,F,J,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return X=X.get(J)||null,T(F,X,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case D:return X=X.get(dt.key===null?J:dt.key)||null,L(F,X,dt,Ht);case w:return X=X.get(dt.key===null?J:dt.key)||null,Y(F,X,dt,Ht);case St:return dt=Ms(dt),tt(X,F,J,dt,Ht)}if(Rt(dt)||it(dt))return X=X.get(J)||null,nt(F,X,dt,Ht,null);if(typeof dt.then=="function")return tt(X,F,J,Xl(dt),Ht);if(dt.$$typeof===ct)return tt(X,F,J,Gl(F,dt),Ht);ql(F,dt)}return null}function Nt(X,F,J,dt){for(var Ht=null,Me=null,Jt=F,ae=F=0,fn=null;Jt!==null&&ae<J.length;ae++){Jt.index>ae?(fn=Jt,Jt=null):fn=Jt.sibling;var Ae=j(X,Jt,J[ae],dt);if(Ae===null){Jt===null&&(Jt=fn);break}t&&Jt&&Ae.alternate===null&&n(X,Jt),F=u(Ae,F,ae),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae,Jt=fn}if(ae===J.length)return i(X,Jt),ge&&ra(X,ae),Ht;if(Jt===null){for(;ae<J.length;ae++)Jt=mt(X,J[ae],dt),Jt!==null&&(F=u(Jt,F,ae),Me===null?Ht=Jt:Me.sibling=Jt,Me=Jt);return ge&&ra(X,ae),Ht}for(Jt=s(Jt);ae<J.length;ae++)fn=tt(Jt,X,ae,J[ae],dt),fn!==null&&(t&&(Ae=fn.alternate,Ae!==null&&Jt.delete(Ae.key===null?ae:Ae.key)),F=u(fn,F,ae),Me===null?Ht=fn:Me.sibling=fn,Me=fn);return t&&Jt.forEach(function(Ka){return n(X,Ka)}),ge&&ra(X,ae),Ht}function Xt(X,F,J,dt){if(J==null)throw Error(r(151));for(var Ht=null,Me=null,Jt=F,ae=F=0,fn=null,Ae=J.next();Jt!==null&&!Ae.done;ae++,Ae=J.next()){Jt.index>ae?(fn=Jt,Jt=null):fn=Jt.sibling;var Ka=j(X,Jt,Ae.value,dt);if(Ka===null){Jt===null&&(Jt=fn);break}t&&Jt&&Ka.alternate===null&&n(X,Jt),F=u(Ka,F,ae),Me===null?Ht=Ka:Me.sibling=Ka,Me=Ka,Jt=fn}if(Ae.done)return i(X,Jt),ge&&ra(X,ae),Ht;if(Jt===null){for(;!Ae.done;ae++,Ae=J.next())Ae=mt(X,Ae.value,dt),Ae!==null&&(F=u(Ae,F,ae),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae);return ge&&ra(X,ae),Ht}for(Jt=s(Jt);!Ae.done;ae++,Ae=J.next())Ae=tt(Jt,X,ae,Ae.value,dt),Ae!==null&&(t&&(fn=Ae.alternate,fn!==null&&Jt.delete(fn.key===null?ae:fn.key)),F=u(Ae,F,ae),Me===null?Ht=Ae:Me.sibling=Ae,Me=Ae);return t&&Jt.forEach(function(SM){return n(X,SM)}),ge&&ra(X,ae),Ht}function he(X,F,J,dt){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ht=J.key;F!==null;){if(F.key===Ht){if(Ht=J.type,Ht===V){if(F.tag===7){i(X,F.sibling),dt=l(F,J.props.children),Na(dt,J),dt.return=X,X=dt;break t}}else if(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ms(Ht)===F.type){i(X,F.sibling),dt=l(F,J.props),Na(dt,J),dt.return=X,X=dt;break t}i(X,F);break}else n(X,F);F=F.sibling}J.type===V?(dt=ms(J.props.children,X.mode,dt,J.key),Na(dt,J),dt.return=X,X=dt):(dt=zl(J.type,J.key,J.props,null,X.mode,dt),Na(dt,J),dt.return=X,X=dt)}return p(X);case w:t:{for(Ht=J.key;F!==null;){if(F.key===Ht)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){i(X,F.sibling),dt=l(F,J.children||[]),dt.return=X,X=dt;break t}else{i(X,F);break}else n(X,F);F=F.sibling}dt=Ku(J,X.mode,dt),dt.return=X,X=dt}return p(X);case St:return J=Ms(J),he(X,F,J,dt)}if(Rt(J))return Nt(X,F,J,dt);if(it(J)){if(Ht=it(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),Xt(X,F,J,dt)}if(typeof J.then=="function")return he(X,F,Xl(J),dt);if(J.$$typeof===ct)return he(X,F,Gl(X,J),dt);ql(X,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(i(X,F.sibling),dt=l(F,J),dt.return=X,X=dt):(i(X,F),dt=Zu(J,X.mode,dt),dt.return=X,X=dt),p(X)):i(X,F)}return function(X,F,J,dt){try{To=0;var Ht=he(X,F,J,dt);return cr=null,Ht}catch(Jt){if(Jt===lr||Jt===kl)throw Jt;var Me=Gn(29,Jt,null,X.mode);return Me.lanes=dt,Me.return=X,Me}finally{}}}var Ts=Fm(!0),Hm=Fm(!1),Ua=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Ol(t),Em(t,null,i),n}return Ll(t,s,n,i),Ol(t)}function bo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,Z(t,i)}}function cf(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=p:u=u.next=p,i=i.next}while(i!==null);u===null?l=u=n:u=u.next=n}else l=u=n;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var uf=!1;function Ao(){if(uf){var t=or;if(t!==null)throw t}}function Ro(t,n,i,s){uf=!1;var l=t.updateQueue;Ua=!1;var u=l.firstBaseUpdate,p=l.lastBaseUpdate,T=l.shared.pending;if(T!==null){l.shared.pending=null;var L=T,Y=L.next;L.next=null,p===null?u=Y:p.next=Y,p=L;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,T=nt.lastBaseUpdate,T!==p&&(T===null?nt.firstBaseUpdate=Y:T.next=Y,nt.lastBaseUpdate=L))}if(u!==null){var mt=l.baseState;p=0,nt=Y=L=null,T=u;do{var j=T.lane&-536870913,tt=j!==T.lane;if(tt?(ye&j)===j:(s&j)===j){j!==0&&j===Ss&&(uf=!0),nt!==null&&(nt=nt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Nt=t,Xt=T;j=n;var he=i;switch(Xt.tag){case 1:if(Nt=Xt.payload,typeof Nt=="function"){mt=Nt.call(he,mt,j);break t}mt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Xt.payload,j=typeof Nt=="function"?Nt.call(he,mt,j):Nt,j==null)break t;mt=z({},mt,j);break t;case 2:Ua=!0}}j=T.callback,j!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[j]:tt.push(j))}else tt={lane:j,tag:T.tag,payload:T.payload,callback:T.callback,next:null},nt===null?(Y=nt=tt,L=mt):nt=nt.next=tt,p|=j;if(T=T.next,T===null){if(T=l.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);nt===null&&(L=mt),l.baseState=L,l.firstBaseUpdate=Y,l.lastBaseUpdate=nt,u===null&&(l.shared.lanes=0),Ga|=p,t.lanes=p,t.memoizedState=mt}}function Gm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Gm(i[t],n)}var za=Qt(null),Yl=Qt(0);function km(t,n){t=da,ie(Yl,t),ie(za,n),da=t|n.baseLanes}function ff(){ie(Yl,da),ie(za,za.current)}function hf(){da=Yl.current,Lt(za),Lt(Yl)}var En=Qt(null),Nn=null;function Pa(t){var n=t.alternate;ie(Tn,Tn.current&1),ie(En,t),Nn===null&&(n===null||za.current!==null||n.memoizedState!==null)&&(Nn=t)}function df(t){ie(Tn,Tn.current),ie(En,t),Nn===null&&(Nn=t)}function jm(t){t.tag===22?(ie(Tn,Tn.current),ie(En,t),Nn===null&&(Nn=t)):Ia()}function Ia(){ie(Tn,Tn.current),ie(En,En.current)}function Jn(t){Lt(En),Nn===t&&(Nn=null),Lt(Tn)}var Tn=Qt(0);function Co(t,n){ie(En,En.current),ie(Tn,n)}function pf(t){Lt(Tn),Lt(En),Nn===t&&(Nn=null)}function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Ph(i)||Ih(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,fe=null,Ve=null,cn=null,Zl=!1,ur=!1,bs=!1,Kl=0,wo=0,fr=null,GS=0;function en(){throw Error(r(321))}function mf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Qn(t[i],n[i]))return!1;return!0}function gf(t,n,i,s,l,u){return ca=u,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Rg:Cg,bs=!1,u=i(s,l),bs=!1,ur&&(u=qm(n,i,s,l)),Xm(t),u}function Xm(t){Et.H=ic;var n=Ve!==null&&Ve.next!==null;if(ca=0,cn=Ve=fe=null,Zl=!1,wo=0,fr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Hl(t)&&(un=!0))}function qm(t,n,i,s){fe=t;var l=0;do{if(ur&&(fr=null),wo=0,ur=!1,25<=l)throw Error(r(301));if(l+=1,cn=Ve=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Et.H=ZS,u=n(i,s)}while(ur);return u}function VS(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(fe.flags|=1024),n}function _f(){var t=Kl!==0;return Kl=0,t}function vf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function xf(t){if(Zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Zl=!1}ca=0,cn=Ve=fe=null,ur=!1,wo=Kl=0,fr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Ve===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=wo;return wo+=1,fr===null&&(fr=[]),t=Pm(fr,t,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Rg:Cg),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===ft)return;if(t.$$typeof===ct)return Mn(t)}throw Error(r(438,String(t)))}function Sf(t){var n=null,i=fe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Ql(),fe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=be;return n.index++,i}function ua(t,n){return typeof n=="function"?n(t):n}function $l(t){var n=sn();return yf(n,Ve,t)}function yf(t,n,i){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var p=l.next;l.next=u.next,u.next=p}n.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var T=p=null,L=null,Y=n,nt=!1;do{var mt=Y.lane&-536870913;if(mt!==Y.lane?(ye&mt)===mt:(ca&mt)===mt){var j=Y.revertLane;if(j===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),mt===Ss&&(nt=!0);else if((ca&j)===j){Y=Y.next,j===Ss&&(nt=!0);continue}else mt={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},L===null?(T=L=mt,p=u):L=L.next=mt,fe.lanes|=j,Ga|=j;mt=Y.action,bs&&i(u,mt),u=Y.hasEagerState?Y.eagerState:i(u,mt)}else j={lane:mt,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},L===null?(T=L=j,p=u):L=L.next=j,fe.lanes|=mt,Ga|=mt;Y=Y.next}while(Y!==null&&Y!==n);if(L===null?p=u:L.next=T,!Qn(u,t.memoizedState)&&(un=!0,nt&&(i=or,i!==null)))throw i;t.memoizedState=u,t.baseState=p,t.baseQueue=L,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Mf(t){var n=sn(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var s=i.dispatch,l=i.pending,u=n.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do u=t(u,p.action),p=p.next;while(p!==l);Qn(u,n.memoizedState)||(un=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),i.lastRenderedState=u}return[u,s]}function Ym(t,n,i){var s=fe,l=sn(),u=ge;if(u){if(i===void 0)throw Error(r(407));i=i()}else i=n();var p=!Qn((Ve||l).memoizedState,i);if(p&&(l.memoizedState=i,un=!0),l=l.queue,bf(Km.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||p||cn!==null&&(cn.memoizedState.tag&1)!==0,hr(t?9:8,{destroy:void 0},Zm.bind(null,s,l,i,n),null),t){if(s.flags|=2048,Xe===null)throw Error(r(349));u||(ca&127)!==0||Wm(s,n,i)}return i}function Wm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=fe.updateQueue,n===null?(n=Ql(),fe.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Zm(t,n,i,s){n.value=i,n.getSnapshot=s,Qm(n)&&Jm(t)}function Km(t,n,i){return i(function(){Qm(n)&&Jm(t)})}function Qm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Qn(t,i)}catch{return!0}}function Jm(t){var n=ps(t,2);n!==null&&Xn(n,t,2)}function Ef(t){var n=Pn();if(typeof t=="function"){var i=t;if(t=i(),bs){dn(!0);try{i()}finally{dn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function $m(t,n,i,s){return t.baseState=i,yf(t,Ve,typeof s=="function"?s:ua)}function kS(t,n,i,s,l){if(nc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};Et.T!==null?i(!0):u.isTransition=!1,s(u),i=n.pending,i===null?(u.next=n.pending=u,tg(n,u)):(u.next=i.next,n.pending=i.next=u)}}function tg(t,n){var i=n.action,s=n.payload,l=t.state;if(n.isTransition){var u=Et.T,p={};p.types=u!==null?u.types:null,Et.T=p;try{var T=i(l,s),L=Et.S;L!==null&&L(p,T),eg(t,n,T)}catch(Y){Tf(t,n,Y)}finally{u!==null&&p.types!==null&&(u.types=p.types),Et.T=u}}else try{u=i(l,s),eg(t,n,u)}catch(Y){Tf(t,n,Y)}}function eg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){ng(t,n,s)},function(s){return Tf(t,n,s)}):ng(t,n,i)}function ng(t,n,i){n.status="fulfilled",n.value=i,ig(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,tg(t,i)))}function Tf(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,ig(n),n=n.next;while(n!==s)}t.action=null}function ig(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ag(t,n){return n}function sg(t,n){if(ge){var i=Xe.formState;if(i!==null){t:{var s=fe;if(ge){if(We){e:{for(var l=We,u=di;l.nodeType!==8;){if(!u){l=null;break e}if(l=mi(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){We=mi(l.nextSibling),s=l.data==="F!";break t}}wa(s)}s=!1}s&&(n=i[0])}}return i=Pn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:n},i.queue=s,i=Tg.bind(null,fe,s),s.dispatch=i,s=Ef(!1),u=Df.bind(null,fe,!1,s.queue),s=Pn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,i=kS.bind(null,fe,l,u,i),l.dispatch=i,s.memoizedState=t,[n,i,!1]}function rg(t){var n=sn();return og(n,Ve,t)}function og(t,n,i){if(n=yf(t,n,ag)[0],t=$l(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Do(n)}catch(p){throw p===lr?kl:p}else s=n;n=sn();var l=n.queue,u=l.dispatch;return i!==n.memoizedState&&(fe.flags|=2048,hr(9,{destroy:void 0},jS.bind(null,l,i),null)),[s,u,t]}function jS(t,n){t.action=n}function lg(t){var n=sn(),i=Ve;if(i!==null)return og(n,i,t);sn(),n=n.memoizedState,i=sn();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function hr(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Ql(),fe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function cg(){return sn().memoizedState}function tc(t,n,i,s){var l=Pn();fe.flags|=t,l.memoizedState=hr(1|n,{destroy:void 0},i,s===void 0?null:s)}function ec(t,n,i,s){var l=sn();s=s===void 0?null:s;var u=l.memoizedState.inst;Ve!==null&&s!==null&&mf(s,Ve.memoizedState.deps)?l.memoizedState=hr(n,u,i,s):(fe.flags|=t,l.memoizedState=hr(1|n,u,i,s))}function ug(t,n){tc(8390656,8,t,n)}function bf(t,n){ec(2048,8,t,n)}function XS(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Ql(),fe.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function fg(t){var n=sn().memoizedState;return XS({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function hg(t,n){return ec(4,2,t,n)}function dg(t,n){return ec(4,4,t,n)}function pg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mg(t,n,i){i=i!=null?i.concat([t]):null,ec(4,4,pg.bind(null,n,t),i)}function Af(){}function gg(t,n){var i=sn();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&mf(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function _g(t,n){var i=sn();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&mf(n,s[1]))return s[0];if(s=t(),bs){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[s,n],s}function Rf(t,n,i){return i===void 0||(ca&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=R_(),fe.lanes|=t,Ga|=t,i)}function vg(t,n,i,s){return Qn(i,n)?i:za.current!==null?(t=Rf(t,i,s),Qn(t,n)||(un=!0),t):(ca&106)===0||(ca&1073741824)!==0&&(ye&261930)===0?(un=!0,t.memoizedState=i):(t=R_(),fe.lanes|=t,Ga|=t,n)}function xg(t,n,i,s,l){var u=qt.p;qt.p=u!==0&&8>u?u:8;var p=Et.T,T={};T.types=p!==null?p.types:null,Et.T=T,Df(t,!1,n,i);try{var L=l(),Y=Et.S;if(Y!==null&&Y(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var nt=HS(L,s);No(t,n,nt,ni(t))}else No(t,n,s,ni(t))}catch(mt){No(t,n,{then:function(){},status:"rejected",reason:mt},ni())}finally{qt.p=u,p!==null&&T.types!==null&&(p.types=T.types),Et.T=p}}function qS(){}function Cf(t,n,i,s){if(t.tag!==5)throw Error(r(476));var l=Sg(t).queue;xg(t,l,n,O,i===null?qS:function(){return yg(t),i(s)})}function Sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:O},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function yg(t){var n=Sg(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},ni())}function wf(){return Mn(Nr)}function Mg(){return sn().memoizedState}function Eg(){return sn().memoizedState}function YS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ni();t=La(i);var s=Oa(n,t,i);s!==null&&(Xn(s,n,i),bo(s,n,i)),n={cache:nf()},t.payload=n;return}n=n.return}}function WS(t,n,i){var s=ni();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},nc(t)?bg(n,i):(i=Yu(t,n,i,s),i!==null&&(Xn(i,t,s),Ag(i,n,s)))}function Tg(t,n,i){var s=ni();No(t,n,i,s)}function No(t,n,i,s){var l={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(nc(t))bg(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var p=n.lastRenderedState,T=u(p,i);if(l.hasEagerState=!0,l.eagerState=T,Qn(T,p))return Ll(t,n,l,0),Xe===null&&Ul(),!1}catch{}finally{}if(i=Yu(t,n,l,s),i!==null)return Xn(i,t,s),Ag(i,n,s),!0}return!1}function Df(t,n,i,s){if(s={lane:2,revertLane:Sh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(n)throw Error(r(479))}else n=Yu(t,i,s,2),n!==null&&Xn(n,t,2)}function nc(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function bg(t,n){ur=Zl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Ag(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,Z(t,i)}}var ic={readContext:Mn,use:Jl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Rg={readContext:Mn,use:Jl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:ug,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,tc(4194308,4,pg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return tc(4194308,4,t,n)},useInsertionEffect:function(t,n){tc(4,2,t,n)},useMemo:function(t,n){var i=Pn();n=n===void 0?null:n;var s=t();if(bs){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=Pn();if(i!==void 0){var l=i(n);if(bs){dn(!0);try{i(n)}finally{dn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=WS.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ef(t);var n=t.queue,i=Tg.bind(null,fe,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Af,useDeferredValue:function(t,n){var i=Pn();return Rf(i,t,n)},useTransition:function(){var t=Ef(!1);return t=xg.bind(null,fe,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=fe,l=Pn();if(ge){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Xe===null)throw Error(r(349));(ye&127)!==0||Wm(s,n,i)}l.memoizedState=i;var u={value:i,getSnapshot:n};return l.queue=u,ug(Km.bind(null,s,u,t),[t]),s.flags|=2048,hr(9,{destroy:void 0},Zm.bind(null,s,u,i,n),null),i},useId:function(){var t=Pn(),n=Xe.identifierPrefix;if(ge){var i=Pi,s=zi;i=(s&~(1<<32-wn(s)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Kl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=GS++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Df.bind(null,fe,!0,i),i.dispatch=n,[t,n]},useMemoCache:Sf,useCacheRefresh:function(){return Pn().memoizedState=YS.bind(null,fe)},useEffectEvent:function(t){var n=Pn(),i={impl:t};return n.memoizedState=i,function(){if((Oe&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Cg={readContext:Mn,use:Jl,useCallback:gg,useContext:Mn,useEffect:bf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:$l,useRef:cg,useState:function(){return $l(ua)},useDebugValue:Af,useDeferredValue:function(t,n){var i=sn();return vg(i,Ve.memoizedState,t,n)},useTransition:function(){var t=$l(ua)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:wf,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var i=sn();return $m(i,Ve,t,n)},useMemoCache:Sf,useCacheRefresh:Eg,useEffectEvent:fg},ZS={readContext:Mn,use:Jl,useCallback:gg,useContext:Mn,useEffect:bf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:Mf,useRef:cg,useState:function(){return Mf(ua)},useDebugValue:Af,useDeferredValue:function(t,n){var i=sn();return Ve===null?Rf(i,t,n):vg(i,Ve.memoizedState,t,n)},useTransition:function(){var t=Mf(ua)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:wf,useFormState:lg,useActionState:lg,useOptimistic:function(t,n){var i=sn();return Ve!==null?$m(i,Ve,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Eg,useEffectEvent:fg};function Nf(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:z({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Uf={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=ni(),l=La(s);l.payload=n,i!=null&&(l.callback=i),n=Oa(t,l,s),n!==null&&(Xn(n,t,s),bo(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=ni(),l=La(s);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Oa(t,l,s),n!==null&&(Xn(n,t,s),bo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ni(),s=La(i);s.tag=2,n!=null&&(s.callback=n),n=Oa(t,s,i),n!==null&&(Xn(n,t,i),bo(n,t,i))}};function wg(t,n,i,s,l,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,p):n.prototype&&n.prototype.isPureReactComponent?!_o(i,s)||!_o(l,u):!0}function Dg(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&Uf.enqueueReplaceState(n,n.state,null)}function As(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=z({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ng(t){Nl(t)}function Ug(t){console.error(t)}function Lg(t){Nl(t)}function ac(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Og(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Lf(t,n,i){return i=La(i),i.tag=3,i.payload={element:null},i.callback=function(){ac(t,n)},i}function zg(t){return t=La(t),t.tag=3,t}function Pg(t,n,i,s){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){Og(n,i,s)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Og(n,i,s),typeof l!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function KS(t,n,i,s,l){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&vs(n,i,l,!0),i=En.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Nn===null?bc():i.alternate===null&&nn===0&&(nn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,s===jl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),_h(t,s,l)),!1;case 22:return i.flags|=65536,s===jl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),_h(t,s,l)),!1}throw Error(r(435,i.tag))}return _h(t,s,l),bc(),!1}if(ge)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==Ju&&(t=Error(r(422),{cause:s}),So(ui(t,i)))):(s!==Ju&&(n=Error(r(423),{cause:s}),So(ui(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=ui(s,i),l=Lf(t.stateNode,s,l),cf(t,l),nn!==4&&(nn=2)),!1;var u=Error(r(520),{cause:s});if(u=ui(u,i),Fo===null?Fo=[u]:Fo.push(u),nn!==4&&(nn=2),n===null)return!0;s=ui(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Lf(i.stateNode,s,t),cf(i,t),!1;case 1:if(n=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Va===null||!Va.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=zg(l),Pg(l,t,i,s),cf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Of=Error(r(461)),un=!1;function mn(t,n,i,s){n.child=t===null?Hm(n,null,i,s):Ts(n,t.child,i,s)}function Ig(t,n,i,s,l){i=i.render;var u=n.ref;if("ref"in s){var p={};for(var T in s)T!=="ref"&&(p[T]=s[T])}else p=s;return xs(n),s=gf(t,n,i,p,u,l),T=_f(),t!==null&&!un?(vf(t,n,l),fa(t,n,l)):(ge&&T&&Il(n),n.flags|=1,mn(t,n,s,l),n.child)}function Bg(t,n,i,s,l){if(t===null){var u=i.type;return typeof u=="function"&&!Wu(u)&&u.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=u,Fg(t,n,u,s,l)):(t=zl(i.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!Vf(t,l)){var p=u.memoizedProps;if(i=i.compare,i=i!==null?i:_o,i(p,s)&&t.ref===n.ref)return fa(t,n,l)}return n.flags|=1,t=sa(u,s),t.ref=n.ref,t.return=n,n.child=t}function Fg(t,n,i,s,l){if(t!==null){var u=t.memoizedProps;if(_o(u,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=u,Vf(t,l))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,fa(t,n,l)}return zf(t,n,i,s,l)}function Hg(t,n,i,s){var l=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return Gg(t,n,u,i,s)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(n,u!==null?u.cachePool:null),u!==null?km(n,u):ff(),jm(n);else return s=n.lanes=536870912,Gg(t,n,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(Vl(n,u.cachePool),km(n,u),Ia(),n.memoizedState=null):(t!==null&&Vl(n,null),ff(),Ia());return mn(t,n,l,i),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gg(t,n,i,s,l){var u=sf();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:i,cachePool:u},t!==null&&Vl(n,null),ff(),jm(n),t!==null&&vs(t,n,s,!0),n.childLanes=l,null}function sc(t,n){return n=rc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vg(t,n,i){return Ts(n,t.child,null,i),t=sc(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function QS(t,n,i){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=sc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(df(n),(t=We)?(t=pv(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,vn=n,We=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return sc(n,s)}var u=t.memoizedState;if(u!==null){var p=u.dehydrated;if(df(n),l)if(n.flags&256)n.flags&=-257,n=Vg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||vs(t,n,i,!1),l=(i&t.childLanes)!==0,un||l){if(za.current===null){if(s=Xe,s!==null&&(p=rt(s,i),p!==0&&p!==u.retryLane))throw u.retryLane=p,ps(t,p),Xn(s,t,p),Of;bc()}n=Vg(t,n,i)}else t=u.treeContext,We=mi(p.nextSibling),vn=n,ge=!0,Ca=null,di=!1,t!==null&&Cm(n,t),n=sc(n,s),n.flags|=134221824;return n}return t=sa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dr(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function zf(t,n,i,s,l){return xs(n),i=gf(t,n,i,s,void 0,l),s=_f(),t!==null&&!un?(vf(t,n,l),fa(t,n,l)):(ge&&s&&Il(n),n.flags|=1,mn(t,n,i,l),n.child)}function kg(t,n,i,s,l,u){return xs(n),n.updateQueue=null,i=qm(n,s,i,l),Xm(t),s=_f(),t!==null&&!un?(vf(t,n,u),fa(t,n,u)):(ge&&s&&Il(n),n.flags|=1,mn(t,n,i,u),n.child)}function jg(t,n,i,s,l){if(xs(n),n.stateNode===null){var u=ir,p=i.contextType;typeof p=="object"&&p!==null&&(u=Mn(p)),u=new i(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Uf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},of(n),p=i.contextType,u.context=typeof p=="object"&&p!==null?Mn(p):ir,u.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Nf(n,i,p,s),u.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Uf.enqueueReplaceState(u,u.state,null),Ro(n,s,u,l),Ao(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var T=n.memoizedProps,L=As(i,T);u.props=L;var Y=u.context,nt=i.contextType;p=ir,typeof nt=="object"&&nt!==null&&(p=Mn(nt));var mt=i.getDerivedStateFromProps;nt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,nt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||Y!==p)&&Dg(n,u,s,p),Ua=!1;var j=n.memoizedState;u.state=j,Ro(n,s,u,l),Ao(),Y=n.memoizedState,T||j!==Y||Ua?(typeof mt=="function"&&(Nf(n,i,mt,s),Y=n.memoizedState),(L=Ua||wg(n,i,L,s,j,Y,p))?(nt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Y),u.props=s,u.state=Y,u.context=p,s=L):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,lf(t,n),p=n.memoizedProps,nt=As(i,p),u.props=nt,mt=n.pendingProps,j=u.context,Y=i.contextType,L=ir,typeof Y=="object"&&Y!==null&&(L=Mn(Y)),T=i.getDerivedStateFromProps,(Y=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==mt||j!==L)&&Dg(n,u,s,L),Ua=!1,j=n.memoizedState,u.state=j,Ro(n,s,u,l),Ao();var tt=n.memoizedState;p!==mt||j!==tt||Ua||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof T=="function"&&(Nf(n,i,T,s),tt=n.memoizedState),(nt=Ua||wg(n,i,nt,s,j,tt,L)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(Y||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,tt,L),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,tt,L)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),u.props=s,u.state=tt,u.context=L,s=nt):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,dr(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Ts(n,t.child,null,l),n.child=Ts(n,null,i,l)):mn(t,n,i,l),n.memoizedState=u.state,t=n.child):t=fa(t,n,l),t}function Xg(t,n,i,s){return gs(),n.flags|=256,mn(t,n,i,s),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:Om()}}function Bf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ei),t}function qg(t,n,i){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(Tn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(l?Pa(n):Ia(),(t=We)?(t=pv(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,vn=n,We=null)):t=null,t===null)throw wa(n);return Ih(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?(Ia(),l=n.mode,u=rc({mode:"hidden",children:u},l),s=ms(s,l,i,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=If(i),s.childLanes=Bf(t,p,i),n.memoizedState=Pf,Uo(null,s)):(Pa(n),Ff(n,u))}var T=t.memoizedState;if(T!==null){var L=T.dehydrated;if(L!==null)return JS(t,n,u,p,s,L,T,i)}return l?(Ia(),l=s.fallback,u=n.mode,T=t.child,L=T.sibling,s=sa(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,L!==null?l=sa(L,l):(l=ms(l,u,i,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Uo(null,s),s=n.child,l=t.child.memoizedState,l===null?l=If(i):(u=l.cachePool,u!==null?(T=ln._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=Om(),l={baseLanes:l.baseLanes|i,cachePool:u}),s.memoizedState=l,s.childLanes=Bf(t,p,i),n.memoizedState=Pf,Uo(t.child,s)):(Pa(n),i=t.child,t=i.sibling,i=sa(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=i,n.memoizedState=null,i)}function Ff(t,n){return n=rc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function rc(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function oc(t,n,i){return Ts(n,t.child,null,i),t=Ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function JS(t,n,i,s,l,u,p,T){if(i)return n.flags&256?(Pa(n),n.flags&=-257,oc(t,n,T)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,null):(Ia(),u=l.fallback,p=n.mode,l=rc({mode:"visible",children:l.children},p),u=ms(u,p,T,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ts(n,t.child,null,T),l=n.child,l.memoizedState=If(T),l.childLanes=Bf(t,s,T),n.memoizedState=Pf,Uo(null,l));if(Pa(n),Ih(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var L=s.dgst;return s=L,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,So({value:l,source:null,stack:null})),oc(t,n,T)}if(un||vs(t,n,T,!1),s=(T&t.childLanes)!==0,un||s){if(za.current!==null)return oc(t,n,T);if(s=Xe,s!==null&&(l=rt(s,T),l!==0&&l!==p.retryLane))throw p.retryLane=l,ps(t,l),Xn(s,t,l),Of;return Ph(u)||bc(),oc(t,n,T)}return Ph(u)?(n.flags|=192,n.child=t.child,null):(t=p.treeContext,We=mi(u.nextSibling),vn=n,ge=!0,Ca=null,di=!1,t!==null&&Cm(n,t),n=Ff(n,l.children),n.flags|=134221824,n)}function Yg(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Fl(t.return,n,i)}function Wg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Wl(i)===null&&(n=t),t=t.sibling}return n}function lc(t,n,i,s,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l,treeForkCount:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=s,p.tail=i,p.tailMode=l,p.treeForkCount=u)}function Hf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Gf(t,n,i){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var p=Tn.current;if(n.flags&128)return Co(n,p),null;var T=(p&2)!==0;if(T?(p=p&1|2,n.flags|=128):p&=1,Co(n,p),l==="backwards"&&t!==null?(Hf(t),mn(t,n,s,i),Hf(t)):mn(t,n,s,i),s=ge?xo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,i,n);else if(t.tag===19)Yg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Wg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Hf(n)),lc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Wl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}lc(n,!0,i,null,u,s);break;case"together":lc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:i=Wg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),lc(n,!1,l,i,u,s)}return n.child}function Zg(t,n,i){var s=n.pendingProps;return Da(n,n.type,s.value),mn(t,n,s.children,i),n.child}function fa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(vs(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,i=sa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=sa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function $S(t,n,i){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Da(n,ln,t.memoizedState.cache),gs();break;case 27:case 5:et(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Pa(n),n.flags|=128,null;s=vs(t,n,i,!1);var l=n.child.childLanes;return s||(i&l)!==0?qg(t,n,i):(Pa(n),t=fa(t,n,i),t!==null?t.sibling:null)}Pa(n);break;case 19:if(n.flags&128)return Gf(t,n,i);if(l=(t.flags&128)!==0,s=(i&n.childLanes)!==0,s||(vs(t,n,i,!1),s=(i&n.childLanes)!==0),l){if(s)return Gf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Co(n,Tn.current),s)break;return null;case 22:return n.lanes=0,Hg(t,n,i,n.pendingProps);case 24:Da(n,ln,t.memoizedState.cache)}return fa(t,n,i)}function Kg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Vf(t,i)&&(n.flags&128)===0)return un=!1,$S(t,n,i);un=(t.flags&131072)!==0}else un=!1,ge&&(n.flags&1048576)!==0&&Rm(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ms(n.elementType),n.type=t,typeof t=="function")Wu(t)?(s=As(t,s),n.tag=1,n=jg(null,n,t,s,i)):(n.tag=0,n=zf(null,n,t,s,i));else{if(t!=null){var l=t.$$typeof;if(l===W){n.tag=11,n=Ig(null,n,t,s,i);break t}else if(l===vt){n.tag=14,n=Bg(null,n,t,s,i);break t}else if(l===ct){n.tag=10,n.type=t,n=Zg(null,n,i);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return zf(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,l=As(s,n.pendingProps),jg(t,n,s,l,i);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,lf(t,n),Ro(n,s,null,i);var p=n.memoizedState;if(s=p.cache,Da(n,ln,s),s!==u.cache&&ef(n,[ln],i,!0),Ao(),s=p.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Xg(t,n,s,i);break t}else if(s!==l){l=ui(Error(r(424)),n),So(l),n=Xg(t,n,s,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=mi(t.firstChild),vn=n,ge=!0,Ca=null,di=!0,i=Hm(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(gs(),s===l){n=fa(t,n,i);break t}mn(t,n,s,i)}n=n.child}return n;case 26:return dr(t,n),t===null?(i=yv(n.type,null,n.pendingProps,null))?n.memoizedState=i:ge||(n.stateNode=tv(n.type,n.pendingProps,je.current,n)):n.memoizedState=yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&ge&&(s=n.stateNode=_v(n.type,n.pendingProps,je.current),vn=n,di=!0,l=We,Xa(n.type)?(Bh=l,We=mi(s.firstChild)):We=l),mn(t,n,n.pendingProps.children,i),dr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((l=s=We)&&(s=Yy(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,vn=n,We=mi(s.firstChild),di=!1,l=!0):l=!1),l||wa(n)),et(n),l=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,s=u.children,wh(l,u)?s=null:p!==null&&wh(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=gf(t,n,VS,null,null,i),Nr._currentValue=l),dr(t,n),mn(t,n,s,i),n.child;case 6:return t===null&&ge&&((t=i=We)&&(i=Wy(i,n.pendingProps,di),i!==null?(n.stateNode=i,vn=n,We=null,t=!0):t=!1),t||wa(n)),null;case 13:return qg(t,n,i);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ts(n,null,s,i):mn(t,n,s,i),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,i);case 7:return s=n.pendingProps,dr(t,n),mn(t,n,s,i),n.child;case 8:return mn(t,n,n.pendingProps.children,i),n.child;case 12:return mn(t,n,n.pendingProps.children,i),n.child;case 10:return Zg(t,n,i);case 9:return l=n.type._context,s=n.pendingProps.children,xs(n),l=Mn(l),s=s(l),n.flags|=1,mn(t,n,s,i),n.child;case 14:return Bg(t,n,n.type,n.pendingProps,i);case 15:return Fg(t,n,n.type,n.pendingProps,i);case 19:return Gf(t,n,i);case 31:return QS(t,n,i);case 22:return Hg(t,n,i,n.pendingProps);case 24:return xs(n),s=Mn(ln),t===null?(l=sf(),l===null&&(l=Xe,u=nf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),n.memoizedState={parent:s,cache:l},of(n),Da(n,ln,l)):((t.lanes&i)!==0&&(lf(t,n),Ro(n,null,null,i),Ao()),l=t.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Da(n,ln,s)):(s=u.cache,Da(n,ln,s),s!==l.cache&&ef(n,[ln],i,!0))),mn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ge&&Il(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:dr(t,n),mn(t,n,s.children,i),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ha(t){t.flags|=4}function kf(t,n,i,s,l){var u;if((u=(t.mode&32)!==0)&&(u=i===null?bv(n,s):bv(n,s)&&(s.src!==i.src||s.srcSet!==i.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(N_())t.flags|=8192;else throw Es=jl,rf}else t.flags&=-16777217}function Qg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Av(n))if(N_())t.flags|=8192;else throw Es=jl,rf}function cc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yl():536870912,t.lanes|=n,vr|=n)}function Lo(t,n){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function ty(t,n,i){var s=n.pendingProps;switch(Qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),la(ln),b(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rr(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$u())),Ze(n),null;case 26:var l=n.type,u=n.memoizedState;return t===null?(ha(n),u!==null?(Ze(n),Qg(n,u)):(Ze(n),kf(n,l,null,s,i))):u?u!==t.memoizedState?(ha(n),Ze(n),Qg(n,u)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ha(n),Ze(n),kf(n,l,t,s,i)),null;case 27:if(pt(n),i=je.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),n.subtreeFlags&=-33554433,null}t=Ft.current,rr(n)?wm(n):(t=_v(l,s,i),n.stateNode=t,ha(n))}return Ze(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),n.subtreeFlags&=-33554433,null}if(u=Ft.current,rr(n))wm(n);else{var p=jo(je.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?p.createElement("select",{is:s.is}):p.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?p.createElement(l,{is:s.is}):p.createElement(l)}}u[wt]=n,u[jt]=s;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=u;t:switch(An(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ha(n)}}return Ze(n),n.subtreeFlags&=-33554433,kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=je.current,rr(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,l=vn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[wt]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||K_(t.nodeValue,i)),t||wa(n,!0)}else t=jo(t).createTextNode(s),t[wt]=n,n.stateNode=t}return Ze(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(s=rr(n),i!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[wt]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else i=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=rr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[wt]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),l=!1}else l=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),cc(n,n.updateQueue),Ze(n),null);case 4:return b(),t===null&&Th(n.stateNode.containerInfo),n.flags|=67108864,Ze(n),null;case 10:return la(n.type),Ze(n),null;case 19:if(pf(n),s=n.memoizedState,s===null)return Ze(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)Lo(s,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=Wl(t),u!==null){for(n.flags|=128,Lo(s,!1),t=u.updateQueue,n.updateQueue=t,cc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Tm(i,t),i=i.sibling;return Co(n,Tn.current&1|2),ge&&ra(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&H()>yc&&(n.flags|=128,l=!0,Lo(s,!1),n.lanes=4194304)}else{if(!l)if(t=Wl(u),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,cc(n,t),Lo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!ge)return Ze(n),null}else 2*H()-s.renderingStartTime>yc&&i!==536870912&&(n.flags|=128,l=!0,Lo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=H(),t.sibling=null,u=Tn.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!i||ge?Co(n,u):(i=u,ie(En,n),ie(Tn,i),Nn===null&&(Nn=n)),ge&&ra(n,s.treeForkCount),t}return Ze(n),null;case 22:case 23:return Jn(n),hf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),i=n.updateQueue,i!==null&&cc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&Lt(ys),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),la(ln),Ze(n),null;case 25:return null;case 30:return n.flags|=33554432,Ze(n),null}throw Error(r(156,n.tag))}function ey(t,n){switch(Qu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(ln),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return la(n.type),null;case 22:case 23:return Jn(n),hf(),t!==null&&Lt(ys),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(ln),null;case 25:return null;default:return null}}function Jg(t,n){switch(Qu(n),n.tag){case 3:la(ln),b();break;case 26:case 27:case 5:pt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:pf(n);break;case 10:la(n.type);break;case 22:case 23:Jn(n),hf(),t!==null&&Lt(ys);break;case 24:la(ln)}}function Oo(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&t)===t){s=void 0;var u=i.create,p=i.inst;s=u(),p.destroy=s}i=i.next}while(i!==l)}}catch(T){Be(n,n.return,T)}}function Ba(t,n,i){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var p=s.inst,T=p.destroy;if(T!==void 0){p.destroy=void 0,l=n;var L=i,Y=T;try{Y()}catch(nt){Be(l,L,nt)}}}s=s.next}while(s!==u)}}catch(nt){Be(n,n.return,nt)}}function $g(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Vm(n,i)}catch(s){Be(t,t.return,s)}}}function t_(t,n,i){i.props=As(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){Be(t,n,s)}}function Ii(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,u=ia(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=ov(u)),s=l.ref;break;case 7:if(t.stateNode===null){var p=new ii(t);m(t.child,!1,Xy,p,void 0,void 0),t.stateNode=p}s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(T){Be(t,n,T)}}function bn(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(l){Be(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Be(t,n,l)}else i.current=null}function uc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)dv(t.stateNode,n[i])}function e_(t){for(var n=t.return;n!==null&&(Xf(n)&&dv(t.stateNode,n.stateNode),!jf(n));)n=n.return}function zo(t){for(var n=t.return;n!==null&&(Xf(n)&&qy(t.stateNode,n.stateNode),!jf(n));)n=n.return}function jf(t){return t.tag===5||t.tag===3||t.tag===27}function Xf(t){return t&&t.tag===7&&t.stateNode!==null}function qf(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(l){Be(t,t.return,l)}}function Yf(t,n,i){try{var s=t.stateNode;Ry(s,t.type,i,n),s[jt]=n}catch(l){Be(t,t.return,l)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function Wf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,i,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Oi)),uc(t,s),we=!0;else if(l!==4&&(l===27&&(uc(t,s),s=null,Xa(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(Zf(t,n,i,s),t=t.sibling;t!==null;)Zf(t,n,i,s),t=t.sibling}function fc(t,n,i,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),uc(t,s),we=!0;else if(l!==4&&(l===27&&(uc(t,s),s=null,Xa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(fc(t,n,i,s),t=t.sibling;t!==null;)fc(t,n,i,s),t=t.sibling}function i_(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);An(n,s,i),n[wt]=t,n[jt]=i}catch(u){Be(t,t.return,u)}}var hc=!1,$n=null;function a_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(hc=!0)}var Bi=null;function s_(){var t=Bi;return Bi=null,t}var Vn=0;function pr(t,n,i,s,l){return Vn=0,r_(t.child,n,i,s,l)}function r_(t,n,i,s,l){for(var u=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(s!==null){var T=Uh(p);s.push(T),T.view&&(u=!0)}else u||Uh(p).view&&(u=!0);hc=!0,sv(p,Vn===0?n:n+"_"+Vn,i),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||r_(t.child,n,i,s,l)&&(u=!0));t=t.sibling}return u}function Fi(t,n){for(;t!==null;)t.tag===5?rv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Fi(t.child,n)),t=t.sibling}function dc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(dc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var i=n.name;n=aa(n.default,n.share),n!=="none"&&(pr(t,i,n,null,!1)||Fi(t.child,!1))}t=t.sibling}}function Kf(t,n){if(t.tag===30){var i=t.stateNode,s=t.memoizedProps,l=ia(s,i),u=aa(s.default,i.paired?s.share:s.enter);u!=="none"?pr(t,l,u,null,!1)?(dc(t),i.paired||n||Mr(t,s.onEnter)):Fi(t.child,!1):dc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Kf(t,n),t=t.sibling;else dc(t)}function Qf(t){if($n!==null&&$n.size!==0){var n=$n;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,s=i.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=aa(i.default,i.share);if(u!=="none"&&(pr(t,s,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Mr(t,i.onShare)):Fi(t.child,!1)),n.delete(s),n.size===0)break}}}Qf(t)}t=t.sibling}}}function Jf(t){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode),s=$n!==null?$n.get(i):void 0,l=aa(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(pr(t,i,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,$n.delete(i),Mr(t,n.onShare)):Mr(t,n.onExit):Fi(t.child,!1)),$n!==null&&Qf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Jf(t),t=t.sibling;else $n!==null&&Qf(t)}function o_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ia(n,t.stateNode);n=aa(n.default,n.update),t.flags&=-5,n!=="none"&&pr(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}function $f(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Fi(t.child,!1))}$f(t)}t=t.sibling}}function pc(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),$f(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pc(t),t=t.sibling;else $f(t)}function l_(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&l_(t),t=t.sibling}function th(t,n,i,s,l,u,p){for(var T=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(u!==null&&Vn<u.length){var Y=u[Vn],nt=Uh(L);(Y.view||nt.view)&&(T=!0);var mt;if(mt=(t.flags&4)===0)if(nt.clip)mt=!0;else{mt=Y.rect;var j=nt.rect;mt=mt.y!==j.y||mt.x!==j.x||mt.height!==j.height||mt.width!==j.width}mt&&(t.flags|=4),nt.abs?nt=!Y.abs:(Y=Y.rect,nt=nt.rect,nt=Y.height!==nt.height||Y.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&sv(L,Vn===0?i:i+"_"+Vn,l),T&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(L,Vn===0?s:s+"_"+Vn,n.memoizedProps)),Vn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&p?t.flags|=n.flags&32:th(t,n.child,i,s,l,u,p)&&(T=!0));n=n.sibling}return T}function c_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,s=t.stateNode,l=ia(i,s),u=aa(i.default,i.update),p;p=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;Vn=0,l=th(s,T,l,l,u,p,!1),(t.flags&4)!==0&&l&&Mr(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&c_(t);t=t.sibling}}var xn=!1,Pe=!1,Hi=!1,eh=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Gi=!1,Po=!1,mc=!1,nh=!1;function ny(t,n,i){if(t=t.containerInfo,Rh=Ur,t=pm(t),Gu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var T=0,L=-1,Y=-1,nt=0,mt=0,j=t,tt=null;e:for(;;){for(var Nt;j!==s||u!==0&&j.nodeType!==3||(L=T+u),j!==p||l!==0&&j.nodeType!==3||(Y=T+l),j.nodeType===3&&(T+=j.nodeValue.length),(Nt=j.firstChild)!==null;)tt=j,j=Nt;for(;;){if(j===t)break e;if(tt===s&&++nt===u&&(L=T),tt===p&&++mt===l&&(Y=T),(Nt=j.nextSibling)!==null)break;j=tt,tt=j.parentNode}j=Nt}s=L===-1||Y===-1?null:{start:L,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ch={focusedElem:t,selectionRange:s},Ur=!1,i=(i&335544064)===i,Sn=n,n=i?9270:1024;Sn!==null;){if(t=Sn,i&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)i&&Jf(s[u]);if(t.alternate===null&&(t.flags&2)!==0)i&&a_(t),gc(i);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&i&&Jf(s),gc(i);continue}else if(s!==null&&s.memoizedState!==null){i&&a_(t),gc(i);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Sn=s):(i&&o_(t),gc(i))}}$n=null}function gc(t){for(;Sn!==null;){var n=Sn,i=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){i=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var p=As(n.type,l);i=u.getSnapshotBeforeUpdate(p,s),u.__reactInternalSnapshotBeforeUpdate=i}catch(T){Be(n,n.return,T)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,i=s.nodeType,i===9)zh(s);else if(i===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":zh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&s!==null&&(i=ia(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=aa(l.default,l.update),l!=="none"&&pr(s,i,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Sn=s;break}Sn=n.return}}function f_(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),s&4&&Oo(5,i);break;case 1:if(Vi(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(p){Be(i,i.return,p)}else{var l=As(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Be(i,i.return,p)}}s&64&&$g(i),s&512&&Ii(i,i.return);break;case 3:if(Vi(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Vm(t,n)}catch(p){Be(i,i.return,p)}}break;case 27:n===null&&s&4&&i_(i);case 26:case 5:Vi(t,i),n===null&&s&4&&qf(i),s&512&&Ii(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),s&4&&m_(t,i);break;case 13:Vi(t,i),s&4&&g_(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=py.bind(null,i),Zy(t,i))));break;case 22:if(s=i.memoizedState!==null||xn,!s){var u=n!==null&&n.memoizedState!==null||Pe;n=xn,l=Pe,xn=s,(Pe=u)&&!l?(s=2,(i.subtreeFlags&8772)!==0&&(s|=1),Ti(t,i,s)):Vi(t,i),xn=n,Pe=l}break;case 30:Vi(t,i),s&512&&Ii(i,i.return);break;case 7:s&512&&Ii(i,i.return);default:Vi(t,i)}}function ih(t,n){for(t=t.child;t!==null;)h_(t,n),t=t.sibling}function h_(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var s=i.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,p=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(L){Be(t,t.return,L)}ah(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,we=!0}catch(L){Be(t,t.return,L)}break;case 18:try{var T=t.stateNode;n?av(T,!0):av(t.stateNode,!1)}catch(L){Be(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&ih(t,n);break;default:ih(t,n)}}function ah(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,s=n;switch(i.tag){case 4:h_(i,s);break t;case 22:i.memoizedState===null&&ah(i,s);break t;default:ah(i,s)}}t=t.sibling}}function d_(t){var n=t.alternate;n!==null&&(t.alternate=null,d_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,kn=!1;function Mi(t,n,i){for(i=i.child;i!==null;)p_(t,n,i),i=i.sibling}function p_(t,n,i){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Se,i)}catch{}switch(i.tag){case 26:Pe||bn(i,n),Mi(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||bn(i,n),zo(i);var s=Qe,l=kn;Xa(i.type)&&(Qe=i.stateNode,kn=!1),Mi(t,n,i),vv(i.stateNode,i.type,i.memoizedProps),Qe=s,kn=l;break;case 5:Pe||bn(i,n),zo(i);case 6:if(i.tag===6&&zo(i),s=Qe,l=kn,Qe=null,Mi(t,n,i),Qe=s,kn=l,Qe!==null)if(kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(i.stateNode),we=!0}catch(u){Be(i,n,u)}else try{Qe.removeChild(i.stateNode),we=!0}catch(u){Be(i,n,u)}break;case 18:Qe!==null&&(kn?(t=Qe,iv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Lr(t)):iv(Qe,i.stateNode));break;case 4:s=Qe,l=kn,Qe=i.stateNode.containerInfo,kn=!0,Mi(t,n,i),Qe=s,kn=l;break;case 0:case 11:case 14:case 15:Ba(2,i,n),Pe||Ba(4,i,n),Mi(t,n,i);break;case 1:Pe||(bn(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&t_(i,n,s)),Mi(t,n,i);break;case 21:Mi(t,n,i);break;case 22:Pe=(s=Pe)||i.memoizedState!==null,Mi(t,n,i),Pe=s;break;case 30:bn(i,n),Mi(t,n,i);break;case 7:Pe||bn(i,n),Mi(t,n,i);break;default:Mi(t,n,i)}}function m_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Lr(t)}catch(i){Be(n,n.return,i)}}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lr(t)}catch(i){Be(n,n.return,i)}}function iy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new u_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new u_),n;default:throw Error(r(435,t.tag))}}function _c(t,n){var i=iy(t);n.forEach(function(s){if(!i.has(s)){i.add(s);var l=my.bind(null,t,s);s.then(l,l)}})}function In(t,n,i){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],p=t,T=n,L=T;t:for(;L!==null;){switch(L.tag){case 27:if(Xa(L.type)){Qe=L.stateNode,kn=!1;break t}break;case 5:Qe=L.stateNode,kn=!1;break t;case 3:case 4:Qe=L.stateNode.containerInfo,kn=!0;break t}L=L.return}if(Qe===null)throw Error(r(160));p_(p,T,u),Qe=null,kn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)__(n,t,i),n=n.sibling}var Ei=null;function __(t,n,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var p=s[u];p.ref.impl=p.nextImpl}In(n,t,i),Bn(t),l&4&&(Ba(3,t,t.return),Oo(3,t),Ba(5,t,t.return));break;case 1:In(n,t,i),Bn(t),l&512&&(Pe||s===null||bn(s,s.return)),l&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(u=Ei,In(n,t,i),Bn(t),l&512&&(Pe||s===null||bn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,i=t.memoizedState,s===null)if(i===null)if(t.stateNode===null)if(xn)t.stateNode=tv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=u.ownerDocument||u;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ue]||s[wt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),An(s,n,i),s[wt]=t,Ce(s),n=s;break t;case"link":if(u=Tv("link","href",l).get(n+(i.href||""))){for(p=0;p<u.length;p++)if(s=u[p],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(p,1);break e}}s=l.createElement(n),An(s,n,i),l.head.appendChild(s);break;case"meta":if(u=Tv("meta","content",l).get(n+(i.content||""))){for(p=0;p<u.length;p++)if(s=u[p],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(p,1);break e}}s=l.createElement(n),An(s,n,i),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[wt]=t,Ce(s),n=s}t.stateNode=n}else xn||Vh(u,t.type,t.stateNode);else t.stateNode=Ev(u,i,t.memoizedProps);else l!==i?(l===null?(n=s.stateNode,n===null||Pe||n.parentNode.removeChild(n)):l.count--,i===null?xn||Vh(u,t.type,t.stateNode):Ev(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 27:In(n,t,i),Bn(t),l&512&&(Pe||s===null||bn(s,s.return)),s!==null&&l&4&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=Hi,Hi=!1,In(n,t,i),Hi=u,Bn(t),l&512&&(Pe||s===null||bn(s,s.return)),t.flags&32){n=t.stateNode;try{Ks(n,""),we=!0}catch(nt){Be(t,t.return,nt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Yf(t,n,s!==null?s.memoizedProps:n)),l&1024&&(eh=!0);break;case 6:if(In(n,t,i),Bn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,we=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(we=!1,Uc=null,u=Ei,Ei=Xo(n.containerInfo),In(n,t,i),Ei=u,Bn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(nt){Be(t,t.return,nt)}eh&&(eh=!1,v_(t)),we=!1;break;case 4:l=Hi,Hi=xn,s=Bp(),u=Ei,Ei=Xo(t.stateNode.containerInfo),In(n,t,i),Bn(t),Ei=u,we&&Po&&(mc=!0),we=s,Hi=l;break;case 12:In(n,t,i),Bn(t);break;case 31:In(n,t,i),Bn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,_c(t,n)));break;case 13:In(n,t,i),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Sc=H()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,_c(t,n)));break;case 22:u=t.memoizedState!==null,p=s!==null&&s.memoizedState!==null;var T=xn,L=Pe,Y=Hi;xn=T||u,Hi=Y||u,Pe=L||p,In(n,t,i),Pe=L,Hi=Y,xn=T,Bn(t),l&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||p||xn||Pe||(n=p||Pe,i=xn,s=Pe,xn=u||xn,Pe=n,Fa(t,2),xn=i,Pe=s),!u&&Hi||ih(t,u)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,_c(t,i))));break;case 19:In(n,t,i),Bn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,_c(t,n)));break;case 30:l&512&&(Pe||s===null||bn(s,s.return)),l=Bp(),u=Po,p=(i&335544064)===i,T=t.memoizedProps,Po=p&&aa(T.default,T.update)!=="none",In(n,t,i),Bn(t),p&&s!==null&&we&&(t.flags|=4),Po=u,we=l;break;case 21:break;case 7:l&512&&(Pe||s===null||bn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:In(n,t,i),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if(n_(s)){i=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(Xf(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(jf(l))break;l=l.return}var p=s;if(i==null)throw Error(r(160));switch(i.tag){case 27:var T=i.stateNode,L=Wf(t);fc(t,L,T,p);break;case 5:var Y=i.stateNode;i.flags&32&&(Ks(Y,""),i.flags&=-33);var nt=Wf(t);fc(t,nt,Y,p);break;case 3:case 4:var mt=i.stateNode.containerInfo,j=Wf(t);Zf(t,j,mt,p);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ur=!0,n.reset(),Ur=!1),t=t.sibling}}function mr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)x_(n,t),n=n.sibling;else c_(n)}function x_(t,n){var i=t.alternate;if(i===null)Kf(t,!1);else switch(t.tag){case 3:if(nh=Gi=!1,s_(),mr(n,t),!Gi&&!mc){if(t=Bi,t!==null)for(var s=0;s<t.length;s+=3){i=t[s];var l=t[s+1];rv(i,t[s+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nh=!0}Bi=null;break;case 5:mr(n,t);break;case 4:s=Gi,Gi=!1,mr(n,t),Gi&&(mc=!0),Gi=s;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Kf(t,!1):mr(n,t));break;case 30:s=Gi,l=s_(),Gi=!1,mr(n,t),Gi&&(t.flags|=4);var u=t.memoizedProps,p=t.stateNode;n=ia(u,p),p=ia(i.memoizedProps,p);var T=aa(u.default,u.update);T==="none"?n=!1:(u=i.memoizedState,i.memoizedState=null,i=t.child,Vn=0,n=th(t,i,n,p,T,u,!0),Vn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Mr(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(t.flags&32)!==0?!0:s;break;default:mr(n,t)}}function Vi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(t,n.alternate,n),n=n.sibling}function Fa(t,n){for(t=t.child;t!==null;){var i=t,s=n;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Fa(i,s);break;case 1:bn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&t_(i,i.return,l),Fa(i,s);break;case 27:(s&2)!==0&&vv(i.stateNode,i.type,i.memoizedProps);case 5:bn(i,i.return),i.tag!==5&&i.tag!==27||zo(i),Fa(i,s);break;case 6:zo(i);break;case 26:bn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Fa(i,s);break;case 22:i.memoizedState===null&&Fa(i,s);break;case 30:bn(i,i.return),Fa(i,s);break;case 7:bn(i,i.return);default:Fa(i,s)}t=t.sibling}}function Ti(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var s=n.alternate,l=t,u=n,p=u.flags,T=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Ti(l,u,i),Oo(4,u);break;case 1:if(Ti(l,u,i),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=u,l=s.updateQueue,l!==null){var L=s.stateNode;try{var Y=l.shared.hiddenCallbacks;if(Y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Y.length;l++)Gm(Y[l],L)}catch(nt){Be(s,s.return,nt)}}T&&p&64&&$g(u),Ii(u,u.return);break;case 27:(i&2)!==0&&i_(u);case 5:u.tag!==5&&u.tag!==27||e_(u),Ti(l,u,i),T&&s===null&&p&4&&qf(u),Ii(u,u.return);break;case 6:e_(u);break;case 26:L=u.stateNode,u.memoizedState!==null||L===null||xn||Vh(Xo(L.ownerDocument),u.type,L),Ti(l,u,i),T&&s===null&&p&4&&qf(u),Ii(u,u.return);break;case 12:Ti(l,u,i);break;case 31:Ti(l,u,i),T&&p&4&&m_(l,u);break;case 13:Ti(l,u,i),T&&p&4&&g_(l,u);break;case 22:u.memoizedState===null&&Ti(l,u,i),Ii(u,u.return);break;case 30:Ti(l,u,i),Ii(u,u.return);break;case 7:Ii(u,u.return);default:Ti(l,u,i)}n=n.sibling}}function sh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&yo(i))}function rh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t))}function pi(t,n,i,s){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)S_(t,n,i,s),n=n.sibling;else l&&l_(n)}function S_(t,n,i,s){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&pc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:pi(t,n,i,s),u&2048&&Oo(9,n);break;case 1:pi(t,n,i,s);break;case 3:pi(t,n,i,s),l&&nh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&yo(u)));break;case 12:if(u&2048){pi(t,n,i,s),u=n.stateNode;try{var p=n.memoizedProps,T=p.id,L=p.onPostCommit;typeof L=="function"&&L(T,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Y){Be(n,n.return,Y)}}else pi(t,n,i,s);break;case 31:pi(t,n,i,s);break;case 13:pi(t,n,i,s);break;case 23:break;case 22:p=n.stateNode,T=n.alternate,n.memoizedState!==null?(l&&T!==null&&T.memoizedState===null&&pc(T),p._visibility&2?pi(t,n,i,s):Io(t,n)):(l&&T!==null&&T.memoizedState!==null&&pc(n),p._visibility&2?pi(t,n,i,s):(p._visibility|=2,gr(t,n,i,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&sh(T,n);break;case 24:pi(t,n,i,s),u&2048&&rh(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Fi(u.child,!0),Fi(n.child,!0))),pi(t,n,i,s);break;default:pi(t,n,i,s)}}function gr(t,n,i,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,p=n,T=i,L=s,Y=p.flags;switch(p.tag){case 0:case 11:case 15:gr(u,p,T,L,l),Oo(8,p);break;case 23:break;case 22:var nt=p.stateNode;p.memoizedState!==null?nt._visibility&2?gr(u,p,T,L,l):Io(u,p):(nt._visibility|=2,gr(u,p,T,L,l)),l&&Y&2048&&sh(p.alternate,p);break;case 24:gr(u,p,T,L,l),l&&Y&2048&&rh(p.alternate,p);break;default:gr(u,p,T,L,l)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,l=s.flags;switch(s.tag){case 22:Io(i,s),l&2048&&sh(s.alternate,s);break;case 24:Io(i,s),l&2048&&rh(s.alternate,s);break;default:Io(i,s)}n=n.sibling}}var Rs=8192;function Cs(t,n,i){if(t.subtreeFlags&Rs)for(t=t.child;t!==null;)y_(t,n,i),t=t.sibling}function y_(t,n,i){switch(t.tag){case 26:Cs(t,n,i),t.flags&Rs&&(t.memoizedState!==null?cM(i,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Cv(i,t)));break;case 5:Cs(t,n,i),t.flags&Rs&&(t=t.stateNode,(n&335544128)===n&&Cv(i,t));break;case 3:case 4:var s=Ei;Ei=Xo(t.stateNode.containerInfo),Cs(t,n,i),Ei=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Rs,Rs=16777216,Cs(t,n,i),Rs=s):Cs(t,n,i));break;case 30:if((t.flags&Rs)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,$n===null&&($n=new Map),$n.set(s,l)}Cs(t,n,i);break;default:Cs(t,n,i)}}function M_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Sn=s,T_(s,t)}M_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E_(t),t=t.sibling}function E_(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vc(t)):Bo(t);break;default:Bo(t)}}function vc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Sn=s,T_(s,t)}M_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),vc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,vc(n));break;default:vc(n)}t=t.sibling}}function T_(t,n){for(;Sn!==null;){var i=Sn;switch(i.tag){case 0:case 11:case 15:Ba(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:yo(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Sn=s;else t:for(i=t;Sn!==null;){s=Sn;var l=s.sibling,u=s.return;if(d_(s),s===i){Sn=null;break t}if(l!==null){l.return=u,Sn=l;break t}Sn=u}}}var ay={getCacheForType:function(t){var n=Mn(ln),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Mn(ln).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Xe=null,ve=null,ye=0,Ie=0,ti=null,Ha=!1,_r=!1,oh=!1,da=0,nn=0,Ga=0,ws=0,xc=0,ei=0,vr=0,Fo=null,jn=null,lh=!1,Sc=0,b_=0,yc=1/0,Mc=null,Va=null,$e=0,bi=null,Ds=null,ki=0,ch=0,uh=null,A_=null,xr=null,Sr=null,yr=null,Ho=0,Ec=null;function ni(){return(Oe&2)!==0&&ye!==0?ye&-ye:Et.T!==null?Sh():Tt()}function R_(){if(ei===0)if((ye&536870912)===0||ge){var t=ta;ta<<=1,(ta&3932160)===0&&(ta=262144),ei=t}else ei=536870912;return t=En.current,t!==null&&(t.flags|=32),ei}function Mr(t,n){if(n!=null){var i=t.stateNode,s=i.ref;s===null&&(s=i.ref=ov(ia(t.memoizedProps,i))),Sr===null&&(Sr=[]),Sr.push(n.bind(null,s))}}function Xn(t,n,i){(t===Xe&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Er(t,0),ka(t,ye,ei,!1)),fs(t,i),((Oe&2)===0||t!==Xe)&&(t===Xe&&((Oe&2)===0&&(ws|=i),nn===4&&ka(t,ye,ei,!1)),ji(t))}function C_(t,n,i){if((Oe&6)!==0)throw Error(r(327));var s=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ea(t,n),l=s?ly(t,n):hh(t,n,!0),u=s;do{if(l===0){_r&&!s&&ka(t,n,0,!1);break}else{if(i=t.current.alternate,u&&!ry(i)){l=hh(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var T=t;l=Fo;var L=T.current.memoizedState.isDehydrated;if(L&&(Er(T,p).flags|=256),p=hh(T,p,!1),p!==2&&p!==6){if(oh&&!L){T.errorRecoveryDisabledLanes|=u,ws|=u,l=4;break t}u=jn,jn=l,u!==null&&(jn===null?jn=u:jn.push.apply(jn,u))}l=p}if(u=!1,l!==2)continue}}if(l===1){Er(t,0),ka(t,n,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ka(s,n,ei,!Ha);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Sc+300-H(),10<l)){if(ka(s,n,ei,!Ha),us(s,0,!0)!==0)break t;ki=n,s.timeoutHandle=Nh(w_.bind(null,s,i,jn,Mc,lh,n,ei,ws,vr,Ha,u,"Throttled",-0,0),l);break t}w_(s,i,jn,Mc,lh,n,ei,ws,vr,Ha,u,null,-0,0)}}break}while(!0);ji(t)}function w_(t,n,i,s,l,u,p,T,L,Y,nt,mt,j,tt){t.timeoutHandle=-1;var Nt=n.subtreeFlags,Xt=(u&335544064)===u;if(mt=null,(Xt||Nt&8192||(Nt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},$n=null,y_(n,u,mt),Xt&&(Nt=mt,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=Wo.bind(Nt),Xt.finished.then(Nt,Nt))),Nt=(u&62914560)===u?Sc-H():(u&4194048)===u?b_-H():0,Nt=uM(mt,Nt),Nt!==null)){ki=u,t.cancelPendingCommit=Nt(I_.bind(null,t,n,u,i,s,l,p,T,L,Y,nt,mt,null,j,tt)),ka(t,u,p,!Y);return}I_(t,n,u,i,s,l,p,T,L,Y,nt,mt)}function ry(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var l=i[s],u=l.getSnapshot;l=l.value;try{if(!Qn(u(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,i,s){n=Sl(t,n),n&=~xc,n&=~ws,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var u=31-wn(l),p=1<<u;s[u]=-1,l&=~p}i!==0&&A(t,i,n)}function Tc(){return(Oe&6)===0?(Go(0),!1):!0}function fh(){if(ve!==null){if(Ie===0)var t=ve.return;else t=ve,oa=_s=null,xf(t),cr=null,To=0,t=ve;for(;t!==null;)Jg(t.alternate,t),t=t.return;ve=null}}function Er(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Dy(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ki=0,fh(),Xe=t,ve=i=sa(t.current,null),ye=n,Ie=0,ti=null,Ha=!1,_r=Ea(t,n),oh=!1,vr=ei=xc=ws=Ga=nn=0,jn=Fo=null,lh=!1,da=Sl(t,n),Ul(),i}function D_(t,n){fe=null,Et.H=ic,n===lr||n===kl?(n=Im(),Ie=3):n===rf?(n=Im(),Ie=4):Ie=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ve===null&&(nn=1,ac(t,ui(n,t.current)))}function N_(){var t=En.current;return t===null?!0:(ye&4194048)===ye?Nn===null:(ye&62914560)===ye||(ye&536870912)!==0?t===Nn:!1}function U_(){var t=Et.H;return Et.H=ic,t===null?ic:t}function L_(){var t=Et.A;return Et.A=ay,t}function bc(){nn=4,Ha||(ye&4194048)!==ye&&En.current!==null||(_r=!0),(Ga&134217727)===0&&(ws&134217727)===0||Xe===null||ka(Xe,ye,ei,!1)}function hh(t,n,i){var s=Oe;Oe|=2;var l=U_(),u=L_();(Xe!==t||ye!==n)&&(Mc=null,Er(t,n)),n=!1;var p=nn;t:do try{if(Ie!==0&&ve!==null){var T=ve,L=ti;switch(Ie){case 8:fh(),p=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var Y=Ie;if(Ie=0,ti=null,Tr(t,T,L,Y),i&&_r){p=0;break t}break;default:Y=Ie,Ie=0,ti=null,Tr(t,T,L,Y)}}oy(),p=nn;break}catch(nt){D_(t,nt)}while(!0);return n&&t.shellSuspendCounter++,oa=_s=null,Oe=s,Et.H=l,Et.A=u,ve===null&&(Xe=null,ye=0,Ul()),p}function oy(){for(;ve!==null;)O_(ve)}function ly(t,n){var i=Oe;Oe|=2;var s=U_(),l=L_();Xe!==t||ye!==n?(Mc=null,yc=H()+500,Er(t,n)):_r=Ea(t,n);t:do try{if(Ie!==0&&ve!==null){n=ve;var u=ti;e:switch(Ie){case 1:Ie=0,ti=null,Tr(t,n,u,1);break;case 2:case 9:if(zm(u)){Ie=0,ti=null,z_(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==t||(Ie=7),ji(t)},u.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:zm(u)?(Ie=0,ti=null,z_(n)):(Ie=0,ti=null,Tr(t,n,u,7));break;case 5:var p=null;switch(ve.tag){case 26:p=ve.memoizedState;case 5:case 27:var T=ve;if(p?Av(p):T.stateNode.complete){Ie=0,ti=null;var L=T.sibling;if(L!==null)ve=L;else{var Y=T.return;Y!==null?(ve=Y,Ac(Y)):ve=null}break e}}Ie=0,ti=null,Tr(t,n,u,5);break;case 6:Ie=0,ti=null,Tr(t,n,u,6);break;case 8:fh(),nn=6;break t;default:throw Error(r(462))}}cy();break}catch(nt){D_(t,nt)}while(!0);return oa=_s=null,Et.H=s,Et.A=l,Oe=i,ve!==null?0:(Xe=null,ye=0,Ul(),nn)}function cy(){for(;ve!==null&&!zt();)O_(ve)}function O_(t){var n=Kg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?Ac(t):ve=n}function z_(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=kg(i,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=kg(i,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:xf(n);var s=n;s===vn&&(ge?(Bl(s),s.tag===5&&s.stateNode!=null&&(We=s.stateNode)):(Bl(s),ge=!0));default:Jg(i,n),n=ve=Tm(n,da),n=Kg(i,n,da)}t.memoizedProps=t.pendingProps,n===null?Ac(t):ve=n}function Tr(t,n,i,s){oa=_s=null,xf(n),cr=null,To=0;var l=n.return;try{if(KS(t,l,n,i,ye)){nn=1,ac(t,ui(i,t.current)),ve=null;return}}catch(u){if(l!==null)throw ve=l,u;nn=1,ac(t,ui(i,t.current)),ve=null;return}n.flags&32768?(ge||s===1?t=!0:_r||(ye&536870912)!==0?t=!1:(Ha=t=!0,(s===2||s===9||s===3||s===6)&&(s=En.current,s!==null&&s.tag===13&&(s.flags|=16384))),P_(n,t)):Ac(n)}function Ac(t){var n=t;do{if((n.flags&32768)!==0){P_(n,Ha);return}t=n.return;var i=ty(n.alternate,n,da);if(i!==null){ve=i;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);nn===0&&(nn=5)}function P_(t,n){do{var i=ey(t.alternate,t);if(i!==null){i.flags&=32767,ve=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=i}while(t!==null);nn=6,ve=null}function I_(t,n,i,s,l,u,p,T,L,Y,nt,mt){t.cancelPendingCommit=null;do Rc();while($e!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Xe&&(ve=Xe=null,ye=0),Ds=n,bi=t,ki=i,uh=l,A_=s,uy(t,n,i,p,T,L,mt)}}function uy(t,n,i,s,l,u,p){var T=n.lanes|n.childLanes;if(ch=T,T|=qu,Eu(t,i,T,s,l,u),Sr=null,(i&335544064)===i?(yr=BS(t),s=10262):(yr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,gy(yt,function(){return gh(),null})):(t.callbackNode=null,t.callbackPriority=0),hc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null,l=qt.p,qt.p=2,u=Oe,Oe|=4;try{ny(t,n,i)}finally{Oe=u,qt.p=l,Et.T=s}}$e=1,hc?xr=Py(p,t.containerInfo,yr,dh,ph,hy,mh,gh,fy):(dh(),ph(),mh())}function fy(t){if($e!==0){var n=bi.onRecoverableError;n(t,{componentStack:null})}}function hy(){$e===3&&($e=0,x_(Ds,bi),$e=4)}function dh(){if($e===1){$e=0;var t=bi,n=Ds,i=ki,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null;var l=qt.p;qt.p=2;var u=Oe;Oe|=4;try{Po=mc=!1,__(n,t,i),i=Ch;var p=pm(t.containerInfo),T=i.focusedElem,L=i.selectionRange;if(p!==T&&T&&T.ownerDocument&&dm(T.ownerDocument.documentElement,T)){if(L!==null&&Gu(T)){var Y=L.start,nt=L.end;if(nt===void 0&&(nt=Y),"selectionStart"in T)T.selectionStart=Y,T.selectionEnd=Math.min(nt,T.value.length);else{var mt=T.ownerDocument||document,j=mt&&mt.defaultView||window;if(j.getSelection){var tt=j.getSelection(),Nt=T.textContent.length,Xt=Math.min(L.start,Nt),he=L.end===void 0?Xt:Math.min(L.end,Nt);!tt.extend&&Xt>he&&(p=he,he=Xt,Xt=p);var X=hm(T,Xt),F=hm(T,he);if(X&&F&&(tt.rangeCount!==1||tt.anchorNode!==X.node||tt.anchorOffset!==X.offset||tt.focusNode!==F.node||tt.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(X.node,X.offset),tt.removeAllRanges(),Xt>he?(tt.addRange(J),tt.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),tt.addRange(J))}}}}for(mt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&mt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Ur=!!Rh,Ch=Rh=null}finally{Oe=u,qt.p=l,Et.T=s}}t.current=n,$e=2}}function ph(){if($e===2){$e=0;var t=bi,n=Ds,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Et.T,Et.T=null;var s=qt.p;qt.p=2;var l=Oe;Oe|=4;try{f_(t,n.alternate,n)}finally{Oe=l,qt.p=s,Et.T=i}}$e=3}}function mh(){if($e===4||$e===3){$e=0;var t=xr;xr=null,ue();var n=bi,i=Ds,s=ki,l=A_,u=(s&335544064)===s?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?$e=5:($e=0,Ds=bi=null,B_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(Va=null),Q(s),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Et.T,u=qt.p,qt.p=2,Et.T=null;try{for(var p=n.onRecoverableError,T=0;T<l.length;T++){var L=l[T];p(L.value,{componentStack:L.stack})}}finally{Et.T=i,qt.p=u}}if(l=Sr,p=yr,yr=null,l!==null&&(Sr=null,p===null&&(p=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(p),i!==void 0&&t.finished.finally(i);(ki&3)!==0&&Rc(),ji(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Ec?Ho++:(Ho=0,Ec=n):(Ho=0,Ec=null),Go(0)}}function B_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,yo(n)))}function Rc(){return xr!==null&&(xr.skipTransition(),xr=null),dh(),ph(),mh(),gh()}function gh(){if($e!==5)return!1;var t=bi,n=ch;ch=0;var i=Q(ki),s=Et.T,l=qt.p;try{qt.p=32>i?32:i,Et.T=null,i=uh,uh=null;var u=bi,p=ki;if($e=0,Ds=bi=null,ki=0,(Oe&6)!==0)throw Error(r(331));var T=Oe;if(Oe|=4,E_(u.current),S_(u,u.current,p,i),Oe=T,Go(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Se,u)}catch{}return!0}finally{qt.p=l,Et.T=s,B_(t,n)}}function F_(t,n,i){n=ui(i,n),n=Lf(t.stateNode,n,2),t=Oa(t,n,2),t!==null&&(fs(t,2),ji(t))}function Be(t,n,i){if(t.tag===3)F_(t,t,i);else for(;n!==null;){if(n.tag===3){F_(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Va===null||!Va.has(s))){t=ui(i,t),i=zg(2),s=Oa(n,i,2),s!==null&&(Pg(i,s,n,t),fs(s,2),ji(s));break}}n=n.return}}function _h(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new sy;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(i)||(oh=!0,l.add(i),t=dy.bind(null,t,n,i),n.then(t,t))}function dy(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Xe===t&&(ye&i)===i&&((nn===4||nn===3&&(ye&62914560)===ye&&300>H()-Sc)&&(Oe&2)===0?Er(t,0):xc|=i,vr===ye&&(vr=0)),ji(t)}function H_(t,n){n===0&&(n=yl()),t=ps(t,n),t!==null&&(fs(t,n),ji(t))}function py(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),H_(t,i)}function my(t,n){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),H_(t,i)}function gy(t,n){return ne(t,n)}var br=null,Ar=null,vh=!1,Cc=!1,xh=!1,ja=0;function ji(t){t!==Ar&&t.next===null&&(Ar===null?br=Ar=t:Ar=Ar.next=t),Cc=!0,vh||(vh=!0,vy())}function Go(t,n){if(!xh&&Cc){xh=!0;do for(var i=!1,s=br;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var p=s.suspendedLanes,T=s.pingedLanes;u=(1<<31-wn(42|t)+1)-1,u&=l&~(p&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,j_(s,u))}else u=ye,u=us(s,s===Xe?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ea(s,u)||(i=!0,j_(s,u));s=s.next}while(i);xh=!1}}function _y(){G_()}function G_(){Cc=vh=!1;var t=0;ja!==0&&wy()&&(t=ja);for(var n=H(),i=null,s=br;s!==null;){var l=s.next,u=V_(s,n);u===0?(s.next=null,i===null?br=l:i.next=l,l===null&&(Ar=i)):(i=s,(t!==0||(u&3)!==0)&&(Cc=!0)),s=l}$e!==0&&$e!==5||Go(t),ja!==0&&(ja=0)}function V_(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-wn(u),T=1<<p,L=l[p];L===-1?((T&i)===0||(T&s)!==0)&&(l[p]=Mu(T,n)):L<=n&&(t.expiredLanes|=T),u&=~T}if(n=Xe,i=ye,i=us(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Zt(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ea(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&Zt(s),Q(i)){case 2:case 8:i=Vt;break;case 32:i=yt;break;case 268435456:i=Yt;break;default:i=yt}return s=k_.bind(null,t),i=ne(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&Zt(s),t.callbackPriority=2,t.callbackNode=null,2}function k_(t,n){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Rc()&&t.callbackNode!==i)return null;var s=ye;return s=us(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(C_(t,s,n),V_(t,H()),t.callbackNode!=null&&t.callbackNode===i?k_.bind(null,t):null)}function j_(t,n){if(Rc())return null;C_(t,n,!0)}function vy(){Ny(function(){(Oe&6)!==0?ne(Dt,_y):G_()})}function Sh(){if(ja===0){var t=Ss;t===0&&(t=ls,ls<<=1,(ls&261888)===0&&(ls=256)),ja=t}return ja}function X_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Tl(t)}function xy(t,n,i,s,l){if(n==="submit"&&i&&i.stateNode===l){var u=X_((l[jt]||null).action),p=s.submitter;p&&(n=(n=p[jt]||null)?X_(n.formAction):p.getAttribute("formAction"),n!==null&&(u=n,p=null));var T=new Cl("action","action",null,s,l);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ja!==0){var L=new FormData(l,p);Cf(i,{pending:!0,data:L,method:l.method,action:u},null,L)}}else typeof u=="function"&&(T.preventDefault(),L=new FormData(l,p),Cf(i,{pending:!0,data:L,method:l.method,action:u},u,L))},currentTarget:l}]})}}for(var yh=0;yh<Xu.length;yh++){var Mh=Xu[yh],Sy=Mh.toLowerCase(),yy=Mh[0].toUpperCase()+Mh.slice(1);yi(Sy,"on"+yy)}yi(_m,"onAnimationEnd"),yi(vm,"onAnimationIteration"),yi(xm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(DS,"onTransitionRun"),yi(NS,"onTransitionStart"),yi(US,"onTransitionCancel"),yi(Sm,"onTransitionEnd"),tn("onMouseEnter",["mouseout","mouseover"]),tn("onMouseLeave",["mouseout","mouseover"]),tn("onPointerEnter",["pointerout","pointerover"]),tn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function q_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],l=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var p=s.length-1;0<=p;p--){var T=s[p],L=T.instance,Y=T.currentTarget;if(T=T.listener,L!==u&&l.isPropagationStopped())break t;u=T,l.currentTarget=Y;try{u(l)}catch(nt){Nl(nt)}l.currentTarget=null,u=L}else for(p=0;p<s.length;p++){if(T=s[p],L=T.instance,Y=T.currentTarget,T=T.listener,L!==u&&l.isPropagationStopped())break t;u=T,l.currentTarget=Y;try{u(l)}catch(nt){Nl(nt)}l.currentTarget=null,u=L}}}}function xe(t,n){var i=n[$t];i===void 0&&(i=n[$t]=new Set);var s=t+"__bubble";i.has(s)||(Y_(n,t,2,!1),i.add(s))}function Eh(t,n,i){var s=0;n&&(s|=4),Y_(i,t,s,n)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Th(t){if(!t[wc]){t[wc]=!0,Ye.forEach(function(i){i!=="selectionchange"&&(My.has(i)||Eh(i,!1,t),Eh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wc]||(n[wc]=!0,Eh("selectionchange",!1,n))}}function Y_(t,n,i,s){switch(Pv(n)){case 2:var l=pM;break;case 8:l=mM;break;default:l=jh}i=l.bind(null,n,i,t),l=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function bh(t,n,i,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var T=s.stateNode.containerInfo;if(T===l)break;if(p===4)for(p=s.return;p!==null;){var L=p.tag;if((L===3||L===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;T!==null;){if(p=Le(T),p===null)return;if(L=p.tag,L===5||L===6||L===26||L===27){s=u=p;continue t}T=T.parentNode}}s=s.return}Yp(function(){var Y=u,nt=wu(i),mt=[];t:{var j=ym.get(t);if(j!==void 0){var tt=Cl,Nt=t;switch(t){case"keypress":if(Al(i)===0)break t;case"keydown":case"keyup":tt=rS;break;case"focusin":Nt="focus",tt=zu;break;case"focusout":Nt="blur",tt=zu;break;case"beforeblur":case"afterblur":tt=zu;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=fS;break;case _m:case vm:case xm:tt=Qx;break;case Sm:tt=dS;break;case"scroll":case"scrollend":tt=qx;break;case"wheel":tt=mS;break;case"copy":case"cut":case"paste":tt=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Jp;break;case"submit":tt=cS;break;case"toggle":case"beforetoggle":tt=_S}var Xt=(n&4)!==0,he=!Xt&&(t==="scroll"||t==="scrollend"),X=Xt?j!==null?j+"Capture":null:j;Xt=[];for(var F=Y,J;F!==null;){var dt=F;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||X===null||(dt=co(F,X),dt!=null&&Xt.push(ko(F,dt,J))),he)break;F=F.return}0<Xt.length&&(j=new tt(j,Nt,null,i,nt),mt.push({event:j,listeners:Xt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",tt&&i!==Cu&&(Nt=i.relatedTarget||i.fromElement)&&(Le(Nt)||Nt[ee]))break t;(j||tt)&&(Nt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,j?(tt=i.relatedTarget||i.toElement,j=Y,tt=tt?Le(tt):null,tt!==null&&(he=f(tt),Xt=tt.tag,tt!==he||Xt!==5&&Xt!==27&&Xt!==6)&&(tt=null)):(j=null,tt=Y),j!==tt&&(Xt=Kp,dt="onMouseLeave",X="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=Jp,dt="onPointerLeave",X="onPointerEnter",F="pointer"),he=j==null?Nt:pn(j),J=tt==null?Nt:pn(tt),Nt=new Xt(dt,F+"leave",j,i,nt),Nt.target=he,Nt.relatedTarget=J,dt=null,Le(nt)===Y&&(Xt=new Xt(X,F+"enter",tt,i,nt),Xt.target=J,Xt.relatedTarget=he,dt=Xt),he=dt,Xt=j&&tt?G(j,tt,Ey):null,j!==null&&W_(mt,Nt,j,Xt,!1),tt!==null&&he!==null&&W_(mt,he,tt,Xt,!0)))}t:{if(j=Y?pn(Y):window,tt=j.nodeName&&j.nodeName.toLowerCase(),tt==="select"||tt==="input"&&j.type==="file")var Ht=rm;else if(am(j))if(om)Ht=RS;else{Ht=bS;var Me=TS}else tt=j.nodeName,!tt||tt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?Y&&Ru(Y.elementType)&&(Ht=rm):Ht=AS;if(Ht&&(Ht=Ht(t,Y))){sm(mt,Ht,i,nt);break t}Me&&Me(t,j,Y)}switch(Me=Y?pn(Y):window,t){case"focusin":(am(Me)||Me.contentEditable==="true")&&(tr=Me,Vu=Y,vo=null);break;case"focusout":vo=Vu=tr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,mm(mt,i,nt);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":mm(mt,i,nt)}var Jt;if(Iu)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else $s?nm(t,i)&&(ae="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ae="onCompositionStart");ae&&($p&&i.locale!=="ko"&&($s||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&$s&&(Jt=Wp()):(ba=nt,Uu="value"in ba?ba.value:ba.textContent,$s=!0)),Me=Dc(Y,ae),0<Me.length&&(ae=new Qp(ae,t,null,i,nt),mt.push({event:ae,listeners:Me}),Jt?ae.data=Jt:(Jt=im(i),Jt!==null&&(ae.data=Jt)))),(Jt=xS?SS(t,i):yS(t,i))&&(ae=Dc(Y,"onBeforeInput"),0<ae.length&&(Me=new Qp("onBeforeInput","beforeinput",null,i,nt),mt.push({event:Me,listeners:ae}),Me.data=Jt)),xy(mt,t,Y,i,nt)}q_(mt,n)})}function ko(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Dc(t,n){for(var i=n+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=co(t,i),l!=null&&s.unshift(ko(t,l,u)),l=co(t,n),l!=null&&s.push(ko(t,l,u))),t.tag===3)return s;t=t.return}return[]}function Ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W_(t,n,i,s,l){for(var u=n._reactName,p=[];i!==null&&i!==s;){var T=i,L=T.alternate,Y=T.stateNode;if(T=T.tag,L!==null&&L===s)break;T!==5&&T!==26&&T!==27||Y===null||(L=Y,l?(Y=co(i,u),Y!=null&&p.unshift(ko(i,Y,L))):l||(Y=co(i,u),Y!=null&&p.push(ko(i,Y,L)))),i=i.return}p.length!==0&&t.push({event:n,listeners:p})}var Ty=/\r\n?/g,by=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(by,"")}function K_(t,n){return n=Z_(n),Z_(t)===n}function Fe(t,n,i,s,l,u){switch(i){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||Ks(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&Ks(t,""+s);else return;break;case"className":El(t,"class",s);break;case"tabIndex":El(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":El(t,i,s);break;case"style":Xp(t,s,u);return;case"data":if(n!=="object"){El(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Tl(s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(n!=="input"&&Fe(t,n,"name",l.name,l,null),Fe(t,n,"formEncType",l.formEncType,l,null),Fe(t,n,"formMethod",l.formMethod,l,null),Fe(t,n,"formTarget",l.formTarget,l,null)):(Fe(t,n,"encType",l.encType,l,null),Fe(t,n,"method",l.method,l,null),Fe(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Tl(s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=Oi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(r(60));u?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Tl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Ml(t,"popover",s);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ml(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=jx.get(i)||i,Ml(t,i,s);else return}we=!0}function Ah(t,n,i,s,l,u){switch(i){case"style":Xp(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(r(60));u?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof s=="string")Ks(t,s);else if(typeof s=="number"||typeof s=="bigint")Ks(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!On.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),n=t[jt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(u,s,l);break t}we=!0,i in t?t[i]=s:s===!0?t.setAttribute(i,""):Ml(t,i,s)}return}we=!0}function An(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var p=i[u];if(p!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,u,p,i,null)}}l&&Fe(t,n,"srcSet",i.srcSet,i,null),s&&Fe(t,n,"src",i.src,i,null);return;case"input":xe("invalid",t);var T=u=p=l=null,L=null,Y=null;for(s in i)if(i.hasOwnProperty(s)){var nt=i[s];if(nt!=null)switch(s){case"name":l=nt;break;case"type":p=nt;break;case"checked":L=nt;break;case"defaultChecked":Y=nt;break;case"value":u=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,nt,i,null)}}Gp(t,u,T,L,Y,p,l,!1);return;case"select":xe("invalid",t),s=p=u=null;for(l in i)if(i.hasOwnProperty(l)&&(T=i[l],T!=null))switch(l){case"value":u=T;break;case"defaultValue":p=T;break;case"multiple":s=T;default:Fe(t,n,l,T,i,null)}n=u,i=p,t.multiple=!!s,n!=null?Zs(t,!!s,n,!1):i!=null&&Zs(t,!!s,i,!0);return;case"textarea":xe("invalid",t),u=l=s=null;for(p in i)if(i.hasOwnProperty(p)&&(T=i[p],T!=null))switch(p){case"value":s=T;break;case"defaultValue":l=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(t,n,p,T,i,null)}kp(t,s,l,u);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(s=i[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,L,s,i,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Vo.length;s++)xe(Vo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(s=i[Y],s!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,Y,s,i,null)}return;default:if(Ru(n)){for(nt in i)i.hasOwnProperty(nt)&&(s=i[nt],s!==void 0&&Ah(t,n,nt,s,i,void 0));return}}for(T in i)i.hasOwnProperty(T)&&(s=i[T],s!=null&&Fe(t,n,T,s,i,null))}var Ay={};function Ry(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,p=null,T=null,L=null,Y=null,nt=null;for(tt in i){var mt=i[tt];if(i.hasOwnProperty(tt)&&mt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":L=mt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,mt)}}for(var j in s){var tt=s[j];if(mt=i[j],s.hasOwnProperty(j)&&(tt!=null||mt!=null))switch(j){case"type":tt!==mt&&(we=!0),u=tt;break;case"name":tt!==mt&&(we=!0),l=tt;break;case"checked":tt!==mt&&(we=!0),Y=tt;break;case"defaultChecked":tt!==mt&&(we=!0),nt=tt;break;case"value":tt!==mt&&(we=!0),p=tt;break;case"defaultValue":tt!==mt&&(we=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==mt&&Fe(t,n,j,tt,s,mt)}}bu(t,p,T,L,Y,nt,u,l);return;case"select":tt=p=T=j=null;for(u in i)if(L=i[u],i.hasOwnProperty(u)&&L!=null)switch(u){case"value":break;case"multiple":tt=L;default:s.hasOwnProperty(u)||Fe(t,n,u,null,s,L)}for(l in s)if(u=s[l],L=i[l],s.hasOwnProperty(l)&&(u!=null||L!=null))switch(l){case"value":u!==L&&(we=!0),j=u;break;case"defaultValue":u!==L&&(we=!0),T=u;break;case"multiple":u!==L&&(we=!0),p=u;default:u!==L&&Fe(t,n,l,u,s,L)}n=T,i=p,s=tt,j!=null?Zs(t,!!i,j,!1):!!s!=!!i&&(n!=null?Zs(t,!!i,n,!0):Zs(t,!!i,i?[]:"",!1));return;case"textarea":tt=j=null;for(T in i)if(l=i[T],i.hasOwnProperty(T)&&l!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(t,n,T,null,s,l)}for(p in s)if(l=s[p],u=i[p],s.hasOwnProperty(p)&&(l!=null||u!=null))switch(p){case"value":l!==u&&(we=!0),j=l;break;case"defaultValue":l!==u&&(we=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Fe(t,n,p,l,s,u)}Vp(t,j,tt);return;case"option":for(var Nt in i)if(j=i[Nt],i.hasOwnProperty(Nt)&&j!=null&&!s.hasOwnProperty(Nt))switch(Nt){case"selected":t.selected=!1;break;default:Fe(t,n,Nt,null,s,j)}for(L in s)if(j=s[L],tt=i[L],s.hasOwnProperty(L)&&j!==tt&&(j!=null||tt!=null))switch(L){case"selected":j!==tt&&(we=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Fe(t,n,L,j,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in i)j=i[Xt],i.hasOwnProperty(Xt)&&j!=null&&!s.hasOwnProperty(Xt)&&Fe(t,n,Xt,null,s,j);for(Y in s)if(j=s[Y],tt=i[Y],s.hasOwnProperty(Y)&&j!==tt&&(j!=null||tt!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Fe(t,n,Y,j,s,tt)}return;default:if(Ru(n)){for(var he in i)j=i[he],i.hasOwnProperty(he)&&j!==void 0&&!s.hasOwnProperty(he)&&Ah(t,n,he,void 0,s,j);for(nt in s)j=s[nt],tt=i[nt],!s.hasOwnProperty(nt)||j===tt||j===void 0&&tt===void 0||Ah(t,n,nt,j,s,tt);return}}for(var X in i)j=i[X],i.hasOwnProperty(X)&&j!=null&&!s.hasOwnProperty(X)&&Fe(t,n,X,null,s,j);for(mt in s)j=s[mt],tt=i[mt],!s.hasOwnProperty(mt)||j===tt||j==null&&tt==null||Fe(t,n,mt,j,s,tt)}function Q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var l=i[s],u=l.transferSize,p=l.initiatorType,T=l.duration;if(u&&T&&Q_(p)){for(p=0,T=l.responseEnd,s+=1;s<i.length;s++){var L=i[s],Y=L.startTime;if(Y>T)break;var nt=L.transferSize,mt=L.initiatorType;nt&&Q_(mt)&&(L=L.responseEnd,p+=nt*(L<T?1:(T-Y)/(L-Y)))}if(--s,n+=8*(u+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rh=null,Ch=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function J_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function tv(t,n,i,s){return i=jo(i).createElement(t),i[wt]=s,i[jt]=n,An(i,t,n),Ce(i),i}function wh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dh=null;function wy(){var t=window.event;return t&&t.type==="popstate"?t===Dh?!1:(Dh=t,!0):(Dh=null,!1)}var Nh=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,nv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Nh,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(Uy)}:Nh;function Uy(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function iv(t,n){var i=n,s=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(l),Lr(n);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")Fh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Fh(i);for(var u=i.firstChild;u;){var p=u.nextSibling,T=u.nodeName;u[Ue]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=p}}else i==="body"&&Fh(t.ownerDocument.body);i=l}while(i);Lr(n)}function av(t,n){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function sv(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function rv(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ly(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Uh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return Ly(n,i,t)}function Oy(t){return t.documentElement.clientHeight}function zy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Py(t,n,i,s,l,u,p,T,L){var Y=n.nodeType===9?n:n.ownerDocument;try{var nt=Y.startViewTransition({update:function(){var j=Y.defaultView,tt=j.navigation&&j.navigation.transition,Nt=Y.fonts.status;s();var Xt=[];if(Nt==="loaded"&&(Oy(Y),Y.fonts.status==="loading"&&Xt.push(Y.fonts.ready)),Nt=Xt.length,t!==null)for(var he=t.suspenseyImages,X=0,F=0;F<he.length;F++){var J=he[F];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<j.innerHeight&&dt.left<j.innerWidth){if(X+=Rv(J),X>Lc){Xt.length=Nt;break}J=new Promise(zy.bind(J)),Xt.push(J)}}}if(0<Xt.length)return j=Promise.race([Promise.all(Xt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,j]):j).then(u,u);if(l(),tt)return tt.finished.then(u,u);u()},types:i});Y.__reactViewTransition=nt;var mt=[];return nt.ready.then(function(){for(var j=Y.documentElement.getAnimations({subtree:!0}),tt=0;tt<j.length;tt++){var Nt=j[tt],Xt=Nt.effect,he=Xt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Nt),Nt=Xt.getKeyframes();for(var X=he=void 0,F=!0,J=0;J<Nt.length;J++){var dt=Nt[J],Ht=dt.width;if(he===void 0)he=Ht;else if(he!==Ht){F=!1;break}if(Ht=dt.height,X===void 0)X=Ht;else if(X!==Ht){F=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}F&&he!==void 0&&X!==void 0&&(Xt.setKeyframes(Nt),F=getComputedStyle(Xt.target,Xt.pseudoElement),F.width!==he||F.height!==X)&&(F=Nt[0],F.width=he,F.height=X,F=Nt[Nt.length-1],F.width=he,F.height=X,Xt.setKeyframes(Nt))}}p()},function(j){Y.__reactViewTransition===nt&&(Y.__reactViewTransition=null);try{if(typeof j=="object"&&j!==null)switch(j.name){case"InvalidStateError":(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null)}j!==null&&L(j)}finally{s(),l(),p()}}),nt.finished.finally(function(){for(var j=0;j<mt.length;j++)mt[j].cancel();Y.__reactViewTransition===nt&&(Y.__reactViewTransition=null),T()}),nt}catch{return s(),l(),p(),null}}function Ns(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ns.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ns.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),s=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(i[l])}return s},Ns.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ov(t){return{name:t,group:new Ns("group",t),imagePair:new Ns("image-pair",t),old:new Ns("old",t),new:new Ns("new",t)}}function ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(t,n,i){var s=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(s=i.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(cv(u,t,n,i)===-1){var p=this,T=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(T=function(L){p.removeEventListener(t,n,i),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),s!==null&&(l=p.removeEventListener.bind(p,t,n,i),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Rr(i),u.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:T,cleanup:l}),m(this._fragmentFiber.child,!1,Iy,t,T,s)}this._eventListeners=u}};function Iy(t,n,i,s){return y(t).addEventListener(n,i,s),!1}ii.prototype.removeEventListener=function(t,n,i){var s=this._eventListeners;if(s!==null&&(n=cv(s,t,n,i),n!==-1)){var l=s[n];i=l.attachedListener;var u=l.cleanup;l=Rr(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,By,t,i,l),s.splice(n,1),u!==null&&u()}};function By(t,n,i,s){return y(t).removeEventListener(n,i,s),!1}function Rr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function lv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function cv(t,n,i,s){if(t.length===0)return-1;s=lv(s);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===n&&u.listener===i&&lv(u.optionsOrUseCapture)===s)return l}return-1}ii.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];s.addEventListener(u.type,u.attachedListener,Rr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),i)for(l=0;l<i.length;l++)u=i[l],s.removeEventListener(u.type,u.attachedListener,Rr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ii.prototype.focus=function(t){m(this._fragmentFiber.child,!0,uv,t,void 0,void 0)};function uv(t,n){return t.tag===6?!1:(t=y(t),Ky(t,n))}ii.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Lh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!uv(n[i],t);i--);};function Lh(t,n){return n.push(t),!1}ii.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=jo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,Fy,t,void 0,void 0))};function Fy(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,Hy,t,void 0,void 0)};function Hy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ii.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,Gy,t,void 0,void 0);for(var i=n=0;i<Ai.length;i++){var s=Ai[i];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ai[n++]=s}Ai.length=n}};function Gy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ai=[],Oh=!1;function Vy(t,n,i){Ai.push({fragmentInstance:t,observer:n,instance:i}),Oh||(Oh=!0,Qy(function(){Oh=!1;var s=Ai;Ai=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}ii.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,ky,t,void 0,void 0),t};function ky(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ii.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ii.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Lh,i,void 0,void 0);var s=y(n);if(i.length===0){if(i=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=s=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=R(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(i[0]),l=y(i[i.length-1]);var u=M(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=n.compareDocumentPosition(t),T=l.compareDocumentPosition(t),L=p&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&u&&p&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&l===t||L||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||jy(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function jy(t,n,i,s,l){var u=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){i=!0;break t}u=u.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=n,n=S(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===i)&&(n=G(i,u,k),n===null?n=!1:(m(n,!0,I,u,i),u=x,x=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=G(s,u,k),n===null?n=!1:(m(n,!0,N,u,s),u=x,B=x=null,n=u!==null)),n):!1}function fv(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,Lh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var s=R(this._fragmentFiber);if(s=i?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),fv(t,i);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){i="host"in s?s.host:null,i!==null&&i.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=i?n.length-1:0;s!==(i?-1:n.length);){var l=n[s];l.tag===6?(l=y(l),fv(l,i)):y(l).scrollIntoView(t),s+=i?-1:1}};function Xy(t,n){return t=y(t),hv(t,n),!1}function hv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function dv(t,n){var i=n._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];t.addEventListener(l.type,l.attachedListener,Rr(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(u){for(var p=0,T=0;T<Ai.length;T++){var L=Ai[T];(L.fragmentInstance!==n||L.observer!==u||L.instance!==t)&&(Ai[p++]=L)}Ai.length=p,u.observe(t)}),hv(t,n))}function qy(t,n){var i=n._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];t.removeEventListener(l.type,l.attachedListener,Rr(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?Vy(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function zh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":zh(i),te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Yy(t,n,i,s){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Wy(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function pv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function Ph(t){return t.data==="$?"||t.data==="$~"}function Ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zy(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bh=null;function mv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return mi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function gv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function Ky(t,n){function i(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return s}function Qy(t){nv(function(){nv(function(n){return t(n)})})}function _v(t,n,i){switch(n=jo(i),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vv(t,n,i){for(var s in i){var l=i[s];i.hasOwnProperty(s)&&l!=null&&Fe(t,n,s,null,Ay,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),te(t)}function Fh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var gi=new Map,xv=new Set;function Xo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var pa=qt.d;qt.d={f:Jy,r:$y,D:tM,C:eM,L:nM,m:iM,X:sM,S:aM,M:rM};function Jy(){var t=pa.f(),n=Tc();return t||n}function $y(t){var n=me(t);n!==null&&n.tag===5&&n.type==="form"?yg(n):pa.r(t)}var Cr=typeof document>"u"?null:document;function Sv(t,n,i){var s=Cr;if(s&&typeof n=="string"&&n){var l=li(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),xv.has(l)||(xv.add(l),t={rel:t,crossOrigin:i,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),An(n,"link",t),Ce(n),s.head.appendChild(n)))}}function tM(t){pa.D(t),Sv("dns-prefetch",t,null)}function eM(t,n){pa.C(t,n),Sv("preconnect",t,n)}function nM(t,n,i){pa.L(t,n,i);var s=Cr;if(s&&t&&n){var l='link[rel="preload"][as="'+li(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(t)+'"]';var u=l;switch(n){case"style":u=wr(t);break;case"script":u=Dr(t)}if(!(gi.has(u)||(t=z({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),gi.set(u,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(qo(u))||n==="script"&&s.querySelector(Yo(u))))){var p=s.createElement("link");An(p,"link",t),n==="style"&&(p[Re]=!0,p.onload=p.onerror=function(){Ta(p)}),Ce(p),s.head.appendChild(p)}}}function iM(t,n){pa.m(t,n);var i=Cr;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+li(s)+'"][href="'+li(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Dr(t)}if(!gi.has(u)&&(t=z({rel:"modulepreload",href:t},n),gi.set(u,t),i.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Yo(u)))return}s=i.createElement("link"),An(s,"link",t),Ce(s),i.head.appendChild(s)}}}function aM(t,n,i){pa.S(t,n,i);var s=Cr;if(s&&t){var l=Zn(s).hoistableStyles,u=wr(t);n=n||"default";var p=l.get(u);if(!p){var T={loading:0,preload:null};if(p=s.querySelector(qo(u)))T.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},i),(i=gi.get(u))&&Hh(t,i);var L=p=s.createElement("link");Ce(L),An(L,"link",t),L._p=new Promise(function(Y,nt){L.onload=Y,L.onerror=nt}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Nc(p,n,s)}p={type:"stylesheet",instance:p,count:1,state:T},l.set(u,p)}}}function sM(t,n){pa.X(t,n);var i=Cr;if(i&&t){var s=Zn(i).hoistableScripts,l=Dr(t),u=s.get(l);u||(u=i.querySelector(Yo(l)),u||(t=z({src:t,async:!0},n),(n=gi.get(l))&&Gh(t,n),u=i.createElement("script"),Ce(u),An(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function rM(t,n){pa.M(t,n);var i=Cr;if(i&&t){var s=Zn(i).hoistableScripts,l=Dr(t),u=s.get(l);u||(u=i.querySelector(Yo(l)),u||(t=z({src:t,async:!0,type:"module"},n),(n=gi.get(l))&&Gh(t,n),u=i.createElement("script"),Ce(u),An(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function yv(t,n,i,s){var l=(l=je.current)?Xo(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=wr(i.href),n=Zn(l).hoistableStyles,s=n.get(i),s||(s={type:"style",instance:null,count:0,state:null},n.set(i,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=wr(i.href);var u=Zn(l).hoistableStyles,p=u.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=l.querySelector(qo(t)))?u._p||(p.instance=u,p.state.loading=5):(u=gi.get(t),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(t,u)),oM(l,t,u,p.state))),n&&s===null)throw Error(r(528,""));return p}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Dr(i),n=Zn(l).hoistableScripts,s=n.get(i),s||(s={type:"script",instance:null,count:0,state:null},n.set(i,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function wr(t){return'href="'+li(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function Mv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function oM(t,n,i,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Re]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Re]=!0,n.onload=n.onerror=Ta.bind(null,n),An(n,"link",i),Ce(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Dr(t){return'[src="'+li(t)+'"]'}function Yo(t){return"script[async]"+t}function Ev(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+li(i.href)+'"]');if(s)return n.instance=s,Ce(s),s;var l=z({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ce(s),An(s,"style",l),Nc(s,i.precedence,t),n.instance=s;case"stylesheet":l=wr(i.href);var u=t.querySelector(qo(l));if(u)return n.state.loading|=4,n.instance=u,Ce(u),u;s=Mv(i),(l=gi.get(l))&&Hh(s,l),u=(t.ownerDocument||t).createElement("link"),Ce(u);var p=u;return p._p=new Promise(function(T,L){p.onload=T,p.onerror=L}),An(u,"link",s),n.state.loading|=4,Nc(u,i.precedence,t),n.instance=u;case"script":return u=Dr(i.src),(l=t.querySelector(Yo(u)))?(n.instance=l,Ce(l),l):(s=i,(l=gi.get(u))&&(s=z({},i),Gh(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),An(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nc(s,i.precedence,t));return n.instance}function Nc(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,p=0;p<s.length;p++){var T=s[p];if(T.dataset.precedence===n)u=T;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uc=null;function Tv(t,n,i){if(Uc===null){var s=new Map,l=Uc=new Map;l.set(i,s)}else l=Uc,s=l.get(i),s||(s=new Map,l.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[Ue]||u[wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(n)||"";p=t+p;var T=s.get(p);T?T.push(u):s.set(p,[u])}}return s}function Vh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function lM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Av(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Cv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Rv(n),t.suspenseyImages.push(n)),t=fM.bind(t),n.decode().then(t,t))}function cM(t,n,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=wr(s.href),u=n.querySelector(qo(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=u,Ce(u);return}u=n.ownerDocument||n,s=Mv(s),(l=gi.get(l))&&Hh(s,l),u=u.createElement("link"),Ce(u);var p=u;p._p=new Promise(function(T,L){p.onload=T,p.onerror=L}),An(u,"link",s),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Wo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Lc=0;function uM(t,n){return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Lc===0&&(Lc=62500*Cy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Lc?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function wv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Wo(){this.count--,wv(this)}function fM(){this.imgCount--,wv(this)}var Oc=null;function zc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,n.forEach(hM,t),Oc=null,Wo.call(t))}function hM(t,n){if(!(n.state.loading&4)){var i=Oc.get(t);if(i)var s=i.get(null);else{i=new Map,Oc.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var p=l[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),s=p)}s&&i.set(null,s)}l=n.instance,p=l.getAttribute("data-precedence"),u=i.get(p)||s,u===s&&i.set(null,l),i.set(p,l),this.count++,s=Wo.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Nr={$$typeof:ct,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function dM(t,n,i,s,l,u,p,T,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function Dv(t,n,i,s,l,u,p,T,L,Y,nt,mt){return t=new dM(t,n,i,p,L,Y,nt,mt,T),n=1,u===!0&&(n|=24),u=Gn(3,null,null,n),t.current=u,u.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:n},of(u),t}function Nv(t){return t?(t=ir,t):ir}function Uv(t,n,i,s,l,u){l=Nv(l),s.context===null?s.context=l:s.pendingContext=l,s=La(n),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Oa(t,s,n),i!==null&&(Xn(i,t,n),bo(i,t,n))}function Lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function kh(t,n){Lv(t,n),(t=t.alternate)&&Lv(t,n)}function Ov(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&Xn(n,t,67108864),kh(t,67108864)}}function zv(t){if(t.tag===13||t.tag===31){var n=ni();n=ot(n);var i=ps(t,n);i!==null&&Xn(i,t,n),kh(t,n)}}var Ur=!0;function pM(t,n,i,s){var l=Et.T;Et.T=null;var u=qt.p;try{qt.p=2,jh(t,n,i,s)}finally{qt.p=u,Et.T=l}}function mM(t,n,i,s){var l=Et.T;Et.T=null;var u=qt.p;try{qt.p=8,jh(t,n,i,s)}finally{qt.p=u,Et.T=l}}function jh(t,n,i,s){if(Ur){var l=Xh(s);if(l===null)bh(t,n,s,Pc,i),Iv(t,s);else if(_M(l,t,n,i,s))s.stopPropagation();else if(Iv(t,s),n&4&&-1<gM.indexOf(t)){for(;l!==null;){var u=me(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=oi(u.pendingLanes);if(p!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;p;){var L=1<<31-wn(p);T.entanglements[1]|=L,p&=~L}ji(u),(Oe&6)===0&&(yc=H()+500,Go(0))}}break;case 31:case 13:T=ps(u,2),T!==null&&Xn(T,u,2),Tc(),kh(u,2)}if(u=Xh(s),u===null&&bh(t,n,s,Pc,i),u===l)break;l=u}l!==null&&s.stopPropagation()}else bh(t,n,s,null,i)}}function Xh(t){return t=wu(t),qh(t)}var Pc=null;function qh(t){if(Pc=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pc=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Dt:return 2;case Vt:return 8;case yt:case gt:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var Yh=!1,qa=null,Ya=null,Wa=null,Zo=new Map,Ko=new Map,Za=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iv(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,i,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=me(n),n!==null&&Ov(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function _M(t,n,i,s,l){switch(n){case"focusin":return qa=Qo(qa,t,n,i,s,l),!0;case"dragenter":return Ya=Qo(Ya,t,n,i,s,l),!0;case"mouseover":return Wa=Qo(Wa,t,n,i,s,l),!0;case"pointerover":var u=l.pointerId;return Zo.set(u,Qo(Zo.get(u)||null,t,n,i,s,l)),!0;case"gotpointercapture":return u=l.pointerId,Ko.set(u,Qo(Ko.get(u)||null,t,n,i,s,l)),!0}return!1}function Bv(t){var n=Le(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){zv(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){zv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Xh(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Cu=s,i.target.dispatchEvent(s),Cu=null}else return n=me(i),n!==null&&Ov(n),t.blockedOn=i,!1;n.shift()}return!0}function Fv(t,n,i){Ic(t)&&i.delete(n)}function vM(){Yh=!1,qa!==null&&Ic(qa)&&(qa=null),Ya!==null&&Ic(Ya)&&(Ya=null),Wa!==null&&Ic(Wa)&&(Wa=null),Zo.forEach(Fv),Ko.forEach(Fv)}function Bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Yh||(Yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vM)))}var Fc=null;function Hv(t){Fc!==t&&(Fc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(qh(s||i)===null)continue;break}var u=me(i);u!==null&&(t.splice(n,3),n-=3,Cf(u,{pending:!0,data:l,method:i.method,action:s},s,l))}}))}function Lr(t){function n(L){return Bc(L,t)}qa!==null&&Bc(qa,t),Ya!==null&&Bc(Ya,t),Wa!==null&&Bc(Wa,t),Zo.forEach(n),Ko.forEach(n);for(var i=0;i<Za.length;i++){var s=Za[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Za.length&&(i=Za[0],i.blockedOn===null);)Bv(i),i.blockedOn===null&&Za.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var l=i[s],u=i[s+1],p=l[jt]||null;if(typeof u=="function")p||Hv(i);else if(p){var T=null;if(u&&u.hasAttribute("formAction")){if(l=u,p=u[jt]||null)T=p.formAction;else if(qh(l)!==null)continue}else T=p.action;typeof T=="function"?i[s+1]=T:(i.splice(s,3),s-=3),Hv(i)}}}function Gv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Wh(t){this._internalRoot=t}Hc.prototype.render=Wh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var i=n.current,s=ni();Uv(i,s,t,n,null,null)},Hc.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Uv(t.current,2,null,t,null,null),Tc(),n[ee]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Za.length&&n!==0&&n<Za[i].priority;i++);Za.splice(i,0,t),i===0&&Bv(t)}};var Vv=e.version;if(Vv!=="19.3.0")throw Error(r(527,Vv,"19.3.0"));qt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var xM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{Se=Gc.inject(xM),Je=Gc}catch{}}return $o.createRoot=function(t,n){if(!c(t))throw Error(r(299));var i=!1,s="",l=Ng,u=Ug,p=Lg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Dv(t,1,!1,null,null,i,s,null,l,u,p,Gv),t[ee]=n.current,Th(t),new Wh(n)},$o.hydrateRoot=function(t,n,i){if(!c(t))throw Error(r(299));var s=!1,l="",u=Ng,p=Ug,T=Lg,L=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),n=Dv(t,1,!0,n,i??null,s,l,L,u,p,T,Gv),n.context=Nv(null),i=n.current,s=ni(),s=ot(s),l=La(s),l.callback=null,Oa(i,l,s),i=s,n.current.lanes=i,fs(n,i),ji(n),t[ee]=n.current,Th(t),new Hc(n)},$o.version="19.3.0",$o}var Jv;function DM(){if(Jv)return Qh.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qh.exports=wM(),Qh.exports}var NM=DM();const UM=tx(NM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ex=(...o)=>o.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Hn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:h,...d},g)=>Hn.createElement("svg",{ref:g,...OM,width:e,height:e,stroke:o,strokeWidth:r?Number(a)*24/Number(e):a,className:ex("lucide",c),...d},[...h.map(([_,v])=>Hn.createElement(_,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=(o,e)=>{const a=Hn.forwardRef(({className:r,...c},f)=>Hn.createElement(zM,{ref:f,iconNode:e,className:ex(`lucide-${LM(o)}`,r),...c}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ri("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=ri("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=ri("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=ri("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=ri("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=ri("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=ri("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=ri("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=ri("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ri("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=ri("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=ri("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=ri("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="180",HM=0,$v=1,GM=2,sx=1,VM=2,Sa=3,rs=0,Yn=1,qi=2,as=0,Zr=1,t0=2,e0=3,n0=4,kM=5,Hs=100,jM=101,XM=102,qM=103,YM=104,WM=200,ZM=201,KM=202,QM=203,Od=204,zd=205,JM=206,$M=207,tE=208,eE=209,nE=210,iE=211,aE=212,sE=213,rE=214,Pd=0,Id=1,Bd=2,$r=3,Fd=4,Hd=5,Gd=6,Vd=7,rx=0,oE=1,lE=2,ss=0,cE=1,uE=2,fE=3,hE=4,dE=5,pE=6,mE=7,ox=300,to=301,eo=302,kd=303,jd=304,Su=306,Xd=1e3,Vs=1001,qd=1002,Ui=1003,gE=1004,Vc=1005,Yi=1006,ed=1007,ks=1008,Qi=1009,lx=1010,cx=1011,rl=1012,Rp=1013,Xs=1014,ya=1015,hl=1016,Cp=1017,wp=1018,ol=1020,ux=35902,fx=35899,hx=1021,dx=1022,Ni=1023,ll=1026,cl=1027,px=1028,Dp=1029,mx=1030,Np=1031,Up=1033,uu=33776,fu=33777,hu=33778,du=33779,Yd=35840,Wd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37808,ep=37809,np=37810,ip=37811,ap=37812,sp=37813,rp=37814,op=37815,lp=37816,cp=37817,up=37818,fp=37819,hp=37820,dp=37821,pp=36492,mp=36494,gp=36495,_p=36283,vp=36284,xp=36285,Sp=36286,_E=3200,vE=3201,gx=0,xE=1,is="",vi="srgb",no="srgb-linear",mu="linear",ke="srgb",Or=7680,i0=519,SE=512,yE=513,ME=514,_x=515,EE=516,TE=517,bE=518,AE=519,a0=35044,s0="300 es",Wi=2e3,gu=2001;class so{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(a)===-1&&r[e].push(a)}hasEventListener(e,a){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(a)!==-1}removeEventListener(e,a){const r=this._listeners;if(r===void 0)return;const c=r[e];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const r=a[e.type];if(r!==void 0){e.target=this;const c=r.slice(0);for(let f=0,h=c.length;f<h;f++)c[f].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,yp=180/Math.PI;function dl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[a&63|128]+Un[a>>8&255]+"-"+Un[a>>16&255]+Un[a>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ee(o,e,a){return Math.max(e,Math.min(a,o))}function RE(o,e){return(o%e+e)%e}function id(o,e,a){return(1-a)*o+a*e}function tl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,a=0){Ne.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,r=this.y,c=e.elements;return this.x=c[0]*a+c[3]*r+c[6],this.y=c[1]*a+c[4]*r+c[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Ee(this.x,e.x,a.x),this.y=Ee(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Ee(this.x,e,a),this.y=Ee(this.y,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y;return a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const r=Math.cos(a),c=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*c+e.x,this.y=f*c+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(e=0,a=0,r=0,c=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=r,this._w=c}static slerpFlat(e,a,r,c,f,h,d){let g=r[c+0],_=r[c+1],v=r[c+2],m=r[c+3];const S=f[h+0],M=f[h+1],R=f[h+2],C=f[h+3];if(d===0){e[a+0]=g,e[a+1]=_,e[a+2]=v,e[a+3]=m;return}if(d===1){e[a+0]=S,e[a+1]=M,e[a+2]=R,e[a+3]=C;return}if(m!==C||g!==S||_!==M||v!==R){let y=1-d;const x=g*S+_*M+v*R+m*C,B=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const k=Math.sqrt(I),G=Math.atan2(k,x*B);y=Math.sin(y*G)/k,d=Math.sin(d*G)/k}const N=d*B;if(g=g*y+S*N,_=_*y+M*N,v=v*y+R*N,m=m*y+C*N,y===1-d){const k=1/Math.sqrt(g*g+_*_+v*v+m*m);g*=k,_*=k,v*=k,m*=k}}e[a]=g,e[a+1]=_,e[a+2]=v,e[a+3]=m}static multiplyQuaternionsFlat(e,a,r,c,f,h){const d=r[c],g=r[c+1],_=r[c+2],v=r[c+3],m=f[h],S=f[h+1],M=f[h+2],R=f[h+3];return e[a]=d*R+v*m+g*M-_*S,e[a+1]=g*R+v*S+_*m-d*M,e[a+2]=_*R+v*M+d*S-g*m,e[a+3]=v*R-d*m-g*S-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,r,c){return this._x=e,this._y=a,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const r=e._x,c=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,_=d(r/2),v=d(c/2),m=d(f/2),S=g(r/2),M=g(c/2),R=g(f/2);switch(h){case"XYZ":this._x=S*v*m+_*M*R,this._y=_*M*m-S*v*R,this._z=_*v*R+S*M*m,this._w=_*v*m-S*M*R;break;case"YXZ":this._x=S*v*m+_*M*R,this._y=_*M*m-S*v*R,this._z=_*v*R-S*M*m,this._w=_*v*m+S*M*R;break;case"ZXY":this._x=S*v*m-_*M*R,this._y=_*M*m+S*v*R,this._z=_*v*R+S*M*m,this._w=_*v*m-S*M*R;break;case"ZYX":this._x=S*v*m-_*M*R,this._y=_*M*m+S*v*R,this._z=_*v*R-S*M*m,this._w=_*v*m+S*M*R;break;case"YZX":this._x=S*v*m+_*M*R,this._y=_*M*m+S*v*R,this._z=_*v*R-S*M*m,this._w=_*v*m-S*M*R;break;case"XZY":this._x=S*v*m-_*M*R,this._y=_*M*m-S*v*R,this._z=_*v*R+S*M*m,this._w=_*v*m+S*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const r=a/2,c=Math.sin(r);return this._x=e.x*c,this._y=e.y*c,this._z=e.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,r=a[0],c=a[4],f=a[8],h=a[1],d=a[5],g=a[9],_=a[2],v=a[6],m=a[10],S=r+d+m;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-g)*M,this._y=(f-_)*M,this._z=(h-c)*M}else if(r>d&&r>m){const M=2*Math.sqrt(1+r-d-m);this._w=(v-g)/M,this._x=.25*M,this._y=(c+h)/M,this._z=(f+_)/M}else if(d>m){const M=2*Math.sqrt(1+d-r-m);this._w=(f-_)/M,this._x=(c+h)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+m-r-d);this._w=(h-c)/M,this._x=(f+_)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let r=e.dot(a)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,a){const r=this.angleTo(e);if(r===0)return this;const c=Math.min(1,a/r);return this.slerp(e,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const r=e._x,c=e._y,f=e._z,h=e._w,d=a._x,g=a._y,_=a._z,v=a._w;return this._x=r*v+h*d+c*_-f*g,this._y=c*v+h*g+f*d-r*_,this._z=f*v+h*_+r*g-c*d,this._w=h*v-r*d-c*g-f*_,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const r=this._x,c=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+c*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=c,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*r+a*this._x,this._y=M*c+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const _=Math.sqrt(g),v=Math.atan2(_,d),m=Math.sin((1-a)*v)/_,S=Math.sin(a*v)/_;return this._w=h*m+this._w*S,this._x=r*m+this._x*S,this._y=c*m+this._y*S,this._z=f*m+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,a,r){return this.copy(e).slerp(a,r)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(e),c*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,a=0,r=0){lt.prototype.isVector3=!0,this.x=e,this.y=a,this.z=r}set(e,a,r){return r===void 0&&(r=this.z),this.x=e,this.y=a,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(r0.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(r0.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*a+f[3]*r+f[6]*c,this.y=f[1]*a+f[4]*r+f[7]*c,this.z=f[2]*a+f[5]*r+f[8]*c,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,r=this.y,c=this.z,f=e.elements,h=1/(f[3]*a+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*r+f[8]*c+f[12])*h,this.y=(f[1]*a+f[5]*r+f[9]*c+f[13])*h,this.z=(f[2]*a+f[6]*r+f[10]*c+f[14])*h,this}applyQuaternion(e){const a=this.x,r=this.y,c=this.z,f=e.x,h=e.y,d=e.z,g=e.w,_=2*(h*c-d*r),v=2*(d*a-f*c),m=2*(f*r-h*a);return this.x=a+g*_+h*m-d*v,this.y=r+g*v+d*_-f*m,this.z=c+g*m+f*v-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*a+f[4]*r+f[8]*c,this.y=f[1]*a+f[5]*r+f[9]*c,this.z=f[2]*a+f[6]*r+f[10]*c,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Ee(this.x,e.x,a.x),this.y=Ee(this.y,e.y,a.y),this.z=Ee(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Ee(this.x,e,a),this.y=Ee(this.y,e,a),this.z=Ee(this.z,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const r=e.x,c=e.y,f=e.z,h=a.x,d=a.y,g=a.z;return this.x=c*g-f*d,this.y=f*h-r*g,this.z=r*d-c*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const r=e.dot(this)/a;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y,c=this.z-e.z;return a*a+r*r+c*c}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,r){const c=Math.sin(a)*e;return this.x=c*Math.sin(r),this.y=Math.cos(a)*e,this.z=c*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,r){return this.x=e*Math.sin(a),this.y=r,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),c=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=r,this.z=c,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,r=Math.sqrt(1-a*a);return this.x=r*Math.cos(e),this.y=a,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new lt,r0=new pl;class de{constructor(e,a,r,c,f,h,d,g,_){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,r,c,f,h,d,g,_)}set(e,a,r,c,f,h,d,g,_){const v=this.elements;return v[0]=e,v[1]=c,v[2]=d,v[3]=a,v[4]=f,v[5]=g,v[6]=r,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],this}extractBasis(e,a,r){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,c=a.elements,f=this.elements,h=r[0],d=r[3],g=r[6],_=r[1],v=r[4],m=r[7],S=r[2],M=r[5],R=r[8],C=c[0],y=c[3],x=c[6],B=c[1],I=c[4],N=c[7],k=c[2],G=c[5],z=c[8];return f[0]=h*C+d*B+g*k,f[3]=h*y+d*I+g*G,f[6]=h*x+d*N+g*z,f[1]=_*C+v*B+m*k,f[4]=_*y+v*I+m*G,f[7]=_*x+v*N+m*z,f[2]=S*C+M*B+R*k,f[5]=S*y+M*I+R*G,f[8]=S*x+M*N+R*z,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],v=e[8];return a*h*v-a*d*_-r*f*v+r*d*g+c*f*_-c*h*g}invert(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],v=e[8],m=v*h-d*_,S=d*g-v*f,M=_*f-h*g,R=a*m+r*S+c*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=m*C,e[1]=(c*_-v*r)*C,e[2]=(d*r-c*h)*C,e[3]=S*C,e[4]=(v*a-c*g)*C,e[5]=(c*f-d*a)*C,e[6]=M*C,e[7]=(r*g-_*a)*C,e[8]=(h*a-r*f)*C,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,r,c,f,h,d){const g=Math.cos(f),_=Math.sin(f);return this.set(r*g,r*_,-r*(g*h+_*d)+h+e,-c*_,c*g,-c*(-_*h+g*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(sd.makeScale(e,a)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,a){return this.premultiply(sd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,r,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,r=e.elements;for(let c=0;c<9;c++)if(a[c]!==r[c])return!1;return!0}fromArray(e,a=0){for(let r=0;r<9;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new de;function vx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _u(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CE(){const o=_u("canvas");return o.style.display="block",o}const o0={};function ul(o){o in o0||(o0[o]=!0,console.warn(o))}function wE(o,e,a){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:r()}}setTimeout(f,a)})}const l0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const o={enabled:!0,workingColorSpace:no,spaces:{},convert:function(c,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(c.r=Ma(c.r),c.g=Ma(c.g),c.b=Ma(c.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(c.r=Kr(c.r),c.g=Kr(c.g),c.b=Kr(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===is?mu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,h){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[no]:{primaries:e,whitePoint:r,transfer:mu,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),o}const De=DE();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zr;class NE{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zr===void 0&&(zr=_u("canvas")),zr.width=e.width,zr.height=e.height;const c=zr.getContext("2d");e instanceof ImageData?c.putImageData(e,0,0):c.drawImage(e,0,0,e.width,e.height),r=zr}return r.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=_u("canvas");a.width=e.width,a.height=e.height;const r=a.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const c=r.getImageData(0,0,e.width,e.height),f=c.data;for(let h=0;h<f.length;h++)f[h]=Ma(f[h]/255)*255;return r.putImageData(c,0,0),a}else if(e.data){const a=e.data.slice(0);for(let r=0;r<a.length;r++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[r]=Math.floor(Ma(a[r]/255)*255):a[r]=Ma(a[r]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let h=0,d=c.length;h<d;h++)c[h].isDataTexture?f.push(rd(c[h].image)):f.push(rd(c[h]))}else f=rd(c);r.url=f}return a||(e.images[this.uuid]=r),r}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?NE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LE=0;const od=new lt;class Wn extends so{constructor(e=Wn.DEFAULT_IMAGE,a=Wn.DEFAULT_MAPPING,r=Vs,c=Vs,f=Yi,h=ks,d=Ni,g=Qi,_=Wn.DEFAULT_ANISOTROPY,v=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=dl(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const r=e[a];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[a]=r}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),a||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Vs:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Vs:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ox;Wn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,a=0,r=0,c=1){an.prototype.isVector4=!0,this.x=e,this.y=a,this.z=r,this.w=c}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,r,c){return this.x=e,this.y=a,this.z=r,this.w=c,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,r=this.y,c=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*r+h[8]*c+h[12]*f,this.y=h[1]*a+h[5]*r+h[9]*c+h[13]*f,this.z=h[2]*a+h[6]*r+h[10]*c+h[14]*f,this.w=h[3]*a+h[7]*r+h[11]*c+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,r,c,f;const g=e.elements,_=g[0],v=g[4],m=g[8],S=g[1],M=g[5],R=g[9],C=g[2],y=g[6],x=g[10];if(Math.abs(v-S)<.01&&Math.abs(m-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(m+C)<.1&&Math.abs(R+y)<.1&&Math.abs(_+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const I=(_+1)/2,N=(M+1)/2,k=(x+1)/2,G=(v+S)/4,z=(m+C)/4,q=(R+y)/4;return I>N&&I>k?I<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(I),c=G/r,f=z/r):N>k?N<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(N),r=G/c,f=q/c):k<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(k),r=z/f,c=q/f),this.set(r,c,f,a),this}let B=Math.sqrt((y-R)*(y-R)+(m-C)*(m-C)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(y-R)/B,this.y=(m-C)/B,this.z=(S-v)/B,this.w=Math.acos((_+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Ee(this.x,e.x,a.x),this.y=Ee(this.y,e.y,a.y),this.z=Ee(this.z,e.z,a.z),this.w=Ee(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Ee(this.x,e,a),this.y=Ee(this.y,e,a),this.z=Ee(this.z,e,a),this.w=Ee(this.w,e,a),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this.w=e.w+(a.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends so{constructor(e=1,a=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=r.depth,this.scissor=new an(0,0,e,a),this.scissorTest=!1,this.viewport=new an(0,0,e,a);const c={width:e,height:a,depth:r.depth},f=new Wn(c);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const a={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,r=1){if(this.width!==e||this.height!==a||this.depth!==r){this.width=e,this.height=a,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=e,this.textures[c].image.height=a,this.textures[c].image.depth=r,this.textures[c].isArrayTexture=this.textures[c].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,r=e.textures.length;a<r;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},e.textures[a].image);this.textures[a].source=new Lp(c)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends OE{constructor(e=1,a=1,r={}){super(e,a,r),this.isWebGLRenderTarget=!0}}class xx extends Wn{constructor(e=null,a=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:r,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends Wn{constructor(e=null,a=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:r,depth:c},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=new lt(1/0,1/0,1/0),a=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a+=3)this.expandByPoint(Ri.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,r=e.count;a<r;a++)this.expandByPoint(Ri.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const r=Ri.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(f,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kc.copy(r.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const c=e.children;for(let f=0,h=c.length;f<h;f++)this.expandByObject(c[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,r;return e.normal.x>0?(a=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),a<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),jc.subVectors(this.max,el),Pr.subVectors(e.a,el),Ir.subVectors(e.b,el),Br.subVectors(e.c,el),Qa.subVectors(Ir,Pr),Ja.subVectors(Br,Ir),Us.subVectors(Pr,Br);let a=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Us.z,Us.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Us.z,0,-Us.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Us.y,Us.x,0];return!ld(a,Pr,Ir,Br,jc)||(a=[1,0,0,0,1,0,0,0,1],!ld(a,Pr,Ir,Br,jc))?!1:(Xc.crossVectors(Qa,Ja),a=[Xc.x,Xc.y,Xc.z],ld(a,Pr,Ir,Br,jc))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ri=new lt,kc=new ml,Pr=new lt,Ir=new lt,Br=new lt,Qa=new lt,Ja=new lt,Us=new lt,el=new lt,jc=new lt,Xc=new lt,Ls=new lt;function ld(o,e,a,r,c){for(let f=0,h=o.length-3;f<=h;f+=3){Ls.fromArray(o,f);const d=c.x*Math.abs(Ls.x)+c.y*Math.abs(Ls.y)+c.z*Math.abs(Ls.z),g=e.dot(Ls),_=a.dot(Ls),v=r.dot(Ls);if(Math.max(-Math.max(g,_,v),Math.min(g,_,v))>d)return!1}return!0}const PE=new ml,nl=new lt,cd=new lt;class Op{constructor(e=new lt,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const r=this.center;a!==void 0?r.copy(a):PE.setFromPoints(e).getCenter(r);let c=0;for(let f=0,h=e.length;f<h;f++)c=Math.max(c,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(c),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const r=this.center.distanceToSquared(e);return a.copy(e),r>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const a=nl.lengthSq();if(a>this.radius*this.radius){const r=Math.sqrt(a),c=(r-this.radius)*.5;this.center.addScaledVector(nl,c/r),this.radius+=c}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(cd)),this.expandByPoint(nl.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new lt,ud=new lt,qc=new lt,$a=new lt,fd=new lt,Yc=new lt,hd=new lt;class IE{constructor(e=new lt,a=new lt(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const r=a.dot(this.direction);return r<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ga.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,a),ga.distanceToSquared(e))}distanceSqToSegment(e,a,r,c){ud.copy(e).add(a).multiplyScalar(.5),qc.copy(a).sub(e).normalize(),$a.copy(this.origin).sub(ud);const f=e.distanceTo(a)*.5,h=-this.direction.dot(qc),d=$a.dot(this.direction),g=-$a.dot(qc),_=$a.lengthSq(),v=Math.abs(1-h*h);let m,S,M,R;if(v>0)if(m=h*g-d,S=h*d-g,R=f*v,m>=0)if(S>=-R)if(S<=R){const C=1/v;m*=C,S*=C,M=m*(m+h*S+2*d)+S*(h*m+S+2*g)+_}else S=f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+_;else S=-f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+_;else S<=-R?(m=Math.max(0,-(-h*f+d)),S=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+_):S<=R?(m=0,S=Math.min(Math.max(-f,-g),f),M=S*(S+2*g)+_):(m=Math.max(0,-(h*f+d)),S=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+_);else S=h>0?-f:f,m=Math.max(0,-(h*S+d)),M=-m*m+S*(S+2*g)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(ud).addScaledVector(qc,S),M}intersectSphere(e,a){ga.subVectors(e.center,this.origin);const r=ga.dot(this.direction),c=ga.dot(ga)-r*r,f=e.radius*e.radius;if(c>f)return null;const h=Math.sqrt(f-c),d=r-h,g=r+h;return g<0?null:d<0?this.at(g,a):this.at(d,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/a;return r>=0?r:null}intersectPlane(e,a){const r=this.distanceToPlane(e);return r===null?null:this.at(r,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let r,c,f,h,d,g;const _=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,S=this.origin;return _>=0?(r=(e.min.x-S.x)*_,c=(e.max.x-S.x)*_):(r=(e.max.x-S.x)*_,c=(e.min.x-S.x)*_),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||f>c||((f>r||isNaN(r))&&(r=f),(h<c||isNaN(c))&&(c=h),m>=0?(d=(e.min.z-S.z)*m,g=(e.max.z-S.z)*m):(d=(e.max.z-S.z)*m,g=(e.min.z-S.z)*m),r>g||d>c)||((d>r||r!==r)&&(r=d),(g<c||c!==c)&&(c=g),c<0)?null:this.at(r>=0?r:c,a)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,a,r,c,f){fd.subVectors(a,e),Yc.subVectors(r,e),hd.crossVectors(fd,Yc);let h=this.direction.dot(hd),d;if(h>0){if(c)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,e);const g=d*this.direction.dot(Yc.crossVectors($a,Yc));if(g<0)return null;const _=d*this.direction.dot(fd.cross($a));if(_<0||g+_>h)return null;const v=-d*$a.dot(hd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,a,r,c,f,h,d,g,_,v,m,S,M,R,C,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,r,c,f,h,d,g,_,v,m,S,M,R,C,y)}set(e,a,r,c,f,h,d,g,_,v,m,S,M,R,C,y){const x=this.elements;return x[0]=e,x[4]=a,x[8]=r,x[12]=c,x[1]=f,x[5]=h,x[9]=d,x[13]=g,x[2]=_,x[6]=v,x[10]=m,x[14]=S,x[3]=M,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],a[9]=r[9],a[10]=r[10],a[11]=r[11],a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],this}copyPosition(e){const a=this.elements,r=e.elements;return a[12]=r[12],a[13]=r[13],a[14]=r[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,r){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,a,r){return this.set(e.x,a.x,r.x,0,e.y,a.y,r.y,0,e.z,a.z,r.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,r=e.elements,c=1/Fr.setFromMatrixColumn(e,0).length(),f=1/Fr.setFromMatrixColumn(e,1).length(),h=1/Fr.setFromMatrixColumn(e,2).length();return a[0]=r[0]*c,a[1]=r[1]*c,a[2]=r[2]*c,a[3]=0,a[4]=r[4]*f,a[5]=r[5]*f,a[6]=r[6]*f,a[7]=0,a[8]=r[8]*h,a[9]=r[9]*h,a[10]=r[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,r=e.x,c=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),g=Math.cos(c),_=Math.sin(c),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const S=h*v,M=h*m,R=d*v,C=d*m;a[0]=g*v,a[4]=-g*m,a[8]=_,a[1]=M+R*_,a[5]=S-C*_,a[9]=-d*g,a[2]=C-S*_,a[6]=R+M*_,a[10]=h*g}else if(e.order==="YXZ"){const S=g*v,M=g*m,R=_*v,C=_*m;a[0]=S+C*d,a[4]=R*d-M,a[8]=h*_,a[1]=h*m,a[5]=h*v,a[9]=-d,a[2]=M*d-R,a[6]=C+S*d,a[10]=h*g}else if(e.order==="ZXY"){const S=g*v,M=g*m,R=_*v,C=_*m;a[0]=S-C*d,a[4]=-h*m,a[8]=R+M*d,a[1]=M+R*d,a[5]=h*v,a[9]=C-S*d,a[2]=-h*_,a[6]=d,a[10]=h*g}else if(e.order==="ZYX"){const S=h*v,M=h*m,R=d*v,C=d*m;a[0]=g*v,a[4]=R*_-M,a[8]=S*_+C,a[1]=g*m,a[5]=C*_+S,a[9]=M*_-R,a[2]=-_,a[6]=d*g,a[10]=h*g}else if(e.order==="YZX"){const S=h*g,M=h*_,R=d*g,C=d*_;a[0]=g*v,a[4]=C-S*m,a[8]=R*m+M,a[1]=m,a[5]=h*v,a[9]=-d*v,a[2]=-_*v,a[6]=M*m+R,a[10]=S-C*m}else if(e.order==="XZY"){const S=h*g,M=h*_,R=d*g,C=d*_;a[0]=g*v,a[4]=-m,a[8]=_*v,a[1]=S*m+C,a[5]=h*v,a[9]=M*m-R,a[2]=R*m-M,a[6]=d*v,a[10]=C*m+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,FE)}lookAt(e,a,r){const c=this.elements;return ai.subVectors(e,a),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ts.crossVectors(r,ai),ts.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ts.crossVectors(r,ai)),ts.normalize(),Wc.crossVectors(ai,ts),c[0]=ts.x,c[4]=Wc.x,c[8]=ai.x,c[1]=ts.y,c[5]=Wc.y,c[9]=ai.y,c[2]=ts.z,c[6]=Wc.z,c[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,c=a.elements,f=this.elements,h=r[0],d=r[4],g=r[8],_=r[12],v=r[1],m=r[5],S=r[9],M=r[13],R=r[2],C=r[6],y=r[10],x=r[14],B=r[3],I=r[7],N=r[11],k=r[15],G=c[0],z=c[4],q=c[8],D=c[12],w=c[1],V=c[5],at=c[9],ut=c[13],_t=c[2],ct=c[6],W=c[10],st=c[14],K=c[3],vt=c[7],St=c[11],Gt=c[15];return f[0]=h*G+d*w+g*_t+_*K,f[4]=h*z+d*V+g*ct+_*vt,f[8]=h*q+d*at+g*W+_*St,f[12]=h*D+d*ut+g*st+_*Gt,f[1]=v*G+m*w+S*_t+M*K,f[5]=v*z+m*V+S*ct+M*vt,f[9]=v*q+m*at+S*W+M*St,f[13]=v*D+m*ut+S*st+M*Gt,f[2]=R*G+C*w+y*_t+x*K,f[6]=R*z+C*V+y*ct+x*vt,f[10]=R*q+C*at+y*W+x*St,f[14]=R*D+C*ut+y*st+x*Gt,f[3]=B*G+I*w+N*_t+k*K,f[7]=B*z+I*V+N*ct+k*vt,f[11]=B*q+I*at+N*W+k*St,f[15]=B*D+I*ut+N*st+k*Gt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[4],c=e[8],f=e[12],h=e[1],d=e[5],g=e[9],_=e[13],v=e[2],m=e[6],S=e[10],M=e[14],R=e[3],C=e[7],y=e[11],x=e[15];return R*(+f*g*m-c*_*m-f*d*S+r*_*S+c*d*M-r*g*M)+C*(+a*g*M-a*_*S+f*h*S-c*h*M+c*_*v-f*g*v)+y*(+a*_*m-a*d*M-f*h*m+r*h*M+f*d*v-r*_*v)+x*(-c*d*v-a*g*m+a*d*S+c*h*m-r*h*S+r*g*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,r){const c=this.elements;return e.isVector3?(c[12]=e.x,c[13]=e.y,c[14]=e.z):(c[12]=e,c[13]=a,c[14]=r),this}invert(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],v=e[8],m=e[9],S=e[10],M=e[11],R=e[12],C=e[13],y=e[14],x=e[15],B=m*y*_-C*S*_+C*g*M-d*y*M-m*g*x+d*S*x,I=R*S*_-v*y*_-R*g*M+h*y*M+v*g*x-h*S*x,N=v*C*_-R*m*_+R*d*M-h*C*M-v*d*x+h*m*x,k=R*m*g-v*C*g-R*d*S+h*C*S+v*d*y-h*m*y,G=a*B+r*I+c*N+f*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=B*z,e[1]=(C*S*f-m*y*f-C*c*M+r*y*M+m*c*x-r*S*x)*z,e[2]=(d*y*f-C*g*f+C*c*_-r*y*_-d*c*x+r*g*x)*z,e[3]=(m*g*f-d*S*f-m*c*_+r*S*_+d*c*M-r*g*M)*z,e[4]=I*z,e[5]=(v*y*f-R*S*f+R*c*M-a*y*M-v*c*x+a*S*x)*z,e[6]=(R*g*f-h*y*f-R*c*_+a*y*_+h*c*x-a*g*x)*z,e[7]=(h*S*f-v*g*f+v*c*_-a*S*_-h*c*M+a*g*M)*z,e[8]=N*z,e[9]=(R*m*f-v*C*f-R*r*M+a*C*M+v*r*x-a*m*x)*z,e[10]=(h*C*f-R*d*f+R*r*_-a*C*_-h*r*x+a*d*x)*z,e[11]=(v*d*f-h*m*f-v*r*_+a*m*_+h*r*M-a*d*M)*z,e[12]=k*z,e[13]=(v*C*c-R*m*c+R*r*S-a*C*S-v*r*y+a*m*y)*z,e[14]=(R*d*c-h*C*c-R*r*g+a*C*g+h*r*y-a*d*y)*z,e[15]=(h*m*c-v*d*c+v*r*g-a*m*g-h*r*S+a*d*S)*z,this}scale(e){const a=this.elements,r=e.x,c=e.y,f=e.z;return a[0]*=r,a[4]*=c,a[8]*=f,a[1]*=r,a[5]*=c,a[9]*=f,a[2]*=r,a[6]*=c,a[10]*=f,a[3]*=r,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],c=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,r,c))}makeTranslation(e,a,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,r,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,a,-r,0,0,r,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,0,r,0,0,1,0,0,-r,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,0,r,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const r=Math.cos(a),c=Math.sin(a),f=1-r,h=e.x,d=e.y,g=e.z,_=f*h,v=f*d;return this.set(_*h+r,_*d-c*g,_*g+c*d,0,_*d+c*g,v*d+r,v*g-c*h,0,_*g-c*d,v*g+c*h,f*g*g+r,0,0,0,0,1),this}makeScale(e,a,r){return this.set(e,0,0,0,0,a,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,a,r,c,f,h){return this.set(1,r,f,0,e,1,h,0,a,c,1,0,0,0,0,1),this}compose(e,a,r){const c=this.elements,f=a._x,h=a._y,d=a._z,g=a._w,_=f+f,v=h+h,m=d+d,S=f*_,M=f*v,R=f*m,C=h*v,y=h*m,x=d*m,B=g*_,I=g*v,N=g*m,k=r.x,G=r.y,z=r.z;return c[0]=(1-(C+x))*k,c[1]=(M+N)*k,c[2]=(R-I)*k,c[3]=0,c[4]=(M-N)*G,c[5]=(1-(S+x))*G,c[6]=(y+B)*G,c[7]=0,c[8]=(R+I)*z,c[9]=(y-B)*z,c[10]=(1-(S+C))*z,c[11]=0,c[12]=e.x,c[13]=e.y,c[14]=e.z,c[15]=1,this}decompose(e,a,r){const c=this.elements;let f=Fr.set(c[0],c[1],c[2]).length();const h=Fr.set(c[4],c[5],c[6]).length(),d=Fr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),e.x=c[12],e.y=c[13],e.z=c[14],Ci.copy(this);const _=1/f,v=1/h,m=1/d;return Ci.elements[0]*=_,Ci.elements[1]*=_,Ci.elements[2]*=_,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=m,Ci.elements[9]*=m,Ci.elements[10]*=m,a.setFromRotationMatrix(Ci),r.x=f,r.y=h,r.z=d,this}makePerspective(e,a,r,c,f,h,d=Wi,g=!1){const _=this.elements,v=2*f/(a-e),m=2*f/(r-c),S=(a+e)/(a-e),M=(r+c)/(r-c);let R,C;if(g)R=f/(h-f),C=h*f/(h-f);else if(d===Wi)R=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===gu)R=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return _[0]=v,_[4]=0,_[8]=S,_[12]=0,_[1]=0,_[5]=m,_[9]=M,_[13]=0,_[2]=0,_[6]=0,_[10]=R,_[14]=C,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,a,r,c,f,h,d=Wi,g=!1){const _=this.elements,v=2/(a-e),m=2/(r-c),S=-(a+e)/(a-e),M=-(r+c)/(r-c);let R,C;if(g)R=1/(h-f),C=h/(h-f);else if(d===Wi)R=-2/(h-f),C=-(h+f)/(h-f);else if(d===gu)R=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return _[0]=v,_[4]=0,_[8]=0,_[12]=S,_[1]=0,_[5]=m,_[9]=0,_[13]=M,_[2]=0,_[6]=0,_[10]=R,_[14]=C,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const a=this.elements,r=e.elements;for(let c=0;c<16;c++)if(a[c]!==r[c])return!1;return!0}fromArray(e,a=0){for(let r=0;r<16;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e[a+9]=r[9],e[a+10]=r[10],e[a+11]=r[11],e[a+12]=r[12],e[a+13]=r[13],e[a+14]=r[14],e[a+15]=r[15],e}}const Fr=new lt,Ci=new rn,BE=new lt(0,0,0),FE=new lt(1,1,1),ts=new lt,Wc=new lt,ai=new lt,u0=new rn,f0=new pl;class Ji{constructor(e=0,a=0,r=0,c=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=r,this._order=c}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,r,c=this._order){return this._x=e,this._y=a,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,r=!0){const c=e.elements,f=c[0],h=c[4],d=c[8],g=c[1],_=c[5],v=c[9],m=c[2],S=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,_)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,r){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,a,r)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const h0=new lt,Hr=new pl,_a=new rn,Zc=new lt,il=new lt,GE=new lt,VE=new pl,d0=new lt(1,0,0),p0=new lt(0,1,0),m0=new lt(0,0,1),g0={type:"added"},kE={type:"removed"},Gr={type:"childadded",child:null},dd={type:"childremoved",child:null};class Cn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new lt,a=new Ji,r=new pl,c=new lt(1,1,1);function f(){r.setFromEuler(a,!1)}function h(){a.setFromQuaternion(r,void 0,!1)}a._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new rn},normalMatrix:{value:new de}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Hr.setFromAxisAngle(e,a),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,a){return Hr.setFromAxisAngle(e,a),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,a){return h0.copy(e).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,a,r){e.isVector3?Zc.copy(e):Zc.set(e,a,r);const c=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(il,Zc,this.up):_a.lookAt(Zc,il,this.up),this.quaternion.setFromRotationMatrix(_a),c&&(_a.extractRotation(c.matrixWorld),Hr.setFromRotationMatrix(_a),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(kE),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let r=0,c=this.children.length;r<c;r++){const h=this.children[r].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,r=[]){this[e]===a&&r.push(this);const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].getObjectsByProperty(e,a,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateMatrixWorld(e)}updateWorldMatrix(e,a){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",r={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(d=>({...d})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(e),c.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let _=0,v=g.length;_<v;_++){const m=g[_];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,_=this.material.length;g<_;g++)d.push(f(e.materials,this.material[g]));c.material=d}else c.material=f(e.materials,this.material);if(this.children.length>0){c.children=[];for(let d=0;d<this.children.length;d++)c.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){c.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];c.animations.push(f(e.animations,g))}}if(a){const d=h(e.geometries),g=h(e.materials),_=h(e.textures),v=h(e.images),m=h(e.shapes),S=h(e.skeletons),M=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),g.length>0&&(r.materials=g),_.length>0&&(r.textures=_),v.length>0&&(r.images=v),m.length>0&&(r.shapes=m),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=c,r;function h(d){const g=[];for(const _ in d){const v=d[_];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let r=0;r<e.children.length;r++){const c=e.children[r];this.add(c.clone())}return this}}Cn.DEFAULT_UP=new lt(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new lt,va=new lt,pd=new lt,xa=new lt,Vr=new lt,kr=new lt,_0=new lt,md=new lt,gd=new lt,_d=new lt,vd=new an,xd=new an,Sd=new an;class Di{constructor(e=new lt,a=new lt,r=new lt){this.a=e,this.b=a,this.c=r}static getNormal(e,a,r,c){c.subVectors(r,a),wi.subVectors(e,a),c.cross(wi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(e,a,r,c,f){wi.subVectors(c,a),va.subVectors(r,a),pd.subVectors(e,a);const h=wi.dot(wi),d=wi.dot(va),g=wi.dot(pd),_=va.dot(va),v=va.dot(pd),m=h*_-d*d;if(m===0)return f.set(0,0,0),null;const S=1/m,M=(_*g-d*v)*S,R=(h*v-d*g)*S;return f.set(1-M-R,R,M)}static containsPoint(e,a,r,c){return this.getBarycoord(e,a,r,c,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,a,r,c,f,h,d,g){return this.getBarycoord(e,a,r,c,xa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,xa.x),g.addScaledVector(h,xa.y),g.addScaledVector(d,xa.z),g)}static getInterpolatedAttribute(e,a,r,c,f,h){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,a),xd.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,c),h.setScalar(0),h.addScaledVector(vd,f.x),h.addScaledVector(xd,f.y),h.addScaledVector(Sd,f.z),h}static isFrontFacing(e,a,r,c){return wi.subVectors(r,a),va.subVectors(e,a),wi.cross(va).dot(c)<0}set(e,a,r){return this.a.copy(e),this.b.copy(a),this.c.copy(r),this}setFromPointsAndIndices(e,a,r,c){return this.a.copy(e[a]),this.b.copy(e[r]),this.c.copy(e[c]),this}setFromAttributeAndIndices(e,a,r,c){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,c),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),va.subVectors(this.a,this.b),wi.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Di.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,r,c,f){return Di.getInterpolation(e,this.a,this.b,this.c,a,r,c,f)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const r=this.a,c=this.b,f=this.c;let h,d;Vr.subVectors(c,r),kr.subVectors(f,r),md.subVectors(e,r);const g=Vr.dot(md),_=kr.dot(md);if(g<=0&&_<=0)return a.copy(r);gd.subVectors(e,c);const v=Vr.dot(gd),m=kr.dot(gd);if(v>=0&&m<=v)return a.copy(c);const S=g*m-v*_;if(S<=0&&g>=0&&v<=0)return h=g/(g-v),a.copy(r).addScaledVector(Vr,h);_d.subVectors(e,f);const M=Vr.dot(_d),R=kr.dot(_d);if(R>=0&&M<=R)return a.copy(f);const C=M*_-g*R;if(C<=0&&_>=0&&R<=0)return d=_/(_-R),a.copy(r).addScaledVector(kr,d);const y=v*R-M*m;if(y<=0&&m-v>=0&&M-R>=0)return _0.subVectors(f,c),d=(m-v)/(m-v+(M-R)),a.copy(c).addScaledVector(_0,d);const x=1/(y+C+S);return h=C*x,d=S*x,a.copy(r).addScaledVector(Vr,h).addScaledVector(kr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function yd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Te{constructor(e,a,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,r)}set(e,a,r){if(a===void 0&&r===void 0){const c=e;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(e,a,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(e,a,r,c=De.workingColorSpace){return this.r=e,this.g=a,this.b=r,De.colorSpaceToWorking(this,c),this}setHSL(e,a,r,c=De.workingColorSpace){if(e=RE(e,1),a=Ee(a,0,1),r=Ee(r,0,1),a===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+a):r+a-r*a,h=2*r-f;this.r=yd(h,f,e+1/3),this.g=yd(h,f,e),this.b=yd(h,f,e-1/3)}return De.colorSpaceToWorking(this,c),this}setStyle(e,a=vi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=c[1],d=c[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=c[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=vi){const r=yx[e.toLowerCase()];return r!==void 0?this.setHex(r,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return De.workingToColorSpace(Ln.copy(this),e),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=De.workingColorSpace){De.workingToColorSpace(Ln.copy(this),a);const r=Ln.r,c=Ln.g,f=Ln.b,h=Math.max(r,c,f),d=Math.min(r,c,f);let g,_;const v=(d+h)/2;if(d===h)g=0,_=0;else{const m=h-d;switch(_=v<=.5?m/(h+d):m/(2-h-d),h){case r:g=(c-f)/m+(c<f?6:0);break;case c:g=(f-r)/m+2;break;case f:g=(r-c)/m+4;break}g/=6}return e.h=g,e.s=_,e.l=v,e}getRGB(e,a=De.workingColorSpace){return De.workingToColorSpace(Ln.copy(this),a),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=vi){De.workingToColorSpace(Ln.copy(this),e);const a=Ln.r,r=Ln.g,c=Ln.b;return e!==vi?`color(${e} ${a.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(e,a,r){return this.getHSL(es),this.setHSL(es.h+e,es.s+a,es.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,r){return this.r=e.r+(a.r-e.r)*r,this.g=e.g+(a.g-e.g)*r,this.b=e.b+(a.b-e.b)*r,this}lerpHSL(e,a){this.getHSL(es),e.getHSL(Kc);const r=id(es.h,Kc.h,a),c=id(es.s,Kc.s,a),f=id(es.l,Kc.l,a);return this.setHSL(r,c,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,r=this.g,c=this.b,f=e.elements;return this.r=f[0]*a+f[3]*r+f[6]*c,this.g=f[1]*a+f[4]*r+f[7]*c,this.b=f[2]*a+f[5]*r+f[8]*c,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Te;Te.NAMES=yx;let jE=0;class gl extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Zr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=zd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const r=e[a];if(r===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[a]=r}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(r.blending=this.blending),this.side!==rs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==Hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(a){const f=c(e.textures),h=c(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let r=null;if(a!==null){const c=a.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=a[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mx extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new lt,Qc=new Ne;let XE=0;class Ki{constructor(e,a,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=r,this.usage=a0,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,r){e*=this.itemSize,r*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[e+c]=a.array[r+c];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,r=this.count;a<r;a++)Qc.fromBufferAttribute(this,a),Qc.applyMatrix3(e),this.setXY(a,Qc.x,Qc.y);else if(this.itemSize===3)for(let a=0,r=this.count;a<r;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix3(e),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let a=0,r=this.count;a<r;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix4(e),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let a=0,r=this.count;a<r;a++)hn.fromBufferAttribute(this,a),hn.applyNormalMatrix(e),this.setXYZ(a,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let a=0,r=this.count;a<r;a++)hn.fromBufferAttribute(this,a),hn.transformDirection(e),this.setXYZ(a,hn.x,hn.y,hn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let r=this.array[e*this.itemSize+a];return this.normalized&&(r=tl(r,this.array)),r}setComponent(e,a,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+a]=r,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=tl(a,this.array)),a}setX(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=tl(a,this.array)),a}setY(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=tl(a,this.array)),a}setZ(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=tl(a,this.array)),a}setW(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,r){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),r=qn(r,this.array)),this.array[e+0]=a,this.array[e+1]=r,this}setXYZ(e,a,r,c){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),r=qn(r,this.array),c=qn(c,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=c,this}setXYZW(e,a,r,c,f){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),r=qn(r,this.array),c=qn(c,this.array),f=qn(f,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=c,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a0&&(e.usage=this.usage),e}}class Ex extends Ki{constructor(e,a,r){super(new Uint16Array(e),a,r)}}class Tx extends Ki{constructor(e,a,r){super(new Uint32Array(e),a,r)}}class js extends Ki{constructor(e,a,r){super(new Float32Array(e),a,r)}}let qE=0;const _i=new rn,Md=new Cn,jr=new lt,si=new ml,al=new ml,yn=new lt;class Ys extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Tx:Ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,r=0){this.groups.push({start:e,count:a,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new de().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(e),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,a,r){return _i.makeTranslation(e,a,r),this.applyMatrix4(_i),this}scale(e,a,r){return _i.makeScale(e,a,r),this.applyMatrix4(_i),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const r=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new js(r,3))}else{const r=Math.min(e.length,a.count);for(let c=0;c<r;c++){const f=e[c];a.setXYZ(c,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let r=0,c=a.length;r<c;r++){const f=a[r];si.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];al.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(si.min,al.min),si.expandByPoint(yn),yn.addVectors(si.max,al.max),si.expandByPoint(yn)):(si.expandByPoint(al.min),si.expandByPoint(al.max))}si.getCenter(r);let c=0;for(let f=0,h=e.count;f<h;f++)yn.fromBufferAttribute(e,f),c=Math.max(c,r.distanceToSquared(yn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],g=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)yn.fromBufferAttribute(d,_),g&&(jr.fromBufferAttribute(e,_),yn.add(jr)),c=Math.max(c,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let q=0;q<r.count;q++)d[q]=new lt,g[q]=new lt;const _=new lt,v=new lt,m=new lt,S=new Ne,M=new Ne,R=new Ne,C=new lt,y=new lt;function x(q,D,w){_.fromBufferAttribute(r,q),v.fromBufferAttribute(r,D),m.fromBufferAttribute(r,w),S.fromBufferAttribute(f,q),M.fromBufferAttribute(f,D),R.fromBufferAttribute(f,w),v.sub(_),m.sub(_),M.sub(S),R.sub(S);const V=1/(M.x*R.y-R.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(m,-M.y).multiplyScalar(V),y.copy(m).multiplyScalar(M.x).addScaledVector(v,-R.x).multiplyScalar(V),d[q].add(C),d[D].add(C),d[w].add(C),g[q].add(y),g[D].add(y),g[w].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,D=B.length;q<D;++q){const w=B[q],V=w.start,at=w.count;for(let ut=V,_t=V+at;ut<_t;ut+=3)x(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const I=new lt,N=new lt,k=new lt,G=new lt;function z(q){k.fromBufferAttribute(c,q),G.copy(k);const D=d[q];I.copy(D),I.sub(k.multiplyScalar(k.dot(D))).normalize(),N.crossVectors(G,D);const V=N.dot(g[q])<0?-1:1;h.setXYZW(q,I.x,I.y,I.z,V)}for(let q=0,D=B.length;q<D;++q){const w=B[q],V=w.start,at=w.count;for(let ut=V,_t=V+at;ut<_t;ut+=3)z(e.getX(ut+0)),z(e.getX(ut+1)),z(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(a.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const c=new lt,f=new lt,h=new lt,d=new lt,g=new lt,_=new lt,v=new lt,m=new lt;if(e)for(let S=0,M=e.count;S<M;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);c.fromBufferAttribute(a,R),f.fromBufferAttribute(a,C),h.fromBufferAttribute(a,y),v.subVectors(h,f),m.subVectors(c,f),v.cross(m),d.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,y),d.add(v),g.add(v),_.add(v),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(y,_.x,_.y,_.z)}else for(let S=0,M=a.count;S<M;S+=3)c.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),h.fromBufferAttribute(a,S+2),v.subVectors(h,f),m.subVectors(c,f),v.cross(m),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,r=e.count;a<r;a++)yn.fromBufferAttribute(e,a),yn.normalize(),e.setXYZ(a,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,g){const _=d.array,v=d.itemSize,m=d.normalized,S=new _.constructor(g.length*v);let M=0,R=0;for(let C=0,y=g.length;C<y;C++){d.isInterleavedBufferAttribute?M=g[C]*d.data.stride+d.offset:M=g[C]*v;for(let x=0;x<v;x++)S[R++]=_[M++]}return new Ki(S,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ys,r=this.index.array,c=this.attributes;for(const d in c){const g=c[d],_=e(g,r);a.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const g=[],_=f[d];for(let v=0,m=_.length;v<m;v++){const S=_[v],M=e(S,r);g.push(M)}a.morphAttributes[d]=g}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const _ in g)g[_]!==void 0&&(e[_]=g[_]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const r=this.attributes;for(const g in r){const _=r[g];e.data.attributes[g]=_.toJSON(e.data)}const c={};let f=!1;for(const g in this.morphAttributes){const _=this.morphAttributes[g],v=[];for(let m=0,S=_.length;m<S;m++){const M=_[m];v.push(M.toJSON(e.data))}v.length>0&&(c[g]=v,f=!0)}f&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const c=e.attributes;for(const _ in c){const v=c[_];this.setAttribute(_,v.clone(a))}const f=e.morphAttributes;for(const _ in f){const v=[],m=f[_];for(let S=0,M=m.length;S<M;S++)v.push(m[S].clone(a));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,v=h.length;_<v;_++){const m=h[_];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v0=new rn,Os=new IE,Jc=new Op,x0=new lt,$c=new lt,tu=new lt,eu=new lt,Ed=new lt,nu=new lt,S0=new lt,iu=new lt;class Zi extends Cn{constructor(e=new Ys,a=new Mx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,r=Object.keys(a);if(r.length>0){const c=a[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const d=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;a.fromBufferAttribute(c,e);const d=this.morphTargetInfluences;if(f&&d){nu.set(0,0,0);for(let g=0,_=f.length;g<_;g++){const v=d[g],m=f[g];v!==0&&(Ed.fromBufferAttribute(m,e),h?nu.addScaledVector(Ed,v):nu.addScaledVector(Ed.sub(a),v))}a.add(nu)}return a}raycast(e,a){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(f),Os.copy(e.ray).recast(e.near),!(Jc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Jc,x0)===null||Os.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(v0.copy(f).invert(),Os.copy(e.ray).applyMatrix4(v0),!(r.boundingBox!==null&&Os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,a,Os)))}_computeIntersections(e,a,r){let c;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],B=Math.max(y.start,M.start),I=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=B,k=I;N<k;N+=3){const G=d.getX(N),z=d.getX(N+1),q=d.getX(N+2);c=au(this,x,e,r,_,v,m,G,z,q),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=y.materialIndex,a.push(c))}}else{const R=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=R,x=C;y<x;y+=3){const B=d.getX(y),I=d.getX(y+1),N=d.getX(y+2);c=au(this,h,e,r,_,v,m,B,I,N),c&&(c.faceIndex=Math.floor(y/3),a.push(c))}}else if(g!==void 0)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],B=Math.max(y.start,M.start),I=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let N=B,k=I;N<k;N+=3){const G=N,z=N+1,q=N+2;c=au(this,x,e,r,_,v,m,G,z,q),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=y.materialIndex,a.push(c))}}else{const R=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let y=R,x=C;y<x;y+=3){const B=y,I=y+1,N=y+2;c=au(this,h,e,r,_,v,m,B,I,N),c&&(c.faceIndex=Math.floor(y/3),a.push(c))}}}}function YE(o,e,a,r,c,f,h,d){let g;if(e.side===Yn?g=r.intersectTriangle(h,f,c,!0,d):g=r.intersectTriangle(c,f,h,e.side===rs,d),g===null)return null;iu.copy(d),iu.applyMatrix4(o.matrixWorld);const _=a.ray.origin.distanceTo(iu);return _<a.near||_>a.far?null:{distance:_,point:iu.clone(),object:o}}function au(o,e,a,r,c,f,h,d,g,_){o.getVertexPosition(d,$c),o.getVertexPosition(g,tu),o.getVertexPosition(_,eu);const v=YE(o,e,a,r,$c,tu,eu,S0);if(v){const m=new lt;Di.getBarycoord(S0,$c,tu,eu,m),c&&(v.uv=Di.getInterpolatedAttribute(c,d,g,_,m,new Ne)),f&&(v.uv1=Di.getInterpolatedAttribute(f,d,g,_,m,new Ne)),h&&(v.normal=Di.getInterpolatedAttribute(h,d,g,_,m,new lt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:g,c:_,normal:new lt,materialIndex:0};Di.getNormal($c,tu,eu,S.normal),v.face=S,v.barycoord=m}return v}class _l extends Ys{constructor(e=1,a=1,r=1,c=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:r,widthSegments:c,heightSegments:f,depthSegments:h};const d=this;c=Math.floor(c),f=Math.floor(f),h=Math.floor(h);const g=[],_=[],v=[],m=[];let S=0,M=0;R("z","y","x",-1,-1,r,a,e,h,f,0),R("z","y","x",1,-1,r,a,-e,h,f,1),R("x","z","y",1,1,e,r,a,c,h,2),R("x","z","y",1,-1,e,r,-a,c,h,3),R("x","y","z",1,-1,e,a,r,c,f,4),R("x","y","z",-1,-1,e,a,-r,c,f,5),this.setIndex(g),this.setAttribute("position",new js(_,3)),this.setAttribute("normal",new js(v,3)),this.setAttribute("uv",new js(m,2));function R(C,y,x,B,I,N,k,G,z,q,D){const w=N/z,V=k/q,at=N/2,ut=k/2,_t=G/2,ct=z+1,W=q+1;let st=0,K=0;const vt=new lt;for(let St=0;St<W;St++){const Gt=St*V-ut;for(let re=0;re<ct;re++){const be=re*w-at;vt[C]=be*B,vt[y]=Gt*I,vt[x]=_t,_.push(vt.x,vt.y,vt.z),vt[C]=0,vt[y]=0,vt[x]=G>0?1:-1,v.push(vt.x,vt.y,vt.z),m.push(re/z),m.push(1-St/q),st+=1}}for(let St=0;St<q;St++)for(let Gt=0;Gt<z;Gt++){const re=S+Gt+ct*St,be=S+Gt+ct*(St+1),P=S+(Gt+1)+ct*(St+1),ft=S+(Gt+1)+ct*St;g.push(re,be,ft),g.push(be,P,ft),K+=6}d.addGroup(M,K,D),M+=K,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(o){const e={};for(const a in o){e[a]={};for(const r in o[a]){const c=o[a][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][r]=null):e[a][r]=c.clone():Array.isArray(c)?e[a][r]=c.slice():e[a][r]=c}}return e}function Fn(o){const e={};for(let a=0;a<o.length;a++){const r=io(o[a]);for(const c in r)e[c]=r[c]}return e}function WE(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const ZE={clone:io,merge:Fn};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=WE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const h=this.uniforms[c].value;h&&h.isTexture?a.uniforms[c]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[c]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[c]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[c]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[c]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[c]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[c]={type:"m4",value:h.toArray()}:a.uniforms[c]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(a.extensions=r),a}}class Ax extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new lt,y0=new Ne,M0=new Ne;class xi extends Ax{constructor(e=50,a=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=yp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,a){return this.getViewBounds(e,y0,M0),a.subVectors(M0,y0)}setViewOffset(e,a,r,c,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(nd*.5*this.fov)/this.zoom,r=2*a,c=this.aspect*r,f=-.5*c;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,_=h.fullHeight;f+=h.offsetX*c/g,a-=h.offsetY*r/_,c*=h.width/g,r*=h.height/_}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Xr=-90,qr=1;class JE extends Cn{constructor(e,a,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new xi(Xr,qr,e,a);c.layers=this.layers,this.add(c);const f=new xi(Xr,qr,e,a);f.layers=this.layers,this.add(f);const h=new xi(Xr,qr,e,a);h.layers=this.layers,this.add(h);const d=new xi(Xr,qr,e,a);d.layers=this.layers,this.add(d);const g=new xi(Xr,qr,e,a);g.layers=this.layers,this.add(g);const _=new xi(Xr,qr,e,a);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[r,c,f,h,d,g]=a;for(const _ of a)this.remove(_);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of a)this.add(_),_.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,_,v]=this.children,m=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,c),e.render(a,f),e.setRenderTarget(r,1,c),e.render(a,h),e.setRenderTarget(r,2,c),e.render(a,d),e.setRenderTarget(r,3,c),e.render(a,g),e.setRenderTarget(r,4,c),e.render(a,_),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,c),e.render(a,v),e.setRenderTarget(m,S,M),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Rx extends Wn{constructor(e=[],a=to,r,c,f,h,d,g,_,v){super(e,a,r,c,f,h,d,g,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $E extends qs{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},c=[r,r,r,r,r,r];this.texture=new Rx(c),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new _l(5,5,5),f=new os({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:as});f.uniforms.tEquirect.value=a;const h=new Zi(c,f),d=a.minFilter;return a.minFilter===ks&&(a.minFilter=Yi),new JE(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a=!0,r=!0,c=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,r,c);e.setRenderTarget(f)}}class su extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tT={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const r of e.hand.values())this._getHandJoint(a,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,r){let c=null,f=null,h=null;const d=this._targetRay,g=this._grip,_=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const C of e.hand.values()){const y=a.getJointPose(C,r),x=this._getHandJoint(_,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=_.joints["index-finger-tip"],m=_.joints["thumb-tip"],S=v.position.distanceTo(m.position),M=.02,R=.005;_.inputState.pinching&&S>M+R?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&S<=M-R&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(c=a.getPose(e.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return d!==null&&(d.visible=c!==null),g!==null&&(g.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const r=new su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[a.jointName]=r,e.add(r)}return e.joints[a.jointName]}}class eT extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const bd=new lt,nT=new lt,iT=new de;class Bs{constructor(e=new lt(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,r,c){return this.normal.set(e,a,r),this.constant=c,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,r){const c=bd.subVectors(r,a).cross(nT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const r=e.delta(bd),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return a<0&&r>0||r<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const r=a||iT.getNormalMatrix(e),c=this.coplanarPoint(bd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Op,aT=new Ne(.5,.5),ru=new lt;class zp{constructor(e=new Bs,a=new Bs,r=new Bs,c=new Bs,f=new Bs,h=new Bs){this.planes=[e,a,r,c,f,h]}set(e,a,r,c,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(r),d[3].copy(c),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let r=0;r<6;r++)a[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,a=Wi,r=!1){const c=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],_=f[3],v=f[4],m=f[5],S=f[6],M=f[7],R=f[8],C=f[9],y=f[10],x=f[11],B=f[12],I=f[13],N=f[14],k=f[15];if(c[0].setComponents(_-h,M-v,x-R,k-B).normalize(),c[1].setComponents(_+h,M+v,x+R,k+B).normalize(),c[2].setComponents(_+d,M+m,x+C,k+I).normalize(),c[3].setComponents(_-d,M-m,x-C,k-I).normalize(),r)c[4].setComponents(g,S,y,N).normalize(),c[5].setComponents(_-g,M-S,x-y,k-N).normalize();else if(c[4].setComponents(_-g,M-S,x-y,k-N).normalize(),a===Wi)c[5].setComponents(_+g,M+S,x+y,k+N).normalize();else if(a===gu)c[5].setComponents(g,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),zs.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const a=aT.distanceTo(e.center);return zs.radius=.7071067811865476+a,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const a=this.planes,r=e.center,c=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(e){const a=this.planes;for(let r=0;r<6;r++){const c=a[r];if(ru.x=c.normal.x>0?e.max.x:e.min.x,ru.y=c.normal.y>0?e.max.y:e.min.y,ru.z=c.normal.z>0?e.max.z:e.min.z,c.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let r=0;r<6;r++)if(a[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cx extends Wn{constructor(e,a,r=Xs,c,f,h,d=Ui,g=Ui,_,v=ll,m=1){if(v!==ll&&v!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:a,depth:m};super(S,c,f,h,d,g,v,r,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class wx extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Ys{constructor(e=1,a=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:r,heightSegments:c};const f=e/2,h=a/2,d=Math.floor(r),g=Math.floor(c),_=d+1,v=g+1,m=e/d,S=a/g,M=[],R=[],C=[],y=[];for(let x=0;x<v;x++){const B=x*S-h;for(let I=0;I<_;I++){const N=I*m-f;R.push(N,-B,0),C.push(0,0,1),y.push(I/d),y.push(1-x/g)}}for(let x=0;x<g;x++)for(let B=0;B<d;B++){const I=B+_*x,N=B+_*(x+1),k=B+1+_*(x+1),G=B+1+_*x;M.push(I,N,G),M.push(N,k,G)}this.setIndex(M),this.setAttribute("position",new js(R,3)),this.setAttribute("normal",new js(C,3)),this.setAttribute("uv",new js(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class sT extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gx,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rT extends sT{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oT extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lT extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dx extends Cn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}class cT extends Dx{constructor(e,a,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}}const Ad=new rn,E0=new lt,T0=new lt;class uT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,r=this.matrix;E0.setFromMatrixPosition(e.matrixWorld),a.position.copy(E0),T0.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(T0),a.updateMatrixWorld(),Ad.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad,a.coordinateSystem,a.reversedDepth),a.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nx extends Ax{constructor(e=-1,a=1,r=1,c=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=r,this.bottom=c,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,r,c,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=c+a,g=c-a;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,g=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class fT extends uT{constructor(){super(new Nx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hT extends Dx{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new fT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dT extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function b0(o,e,a,r){const c=pT(r);switch(a){case hx:return o*e;case px:return o*e/c.components*c.byteLength;case Dp:return o*e/c.components*c.byteLength;case mx:return o*e*2/c.components*c.byteLength;case Np:return o*e*2/c.components*c.byteLength;case dx:return o*e*3/c.components*c.byteLength;case Ni:return o*e*4/c.components*c.byteLength;case Up:return o*e*4/c.components*c.byteLength;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hu:case du:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Kd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(o,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case pp:case mp:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _p:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xp:case Sp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function pT(o){switch(o){case Qi:case lx:return{byteLength:1,components:1};case rl:case cx:case hl:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case Xs:case Rp:case ya:return{byteLength:4,components:1};case ux:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let o=null,e=!1,a=null,r=null;function c(f,h){a(f,h),r=o.requestAnimationFrame(c)}return{start:function(){e!==!0&&a!==null&&(r=o.requestAnimationFrame(c),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function mT(o){const e=new WeakMap;function a(d,g){const _=d.array,v=d.usage,m=_.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,_,v),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)M=o.HALF_FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:S,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,g,_){const v=g.array,m=g.updateRanges;if(o.bindBuffer(_,d),m.length===0)o.bufferSubData(_,0,v);else{m.sort((M,R)=>M.start-R.start);let S=0;for(let M=1;M<m.length;M++){const R=m[S],C=m[M];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,m[S]=C)}m.length=S+1;for(let M=0,R=m.length;M<R;M++){const C=m[M];o.bufferSubData(_,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=e.get(d);if(_===void 0)e.set(d,a(d,g));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,d,g),_.version=d.version}}return{get:c,remove:f,update:h}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_T=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ET=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ub=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:gT,alphahash_pars_fragment:_T,alphamap_fragment:vT,alphamap_pars_fragment:xT,alphatest_fragment:ST,alphatest_pars_fragment:yT,aomap_fragment:MT,aomap_pars_fragment:ET,batching_pars_vertex:TT,batching_vertex:bT,begin_vertex:AT,beginnormal_vertex:RT,bsdfs:CT,iridescence_fragment:wT,bumpmap_pars_fragment:DT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:LT,clipping_planes_vertex:OT,color_fragment:zT,color_pars_fragment:PT,color_pars_vertex:IT,color_vertex:BT,common:FT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:GT,displacementmap_pars_vertex:VT,displacementmap_vertex:kT,emissivemap_fragment:jT,emissivemap_pars_fragment:XT,colorspace_fragment:qT,colorspace_pars_fragment:YT,envmap_fragment:WT,envmap_common_pars_fragment:ZT,envmap_pars_fragment:KT,envmap_pars_vertex:QT,envmap_physical_pars_fragment:lb,envmap_vertex:JT,fog_vertex:$T,fog_pars_vertex:tb,fog_fragment:eb,fog_pars_fragment:nb,gradientmap_pars_fragment:ib,lightmap_pars_fragment:ab,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:cb,lights_toon_pars_fragment:ub,lights_phong_fragment:fb,lights_phong_pars_fragment:hb,lights_physical_fragment:db,lights_physical_pars_fragment:pb,lights_fragment_begin:mb,lights_fragment_maps:gb,lights_fragment_end:_b,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:yb,map_fragment:Mb,map_pars_fragment:Eb,map_particle_fragment:Tb,map_particle_pars_fragment:bb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Cb,morphcolor_vertex:wb,morphnormal_vertex:Db,morphtarget_pars_vertex:Nb,morphtarget_vertex:Ub,normal_fragment_begin:Lb,normal_fragment_maps:Ob,normal_pars_fragment:zb,normal_pars_vertex:Pb,normal_vertex:Ib,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:kb,packing:jb,premultiplied_alpha_fragment:Xb,project_vertex:qb,dithering_fragment:Yb,dithering_pars_fragment:Wb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:Jb,shadowmap_vertex:$b,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:a1,specularmap_fragment:s1,specularmap_pars_fragment:r1,tonemapping_fragment:o1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:_1,backgroundCube_frag:v1,cube_vert:x1,cube_frag:S1,depth_vert:y1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:T1,equirect_vert:b1,equirect_frag:A1,linedashed_vert:R1,linedashed_frag:C1,meshbasic_vert:w1,meshbasic_frag:D1,meshlambert_vert:N1,meshlambert_frag:U1,meshmatcap_vert:L1,meshmatcap_frag:O1,meshnormal_vert:z1,meshnormal_frag:P1,meshphong_vert:I1,meshphong_frag:B1,meshphysical_vert:F1,meshphysical_frag:H1,meshtoon_vert:G1,meshtoon_frag:V1,points_vert:k1,points_frag:j1,shadow_vert:X1,shadow_frag:q1,sprite_vert:Y1,sprite_frag:W1},It={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Xi={basic:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Fn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Fn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Fn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Fn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Fn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Fn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Fn([It.common,It.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Fn([It.lights,It.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Xi.physical={uniforms:Fn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ou={r:0,b:0,g:0},Ps=new Ji,Z1=new rn;function K1(o,e,a,r,c,f,h){const d=new Te(0);let g=f===!0?0:1,_,v,m=null,S=0,M=null;function R(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?a:e).get(N)),N}function C(I){let N=!1;const k=R(I);k===null?x(d,g):k&&k.isColor&&(x(k,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(I,N){const k=R(N);k&&(k.isCubeTexture||k.mapping===Su)?(v===void 0&&(v=new Zi(new _l(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:io(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(v)),Ps.copy(N.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Ps)),v.material.toneMapped=De.getTransfer(k.colorSpace)!==ke,(m!==k||S!==k.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=k,S=k.version,M=o.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(_===void 0&&(_=new Zi(new vl(2,2),new os({name:"BackgroundMaterial",uniforms:io(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(_)),_.material.uniforms.t2D.value=k,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.toneMapped=De.getTransfer(k.colorSpace)!==ke,k.matrixAutoUpdate===!0&&k.updateMatrix(),_.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||S!==k.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=k,S=k.version,M=o.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null))}function x(I,N){I.getRGB(ou,bx(o)),r.buffers.color.setClear(ou.r,ou.g,ou.b,N,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,N=1){d.set(I),g=N,x(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(I){g=I,x(d,g)},render:C,addToRenderList:y,dispose:B}}function Q1(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=S(null);let f=c,h=!1;function d(w,V,at,ut,_t){let ct=!1;const W=m(ut,at,V);f!==W&&(f=W,_(f.object)),ct=M(w,ut,at,_t),ct&&R(w,ut,at,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,N(w,V,at,ut),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function g(){return o.createVertexArray()}function _(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function m(w,V,at){const ut=at.wireframe===!0;let _t=r[w.id];_t===void 0&&(_t={},r[w.id]=_t);let ct=_t[V.id];ct===void 0&&(ct={},_t[V.id]=ct);let W=ct[ut];return W===void 0&&(W=S(g()),ct[ut]=W),W}function S(w){const V=[],at=[],ut=[];for(let _t=0;_t<a;_t++)V[_t]=0,at[_t]=0,ut[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ut,object:w,attributes:{},index:null}}function M(w,V,at,ut){const _t=f.attributes,ct=V.attributes;let W=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){const St=_t[K];let Gt=ct[K];if(Gt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Gt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Gt=w.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;W++}return f.attributesNum!==W||f.index!==ut}function R(w,V,at,ut){const _t={},ct=V.attributes;let W=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){let St=ct[K];St===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),_t[K]=Gt,W++}f.attributes=_t,f.attributesNum=W,f.index=ut}function C(){const w=f.newAttributes;for(let V=0,at=w.length;V<at;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const at=f.newAttributes,ut=f.enabledAttributes,_t=f.attributeDivisors;at[w]=1,ut[w]===0&&(o.enableVertexAttribArray(w),ut[w]=1),_t[w]!==V&&(o.vertexAttribDivisor(w,V),_t[w]=V)}function B(){const w=f.newAttributes,V=f.enabledAttributes;for(let at=0,ut=V.length;at<ut;at++)V[at]!==w[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function I(w,V,at,ut,_t,ct,W){W===!0?o.vertexAttribIPointer(w,V,at,_t,ct):o.vertexAttribPointer(w,V,at,ut,_t,ct)}function N(w,V,at,ut){C();const _t=ut.attributes,ct=at.getAttributes(),W=V.defaultAttributeValues;for(const st in ct){const K=ct[st];if(K.location>=0){let vt=_t[st];if(vt===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const St=vt.normalized,Gt=vt.itemSize,re=e.get(vt);if(re===void 0)continue;const be=re.buffer,P=re.type,ft=re.bytesPerElement,$=P===o.INT||P===o.UNSIGNED_INT||vt.gpuType===Rp;if(vt.isInterleavedBufferAttribute){const it=vt.data,Mt=it.stride,Ut=vt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<K.locationSize;Rt++)x(K.location+Rt,it.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)y(K.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Rt=0;Rt<K.locationSize;Rt++)I(K.location+Rt,Gt/K.locationSize,P,St,Mt*ft,(Ut+Gt/K.locationSize*Rt)*ft,$)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)x(K.location+it,vt.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<K.locationSize;it++)y(K.location+it);o.bindBuffer(o.ARRAY_BUFFER,be);for(let it=0;it<K.locationSize;it++)I(K.location+it,Gt/K.locationSize,P,St,Gt*ft,Gt/K.locationSize*it*ft,$)}}else if(W!==void 0){const St=W[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}B()}function k(){q();for(const w in r){const V=r[w];for(const at in V){const ut=V[at];for(const _t in ut)v(ut[_t].object),delete ut[_t];delete V[at]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const at in V){const ut=V[at];for(const _t in ut)v(ut[_t].object),delete ut[_t];delete V[at]}delete r[w.id]}function z(w){for(const V in r){const at=r[V];if(at[w.id]===void 0)continue;const ut=at[w.id];for(const _t in ut)v(ut[_t].object),delete ut[_t];delete at[w.id]}}function q(){D(),h=!0,f!==c&&(f=c,_(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function J1(o,e,a){let r;function c(_){r=_}function f(_,v){o.drawArrays(r,_,v),a.update(v,r,1)}function h(_,v,m){m!==0&&(o.drawArraysInstanced(r,_,v,m),a.update(v,r,m))}function d(_,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,v,0,m);let M=0;for(let R=0;R<m;R++)M+=v[R];a.update(M,r,1)}function g(_,v,m,S){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<_.length;R++)h(_[R],v[R],S[R]);else{M.multiDrawArraysInstancedWEBGL(r,_,0,v,0,S,0,m);let R=0;for(let C=0;C<m;C++)R+=v[C]*S[C];a.update(R,r,1)}}this.setMode=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function $1(o,e,a,r){let c;function f(){if(c!==void 0)return c;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");c=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(z){return!(z!==Ni&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const q=z===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Qi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ya&&!q)}function g(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=a.precision!==void 0?a.precision:"highp";const v=g(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const m=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=R>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:m,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:B,maxVaryings:I,maxFragmentUniforms:N,vertexTextures:k,maxSamples:G}}function tA(o){const e=this;let a=null,r=0,c=!1,f=!1;const h=new Bs,d=new de,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const M=m.length!==0||S||r!==0||c;return c=S,r=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){a=v(m,S,0)},this.setState=function(m,S,M){const R=m.clippingPlanes,C=m.clipIntersection,y=m.clipShadows,x=o.get(m);if(!c||R===null||R.length===0||f&&!y)f?v(null):_();else{const B=f?0:r,I=B*4;let N=x.clippingState||null;g.value=N,N=v(R,S,I,M);for(let k=0;k!==I;++k)N[k]=a[k];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function _(){g.value!==a&&(g.value=a,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(m,S,M,R){const C=m!==null?m.length:0;let y=null;if(C!==0){if(y=g.value,R!==!0||y===null){const x=M+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,N=M;I!==C;++I,N+=4)h.copy(m[I]).applyMatrix4(B,d),h.normal.toArray(y,N),y[N+3]=h.constant}g.value=y,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function eA(o){let e=new WeakMap;function a(h,d){return d===kd?h.mapping=to:d===jd&&(h.mapping=eo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kd||d===jd)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new $E(g.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Wr=4,A0=[.125,.215,.35,.446,.526,.582],Gs=20,Rd=new Nx,R0=new Te;let Cd=null,wd=0,Dd=0,Nd=!1;const Fs=(1+Math.sqrt(5))/2,Yr=1/Fs,C0=[new lt(-Fs,Yr,0),new lt(Fs,Yr,0),new lt(-Yr,0,Fs),new lt(Yr,0,Fs),new lt(0,Fs,-Yr),new lt(0,Fs,Yr),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],nA=new lt;class w0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,r=.1,c=100,f={}){const{size:h=256,position:d=nA}=f;Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,c,g,d),a>0&&this._blur(g,0,0,a),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,wd,Dd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,lu(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===to||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=a||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,r={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:hl,format:Ni,colorSpace:no,depthBuffer:!1},c=D0(e,a,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,a,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(f)),this._blurMaterial=aA(f,e,a)}return c}_compileMaterial(e){const a=new Zi(this._lodPlanes[0],e);this._renderer.compile(a,Rd)}_sceneToCubeUV(e,a,r,c,f){const g=new xi(90,1,a,r),_=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,M=m.toneMapping;m.getClearColor(R0),m.toneMapping=ss,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(c),m.clearDepth(),m.setRenderTarget(null));const C=new Mx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new Zi(new _l,C);let x=!1;const B=e.background;B?B.isColor&&(C.color.copy(B),e.background=null,x=!0):(C.color.copy(R0),x=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(g.up.set(0,_[I],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+v[I],f.y,f.z)):N===1?(g.up.set(0,0,_[I]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+v[I],f.z)):(g.up.set(0,_[I],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+v[I]));const k=this._cubeSize;lu(c,N*k,I>2?k:0,k,k),m.setRenderTarget(c),x&&m.render(y,g),m.render(e,g)}y.geometry.dispose(),y.material.dispose(),m.toneMapping=M,m.autoClear=S,e.background=B}_textureToCubeUV(e,a){const r=this._renderer,c=e.mapping===to||e.mapping===eo;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const f=c?this._cubemapMaterial:this._equirectMaterial,h=new Zi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;lu(a,0,0,3*g,2*g),r.setRenderTarget(a),r.render(h,Rd)}_applyPMREM(e){const a=this._renderer,r=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=C0[(c-f-1)%C0.length];this._blur(e,f-1,f,h,d)}a.autoClear=r}_blur(e,a,r,c,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,r,c,"latitudinal",f),this._halfBlur(h,e,r,r,c,"longitudinal",f)}_halfBlur(e,a,r,c,f,h,d){const g=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Zi(this._lodPlanes[c],_),S=_.uniforms,M=this._sizeLods[r]-1,R=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Gs-1),C=f/R,y=isFinite(f)?1+Math.floor(v*C):Gs;y>Gs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gs}`);const x=[];let B=0;for(let z=0;z<Gs;++z){const q=z/C,D=Math.exp(-q*q/2);x.push(D),z===0?B+=D:z<y&&(B+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/B;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:I}=this;S.dTheta.value=R,S.mipInt.value=I-r;const N=this._sizeLods[c],k=3*N*(c>I-Wr?c-I+Wr:0),G=4*(this._cubeSize-N);lu(a,k,G,3*N,2*N),g.setRenderTarget(a),g.render(m,Rd)}}function iA(o){const e=[],a=[],r=[];let c=o;const f=o-Wr+1+A0.length;for(let h=0;h<f;h++){const d=Math.pow(2,c);a.push(d);let g=1/d;h>o-Wr?g=A0[h-o+Wr-1]:h===0&&(g=0),r.push(g);const _=1/(d-2),v=-_,m=1+_,S=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,R=6,C=3,y=2,x=1,B=new Float32Array(C*R*M),I=new Float32Array(y*R*M),N=new Float32Array(x*R*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,q=G>2?0:-1,D=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];B.set(D,C*R*G),I.set(S,y*R*G);const w=[G,G,G,G,G,G];N.set(w,x*R*G)}const k=new Ys;k.setAttribute("position",new Ki(B,C)),k.setAttribute("uv",new Ki(I,y)),k.setAttribute("faceIndex",new Ki(N,x)),e.push(k),c>Wr&&c--}return{lodPlanes:e,sizeLods:a,sigmas:r}}function D0(o,e,a){const r=new qs(o,e,a);return r.texture.mapping=Su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lu(o,e,a,r,c){o.viewport.set(e,a,r,c),o.scissor.set(e,a,r,c)}function aA(o,e,a){const r=new Float32Array(Gs),c=new lt(0,1,0);return new os({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function N0(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function U0(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sA(o){let e=new WeakMap,a=null;function r(d){if(d&&d.isTexture){const g=d.mapping,_=g===kd||g===jd,v=g===to||g===eo;if(_||v){let m=e.get(d);const S=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return a===null&&(a=new w0(o)),m=_?a.fromEquirectangular(d,m):a.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return _&&M&&M.height>0||v&&M&&c(M)?(a===null&&(a=new w0(o)),m=_?a.fromEquirectangular(d):a.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function c(d){let g=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&g++;return g===_}function f(d){const g=d.target;g.removeEventListener("dispose",f);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:h}}function rA(o){const e={};function a(r){if(e[r]!==void 0)return e[r];let c;switch(r){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(r)}return e[r]=c,c}return{has:function(r){return a(r)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(r){const c=a(r);return c===null&&ul("THREE.WebGLRenderer: "+r+" extension not supported."),c}}}function oA(o,e,a,r){const c={},f=new WeakMap;function h(m){const S=m.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete c[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function d(m,S){return c[S.id]===!0||(S.addEventListener("dispose",h),c[S.id]=!0,a.memory.geometries++),S}function g(m){const S=m.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function _(m){const S=[],M=m.index,R=m.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let I=0,N=B.length;I<N;I+=3){const k=B[I+0],G=B[I+1],z=B[I+2];S.push(k,G,G,z,z,k)}}else if(R!==void 0){const B=R.array;C=R.version;for(let I=0,N=B.length/3-1;I<N;I+=3){const k=I+0,G=I+1,z=I+2;S.push(k,G,G,z,z,k)}}else return;const y=new(vx(S)?Tx:Ex)(S,1);y.version=C;const x=f.get(m);x&&e.remove(x),f.set(m,y)}function v(m){const S=f.get(m);if(S){const M=m.index;M!==null&&S.version<M.version&&_(m)}else _(m);return f.get(m)}return{get:d,update:g,getWireframeAttribute:v}}function lA(o,e,a){let r;function c(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function g(S,M){o.drawElements(r,M,f,S*h),a.update(M,r,1)}function _(S,M,R){R!==0&&(o.drawElementsInstanced(r,M,f,S*h,R),a.update(M,r,R))}function v(S,M,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,S,0,R);let y=0;for(let x=0;x<R;x++)y+=M[x];a.update(y,r,1)}function m(S,M,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)_(S[x]/h,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,f,S,0,C,0,R);let x=0;for(let B=0;B<R;B++)x+=M[B]*C[B];a.update(x,r,1)}}this.setMode=c,this.setIndex=d,this.render=g,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function cA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:c,update:r}}function uA(o,e,a){const r=new WeakMap,c=new an;function f(h,d,g){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==m){let w=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let N=0;R===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let k=d.attributes.position.count*N,G=1;k>e.maxTextureSize&&(G=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*G*4*m),q=new xx(z,k,G,m);q.type=ya,q.needsUpdate=!0;const D=N*4;for(let V=0;V<m;V++){const at=x[V],ut=B[V],_t=I[V],ct=k*G*4*V;for(let W=0;W<at.count;W++){const st=W*D;R===!0&&(c.fromBufferAttribute(at,W),z[ct+st+0]=c.x,z[ct+st+1]=c.y,z[ct+st+2]=c.z,z[ct+st+3]=0),C===!0&&(c.fromBufferAttribute(ut,W),z[ct+st+4]=c.x,z[ct+st+5]=c.y,z[ct+st+6]=c.z,z[ct+st+7]=0),y===!0&&(c.fromBufferAttribute(_t,W),z[ct+st+8]=c.x,z[ct+st+9]=c.y,z[ct+st+10]=c.z,z[ct+st+11]=_t.itemSize===4?c.w:1)}}S={count:m,texture:q,size:new Ne(k,G)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let R=0;for(let y=0;y<_.length;y++)R+=_[y];const C=d.morphTargetsRelative?1:1-R;g.getUniforms().setValue(o,"morphTargetBaseInfluence",C),g.getUniforms().setValue(o,"morphTargetInfluences",_)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function fA(o,e,a,r){let c=new WeakMap;function f(g){const _=r.render.frame,v=g.geometry,m=e.get(g,v);if(c.get(m)!==_&&(e.update(m),c.set(m,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),c.get(g)!==_&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),c.set(g,_))),g.isSkinnedMesh){const S=g.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return m}function h(){c=new WeakMap}function d(g){const _=g.target;_.removeEventListener("dispose",d),a.remove(_.instanceMatrix),_.instanceColor!==null&&a.remove(_.instanceColor)}return{update:f,dispose:h}}const Lx=new Wn,L0=new Cx(1,1),Ox=new xx,zx=new zE,Px=new Rx,O0=[],z0=[],P0=new Float32Array(16),I0=new Float32Array(9),B0=new Float32Array(4);function ro(o,e,a){const r=o[0];if(r<=0||r>0)return o;const c=e*a;let f=O0[c];if(f===void 0&&(f=new Float32Array(c),O0[c]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function gn(o,e){if(o.length!==e.length)return!1;for(let a=0,r=o.length;a<r;a++)if(o[a]!==e[a])return!1;return!0}function _n(o,e){for(let a=0,r=e.length;a<r;a++)o[a]=e[a]}function yu(o,e){let a=z0[e];a===void 0&&(a=new Int32Array(e),z0[e]=a);for(let r=0;r!==e;++r)a[r]=o.allocateTextureUnit();return a}function hA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function dA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(gn(a,e))return;o.uniform2fv(this.addr,e),_n(a,e)}}function pA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(gn(a,e))return;o.uniform3fv(this.addr,e),_n(a,e)}}function mA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(gn(a,e))return;o.uniform4fv(this.addr,e),_n(a,e)}}function gA(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(gn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(a,e)}else{if(gn(a,r))return;B0.set(r),o.uniformMatrix2fv(this.addr,!1,B0),_n(a,r)}}function _A(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(gn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(a,e)}else{if(gn(a,r))return;I0.set(r),o.uniformMatrix3fv(this.addr,!1,I0),_n(a,r)}}function vA(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(gn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(a,e)}else{if(gn(a,r))return;P0.set(r),o.uniformMatrix4fv(this.addr,!1,P0),_n(a,r)}}function xA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function SA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(gn(a,e))return;o.uniform2iv(this.addr,e),_n(a,e)}}function yA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(gn(a,e))return;o.uniform3iv(this.addr,e),_n(a,e)}}function MA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(gn(a,e))return;o.uniform4iv(this.addr,e),_n(a,e)}}function EA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function TA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(gn(a,e))return;o.uniform2uiv(this.addr,e),_n(a,e)}}function bA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(gn(a,e))return;o.uniform3uiv(this.addr,e),_n(a,e)}}function AA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(gn(a,e))return;o.uniform4uiv(this.addr,e),_n(a,e)}}function RA(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(L0.compareFunction=_x,f=L0):f=Lx,a.setTexture2D(e||f,c)}function CA(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTexture3D(e||zx,c)}function wA(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTextureCube(e||Px,c)}function DA(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTexture2DArray(e||Ox,c)}function NA(o){switch(o){case 5126:return hA;case 35664:return dA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return yA;case 35669:case 35673:return MA;case 5125:return EA;case 36294:return TA;case 36295:return bA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return DA}}function UA(o,e){o.uniform1fv(this.addr,e)}function LA(o,e){const a=ro(e,this.size,2);o.uniform2fv(this.addr,a)}function OA(o,e){const a=ro(e,this.size,3);o.uniform3fv(this.addr,a)}function zA(o,e){const a=ro(e,this.size,4);o.uniform4fv(this.addr,a)}function PA(o,e){const a=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function IA(o,e){const a=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function BA(o,e){const a=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function FA(o,e){o.uniform1iv(this.addr,e)}function HA(o,e){o.uniform2iv(this.addr,e)}function GA(o,e){o.uniform3iv(this.addr,e)}function VA(o,e){o.uniform4iv(this.addr,e)}function kA(o,e){o.uniform1uiv(this.addr,e)}function jA(o,e){o.uniform2uiv(this.addr,e)}function XA(o,e){o.uniform3uiv(this.addr,e)}function qA(o,e){o.uniform4uiv(this.addr,e)}function YA(o,e,a){const r=this.cache,c=e.length,f=yu(a,c);gn(r,f)||(o.uniform1iv(this.addr,f),_n(r,f));for(let h=0;h!==c;++h)a.setTexture2D(e[h]||Lx,f[h])}function WA(o,e,a){const r=this.cache,c=e.length,f=yu(a,c);gn(r,f)||(o.uniform1iv(this.addr,f),_n(r,f));for(let h=0;h!==c;++h)a.setTexture3D(e[h]||zx,f[h])}function ZA(o,e,a){const r=this.cache,c=e.length,f=yu(a,c);gn(r,f)||(o.uniform1iv(this.addr,f),_n(r,f));for(let h=0;h!==c;++h)a.setTextureCube(e[h]||Px,f[h])}function KA(o,e,a){const r=this.cache,c=e.length,f=yu(a,c);gn(r,f)||(o.uniform1iv(this.addr,f),_n(r,f));for(let h=0;h!==c;++h)a.setTexture2DArray(e[h]||Ox,f[h])}function QA(o){switch(o){case 5126:return UA;case 35664:return LA;case 35665:return OA;case 35666:return zA;case 35674:return PA;case 35675:return IA;case 35676:return BA;case 5124:case 35670:return FA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return jA;case 36295:return XA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}class JA{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.setValue=NA(a.type)}}class $A{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=QA(a.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,r){const c=this.seq;for(let f=0,h=c.length;f!==h;++f){const d=c[f];d.setValue(e,a[d.id],r)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function F0(o,e){o.seq.push(e),o.map[e.id]=e}function eR(o,e,a){const r=o.name,c=r.length;for(Ud.lastIndex=0;;){const f=Ud.exec(r),h=Ud.lastIndex;let d=f[1];const g=f[2]==="]",_=f[3];if(g&&(d=d|0),_===void 0||_==="["&&h+2===c){F0(a,_===void 0?new JA(d,o,e):new $A(d,o,e));break}else{let m=a.map[d];m===void 0&&(m=new tR(d),F0(a,m)),a=m}}}class pu{constructor(e,a){this.seq=[],this.map={};const r=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(a,c),h=e.getUniformLocation(a,f.name);eR(f,h,this)}}setValue(e,a,r,c){const f=this.map[a];f!==void 0&&f.setValue(e,r,c)}setOptional(e,a,r){const c=a[r];c!==void 0&&this.setValue(e,r,c)}static upload(e,a,r,c){for(let f=0,h=a.length;f!==h;++f){const d=a[f],g=r[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,c)}}static seqWithValue(e,a){const r=[];for(let c=0,f=e.length;c!==f;++c){const h=e[c];h.id in a&&r.push(h)}return r}}function H0(o,e,a){const r=o.createShader(e);return o.shaderSource(r,a),o.compileShader(r),r}const nR=37297;let iR=0;function aR(o,e){const a=o.split(`
`),r=[],c=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=c;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return r.join(`
`)}const G0=new de;function sR(o){De._getMatrix(G0,De.workingColorSpace,o);const e=`mat3( ${G0.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case mu:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function V0(o,e,a){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+aR(o.getShaderSource(e),d)}else return f}function rR(o,e){const a=sR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function oR(o,e){let a;switch(e){case cE:a="Linear";break;case uE:a="Reinhard";break;case fE:a="Cineon";break;case hE:a="ACESFilmic";break;case pE:a="AgX";break;case mE:a="Neutral";break;case dE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const cu=new lt;function lR(){De.getLuminanceCoefficients(cu);const o=cu.x.toFixed(4),e=cu.y.toFixed(4),a=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function uR(o){const e=[];for(const a in o){const r=o[a];r!==!1&&e.push("#define "+a+" "+r)}return e.join(`
`)}function fR(o,e){const a={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(e,c),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function sl(o){return o!==""}function k0(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(o){return o.replace(hR,pR)}const dR=new Map;function pR(o,e){let a=pe[e];if(a===void 0){const r=dR.get(e);if(r!==void 0)a=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Mp(a)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(o){return o.replace(mR,gR)}function gR(o,e,a,r){let c="";for(let f=parseInt(e);f<parseInt(a);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function q0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _R(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===VM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(e="SHADOWMAP_TYPE_VSM"),e}function vR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:e="ENVMAP_TYPE_CUBE";break;case Su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function SR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case rx:e="ENVMAP_BLENDING_MULTIPLY";break;case oE:e="ENVMAP_BLENDING_MIX";break;case lE:e="ENVMAP_BLENDING_ADD";break}return e}function yR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:r,maxMip:a}}function MR(o,e,a,r){const c=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const g=_R(a),_=vR(a),v=xR(a),m=SR(a),S=yR(a),M=cR(a),R=uR(f),C=c.createProgram();let y,x,B=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(sl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(y=[q0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[q0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,R,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.envMap?"#define "+v:"",a.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ss?"#define TONE_MAPPING":"",a.toneMapping!==ss?pe.tonemapping_pars_fragment:"",a.toneMapping!==ss?oR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,rR("linearToOutputTexel",a.outputColorSpace),lR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(sl).join(`
`)),h=Mp(h),h=k0(h,a),h=j0(h,a),d=Mp(d),d=k0(d,a),d=j0(d,a),h=X0(h),d=X0(d),a.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=B+y+h,N=B+x+d,k=H0(c,c.VERTEX_SHADER,I),G=H0(c,c.FRAGMENT_SHADER,N);c.attachShader(C,k),c.attachShader(C,G),a.index0AttributeName!==void 0?c.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(C,0,"position"),c.linkProgram(C);function z(V){if(o.debug.checkShaderErrors){const at=c.getProgramInfoLog(C)||"",ut=c.getShaderInfoLog(k)||"",_t=c.getShaderInfoLog(G)||"",ct=at.trim(),W=ut.trim(),st=_t.trim();let K=!0,vt=!0;if(c.getProgramParameter(C,c.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,C,k,G);else{const St=V0(c,k,"vertex"),Gt=V0(c,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(C,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+St+`
`+Gt)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(W===""||st==="")&&(vt=!1);vt&&(V.diagnostics={runnable:K,programLog:ct,vertexShader:{log:W,prefix:y},fragmentShader:{log:st,prefix:x}})}c.deleteShader(k),c.deleteShader(G),q=new pu(c,C),D=fR(c,C)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=c.getProgramParameter(C,nR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=G,this}let ER=0;class TR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,r=e.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const r of a)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let r=a.get(e);return r===void 0&&(r=new Set,a.set(e,r)),r}_getShaderStage(e){const a=this.shaderCache;let r=a.get(e);return r===void 0&&(r=new bR(e),a.set(e,r)),r}}class bR{constructor(e){this.id=ER++,this.code=e,this.usedTimes=0}}function AR(o,e,a,r,c,f,h){const d=new Sx,g=new TR,_=new Set,v=[],m=c.logarithmicDepthBuffer,S=c.vertexTextures;let M=c.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return _.add(D),D===0?"uv":`uv${D}`}function y(D,w,V,at,ut){const _t=at.fog,ct=ut.geometry,W=D.isMeshStandardMaterial?at.environment:null,st=(D.isMeshStandardMaterial?a:e).get(D.envMap||W),K=st&&st.mapping===Su?st.image.height:null,vt=R[D.type];D.precision!==null&&(M=c.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Gt=St!==void 0?St.length:0;let re=0;ct.morphAttributes.position!==void 0&&(re=1),ct.morphAttributes.normal!==void 0&&(re=2),ct.morphAttributes.color!==void 0&&(re=3);let be,P,ft,$;if(vt){const Se=Xi[vt];be=Se.vertexShader,P=Se.fragmentShader}else be=D.vertexShader,P=D.fragmentShader,g.update(D),ft=g.getVertexShaderID(D),$=g.getFragmentShaderID(D);const it=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ut=ut.isInstancedMesh===!0,Rt=ut.isBatchedMesh===!0,Et=!!D.map,qt=!!D.matcap,O=!!st,He=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Lt=!!D.normalMap,ie=!!D.displacementMap,Ft=!!D.emissiveMap,oe=!!D.metalnessMap,je=!!D.roughnessMap,qe=D.anisotropy>0,U=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,pt=D.sheen>0,xt=D.transmission>0,ht=qe&&!!D.anisotropyMap,kt=U&&!!D.clearcoatMap,Ct=U&&!!D.clearcoatNormalMap,Wt=U&&!!D.clearcoatRoughnessMap,Kt=et&&!!D.iridescenceMap,bt=et&&!!D.iridescenceThicknessMap,Ot=pt&&!!D.sheenColorMap,ne=pt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,zt=!!D.specularColorMap,ue=!!D.specularIntensityMap,H=xt&&!!D.transmissionMap,At=xt&&!!D.thicknessMap,Dt=!!D.gradientMap,Vt=!!D.alphaMap,yt=D.alphaTest>0,gt=!!D.alphaHash,Yt=!!D.extensions;let ce=ss;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ge={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:P,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&ut._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ut.instanceColor!==null,instancingMorph:Ut&&ut.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:no,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:qt,envMap:O,envMapMode:O&&st.mapping,envMapCubeUVHeight:K,aoMap:He,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:S&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&D.normalMapType===xE,normalMapTangentSpace:Lt&&D.normalMapType===gx,metalnessMap:oe,roughnessMap:je,anisotropy:qe,anisotropyMap:ht,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:et,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:zt,specularIntensityMap:ue,transmission:xt,transmissionMap:H,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Zr&&D.alphaToCoverage===!1,alphaMap:Vt,alphaTest:yt,alphaHash:gt,combine:D.combine,mapUv:Et&&C(D.map.channel),aoMapUv:He&&C(D.aoMap.channel),lightMapUv:se&&C(D.lightMap.channel),bumpMapUv:Qt&&C(D.bumpMap.channel),normalMapUv:Lt&&C(D.normalMap.channel),displacementMapUv:ie&&C(D.displacementMap.channel),emissiveMapUv:Ft&&C(D.emissiveMap.channel),metalnessMapUv:oe&&C(D.metalnessMap.channel),roughnessMapUv:je&&C(D.roughnessMap.channel),anisotropyMapUv:ht&&C(D.anisotropyMap.channel),clearcoatMapUv:kt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&C(D.sheenRoughnessMap.channel),specularMapUv:Zt&&C(D.specularMap.channel),specularColorMapUv:zt&&C(D.specularColorMap.channel),specularIntensityMapUv:ue&&C(D.specularIntensityMap.channel),transmissionMapUv:H&&C(D.transmissionMap.channel),thicknessMapUv:At&&C(D.thicknessMap.channel),alphaMapUv:Vt&&C(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Lt||qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!ct.attributes.uv&&(Et||Vt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:ut.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===qi,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=_.has(1),Ge.vertexUv2s=_.has(2),Ge.vertexUv3s=_.has(3),_.clear(),Ge}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(B(w,D),I(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function B(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function I(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function N(D){const w=R[D.type];let V;if(w){const at=Xi[w];V=ZE.clone(at.uniforms)}else V=D.uniforms;return V}function k(D,w){let V;for(let at=0,ut=v.length;at<ut;at++){const _t=v[at];if(_t.cacheKey===w){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new MR(o,w,D,f),v.push(V)),V}function G(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function z(D){g.remove(D)}function q(){g.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:k,releaseProgram:G,releaseShaderCache:z,programs:v,dispose:q}}function RR(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function c(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:a,remove:r,update:c,dispose:f}}function CR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Y0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function W0(){const o=[];let e=0;const a=[],r=[],c=[];function f(){e=0,a.length=0,r.length=0,c.length=0}function h(m,S,M,R,C,y){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:S,material:M,groupOrder:R,renderOrder:m.renderOrder,z:C,group:y},o[e]=x):(x.id=m.id,x.object=m,x.geometry=S,x.material=M,x.groupOrder=R,x.renderOrder=m.renderOrder,x.z=C,x.group=y),e++,x}function d(m,S,M,R,C,y){const x=h(m,S,M,R,C,y);M.transmission>0?r.push(x):M.transparent===!0?c.push(x):a.push(x)}function g(m,S,M,R,C,y){const x=h(m,S,M,R,C,y);M.transmission>0?r.unshift(x):M.transparent===!0?c.unshift(x):a.unshift(x)}function _(m,S){a.length>1&&a.sort(m||CR),r.length>1&&r.sort(S||Y0),c.length>1&&c.sort(S||Y0)}function v(){for(let m=e,S=o.length;m<S;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:r,transparent:c,init:f,push:d,unshift:g,finish:v,sort:_}}function wR(){let o=new WeakMap;function e(r,c){const f=o.get(r);let h;return f===void 0?(h=new W0,o.set(r,[h])):c>=f.length?(h=new W0,f.push(h)):h=f[c],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function DR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new lt,color:new Te};break;case"SpotLight":a={position:new lt,direction:new lt,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new lt,color:new Te,distance:0,decay:0};break;case"HemisphereLight":a={direction:new lt,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":a={color:new Te,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=a,a}}}function NR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let UR=0;function LR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function OR(o){const e=new DR,a=NR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new lt);const c=new lt,f=new rn,h=new rn;function d(_){let v=0,m=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,R=0,C=0,y=0,x=0,B=0,I=0,N=0,k=0,G=0,z=0;_.sort(LR);for(let D=0,w=_.length;D<w;D++){const V=_[D],at=V.color,ut=V.intensity,_t=V.distance,ct=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ut,m+=at.g*ut,S+=at.b*ut;else if(V.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(V.sh.coefficients[W],ut);z++}else if(V.isDirectionalLight){const W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const st=V.shadow,K=a.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=V.shadow.matrix,B++}r.directional[M]=W,M++}else if(V.isSpotLight){const W=e.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(at).multiplyScalar(ut),W.distance=_t,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,r.spot[C]=W;const st=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,st.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[C]=st.matrix,V.castShadow){const K=a.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.spotShadow[C]=K,r.spotShadowMap[C]=ct,N++}C++}else if(V.isRectAreaLight){const W=e.get(V);W.color.copy(at).multiplyScalar(ut),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=W,y++}else if(V.isPointLight){const W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),W.distance=V.distance,W.decay=V.decay,V.castShadow){const st=V.shadow,K=a.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,r.pointShadow[R]=K,r.pointShadowMap[R]=ct,r.pointShadowMatrix[R]=V.shadow.matrix,I++}r.point[R]=W,R++}else if(V.isHemisphereLight){const W=e.get(V);W.skyColor.copy(V.color).multiplyScalar(ut),W.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[x]=W,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=m,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==M||q.pointLength!==R||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==x||q.numDirectionalShadows!==B||q.numPointShadows!==I||q.numSpotShadows!==N||q.numSpotMaps!==k||q.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=N+k-G,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,q.directionalLength=M,q.pointLength=R,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=x,q.numDirectionalShadows=B,q.numPointShadows=I,q.numSpotShadows=N,q.numSpotMaps=k,q.numLightProbes=z,r.version=UR++)}function g(_,v){let m=0,S=0,M=0,R=0,C=0;const y=v.matrixWorldInverse;for(let x=0,B=_.length;x<B;x++){const I=_[x];if(I.isDirectionalLight){const N=r.directional[m];N.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(y),m++}else if(I.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const N=r.rectArea[R];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),h.identity(),f.copy(I.matrixWorld),f.premultiply(y),h.extractRotation(f),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),R++}else if(I.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:g,state:r}}function Z0(o){const e=new OR(o),a=[],r=[];function c(v){_.camera=v,a.length=0,r.length=0}function f(v){a.push(v)}function h(v){r.push(v)}function d(){e.setup(a)}function g(v){e.setupView(a,v)}const _={lightsArray:a,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function zR(o){let e=new WeakMap;function a(c,f=0){const h=e.get(c);let d;return h===void 0?(d=new Z0(o),e.set(c,[d])):f>=h.length?(d=new Z0(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:a,dispose:r}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BR(o,e,a){let r=new zp;const c=new Ne,f=new Ne,h=new an,d=new oT({depthPacking:vE}),g=new lT,_={},v=a.maxTextureSize,m={[rs]:Yn,[Yn]:rs,[qi]:qi},S=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:PR,fragmentShader:IR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const R=new Ys;R.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Zi(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let x=this.type;this.render=function(G,z,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(as),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ut=x!==Sa&&this.type===Sa,_t=x===Sa&&this.type!==Sa;for(let ct=0,W=G.length;ct<W;ct++){const st=G[ct],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;c.copy(K.mapSize);const vt=K.getFrameExtents();if(c.multiply(vt),f.copy(K.mapSize),(c.x>v||c.y>v)&&(c.x>v&&(f.x=Math.floor(v/vt.x),c.x=f.x*vt.x,K.mapSize.x=f.x),c.y>v&&(f.y=Math.floor(v/vt.y),c.y=f.y*vt.y,K.mapSize.y=f.y)),K.map===null||ut===!0||_t===!0){const Gt=this.type!==Sa?{minFilter:Ui,magFilter:Ui}:{};K.map!==null&&K.map.dispose(),K.map=new qs(c.x,c.y,Gt),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Gt=0;Gt<St;Gt++){const re=K.getViewport(Gt);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),at.viewport(h),K.updateMatrices(st,Gt),r=K.getFrustum(),N(z,q,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===Sa&&B(K,q),K.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,V)};function B(G,z){const q=e.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new qs(c.x,c.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,q,S,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,q,M,C,null)}function I(G,z,q,D){let w=null;const V=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?g:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const at=w.uuid,ut=z.uuid;let _t=_[at];_t===void 0&&(_t={},_[at]=_t);let ct=_t[ut];ct===void 0&&(ct=w.clone(),_t[ut]=ct,z.addEventListener("dispose",k)),w=ct}if(w.visible=z.visible,w.wireframe=z.wireframe,D===Sa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:m[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=o.properties.get(w);at.light=q}return w}function N(G,z,q,D,w){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===Sa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const ut=e.update(G),_t=G.material;if(Array.isArray(_t)){const ct=ut.groups;for(let W=0,st=ct.length;W<st;W++){const K=ct[W],vt=_t[K.materialIndex];if(vt&&vt.visible){const St=I(G,vt,D,w);G.onBeforeShadow(o,G,z,q,ut,St,K),o.renderBufferDirect(q,null,ut,St,G,K),G.onAfterShadow(o,G,z,q,ut,St,K)}}}else if(_t.visible){const ct=I(G,_t,D,w);G.onBeforeShadow(o,G,z,q,ut,ct,null),o.renderBufferDirect(q,null,ut,ct,G,null),G.onAfterShadow(o,G,z,q,ut,ct,null)}}const at=G.children;for(let ut=0,_t=at.length;ut<_t;ut++)N(at[ut],z,q,D,w)}function k(G){G.target.removeEventListener("dispose",k);for(const q in _){const D=_[q],w=G.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const FR={[Pd]:Id,[Bd]:Gd,[Fd]:Vd,[$r]:Hd,[Id]:Pd,[Gd]:Bd,[Vd]:Fd,[Hd]:$r};function HR(o,e){function a(){let H=!1;const At=new an;let Dt=null;const Vt=new an(0,0,0,0);return{setMask:function(yt){Dt!==yt&&!H&&(o.colorMask(yt,yt,yt,yt),Dt=yt)},setLocked:function(yt){H=yt},setClear:function(yt,gt,Yt,ce,Ge){Ge===!0&&(yt*=ce,gt*=ce,Yt*=ce),At.set(yt,gt,Yt,ce),Vt.equals(At)===!1&&(o.clearColor(yt,gt,Yt,ce),Vt.copy(At))},reset:function(){H=!1,Dt=null,Vt.set(-1,0,0,0)}}}function r(){let H=!1,At=!1,Dt=null,Vt=null,yt=null;return{setReversed:function(gt){if(At!==gt){const Yt=e.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ce=yt;yt=null,this.setClear(ce)}},getReversed:function(){return At},setTest:function(gt){gt?it(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(gt){Dt!==gt&&!H&&(o.depthMask(gt),Dt=gt)},setFunc:function(gt){if(At&&(gt=FR[gt]),Vt!==gt){switch(gt){case Pd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case $r:o.depthFunc(o.LEQUAL);break;case Fd:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case Gd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=gt}},setLocked:function(gt){H=gt},setClear:function(gt){yt!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),yt=gt)},reset:function(){H=!1,Dt=null,Vt=null,yt=null,At=!1}}}function c(){let H=!1,At=null,Dt=null,Vt=null,yt=null,gt=null,Yt=null,ce=null,Ge=null;return{setTest:function(Se){H||(Se?it(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Se){At!==Se&&!H&&(o.stencilMask(Se),At=Se)},setFunc:function(Se,Je,dn){(Dt!==Se||Vt!==Je||yt!==dn)&&(o.stencilFunc(Se,Je,dn),Dt=Se,Vt=Je,yt=dn)},setOp:function(Se,Je,dn){(gt!==Se||Yt!==Je||ce!==dn)&&(o.stencilOp(Se,Je,dn),gt=Se,Yt=Je,ce=dn)},setLocked:function(Se){H=Se},setClear:function(Se){Ge!==Se&&(o.clearStencil(Se),Ge=Se)},reset:function(){H=!1,At=null,Dt=null,Vt=null,yt=null,gt=null,Yt=null,ce=null,Ge=null}}}const f=new a,h=new r,d=new c,g=new WeakMap,_=new WeakMap;let v={},m={},S=new WeakMap,M=[],R=null,C=!1,y=null,x=null,B=null,I=null,N=null,k=null,G=null,z=new Te(0,0,0),q=0,D=!1,w=null,V=null,at=null,ut=null,_t=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,st=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=st>=2);let vt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),be=new an().fromArray(Gt),P=new an().fromArray(re);function ft(H,At,Dt,Vt){const yt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(H,gt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Dt;Yt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(At+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return gt}const $={};$[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc($r),Qt(!1),Lt($v),it(o.CULL_FACE),He(as);function it(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Mt(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Ut(H,At){return m[H]!==At?(o.bindFramebuffer(H,At),m[H]=At,H===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=At),H===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(H,At){let Dt=M,Vt=!1;if(H){Dt=S.get(At),Dt===void 0&&(Dt=[],S.set(At,Dt));const yt=H.textures;if(Dt.length!==yt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Yt=yt.length;gt<Yt;gt++)Dt[gt]=o.COLOR_ATTACHMENT0+gt;Dt.length=yt.length,Vt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Dt)}function Et(H){return R!==H?(o.useProgram(H),R=H,!0):!1}const qt={[Hs]:o.FUNC_ADD,[jM]:o.FUNC_SUBTRACT,[XM]:o.FUNC_REVERSE_SUBTRACT};qt[qM]=o.MIN,qt[YM]=o.MAX;const O={[WM]:o.ZERO,[ZM]:o.ONE,[KM]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[nE]:o.SRC_ALPHA_SATURATE,[tE]:o.DST_COLOR,[JM]:o.DST_ALPHA,[QM]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[eE]:o.ONE_MINUS_DST_COLOR,[$M]:o.ONE_MINUS_DST_ALPHA,[iE]:o.CONSTANT_COLOR,[aE]:o.ONE_MINUS_CONSTANT_COLOR,[sE]:o.CONSTANT_ALPHA,[rE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(H,At,Dt,Vt,yt,gt,Yt,ce,Ge,Se){if(H===as){C===!0&&(Mt(o.BLEND),C=!1);return}if(C===!1&&(it(o.BLEND),C=!0),H!==kM){if(H!==y||Se!==D){if((x!==Hs||N!==Hs)&&(o.blendEquation(o.FUNC_ADD),x=Hs,N=Hs),Se)switch(H){case Zr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t0:o.blendFunc(o.ONE,o.ONE);break;case e0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Zr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case e0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}B=null,I=null,k=null,G=null,z.set(0,0,0),q=0,y=H,D=Se}return}yt=yt||At,gt=gt||Dt,Yt=Yt||Vt,(At!==x||yt!==N)&&(o.blendEquationSeparate(qt[At],qt[yt]),x=At,N=yt),(Dt!==B||Vt!==I||gt!==k||Yt!==G)&&(o.blendFuncSeparate(O[Dt],O[Vt],O[gt],O[Yt]),B=Dt,I=Vt,k=gt,G=Yt),(ce.equals(z)===!1||Ge!==q)&&(o.blendColor(ce.r,ce.g,ce.b,Ge),z.copy(ce),q=Ge),y=H,D=!1}function se(H,At){H.side===qi?Mt(o.CULL_FACE):it(o.CULL_FACE);let Dt=H.side===Yn;At&&(Dt=!Dt),Qt(Dt),H.blending===Zr&&H.transparent===!1?He(as):He(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const Vt=H.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(H){w!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),w=H)}function Lt(H){H!==HM?(it(o.CULL_FACE),H!==V&&(H===$v?o.cullFace(o.BACK):H===GM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),V=H}function ie(H){H!==at&&(W&&o.lineWidth(H),at=H)}function Ft(H,At,Dt){H?(it(o.POLYGON_OFFSET_FILL),(ut!==At||_t!==Dt)&&(o.polygonOffset(At,Dt),ut=At,_t=Dt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(H){H?it(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function je(H){H===void 0&&(H=o.TEXTURE0+ct-1),vt!==H&&(o.activeTexture(H),vt=H)}function qe(H,At,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+ct-1:Dt=vt);let Vt=St[Dt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[Dt]=Vt),(Vt.type!==H||Vt.texture!==At)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(H,At||$[H]),Vt.type=H,Vt.texture=At)}function U(){const H=St[vt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Kt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(H){be.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function ne(H){P.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),P.copy(H))}function Zt(H,At){let Dt=_.get(At);Dt===void 0&&(Dt=new WeakMap,_.set(At,Dt));let Vt=Dt.get(H);Vt===void 0&&(Vt=o.getUniformBlockIndex(At,H.name),Dt.set(H,Vt))}function zt(H,At){const Vt=_.get(At).get(H);g.get(At)!==Vt&&(o.uniformBlockBinding(At,Vt,H.__bindingPointIndex),g.set(At,Vt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,St={},m={},S=new WeakMap,M=[],R=null,C=!1,y=null,x=null,B=null,I=null,N=null,k=null,G=null,z=new Te(0,0,0),q=0,D=!1,w=null,V=null,at=null,ut=null,_t=null,be.set(0,0,o.canvas.width,o.canvas.height),P.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:Mt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Et,setBlending:He,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:je,bindTexture:qe,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:kt,scissor:Ot,viewport:ne,reset:ue}}function GR(o,e,a,r,c,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ne,v=new WeakMap;let m;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,b){return M?new OffscreenCanvas(U,b):_u("canvas")}function C(U,b,et){let pt=1;const xt=qe(U);if((xt.width>et||xt.height>et)&&(pt=et/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(pt*xt.width),kt=Math.floor(pt*xt.height);m===void 0&&(m=R(ht,kt));const Ct=b?R(ht,kt):m;return Ct.width=ht,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,ht,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+kt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(U,b,et,pt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=b;if(b===o.RED&&(et===o.FLOAT&&(ht=o.R32F),et===o.HALF_FLOAT&&(ht=o.R16F),et===o.UNSIGNED_BYTE&&(ht=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.R8UI),et===o.UNSIGNED_SHORT&&(ht=o.R16UI),et===o.UNSIGNED_INT&&(ht=o.R32UI),et===o.BYTE&&(ht=o.R8I),et===o.SHORT&&(ht=o.R16I),et===o.INT&&(ht=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ht=o.RG32F),et===o.HALF_FLOAT&&(ht=o.RG16F),et===o.UNSIGNED_BYTE&&(ht=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RG8UI),et===o.UNSIGNED_SHORT&&(ht=o.RG16UI),et===o.UNSIGNED_INT&&(ht=o.RG32UI),et===o.BYTE&&(ht=o.RG8I),et===o.SHORT&&(ht=o.RG16I),et===o.INT&&(ht=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),et===o.UNSIGNED_INT&&(ht=o.RGB32UI),et===o.BYTE&&(ht=o.RGB8I),et===o.SHORT&&(ht=o.RGB16I),et===o.INT&&(ht=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),et===o.UNSIGNED_INT&&(ht=o.RGBA32UI),et===o.BYTE&&(ht=o.RGBA8I),et===o.SHORT&&(ht=o.RGBA16I),et===o.INT&&(ht=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),b===o.RGBA){const kt=xt?mu:De.getTransfer(pt);et===o.FLOAT&&(ht=o.RGBA32F),et===o.HALF_FLOAT&&(ht=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ht=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function N(U,b){let et;return U?b===null||b===Xs||b===ol?et=o.DEPTH24_STENCIL8:b===ya?et=o.DEPTH32F_STENCIL8:b===rl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xs||b===ol?et=o.DEPTH_COMPONENT24:b===ya?et=o.DEPTH_COMPONENT32F:b===rl&&(et=o.DEPTH_COMPONENT16),et}function k(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ui&&U.minFilter!==Yi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function G(U){const b=U.target;b.removeEventListener("dispose",G),q(b),b.isVideoTexture&&v.delete(b)}function z(U){const b=U.target;b.removeEventListener("dispose",z),w(b)}function q(U){const b=r.get(U);if(b.__webglInit===void 0)return;const et=U.source,pt=S.get(et);if(pt){const xt=pt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(pt).length===0&&S.delete(et)}r.remove(U)}function D(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,pt=S.get(et);delete pt[b.__cacheKey],h.memory.textures--}function w(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let xt=0;xt<b.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(b.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let pt=0,xt=et.length;pt<xt;pt++){const ht=r.get(et[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(et[pt])}r.remove(U)}let V=0;function at(){V=0}function ut(){const U=V;return U>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+c.maxTextures),V+=1,U}function _t(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ct(U,b){const et=r.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function W(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}a.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function st(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}a.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function K(U,b){const et=r.get(U);if(U.version>0&&et.__version!==U.version){it(et,U,b);return}a.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const vt={[Xd]:o.REPEAT,[Vs]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},St={[Ui]:o.NEAREST,[gE]:o.NEAREST_MIPMAP_NEAREST,[Vc]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[ks]:o.LINEAR_MIPMAP_LINEAR},Gt={[SE]:o.NEVER,[AE]:o.ALWAYS,[yE]:o.LESS,[_x]:o.LEQUAL,[ME]:o.EQUAL,[bE]:o.GEQUAL,[EE]:o.GREATER,[TE]:o.NOTEQUAL};function re(U,b){if(b.type===ya&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yi||b.magFilter===ed||b.magFilter===Vc||b.magFilter===ks||b.minFilter===Yi||b.minFilter===ed||b.minFilter===Vc||b.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==Vc&&b.minFilter!==ks||b.type===ya&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,c.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function be(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",G));const pt=b.source;let xt=S.get(pt);xt===void 0&&(xt={},S.set(pt,xt));const ht=_t(b);if(ht!==U.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[ht].usedTimes++;const kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&D(b)),U.__cacheKey=ht,U.__webglTexture=xt[ht].texture}return et}function P(U,b,et){return Math.floor(Math.floor(U/et)/b)}function ft(U,b,et,pt){const ht=U.updateRanges;if(ht.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,pt,b.data);else{ht.sort((bt,Ot)=>bt.start-Ot.start);let kt=0;for(let bt=1;bt<ht.length;bt++){const Ot=ht[kt],ne=ht[bt],Zt=Ot.start+Ot.count,zt=P(ne.start,b.width,4),ue=P(Ot.start,b.width,4);ne.start<=Zt+1&&zt===ue&&P(ne.start+ne.count-1,b.width,4)===zt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++kt,ht[kt]=ne)}ht.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Ot=ht.length;bt<Ot;bt++){const ne=ht[bt],Zt=Math.floor(ne.start/4),zt=Math.ceil(ne.count/4),ue=Zt%b.width,H=Math.floor(Zt/b.width),At=zt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),a.texSubImage2D(o.TEXTURE_2D,0,ue,H,At,Dt,et,pt,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function $(U,b,et){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=be(U,b),ht=b.source;a.bindTexture(pt,U.__webglTexture,o.TEXTURE0+et);const kt=r.get(ht);if(ht.version!==kt.__version||xt===!0){a.activeTexture(o.TEXTURE0+et);const Ct=De.getPrimaries(De.workingColorSpace),Wt=b.colorSpace===is?null:De.getPrimaries(b.colorSpace),Kt=b.colorSpace===is||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=C(b.image,!1,c.maxTextureSize);bt=je(b,bt);const Ot=f.convert(b.format,b.colorSpace),ne=f.convert(b.type);let Zt=I(b.internalFormat,Ot,ne,b.colorSpace,b.isVideoTexture);re(pt,b);let zt;const ue=b.mipmaps,H=b.isVideoTexture!==!0,At=kt.__version===void 0||xt===!0,Dt=ht.dataReady,Vt=k(b,bt);if(b.isDepthTexture)Zt=N(b.format===cl,b.type),At&&(H?a.texStorage2D(o.TEXTURE_2D,1,Zt,bt.width,bt.height):a.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,null));else if(b.isDataTexture)if(ue.length>0){H&&At&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,ue[0].width,ue[0].height);for(let yt=0,gt=ue.length;yt<gt;yt++)zt=ue[yt],H?Dt&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,yt,Zt,zt.width,zt.height,0,Ot,ne,zt.data);b.generateMipmaps=!1}else H?(At&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height),Dt&&ft(b,bt,Ot,ne)):a.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&At&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,ue[0].width,ue[0].height,bt.depth);for(let yt=0,gt=ue.length;yt<gt;yt++)if(zt=ue[yt],b.format!==Ni)if(Ot!==null)if(H){if(Dt)if(b.layerUpdates.size>0){const Yt=b0(zt.width,zt.height,b.format,b.type);for(const ce of b.layerUpdates){const Ge=zt.data.subarray(ce*Yt/zt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ce,zt.width,zt.height,1,Ot,Ge)}b.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,bt.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Dt&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,bt.depth,Ot,ne,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,zt.width,zt.height,bt.depth,0,Ot,ne,zt.data)}else{H&&At&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,ue[0].width,ue[0].height);for(let yt=0,gt=ue.length;yt<gt;yt++)zt=ue[yt],b.format!==Ni?Ot!==null?H?Dt&&a.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,yt,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Dt&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Ot,ne,zt.data):a.texImage2D(o.TEXTURE_2D,yt,Zt,zt.width,zt.height,0,Ot,ne,zt.data)}else if(b.isDataArrayTexture)if(H){if(At&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,bt.width,bt.height,bt.depth),Dt)if(b.layerUpdates.size>0){const yt=b0(bt.width,bt.height,b.format,b.type);for(const gt of b.layerUpdates){const Yt=bt.data.subarray(gt*yt/bt.data.BYTES_PER_ELEMENT,(gt+1)*yt/bt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Ot,ne,Yt)}b.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isData3DTexture)H?(At&&a.texStorage3D(o.TEXTURE_3D,Vt,Zt,bt.width,bt.height,bt.depth),Dt&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)):a.texImage3D(o.TEXTURE_3D,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isFramebufferTexture){if(At)if(H)a.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height);else{let yt=bt.width,gt=bt.height;for(let Yt=0;Yt<Vt;Yt++)a.texImage2D(o.TEXTURE_2D,Yt,Zt,yt,gt,0,Ot,ne,null),yt>>=1,gt>>=1}}else if(ue.length>0){if(H&&At){const yt=qe(ue[0]);a.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}for(let yt=0,gt=ue.length;yt<gt;yt++)zt=ue[yt],H?Dt&&a.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot,ne,zt):a.texImage2D(o.TEXTURE_2D,yt,Zt,Ot,ne,zt);b.generateMipmaps=!1}else if(H){if(At){const yt=qe(bt);a.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}Dt&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,bt)}else a.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,bt);y(b)&&x(pt),kt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,et){if(b.image.length!==6)return;const pt=be(U,b),xt=b.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ht=r.get(xt);if(xt.version!==ht.__version||pt===!0){a.activeTexture(o.TEXTURE0+et);const kt=De.getPrimaries(De.workingColorSpace),Ct=b.colorSpace===is?null:De.getPrimaries(b.colorSpace),Wt=b.colorSpace===is||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!Kt&&!bt?Ot[gt]=C(b.image[gt],!0,c.maxCubemapSize):Ot[gt]=bt?b.image[gt].image:b.image[gt],Ot[gt]=je(b,Ot[gt]);const ne=Ot[0],Zt=f.convert(b.format,b.colorSpace),zt=f.convert(b.type),ue=I(b.internalFormat,Zt,zt,b.colorSpace),H=b.isVideoTexture!==!0,At=ht.__version===void 0||pt===!0,Dt=xt.dataReady;let Vt=k(b,ne);re(o.TEXTURE_CUBE_MAP,b);let yt;if(Kt){H&&At&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ue,ne.width,ne.height);for(let gt=0;gt<6;gt++){yt=Ot[gt].mipmaps;for(let Yt=0;Yt<yt.length;Yt++){const ce=yt[Yt];b.format!==Ni?Zt!==null?H?Dt&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,Zt,ce.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ue,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,Zt,zt,ce.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ue,ce.width,ce.height,0,Zt,zt,ce.data)}}}else{if(yt=b.mipmaps,H&&At){yt.length>0&&Vt++;const gt=qe(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){H?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,Zt,zt,Ot[gt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Ot[gt].width,Ot[gt].height,0,Zt,zt,Ot[gt].data);for(let Yt=0;Yt<yt.length;Yt++){const Ge=yt[Yt].image[gt].image;H?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ge.width,Ge.height,Zt,zt,Ge.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ue,Ge.width,Ge.height,0,Zt,zt,Ge.data)}}else{H?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Zt,zt,Ot[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Zt,zt,Ot[gt]);for(let Yt=0;Yt<yt.length;Yt++){const ce=yt[Yt];H?Dt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Zt,zt,ce.image[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ue,Zt,zt,ce.image[gt])}}}y(b)&&x(o.TEXTURE_CUBE_MAP),ht.__version=xt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,et,pt,xt,ht){const kt=f.convert(et.format,et.colorSpace),Ct=f.convert(et.type),Wt=I(et.internalFormat,kt,Ct,et.colorSpace),Kt=r.get(b),bt=r.get(et);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const Ot=Math.max(1,b.width>>ht),ne=Math.max(1,b.height>>ht);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?a.texImage3D(xt,ht,Wt,Ot,ne,b.depth,0,kt,Ct,null):a.texImage2D(xt,ht,Wt,Ot,ne,0,kt,Ct,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,0,ie(b)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,ht),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const pt=b.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ht=N(b.stencilBuffer,xt),kt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ie(b);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ht,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const pt=b.textures;for(let xt=0;xt<pt.length;xt++){const ht=pt[xt],kt=f.convert(ht.format,ht.colorSpace),Ct=f.convert(ht.type),Wt=I(ht.internalFormat,kt,Ct,ht.colorSpace),Kt=ie(b);et&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Wt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Wt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const xt=pt.__webglTexture,ht=ie(b);if(b.depthTexture.format===ll)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(b.depthTexture.format===cl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const b=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=pt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Rt(b.__webglFramebuffer[0],U):Rt(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(a.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ut(b.__webglDepthbuffer[pt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ht)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ut(b.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ht)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(U,b,et){const pt=r.get(U);b!==void 0&&Mt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Et(U)}function O(U){const b=U.texture,et=r.get(U),pt=r.get(b);U.addEventListener("dispose",z);const xt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),ht){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)et.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else et.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=r.get(xt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Wt=xt[Ct];et.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const Kt=f.convert(Wt.format,Wt.colorSpace),bt=f.convert(Wt.type),Ot=I(Wt.internalFormat,Kt,bt,Wt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){a.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),re(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Mt(et.__webglFramebuffer[Ct][Wt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Mt(et.__webglFramebuffer[Ct],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=xt[Ct],bt=r.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,bt.__webglTexture),re(Ot,Kt),Mt(et.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),y(Kt)&&x(Ot)}a.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ct,pt.__webglTexture),re(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Mt(et.__webglFramebuffer[Wt],U,b,o.COLOR_ATTACHMENT0,Ct,Wt);else Mt(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Ct,0);y(b)&&x(Ct),a.unbindTexture()}U.depthBuffer&&Et(U)}function He(U){const b=U.textures;for(let et=0,pt=b.length;et<pt;et++){const xt=b[et];if(y(xt)){const ht=B(U),kt=r.get(xt).__webglTexture;a.bindTexture(ht,kt),x(ht),a.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ft(U)===!1){const b=U.textures,et=U.width,pt=U.height;let xt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=r.get(U),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,et,pt,0,0,et,pt,xt,o.NEAREST),g===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ht),Qt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(U){return Math.min(c.maxSamples,U.samples)}function Ft(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function je(U,b){const et=U.colorSpace,pt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==no&&et!==is&&(De.getTransfer(et)===ke?(pt!==Ni||xt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(_.width=U.naturalWidth||U.width,_.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(_.width=U.displayWidth,_.height=U.displayHeight):(_.width=U.width,_.height=U.height),_}this.allocateTextureUnit=ut,this.resetTextureUnits=at,this.setTexture2D=ct,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=qt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function VR(o,e){function a(r,c=is){let f;const h=De.getTransfer(c);if(r===Qi)return o.UNSIGNED_BYTE;if(r===Cp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===wp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ux)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===fx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===lx)return o.BYTE;if(r===cx)return o.SHORT;if(r===rl)return o.UNSIGNED_SHORT;if(r===Rp)return o.INT;if(r===Xs)return o.UNSIGNED_INT;if(r===ya)return o.FLOAT;if(r===hl)return o.HALF_FLOAT;if(r===hx)return o.ALPHA;if(r===dx)return o.RGB;if(r===Ni)return o.RGBA;if(r===ll)return o.DEPTH_COMPONENT;if(r===cl)return o.DEPTH_STENCIL;if(r===px)return o.RED;if(r===Dp)return o.RED_INTEGER;if(r===mx)return o.RG;if(r===Np)return o.RG_INTEGER;if(r===Up)return o.RGBA_INTEGER;if(r===uu||r===fu||r===hu||r===du)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===uu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===du)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===uu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===du)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===Wd||r===Zd||r===Kd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Yd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Qd||r===Jd)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===$d)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tp||r===ep||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pp||r===mp||r===gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===pp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_p||r===vp||r===xp||r===Sp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===_p)return f.COMPRESSED_RED_RGTC1_EXT;if(r===vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ol?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:a}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const r=new wx(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,r=new os({vertexShader:kR,fragmentShader:jR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Zi(new vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qR extends so{constructor(e,a){super();const r=this;let c=null,f=1,h=null,d="local-floor",g=1,_=null,v=null,m=null,S=null,M=null,R=null;const C=typeof XRWebGLBinding<"u",y=new XR,x={},B=a.getContextAttributes();let I=null,N=null;const k=[],G=[],z=new Ne;let q=null;const D=new xi;D.viewport=new an;const w=new xi;w.viewport=new an;const V=[D,w],at=new dT;let ut=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=k[$];return it===void 0&&(it=new Td,k[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=k[$];return it===void 0&&(it=new Td,k[$]=it),it.getGripSpace()},this.getHand=function($){let it=k[$];return it===void 0&&(it=new Td,k[$]=it),it.getHandSpace()};function ct($){const it=G.indexOf($.inputSource);if(it===-1)return;const Mt=k[it];Mt!==void 0&&(Mt.update($.inputSource,$.frame,_||h),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){c.removeEventListener("select",ct),c.removeEventListener("selectstart",ct),c.removeEventListener("selectend",ct),c.removeEventListener("squeeze",ct),c.removeEventListener("squeezestart",ct),c.removeEventListener("squeezeend",ct),c.removeEventListener("end",W),c.removeEventListener("inputsourceschange",st);for(let $=0;$<k.length;$++){const it=G[$];it!==null&&(G[$]=null,k[$].disconnect(it))}ut=null,_t=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(I),M=null,S=null,m=null,c=null,N=null,ft.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function($){_=$},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return m===null&&C&&(m=new XRWebGLBinding(c,a)),m},this.getFrame=function(){return R},this.getSession=function(){return c},this.setSession=async function($){if(c=$,c!==null){if(I=e.getRenderTarget(),c.addEventListener("select",ct),c.addEventListener("selectstart",ct),c.addEventListener("selectend",ct),c.addEventListener("squeeze",ct),c.addEventListener("squeezestart",ct),c.addEventListener("squeezeend",ct),c.addEventListener("end",W),c.addEventListener("inputsourceschange",st),B.xrCompatible!==!0&&await a.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,Rt=null;B.depth&&(Rt=B.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Mt=B.stencil?cl:ll,Ut=B.stencil?ol:Xs);const Et={colorFormat:a.RGBA8,depthFormat:Rt,scaleFactor:f};m=this.getBinding(),S=m.createProjectionLayer(Et),c.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new qs(S.textureWidth,S.textureHeight,{format:Ni,type:Qi,depthTexture:new Cx(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,Mt),c.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new qs(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),_=null,h=await c.requestReferenceSpace(d),ft.setContext(c),ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st($){for(let it=0;it<$.removed.length;it++){const Mt=$.removed[it],Ut=G.indexOf(Mt);Ut>=0&&(G[Ut]=null,k[Ut].disconnect(Mt))}for(let it=0;it<$.added.length;it++){const Mt=$.added[it];let Ut=G.indexOf(Mt);if(Ut===-1){for(let Et=0;Et<k.length;Et++)if(Et>=G.length){G.push(Mt),Ut=Et;break}else if(G[Et]===null){G[Et]=Mt,Ut=Et;break}if(Ut===-1)break}const Rt=k[Ut];Rt&&Rt.connect(Mt)}}const K=new lt,vt=new lt;function St($,it,Mt){K.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Ut=K.distanceTo(vt),Rt=it.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,qt=Rt[14]/(Rt[10]-1),O=Rt[14]/(Rt[10]+1),He=(Rt[9]+1)/Rt[5],se=(Rt[9]-1)/Rt[5],Qt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=qt*Qt,Ft=qt*Lt,oe=Ut/(-Qt+Lt),je=oe*-Qt;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const qe=qt+oe,U=O+oe,b=ie-je,et=Ft+(Ut-je),pt=He*O/U*qe,xt=se*O/U*qe;$.projectionMatrix.makePerspective(b,et,pt,xt,qe,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Gt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(c===null)return;let it=$.near,Mt=$.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),at.near=w.near=D.near=it,at.far=w.far=D.far=Mt,(ut!==at.near||_t!==at.far)&&(c.updateRenderState({depthNear:at.near,depthFar:at.far}),ut=at.near,_t=at.far),at.layers.mask=$.layers.mask|6,D.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Ut=$.parent,Rt=at.cameras;Gt(at,Ut);for(let Et=0;Et<Rt.length;Et++)Gt(Rt[Et],Ut);Rt.length===2?St(at,D,w):at.projectionMatrix.copy(D.projectionMatrix),re($,at,Ut)};function re($,it,Mt){Mt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&M===null))return g},this.setFoveation=function($){g=$,S!==null&&(S.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function($){return x[$]};let be=null;function P($,it){if(v=it.getViewerPose(_||h),R=it,v!==null){const Mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ut=!1;Mt.length!==at.cameras.length&&(at.cameras.length=0,Ut=!0);for(let O=0;O<Mt.length;O++){const He=Mt[O];let se=null;if(M!==null)se=M.getViewport(He);else{const Lt=m.getViewSubImage(S,He);se=Lt.viewport,O===0&&(e.setRenderTargetTextures(N,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(N))}let Qt=V[O];Qt===void 0&&(Qt=new xi,Qt.layers.enable(O),Qt.viewport=new an,V[O]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),O===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ut===!0&&at.cameras.push(Qt)}const Rt=c.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&C){m=r.getBinding();const O=m.getDepthInformation(Mt[0]);O&&O.isValid&&O.texture&&y.init(O,c.renderState)}if(Rt&&Rt.includes("camera-access")&&C){e.state.unbindTexture(),m=r.getBinding();for(let O=0;O<Mt.length;O++){const He=Mt[O].camera;if(He){let se=x[He];se||(se=new wx,x[He]=se);const Qt=m.getCameraImage(He);se.sourceTexture=Qt}}}}for(let Mt=0;Mt<k.length;Mt++){const Ut=G[Mt],Rt=k[Mt];Ut!==null&&Rt!==void 0&&Rt.update(Ut,it,_||h)}be&&be($,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),R=null}const ft=new Ux;ft.setAnimationLoop(P),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Is=new Ji,YR=new rn;function WR(o,e){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,bx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function c(y,x,B,I,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),m(y,x)):x.isMeshPhongMaterial?(f(y,x),v(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,N)):x.isMeshMatcapMaterial?(f(y,x),R(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),C(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?g(y,x,B,I):x.isSpriteMaterial?_(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Yn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Yn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const B=e.get(x),I=B.envMap,N=B.envMapRotation;I&&(y.envMap.value=I,Is.copy(N),Is.x*=-1,Is.y*=-1,Is.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),y.envMapRotation.value.setFromMatrix4(YR.makeRotationFromEuler(Is)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function g(y,x,B,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*B,y.scale.value=I*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,B){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const B=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function ZR(o,e,a,r){let c={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(B,I){const N=I.program;r.uniformBlockBinding(B,N)}function _(B,I){let N=c[B.id];N===void 0&&(R(B),N=v(B),c[B.id]=N,B.addEventListener("dispose",y));const k=I.program;r.updateUBOMapping(B,k);const G=e.render.frame;f[B.id]!==G&&(S(B),f[B.id]=G)}function v(B){const I=m();B.__bindingPointIndex=I;const N=o.createBuffer(),k=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,k,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,N),N}function m(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const I=c[B.id],N=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let G=0,z=N.length;G<z;G++){const q=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,w=q.length;D<w;D++){const V=q[D];if(M(V,G,D,k)===!0){const at=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let ct=0;ct<ut.length;ct++){const W=ut[ct],st=C(W);typeof W=="number"||typeof W=="boolean"?(V.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,at+_t,V.__data)):W.isMatrix3?(V.__data[0]=W.elements[0],V.__data[1]=W.elements[1],V.__data[2]=W.elements[2],V.__data[3]=0,V.__data[4]=W.elements[3],V.__data[5]=W.elements[4],V.__data[6]=W.elements[5],V.__data[7]=0,V.__data[8]=W.elements[6],V.__data[9]=W.elements[7],V.__data[10]=W.elements[8],V.__data[11]=0):(W.toArray(V.__data,_t),_t+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,I,N,k){const G=B.value,z=I+"_"+N;if(k[z]===void 0)return typeof G=="number"||typeof G=="boolean"?k[z]=G:k[z]=G.clone(),!0;{const q=k[z];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return k[z]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function R(B){const I=B.uniforms;let N=0;const k=16;for(let z=0,q=I.length;z<q;z++){const D=Array.isArray(I[z])?I[z]:[I[z]];for(let w=0,V=D.length;w<V;w++){const at=D[w],ut=Array.isArray(at.value)?at.value:[at.value];for(let _t=0,ct=ut.length;_t<ct;_t++){const W=ut[_t],st=C(W),K=N%k,vt=K%st.boundary,St=K+vt;N+=vt,St!==0&&k-St<st.storage&&(N+=k-St),at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=N,N+=st.storage}}}const G=N%k;return G>0&&(N+=k-G),B.__size=N,B.__cache={},this}function C(B){const I={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(I.boundary=4,I.storage=4):B.isVector2?(I.boundary=8,I.storage=8):B.isVector3||B.isColor?(I.boundary=16,I.storage=12):B.isVector4?(I.boundary=16,I.storage=16):B.isMatrix3?(I.boundary=48,I.storage=48):B.isMatrix4?(I.boundary=64,I.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),I}function y(B){const I=B.target;I.removeEventListener("dispose",y);const N=h.indexOf(I.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(c[I.id]),delete c[I.id],delete f[I.id]}function x(){for(const B in c)o.deleteBuffer(c[B]);h=[],c={},f={}}return{bind:g,update:_,dispose:x}}class KR{constructor(e={}){const{canvas:a=CE(),context:r=null,depth:c=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const R=new Uint32Array(4),C=new Int32Array(4);let y=null,x=null;const B=[],I=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let k=!1;this._outputColorSpace=vi;let G=0,z=0,q=null,D=-1,w=null;const V=new an,at=new an;let ut=null;const _t=new Te(0);let ct=0,W=a.width,st=a.height,K=1,vt=null,St=null;const Gt=new an(0,0,W,st),re=new an(0,0,W,st);let be=!1;const P=new zp;let ft=!1,$=!1;const it=new rn,Mt=new lt,Ut=new an,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function qt(){return q===null?K:1}let O=r;function He(A,Z){return a.getContext(A,Z)}try{const A={alpha:!0,depth:c,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Ap}`),a.addEventListener("webglcontextlost",Dt,!1),a.addEventListener("webglcontextrestored",Vt,!1),a.addEventListener("webglcontextcreationerror",yt,!1),O===null){const Z="webgl2";if(O=He(Z,A),O===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,Qt,Lt,ie,Ft,oe,je,qe,U,b,et,pt,xt,ht,kt,Ct,Wt,Kt,bt,Ot,ne,Zt,zt,ue;function H(){se=new rA(O),se.init(),Zt=new VR(O,se),Qt=new $1(O,se,e,Zt),Lt=new HR(O,se),Qt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ie=new cA(O),Ft=new RR,oe=new GR(O,se,Lt,Ft,Qt,Zt,ie),je=new eA(N),qe=new sA(N),U=new mT(O),zt=new Q1(O,U),b=new oA(O,U,ie,zt),et=new fA(O,b,U,ie),bt=new uA(O,Qt,oe),Ct=new tA(Ft),pt=new AR(N,je,qe,se,Qt,zt,Ct),xt=new WR(N,Ft),ht=new wR,kt=new zR(se),Kt=new K1(N,je,qe,Lt,et,M,g),Wt=new BR(N,et,Qt),ue=new ZR(O,ie,Qt,Lt),Ot=new J1(O,se,ie),ne=new lA(O,se,ie),ie.programs=pt.programs,N.capabilities=Qt,N.extensions=se,N.properties=Ft,N.renderLists=ht,N.shadowMap=Wt,N.state=Lt,N.info=ie}H();const At=new qR(N,O);this.xr=At,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(W,st,!1))},this.getSize=function(A){return A.set(W,st)},this.setSize=function(A,Z,rt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,st=Z,a.width=Math.floor(A*K),a.height=Math.floor(Z*K),rt===!0&&(a.style.width=A+"px",a.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(W*K,st*K).floor()},this.setDrawingBufferSize=function(A,Z,rt){W=A,st=Z,K=rt,a.width=Math.floor(A*rt),a.height=Math.floor(Z*rt),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Gt)},this.setViewport=function(A,Z,rt,ot){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,Z,rt,ot),Lt.viewport(V.copy(Gt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Z,rt,ot){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Z,rt,ot),Lt.scissor(at.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){Lt.setScissorTest(be=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,rt=!0){let ot=0;if(A){let Q=!1;if(q!==null){const Tt=q.texture.format;Q=Tt===Up||Tt===Np||Tt===Dp}if(Q){const Tt=q.texture.type,Pt=Tt===Qi||Tt===Xs||Tt===rl||Tt===ol||Tt===Cp||Tt===wp,Bt=Kt.getClearColor(),wt=Kt.getClearAlpha(),jt=Bt.r,ee=Bt.g,$t=Bt.b;Pt?(R[0]=jt,R[1]=ee,R[2]=$t,R[3]=wt,O.clearBufferuiv(O.COLOR,0,R)):(C[0]=jt,C[1]=ee,C[2]=$t,C[3]=wt,O.clearBufferiv(O.COLOR,0,C))}else ot|=O.COLOR_BUFFER_BIT}Z&&(ot|=O.DEPTH_BUFFER_BIT),rt&&(ot|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Dt,!1),a.removeEventListener("webglcontextrestored",Vt,!1),a.removeEventListener("webglcontextcreationerror",yt,!1),Kt.dispose(),ht.dispose(),kt.dispose(),Ft.dispose(),je.dispose(),qe.dispose(),et.dispose(),zt.dispose(),ue.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",dn),At.removeEventListener("sessionend",wn),$i.stop()};function Dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=ie.autoReset,Z=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,Q=Wt.type;H(),ie.autoReset=A,Wt.enabled=Z,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=Q}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const Z=A.target;Z.removeEventListener("dispose",gt),Yt(Z)}function Yt(A){ce(A),Ft.remove(A)}function ce(A){const Z=Ft.get(A).programs;Z!==void 0&&(Z.forEach(function(rt){pt.releaseProgram(rt)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,rt,ot,Q,Tt){Z===null&&(Z=Rt);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Sl(A,Z,rt,ot,Q);Lt.setMaterial(ot,Pt);let wt=rt.index,jt=1;if(ot.wireframe===!0){if(wt=b.getWireframeAttribute(rt),wt===void 0)return;jt=2}const ee=rt.drawRange,$t=rt.attributes.position;let _e=ee.start*jt,ze=(ee.start+ee.count)*jt;Tt!==null&&(_e=Math.max(_e,Tt.start*jt),ze=Math.min(ze,(Tt.start+Tt.count)*jt)),wt!==null?(_e=Math.max(_e,0),ze=Math.min(ze,wt.count)):$t!=null&&(_e=Math.max(_e,0),ze=Math.min(ze,$t.count));const Ke=ze-_e;if(Ke<0||Ke===1/0)return;zt.setup(Q,ot,Bt,rt,wt);let Ue,Re=Ot;if(wt!==null&&(Ue=U.get(wt),Re=ne,Re.setIndex(Ue)),Q.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*qt()),Re.setMode(O.LINES)):Re.setMode(O.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*qt()),Q.isLineSegments?Re.setMode(O.LINES):Q.isLineLoop?Re.setMode(O.LINE_LOOP):Re.setMode(O.LINE_STRIP)}else Q.isPoints?Re.setMode(O.POINTS):Q.isSprite&&Re.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Le=Q._multiDrawCounts,me=Q._multiDrawCount,pn=wt?U.get(wt).bytesPerElement:1,Zn=Ft.get(ot).currentProgram.getUniforms();for(let Ce=0;Ce<me;Ce++)Zn.setValue(O,"_gl_DrawID",Ce),Re.render(te[Ce]/pn,Le[Ce])}else if(Q.isInstancedMesh)Re.renderInstances(_e,Ke,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,te);Re.renderInstances(_e,Ke,Le)}else Re.render(_e,Ke)};function Ge(A,Z,rt){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,oi(A,Z,rt),A.side=rs,A.needsUpdate=!0,oi(A,Z,rt),A.side=qi):oi(A,Z,rt)}this.compile=function(A,Z,rt=null){rt===null&&(rt=A),x=kt.get(rt),x.init(Z),I.push(x),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),A!==rt&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ot=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){const Bt=Tt[Pt];Ge(Bt,rt,Q),ot.add(Bt)}else Ge(Tt,rt,Q),ot.add(Tt)}),x=I.pop(),ot},this.compileAsync=function(A,Z,rt=null){const ot=this.compile(A,Z,rt);return new Promise(Q=>{function Tt(){if(ot.forEach(function(Pt){Ft.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){Q(A);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Se=null;function Je(A){Se&&Se(A)}function dn(){$i.stop()}function wn(){$i.start()}const $i=new Ux;$i.setAnimationLoop(Je),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){Se=A,At.setAnimationLoop(A),A===null?$i.stop():$i.start()},At.addEventListener("sessionstart",dn),At.addEventListener("sessionend",wn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,Z,q),x=kt.get(A,I.length),x.init(Z),I.push(x),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),P.setFromProjectionMatrix(it,Wi,Z.reversedDepth),$=this.localClippingEnabled,ft=Ct.init(this.clippingPlanes,$),y=ht.get(A,B.length),y.init(),B.push(y),At.enabled===!0&&At.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&oo(Tt,Z,-1/0,N.sortObjects)}oo(A,Z,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(vt,St),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Kt.addToRenderList(y,A),this.info.render.frame++,ft===!0&&Ct.beginShadows();const rt=x.state.shadowsArray;Wt.render(rt,A,Z),ft===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(x.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++){const wt=Tt[Pt];ls(ot,Q,A,wt)}Et&&Kt.render(A);for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++){const wt=Tt[Pt];xl(y,A,wt,wt.viewport)}}else Q.length>0&&ls(ot,Q,A,Z),Et&&Kt.render(A),xl(y,A,Z);q!==null&&z===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(N,A,Z),zt.resetDefaultState(),D=-1,w=null,I.pop(),I.length>0?(x=I[I.length-1],ft===!0&&Ct.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function oo(A,Z,rt,ot){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||P.intersectsSprite(A)){ot&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(it);const Pt=et.update(A),Bt=A.material;Bt.visible&&y.push(A,Pt,Bt,rt,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||P.intersectsObject(A))){const Pt=et.update(A),Bt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ut.copy(Pt.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(it)),Array.isArray(Bt)){const wt=Pt.groups;for(let jt=0,ee=wt.length;jt<ee;jt++){const $t=wt[jt],_e=Bt[$t.materialIndex];_e&&_e.visible&&y.push(A,Pt,_e,rt,Ut.z,$t)}}else Bt.visible&&y.push(A,Pt,Bt,rt,Ut.z,null)}}const Tt=A.children;for(let Pt=0,Bt=Tt.length;Pt<Bt;Pt++)oo(Tt[Pt],Z,rt,ot)}function xl(A,Z,rt,ot){const Q=A.opaque,Tt=A.transmissive,Pt=A.transparent;x.setupLightsView(rt),ft===!0&&Ct.setGlobalState(N.clippingPlanes,rt),ot&&Lt.viewport(V.copy(ot)),Q.length>0&&ta(Q,Z,rt),Tt.length>0&&ta(Tt,Z,rt),Pt.length>0&&ta(Pt,Z,rt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ls(A,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new qs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?hl:Qi,minFilter:ks,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||V;Tt.setSize(Pt.z*N.transmissionResolutionScale,Pt.w*N.transmissionResolutionScale);const Bt=N.getRenderTarget(),wt=N.getActiveCubeFace(),jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(_t),ct=N.getClearAlpha(),ct<1&&N.setClearColor(16777215,.5),N.clear(),Et&&Kt.render(rt);const ee=N.toneMapping;N.toneMapping=ss;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),ft===!0&&Ct.setGlobalState(N.clippingPlanes,ot),ta(A,rt,ot),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let ze=0,Ke=Z.length;ze<Ke;ze++){const Ue=Z[ze],Re=Ue.object,te=Ue.geometry,Le=Ue.material,me=Ue.group;if(Le.side===qi&&Re.layers.test(ot.layers)){const pn=Le.side;Le.side=Yn,Le.needsUpdate=!0,cs(Re,rt,ot,te,Le,me),Le.side=pn,Le.needsUpdate=!0,_e=!0}}_e===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Bt,wt,jt),N.setClearColor(_t,ct),$t!==void 0&&(ot.viewport=$t),N.toneMapping=ee}function ta(A,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=A.length;Q<Tt;Q++){const Pt=A[Q],Bt=Pt.object,wt=Pt.geometry,jt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(rt.layers)&&cs(Bt,Z,rt,wt,ee,jt)}}function cs(A,Z,rt,ot,Q,Tt){A.onBeforeRender(N,Z,rt,ot,Q,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(N,Z,rt,ot,A,Tt),Q.transparent===!0&&Q.side===qi&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,N.renderBufferDirect(rt,Z,ot,Q,A,Tt),Q.side=rs,Q.needsUpdate=!0,N.renderBufferDirect(rt,Z,ot,Q,A,Tt),Q.side=qi):N.renderBufferDirect(rt,Z,ot,Q,A,Tt),A.onAfterRender(N,Z,rt,ot,Q,Tt)}function oi(A,Z,rt){Z.isScene!==!0&&(Z=Rt);const ot=Ft.get(A),Q=x.state.lights,Tt=x.state.shadowsArray,Pt=Q.state.version,Bt=pt.getParameters(A,Q.state,Tt,Z,rt),wt=pt.getProgramCacheKey(Bt);let jt=ot.programs;ot.environment=A.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(A.isMeshStandardMaterial?qe:je).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",gt),jt=new Map,ot.programs=jt);let ee=jt.get(wt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Pt)return Ea(A,Bt),ee}else Bt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Bt,N),ee=pt.acquireProgram(Bt,wt),jt.set(wt,ee),ot.uniforms=Bt.uniforms;const $t=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Ea(A,Bt),ot.needsLights=yl(A),ot.lightsStateVersion=Pt,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function us(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=pu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ea(A,Z){const rt=Ft.get(A);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Sl(A,Z,rt,ot,Q){Z.isScene!==!0&&(Z=Rt),oe.resetTextureUnits();const Tt=Z.fog,Pt=ot.isMeshStandardMaterial?Z.environment:null,Bt=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:no,wt=(ot.isMeshStandardMaterial?qe:je).get(ot.envMap||Pt),jt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,ze=!!rt.morphAttributes.color;let Ke=ss;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=N.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,te=Ft.get(ot),Le=x.state.lights;if(ft===!0&&($===!0||A!==w)){const tn=A===w&&ot.id===D;Ct.setState(ot,A,tn)}let me=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==Bt||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==wt||ot.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==jt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==_e||te.morphColors!==ze||te.toneMapping!==Ke||te.morphTargetsCount!==Re)&&(me=!0):(me=!0,te.__version=ot.version);let pn=te.currentProgram;me===!0&&(pn=oi(ot,Z,Q));let Zn=!1,Ce=!1,Ta=!1;const Ye=pn.getUniforms(),On=te.uniforms;if(Lt.useProgram(pn.program)&&(Zn=!0,Ce=!0,Ta=!0),ot.id!==D&&(D=ot.id,Ce=!0),Zn||w!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ye.setValue(O,"projectionMatrix",A.projectionMatrix),Ye.setValue(O,"viewMatrix",A.matrixWorldInverse);const Dn=Ye.map.cameraPosition;Dn!==void 0&&Dn.setValue(O,Mt.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&Ye.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ye.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Ce=!0,Ta=!0)}if(Q.isSkinnedMesh){Ye.setOptional(O,Q,"bindMatrix"),Ye.setOptional(O,Q,"bindMatrixInverse");const tn=Q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ye.setValue(O,"boneTexture",tn.boneTexture,oe))}Q.isBatchedMesh&&(Ye.setOptional(O,Q,"batchingTexture"),Ye.setValue(O,"batchingTexture",Q._matricesTexture,oe),Ye.setOptional(O,Q,"batchingIdTexture"),Ye.setValue(O,"batchingIdTexture",Q._indirectTexture,oe),Ye.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ye.setValue(O,"batchingColorTexture",Q._colorsTexture,oe));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&bt.update(Q,rt,pn),(Ce||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Ye.setValue(O,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(On.envMap.value=wt,On.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(On.envMapIntensity.value=Z.environmentIntensity),Ce&&(Ye.setValue(O,"toneMappingExposure",N.toneMappingExposure),te.needsLights&&Mu(On,Ta),Tt&&ot.fog===!0&&xt.refreshFogUniforms(On,Tt),xt.refreshMaterialUniforms(On,ot,K,st,x.state.transmissionRenderTarget[A.id]),pu.upload(O,us(te),On,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(pu.upload(O,us(te),On,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ye.setValue(O,"center",Q.center),Ye.setValue(O,"modelViewMatrix",Q.modelViewMatrix),Ye.setValue(O,"normalMatrix",Q.normalMatrix),Ye.setValue(O,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const tn=ot.uniformsGroups;for(let Dn=0,Ws=tn.length;Dn<Ws;Dn++){const Li=tn[Dn];ue.update(Li,pn),ue.bind(Li,pn)}}return pn}function Mu(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Z,rt){const ot=Ft.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=Z,Ft.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const rt=Ft.get(A);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const lo=O.createFramebuffer();this.setRenderTarget=function(A,Z=0,rt=0){q=A,G=Z,z=rt;let ot=!0,Q=null,Tt=!1,Pt=!1;if(A){const wt=Ft.get(A);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(O.FRAMEBUFFER,null),ot=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(wt.__hasExternalTextures)oe.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Pt=!0);const ee=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][rt]:Q=ee[Z],Tt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?Q=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[rt]:Q=ee,V.copy(A.viewport),at.copy(A.scissor),ut=A.scissorTest}else V.copy(Gt).multiplyScalar(K).floor(),at.copy(re).multiplyScalar(K).floor(),ut=be;if(rt!==0&&(Q=lo),Lt.bindFramebuffer(O.FRAMEBUFFER,Q)&&ot&&Lt.drawBuffers(A,Q),Lt.viewport(V),Lt.scissor(at),Lt.setScissorTest(ut),Tt){const wt=Ft.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt.__webglTexture,rt)}else if(Pt){const wt=Z;for(let jt=0;jt<A.textures.length;jt++){const ee=Ft.get(A.textures[jt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+jt,ee.__webglTexture,rt,wt)}}else if(A!==null&&rt!==0){const wt=Ft.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(A,Z,rt,ot,Q,Tt,Pt,Bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt){Lt.bindFramebuffer(O.FRAMEBUFFER,wt);try{const jt=A.textures[Bt],ee=jt.format,$t=jt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ot&&rt>=0&&rt<=A.height-Q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),Tt))}finally{const jt=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,rt,ot,Q,Tt,Pt,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt)if(Z>=0&&Z<=A.width-ot&&rt>=0&&rt<=A.height-Q){Lt.bindFramebuffer(O.FRAMEBUFFER,wt);const jt=A.textures[Bt],ee=jt.format,$t=jt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.bufferData(O.PIXEL_PACK_BUFFER,Tt.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),0);const ze=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,ze);const Ke=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wE(O,Ke,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Tt),O.deleteBuffer(_e),O.deleteSync(Ke),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(A.image.width*ot),Tt=Math.floor(A.image.height*ot),Pt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,rt,0,0,Pt,Bt,Q,Tt),Lt.unbindTexture()};const fs=O.createFramebuffer(),Eu=O.createFramebuffer();this.copyTextureToTexture=function(A,Z,rt=null,ot=null,Q=0,Tt=null){Tt===null&&(Q!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Pt,Bt,wt,jt,ee,$t,_e,ze,Ke;const Ue=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Pt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,wt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,ee=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-Q);Pt=Math.floor(Ue.width*on),Bt=Math.floor(Ue.height*on),A.isDataArrayTexture?wt=Ue.depth:A.isData3DTexture?wt=Math.floor(Ue.depth*on):wt=1,jt=0,ee=0,$t=0}ot!==null?(_e=ot.x,ze=ot.y,Ke=ot.z):(_e=0,ze=0,Ke=0);const Re=Zt.convert(Z.format),te=Zt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=O.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=O.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);const me=O.getParameter(O.UNPACK_ROW_LENGTH),pn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ce=O.getParameter(O.UNPACK_SKIP_ROWS),Ta=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ee),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t);const Ye=A.isDataArrayTexture||A.isData3DTexture,On=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=Ft.get(A),tn=Ft.get(Z),Dn=Ft.get(on.__renderTarget),Ws=Ft.get(tn.__renderTarget);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Li=0;Li<wt;Li++)Ye&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,Q,$t+Li),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,Tt,Ke+Li)),O.blitFramebuffer(jt,ee,Pt,Bt,_e,ze,Pt,Bt,O.DEPTH_BUFFER_BIT,O.NEAREST);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Ft.has(A)){const on=Ft.get(A),tn=Ft.get(Z);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,fs),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Eu);for(let Dn=0;Dn<wt;Dn++)Ye?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,Q,$t+Dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,Q),On?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,Ke+Dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,Tt),Q!==0?O.blitFramebuffer(jt,ee,Pt,Bt,_e,ze,Pt,Bt,O.COLOR_BUFFER_BIT,O.NEAREST):On?O.copyTexSubImage3D(Le,Tt,_e,ze,Ke+Dn,jt,ee,Pt,Bt):O.copyTexSubImage2D(Le,Tt,_e,ze,jt,ee,Pt,Bt);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else On?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Le,Tt,_e,ze,Ke,Pt,Bt,wt,Re,te,Ue.data):Z.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,Tt,_e,ze,Ke,Pt,Bt,wt,Re,Ue.data):O.texSubImage3D(Le,Tt,_e,ze,Ke,Pt,Bt,wt,Re,te,Ue):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Tt,_e,ze,Pt,Bt,Re,te,Ue.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Tt,_e,ze,Ue.width,Ue.height,Re,Ue.data):O.texSubImage2D(O.TEXTURE_2D,Tt,_e,ze,Pt,Bt,Re,te,Ue);O.pixelStorei(O.UNPACK_ROW_LENGTH,me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ce),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ta),Tt===0&&Z.generateMipmaps&&O.generateMipmap(Le),Lt.unbindTexture()},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){G=0,z=0,q=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),a.unpackColorSpace=De._getUnpackColorSpace()}}const QR={powder:13360383,mint:13103325,lilac:15391999,pink:16307684};function ao({tone:o="powder",motion:e=!0}){const a=Hn.useRef(null);return Hn.useEffect(()=>{const r=a.current;if(!r)return;let c;try{c=new KR({antialias:!0,alpha:!0})}catch{return}const f=new eT,h=new xi(28,1,.1,100);h.position.set(0,0,4.8);const d=new vl(2.4,2.8,36,42),g=new rT({color:QR[o],roughness:.44,metalness:.02,clearcoat:.1,side:qi}),_=new Zi(d,g);f.add(_),f.add(new cT(16777215,11577032,2.2));const v=new hT(16777215,2.4);v.position.set(2,3,4),f.add(v),r.appendChild(c.domElement);const m=()=>{const y=r.clientWidth||480,x=r.clientHeight||360;c.setSize(y,x,!1),h.aspect=y/x,h.updateProjectionMatrix()};m();const S=new ResizeObserver(m);S.observe(r);const M=d.attributes.position.array.slice();let R=0;const C=()=>{R=requestAnimationFrame(C);const y=performance.now()*.001,x=d.attributes.position.array;for(let B=0;B<x.length;B+=3){const I=M[B],N=M[B+1];x[B]=I+(e?Math.sin(y*1.4+N*2.6)*.08*(1-Math.abs(N)/1.6):0),x[B+2]=M[B+2]+(e?Math.sin(y+I*2.2)*.06:0)}d.attributes.position.needsUpdate=!0,_.rotation.y=e?Math.sin(y*.35)*.18:0,c.render(f,h)};return C(),()=>{cancelAnimationFrame(R),S.disconnect(),d.dispose(),g.dispose(),c.dispose(),c.domElement.remove()}},[o,e]),E.jsx("div",{className:"fabric-stage",ref:a,"aria-label":"Illustrative drape preview"})}const fl=[{id:"cloud-poplin",name:"Cloud Poplin Blouse",category:"Blouses",price:68,size:"M",color:"Powder blue",location:"Brooklyn, NY",condition:"Light wear, seller confirmed",description:"A crisp cotton poplin blouse with a soft blue cast and an easy everyday silhouette.",tone:"powder",evidence:[{property:"drape",status:"supported",note:"Falls with a lightly structured line in 3 clips."},{property:"movement",status:"supported",note:"Front and side movement clips available."},{property:"stretch",status:"limited",note:"Light extension shown; force is not measured."},{property:"surface",status:"supported",note:"Fine weave visible in a close-up."}],image:"/assets/cloud-poplin.svg",accent:"#cbdcff"},{id:"moss-knit",name:"Moss Knit Cardigan",category:"Knitwear",price:82,size:"S",color:"Moss green",location:"Portland, OR",condition:"Very good, minor pilling at cuff",description:"A lightweight knit with an open front, soft texture, and a little room to move.",tone:"mint",evidence:[{property:"drape",status:"supported",note:"Relaxed fall shown on hanger and in motion."},{property:"movement",status:"supported",note:"Side sway and sleeve movement clips available."},{property:"stretch",status:"supported",note:"Gentle pull and release shown; no modulus claim."},{property:"surface",status:"limited",note:"Texture visible, hand softness not assessable."}],image:"/assets/moss-knit.svg",accent:"#c7f0dd"},{id:"airloom-linen",name:"Airloom Linen Overshirt",category:"Overshirts",price:74,size:"L",color:"Soft lilac",location:"Austin, TX",condition:"Visible sun fade at shoulder",description:"A relaxed linen layer with a dry surface, generous sleeves, and a quiet lavender tone.",tone:"lilac",evidence:[{property:"drape",status:"supported",note:"Structured drape shown in front and side clips."},{property:"movement",status:"limited",note:"Only one movement clip is available."},{property:"stretch",status:"unavailable",note:"No compatible stretch capture."},{property:"surface",status:"supported",note:"Slub texture and sun fade are visible."}],image:"/assets/airloom-linen.svg",accent:"#eadcff"},{id:"petal-satin",name:"Petal Satin Slip",category:"Dresses",price:96,size:"M",color:"Soft pink",location:"Chicago, IL",condition:"Excellent, no visible wear",description:"A fluid satin slip with a low sheen and a softly curved neckline.",tone:"pink",evidence:[{property:"drape",status:"supported",note:"Fluid movement shown in two prepared clips."},{property:"movement",status:"supported",note:"Front movement clip available."},{property:"stretch",status:"limited",note:"No controlled stretch task completed."},{property:"surface",status:"supported",note:"Low sheen visible under soft light."}],image:"/assets/petal-satin.svg",accent:"#f8d5e4"}],Ix=Array.from({length:38},(o,e)=>({id:`coming-${e+1}`,name:["Meadow Cotton Shirt","Quiet Rib Tank","Softline Pleated Skirt","Daybreak Denim Jacket"][e%4],category:["Tops","Knitwear","Skirts","Outerwear"][e%4],price:54+e%7*9,size:["S","M","L"][e%3],color:["Powder blue","Soft pink","Mint","Lilac"][e%4],location:"Coming soon",condition:"Preparing evidence",description:"A future Familiar listing.",tone:["powder","pink","mint","lilac"][e%4],evidence:[],image:"",accent:["#cbdcff","#f8d5e4","#c7f0dd","#eadcff"][e%4],comingSoon:!0})),Ip=[...fl,...Ix],JR=[{id:"drape",label:"Drape",description:"How the garment falls and holds its line."},{id:"movement",label:"Movement",description:"Visible behavior while the garment moves."},{id:"stretch",label:"Stretch",description:"Observed extension and release in the prepared task."},{id:"surface",label:"Surface",description:"Visible weave, texture, sheen, or wear."}],$R={id:"my-blue-blouse",name:"My blue blouse",image:"/assets/reference-blue.svg",tone:"powder"},Bx="familiar-demo-state",K0={view:"gateway",selectedListing:fl[0].id,selectedProperty:null,compareReference:null,selectedMatch:null,saved:[],cart:[],reserved:[],captureStep:"intro",findingDecision:"unreviewed",filters:{category:"All",maxPrice:120}};function tC(){try{return{...K0,...JSON.parse(localStorage.getItem(Bx)||"{}")}}catch{return K0}}function eC(o){localStorage.setItem(Bx,JSON.stringify(o))}function Q0(o,e){return{...o,saved:o.saved.includes(e)?o.saved.filter(a=>a!==e):[...o.saved,e]}}function J0(o,e){return o.cart.includes(e)?o:{...o,cart:[...o.cart,e]}}function Ld(o){return{...o,compareReference:$R,view:"match"}}const Qr=o=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(o),Fx=o=>o.charAt(0).toUpperCase()+o.slice(1);function nC(){const[o,e]=Hn.useState(()=>tC()),[a,r]=Hn.useState(""),[c,f]=Hn.useState(""),[h,d]=Hn.useState(!1);Hn.useEffect(()=>eC(o),[o]),Hn.useEffect(()=>{if(!c)return;const M=setTimeout(()=>f(""),2200);return()=>clearTimeout(M)},[c]);const g=Ip.find(M=>M.id===o.selectedListing)||fl[0],_=Hn.useMemo(()=>fl.filter(M=>(!a||`${M.name} ${M.category} ${M.color}`.toLowerCase().includes(a.toLowerCase()))&&(o.filters.category==="All"||M.category===o.filters.category)&&M.price<=o.filters.maxPrice),[a,o.filters]),v=(M,R=o.selectedListing)=>e(C=>({...C,view:M,selectedListing:R})),m=M=>f(M),S=M=>e(M);return E.jsxs("div",{className:"app-shell",children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("button",{className:"brand",onClick:()=>v("gateway"),"aria-label":"Familiar home",children:[E.jsx("span",{className:"brand-mark",children:"F"}),E.jsx("span",{children:"familiar"})]}),E.jsx("div",{className:"tagline",children:"Find clothes that feel familiar."}),E.jsxs("div",{className:"search-box",children:[E.jsx(FM,{size:18}),E.jsx("input",{"aria-label":"Search Familiar",value:a,onChange:M=>{r(M.target.value),o.view==="gateway"&&v("shop")},placeholder:"Search clothes, colors, or materials"}),E.jsx("kbd",{children:"⌘ K"})]}),E.jsxs("nav",{className:"desktop-nav",children:[E.jsx("button",{onClick:()=>v("shop"),children:"Shop"}),E.jsx("button",{onClick:()=>v("match"),children:"Match"}),E.jsx("button",{onClick:()=>v("seller"),children:"Sell"}),E.jsx("button",{className:"icon-button","aria-label":"Saved items",onClick:()=>m(`${o.saved.length} saved item${o.saved.length===1?"":"s"}`),children:E.jsx(Tp,{size:19,fill:o.saved.length?"currentColor":"none"})}),E.jsxs("button",{className:"icon-button","aria-label":"Cart",onClick:()=>v("checkout"),children:[E.jsx(bp,{size:19}),E.jsx("span",{className:"cart-count",children:o.cart.length})]})]}),E.jsx("button",{className:"mobile-menu","aria-label":"Open menu",onClick:()=>d(!h),children:h?E.jsx(ax,{}):E.jsx(BM,{})})]}),h&&E.jsxs("div",{className:"mobile-nav",children:[E.jsx("button",{onClick:()=>{v("shop"),d(!1)},children:"Shop"}),E.jsx("button",{onClick:()=>{v("match"),d(!1)},children:"Match"}),E.jsx("button",{onClick:()=>{v("seller"),d(!1)},children:"Sell"})]}),E.jsxs("main",{children:[o.view==="gateway"&&E.jsx(iC,{go:v}),o.view==="shop"&&E.jsx(aC,{query:a,setQuery:r,results:_,saved:o.saved,onSave:M=>S(Q0(o,M)),onOpen:M=>v("listing",M),filters:o.filters,setFilters:M=>S({...o,filters:M})}),o.view==="listing"&&E.jsx(sC,{listing:g,saved:o.saved.includes(g.id),onBack:()=>v("shop"),onSave:()=>S(Q0(o,g.id)),onEvidence:()=>v("evidence"),onCompare:()=>S(Ld({...o,selectedListing:g.id})),onCart:()=>{S(J0(o,g.id)),m("Added to your bag")},onBuy:()=>{S({...J0(o,g.id),view:"checkout"}),m("Reserved for checkout")}}),o.view==="evidence"&&E.jsx(rC,{listing:g,selected:o.selectedProperty,setSelected:M=>S({...o,selectedProperty:M}),onBack:()=>v("listing"),onCompare:()=>S(Ld(o))}),o.view==="match"&&E.jsx(oC,{listing:g,reference:o.compareReference,selectedMatch:o.selectedMatch,setSelectedMatch:M=>S({...o,selectedMatch:M}),onBack:()=>v("shop"),onStart:()=>S(Ld(o)),onOpen:M=>v("listing",M)}),o.view==="seller"&&E.jsx(fC,{onStart:()=>S({...o,view:"capture",captureStep:"intro",selectedListing:"cloud-poplin"}),onShop:()=>v("shop")}),o.view==="capture"&&E.jsx(cC,{step:o.captureStep,setStep:M=>S({...o,captureStep:M}),onBack:()=>v("seller"),onReview:()=>S({...o,view:"review",captureStep:"review"})}),o.view==="review"&&E.jsx(uC,{decision:o.findingDecision,setDecision:M=>S({...o,findingDecision:M}),onBack:()=>S({...o,view:"capture",captureStep:"wear"}),onPublish:()=>{S({...o,view:"listing",selectedListing:"cloud-poplin"}),m("Evidence profile published")}}),o.view==="checkout"&&E.jsx(hC,{state:o,onBack:()=>v("shop"),onConfirm:()=>{S({...o,view:"orders",reserved:[...o.reserved,...o.cart],cart:[]}),m("Order confirmed")}}),o.view==="orders"&&E.jsx(dC,{reserved:o.reserved,onShop:()=>v("shop")})]}),c&&E.jsxs("div",{className:"toast",role:"status",children:[E.jsx(Jr,{size:16})," ",c]}),E.jsxs("footer",{children:[E.jsx("span",{children:"familiar"}),E.jsx("span",{children:"Private reference · Evidence-led discovery"}),E.jsx("span",{children:"English · USD"})]})]})}function iC({go:o}){return E.jsxs("section",{className:"gateway page",children:[E.jsx("div",{className:"eyebrow",children:"FAMILIAR · SECONDHAND CLOTHING, BETTER UNDERSTOOD"}),E.jsxs("h1",{children:["Find clothes that",E.jsx("br",{}),E.jsx("em",{children:"feel familiar."})]}),E.jsx("p",{className:"lede",children:"Search normally. Match personally. Inspect the evidence."}),E.jsxs("div",{className:"role-grid",children:[E.jsxs("button",{className:"role-card role-shop",onClick:()=>o("shop"),children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"FOR BUYERS"}),E.jsx("h2",{children:"Shop Familiar"}),E.jsx("p",{children:"Browse clothing, compare it with something you already enjoy wearing, and see the evidence behind each listing."}),E.jsxs("span",{className:"text-link",children:["Start browsing ",E.jsx(Si,{size:16})]})]}),E.jsx("div",{className:"role-art art-shop",children:E.jsx(ao,{tone:"powder",motion:!1})})]}),E.jsxs("button",{className:"role-card role-sell",onClick:()=>o("seller"),children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"FOR SELLERS"}),E.jsx("h2",{children:"Sell with Familiar Evidence"}),E.jsx("p",{children:"Build a clearer listing through a guided, step-by-step garment walkthrough."}),E.jsxs("span",{className:"text-link",children:["Open seller workspace ",E.jsx(Si,{size:16})]})]}),E.jsx("div",{className:"role-art art-sell",children:E.jsx(ao,{tone:"mint",motion:!0})})]}),E.jsxs("button",{className:"explore-both",onClick:()=>o("shop"),children:[E.jsx(xu,{size:18}),E.jsxs("span",{children:[E.jsx("strong",{children:"Explore both"}),E.jsx("small",{children:"See the buyer journey, then step into the seller workflow."})]}),E.jsx(Si,{size:17})]})]}),E.jsxs("div",{className:"gateway-note",children:[E.jsx(nx,{size:16})," Three authored garment worlds. One evidence-led marketplace."]})]})}function aC({query:o,setQuery:e,results:a,saved:r,onSave:c,onOpen:f,filters:h,setFilters:d}){return E.jsxs("section",{className:"page shop",children:[E.jsxs("div",{className:"page-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"THE MARKETPLACE"}),E.jsxs("h1",{children:["Clothes you can",E.jsx("br",{}),E.jsx("em",{children:"understand."})]}),E.jsx("p",{children:"Start with style, size, and price. Add a personal reference whenever it helps."})]}),E.jsxs("div",{className:"head-stat",children:[E.jsx("span",{children:a.length}),E.jsxs("small",{children:["active pieces",E.jsx("br",{}),"ready to explore"]})]})]}),E.jsxs("div",{className:"shop-controls",children:[E.jsx("div",{className:"category-tabs",children:["All","Blouses","Knitwear","Overshirts","Dresses"].map(g=>E.jsx("button",{className:h.category===g?"active":"",onClick:()=>d({...h,category:g}),children:g},g))}),E.jsxs("label",{className:"sort-control",children:["Under $",h.maxPrice,E.jsx("input",{type:"range",min:"50",max:"120",step:"5",value:h.maxPrice,onChange:g=>d({...h,maxPrice:Number(g.target.value)})})]})]}),E.jsx("div",{className:"product-grid",children:a.map(g=>E.jsx($0,{listing:g,saved:r.includes(g.id),onSave:c,onOpen:f},g.id))}),E.jsxs("div",{className:"coming-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"A LITTLE FURTHER OUT"}),E.jsx("h2",{children:"Coming soon"})]}),E.jsx("span",{children:"38 more pieces in preparation"})]}),E.jsx("div",{className:"product-grid coming-grid",children:Ix.map(g=>E.jsx($0,{listing:g,saved:!1,onSave:()=>{},onOpen:()=>{}},g.id))})]})}function $0({listing:o,saved:e,onSave:a,onOpen:r}){return E.jsxs("article",{className:`product-card ${o.comingSoon?"is-coming":""}`,children:[E.jsxs("div",{className:"card-visual",style:{background:o.accent},onClick:()=>!o.comingSoon&&r(o.id),children:[o.image?E.jsx("img",{src:o.image,alt:o.name}):E.jsx("div",{className:"ghost-garment",children:E.jsx(ix,{size:26})}),E.jsx("span",{className:"visual-badge",children:o.comingSoon?"Coming soon":"Explore evidence"}),!o.comingSoon&&E.jsx("button",{className:"save-button","aria-label":`Save ${o.name}`,onClick:c=>{c.stopPropagation(),a(o.id)},children:E.jsx(Tp,{size:18,fill:e?"currentColor":"none"})})]}),E.jsxs("button",{className:"card-body",disabled:o.comingSoon,onClick:()=>r(o.id),children:[E.jsxs("div",{className:"card-meta",children:[E.jsx("span",{children:o.category}),E.jsx("span",{children:o.comingSoon?"Preparing evidence":o.size})]}),E.jsx("h3",{children:o.name}),E.jsx("strong",{children:o.comingSoon?"Coming soon":Qr(o.price)}),E.jsx("p",{children:o.comingSoon?"A future Familiar listing":`${o.color} · ${o.location}`})]})]})}function sC({listing:o,saved:e,onBack:a,onSave:r,onEvidence:c,onCompare:f,onCart:h,onBuy:d}){return E.jsxs("section",{className:"page detail",children:[E.jsxs("button",{className:"back-link",onClick:a,children:[E.jsx(vu,{size:16})," Back to shop"]}),E.jsxs("div",{className:"detail-grid",children:[E.jsxs("div",{className:"detail-visual",style:{background:o.accent},children:[E.jsx("img",{src:o.image,alt:o.name}),E.jsx("button",{className:"save-floating","aria-label":"Save listing",onClick:r,children:E.jsx(Tp,{size:20,fill:e?"currentColor":"none"})})]}),E.jsxs("div",{className:"detail-copy",children:[E.jsxs("span",{className:"eyebrow",children:[o.category," · ",o.size]}),E.jsx("h1",{children:o.name}),E.jsxs("div",{className:"price-row",children:[E.jsx("strong",{children:Qr(o.price)}),E.jsx("span",{children:"Ships in 2–4 days"})]}),E.jsx("p",{className:"detail-description",children:o.description}),E.jsxs("div",{className:"seller-line",children:[E.jsx("span",{className:"avatar",children:"A"}),E.jsxs("span",{children:[E.jsx("strong",{children:"Alma Studio"}),E.jsx("small",{children:"Independent seller · Brooklyn, NY"})]})]}),E.jsxs("div",{className:"action-stack",children:[E.jsxs("button",{className:"primary-button",onClick:d,children:["Buy now ",E.jsx(Si,{size:17})]}),E.jsxs("button",{className:"secondary-button",onClick:h,children:["Add to bag ",E.jsx(bp,{size:17})]}),E.jsxs("button",{className:"soft-button",onClick:f,children:[E.jsx(xu,{size:17})," Compare with something I own"]})]})]})]}),E.jsxs("div",{className:"detail-sections",children:[E.jsxs("button",{className:"evidence-banner",onClick:c,children:[E.jsx("div",{className:"evidence-icon",children:E.jsx(Jr,{size:19})}),E.jsxs("div",{children:[E.jsx("strong",{children:"Familiar Evidence"}),E.jsx("span",{children:"See what was captured, what the seller confirmed, and what remains unknown."})]}),E.jsx(Si,{size:18})]}),E.jsxs("div",{className:"detail-columns",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"ITEM DETAILS"}),E.jsx("h2",{children:o.condition}),E.jsx("p",{children:"Measurements are shown in centimetres. Visual observations stay linked to their original capture."})]}),E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"THE SELLER"}),E.jsx("h2",{children:"Alma Studio"}),E.jsx("p",{children:"Small-batch wardrobe edits with original evidence on every published piece."})]})]})]})]})}function rC({listing:o,selected:e,setSelected:a,onBack:r,onCompare:c}){return e&&o.evidence.find(f=>f.property===e),E.jsxs("section",{className:"page evidence-page",children:[E.jsxs("button",{className:"back-link",onClick:r,children:[E.jsx(vu,{size:16})," Back to listing"]}),E.jsxs("div",{className:"page-head compact",children:[E.jsxs("div",{children:[E.jsxs("span",{className:"eyebrow",children:["FAMILIAR EVIDENCE · ",o.name]}),E.jsxs("h1",{children:["Look closer,",E.jsx("br",{}),E.jsx("em",{children:"with context."})]}),E.jsx("p",{children:"Each note connects to the source view that supports it."})]}),E.jsxs("button",{className:"soft-button",onClick:c,children:[E.jsx(xu,{size:16})," Compare with mine"]})]}),E.jsxs("div",{className:"evidence-layout",children:[E.jsxs("div",{className:"evidence-source",style:{background:o.accent},children:[E.jsx("img",{src:o.image,alt:"Source garment view"}),E.jsxs("div",{className:"source-stamp",children:[E.jsx("span",{children:"Source view"}),E.jsx("strong",{children:"00:14"})]}),E.jsx("div",{className:"marker-dot"})]}),E.jsxs("div",{className:"property-list",children:[JR.map(f=>{const h=o.evidence.find(d=>d.property===f.id);return E.jsxs("button",{className:`property-card ${e===f.id?"active":""}`,onClick:()=>a(f.id),children:[E.jsx("span",{className:`support-dot ${h.status}`}),E.jsxs("div",{children:[E.jsx("strong",{children:f.label}),E.jsx("p",{children:h.status==="supported"||h.status==="limited"?h.note:"Not assessable from the available capture."})]}),E.jsx("span",{className:"property-status",children:Fx(h.status)})]},f.id)}),E.jsxs("div",{className:"unknown-card",children:[E.jsx(IM,{size:17}),E.jsxs("span",{children:[E.jsx("strong",{children:"What this evidence does not tell us"}),E.jsx("small",{children:"Odor, hygiene, authenticity, and exact softness remain outside this capture."})]})]})]})]})]})}function oC({listing:o,reference:e,selectedMatch:a,setSelectedMatch:r,onBack:c,onStart:f,onOpen:h}){const d=fl.slice(0,3);return E.jsxs("section",{className:"page match-page",children:[E.jsxs("button",{className:"back-link",onClick:c,children:[E.jsx(vu,{size:16})," Back to shop"]}),E.jsxs("div",{className:"page-head compact",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"FAMILIAR MATCH"}),E.jsxs("h1",{children:["Find the feeling",E.jsx("br",{}),E.jsx("em",{children:"you already know."})]}),E.jsx("p",{children:"Compare visible garment behavior with a private piece from your wardrobe."})]}),e?E.jsxs("div",{className:"reference-chip",children:[E.jsx("img",{src:e.image,alt:""}),E.jsxs("span",{children:[E.jsx("small",{children:"Comparing with"}),E.jsx("strong",{children:e.name})]})]}):E.jsxs("button",{className:"primary-button small",onClick:f,children:["Choose a reference ",E.jsx(Si,{size:16})]})]}),e?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"match-stage",children:[E.jsxs("div",{className:"match-reference",children:[E.jsx("span",{className:"eyebrow",children:"YOUR REFERENCE"}),E.jsx("img",{src:e.image,alt:e.name}),E.jsx("strong",{children:e.name})]}),E.jsxs("div",{className:"match-preview",children:[E.jsx(ao,{tone:"powder",motion:!0}),E.jsxs("span",{className:"stage-label",children:[E.jsx(nx,{size:14})," Illustrative drape preview"]})]})]}),E.jsxs("div",{className:"match-results",children:[E.jsxs("div",{className:"results-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"THREE RESULTS"}),E.jsx("h2",{children:"What carries through"})]}),E.jsxs("button",{className:"soft-button",children:["Adjust priorities ",E.jsx(PM,{size:15})]})]}),E.jsx("div",{className:"match-grid",children:d.map(g=>E.jsxs("button",{className:`match-card ${a===g.id?"selected":""}`,onClick:()=>{r(g.id),h(g.id)},children:[E.jsx("img",{src:g.image,alt:g.name}),E.jsxs("div",{className:"match-card-copy",children:[E.jsx("strong",{children:g.name}),E.jsx("span",{children:Qr(g.price)}),E.jsxs("div",{className:"support-row",children:[E.jsx("span",{children:"Similar drape"}),E.jsx("span",{children:"3 clips"})]}),E.jsx("p",{children:g.id==="airloom-linen"?"Stretch comparison unavailable":"Movement and surface supported"})]})]},g.id))})]})]}):E.jsxs("div",{className:"match-empty",children:[E.jsx("div",{className:"empty-icon",children:E.jsx(xu,{})}),E.jsx("h2",{children:"Choose a piece you already enjoy wearing."}),E.jsx("p",{children:"Familiar keeps your reference private and compares only the properties the captures can support."}),E.jsxs("button",{className:"primary-button",onClick:f,children:["Choose my blue blouse ",E.jsx(Si,{size:17})]})]})]})}const lC={intro:{eyebrow:"FAMILIAR EVIDENCE · 0 OF 6",title:"Let’s build a clearer garment profile.",body:"A short guided walkthrough helps buyers understand what they are seeing. You can review every suggestion before it appears on your listing.",cue:"What this captures: surface, movement, visible wear, and label information.",tone:"mint"},front:{eyebrow:"STEP 1 OF 6 · FRONT VIEW",title:"Show the whole garment.",body:"Keep the full silhouette inside the frame, from shoulder to hem.",cue:"A clear full view helps buyers read proportion and shape.",tone:"powder"},label:{eyebrow:"STEP 2 OF 6 · LABEL",title:"Bring the label into view.",body:"Hold the care or size label steady and readable.",cue:"Label text is shown as a seller-provided declaration.",tone:"lilac"},surface:{eyebrow:"STEP 3 OF 6 · SURFACE",title:"Move closer to the surface.",body:"Show the weave, texture, sheen, and any visible irregularity.",cue:"Softness against skin cannot be established here.",tone:"pink"},movement:{eyebrow:"STEP 4 OF 6 · MOVEMENT",title:"Let the fabric move.",body:"Lift the garment gently and let it settle through one slow motion.",cue:"We observe visible movement, not laboratory mechanics.",tone:"mint"},wear:{eyebrow:"STEP 5 OF 6 · VISIBLE WEAR",title:"Show the places that matter.",body:"Include cuffs, hems, seams, and any visible mark or repair.",cue:"A close-up is linked to the original source view.",tone:"powder"},review:{eyebrow:"STEP 6 OF 6 · REVIEW",title:"Review before publishing.",body:"Check each suggestion and keep your own judgment in the loop.",cue:"Confirm, correct, mark unsure, or retake.",tone:"lilac"},complete:{eyebrow:"EVIDENCE PROFILE READY",title:"Your listing is easier to understand.",body:"The buyer view will show the captures, your confirmations, and the properties that remain unknown.",cue:"Ready to publish.",tone:"mint"}};function cC({step:o,setStep:e,onBack:a,onReview:r}){const c=lC[o],f=["intro","front","label","surface","movement","wear"],h=f.indexOf(o),d=()=>{o==="wear"?r():e(f[Math.max(0,h+1)])};return E.jsxs("section",{className:"capture-page",children:[E.jsxs("div",{className:"capture-top",children:[E.jsx("button",{className:"icon-button",onClick:a,"aria-label":"Close capture",children:E.jsx(ax,{})}),E.jsx("div",{className:"progress-track",children:E.jsx("span",{style:{width:`${o==="intro"?8:o==="wear"?84:Math.min(96,(h+1)*16)}%`}})}),E.jsx("span",{className:"capture-count",children:o==="intro"?"0 / 6":o==="wear"?"5 / 6":`${h+1} / 6`})]}),E.jsxs("div",{className:"capture-content",children:[E.jsxs("div",{className:"capture-copy",children:[E.jsx("span",{className:"eyebrow",children:c.eyebrow}),E.jsx("h1",{children:c.title}),E.jsx("p",{children:c.body}),E.jsxs("div",{className:"capture-cue",children:[E.jsx(Jr,{size:17}),E.jsx("span",{children:c.cue})]}),E.jsxs("button",{className:"primary-button",onClick:d,children:[o==="intro"?"Start walkthrough":o==="wear"?"Review evidence":"Next"," ",E.jsx(Si,{size:17})]})]}),E.jsxs("div",{className:"capture-visual",style:{background:`linear-gradient(145deg, ${c.tone==="mint"?"#dff8eb":c.tone==="lilac"?"#eee7ff":c.tone==="pink"?"#ffe8f1":"#e0eaff"}, #fff)`},children:[E.jsx(ao,{tone:c.tone,motion:o!=="front"}),E.jsxs("div",{className:"capture-overlay",children:[E.jsx("span",{className:"frame-corner tl"}),E.jsx("span",{className:"frame-corner tr"}),E.jsx("span",{className:"frame-corner bl"}),E.jsx("span",{className:"frame-corner br"}),E.jsx("small",{children:"Illustrative capture scene"})]})]})]})]})}function uC({decision:o,setDecision:e,onBack:a,onPublish:r}){return E.jsxs("section",{className:"page review-page",children:[E.jsxs("div",{className:"page-head compact",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"FAMILIAR EVIDENCE · REVIEW"}),E.jsxs("h1",{children:["Keep your judgment",E.jsx("br",{}),E.jsx("em",{children:"in the loop."})]}),E.jsx("p",{children:"These observations are suggestions. You decide what buyers see."})]}),E.jsxs("div",{className:"review-check",children:[E.jsx(Jr,{size:21})," 5 of 5 tasks covered"]})]}),E.jsxs("div",{className:"review-layout",children:[E.jsxs("div",{className:"review-preview",children:[E.jsx(ao,{tone:"powder",motion:!0}),E.jsxs("span",{className:"stage-label",children:[E.jsx(ix,{size:14})," Suggested wear marker · cuff"]})]}),E.jsxs("div",{className:"review-panel",children:[E.jsxs("div",{className:"suggestion",children:[E.jsx("span",{className:"support-dot limited"}),E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"SUGGESTED FINDING"}),E.jsx("h2",{children:"Light pilling at cuff"}),E.jsx("p",{children:"Visible in the surface close-up at 00:14. Odor and softness remain unknown."})]})]}),E.jsx("div",{className:"decision-grid",children:["confirmed","corrected","unsure"].map(c=>E.jsxs("button",{className:o===c?"selected":"",onClick:()=>e(c),children:[o===c&&E.jsx(Jr,{size:15}),Fx(c)]},c))}),E.jsxs("button",{className:"primary-button full",onClick:r,disabled:o==="unreviewed",children:["Publish evidence profile ",E.jsx(Si,{size:17})]}),E.jsx("button",{className:"text-button",onClick:a,children:"Retake last task"})]})]})]})}function fC({onStart:o,onShop:e}){return E.jsxs("section",{className:"page seller-page",children:[E.jsxs("div",{className:"seller-hero",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"SELLER WORKSPACE"}),E.jsxs("h1",{children:["Make the details",E.jsx("br",{}),E.jsx("em",{children:"easier to see."})]}),E.jsx("p",{children:"Follow a guided six-step walkthrough for Cloud Poplin Blouse. Review every observation before publishing."}),E.jsxs("div",{className:"seller-actions",children:[E.jsxs("button",{className:"primary-button",onClick:o,children:["Start evidence walkthrough ",E.jsx(Si,{size:17})]}),E.jsx("button",{className:"text-button",onClick:e,children:"Preview buyer view"})]})]}),E.jsx("div",{className:"seller-art",children:E.jsx(ao,{tone:"mint",motion:!0})})]}),E.jsxs("div",{className:"task-overview",children:[E.jsx("div",{className:"eyebrow",children:"WHAT BUYERS CAN SEE"}),E.jsx("div",{className:"task-list",children:["Front view","Care label","Surface close-up","Movement clip","Visible wear"].map((a,r)=>E.jsxs("div",{children:[E.jsx("span",{children:String(r+1).padStart(2,"0")}),E.jsx("strong",{children:a}),E.jsx("small",{children:r===4?"Cuff and hem":"Prepared task"})]},a))})]})]})}function hC({state:o,onBack:e,onConfirm:a}){const r=o.cart.map(c=>Ip.find(f=>f.id===c)).filter(Boolean);return E.jsxs("section",{className:"page checkout-page",children:[E.jsxs("button",{className:"back-link",onClick:e,children:[E.jsx(vu,{size:16})," Continue shopping"]}),E.jsxs("div",{className:"checkout-grid",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"CHECKOUT"}),E.jsxs("h1",{children:["Your considered",E.jsx("br",{}),E.jsx("em",{children:"choice."})]}),E.jsx("p",{children:"Review the prepared order before confirming."}),r.length?r.map(c=>E.jsxs("div",{className:"checkout-item",children:[E.jsx("img",{src:c.image,alt:""}),E.jsxs("div",{children:[E.jsx("strong",{children:c.name}),E.jsxs("span",{children:[c.size," · ",c.color]})]}),E.jsx("b",{children:Qr(c.price)})]},c.id)):E.jsxs("div",{className:"empty-card",children:[E.jsx(bp,{size:22}),E.jsx("p",{children:"Your bag is empty. Choose a piece from the marketplace first."})]})]}),E.jsxs("aside",{className:"summary-card",children:[E.jsx("span",{className:"eyebrow",children:"ORDER SUMMARY"}),E.jsxs("div",{children:[E.jsx("span",{children:"Subtotal"}),E.jsx("strong",{children:Qr(r.reduce((c,f)=>c+f.price,0))})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Delivery"}),E.jsx("strong",{children:"$8"})]}),E.jsxs("div",{className:"summary-total",children:[E.jsx("span",{children:"Total"}),E.jsx("strong",{children:Qr(r.reduce((c,f)=>c+f.price,8))})]}),E.jsxs("button",{className:"primary-button full",disabled:!r.length,onClick:a,children:["Confirm simulated order ",E.jsx(Si,{size:17})]}),E.jsx("small",{children:"Prepared demo checkout · no payment is submitted."})]})]})]})}function dC({reserved:o,onShop:e}){const a=o.length?Ip.find(r=>r.id===o[o.length-1]):null;return E.jsxs("section",{className:"page orders-page",children:[E.jsx("div",{className:"success-orb",children:E.jsx(Jr,{size:30})}),E.jsx("span",{className:"eyebrow",children:"ORDER CONFIRMED"}),E.jsxs("h1",{children:["A clearer choice,",E.jsx("br",{}),E.jsx("em",{children:"on its way."})]}),E.jsxs("p",{children:[a?a.name:"Your Familiar order"," is reserved in this demo account."]}),E.jsxs("div",{className:"order-timeline",children:[E.jsxs("div",{className:"active",children:[E.jsx("span",{children:"01"}),E.jsx("strong",{children:"Reserved"}),E.jsx("small",{children:"Today · 10:42 AM"})]}),E.jsxs("div",{children:[E.jsx("span",{children:"02"}),E.jsx("strong",{children:"Seller preparing"}),E.jsx("small",{children:"Next"})]}),E.jsxs("div",{children:[E.jsx("span",{children:"03"}),E.jsx("strong",{children:"Delivered"}),E.jsx("small",{children:"Estimated in 2–4 days"})]})]}),E.jsxs("button",{className:"primary-button",onClick:e,children:["Continue exploring ",E.jsx(Si,{size:17})]})]})}UM.createRoot(document.getElementById("root")).render(E.jsx(TM.StrictMode,{children:E.jsx(nC,{})}));
//# sourceMappingURL=index-B_pzUnpn.js.map
