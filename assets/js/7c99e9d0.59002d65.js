"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[3449],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u89e3\u6784\u8d4b\u503c"},s=void 0,l={unversionedId:"javascript/operators-and-expressions/destructuring-assignment",id:"javascript/operators-and-expressions/destructuring-assignment",title:"\u89e3\u6784\u8d4b\u503c",description:"\u89e3\u6784\u662f\u4e00\u79cd JavaScript \u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u6570\u7ec4\u6216\u5bf9\u8c61\u7684\u5c5e\u6027\u5c06\u503c\u5206\u89e3\u4e3a\u4e0d\u540c\u7684\u53d8\u91cf\u3002",source:"@site/docs/javascript/operators-and-expressions/destructuring-assignment.mdx",sourceDirName:"javascript/operators-and-expressions",slug:"/javascript/operators-and-expressions/destructuring-assignment",permalink:"/blog/docs/javascript/operators-and-expressions/destructuring-assignment",draft:!1,tags:[],version:"current",frontMatter:{title:"\u89e3\u6784\u8d4b\u503c"},sidebar:"javascript",previous:{title:"\u53ef\u9009\u94fe ?.",permalink:"/blog/docs/javascript/operators-and-expressions/option-chaining"},next:{title:"\u5f15\u7528\u7c7b\u578b",permalink:"/blog/docs/javascript/reference-types/"}},i={},c=[{value:"\u6570\u7ec4\u89e3\u6784",id:"\u6570\u7ec4\u89e3\u6784",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u4ea4\u6362\u53d8\u91cf",id:"\u4ea4\u6362\u53d8\u91cf",level:3},{value:"\u89e3\u6790\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u6570\u7ec4",id:"\u89e3\u6790\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u6570\u7ec4",level:3},{value:"\u5ffd\u7565\u8fd4\u56de\u503c",id:"\u5ffd\u7565\u8fd4\u56de\u503c",level:3},{value:"\u5269\u4f59\u53c2\u6570\u5339\u914d",id:"\u5269\u4f59\u53c2\u6570\u5339\u914d",level:3},{value:"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u63d0\u53d6\u503c",id:"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u63d0\u53d6\u503c",level:3},{value:"\u5bf9\u8c61\u89e3\u6784",id:"\u5bf9\u8c61\u89e3\u6784",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u6784"),"\u662f\u4e00\u79cd JavaScript \u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u6570\u7ec4"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u7684\u5c5e\u6027\u5c06\u503c\u5206\u89e3\u4e3a\u4e0d\u540c\u7684\u53d8\u91cf\u3002"),(0,a.kt)("h2",{id:"\u6570\u7ec4\u89e3\u6784"},"\u6570\u7ec4\u89e3\u6784"),(0,a.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const [firstElement, secondElement] = list;\n// is equivalent to:\nconst firstElement = list[0];\nconst secondElement = list[1];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5269\u4f59\u6a21\u5f0f\nconst [firstElement, secondElement, ...restElements] = [10, 20, 30, 40, 50];\n// is equivalent to:\nconst firstElement = 10;\nconst secondElement = 20;\nconst restElements = [30, 40, 50];\n")),(0,a.kt)("p",null,"\u82e5\u89e3\u6784\u4e00\u4e2a\u6307\u5b9a\u957f\u5ea6\u4e3a N \u7684\u6570\u7ec4\uff0c\u82e5\u8d4b\u503c\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u53d8\u91cf\u6570\u5927\u4e8e N\uff0c\u5219\u53ea\u6709\u524d N \u4e2a\u53d8\u91cf\u4f1a\u88ab\u8d4b\u503c\uff0c\u5269\u4f59\u7684\u53d8\u91cf\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,a.kt)("h3",{id:"\u4ea4\u6362\u53d8\u91cf"},"\u4ea4\u6362\u53d8\u91cf"),(0,a.kt)("p",null,"\u4f7f\u7528\u89e3\u6784\u8d4b\u503c\uff0c\u5728\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u65f6\uff0c\u53ef\u4ee5\u7701\u53bb\u989d\u5916\u58f0\u660e\u4e00\u4e2a\u4e2d\u95f4\u53d8\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{4,9} showLineNumbers","{4,9}":!0,showLineNumbers:!0},"let a = 1;\nlet b = 3;\n\n[a, b] = [b, a];\nconsole.log(a); // expected: 3\nconsole.log(b); // expected: 1\n\nconst arr = [1, 2, 3];\n[arr[2], arr[1]] = [arr[1], arr[2]];\nconsole.log(arr); // expected: [1,3,2]\n")),(0,a.kt)("h3",{id:"\u89e3\u6790\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u6570\u7ec4"},"\u89e3\u6790\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{5} showLineNumbers","{5}":!0,showLineNumbers:!0},"function f() {\n  return [1, 2];\n}\n\nvar a, b;\n[a, b] = f();\nconsole.log(a); // expected: 1\nconsole.log(b); // expected: 2\n")),(0,a.kt)("h3",{id:"\u5ffd\u7565\u8fd4\u56de\u503c"},"\u5ffd\u7565\u8fd4\u56de\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{5} showLineNumbers","{5}":!0,showLineNumbers:!0},"function f() {\n  return [1, 2, 3];\n}\n\nvar [a, , b] = f();\nconsole.log(a); // expected: 1\nconsole.log(b); // expected: 3\n[, ,] = f(); // \u5ffd\u7565\u5168\u90e8\u8fd4\u56de\u503c\n")),(0,a.kt)("h3",{id:"\u5269\u4f59\u53c2\u6570\u5339\u914d"},"\u5269\u4f59\u53c2\u6570\u5339\u914d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];\nconsole.log(a, b, c, d, e, f); // expected: 1 2 3 4 5 6\nconst [h, i, ...[j, ...[k]]] = [1, 2, 3, 4, 5, 6];\nconsole.log(h, i, j, k); // expected: 1 2 3 4\nconst [h, i, ...[j, ...k]] = [1, 2, 3, 4, 5, 6];\nconsole.log(h, i, j, k); // expected: 1 2 3 [4, 5, 6]\n")),(0,a.kt)("h3",{id:"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u63d0\u53d6\u503c"},"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u63d0\u53d6\u503c"),(0,a.kt)("p",null,"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec()")," \u65b9\u6cd5\u5339\u914d\u5b57\u7b26\u4e32\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u8be5\u6570\u7ec4\u7b2c\u4e00\u4e2a\u503c\u662f\u5b8c\u5168\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u7684\u503c\u662f\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u62ec\u53f7\u5185\u5185\u5bb9\u90e8\u5206\u3002\u89e3\u6784\u8d4b\u503c\u5141\u8bb8\u4f60\u8f7b\u6613\u5730\u63d0\u53d6\u51fa\u9700\u8981\u7684\u90e8\u5206\uff0c\u5ffd\u7565\u5b8c\u5168\u5339\u914d\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"parseProtocol")," \u51fd\u6570\u7528\u4e8e\u63d0\u53d6 URL \u4e2d\u4f7f\u7528\u7684\u534f\u8bae\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'function parseProtocol(url) {\n  var parsedURL = /^(\\w+)\\:\\/\\/([^\\/]+)\\/(.*)$/.exec(url);\n  if (!parsedURL) {\n    return false;\n  }\n  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]\n\n  var [, protocol, fullhost, fullpath] = parsedURL;\n  return protocol;\n}\n\nconsole.log(\n  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript")\n); // "https"\n')),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u89e3\u6784"},"\u5bf9\u8c61\u89e3\u6784"))}u.isMDXComponent=!0}}]);