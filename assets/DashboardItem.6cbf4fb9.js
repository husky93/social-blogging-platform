import{R as a,_ as r,j as e,F as l,e as n}from"./index.2a09c462.js";import{f as c}from"./index.9b47454f.js";const d=a.lazy(()=>r(()=>import("./Card.b344d4ba.js"),["assets/Card.b344d4ba.js","assets/index.2a09c462.js","assets/index.98840e68.css"])),m=a.lazy(()=>r(()=>import("./Button.971c0965.js"),["assets/Button.971c0965.js","assets/index.2a09c462.js","assets/index.98840e68.css"])),h=({handleModalOpen:s,post:t})=>{const i=new Date(t.timestamp.seconds*1e3);return e(l,{children:!!t&&e(d,{customClasses:"w-72",children:n("div",{className:"p-4 text-center",children:[e("h4",{className:"transition-all my-3 font-extrabold text-lg line-clamp-1 hover:text-green-700",children:t.title}),e("span",{className:"font-light text-gray-500 text-sm",children:c(i,"dd MMM")}),e("div",{className:"flex justify-center items-center mt-4",children:e(m,{text:"Delete Article",variant:"danger",id:t.id,handleClick:s})})]})})})};export{h as default};