import{I as A}from"./Icon.af6d7233.js";import{h as l,j as t,u as L,a as P,e as b,P as E,p as z,w as j,E as M,G as N,I as R}from"./index.803f8f97.js";import{showAlert as V}from"./Alert.e82c08a7.js";import{H as X,a as D}from"./HeartOutline.facedf48.js";const G=l.exports.forwardRef(function(c,a){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c,{ref:a}),children:t("path",{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z",fill:"currentColor"})})}),U=l.exports.forwardRef(function(c,a){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c,{ref:a}),children:t("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})})}),W=({likes:m=[],bookmarks:c=[],postID:a})=>{const[g,C]=l.exports.useState(!1),[p,B]=l.exports.useState(!1),[h,O]=l.exports.useState(m.length),[S,H]=l.exports.useState(c.length),s=L(e=>e.user),w=P();l.exports.useEffect(()=>{if(s.data!==null){const e=s.data.uid,r=m.find(n=>n===e),o=c.find(n=>n===e);r!==void 0&&C(!0),o!==void 0&&B(!0)}},[s]);const v=async(e,r,o,n,i,u,f)=>{if(i&&o){const x=E(z,n,i);if(!e){const k=u?{likesCount:h+1}:{};await j(x,{[r]:M(o),...k}),s.data&&!f&&w(N({postID:a,userID:s.data.uid,isBookmark:!u}))}if(e){const k=u?{likesCount:h-1}:{};await j(x,{[r]:R(o),...k}),s.data&&!f&&w(N({postID:a,userID:s.data.uid,isBookmark:!u}))}}},I=async(e,r,o,n,i)=>{v(e,r,o,n,i,!1,!0),v(e,r,i,"posts",o)},y=(e,r,o,n,i,u,f,x,k)=>{if(s.data===null){V("Error!","You must be logged in to like / bookmark your favorite posts!","warning",w);return}r(e?d=>d-1:d=>d+1),o(d=>!d),n(e,x,i,u,f,k)};return a===void 0?t("div",{}):b("div",{className:"hidden min-w-16 py-4 pr-6 sm:flex sm:flex-col sm:gap-8 text-2xl",children:[b("div",{className:"flex flex-col justify-center items-center",children:[t("button",{className:g?"flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100":"flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100",onClick:()=>{var e;y(g,O,C,v,(e=s.data)==null?void 0:e.uid,"posts",a,"likes",!0)},"aria-label":"Like post",children:t(A,{children:g?t(X,{}):t(D,{})})}),t("span",{className:"text-gray-500 text-sm",children:h})]}),b("div",{className:"flex flex-col justify-center items-center",children:[t("button",{className:p?"flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800 hover:bg-gray-100":"flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100",onClick:()=>{var e;y(p,H,B,I,a,"users",(e=s.data)==null?void 0:e.uid,"bookmarks")},"aria-label":"Bookmark post",children:t(A,{children:p?t(G,{}):t(U,{})})}),t("span",{className:"text-gray-500 text-sm",children:S})]})]})};export{W as default};
