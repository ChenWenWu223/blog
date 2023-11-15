"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[4668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const a="highlightArea__DwO";var o=r(6010),c=r(838);function i(e){let{children:t,bgColor:r,wrapperClassName:i,wrapperStyle:l}=e;const s={backgroundColor:`${(0,c.yz)(r)}`},p=Object.assign(s,l);return n.createElement("span",{className:(0,o.Z)(a,i),style:p},t)}},838:(e,t,r)=>{let n;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}r.d(t,{tq:()=>a,yz:()=>c}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(n||(n={}));var o;function c(e){switch(e){case o.Primary:case"":case void 0:case null:return"#25c2a0";case o.Red:return"#e53935";case o.Pink:return"#d81b60";case o.Blue:return"#1e88e5";case o.Purple:return"#ba68c8";case o.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(o||(o={}))},5146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(5713);const c={title:"\u5408\u5e76\u6570\u7ec4\u3001\u5bf9\u8c61"},i=void 0,l={unversionedId:"javascript/reference-types/join",id:"javascript/reference-types/join",title:"\u5408\u5e76\u6570\u7ec4\u3001\u5bf9\u8c61",description:"\u5408\u5e76\u6570\u7ec4",source:"@site/docs/javascript/reference-types/join.mdx",sourceDirName:"javascript/reference-types",slug:"/javascript/reference-types/join",permalink:"/blog/docs/javascript/reference-types/join",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5408\u5e76\u6570\u7ec4\u3001\u5bf9\u8c61"},sidebar:"javascript",previous:{title:"\u7c7b\u6570\u7ec4\u5bf9\u8c61",permalink:"/blog/docs/javascript/reference-types/array-like-object"},next:{title:"\u6d45\u590d\u5236\u4e0e\u6df1\u590d\u5236",permalink:"/blog/docs/javascript/reference-types/shallowcopy-and-deepcopy"}},s={},p=[{value:"\u5408\u5e76\u6570\u7ec4",id:"\u5408\u5e76\u6570\u7ec4",level:2},{value:"<code>Array.concat()</code>",id:"arrayconcat",level:3},{value:"\u5269\u4f59\u64cd\u4f5c\u7b26",id:"\u5269\u4f59\u64cd\u4f5c\u7b26",level:3},{value:"<code>Function.apply()</code>",id:"functionapply",level:3},{value:"\u5408\u5e76\u5bf9\u8c61",id:"\u5408\u5e76\u5bf9\u8c61",level:2},{value:"<code>Object.assign()</code>",id:"objectassign",level:3},{value:"\u5269\u4f59\u64cd\u4f5c\u7b26",id:"\u5269\u4f59\u64cd\u4f5c\u7b26-1",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5408\u5e76\u6570\u7ec4"},"\u5408\u5e76\u6570\u7ec4"),(0,a.kt)("h3",{id:"arrayconcat"},(0,a.kt)("inlineCode",{parentName:"h3"},"Array.concat()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript" showLineNumbers',title:'"JavaScript"',showLineNumbers:!0},"const arrA = [1, 2, 3];\nconst arrB = [4, 5, 6];\nconst result = arrA.concat(arrB);\nconsole.log(result); // expected: [ 1, 2, 3, 4, 5, 6 ]\nconsole.log(arrA.concat(arrB, arrA, arrB)); // expected: [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ]\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Array.concat()")," \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u4fee\u6539\u539f\u6570\u7ec4"),"\uff0c\u4f46\u662f\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",(0,a.kt)(o.Z,{mdxType:"TH"},"\u6d45\u62f7\u8d1d"),"\u6570\u7ec4\u3002")),(0,a.kt)("h3",{id:"\u5269\u4f59\u64cd\u4f5c\u7b26"},"\u5269\u4f59\u64cd\u4f5c\u7b26"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript" showLineNumbers',title:'"JavaScript"',showLineNumbers:!0},"const arrA = [1, 2, 3];\nconst arrB = [4, 5, 6];\nconst result = [...arrA, ...arrB];\nconsole.log(result); // expected: [ 1, 2, 3, 4, 5, 6 ]\nconsole.log([...arrB, ...arrA]); // expected: [ 4, 5, 6, 1, 2, 3 ]\n")),(0,a.kt)("h3",{id:"functionapply"},(0,a.kt)("inlineCode",{parentName:"h3"},"Function.apply()")),(0,a.kt)("h2",{id:"\u5408\u5e76\u5bf9\u8c61"},"\u5408\u5e76\u5bf9\u8c61"),(0,a.kt)("h3",{id:"objectassign"},(0,a.kt)("inlineCode",{parentName:"h3"},"Object.assign()")),(0,a.kt)("h3",{id:"\u5269\u4f59\u64cd\u4f5c\u7b26-1"},"\u5269\u4f59\u64cd\u4f5c\u7b26"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript" showLineNumbers',title:'"JavaScript"',showLineNumbers:!0},"const objA = { a: \"a\", b: \"b\", c: \"c\" };\nconst objB = { d: \"d\", e: \"e\", f: \"f\" };\nconst result = { ...objA, ...objB };\nconsole.log(result); // expected: { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' }\nconsole.log({ ...objB, ...objA }); // expected: { d: 'd', e: 'e', f: 'f', a: 'a', b: 'b', c: 'c' }\n")))}d.isMDXComponent=!0}}]);