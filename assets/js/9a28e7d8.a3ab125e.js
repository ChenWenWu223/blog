"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[6638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4998:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const a="featureIconArea_kxlx",o="title_Utvl";var c=r(6010),l=r(941);function s(e){let{onClick:t,src:r,srcDark:s,title:i,wrapperClassName:p,wrapperStyle:u}=e;return n.createElement("div",{className:(0,c.Z)(a,p),style:u},n.createElement(l.Z,{sources:{light:r,dark:s||r},alt:i,loading:"lazy",onClick:t}),n.createElement("div",{className:o},i))}},3278:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const a="list_rgtH",o="item_i3mt";var c=r(6010),l=r(9960),s=r(941);function i(e){let{data:t=[],wrapperClassName:r,wrapperStyle:i}=e;return n.createElement("div",{style:i,className:(0,c.Z)(a,r)},t.map((e=>n.createElement("div",{key:e.title,className:o},n.createElement(l.Z,{to:e.link},n.createElement(s.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},2436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4998),c=r(3278),l=r(9195);const s={title:"Hooks",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},i=void 0,p={unversionedId:"react/hooks/index",id:"react/hooks/index",title:"Hooks",description:"",source:"@site/docs/react/hooks/index.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/",permalink:"/blog/docs/react/hooks/",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"Hooks",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"React",permalink:"/blog/docs/react/"},next:{title:"useState",permalink:"/blog/docs/react/hooks/useState"}},u={},d=[],m={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{src:l.Z,title:"Hooks",mdxType:"FeatureIcon"}),(0,a.kt)(c.Z,{data:[{title:"useState",link:"/docs/react/hooks/useState",src:l.Z},{title:"useEffect",link:"/docs/react/hooks/useEffect",src:l.Z},{title:"useRef",link:"/docs/react/hooks/useRef",src:l.Z},{title:"useContext",link:"/docs/react/hooks/useContext",src:l.Z}],mdxType:"LinkList"}))}f.isMDXComponent=!0},9195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"}}]);