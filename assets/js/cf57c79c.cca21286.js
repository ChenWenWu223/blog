"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[3934],{3200:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={title:"\u4e2d\u95f4\u4ef6",description:"",tags:[{label:"Prisma",permalink:"prisma"}],last_update:{date:"2022-07-30",author:"Cww"}},c=void 0,l={unversionedId:"nodejs/prisma/prisma-client/middleware",id:"nodejs/prisma/prisma-client/middleware",title:"\u4e2d\u95f4\u4ef6",description:"",source:"@site/docs/nodejs/prisma/prisma-client/middleware.mdx",sourceDirName:"nodejs/prisma/prisma-client",slug:"/nodejs/prisma/prisma-client/middleware",permalink:"/docs/nodejs/prisma/prisma-client/middleware",draft:!1,tags:[{label:"Prisma",permalink:"/docs/tags/prisma"}],version:"current",frontMatter:{title:"\u4e2d\u95f4\u4ef6",description:"",tags:[{label:"Prisma",permalink:"prisma"}],last_update:{date:"2022-07-30",author:"Cww"}},sidebar:"nodejs",previous:{title:"CRUD",permalink:"/docs/nodejs/prisma/prisma-client/crud"},next:{title:"\u6570\u636e\u5e93\u8fde\u63a5\u7ba1\u7406",permalink:"/docs/nodejs/prisma/database-connection-management"}},p={},u=[{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u8ba1\u7b97\u67e5\u8be2\u6570\u636e\u5e93\u65f6\u95f4\u7684\u65e5\u5fd7\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="prisma.ts"',title:'"prisma.ts"'},"const prisma = new PrismaClient();\n\nprisma.$use(async (params, next) => {\n  const before = Date.now();\n  const result = await next(params);\n  const after = Date.now();\n  console.log(\n    `Query ${params.model}.${params.action} took ${after - before}ms`\n  );\n  return result;\n});\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);