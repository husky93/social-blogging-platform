import{r as d,j as l,a as g,n,o}from"./index.dfc74998.js";const c=({variant:t,title:a,children:s})=>{const[r,e]=d.exports.useState("");return d.exports.useEffect(()=>{switch(t){case"info":e("p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800");break;case"danger":e("p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800");break;case"success":e("p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800");break;case"warning":e("p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800");break;case"dark":e("p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300");break;default:e("")}},[t]),l("div",{className:r,children:[g("span",{className:"font-medium mr-1",children:a}),s]})},x=async(t,a,s,r)=>{r(n({isShown:!0,title:t,text:a,variant:s})),await new Promise(e=>setTimeout(e,6e3)),r(o())};export{c as default,x as showAlert};
