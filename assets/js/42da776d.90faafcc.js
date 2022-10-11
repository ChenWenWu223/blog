"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[8644],{1750:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a="highlightArea__DwO",o=n(6010),p=n(3320);function l(e){var t=e.children,n=e.bgColor,l=e.wrapperClassName,c=e.wrapperStyle,u={backgroundColor:""+(0,p.yz)(n)},s=Object.assign(u,c);return r.createElement("span",{className:(0,o.Z)(a,l),style:s},t)}},3320:function(e,t,n){var r;function a(){var e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function o(e){navigator.clipboard.writeText(e)}n.d(t,{tq:function(){return a},Vf:function(){return o},yz:function(){return l}}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var p;function l(e){switch(e){case p.Primary:case"":case void 0:case null:return"#25c2a0";case p.Red:return"#e53935";case p.Pink:return"#d81b60";case p.Blue:return"#1e88e5";case p.Purple:return"#ba68c8";case p.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(p||(p={}))},3286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),p=n(1750),l=["components"],c={title:"splice"},u=void 0,s={unversionedId:"javascript/reference-types/array/splice",id:"javascript/reference-types/array/splice",title:"splice",description:"splice() \u65b9\u6cd5\u901a\u8fc7\u5220\u9664\u6216\u66ff\u6362\u73b0\u6709\u5143\u7d20\u3001\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u4fee\u6539\uff08\u5220\u9664\uff09\u5185\u5bb9\u7684\u6570\u7ec4\uff0c\u6b64\u65b9\u6cd5\u4f1a\u6539\u53d8\u539f\u6570\u7ec4\u3002",source:"@site/docs/javascript/reference-types/array/splice.mdx",sourceDirName:"javascript/reference-types/array",slug:"/javascript/reference-types/array/splice",permalink:"/blog/docs/javascript/reference-types/array/splice",draft:!1,tags:[],version:"current",frontMatter:{title:"splice"},sidebar:"javascript",previous:{title:"\u6570\u7ec4",permalink:"/blog/docs/javascript/reference-types/array/"},next:{title:"\u7c7b\u6570\u7ec4\u5bf9\u8c61",permalink:"/blog/docs/javascript/reference-types/array-like-object"}},i={},m=[{value:"\u622a\u53d6\u6570\u7ec4\u524d n \u9879",id:"\u622a\u53d6\u6570\u7ec4\u524d-n-\u9879",level:2},{value:"\u622a\u53d6\u6570\u7ec4\u540e n \u9879",id:"\u622a\u53d6\u6570\u7ec4\u540e-n-\u9879",level:2},{value:"\u63d2\u5165 n \u4e2a\u5143\u7d20",id:"\u63d2\u5165-n-\u4e2a\u5143\u7d20",level:2},{value:"\u66ff\u6362 n \u4e2a\u5143\u7d20",id:"\u66ff\u6362-n-\u4e2a\u5143\u7d20",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\u901a\u8fc7",(0,o.kt)(p.Z,{mdxType:"TH"},"\u5220\u9664"),"\u6216",(0,o.kt)(p.Z,{mdxType:"TH"},"\u66ff\u6362"),"\u73b0\u6709\u5143\u7d20\u3001",(0,o.kt)(p.Z,{mdxType:"TH"},"\u6dfb\u52a0"),"\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76",(0,o.kt)(p.Z,{mdxType:"TH"},"\u8fd4\u56de\u4fee\u6539\uff08\u5220\u9664\uff09\u5185\u5bb9\u7684\u6570\u7ec4"),"\uff0c\u6b64\u65b9\u6cd5",(0,o.kt)(p.Z,{mdxType:"TH"},"\u4f1a\u6539\u53d8\u539f\u6570\u7ec4"),"\u3002"),(0,o.kt)("h2",{id:"\u622a\u53d6\u6570\u7ec4\u524d-n-\u9879"},"\u622a\u53d6\u6570\u7ec4\u524d n \u9879"),(0,o.kt)("p",null,"\u5982\u4e0b superHero \u6570\u7ec4\uff0c\u6211\u60f3\u5c06\u5176\u4e2d\u7684 DC \u8d85\u7ea7\u82f1\u96c4\u548c\u6f2b\u5a01\u8d85\u7ea7\u82f1\u96c4\u5206\u5f00\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\uff0c\u4ece 0 \u4e0b\u6807\u7684\u5143\u7d20\u5f00\u59cb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const superHeros = [\n  "Batman",\n  "Superman",\n  "Wonderwoman",\n  "Ironman",\n  "Spiderman",\n];\nlet deleteItems = superHeros.splice(0, 3);\nconsole.log(superHeros); // expected output: Array ["Ironman", "Spiderman"]\nconsole.log(deleteItems); // expected output: Array ["Batman", "Superman", "Wonderwoman"]\n')),(0,o.kt)("h2",{id:"\u622a\u53d6\u6570\u7ec4\u540e-n-\u9879"},"\u622a\u53d6\u6570\u7ec4\u540e n \u9879"),(0,o.kt)("p",null,"\u4e0a\u8ff0 superHero \u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u53bb\u9664\u524d\u9762\u7684\u6f2b\u5a01\u8d85\u7ea7\u82f1\u96c4\uff0c\u6765\u5f97\u5230 DC \u8d85\u7ea7\u82f1\u96c4\u7684\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(3, 2);\nconsole.log(superHeros); // expected output: Array ["Batman", "Superman", "Wonderwoman"]\nconsole.log(deleteItems); // expected output: Array ["Ironman", "Spiderman"]\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"start:int")," \u5982\u679c",(0,o.kt)("strong",{parentName:"p"},"\u8d85\u8fc7\u6570\u7ec4\u957f\u5ea6"),"\uff0c\u5219\u4ece",(0,o.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u672b\u5c3e\u5f00\u59cb\u6dfb\u52a0\u5185\u5bb9"),"\uff1b\u5982\u679c\u662f",(0,o.kt)("strong",{parentName:"p"},"\u8d1f\u6570"),"\uff0c\u5219\u8868\u793a",(0,o.kt)("strong",{parentName:"p"},"\u4ece\u672b\u5c3e\u5f00\u59cb"),"\u7684\u7b2c\u51e0\u4f4d\uff0c\u5982\u679c\u8d1f\u6570\u7684\u7edd\u5bf9\u503c\u5927\u4e8e\u6570\u7ec4\u957f\u5ea6\uff0c\u5219\u8868\u793a\u5f00\u59cb\u4f4d\u7f6e\u4e3a\u4e0b\u6807\u4e3a 0 \u7684\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u540c\u7406\u4e0a\u8ff0\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u5199\u6210\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u53c2\u6570\u53d6\u5176\u7edd\u5bf9\u503c 2\uff0c\u8868\u793a\u4ece\u672b\u5c3e\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5f00\u59cb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHero.splice(-2, 2);\nconsole.log(deleteItems); // expect output: Array ["Ironman", "Spiderman"]\n')),(0,o.kt)("h2",{id:"\u63d2\u5165-n-\u4e2a\u5143\u7d20"},"\u63d2\u5165 n \u4e2a\u5143\u7d20"),(0,o.kt)("p",null,'\u5728\u7d22\u5f15\u4e3a 0 \u5904\uff0c\u63d2\u5165\u4e00\u4e2a\u5143\u7d20 "Aquaman"\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 0, "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Batman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array []\n')),(0,o.kt)("p",null,"\u63d2\u5165 n \u4e2a\u5143\u7d20\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 0, "Aquaman", "Aquaman", "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Aquaman", "Aquaman", "Batman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array []\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteCount")," \u4e3a 0\uff0c\u8868\u793a\u4e0d\u5220\u9664\u5143\u7d20\uff0c\u6240\u4ee5\u4f1a\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002")),(0,o.kt)("h2",{id:"\u66ff\u6362-n-\u4e2a\u5143\u7d20"},"\u66ff\u6362 n \u4e2a\u5143\u7d20"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 1, "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array ["Batman"]\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f1a",(0,o.kt)(p.Z,{mdxType:"TH"},"\u5148\u6267\u884c\u5220\u9664\u64cd\u4f5c"),"\u518d\u6267\u884c\u6dfb\u52a0\u64cd\u4f5c\u3002")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||i[d]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);