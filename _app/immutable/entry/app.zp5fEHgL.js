import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.8xorJwSQ.js";import{S as M,i as W,s as z,e as p,c as F,a as k,t as h,b as y,d as g,f as w,g as G,h as H,j as J,k as I,l as d,m as K,n as Q,o as X,p as L,q as E,r as v,u as O,v as R,w as P}from"../chunks/index.cMEIfIjL.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},b=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in T)return;T[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,c(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,c(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),y()}s?(e=E(s,c(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&A(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function A(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&V(a);return{c(){n.c(),i=z(),_&&_.c(),s=p()},l(o){n.l(o),i=F(o),_&&_.l(o),s=p()},m(o,u){r[e].m(o,u),k(o,i,u),_&&_.m(o,u),k(o,s,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(L(),h(r[m],1,1,()=>{r[m]=null}),y(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=V(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){h(n),c=!1},d(o){o&&(w(i),w(s)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,o,u,m,i,s,N,S,C]}class oe extends M{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>b(()=>import("../nodes/0.qi6BlP2w.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>b(()=>import("../nodes/1.zlZfE9wx.js"),__vite__mapDeps([9,1,2,3,4,5,6]),import.meta.url),()=>b(()=>import("../nodes/2.UI_ycFzD.js"),__vite__mapDeps([10,1,2,6,11]),import.meta.url),()=>b(()=>import("../nodes/3.ElIhvFmD.js"),__vite__mapDeps([12,1,2,13,14,7,5,4,6,11]),import.meta.url),()=>b(()=>import("../nodes/4.W6I6Xowg.js"),__vite__mapDeps([15,1,2,13,6,7,5]),import.meta.url),()=>b(()=>import("../nodes/5.a2P2E5rD.js"),__vite__mapDeps([16,1,2,3,4,5,6,14,7]),import.meta.url),()=>b(()=>import("../nodes/6._wkWi99e.js"),__vite__mapDeps([17,1,2,6,7,5]),import.meta.url)],le=[],fe={"/":[2],"/games":[4],"/game":[3],"/new_game":[5],"/settings":[6]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.qi6BlP2w.js","../chunks/scheduler.8xorJwSQ.js","../chunks/index.cMEIfIjL.js","../chunks/navigation.U8-iQRp3.js","../chunks/singletons.lwoSB3v7.js","../chunks/index.Di5oCLnN.js","../chunks/paths.i5H9qlGh.js","../chunks/store.GPvSgBr-.js","../assets/0.hjQc8AqM.css","../nodes/1.zlZfE9wx.js","../nodes/2.UI_ycFzD.js","../chunks/kimble.NAErm6TE.js","../nodes/3.ElIhvFmD.js","../chunks/each.-oqiv04n.js","../chunks/game.tkEOXXlm.js","../nodes/4.W6I6Xowg.js","../nodes/5.a2P2E5rD.js","../nodes/6._wkWi99e.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}