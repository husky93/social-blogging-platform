import{R as r,_ as t,e as a,j as e}from"./index.87e42946.js";const n=r.lazy(()=>t(()=>import("./Card.5e0c0cab.js"),["assets/Card.5e0c0cab.js","assets/index.87e42946.js","assets/index.98840e68.css"])),d=r.lazy(()=>t(()=>import("./Avatar.2efe1581.js"),["assets/Avatar.2efe1581.js","assets/index.87e42946.js","assets/index.98840e68.css"])),p=({handleFileChange:s,handleInputChange:l,nameValue:o,displayNameValue:m,user:i,fileInput:c})=>a(n,{customClasses:"p-4 my-6",children:[e("h2",{className:"mb-4 text-xl font-bold text-gray-900",children:"User"}),a("div",{className:"flex flex-col gap-2 my-2",children:[e("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name: *"}),e("input",{onChange:l,value:o,id:"name",type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"})]}),a("div",{className:"flex flex-col gap-2 my-2",children:[e("label",{htmlFor:"display-name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Display Name: *"}),e("input",{onChange:l,value:m,id:"display-name",type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"})]}),a("div",{className:"flex flex-col gap-2 my-2",children:[e("label",{htmlFor:"profile-pic",className:"block mb-2 text-sm font-medium text-gray-900",children:"Profile Picture:"}),a("div",{className:"flex gap-4 items-center",children:[e(d,{imgLink:i.data.photoUrl}),e("input",{onChange:s,id:"profile-pic",type:"file",accept:"image/png, image/jpeg",ref:c})]})]})]});export{p as default};
