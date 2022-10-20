"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[4536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>c});var n,a=r(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const c=e=>{let{title:t,titleId:r,...c}=e;return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},c),t?a.createElement("title",{id:r},t):null,n||(n=a.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="featureIconArea_kxlx",l="title_Utvl";var c=r(6010),i=r(941);function o(e){let{onClick:t,src:r,srcDark:o,title:s,wrapperClassName:p,wrapperStyle:u}=e;return n.createElement("div",{className:(0,c.Z)(a,p),style:u},n.createElement(i.Z,{sources:{light:r,dark:o||r},alt:s,loading:"lazy",onClick:t}),n.createElement("div",{className:l},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const a="list_rgtH",l="item_i3mt";var c=r(6010),i=r(9960),o=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return n.createElement("div",{style:s,className:(0,c.Z)(a,r)},t.map((e=>n.createElement("div",{key:e.title,className:l},n.createElement(i.Z,{to:e.link},n.createElement(o.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},94:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294);const a="unorderedList_Bf_c",l="listItem_mbuj",c="titleArea_SAgt",i="title_RnVK",o="linkSVG_P7Tu";var s=r(6010),p=r(9960),u=r(941),d=r(6982);function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return n.createElement("div",{style:m,className:(0,s.Z)(a,r)},n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",{className:l,key:t},n.createElement(u.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),n.createElement(p.Z,{to:e.link,className:c},n.createElement("div",{className:i},e.title),n.createElement("div",{className:o},n.createElement(d.Z,null))))))))}},2806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),l=r(4998),c=r(3278),i=r(9195),o=r(94);const s={title:"React Native",hide_title:!0},p=void 0,u={unversionedId:"rn/index",id:"rn/index",title:"React Native",description:"\u53c2\u8003",source:"@site/docs/rn/index.mdx",sourceDirName:"rn",slug:"/rn/",permalink:"/blog/docs/rn/",draft:!1,tags:[],version:"current",frontMatter:{title:"React Native",hide_title:!0},sidebar:"rn"},d={},m=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],v={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{src:i.Z,title:"React Native",mdxType:"FeatureIcon"}),(0,a.kt)(c.Z,{data:[],mdxType:"LinkList"}),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)(o.Z,{data:[{title:"React Native \u4e2d\u6587\u6587\u6863",link:"https://www.reactnative.cn/",src:i.Z}],mdxType:"ReferenceList"}))}f.isMDXComponent=!0},9195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"}}]);