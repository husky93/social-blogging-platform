import{R as l,_ as s,s as c,j as t,h as m,e as r}from"./index.d3e37323.js";import _ from"./Skeleton.b2ae18fa.js";import"./Card.6434b814.js";const h=l.lazy(()=>s(()=>import("./Card.6434b814.js"),["assets/Card.6434b814.js","assets/index.d3e37323.js","assets/index.929bee87.css"])),x=l.lazy(()=>s(()=>import("./Author.355b8512.js"),["assets/Author.355b8512.js","assets/index.d3e37323.js","assets/index.929bee87.css","assets/index.d7c688b0.js"])),p=l.lazy(()=>s(()=>import("./Badge.2b802519.js"),["assets/Badge.2b802519.js","assets/index.d3e37323.js","assets/index.929bee87.css"])),u=l.lazy(()=>s(()=>import("./LikeToggler.2e48f1a8.js"),["assets/LikeToggler.2e48f1a8.js","assets/Icon.6ba62d88.js","assets/index.d3e37323.js","assets/index.929bee87.css","assets/HeartOutline.77a038b2.js"])),y=({post:e})=>{const{displayName:i,photoUrl:o}=e.author,n=c();return t("div",{onClick:a=>{a.preventDefault(),a.stopPropagation(),n(`/post/${e.id}`)},className:"cursor-pointer",children:t(m.exports.Suspense,{fallback:t(_,{}),children:r(h,{customClasses:"p-4 my-6",children:[t(x,{avatarUrl:o,displayName:i,timestamp:e.timestamp,xs:!0}),t("h2",{className:"my-5 text-xl font-extrabold text-gray-900 hover:text-green-700 md:text-3xl md:ml-12",children:e.title}),t("div",{className:"flex flex-wrap gap-2 md:ml-12",children:e.tags.map((a,d)=>r(p,{children:["#",a]},`badge-${d}`))}),r("div",{className:"my-2 text-xl flex items-center md:ml-12",children:[t(u,{active:!1,handleToggle:()=>{},id:e.id}),r("span",{className:"font-light text-sm",children:[e.likesCount," ",e.likesCount>1?"reactions":"reaction"]})]})]})})})};export{y as default};
