"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[295],{3905:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),u=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},i=function(n){var e=u(n.components);return r.createElement(o.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,o=n.parentName,i=s(n,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(f,c(c({ref:e},i),{},{components:t})):r.createElement(f,c({ref:e},i))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,c=new Array(l);c[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:a,c[1]=s;for(var u=2;u<l;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4998:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(7294);const a="featureIconArea_kxlx",l="title_Utvl";var c=t(6010),s=t(941);function o(n){let{onClick:e,src:t,srcDark:o,title:u,wrapperClassName:i,wrapperStyle:p}=n;return r.createElement("div",{className:(0,c.Z)(a,i),style:p},r.createElement(s.Z,{sources:{light:t,dark:o||t},alt:u,loading:"lazy",onClick:e}),r.createElement("div",{className:l},u))}},4638:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(4998),c=t(9351);const s={title:"\u67ef\u91cc\u5316"},o=void 0,u={unversionedId:"javascript/curring",id:"javascript/curring",title:"\u67ef\u91cc\u5316",description:"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u67ef\u91cc\u5316\uff08\u82f1\u8bed\uff1aCurrying \uff09\uff0c\u53c8\u8bd1\u4e3a\u5361\u745e\u5316\u6216\u52a0\u91cc\u5316\uff0c\u662f\u628a\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u53d8\u6362\u6210\u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u53c2\u6570\uff08\u6700\u521d\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u8fd4\u56de\u63a5\u53d7\u4f59\u4e0b\u7684\u53c2\u6570\uff0c\u800c\u4e14\u8fd4\u56de\u7ed3\u679c\u7684\u65b0\u51fd\u6570\u7684\u6280\u672f\u3002",source:"@site/docs/javascript/curring.mdx",sourceDirName:"javascript",slug:"/javascript/curring",permalink:"/blog/docs/javascript/curring",draft:!1,tags:[],version:"current",frontMatter:{title:"\u67ef\u91cc\u5316"},sidebar:"javascript",previous:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/blog/docs/javascript/event-loop"},next:{title:"\u89e3\u51b3\u65b9\u6848",permalink:"/blog/docs/javascript/solutions/"}},i={},p=[{value:"\u573a\u666f",id:"\u573a\u666f",level:4},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:4},{value:"\u7b2c\u4e00\u7248",id:"\u7b2c\u4e00\u7248",level:5},{value:"\u7b2c\u4e8c\u7248",id:"\u7b2c\u4e8c\u7248",level:5},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:4},{value:"Redux \u4e2d\u95f4\u4ef6",id:"redux-\u4e2d\u95f4\u4ef6",level:5},{value:"\u51fd\u6570\u7684\u7ec4\u5408\u6a21\u5f0f",id:"\u51fd\u6570\u7684\u7ec4\u5408\u6a21\u5f0f",level:5},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:4}],m={toc:p};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{src:c.Z,title:"\u67ef\u91cc\u5316",mdxType:"FeatureIcon"}),(0,a.kt)("p",null,"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u67ef\u91cc\u5316\uff08\u82f1\u8bed\uff1aCurrying \uff09\uff0c\u53c8\u8bd1\u4e3a\u5361\u745e\u5316\u6216\u52a0\u91cc\u5316\uff0c\u662f\u628a\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u53d8\u6362\u6210\u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u53c2\u6570\uff08\u6700\u521d\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u8fd4\u56de\u63a5\u53d7\u4f59\u4e0b\u7684\u53c2\u6570\uff0c\u800c\u4e14\u8fd4\u56de\u7ed3\u679c\u7684\u65b0\u51fd\u6570\u7684\u6280\u672f\u3002\n",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u4f53\u73b0\u5728\u51fd\u6570\u91cc\u9762\u8fd4\u56de\u51fd\u6570"),"\u3002\u5c31\u662f\u5c06\u591a\u53d8\u91cf\u51fd\u6570\u62c6\u89e3\u4e3a\u5355\u53d8\u91cf\uff08\u6216\u90e8\u5206\u53d8\u91cf\uff09\u7684\u591a\u4e2a\u51fd\u6570\u5e76\u4f9d\u6b21\u8c03\u7528\u3002\u76f4\u767d\u4e00\u70b9\uff1a\u5229\u7528\u95ed\u5305\uff0c\u53ef\u4ee5\u5f62\u6210\u4e00\u4e2a\u4e0d\u9500\u6bc1\u7684\u79c1\u6709\u4f5c\u7528\u57df\uff0c\u628a\u9884\u5148\u5904\u7406\u7684\u5185\u5bb9\u90fd\u5b58\u5728\u8fd9\u4e2a\u4e0d\u9500\u6bc1\u7684\u4f5c\u7528\u57df\u91cc\u9762\uff0c\u5e76\u4e14\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u4ee5\u540e\u8981\u6267\u884c\u7684\u5c31\u662f\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u76ee\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5316\u4f20\u53c2\uff0c\u5316\u591a\u53c2\u6570\u51fd\u6570\u4e3a\u5355\u53c2\u6570\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e00\u804c\u8d23\u539f\u5219\uff1a\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u5f80\u5f80\u662f\u8ba9\u4e00\u4e2a\u51fd\u6570\u5904\u7406\u7684\u95ee\u9898\u5c3d\u53ef\u80fd\u5355\u4e00\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5904\u7406\u591a\u4e2a\u4efb\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u7ef4\u62a4\u6027\u4ee5\u53ca\u964d\u4f4e\u4ee3\u7801\u7684\u91cd\u590d\u6027")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const log = (a, b, c) => {\n  console.log(a, b, c);\n};\nlog(1, 2, 3); /// 1 2 3\nlet curryLog = curry(log);\ncurryLog(1)(2)(3); // 1 2 3\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u8d28\u4e0a\u662f\u964d\u4f4e\u901a\u7528\u6027\uff0c\u63d0\u9ad8\u9002\u7528\u6027\u3002"))),(0,a.kt)("h4",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"\u5728 react \u9879\u76ee\u4e2d\u4f7f\u7528 antd \u8868\u5355\u7684\u65f6\u5019\uff0c\u9047\u5230\u4e00\u4e9b\u8001\u9879\u76ee\uff0c\u9700\u8981\u6821\u9a8c\u5bc6\u7801\u7684\u5f3a\u5f31\u3001\u6821\u9a8c\u8f93\u5165\u7684\u89c4\u5219\u7b49\uff0c\u5982\u679c\u6bcf\u6b21\u90fd\u662f\u4f20\u6b63\u5219\u548c\u9700\u8981\u6821\u9a8c\u7684\u5b57\u7b26\u4e32\uff0c\u6709\u70b9\u9ebb\u70e6\u3002\u5e0c\u671b\u7684\u6548\u679c\uff1a\u901a\u8fc7\u7ed9\u4e00\u4e2a\u51fd\u6570\u4f20\u6b63\u5219\u53c2\u6570\uff0c\u7136\u540e\u5f97\u5230\u4e00\u4e2a\u51fd\u6570\uff0c\u540e\u7eed\u53ea\u9700\u8981\u5c06\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u91cd\u590d\u4f20\u5165\u6b63\u5219\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const testFn = curryingFn(/www.abc.com/g);\n\nconst result1 = testFn("abc"); // false\n\nconst result2 = testFn("www.abc.com"); // true\n\nconst addFn = (x, y, z) => {\n  return x + y + z;\n};\n\nconst addResultFn = addFn(1, 2, 3);\n\n// \u5c06\u4e0a\u8ff0\u8fc7\u7a0b\u8f6c\u5316\u4e3a\u4e0b\u9762\u7684\u5b9e\u73b0\u8fc7\u7a0b\u5c31\u662f\u67ef\u91cc\u5316\nconst simplifySumFn = (x) => (y) => (z) => {\n  return x + y + z;\n};\n\nconst sum = sumFn(1)(2)(3);\n')),(0,a.kt)("p",null,"\u5316\u591a\u53c2\u6570\u4e3a\u5355\u4e00\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u793a\u610f\u800c\u5df2\nfunction ajax(type, url, data) {\n  var xhr = new XMLHttpRequest();\n  xhr.open(type, url, true);\n  xhr.send(data);\n}\n\n// \u867d\u7136 ajax \u8fd9\u4e2a\u51fd\u6570\u975e\u5e38\u901a\u7528\uff0c\u4f46\u5728\u91cd\u590d\u8c03\u7528\u7684\u65f6\u5019\u53c2\u6570\u5197\u4f59\najax("POST", "www.test.com", "name=kevin");\najax("POST", "www.test2.com", "name=kevin");\najax("POST", "www.test3.com", "name=kevin");\n\n// \u5229\u7528 curry\nvar ajaxCurry = curry(ajax);\n\n// \u4ee5 POST \u7c7b\u578b\u8bf7\u6c42\u6570\u636e\nvar post = ajaxCurry("POST");\npost("www.test.com", "name=kevin");\n\n// \u4ee5 POST \u7c7b\u578b\u8bf7\u6c42\u6765\u81ea\u4e8e www.test.com \u7684\u6570\u636e\nvar postFromTest = post("www.test.com");\npostFromTest("name=kevin");\n')),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\n\u6bd4\u5982\u6211\u4eec\u6709\u8fd9\u6837\u4e00\u6bb5\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var person = [{ name: "kevin" }, { name: "daisy" }];\n')),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u8981\u83b7\u53d6\u6240\u6709\u7684 name \u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var name = person.map(function (item) {\n  return item.name;\n});\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\u5982\u679c\u6211\u4eec\u6709 curry \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var prop = curry(function (key, obj) {\n  return obj[key];\n});\nvar name = person.map(prop("name"));\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4e3a\u4e86\u83b7\u53d6 name \u5c5e\u6027\u8fd8\u8981\u518d\u7f16\u5199\u4e00\u4e2a prop \u51fd\u6570\uff0c\u662f\u4e0d\u662f\u53c8\u9ebb\u70e6\u4e86\u4e9b\uff1f\n\u4f46\u662f\u8981\u6ce8\u610f\uff0cprop \u51fd\u6570\u7f16\u5199\u4e00\u6b21\u540e\uff0c\u4ee5\u540e\u53ef\u4ee5\u591a\u6b21\u4f7f\u7528\uff0c\u5b9e\u9645\u4e0a\u4ee3\u7801\u4ece\u539f\u672c\u7684\u4e09\u884c\u7cbe\u7b80\u6210\u4e86\u4e00\u884c\uff0c\u800c\u4e14\u4f60\u770b\u4ee3\u7801\u662f\u4e0d\u662f\u66f4\u52a0\u6613\u61c2\u4e86\uff1f\n",(0,a.kt)("inlineCode",{parentName:"p"},"person.map(prop('name'))")," \u5c31\u597d\u50cf\u76f4\u767d\u7684\u544a\u8bc9\u4f60\uff1aperson \u5bf9\u8c61\u904d\u5386(map)\u83b7\u53d6(prop) name \u5c5e\u6027\u3002"),(0,a.kt)("h4",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("p",null,"\u53c2\u6570\u4e2a\u6570\u90fd\u4e0d\u80fd\u8d85\u8fc7\u51fd\u6570\u7684\u8981\u6c42\uff0c\u4e0d\u7136\u4f1a\u62a5\u9519"),(0,a.kt)("h5",{id:"\u7b2c\u4e00\u7248"},"\u7b2c\u4e00\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var curry = function (fn) {\n  var args = [].slice.call(arguments, 1); // args \u662f curry \u65f6\u9664\u51fd\u6570 fn \u5916\u7684\u53c2\u6570\n  return function () {\n    var newArgs = args.concat([].slice.call(arguments)); // \u6b64\u5904\u7684 arguments \u662f\u67ef\u91cc\u5316\u4ea7\u7269\u51fd\u6570\u5728\u6267\u884c\u65f6\u63a5\u6536\u7684\u51fd\u6570\u3002\u4e0e\u67ef\u91cc\u5316\u65f6\u7684 args \u8fdb\u884c\u62fc\u63a5\uff0c\u4f20\u9012\u7ed9 fn \u6267\u884c\n    return fn.apply(this, newArgs);\n  };\n};\n\nfunction add(a, b) {\n  return a + b;\n}\n\nvar addCurry = curry(add, 1, 2);\naddCurry(); // 3\n//\u6216\u8005\nvar addCurry = curry(add, 1);\naddCurry(2); // 3\n//\u6216\u8005\nvar addCurry = curry(add);\naddCurry(1, 2); // 3\n")),(0,a.kt)("h5",{id:"\u7b2c\u4e8c\u7248"},"\u7b2c\u4e8c\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function sub_curry(fn) {\n  var args = [].slice.call(arguments, 1);\n  return function () {\n    return fn.apply(this, args.concat([].slice.call(arguments)));\n  };\n}\n\nfunction curry(fn, length) {\n  length = length || fn.length; // \u8bb0\u5f55\u67ef\u91cc\u5316\u51fd\u6570\u7684\u53c2\u6570\u4e2a\u6570\n  var slice = Array.prototype.slice;\n  return function () {\n    if (arguments.length < length) {\n      // \u5982\u679c\u67ef\u91cc\u5316\u51fd\u6570\u5df2\u63a5\u6536\u7684\u53c2\u6570\u6570\u5c0f\u4e8e\u9700\u8981\u53c2\u6570\u4e2a\u6570\uff0c\u5219\u9012\u5f52\u6267\u884c\uff0c\u7ee7\u7eed\u7b49\u5f85\n      var combined = [fn].concat(slice.call(arguments)); // \u5c06\u53c2\u6570\u8fdb\u884c\u62fc\u63a5\u4fdd\u7559\n      return curry(sub_curry.apply(this, combined), length - arguments.length); // \u9012\u5f52\u6267\u884c\uff0c\u66f4\u65b0\u5269\u4f59\u6240\u9700\u53c2\u6570\u4e2a\u6570\n    } else {\n      return fn.apply(this, arguments); // \u6240\u9700\u53c2\u6570\u5df2\u8db3\u591f\uff0c\u5c06\u6240\u6709\u53c2\u6570\u4f20\u9012\u7ed9 fn \u6267\u884c\n    }\n  };\n}\n\n// \u9a8c\u8bc1\nvar fn = curry(function (a, b, c) {\n  return [a, b, c];\n});\n\nfn("a", "b", "c"); // ["a", "b", "c"]\nfn("a", "b")("c"); // ["a", "b", "c"]\nfn("a")("b")("c"); // ["a", "b", "c"]\nfn("a")("b", "c"); // ["a", "b", "c"]\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"sub_curry \u7684\u4f5c\u7528\u5c31\u662f\u7528\u51fd\u6570\u5305\u88f9\u539f\u51fd\u6570\uff0c\u7136\u540e\u7ed9\u539f\u51fd\u6570\u4f20\u5165\u4e4b\u524d\u7684\u53c2\u6570\uff0c\u5f53\u6267\u884c fn0(...)(...) \u7684\u65f6\u5019\uff0c\u6267\u884c\u5305\u88f9\u51fd\u6570\uff0c\u8fd4\u56de\u539f\u51fd\u6570\uff0c\u7136\u540e\u518d\u8c03\u7528 sub_curry \u518d\u5305\u88f9\u539f\u51fd\u6570\uff0c\u7136\u540e\u5c06\u65b0\u7684\u53c2\u6570\u6df7\u5408\u65e7\u7684\u53c2\u6570\u518d\u4f20\u5165\u539f\u51fd\u6570\uff0c\u76f4\u5230\u51fd\u6570\u53c2\u6570\u7684\u6570\u76ee\u8fbe\u5230\u8981\u6c42\u4e3a\u6b62\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const selfCurryFn = (fn) => {\n \xa0const fnLen = fn.length; \xa0// fn \u63a5\u6536\u7684\u53c2\u6570\n \xa0function curry(...args) {\n \xa0 \xa0const argLen = args.length; // curry \u63a5\u6536\u7684\u53c2\u6570\n \xa0 \xa0if(argLen >= fnLen) {\n \xa0 \xa0 \xa0return fn.apply(this, args); // \u5982\u679c\u5916\u9762\u7ed1\u5b9a this \u7684\u8bdd\uff0c\u76f4\u63a5\u7ed1\u5b9a\u5230fn\u4e0a\n \xa0  } else {\n \xa0 \xa0 \xa0// \u53c2\u6570\u4e2a\u6570\u6ca1\u6709\u8fbe\u5230\u65f6\u7ee7\u7eed\u63a5\u6536\u5269\u4f59\u7684\u53c2\u6570\n \xa0 \xa0 \xa0function otherCurry(...args2) {\n \xa0 \xa0 \xa0 \xa0return curry.apply(this, args.concat(args2))\n \xa0 \xa0  }\n \xa0 \xa0 \xa0return otherCurry;\n \xa0  }\n  }\n \xa0return curry;\n}\n\u2022\nconst selfAddFn = (x, y, z) => {\n \xa0return x + y + z;\n}\n\u2022\nconst selfSum = selfCurryFn(selfAddFn);\n\u2022\nconsole.log("\ud83d\ude80 ~ file: preview.html ~ line 80 ~ selfSum(1, 2, 3)", selfSum(1, 2, 3))\nconsole.log("\ud83d\ude80 ~ file: preview.html ~ line 81 ~ selfSum(1, 2)(3)", selfSum(1, 2)(3))\nconsole.log("\ud83d\ude80 ~ file: preview.html ~ line 81 ~ selfSum(1, 2)(3)", selfSum(1)(2)(3))\n')),(0,a.kt)("h4",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,a.kt)("h5",{id:"redux-\u4e2d\u95f4\u4ef6"},"Redux \u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function applyMiddleware(...middlewares) {\n  return (createStore) =>\n    (...args) => {\n      // \u5229\u7528\u4f20\u5165\u7684 createStore \u548c reducer \u548c\u521b\u5efa\u4e00\u4e2a store\n      const store = createStore(...args);\n      let dispatch = () => {\n        throw new Error();\n      };\n      const middlewareAPI = {\n        getState: store.getState,\n        dispatch: (...args) => dispatch(...args),\n      }; // middlewareAPI \u8fd9\u4e2a\u53c2\u6570\u5206\u522b\u6267\u884c\u4e00\u904d\n      const chain = middlewares.map((middleware) => middleware(middlewareAPI)); // \u7ec4\u88c5\u6210\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u5373\u65b0\u7684 dispatch\n      dispatch = compose(...chain)(store.dispatch);\n      return {\n        ...store,\n        dispatch,\n      };\n    };\n}\n")),(0,a.kt)("h5",{id:"\u51fd\u6570\u7684\u7ec4\u5408\u6a21\u5f0f"},"\u51fd\u6570\u7684\u7ec4\u5408\u6a21\u5f0f"),(0,a.kt)("p",null,"\u80cc\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5bf9\u67d0\u4e00\u4e2a\u51fd\u6570\u8fdb\u884c\u8c03\u7528\uff0c\u6267\u884c fn1\u3001fn2\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u662f\u4f9d\u6b21\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u6211\u4eec\u90fd\u9700\u8981\u8fdb\u884c\u4e24\u4e2a\u51fd\u6570\u7684\u8c03\u7528\uff0c\u64cd\u4f5c\u4e0a\u5c31\u4f1a\u663e\u793a\u7684\u91cd\u590d"),(0,a.kt)("li",{parentName:"ul"},"\u90a3\u4e48\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u5c06 fn1\u3001fn2 \u7ec4\u5408\u8d77\u6765\uff0c\u81ea\u52a8\u4e00\u6b21\u8c03\u7528\u5462\uff1f \u5176\u5b9e\u5b9e\u73b0\u4e0a\u8ff0\u7684\u8fc7\u7a0b\u5c31\u662f\u7ec4\u5408\u51fd\u6570\uff08compose function\uff09\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5e38\u89c4\u5199\u6cd5\nfunction compose(fn1, fn2) {\n  return function (num) {\n    return fn2(fn1(num));\n  };\n}\n\nconst fn1 = (num) => {\n  return num + 10;\n};\n\nconst fn2 = (num) => {\n  return num * num;\n};\n\nconst a = 10;\nconst newFn = compose(fn1, fn2);\nconst result = newFn(a);\n\n// \u67ef\u91cc\u5316\nfunction createCompose(...fns) {\n  const length = fns.length;\n  for (let i = 0; i < length; i++) {\n    if (typeof fns[i] !== "function") {\n      throw new TypeError("arguments is not function");\n    }\n  }\n  function compose(...args) {\n    let index = 0;\n    let result = length ? fns[index].apply(this, args) : args;\n    while (++index < length) {\n      result = fns[index].call(this, result);\n    }\n  }\n  return compose;\n}\n')),(0,a.kt)("h4",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.m.wikipedia.org/wiki/Currying"},"https://en.m.wikipedia.org/wiki/Currying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7181983157544042557"},"https://juejin.cn/post/7181983157544042557")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mqyqingfeng/Blog/issues/42"},"https://github.com/mqyqingfeng/Blog/issues/42"))))}d.isMDXComponent=!0},9351:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"}}]);