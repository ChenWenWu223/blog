"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[8369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=i,m=d["".concat(s,".").concat(u)]||d[u]||y[u]||a;return r?n.createElement(m,l(l({ref:t},o),{},{components:r})):n.createElement(m,l({ref:t},o))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>l});var n,i=r(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const i="featureIconArea_kxlx",a="title_Utvl";var l=r(6010),c=r(941);function s(e){let{onClick:t,src:r,srcDark:s,title:p,wrapperClassName:o,wrapperStyle:y}=e;return n.createElement("div",{className:(0,l.Z)(i,o),style:y},n.createElement(c.Z,{sources:{light:r,dark:s||r},alt:p,loading:"lazy",onClick:t}),n.createElement("div",{className:a},p))}},3278:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294);const i="list_rgtH",a="item_i3mt";var l=r(6010),c=r(9960),s=r(941);function p(e){let{data:t=[],wrapperClassName:r,wrapperStyle:p}=e;return n.createElement("div",{style:p,className:(0,l.Z)(i,r)},t.map((e=>n.createElement("div",{key:e.title,className:a},n.createElement(c.Z,{to:e.link},n.createElement(s.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294);const i="unorderedList_Bf_c",a="listItem_mbuj",l="titleArea_SAgt",c="title_RnVK",s="linkSVG_P7Tu";var p=r(6010),o=r(9960),y=r(941),d=r(6982);const u=r.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return n.createElement("div",{style:m,className:(0,p.Z)(i,r)},n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",{className:a,key:t},n.createElement(y.Z,{sources:{light:e.src||u,dark:e.srcDark?e.srcDark:e.src||u},alt:e.title,loading:"lazy"}),n.createElement(o.Z,{to:e.link,className:l},n.createElement("div",{className:c},e.title),n.createElement("div",{className:s},n.createElement(d.Z,null))))))))}},466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>y,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),a=r(4998),l=r(3278),c=r(7719),s=r(6231);const p={title:"\u7c7b\u578b",hide_title:!0,description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},o=void 0,y={unversionedId:"typescript/types/index",id:"typescript/types/index",title:"\u7c7b\u578b",description:"",source:"@site/docs/typescript/types/index.mdx",sourceDirName:"typescript/types",slug:"/typescript/types/",permalink:"/cww/docs/typescript/types/",draft:!1,tags:[{label:"TypeScript",permalink:"/cww/docs/tags/typescript"}],version:"current",frontMatter:{title:"\u7c7b\u578b",hide_title:!0,description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},sidebar:"typescript",previous:{title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",permalink:"/cww/docs/typescript/debug"},next:{title:"any",permalink:"/cww/docs/typescript/types/any"}},d={},u=[{value:"\u57fa\u672c",id:"\u57fa\u672c",level:2},{value:"\u9ad8\u7ea7",id:"\u9ad8\u7ea7",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{src:c.Z,title:"\u7c7b\u578b",mdxType:"FeatureIcon"}),(0,i.kt)("h2",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,i.kt)(l.Z,{data:[{title:"\u5185\u7f6e\u7c7b\u578b",link:"/docs/typescript/types/built-in",src:c.Z},{title:"any",link:"/docs/typescript/types/any",src:c.Z},{title:"Enum",link:"/docs/typescript/types/enum",src:c.Z},{title:"Tuple",link:"/docs/typescript/types/tuple",src:c.Z},{title:"Array",link:"/docs/typescript/types/array",src:c.Z},{title:"Object",link:"/docs/typescript/types/object",src:c.Z},{title:"Function",link:"/docs/typescript/types/function",src:c.Z}],mdxType:"LinkList"}),(0,i.kt)("h2",{id:"\u9ad8\u7ea7"},"\u9ad8\u7ea7"),(0,i.kt)(l.Z,{data:[{title:"\u7c7b\u578b\u522b\u540d",link:"/docs/typescript/types/type-alias",src:c.Z},{title:"\u8054\u5408\u7c7b\u578b",link:"/docs/typescript/types/union-type",src:c.Z},{title:"\u4ea4\u53c9\u7c7b\u578b",link:"/docs/typescript/types/intersection-type",src:c.Z},{title:"\u5b57\u9762\u91cf\u7c7b\u578b",link:"/docs/typescript/types/literal-type",src:c.Z},{title:"\u53ef\u7a7a\u7c7b\u578b",link:"/docs/typescript/types/nullable-type",src:c.Z}],mdxType:"LinkList"}),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)(s.Z,{data:[{title:"TypeScript Docs",link:"https://www.typescriptlang.org/docs/",src:c.Z}],mdxType:"ReferenceList"}))}f.isMDXComponent=!0},7719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"}}]);