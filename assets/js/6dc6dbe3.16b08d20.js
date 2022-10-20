"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[8266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>l});var a,n=r(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},l),t?n.createElement("title",{id:r},t):null,a||(a=n.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294);const n="featureIconArea_kxlx",c="title_Utvl";var l=r(6010),i=r(941);function s(e){let{onClick:t,src:r,srcDark:s,title:o,wrapperClassName:p,wrapperStyle:u}=e;return a.createElement("div",{className:(0,l.Z)(n,p),style:u},a.createElement(i.Z,{sources:{light:r,dark:s||r},alt:o,loading:"lazy",onClick:t}),a.createElement("div",{className:c},o))}},3278:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n="list_rgtH",c="item_i3mt";var l=r(6010),i=r(9960),s=r(941);function o(e){let{data:t=[],wrapperClassName:r,wrapperStyle:o}=e;return a.createElement("div",{style:o,className:(0,l.Z)(n,r)},t.map((e=>a.createElement("div",{key:e.title,className:c},a.createElement(i.Z,{to:e.link},a.createElement(s.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},94:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7294);const n="unorderedList_Bf_c",c="listItem_mbuj",l="titleArea_SAgt",i="title_RnVK",s="linkSVG_P7Tu";var o=r(6010),p=r(9960),u=r(941),d=r(6982);function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return a.createElement("div",{style:m,className:(0,o.Z)(n,r)},a.createElement("ul",null,t.map(((e,t)=>a.createElement("li",{className:c,key:t},a.createElement(u.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),a.createElement(p.Z,{to:e.link,className:l},a.createElement("div",{className:i},e.title),a.createElement("div",{className:s},a.createElement(d.Z,null))))))))}},6142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>y});var a=r(7462),n=(r(7294),r(3905)),c=r(4998),l=r(3278),i=r(7719);const s=r.p+"assets/images/react_typescript-82ed1af5b96c2a786d0a12eb8170e5a1.png";var o=r(94);const p={title:"\u4f7f\u7528 TypeScript",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},u=void 0,d={unversionedId:"react/use-typescript/index",id:"react/use-typescript/index",title:"\u4f7f\u7528 TypeScript",description:"",source:"@site/docs/react/use-typescript/index.mdx",sourceDirName:"react/use-typescript",slug:"/react/use-typescript/",permalink:"/blog/docs/react/use-typescript/",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"\u4f7f\u7528 TypeScript",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"\u5b89\u88c5 Redux",permalink:"/blog/docs/react/redux/installation"}},m={},y=[{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],f={toc:y};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{src:i.Z,title:"\u4f7f\u7528 TypeScript",mdxType:"FeatureIcon"}),(0,n.kt)(l.Z,{data:[{title:"React \u4e2d\u7684\u7c7b\u578b",link:"/docs/react/use-typescript/types-in-react",src:i.Z}],mdxType:"LinkList"}),(0,n.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,n.kt)(o.Z,{data:[{title:"React+TypeScript Cheatsheets",link:"https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets",src:s}],mdxType:"ReferenceList"}))}v.isMDXComponent=!0},7719:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"}}]);