import{h as r,j as e,e as p,R as n,_ as l,u as w,k as O,a as L,m as b,P as D,w as T,n as j,o as E}from"./index.9eafa9cc.js";import{I as z}from"./Icon.6bf34e8b.js";const N=r.exports.forwardRef(function(c,h){return e("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},c,{ref:h}),children:p("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})]})})}),V=n.lazy(()=>l(()=>import("./index.9eafa9cc.js").then(a=>a.a0),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),M=n.lazy(()=>l(()=>import("./index.9eafa9cc.js").then(a=>a.a2),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),U=n.lazy(()=>l(()=>import("./UserUI.9554e953.js"),["assets/UserUI.9554e953.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css","assets/Button.37a1ddea.js","assets/Avatar.a2154036.js"])),S=n.lazy(()=>l(()=>import("./index.9eafa9cc.js").then(a=>a.a1),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),B=n.lazy(()=>l(()=>import("./DashboardItem.27e118c0.js"),["assets/DashboardItem.27e118c0.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css","assets/index.d7c688b0.js"])),m=n.lazy(()=>l(()=>import("./Skeleton.adc6705a.js"),["assets/Skeleton.adc6705a.js","assets/Card.07ea9640.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),F=n.lazy(()=>l(()=>import("./Modal.ed5a5acf.js"),["assets/Modal.ed5a5acf.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),P=n.lazy(()=>l(()=>import("./Button.37a1ddea.js"),["assets/Button.37a1ddea.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),q=({})=>{const a=w(t=>t.user),c=a.data?a.data.uid:void 0,{loading:h,userData:s,setUserData:I}=O(c),[d,_]=r.exports.useState(void 0),[f,v]=r.exports.useState([]),k=w(t=>t.posts),C=L(),y=r.exports.useRef(!0);r.exports.useEffect(()=>{s&&y.current&&(s.posts.forEach(async t=>{const o=await b(t,k.data,C);o&&v(i=>[...i,o])}),y.current=!1)},[s]);const g=r.exports.useCallback(()=>{_(void 0)},[]),R=r.exports.useCallback(t=>{t.target instanceof HTMLButtonElement&&(console.log(t.target.dataset.id),_(t.target.dataset.id))},[]),A=r.exports.useCallback(async(t,o,i)=>{const u=D(E,"posts",o),x=D(E,"users",t);await T(x,{...s,posts:i}),await j(u)},[]);return p("main",{className:"min-h-screen flex flex-col relative",children:[d&&e(F,{handleModalClose:g,children:p("div",{className:"p-6 text-center text-gray-500",children:[e("div",{className:"text-5xl",children:e(z,{children:e(N,{})})}),e("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Are you sure you want to delete this product?"}),p("div",{className:"flex gap-4 justify-center",children:[e(P,{text:"Yes, Delete",variant:"danger",handleClick:()=>{if(s){const t=[...s.posts],o=[...f],i=t.indexOf(d),u=o.findIndex(x=>x.id===d);i!==-1&&u!==-1&&(t.splice(i,1),o.splice(u,1),d&&c&&A(c,d,t),_(void 0),I({...s,posts:t}),v(o))}}}),e(P,{text:"No, Cancel",variant:"hollow",handleClick:g})]})]})}),e(V,{children:e(U,{})}),e(S,{customClasses:"flex flex-1 items-start mt-6",children:h?p("div",{className:"flex justify-center gap-x-4 gap-y-8",children:[e(m,{}),e(m,{}),e(m,{})]}):e("div",{children:s&&s.posts.length===0?e("h1",{children:"You don't have any articles added yet!"}):e("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-8",children:s&&f&&f.map(t=>e(B,{handleModalOpen:R,post:t}))})})}),e(M,{})]})};export{q as default};
