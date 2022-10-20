"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[3013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"DOM Elements",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},l=void 0,c={unversionedId:"react/dom/dom-elements",id:"react/dom/dom-elements",title:"DOM Elements",description:"",source:"@site/docs/react/dom/dom-elements.mdx",sourceDirName:"react/dom",slug:"/react/dom/dom-elements",permalink:"/blog/docs/react/dom/dom-elements",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"DOM Elements",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"DOM",permalink:"/blog/docs/react/dom/"},next:{title:"\u6837\u5f0f\u548c CSS",permalink:"/blog/docs/react/style-and-css/"}},i={},s=[{value:"dangerouslySetInnerHTML",id:"dangerouslysetinnerhtml",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dangerouslysetinnerhtml"},"dangerouslySetInnerHTML"),(0,o.kt)("p",null,"dangerouslySetInnerHTML \u662f React \u4e3a\u6d4f\u89c8\u5668 DOM \u63d0\u4f9b innerHTML \u7684\u66ff\u6362\u65b9\u6848\u3002\u901a\u5e38\u6765\u8bb2\uff0c\u4f7f\u7528\u4ee3\u7801\u76f4\u63a5\u8bbe\u7f6e HTML \u5b58\u5728\u98ce\u9669\uff0c\u56e0\u4e3a\u5f88\u5bb9\u6613\u65e0\u610f\u4e2d\u4f7f\u7528\u6237\u66b4\u9732\u4e8e ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"\u8de8\u7ad9\u811a\u672c(XSS)"))," \u7684\u653b\u51fb\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 React \u4e2d\u8bbe\u7f6e HTML\uff0c\u4f46\u5f53\u4f60\u60f3\u8bbe\u7f6e dangerouslySetInnerHTML \u65f6\uff0c\u9700\u8981\u5411\u5176\u4f20\u9012\u5305\u542b key \u4e3a ","_","_","html \u7684\u5bf9\u8c61\uff0c\u4ee5\u6b64\u6765\u8b66\u793a\u4f60\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Component() {\n  return <div dangerouslySetInnerHTML={{ __html: "<a href="#" />" }} />;\n}\n')))}u.isMDXComponent=!0}}]);