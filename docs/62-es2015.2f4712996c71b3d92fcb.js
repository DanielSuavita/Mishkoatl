(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{OEt5:function(t,e,o){"use strict";o.r(e),o.d(e,"startTapClick",(function(){return i}));var n=o("9t5z");const i=t=>{let e,o,i,v,p=10*-u,f=0;const m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,w=t=>{p=Object(n.l)(t),b(t)},E=()=>{clearTimeout(v),v=void 0,o&&(j(!1),o=void 0)},h=t=>{o||void 0!==e&&null!==e.parentElement||(e=void 0,g(s(t),t))},b=t=>{g(void 0,t)},g=(t,e)=>{if(t&&t===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=Object(n.m)(e);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(r)||O(o,i,s),j(!0)}if(t){const e=L.get(t);e&&(clearTimeout(e),L.delete(t));const o=a(t)?0:d;t.classList.remove(r),v=setTimeout(()=>{O(t,i,s),v=void 0},o)}o=t},O=(t,e,o)=>{f=Date.now(),t.classList.add(r);const n=m&&c(t);n&&n.addRipple&&(T(),i=n.addRipple(e,o))},T=()=>{void 0!==i&&(i.then(t=>t()),i=void 0)},j=t=>{T();const e=o;if(!e)return;const n=l-Date.now()+f;if(t&&n>0&&!a(e)){const t=setTimeout(()=>{e.classList.remove(r),L.delete(e)},l);L.set(e,t)}else e.classList.remove(r)},S=document;S.addEventListener("ionScrollStart",t=>{e=t.target,E()}),S.addEventListener("ionScrollEnd",()=>{e=void 0}),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",t=>{p=Object(n.l)(t),h(t)},!0),S.addEventListener("touchcancel",w,!0),S.addEventListener("touchend",w,!0),S.addEventListener("mousedown",t=>{const e=Object(n.l)(t)-u;p<e&&h(t)},!0),S.addEventListener("mouseup",t=>{const e=Object(n.l)(t)-u;p<e&&b(t)},!0)},s=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const o=e[t];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=t=>t.classList.contains("ion-activatable-instant"),c=t=>{if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);