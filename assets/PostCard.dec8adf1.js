import{R as l,_ as s,B as m,j as t,h as c,e as r}from"./index.fcf2c776.js";import _ from"./Skeleton.beadee04.js";import"./Card.b220db10.js";const h=l.lazy(()=>s(()=>import("./Card.b220db10.js"),["assets/Card.b220db10.js","assets/index.fcf2c776.js","assets/index.644a72a2.css"])),p=l.lazy(()=>s(()=>import("./Author.1f9284a3.js"),["assets/Author.1f9284a3.js","assets/index.fcf2c776.js","assets/index.644a72a2.css","assets/index.dd5dba0b.js"])),x=l.lazy(()=>s(()=>import("./Badge.c078f046.js"),["assets/Badge.c078f046.js","assets/index.fcf2c776.js","assets/index.644a72a2.css"])),u=l.lazy(()=>s(()=>import("./LikeToggler.f0012c0c.js"),["assets/LikeToggler.f0012c0c.js","assets/Icon.9a9daf55.js","assets/index.fcf2c776.js","assets/index.644a72a2.css","assets/HeartOutline.82b8a1fb.js"])),y=({post:e})=>{const{displayName:i,photoUrl:o}=e.author,d=m();return t("div",{onClick:a=>{a.preventDefault(),a.stopPropagation(),d(`/post/${e.id}`)},className:"cursor-pointer",children:t(c.exports.Suspense,{fallback:t(_,{}),children:r(h,{customClasses:"p-4 my-6",children:[t(p,{avatarUrl:o,displayName:i,timestamp:e.timestamp,xs:!0,showTimeElapsed:!0}),t("h2",{className:"my-5 text-xl font-extrabold text-gray-900 hover:text-green-700 md:text-3xl md:ml-12",children:e.title}),t("div",{className:"flex flex-wrap gap-2 md:ml-12",children:e.tags.map((a,n)=>r(x,{children:["#",a]},`badge-${n}`))}),r("div",{className:"my-2 text-xl flex items-center md:ml-12",children:[t(u,{active:!1,handleToggle:()=>{},id:e.id}),r("span",{className:"font-light text-sm",children:[e.likesCount," ",e.likesCount>1?"reactions":"reaction"]})]})]})})})};export{y as default};