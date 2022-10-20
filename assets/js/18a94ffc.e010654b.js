"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[9628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4998:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a="featureIconArea_kxlx",c="title_Utvl";var o=r(6010),i=r(941);function l(e){let{onClick:t,src:r,srcDark:l,title:s,wrapperClassName:p,wrapperStyle:u}=e;return n.createElement("div",{className:(0,o.Z)(a,p),style:u},n.createElement(i.Z,{sources:{light:r,dark:l||r},alt:s,loading:"lazy",onClick:t}),n.createElement("div",{className:c},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const a="list_rgtH",c="item_i3mt";var o=r(6010),i=r(9960),l=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return n.createElement("div",{style:s,className:(0,o.Z)(a,r)},t.map((e=>n.createElement("div",{key:e.title,className:c},n.createElement(i.Z,{to:e.link},n.createElement(l.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},8548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),c=r(4998),o=r(3278),i=r(9195);const l={title:"\u6700\u4f73\u5b9e\u8df5",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},s=void 0,p={unversionedId:"react/best-practice/index",id:"react/best-practice/index",title:"\u6700\u4f73\u5b9e\u8df5",description:"",source:"@site/docs/react/best-practice/index.mdx",sourceDirName:"react/best-practice",slug:"/react/best-practice/",permalink:"/blog/docs/react/best-practice/",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"\u6700\u4f73\u5b9e\u8df5",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"\u56fe\u7247\u5bfc\u5165",permalink:"/blog/docs/react/solutions/import-image"},next:{title:"\u7ec4\u4ef6\u8bbe\u8ba1",permalink:"/blog/docs/react/best-practice/component-design"}},u={},d=[],m={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{src:i.Z,title:"\u6700\u4f73\u5b9e\u8df5",mdxType:"FeatureIcon"}),(0,a.kt)(o.Z,{data:[{title:"\u7ec4\u4ef6\u8bbe\u8ba1",link:"/docs/react/best-practice/component-design",src:i.Z}],mdxType:"LinkList"}))}f.isMDXComponent=!0},9195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"}}]);