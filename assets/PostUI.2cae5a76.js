import{I as A}from"./Icon.5f2e125c.js";import{h as l,j as t,u as P,a as E,e as b,P as L,p as z,w as j,E as M,G as N,I as R}from"./index.22b67699.js";import{showAlert as V}from"./Alert.ba9b81d5.js";import{H as X,a as D}from"./HeartOutline.9aff71a5.js";const G=l.exports.forwardRef(function(c,a){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c,{ref:a}),children:t("path",{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z",fill:"currentColor"})})}),U=l.exports.forwardRef(function(c,a){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c,{ref:a}),children:t("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})})}),W=({likes:g=[],bookmarks:c=[],postID:a})=>{const[f,y]=l.exports.useState(!1),[m,C]=l.exports.useState(!1),[p,O]=l.exports.useState(g.length),[S,H]=l.exports.useState(c.length),r=P(e=>e.user),v=E();l.exports.useEffect(()=>{if(r.data!==null){const e=r.data.uid,s=g.find(n=>n===e),o=c.find(n=>n===e);s!==void 0&&y(!0),o!==void 0&&C(!0)}},[r]);const w=async(e,s,o,n,i,d,x)=>{if(i&&o){const h=L(z,n,i);if(!e){const k=d?{likesCount:p+1}:{};await j(h,{[s]:M(o),...k}),r.data&&!x&&v(N({postID:a,userID:r.data.uid,isBookmark:!d}))}if(e){const k=d?{likesCount:p-1}:{};await j(h,{[s]:R(o),...k}),r.data&&!x&&v(N({postID:a,userID:r.data.uid,isBookmark:!d}))}}},I=async(e,s,o,n,i)=>{w(e,s,o,n,i,!1,!0),w(e,s,i,"posts",o)},B=(e,s,o,n,i,d,x,h,k)=>{if(r.data===null){V("Error!","You must be logged in to like / bookmark your favorite posts!","warning",v);return}s(e?u=>u-1:u=>u+1),o(u=>!u),n(e,h,i,d,x,k)};return a===void 0?t("div",{}):b("div",{className:"hidden min-w-16 py-4 pr-6 sm:flex sm:flex-col sm:gap-8 text-2xl",children:[b("div",{className:"flex flex-col justify-center items-center",children:[t("button",{className:f?"flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600":"flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",onClick:()=>{var e;B(f,O,y,w,(e=r.data)==null?void 0:e.uid,"posts",a,"likes",!0)},children:t(A,{children:f?t(X,{}):t(D,{})})}),t("span",{className:"text-gray-500 text-sm",children:p})]}),b("div",{className:"flex flex-col justify-center items-center",children:[t("button",{className:m?"flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600":"flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",onClick:()=>{var e;B(m,H,C,I,a,"users",(e=r.data)==null?void 0:e.uid,"bookmarks")},children:t(A,{children:m?t(G,{}):t(U,{})})}),t("span",{className:"text-gray-500 text-sm",children:S})]})]})};export{W as default};
