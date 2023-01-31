"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[1479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"export \u548c export default \u7684\u533a\u522b"},p=void 0,l={unversionedId:"interview/javascript/export-and-export-default",id:"interview/javascript/export-and-export-default",title:"export \u548c export default \u7684\u533a\u522b",description:"\u4e00\u3001\u6982\u8ff0",source:"@site/docs/interview/javascript/export-and-export-default.mdx",sourceDirName:"interview/javascript",slug:"/interview/javascript/export-and-export-default",permalink:"/cww/docs/interview/javascript/export-and-export-default",draft:!1,tags:[],version:"current",frontMatter:{title:"export \u548c export default \u7684\u533a\u522b"},sidebar:"interview",previous:{title:"\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",permalink:"/cww/docs/interview/javascript/difference-arrow-function"},next:{title:"\u9762\u8bd5 - \u624b\u5199\u5b9e\u73b0",permalink:"/cww/docs/interview/hands-on-practice/"}},i={},s=[{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:2},{value:"\u4e8c\u3001export\u547d\u4ee4",id:"\u4e8cexport\u547d\u4ee4",level:2},{value:"\u4e09\u3001import\u547d\u4ee4",id:"\u4e09import\u547d\u4ee4",level:2},{value:"\u56db\u3001export default \u547d\u4ee4",id:"\u56dbexport-default-\u547d\u4ee4",level:2},{value:"\u4e94\u3001\u7b80\u8ff0\u533a\u522b",id:"\u4e94\u7b80\u8ff0\u533a\u522b",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 ES6 \u4e4b\u524d\uff0c\u793e\u533a\u5236\u5b9a\u4e86\u4e00\u4e9b\u6a21\u5757\u52a0\u8f7d\u65b9\u6848\uff0c\u6700\u4e3b\u8981\u7684\u6709 CommonJS \u548c AMD \u4e24\u79cd\u3002\u524d\u8005\u7528\u4e8e\u670d\u52a1\u5668\uff0c\u540e\u8005\u7528\u4e8e\u6d4f\u89c8\u5668\u3002ES6 \u5728\u8bed\u8a00\u6807\u51c6\u7684\u5c42\u9762\u4e0a\uff0c\u5b9e\u73b0\u4e86\u6a21\u5757\u529f\u80fd\uff0c\u800c\u4e14\u5b9e\u73b0\u5f97\u76f8\u5f53\u7b80\u5355\uff0c\u5b8c\u5168\u53ef\u4ee5\u53d6\u4ee3 CommonJS \u548c AMD \u89c4\u8303\uff0c\u6210\u4e3a\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u901a\u7528\u7684\u6a21\u5757\u89e3\u51b3\u65b9\u6848\u3002")),(0,a.kt)("p",null,"ES6\u4e2d\uff0c\u5728JavaScript ES6\u4e2d\uff0cexport\u4e0eexport default\u5747\u53ef\u7528\u4e8e\u5bfc\u51fa\u5e38\u91cf\u3001\u51fd\u6570\u3001\u6587\u4ef6\u3001\u6a21\u5757\u7b49\u3002"),(0,a.kt)("h2",{id:"\u4e8cexport\u547d\u4ee4"},"\u4e8c\u3001export\u547d\u4ee4"),(0,a.kt)("p",null,"\u6a21\u5757\u529f\u80fd\u4e3b\u8981\u7531\u4e24\u4e2a\u547d\u4ee4\u6784\u6210\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"export"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\u3002export\u547d\u4ee4\u7528\u4e8e\u89c4\u5b9a\u6a21\u5757\u7684\u5bf9\u5916\u63a5\u53e3\uff0cimport\u547d\u4ee4\u7528\u4e8e\u8f93\u5165\u5176\u4ed6\u6a21\u5757\u63d0\u4f9b\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u6a21\u5757\u5c31\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5185\u90e8\u7684\u6240\u6709\u53d8\u91cf\uff0c\u5916\u90e8\u65e0\u6cd5\u83b7\u53d6\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5916\u90e8\u80fd\u591f\u8bfb\u53d6\u6a21\u5757\u5185\u90e8\u7684\u67d0\u4e2a\u53d8\u91cf\uff0c\u5c31\u5fc5\u987b\u4f7f\u7528export\u5173\u952e\u5b57\u8f93\u51fa\u8be5\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2ajs\u6587\u4ef6\uff0c\u91cc\u9762\u4f7f\u7528export\u547d\u4ee4\u6765\u8f93\u51fa\u53d8\u91cf\uff0c\u51fd\u6570\u6216\u7c7b\uff08class\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// a.js\nexport var str = "export\u7684\u5185\u5bb9";\nexport  var year =2019;\nexport function message(sth) {\n    return sth;\n}\n')),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u5199\u6cd5\uff0c\u8fd8\u6709\u4e00\u79cd\u63a8\u8350\u4f7f\u7528\u7684\uff0c\u56e0\u4e3a\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u811a\u672c\u5c3e\u90e8\uff0c\u4e00\u773c\u770b\u6e05\u695a\u8f93\u51fa\u4e86\u54ea\u4e9b\u53d8\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// a.js\nvar str = "export\u7684\u5185\u5bb9";\nvar year =2019;\nfunction message(sth) {\n    return sth;\n}\nexport {str,year,message}\n')),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cexport\u8f93\u51fa\u7684\u53d8\u91cf\u5c31\u662f\u672c\u6765\u7684\u540d\u5b57\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528as\u5173\u952e\u5b57\u91cd\u547d\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// a.js\nvar str = "export\u7684\u5185\u5bb9";\nvar year =2019;\nfunction message(sth) {\n    return sth;\n}\nexport {\nstr as newname1,\n    year as newname2,\n    message as newname3\n};\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f7f\u7528as\u5173\u952e\u5b57\uff0c\u91cd\u547d\u540d\u4e86\u53d8\u91cfstr\u548cyear\uff0c\u4ee5\u53ca\u51fd\u6570message\u7684\u5bf9\u5916\u63a5\u53e3\u3002"),(0,a.kt)("h2",{id:"\u4e09import\u547d\u4ee4"},"\u4e09\u3001import\u547d\u4ee4"),(0,a.kt)("p",null,"\u4f7f\u7528export\u547d\u4ee4\u5b9a\u4e49\u4e86\u6a21\u5757\u7684\u5bf9\u5916\u63a5\u53e3\u4ee5\u540e\uff0c\u5176\u4ed6 JS \u6587\u4ef6\u5c31\u53ef\u4ee5\u901a\u8fc7import\u547d\u4ee4\u52a0\u8f7d\u8fd9\u4e2a\u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// b.js\nimport { str,year, message } from './a';\n//\u4e5f\u53ef\u4ee5\u5206\u5f00\u5199\u4e24\u6b21\uff0c\u5bfc\u5165\u7684\u65f6\u5019\u5e26\u82b1\u62ec\u53f7\uff0c\u5c06\u6bcf\u4e2a\u53d8\u91cf\u51fd\u6570\u540d\u5199\u6e05\u695a\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u7684import\u547d\u4ee4\uff0c\u7528\u4e8e\u52a0\u8f7da.js\u6587\u4ef6,\u5f15\u5165\u540e\u4fbf\u53ef\u4ee5\u5728b.js\u6587\u4ef6\u4e2d\u4f7f\u7528a.js\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf\u3001\u51fd\u6570\u6216\u7c7b\u7b49\u3002import\u547d\u4ee4\u63a5\u53d7\u4e00\u5bf9\u5927\u62ec\u53f7\uff0c\u91cc\u9762\u6307\u5b9a\u8981\u4ece\u5176\u4ed6\u6a21\u5757\u5bfc\u5165\u7684\u53d8\u91cf\u540d\u3002\u5927\u62ec\u53f7\u91cc\u9762\u7684\u53d8\u91cf\u540d\uff0c\u5fc5\u987b\u4e0e\u88ab\u5bfc\u5165\u6a21\u5757\uff08a.js\uff09\u5bf9\u5916\u63a5\u53e3\u7684\u540d\u79f0\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u4e3a\u8f93\u5165\u7684\u53d8\u91cf\u91cd\u65b0\u53d6\u4e00\u4e2a\u540d\u5b57\uff0cimport\u547d\u4ee4\u8981\u4f7f\u7528as\u5173\u952e\u5b57\uff0c\u5c06\u8f93\u5165\u7684\u53d8\u91cf\u91cd\u547d\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// b.js\nimport { str as newname1,\n        year as newname2,\n        message as newname3\n       } from './a';\n")),(0,a.kt)("p",null,"import\u540e\u9762\u7684from\u6307\u5b9a\u6a21\u5757\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c.js\u540e\u7f00\u53ef\u4ee5\u7701\u7565\u3002\u5982\u679c\u53ea\u662f\u6a21\u5757\u540d\uff0c\u4e0d\u5e26\u6709\u8def\u5f84\uff0c\u90a3\u4e48\u5fc5\u987b\u6709\u914d\u7f6e\u6587\u4ef6\uff0c\u544a\u8bc9 JavaScript \u5f15\u64ce\u8be5\u6a21\u5757\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// import\u5f15\u5165\u4e00\u4e2a\u4f9d\u8d56\u5305\uff0c\u4e0d\u9700\u8981\u76f8\u5bf9\u8def\u5f84\u3002\nimport axios from \u2018axios\u2019;\n// import \u5f15\u5165\u4e00\u4e2a\u81ea\u5df1\u5199\u7684js\u6587\u4ef6\uff0c\u662f\u9700\u8981\u76f8\u5bf9\u8def\u5f84\u7684\u3002\nimport AppService from \u2018./appService\u2019;\n")),(0,a.kt)("h2",{id:"\u56dbexport-default-\u547d\u4ee4"},"\u56db\u3001export default \u547d\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export default"),"\u547d\u4ee4\u7528\u4e8e\u6307\u5b9a\u6a21\u5757\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u9ed8\u8ba4\u8f93\u51fa"),"\u3002\u663e\u7136\uff0c\u4e00\u4e2a\u6a21\u5757\u53ea\u80fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u8f93\u51fa\uff0c\u56e0\u6b64export default\u547d\u4ee4\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u3002\u6240\u4ee5\uff0cimport\u547d\u4ee4\u540e\u9762\u624d\u4e0d\u7528\u52a0\u5927\u62ec\u53f7\uff0c\u56e0\u4e3a\u53ea\u53ef\u80fd\u552f\u4e00\u5bf9\u5e94export default\u547d\u4ee4\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a\u6587\u4ef6\u5185\u4e0d\u80fd\u6709\u591a\u4e2aexport default"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// a.js\nconst str = \"export default\u7684\u5185\u5bb9\";\nexport default str // \u5728\u53e6\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u5bfc\u5165\u65b9\u5f0f\uff1a\n// b.js \nimport StrFile from 'a'; \n// \u5bfc\u5165\u7684\u65f6\u5019\u6ca1\u6709\u82b1\u62ec\u53f7\n// \u672c\u8d28\u4e0a\uff0ca.js\u6587\u4ef6\u7684export default\u8f93\u51fa\u4e00\u4e2a\u53eb\u505adefault\u7684\u53d8\u91cf\uff0c\u7136\u540e\u7cfb\u7edf\u5141\u8bb8\u4f60\u5f15\u5165\u7684\u65f6\u5019\u4e3a\u5b83\u53d6\u4efb\u610f\u540d\u5b57\u3002\n")),(0,a.kt)("h2",{id:"\u4e94\u7b80\u8ff0\u533a\u522b"},"\u4e94\u3001\u7b80\u8ff0\u533a\u522b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"export"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"export default"),"\u5747\u53ef\u7528\u4e8e\u5bfc\u51fa\u5e38\u91cf\u3001\u51fd\u6570\u3001\u6587\u4ef6\u3001\u6a21\u5757\u7b49"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e00\u4e2a\u6587\u4ef6\u6216\u6a21\u5757\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"export"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"import"),"\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"export default"),"\u4ec5\u6709\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"export"),"\u65b9\u5f0f\u5bfc\u51fa\uff0c\u5728\u5bfc\u5165\u65f6\u8981\u52a0{ }\uff0cexport default\u5219\u4e0d\u9700\u8981\uff0c\u5e76\u53ef\u4ee5\u8d77\u4efb\u610f\u540d\u79f0")),(0,a.kt)("p",null,"(1) \u8f93\u51fa\u5355\u4e2a\u503c\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"export default")),(0,a.kt)("p",null,"(2) \u8f93\u51fa\u591a\u4e2a\u503c\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"export")),(0,a.kt)("p",null,"(3) ",(0,a.kt)("inlineCode",{parentName:"p"},"export default"),"\u4e0e\u666e\u901a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"export"),"\u4e0d\u8981\u540c\u65f6\u4f7f\u7528"))}c.isMDXComponent=!0}}]);