"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[4241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u8def\u7531",description:"",tags:[{label:"React Router",permalink:"react-router"}],last_update:{date:"2022-08-08",author:"Winwoo"}},c=void 0,u={unversionedId:"react/react-router/routers",id:"react/react-router/routers",title:"\u8def\u7531",description:"",source:"@site/docs/react/react-router/routers.mdx",sourceDirName:"react/react-router",slug:"/react/react-router/routers",permalink:"/docs/react/react-router/routers",draft:!1,tags:[{label:"React Router",permalink:"/docs/tags/react-router"}],version:"current",frontMatter:{title:"\u8def\u7531",description:"",tags:[{label:"React Router",permalink:"react-router"}],last_update:{date:"2022-08-08",author:"Winwoo"}},sidebar:"react",previous:{title:"\u5b89\u88c5 React Router",permalink:"/docs/react/react-router/installation"},next:{title:"\u7ec4\u4ef6",permalink:"/docs/react/react-router/components/"}},i={},l=[{value:"\u672a\u5339\u914d\u9875\u9762 (404)",id:"\u672a\u5339\u914d\u9875\u9762-404",level:2}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u672a\u5339\u914d\u9875\u9762-404"},"\u672a\u5339\u914d\u9875\u9762 (404)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"path")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," \u7684\u8def\u7531\u653e\u7f6e\u5728\u6700\u5e95\u90e8\uff0c\u53ef\u4ee5\u5339\u914d\u5176\u4ed6\uff08\u4e0d\u5b58\u5728\u7684\uff09\u8def\u7531\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx" {11} showLineNumbers',title:'"App.tsx"',"{11}":!0,showLineNumbers:!0},'import { BrowserRouter, Routes, Route } from "react-router-dom";\n\nexport default function App(): JSX.Element {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<Home />} />\n        <Route path="/" element={<Layout />}>\n          <Route path="/note" element={<Note />} />\n        </Route>\n        <Route path="*" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n')))}s.isMDXComponent=!0}}]);