"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[834],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"\u7a7a\u503c\u5408\u5e76 ??"},i=void 0,s={unversionedId:"javascript/operators-and-expressions/nullish-coalescing",id:"javascript/operators-and-expressions/nullish-coalescing",title:"\u7a7a\u503c\u5408\u5e76 ??",description:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0d\u662f null \u6216 undefined \uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5426\u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002",source:"@site/docs/javascript/operators-and-expressions/nullish-coalescing.mdx",sourceDirName:"javascript/operators-and-expressions",slug:"/javascript/operators-and-expressions/nullish-coalescing",permalink:"/blog/docs/javascript/operators-and-expressions/nullish-coalescing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7a7a\u503c\u5408\u5e76 ??"},sidebar:"javascript",previous:{title:"\u903b\u8f91\u6216 ||",permalink:"/blog/docs/javascript/operators-and-expressions/logic-or"},next:{title:"\u903b\u8f91\u7a7a\u8d4b\u503c ??=",permalink:"/blog/docs/javascript/operators-and-expressions/logical-nullish-assignment"}},l={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," \uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5426\u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript" showLineNumbers',title:'"JavaScript"',showLineNumbers:!0},"console.log(null ?? 1); // expected: 1\nconsole.log(undefined ?? 1); // expected: 1\nconsole.log(1 ?? 2); // expected: 1\n")))}u.isMDXComponent=!0}}]);