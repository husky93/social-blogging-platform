import{R as s,_ as a,u as m,k as P,h as c,a as b,m as g,e as r,j as t,F as A}from"./index.9eafa9cc.js";const D=s.lazy(()=>a(()=>import("./index.9eafa9cc.js").then(e=>e.a0),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),R=s.lazy(()=>a(()=>import("./index.9eafa9cc.js").then(e=>e.a2),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),I=s.lazy(()=>a(()=>import("./index.9eafa9cc.js").then(e=>e.a1),["assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),L=s.lazy(()=>a(()=>import("./UserUI.9554e953.js"),["assets/UserUI.9554e953.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css","assets/Button.37a1ddea.js","assets/Avatar.a2154036.js"])),l=s.lazy(()=>a(()=>import("./Skeleton.adc6705a.js"),["assets/Skeleton.adc6705a.js","assets/Card.07ea9640.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),z=s.lazy(()=>a(()=>import("./PostCard.3aa6beec.js"),["assets/PostCard.3aa6beec.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css","assets/Skeleton.adc6705a.js","assets/Card.07ea9640.js"])),O=s.lazy(()=>a(()=>import("./Menu.067bef14.js"),["assets/Menu.067bef14.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css","assets/Icon.6bf34e8b.js"])),u=s.lazy(()=>a(()=>import("./Ad.90f1ff34.js"),["assets/Ad.90f1ff34.js","assets/Icon.6bf34e8b.js","assets/index.9eafa9cc.js","assets/index.cf47ed5d.css"])),V=({})=>{const e=m(o=>o.user),p=m(o=>o.posts),h=e.data?e.data.uid:void 0,{userData:n}=P(h),[i,f]=c.exports.useState([]),[x,E]=c.exports.useState(!0),v=b(),_=c.exports.useRef(!0);return c.exports.useEffect(()=>{n&&_.current&&(n.bookmarks.forEach(async(o,y)=>{const d=await g(o,p.data,v);d&&f(k=>[...k,d]),y===n.bookmarks.length-1&&E(!1)}),_.current=!1)},[n]),r("main",{className:"min-h-screen flex flex-col relative",children:[t(D,{children:t(L,{})}),r(I,{customClasses:"flex flex-1 w-full",children:[t("div",{className:"basis-1/4 my-4",children:t(O,{})}),r("div",{className:"basis-2/4 flex flex-col p-4",children:[t("h1",{className:"mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900",children:"Your Bookmarks:"}),x?r(A,{children:[t(l,{}),t(l,{}),t(l,{})]}):i.length>0?i.map(o=>t(z,{post:o})):t("h2",{className:"text-center my-8 text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800",children:"You don't have any bookmarks yet!"})]}),r("div",{className:"basis-1/4",children:[t(u,{}),t(u,{})]})]}),t(R,{})]})};export{V as default};
