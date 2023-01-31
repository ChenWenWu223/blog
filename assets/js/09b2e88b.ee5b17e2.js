"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[9210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>l});var a,n=r(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},l),t?n.createElement("title",{id:r},t):null,a||(a=n.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294);const n="featureIconArea_kxlx",c="title_Utvl";var l=r(6010),o=r(941);function i(e){let{onClick:t,src:r,srcDark:i,title:s,wrapperClassName:u,wrapperStyle:p}=e;return a.createElement("div",{className:(0,l.Z)(n,u),style:p},a.createElement(o.Z,{sources:{light:r,dark:i||r},alt:s,loading:"lazy",onClick:t}),a.createElement("div",{className:c},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294);const n="list_rgtH",c="item_i3mt";var l=r(6010),o=r(9960),i=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return a.createElement("div",{style:s,className:(0,l.Z)(n,r)},t.map((e=>a.createElement("div",{key:e.title,className:c},a.createElement(o.Z,{to:e.link},a.createElement(i.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(7294);const n="unorderedList_Bf_c",c="listItem_mbuj",l="titleArea_SAgt",o="title_RnVK",i="linkSVG_P7Tu";var s=r(6010),u=r(9960),p=r(941),d=r(6982);const m=r.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function f(e){let{data:t=[],wrapperClassName:r,wrapperStyle:f}=e;return a.createElement("div",{style:f,className:(0,s.Z)(n,r)},a.createElement("ul",null,t.map(((e,t)=>a.createElement("li",{className:c,key:t},a.createElement(p.Z,{sources:{light:e.src||m,dark:e.srcDark?e.srcDark:e.src||m},alt:e.title,loading:"lazy"}),a.createElement(u.Z,{to:e.link,className:l},a.createElement("div",{className:o},e.title),a.createElement("div",{className:i},a.createElement(d.Z,null))))))))}},8197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),c=r(4998),l=r(3278),o=r(6347),i=r(6231);const s={title:"React Router",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"},{label:"React Router",permalink:"react-router"}],last_update:{date:"2022-07-19",author:"Winwoo"}},u=void 0,p={unversionedId:"react/react-router/index",id:"react/react-router/index",title:"React Router",description:"",source:"@site/docs/react/react-router/index.mdx",sourceDirName:"react/react-router",slug:"/react/react-router/",permalink:"/cww/docs/react/react-router/",draft:!1,tags:[{label:"React",permalink:"/cww/docs/tags/react"},{label:"React Router",permalink:"/cww/docs/tags/react-router"}],version:"current",frontMatter:{title:"React Router",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"},{label:"React Router",permalink:"react-router"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/cww/docs/react/create-react-app/environment-variable"},next:{title:"\u5b89\u88c5 React Router",permalink:"/cww/docs/react/react-router/installation"}},d={},m=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],f={toc:m};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{src:o.Z,title:"React Router",mdxType:"FeatureIcon"}),(0,n.kt)(l.Z,{data:[{title:"\u5b89\u88c5 React Router",link:"/docs/react/react-router/installation",src:o.Z},{title:"\u8def\u7531",link:"/docs/react/react-router/routers",src:o.Z},{title:"\u7ec4\u4ef6",link:"/docs/react/react-router/components",src:o.Z}],mdxType:"LinkList"}),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)(i.Z,{data:[{title:"React Router v6 Docs",link:"https://reactrouter.com/docs/en/v6",src:o.Z}],mdxType:"ReferenceList"}))}v.isMDXComponent=!0},6347:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/react_router-9356026c61db842d0f2509f01796488a.png"}}]);