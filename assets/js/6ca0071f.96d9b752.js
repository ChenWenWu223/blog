"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[2876],{9923:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a="featureIconArea_kxlx",o="title_Utvl",c=r(6010),i=r(7002);function l(e){var t=e.onClick,r=e.src,l=e.srcDark,s=e.title,u=e.wrapperClassName,p=e.wrapperStyle;return n.createElement("div",{className:(0,c.Z)(a,u),style:p},n.createElement(i.Z,{sources:{light:r,dark:l||r},alt:s,loading:"lazy",onClick:t}),n.createElement("div",{className:o},s))}},2771:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a="list_rgtH",o="item_i3mt",c=r(6010),i=r(8746),l=r(7002);function s(e){var t=e.data,r=void 0===t?[]:t,s=e.wrapperClassName,u=e.wrapperStyle;return n.createElement("div",{style:u,className:(0,c.Z)(a,s)},r.map((function(e){return n.createElement("div",{key:e.title,className:o},n.createElement(i.Z,{to:e.link},n.createElement(l.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title))})))}},2469:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),c=r(9923),i=r(2771),l=r(9195),s=["components"],u={title:"\u89e3\u51b3\u65b9\u6848",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Cww"}},p=void 0,d={unversionedId:"react/solutions/index",id:"react/solutions/index",title:"\u89e3\u51b3\u65b9\u6848",description:"",source:"@site/docs/react/solutions/index.mdx",sourceDirName:"react/solutions",slug:"/react/solutions/",permalink:"/docs/react/solutions/",draft:!1,tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",frontMatter:{title:"\u89e3\u51b3\u65b9\u6848",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Cww"}},sidebar:"react",previous:{title:"\u7ec4\u4ef6\u4ea4\u4e92",permalink:"/docs/react/components-interaction"},next:{title:"\u6587\u4ef6\u4e0b\u8f7d",permalink:"/docs/react/solutions/download-file"}},f={},m=[],y={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.Z,{src:l.Z,title:"\u89e3\u51b3\u65b9\u6848",mdxType:"FeatureIcon"}),(0,o.kt)(i.Z,{data:[{title:"\u6587\u4ef6\u4e0b\u8f7d",link:"/docs/react/solutions/download-file",src:l.Z},{title:"\u56fe\u7247\u5bfc\u5165",link:"/docs/react/solutions/import-image",src:l.Z}],mdxType:"LinkList"}))}v.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9195:function(e,t,r){t.Z=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"}}]);