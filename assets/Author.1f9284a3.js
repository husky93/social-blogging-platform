import{R as i,_ as l,e,j as a,V as d}from"./index.fcf2c776.js";import{f as x}from"./index.dd5dba0b.js";const f=i.lazy(()=>l(()=>import("./Avatar.b2010e95.js"),["assets/Avatar.b2010e95.js","assets/index.fcf2c776.js","assets/index.644a72a2.css"])),p=({avatarUrl:o,displayName:m,timestamp:r,xs:s,showTimeElapsed:c,details:t})=>{console.log(t);const n=new Date(r.seconds*1e3);return e("div",{className:"flex items-center space-x-4",children:[a(f,{imgLink:o}),e("div",{className:`${s?"font-normal":"font-medium"} `,children:[a("div",{className:s?"text-sm":"",children:m}),t&&e("div",{className:"flex gap-3 mb-2",children:[t.job&&e("div",{children:[e("span",{className:"text-sm font-medium text-gray-700",children:["Job Title:"," "]}),a("span",{className:"text-sm font-normal text-gray-600",children:t.job})]}),t.education&&e("div",{children:[e("span",{className:"text-sm font-medium text-gray-700",children:["Education:"," "]}),a("span",{className:"text-sm font-normal text-gray-600",children:t.education})]})]}),e("div",{className:"text-sm font-light text-gray-500 ",children:["Posted on ",x(n,"do MMMMMMM y")," ",c?`(${d(n)})`:""]})]})]})};export{p as default};
