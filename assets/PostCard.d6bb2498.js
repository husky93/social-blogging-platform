import{R as l,_ as s,s as c,j as t,h as m,e as r}from"./index.803f8f97.js";import _ from"./Skeleton.3727790c.js";import"./Card.0f9d18b6.js";const h=l.lazy(()=>s(()=>import("./Card.0f9d18b6.js"),["assets/Card.0f9d18b6.js","assets/index.803f8f97.js","assets/index.241ea0b6.css"])),x=l.lazy(()=>s(()=>import("./Author.bdc36d4d.js"),["assets/Author.bdc36d4d.js","assets/index.803f8f97.js","assets/index.241ea0b6.css","assets/index.d7c688b0.js"])),p=l.lazy(()=>s(()=>import("./Badge.d2c5a6ec.js"),["assets/Badge.d2c5a6ec.js","assets/index.803f8f97.js","assets/index.241ea0b6.css"])),u=l.lazy(()=>s(()=>import("./LikeToggler.edcac1e2.js"),["assets/LikeToggler.edcac1e2.js","assets/Icon.af6d7233.js","assets/index.803f8f97.js","assets/index.241ea0b6.css","assets/HeartOutline.facedf48.js"])),y=({post:e})=>{const{displayName:i,photoUrl:o}=e.author,n=c();return t("div",{onClick:a=>{a.preventDefault(),a.stopPropagation(),n(`/post/${e.id}`)},className:"cursor-pointer",children:t(m.exports.Suspense,{fallback:t(_,{}),children:r(h,{customClasses:"p-4 my-6",children:[t(x,{avatarUrl:o,displayName:i,timestamp:e.timestamp,xs:!0}),t("h2",{className:"my-5 text-xl font-extrabold text-gray-900 hover:text-green-700 md:text-3xl md:ml-12",children:e.title}),t("div",{className:"flex flex-wrap gap-2 md:ml-12",children:e.tags.map((a,d)=>r(p,{children:["#",a]},`badge-${d}`))}),r("div",{className:"my-2 text-xl flex items-center md:ml-12",children:[t(u,{active:!1,handleToggle:()=>{},id:e.id}),r("span",{className:"font-light text-sm",children:[e.likesCount," ",e.likesCount>1?"reactions":"reaction"]})]})]})})})};export{y as default};
