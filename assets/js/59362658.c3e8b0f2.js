"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[2267],{3589:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),u=["components"],c={slug:"mdx-blog-post",title:"MDX Blog Post",tags:["docusaurus"]},l=void 0,s={permalink:"/blog/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\u5e748\u67081\u65e5",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},i={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Blog posts support ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<button onClick={() => alert("button clicked!")}>Click me!</button>\n')),(0,a.kt)("button",{onClick:function(){return alert("button clicked!")}},"Click me!")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,u(u({ref:t},i),{},{components:r})):n.createElement(g,u({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);