import{R as l,_ as i,c as d,a,r as m,j as r}from"./index.dfc74998.js";import _ from"./Skeleton.7d97a19e.js";import"./Card.dad04c68.js";const h=l.lazy(()=>i(()=>import("./Card.dad04c68.js"),["assets/Card.dad04c68.js","assets/index.dfc74998.js","assets/index.eed8455a.css"])),p=l.lazy(()=>i(()=>import("./Author.1d60f884.js"),["assets/Author.1d60f884.js","assets/index.dfc74998.js","assets/index.eed8455a.css","assets/index.d7c688b0.js"])),u=l.lazy(()=>i(()=>import("./Badge.7ae72c57.js"),["assets/Badge.7ae72c57.js","assets/index.dfc74998.js","assets/index.eed8455a.css"])),x=l.lazy(()=>i(()=>import("./LikeToggler.7e6dbeb6.js"),["assets/LikeToggler.7e6dbeb6.js","assets/index.dfc74998.js","assets/index.eed8455a.css","assets/HeartOutline.54453340.js"])),y=({post:e})=>{const{displayName:s,photoUrl:o}=e.author,n=d();return a("div",{onClick:t=>{t.preventDefault(),t.stopPropagation(),n(`/post/${e.id}`)},className:"cursor-pointer",children:a(m.exports.Suspense,{fallback:a(_,{}),children:r(h,{customClasses:"p-4 my-6",children:[a(p,{avatarUrl:o,displayName:s,timestamp:e.timestamp,xs:!0}),a("h2",{className:"my-5 ml-12 text-3xl font-extrabold text-gray-900 hover:text-green-700",children:e.title}),a("div",{className:"ml-12 flex gap-2",children:e.tags.map((t,c)=>r(u,{children:["#",t]},`badge-${c}`))}),r("div",{className:"my-2 ml-12 text-xl flex items-center",children:[a(x,{active:!1,handleToggle:()=>{},id:e.id}),r("span",{className:"font-light text-sm",children:[e.likesCount," ",e.likesCount>1?"reactions":"reaction"]})]})]})})})};export{y as default};
