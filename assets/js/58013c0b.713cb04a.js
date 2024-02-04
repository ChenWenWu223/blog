"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[3684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6663:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294);const a="listWrapper_JZ7x",c="cardWrapper_R0nX",s="mobileCardWrapper_qqGz",o="image_O1GS",i="title_pahK",p="title_sm_CtYL",l="title_md_s7_s";var d=r(6010),u=r(9960),f=r(838);function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return n.createElement("div",{style:m,className:(0,d.Z)(a,r)},t.map((e=>n.createElement(u.Z,{key:e.title,className:(0,f.tq)()?s:c,to:e.link},n.createElement("img",{className:(0,d.Z)(o),src:e.src,alt:e.title}),!(0,f.tq)()&&n.createElement("div",{className:(0,d.Z)(i,"md"===e.fontSize&&l,"sm"===e.fontSize&&p)},e.title)))))}},1402:(e,t,r)=>{r.d(t,{qg:()=>g,HA:()=>c,Rc:()=>b,yb:()=>a,qT:()=>y,b6:()=>s});const n="GitHub",a={frontend:"Frontend",css:"CSS",javascript:"JavaScript",typescript:"TypeScript",react:"React",rn:"React Native",vue:"Vue",tailwindcss:"Tailwind",webpack:"Webpack"},c={backend:"Backend",nodejs:"Node.js",mongodb:"MongoDB"},s={others:"Others",git:"Git",github:n};var o=r(2679),i=r(9351),p=r(7719),l=r(9195),d=r(3246),u=r(3258);const f=r.p+"assets/images/git-0d190006bbd50b0681b5421d960913f0.png";function m(e,t,r,n){return void 0===n&&(n="lg"),{title:e,link:t,src:r,fontSize:n}}const b=[m(a.css,"/docs/css",o.Z),m(a.javascript,"/docs/javascript",i.Z),m(a.typescript,"/docs/typescript",p.Z),m(a.react,"/docs/react",l.Z),m(a.rn,"/docs/rn",l.Z),m(a.webpack,"/docs/webpack",d.Z)],g=[m(c.nodejs,"/docs/nodejs",u.Z)],y=[m(s.git,"/docs/git",f)]},838:(e,t,r)=>{let n;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}r.d(t,{tq:()=>a,yz:()=>s}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(n||(n={}));var c;function s(e){switch(e){case c.Primary:case"":case void 0:case null:return"#25c2a0";case c.Red:return"#e53935";case c.Pink:return"#d81b60";case c.Blue:return"#1e88e5";case c.Purple:return"#ba68c8";case c.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(c||(c={}))},8387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),c=r(6663),s=r(1402);const o={title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0},i=void 0,p={unversionedId:"front-end",id:"front-end",title:"\u524d\u7aef",description:"",source:"@site/docs/front-end.mdx",sourceDirName:".",slug:"/front-end",permalink:"/docs/front-end",draft:!1,tags:[],version:"current",frontMatter:{title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0}},l={},d=[],u={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{data:s.Rc,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}))}f.isMDXComponent=!0},2679:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/css-7cd3a363a3f794a19b2a456b4e81a4ac.png"},9351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},3258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nodejs-b508473ad71a31ce2fae7ed21e4942a4.png"},9195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},7719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"},3246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/webpack-bcf4578f43d8fcf4cf2556916253b859.png"}}]);