import{s as V,n as S,r as W,e as Y,i as F}from"../chunks/scheduler.8xorJwSQ.js";import{S as J,i as K,g as c,m as j,s as C,h as _,j as M,n as q,f as B,c as I,x as Q,k as s,a as X,z as o,C as g,y}from"../chunks/index.cMEIfIjL.js";import{g as Z}from"../chunks/navigation.ZKZwFlCF.js";import{b as $}from"../chunks/paths.H-f6oBXH.js";import{G as x,C as ee}from"../chunks/game.tkEOXXlm.js";import{p as z,a as ae}from"../chunks/store.GPvSgBr-.js";function le(l){let p,n,v,i,T,k,u,r,e,w,L,m,E,N,d,G,U,h,P,A,b,O=`<i class="bi-arrow-right"></i>
    Create game`,D,R;return{c(){p=c("div"),n=c("label"),v=j(`Game name
    `),i=c("input"),k=C(),u=c("label"),r=j(`Team names
    `),e=c("input"),L=C(),m=c("input"),N=C(),d=c("input"),U=C(),h=c("input"),A=C(),b=c("button"),b.innerHTML=O,this.h()},l(a){p=_(a,"DIV",{class:!0});var t=M(p);n=_(t,"LABEL",{class:!0});var H=M(n);v=q(H,`Game name
    `),i=_(H,"INPUT",{placeholder:!0,class:!0}),H.forEach(B),k=I(t),u=_(t,"LABEL",{class:!0});var f=M(u);r=q(f,`Team names
    `),e=_(f,"INPUT",{placeholder:!0,type:!0,class:!0}),L=I(f),m=_(f,"INPUT",{placeholder:!0,class:!0}),N=I(f),d=_(f,"INPUT",{placeholder:!0,class:!0}),U=I(f),h=_(f,"INPUT",{placeholder:!0,class:!0}),f.forEach(B),A=I(t),b=_(t,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(b)!=="svelte-1ngfxe9"&&(b.innerHTML=O),t.forEach(B),this.h()},h(){s(i,"placeholder",T=l[0].name),s(i,"class","p-3 rounded-xl bg-gray-200 dark:bg-gray-800 "),s(n,"class","flex flex-col text-start"),s(e,"placeholder",w=l[0].teams[l[2]].name),s(e,"type","search"),s(e,"class","p-3 rounded-xl bg-yellow-200 dark:bg-yellow-700 "),s(m,"placeholder",E=l[0].teams[l[3]].name),s(m,"class","p-3 rounded-xl bg-green-200 dark:bg-green-700 "),s(d,"placeholder",G=l[0].teams[l[4]].name),s(d,"class","p-3 rounded-xl bg-blue-200 dark:bg-blue-700 "),s(h,"placeholder",P=l[0].teams[l[5]].name),s(h,"class","p-3 rounded-xl bg-red-200 dark:bg-red-800 "),s(u,"class","flex flex-col text-start gap-1"),s(b,"class","p-3 rounded-xl bg-gray-200 dark:bg-gray-800 "),s(p,"class","flex flex-col gap-2")},m(a,t){X(a,p,t),o(p,n),o(n,v),o(n,i),g(i,l[1].game),o(p,k),o(p,u),o(u,r),o(u,e),g(e,l[1].yellow),o(u,L),o(u,m),g(m,l[1].green),o(u,N),o(u,d),g(d,l[1].blue),o(u,U),o(u,h),g(h,l[1].red),o(p,A),o(p,b),D||(R=[y(i,"input",l[7]),y(e,"input",l[8]),y(m,"input",l[9]),y(d,"input",l[10]),y(h,"input",l[11]),y(b,"click",l[12])],D=!0)},p(a,[t]){t&1&&T!==(T=a[0].name)&&s(i,"placeholder",T),t&2&&i.value!==a[1].game&&g(i,a[1].game),t&1&&w!==(w=a[0].teams[a[2]].name)&&s(e,"placeholder",w),t&2&&e.value!==a[1].yellow&&g(e,a[1].yellow),t&1&&E!==(E=a[0].teams[a[3]].name)&&s(m,"placeholder",E),t&2&&m.value!==a[1].green&&g(m,a[1].green),t&1&&G!==(G=a[0].teams[a[4]].name)&&s(d,"placeholder",G),t&2&&d.value!==a[1].blue&&g(d,a[1].blue),t&1&&P!==(P=a[0].teams[a[5]].name)&&s(h,"placeholder",P),t&2&&h.value!==a[1].red&&g(h,a[1].red)},i:S,o:S,d(a){a&&B(p),D=!1,W(R)}}}function se(l,p,n){let v;Y(l,z,U=>n(13,v=U)),F(z,v="New game",v);const{YELLOW:i,GREEN:T,BLUE:k,RED:u}=ee,r=new x,e={game:"",yellow:"",green:"",blue:"",red:""},w=()=>{e.game&&n(0,r.name=e.game,r),e.yellow&&n(0,r.teams[i].name=e.yellow,r),e.green&&n(0,r.teams[T].name=e.green,r),e.blue&&n(0,r.teams[k].name=e.blue,r),e.red&&n(0,r.teams[u].name=e.red,r),ae(r),Z(`${$}/game?id=${r.id}`)};function L(){e.game=this.value,n(1,e)}function m(){e.yellow=this.value,n(1,e)}function E(){e.green=this.value,n(1,e)}function N(){e.blue=this.value,n(1,e)}function d(){e.red=this.value,n(1,e)}return[r,e,i,T,k,u,w,L,m,E,N,d,()=>w()]}class ie extends J{constructor(p){super(),K(this,p,se,le,V,{})}}export{ie as component};
