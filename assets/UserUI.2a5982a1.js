import{h as l,e as d,j as e,q as c,u as h,a as g,s as p,W as u,F as m,t as v,v as b,x}from"./index.22b67699.js";import y from"./Button.7d1ee54d.js";import k from"./Avatar.49ded654.js";const w=({user:t,handleSignOut:r})=>{const[o,s]=l.exports.useState(!0),n=o?"hidden absolute w-full z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700":"absolute w-full z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",i=()=>{s(a=>!a)};return d("div",{className:"relative",children:[t.data&&d("button",{onClick:i,className:"transition-all py-1 px-4 flex gap-x-4 items-center bg-white border border-white hover:border-gray-200 rounded hover:bg-gray-100",children:[e(k,{imgLink:t.data.photoUrl}),e("span",{className:"font-medium text-sm",children:t.data.displayName}),e("svg",{className:"w-4 h-4","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:o?e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}):e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 13l-6-5-6 5"})})]}),e("div",{id:"dropdown",className:n,children:d("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownDefault",children:[e("li",{children:e(c,{to:"/dashboard",className:"block text-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Dashboard"})}),e("li",{children:e("a",{href:"#",className:"block text-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Settings"})}),e("li",{children:e("button",{onClick:r,className:"block text-center w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Sign out"})})]})})]})},D=({post:t})=>{const r=h(a=>a.user),o=g(),s=p(),n=a=>{a.preventDefault(),v(x),o(b()),s("/")},i=()=>{s("/create-post")};return e(u,{direction:"column",alignItems:"center",customClasses:"gap-x-4 gap-y-4 sm:gap-y-0 sm:flex-row",children:r.data?d(m,{children:[t?"":e(y,{variant:"primary",text:"Create Post",handleClick:i}),e(w,{user:r,handleSignOut:n})]}):""})};export{D as default};
