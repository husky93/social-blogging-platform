import{R as s,_ as o,u,k as b,h as l,a as g,m as P,e as n,j as e,F as A}from"./index.316cd85b.js";const D=s.lazy(()=>o(()=>import("./index.316cd85b.js").then(t=>t.a1),["assets/index.316cd85b.js","assets/index.0fc7d390.css"])),R=s.lazy(()=>o(()=>import("./index.316cd85b.js").then(t=>t.a3),["assets/index.316cd85b.js","assets/index.0fc7d390.css"])),I=s.lazy(()=>o(()=>import("./index.316cd85b.js").then(t=>t.a2),["assets/index.316cd85b.js","assets/index.0fc7d390.css"])),L=s.lazy(()=>o(()=>import("./UserUI.b29fb143.js"),["assets/UserUI.b29fb143.js","assets/index.316cd85b.js","assets/index.0fc7d390.css","assets/Button.d2e43e10.js","assets/Avatar.e497fe44.js"])),c=s.lazy(()=>o(()=>import("./Skeleton.709e0c4b.js"),["assets/Skeleton.709e0c4b.js","assets/Card.0d0847ca.js","assets/index.316cd85b.js","assets/index.0fc7d390.css"])),z=s.lazy(()=>o(()=>import("./PostCard.4ac9e3d1.js"),["assets/PostCard.4ac9e3d1.js","assets/index.316cd85b.js","assets/index.0fc7d390.css","assets/Skeleton.709e0c4b.js","assets/Card.0d0847ca.js"])),O=s.lazy(()=>o(()=>import("./Menu.9a6f1c54.js"),["assets/Menu.9a6f1c54.js","assets/index.316cd85b.js","assets/index.0fc7d390.css","assets/Icon.c582a926.js"])),f=s.lazy(()=>o(()=>import("./Ad.fcc02714.js"),["assets/Ad.fcc02714.js","assets/Icon.c582a926.js","assets/index.316cd85b.js","assets/index.0fc7d390.css"])),N=({})=>{const t=u(a=>a.user),p=u(a=>a.posts),h=t.data?t.data.uid:void 0,{userData:r}=b(h),[i,x]=l.exports.useState([]),[k,_]=l.exports.useState(!0),E=g(),d=l.exports.useRef(!0);return l.exports.useEffect(()=>{r&&d.current&&(r.bookmarks.length===0&&_(!1),r.bookmarks.forEach(async(a,v)=>{const m=await P(a,p.data,E);m&&x(y=>[...y,m]),v===r.bookmarks.length-1&&_(!1)}),d.current=!1)},[r]),n("main",{className:"min-h-screen flex flex-col relative",children:[e(D,{children:e(L,{})}),n(I,{customClasses:"flex flex-1 w-full",children:[e("div",{className:"basis-1/4 my-4",children:e(O,{})}),n("div",{className:"basis-2/4 flex flex-col p-4",children:[e("h1",{className:"mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900",children:"Your Bookmarks:"}),(()=>{if(k)return n(A,{children:[e(c,{}),e(c,{}),e(c,{})]});if(i.length>0)return i.map(a=>e(z,{post:a}));if(i.length===0)return e("h2",{className:"text-center my-8 text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800",children:"You don't have any bookmarks yet!"})})()]}),n("div",{className:"basis-1/4",children:[e(f,{}),e(f,{})]})]}),e(R,{})]})};export{N as default};
