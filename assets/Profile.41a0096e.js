import{R as d,_ as c,u as b,a as A,h as u,e as R,j as r,P as v,p as x,w as E,q as V,s as w,t as I,v as z,x as T}from"./index.87e42946.js";import{showAlert as P}from"./Alert.0633937e.js";const F=d.lazy(()=>c(()=>import("./Button.9ead0917.js"),["assets/Button.9ead0917.js","assets/index.87e42946.js","assets/index.98840e68.css"])),q=d.lazy(()=>c(()=>import("./Alert.0633937e.js"),["assets/Alert.0633937e.js","assets/index.87e42946.js","assets/index.98840e68.css"])),L=d.lazy(()=>c(()=>import("./index.87e42946.js").then(a=>a.ab),["assets/index.87e42946.js","assets/index.98840e68.css"])),O=d.lazy(()=>c(()=>import("./UserForm.0427da32.js"),["assets/UserForm.0427da32.js","assets/index.87e42946.js","assets/index.98840e68.css"])),C=d.lazy(()=>c(()=>import("./AboutForm.b1928462.js"),["assets/AboutForm.b1928462.js","assets/index.87e42946.js","assets/index.98840e68.css"])),$=({})=>{const a=b(t=>t.user),p=b(t=>t.alert),m=A(),[s,i]=u.exports.useState({name:"",displayName:"",education:"",job:""}),[h,D]=u.exports.useState(""),[N,_]=u.exports.useState(!1),n=u.exports.useRef(null);u.exports.useEffect(()=>{i(t=>a.data?{name:a.data.name,displayName:a.data.displayName,education:a.data.education,job:a.data.job}:{...t})},[a]);const g=t=>{t.target.id==="name"&&i({...s,name:t.target.value}),t.target.id==="display-name"&&i({...s,displayName:t.target.value}),t.target.id==="education"&&i({...s,education:t.target.value}),t.target.id==="job"&&i({...s,job:t.target.value})},S=t=>{var e;if(n.current!==null){const o=n.current;o.files&&(e=o.files[0])}e&&e.size>1097152&&(P("Error!","The file you are trying to upload is too big! (Maximum accepted size is 1MB)","danger",m),t.target.value="")},y=async t=>{if(a.data){const e=v(x,"users",a.data.uid),o={...a.data,...t};await E(e,{...t}),m(V(o))}},U=async()=>{a.data&&a.data.posts.forEach(async e=>{var l;const o=v(x,"posts",e);await E(o,{"author.displayName":s.displayName,"author.photoUrl":h||((l=a.data)==null?void 0:l.photoUrl)})})},j=async t=>{var l;const e=w(I,`profilepics/${(l=a.data)==null?void 0:l.uid}`),o=z(e,t);_(!0),o.on("state_changed",f=>{},f=>{console.error("File upload failed!")},()=>{T(o.snapshot.ref).then(f=>{y({photoUrl:f}),D(f),_(!1)})})};return R("form",{onSubmit:async t=>{if(t.preventDefault(),!s.name||!s.displayName){P("Error!","Some of the required inputs are empty. Please fill them up.","danger",m);return}var e;if(n.current!==null){const o=n.current;o.files&&(e=o.files[0])}e&&await j(e),y({...s}),a.data&&a.data.posts.length>0&&U()},children:[r("h1",{className:"mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900",children:"Profile settings"}),p.data.isShown&&r(q,{title:p.data.title,variant:p.data.variant,children:p.data.text}),r(O,{handleFileChange:S,handleInputChange:g,nameValue:s.name,displayNameValue:s.displayName,user:a,fileInput:n}),r(C,{handleInputChange:g,educationValue:s.education,jobValue:s.job}),r("div",{className:"ml-auto w-fit",children:N?r(L,{}):r(F,{type:"submit",text:"Submit changes",variant:"primary"})})]})};export{$ as default};
