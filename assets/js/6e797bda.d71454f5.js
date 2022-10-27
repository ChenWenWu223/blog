"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[7457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,v=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>c});var n,a=r(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const c=e=>{let{title:t,titleId:r,...c}=e;return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},c),t?a.createElement("title",{id:r},t):null,n||(n=a.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="featureIconArea_kxlx",i="title_Utvl";var c=r(6010),l=r(941);function o(e){let{onClick:t,src:r,srcDark:o,title:s,wrapperClassName:p,wrapperStyle:d}=e;return n.createElement("div",{className:(0,c.Z)(a,p),style:d},n.createElement(l.Z,{sources:{light:r,dark:o||r},alt:s,loading:"lazy",onClick:t}),n.createElement("div",{className:i},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const a="list_rgtH",i="item_i3mt";var c=r(6010),l=r(9960),o=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return n.createElement("div",{style:s,className:(0,c.Z)(a,r)},t.map((e=>n.createElement("div",{key:e.title,className:i},n.createElement(l.Z,{to:e.link},n.createElement(o.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294);const a="unorderedList_Bf_c",i="listItem_mbuj",c="titleArea_SAgt",l="title_RnVK",o="linkSVG_P7Tu";var s=r(6010),p=r(9960),d=r(941),m=r(6982);const u=r.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function v(e){let{data:t=[],wrapperClassName:r,wrapperStyle:v}=e;return n.createElement("div",{style:v,className:(0,s.Z)(a,r)},n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",{className:i,key:t},n.createElement(d.Z,{sources:{light:e.src||u,dark:e.srcDark?e.srcDark:e.src||u},alt:e.title,loading:"lazy"}),n.createElement(p.Z,{to:e.link,className:c},n.createElement("div",{className:l},e.title),n.createElement("div",{className:o},n.createElement(m.Z,null))))))))}},178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>v});var n=r(7462),a=(r(7294),r(3905)),i=r(4998),c=r(3278),l=r(2639),o=r(9351),s=r(6231);const p={title:"\u9762\u8bd5 - \u624b\u5199\u5b9e\u73b0",hide_title:!0},d=void 0,m={unversionedId:"interview/hands-on-practice/index",id:"interview/hands-on-practice/index",title:"\u9762\u8bd5 - \u624b\u5199\u5b9e\u73b0",description:"<LinkList",source:"@site/docs/interview/hands-on-practice/index.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/",permalink:"/blog/docs/interview/hands-on-practice/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u9762\u8bd5 - \u624b\u5199\u5b9e\u73b0",hide_title:!0},sidebar:"interview",previous:{title:"export \u548c export default \u7684\u533a\u522b",permalink:"/blog/docs/interview/javascript/export-and-export-default"},next:{title:"\u5b9e\u73b0 call\u3001apply\u3001bind",permalink:"/blog/docs/interview/hands-on-practice/call-apply-bind"}},u={},v=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],f={toc:v};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{src:o.Z,title:"\u624b\u5199\u5b9e\u73b0",mdxType:"FeatureIcon"}),(0,a.kt)(c.Z,{data:[{title:"\u5b9e\u73b0 call\u3001apply\u3001bind",link:"/docs/interview/hands-on-practice/call-apply-bind",src:o.Z},{title:"\u9632\u6296\u8282\u6d41",link:"/docs/interview/hands-on-practice/throttle-debounce",src:o.Z},{title:"\u5b9e\u73b0 Promise",link:"/docs/interview/hands-on-practice/hands-on-promise",src:o.Z},{title:"\u57fa\u4e8e Promise \u7684 Ajax \u5c01\u88c5",link:"/docs/interview/hands-on-practice/hands-on-promise",src:o.Z},{title:"\u5f02\u6b65\u5faa\u73af\u6253\u5370",link:"/docs/interview/hands-on-practice/async-print",src:o.Z},{title:"\u5f02\u6b65\u8bf7\u6c42\u63a7\u5236",link:"/docs/interview/hands-on-practice/concurrent-requests",src:o.Z},{title:"\u5b9e\u73b0 new",link:"/docs/interview/hands-on-practice/hands-on-new",src:o.Z},{title:"\u5b9e\u73b0 instanceof",link:"/docs/interview/hands-on-practice/hands-on-instanceof",src:o.Z},{title:"\u6df1\u3001\u6d45\u62f7\u8d1d",link:"/docs/interview/hands-on-practice/deep-copy",src:o.Z},{title:"\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f",link:"/docs/interview/hands-on-practice/singleton",src:o.Z},{title:"\u624b\u52a8\u5b9e\u73b0 ES5 \u7ee7\u627f",link:"/docs/interview/hands-on-practice/es5-inheritance",src:o.Z},{title:"\u5c06 Virtual Dom \u8f6c\u5316\u4e3a\u771f\u5b9e DOM \u7ed3\u6784",link:"/docs/interview/hands-on-practice/vitual-dom",src:o.Z}],mdxType:"LinkList"}),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)(s.Z,{data:[{title:"awesome-coding-js",link:"https://www.conardli.top/",src:l.Z}],mdxType:"ReferenceList"}))}y.isMDXComponent=!0},9351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},2639:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pokeball-6c6b4cb944d0eedc032f9e0e1cee0fad.png"}}]);