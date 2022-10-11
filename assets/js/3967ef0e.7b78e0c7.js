"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[231],{1750:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a="highlightArea__DwO",o=n(6010),p=n(3320);function i(e){var t=e.children,n=e.bgColor,i=e.wrapperClassName,c=e.wrapperStyle,l={backgroundColor:""+(0,p.yz)(n)},s=Object.assign(l,c);return r.createElement("span",{className:(0,o.Z)(a,i),style:s},t)}},3320:function(e,t,n){var r;function a(){var e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function o(e){navigator.clipboard.writeText(e)}n.d(t,{tq:function(){return a},Vf:function(){return o},yz:function(){return i}}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var p;function i(e){switch(e){case p.Primary:case"":case void 0:case null:return"#25c2a0";case p.Red:return"#e53935";case p.Pink:return"#d81b60";case p.Blue:return"#1e88e5";case p.Purple:return"#ba68c8";case p.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(p||(p={}))},3175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),p=n(1750),i=["components"],c={title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Cww"}},l=void 0,s={unversionedId:"typescript/debug",id:"typescript/debug",title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",source:"@site/docs/typescript/debug.mdx",sourceDirName:"typescript",slug:"/typescript/debug",permalink:"/blog/docs/typescript/debug",draft:!1,tags:[{label:"TypeScript",permalink:"/blog/docs/tags/typescript"}],version:"current",frontMatter:{title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Cww"}},sidebar:"typescript",previous:{title:"\u642d\u5efa\u73af\u5883",permalink:"/blog/docs/typescript/environment"},next:{title:"\u7c7b\u578b",permalink:"/blog/docs/typescript/types/"}},u={},d=[{value:"\u5c06 TypeScript \u7f16\u8bd1\u6210 JavaScript",id:"\u5c06-typescript-\u7f16\u8bd1\u6210-javascript",level:2},{value:"\u5982\u4f55\u8fd0\u884c TypeScript \u6587\u4ef6",id:"\u5982\u4f55\u8fd0\u884c-typescript-\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 ts-node \u542f\u52a8 TypeScript \u6587\u4ef6",id:"\u4f7f\u7528-ts-node-\u542f\u52a8-typescript-\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 nodemon \u76d1\u89c6\u6587\u4ef6\u6539\u52a8\uff0c\u91cd\u542f\u9879\u76ee",id:"\u4f7f\u7528-nodemon-\u76d1\u89c6\u6587\u4ef6\u6539\u52a8\u91cd\u542f\u9879\u76ee",level:2},{value:"\u4f7f\u7528 Visual Studio Code \u8c03\u8bd5",id:"\u4f7f\u7528-visual-studio-code-\u8c03\u8bd5",level:2},{value:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6",id:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u76d1\u89c6\u8868\u8fbe\u5f0f",id:"\u76d1\u89c6\u8868\u8fbe\u5f0f",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5c06-typescript-\u7f16\u8bd1\u6210-javascript"},"\u5c06 TypeScript \u7f16\u8bd1\u6210 JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tsc\n")),(0,o.kt)("h2",{id:"\u5982\u4f55\u8fd0\u884c-typescript-\u6587\u4ef6"},"\u5982\u4f55\u8fd0\u884c TypeScript \u6587\u4ef6"),(0,o.kt)("p",null,"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\u9700\u8981\u5148\u5c06 ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," \u7f16\u8bd1\u6210 ",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),"\uff0c\u7136\u540e\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"node")," \u6267\u884c\u751f\u6210\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," \u547d\u4ee4\u7f16\u8bd1 ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\uff0c\u518d\u7528 ",(0,o.kt)("strong",{parentName:"p"},"node")," \u6267\u884c\u5f53\u524d\u6240\u5728\u76ee\u5f55\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tsc && node index.js\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528-ts-node-\u542f\u52a8-typescript-\u6587\u4ef6"},"\u4f7f\u7528 ts-node \u542f\u52a8 TypeScript \u6587\u4ef6"),(0,o.kt)("p",null,"\u8bf7\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/npm/ts-node"},"ts-node"),"\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-nodemon-\u76d1\u89c6\u6587\u4ef6\u6539\u52a8\u91cd\u542f\u9879\u76ee"},"\u4f7f\u7528 nodemon \u76d1\u89c6\u6587\u4ef6\u6539\u52a8\uff0c\u91cd\u542f\u9879\u76ee"),(0,o.kt)("p",null,"\u8bf7\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/npm/nodemon"},"nodemon"),"\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-visual-studio-code-\u8c03\u8bd5"},"\u4f7f\u7528 Visual Studio Code \u8c03\u8bd5"),(0,o.kt)("h3",{id:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6"},"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Visual Studio Code")," \u4fa7\u8fb9\u680f",(0,o.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5\u300d"),"\u4e2d\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json"),"\uff0c\u9009\u62e9\u8c03\u8bd5\u5668 ",(0,o.kt)(p.Z,{mdxType:"TH"},"Node.js"),"\uff0c\u751f\u6210\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "pwa-node",\n      "request": "launch",\n      "name": "Launch Program",\n      "skipFiles": ["<node_internals>/**"],\n      "program": "${workspaceFolder}/src/index.ts",\n      "outFiles": ["${workspaceFolder}/**/*.js"]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,o.kt)("p",null,"\u5728\u4fa7\u8fb9\u680f",(0,o.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5 - \u53d8\u91cf\u300d"),"\u4e2d\u53ef\u4ee5\u770b\u5230\u5168\u90e8\u53d8\u91cf\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"\u76d1\u89c6\u8868\u8fbe\u5f0f"},"\u76d1\u89c6\u8868\u8fbe\u5f0f"),(0,o.kt)("p",null,"\u5728\u4fa7\u8fb9\u680f",(0,o.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5 - \u76d1\u89c6\u300d"),"\u4e2d\u6dfb\u52a0",(0,o.kt)("strong",{parentName:"p"},"\u76d1\u89c6\u8868\u8fbe\u5f0f"),"\uff0c\u53ef\u4ee5\u6839\u636e",(0,o.kt)("strong",{parentName:"p"},"\u65ad\u70b9"),"\u76d1\u89c6\u8be5\u8868\u8fbe\u5f0f\u7684\u53d8\u5316\u3002"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);