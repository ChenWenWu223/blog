"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[3642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5713:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const a="highlightArea__DwO";var l=n(6010),i=n(838);function o(e){let{children:t,bgColor:n,wrapperClassName:o,wrapperStyle:p}=e;const s={backgroundColor:`${(0,i.yz)(n)}`},c=Object.assign(s,p);return r.createElement("span",{className:(0,l.Z)(a,o),style:c},t)}},838:(e,t,n)=>{let r;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function l(e){navigator.clipboard.writeText(e)}n.d(t,{tq:()=>a,Vf:()=>l,yz:()=>o}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var i;function o(e){switch(e){case i.Primary:case"":case void 0:case null:return"#25c2a0";case i.Red:return"#e53935";case i.Pink:return"#d81b60";case i.Blue:return"#1e88e5";case i.Purple:return"#ba68c8";case i.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(i||(i={}))},7202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(5713);const i={title:"String"},o=void 0,p={unversionedId:"javascript/data-type/string",id:"javascript/data-type/string",title:"String",description:"\u6a21\u7248\u5b57\u9762\u91cf\u6807\u7b7e\u51fd\u6570",source:"@site/docs/javascript/data-type/string.mdx",sourceDirName:"javascript/data-type",slug:"/javascript/data-type/string",permalink:"/docs/javascript/data-type/string",draft:!1,tags:[],version:"current",frontMatter:{title:"String"},sidebar:"javascript",previous:{title:"Number",permalink:"/docs/javascript/data-type/number"},next:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/docs/javascript/data-type/type-conversion"}},s={},c=[{value:"\u6a21\u7248\u5b57\u9762\u91cf\u6807\u7b7e\u51fd\u6570",id:"\u6a21\u7248\u5b57\u9762\u91cf\u6807\u7b7e\u51fd\u6570",level:2},{value:"\u5269\u4f59\u64cd\u4f5c\u7b26\u4f5c\u4e3a\u53c2\u6570",id:"\u5269\u4f59\u64cd\u4f5c\u7b26\u4f5c\u4e3a\u53c2\u6570",level:3},{value:"\u9ed8\u8ba4\u8fd4\u56de\u5b57\u7b26\u4e32",id:"\u9ed8\u8ba4\u8fd4\u56de\u5b57\u7b26\u4e32",level:3},{value:"\u539f\u59cb\u5b57\u7b26\u4e32",id:"\u539f\u59cb\u5b57\u7b26\u4e32",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"length",id:"length",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"padStart",id:"padstart",level:3},{value:"padEnd",id:"padend",level:3},{value:"split",id:"split",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"<code>string.split(separator)</code> \u5206\u9694\u82f1\u6587\u5355\u8bcd",id:"stringsplitseparator-\u5206\u9694\u82f1\u6587\u5355\u8bcd",level:4},{value:"<code>string.split(separator)</code> \u5206\u9694\u82f1\u6587\u5b57\u6bcd",id:"stringsplitseparator-\u5206\u9694\u82f1\u6587\u5b57\u6bcd",level:4},{value:"<code>string.split(separator, limit)</code> \u9650\u5b9a\u5206\u9694\u540e\u6570\u7ec4\u7684\u957f\u5ea6",id:"stringsplitseparator-limit-\u9650\u5b9a\u5206\u9694\u540e\u6570\u7ec4\u7684\u957f\u5ea6",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6a21\u7248\u5b57\u9762\u91cf\u6807\u7b7e\u51fd\u6570"},"\u6a21\u7248\u5b57\u9762\u91cf\u6807\u7b7e\u51fd\u6570"),(0,a.kt)("p",null,"\u6a21\u7248\u5b57\u9762\u91cf\u652f\u6301\u5b9a\u4e49",(0,a.kt)(l.Z,{mdxType:"TH"},"\u6807\u7b7e\u51fd\u6570"),"\uff0c\u800c\u901a\u8fc7\u6807\u7b7e\u51fd\u6570\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63d2\u503c\u884c\u4e3a\u3002\u6807\u7b7e\u51fd\u6570\u4f1a\u63a5\u6536",(0,a.kt)(l.Z,{mdxType:"TH"},"\u88ab\u63d2\u503c\u8bb0\u53f7\u5206\u9694\u540e\u7684\u6a21\u677f"),"\u548c",(0,a.kt)(l.Z,{mdxType:"TH"},"\u5bf9\u6bcf\u4e2a\u8868\u8fbe\u5f0f\u6c42\u503c\u7684\u7ed3\u679c"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{13} title="JavaScript" showLineNumbers',"{13}":!0,title:'"JavaScript"',showLineNumbers:!0},'let a = 9;\nlet b = 20;\n\nfunction simpleTag(strings, aValExpression, bValExpression, sumExpression) {\n  console.log(strings);\n  console.log(aValExpression);\n  console.log(bValExpression);\n  console.log(sumExpression);\n  return "result";\n}\n\nlet untaggedResult = `${a} + ${b} = ${a + b}`;\nlet taggedResult = simpleTag`${a} + ${b} = ${a + b}`;\n// expected:\n// ["", " + ", " = ", ""]\n// 9\n// 20\n// 29\nconsole.log(untaggedResult); // expected: "9 + 20 = 29"\nconsole.log(taggedResult); // expected: "result"\n')),(0,a.kt)("p",null,"\u6807\u7b7e\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a",(0,a.kt)(l.Z,{mdxType:"TH"},"\u6a21\u677f\u53c2\u6570"),"\u548c",(0,a.kt)(l.Z,{mdxType:"TH"},"\u8fb9\u754c\u7684\u95f4\u9694"),"\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u5373\u63d2\u503c\u7b26\u53f7\u5206\u9694\u51fa\u7684\u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,a.kt)("h3",{id:"\u5269\u4f59\u64cd\u4f5c\u7b26\u4f5c\u4e3a\u53c2\u6570"},"\u5269\u4f59\u64cd\u4f5c\u7b26\u4f5c\u4e3a\u53c2\u6570"),(0,a.kt)("p",null,"\u7531\u4e8e\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u53d8"),"\u7684\uff0c\u6240\u4ee5\u901a\u5e38\u5e94\u8be5\u4f7f\u7528",(0,a.kt)(l.Z,{mdxType:"TH"},"\u5269\u4f59\u64cd\u4f5c\u7b26"),"\u5c06\u5b83\u4eec\u6536\u96c6\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{1} title="JavaScript" showLineNumbers',"{1}":!0,title:'"JavaScript"',showLineNumbers:!0},'function simpleTag(string, ...expressions) {\n  console.log(string);\n  for (const expression of expressions) {\n    console.log(expression);\n  }\n  return "result";\n}\n')),(0,a.kt)("h3",{id:"\u9ed8\u8ba4\u8fd4\u56de\u5b57\u7b26\u4e32"},"\u9ed8\u8ba4\u8fd4\u56de\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u56e0\u4e3a\u53c2\u6570\u59cb\u7ec8\u662f ",(0,a.kt)("strong",{parentName:"p"},"n")," \u4e2a\uff0c\u800c\u4f20\u7ed9\u6807\u7b7e\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u6240\u5305\u542b\u7684\u5b57\u7b26\u4e32\u6570\u59cb\u7ec8\u662f ",(0,a.kt)("strong",{parentName:"p"},"n + 1")," \u4e2a\uff0c\u628a\u5b57\u7b26\u4e32\u548c\u63d2\u503c\u7b26\u53f7\u7684\u8ba1\u7b97\u7ed3\u679c\u62fc\u63a5\u8d77\u6765\uff0c\u53ef\u4ee5\u5f97\u5230\u9ed8\u8ba4\u8fd4\u56de\u5b57\u7b26\u4e32\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript" showLineNumbers',title:'"JavaScript"',showLineNumbers:!0},'function zipTag(strings, ...expressions) {\n  return (\n    strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")\n  );\n}\n')),(0,a.kt)("h3",{id:"\u539f\u59cb\u5b57\u7b26\u4e32"},"\u539f\u59cb\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u7684\u6807\u7b7e\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"String.raw"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u539f\u59cb\u7684\u6a21\u677f\u5b57\u9762\u91cf\u5185\u5bb9\uff08\u5982",(0,a.kt)("strong",{parentName:"p"},"\u6362\u884c\u7b26"),"\u6216 ",(0,a.kt)("strong",{parentName:"p"},"Unicode \u5b57\u7b26"),"\uff09\uff0c\u800c\u4e0d\u662f\u88ab\u8f6c\u6362\u540e\u7684\u5b57\u7b26\u8868\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(`\\u00A9`); // expected: \xa9\nconsole.log(String.raw`\\u00A9`); // expected: \\u00A9\n\nconsole.log(`First Line\\nSecond Line`);\n// expected:\n// First Line\n// Second Line\nconsole.log(String.raw`First Line\\nSecond Line`);\n// expected: First Line\\nSecond Line\n\nconsole.log(`First Line\nSecond Line`);\n// expected:\n// First Line\n// Second Line\nconsole.log(String.raw`First Line\nSecond Line`);\n// expected:\n// First Line\n// Second Line\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u5b9e\u9645\u7684\u6362\u884c\u7b26\u6765\u8bf4\u662f\u4e0d\u884c\u7684\uff0c\u5b83\u4eec\u4e0d\u4f1a\u88ab\u8f6c\u6362\u6210\u8f6c\u4e49\u5e8f\u5217\u7684\u5f62\u5f0f\u3002")),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("h3",{id:"length"},"length"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"length")," \u662f\u5b57\u7b26\u4e32\u7684",(0,a.kt)(l.Z,{mdxType:"TH"},"\u53ea\u8bfb\u5c5e\u6027"),"\uff0c\u8be5\u5c5e\u6027\u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d",(0,a.kt)(l.Z,{mdxType:"TH"},"\u5b57\u7b26\u7f16\u7801\u5355\u5143\u7684\u6570\u91cf"),"\u3002"),(0,a.kt)("p",null,"JavaScript \u4f7f\u7528 UTF-16 \u7f16\u7801\uff0c\u8be5\u7f16\u7801\u4f7f\u7528\u4e00\u4e2a 16 \u6bd4\u7279\u7684\u7f16\u7801\u5355\u5143\u6765\u8868\u793a\u5927\u90e8\u5206\u5e38\u89c1\u7684\u5b57\u7b26\uff0c\u4f7f\u7528\u4e24\u4e2a\u4ee3\u7801\u5355\u5143\u8868\u793a\u4e0d\u5e38\u7528\u7684\u5b57\u7b26\u3002\u56e0\u6b64 length \u8fd4\u56de\u503c\u53ef\u80fd\u4e0e\u5b57\u7b26\u4e32\u4e2d\u5b9e\u9645\u7684\u5b57\u7b26\u6570\u91cf\u4e0d\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u7a7a\u5b57\u7b26\u4e32\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," \u4e3a ",(0,a.kt)("strong",{parentName:"p"},"0"),"\u3002"),(0,a.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,a.kt)("h3",{id:"padstart"},"padStart"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"padStart()")," \u65b9\u6cd5\u4f1a\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u5411",(0,a.kt)(l.Z,{mdxType:"TH"},"\u5de6\u4fa7"),"\u586b\u5145\u5f53\u524d\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u586b\u5145\u540e\u8fbe\u5230\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u9700\u8981\u586b\u5145\u5230\u7684\u76ee\u6807\u957f\u5ea6\uff0c\u5982\u679c\u8fd9\u4e2a\u6570\u503c\u5c0f\u4e8e\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5b57\u7b26\u4e32\u672c\u8eab\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u586b\u5145\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u592a\u957f\uff0c\u4f7f\u586b\u5145\u540e\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u4e86\u76ee\u6807\u957f\u5ea6\uff0c\u5219\u53ea\u4fdd\u7559\u6700\u5de6\u4fa7\u7684\u90e8\u5206\uff0c\u5176\u4ed6\u90e8\u5206\u4f1a\u88ab\u622a\u65ad\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u65b9\u6cd5\u5411\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," \u7684\u5de6\u4fa7\u8865\u4e86 5 \u4e2a\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},'"B"'),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},'const str = "A";\nconsole.log(str.padStart(6, "B")); // expected: "BBBBBA"\n')),(0,a.kt)("h3",{id:"padend"},"padEnd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"padEnd()")," \u65b9\u6cd5\u4f1a\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u5411",(0,a.kt)(l.Z,{mdxType:"TH"},"\u53f3\u4fa7"),"\u586b\u5145\u5f53\u524d\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u586b\u5145\u540e\u8fbe\u5230\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u9700\u8981\u586b\u5145\u5230\u7684\u76ee\u6807\u957f\u5ea6\uff0c\u5982\u679c\u8fd9\u4e2a\u6570\u503c\u5c0f\u4e8e\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5b57\u7b26\u4e32\u672c\u8eab\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u586b\u5145\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u592a\u957f\uff0c\u4f7f\u586b\u5145\u540e\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u4e86\u76ee\u6807\u957f\u5ea6\uff0c\u5219\u53ea\u4fdd\u7559\u6700\u5de6\u4fa7\u7684\u90e8\u5206\uff0c\u5176\u4ed6\u90e8\u5206\u4f1a\u88ab\u622a\u65ad\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u65b9\u6cd5\u5411\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," \u7684\u53f3\u4fa7\u8865\u4e86 5 \u4e2a\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},'"B"'),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},'const str = "A";\nconsole.log(str.padStart(6, "B")); // expected: "BBBBBA"\n')),(0,a.kt)("h3",{id:"split"},"split"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"split()")," \u65b9\u6cd5\u4f7f\u7528\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5b57\u7b26\u4e32\u5c06\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"String")," \u5bf9\u8c61\u5206\u5272\u6210\u5b50\u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"split()")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",(0,a.kt)(l.Z,{mdxType:"TH"},"\u6570\u7ec4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"split()")," \u65b9\u6cd5",(0,a.kt)(l.Z,{mdxType:"TH"},"\u4e0d\u6539\u53d8\u539f\u5b57\u7b26\u4e32"),"\u3002"))),(0,a.kt)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string.split()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string.split([option: string | regular expression] separator)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string.split([option: string | regular expression] separator, [option: number] limit)"))),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"separator - \u6839\u636e\u5b57\u7b26\u4e32\u6216\u8005\u6b63\u5219\u8868\u8fbe\u5f0f\u5206\u9694\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("li",{parentName:"ul"},"limit - \u4f1a\u4e22\u5f03 limit \u540e\u7684\u6570\u7ec4\u5143\u7d20\u3002")),(0,a.kt)("h4",{id:"stringsplitseparator-\u5206\u9694\u82f1\u6587\u5355\u8bcd"},(0,a.kt)("inlineCode",{parentName:"h4"},"string.split(separator)")," \u5206\u9694\u82f1\u6587\u5355\u8bcd"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)(l.Z,{mdxType:"TH"},"\u7a7a\u683c\u5b57\u7b26\u4e32"),"\u5c06\u5b57\u7b26\u4e32\u5206\u9694\u4e3a\u5305\u542b\u82f1\u6587\u5355\u8bcd\u7684\u6570\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let text = "Hello world!";\nconst array = text.split(" ");\nconsole.log(array); // expected: ["Hello", "world!"]\nconsole.log(array[1]); // expected: world\n')),(0,a.kt)("h4",{id:"stringsplitseparator-\u5206\u9694\u82f1\u6587\u5b57\u6bcd"},(0,a.kt)("inlineCode",{parentName:"h4"},"string.split(separator)")," \u5206\u9694\u82f1\u6587\u5b57\u6bcd"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)(l.Z,{mdxType:"TH"},"\u7a7a\u5b57\u7b26\u4e32"),"\u5c06\u5b57\u7b26\u4e32\u5206\u9694\u4e3a\u5305\u542b\u82f1\u6587\u5b57\u6bcd\u7684\u6570\u7ec4\uff0c\u4f1a\u4fdd\u7559\u7a7a\u683c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let text = \"Hello world!\";\nconst array = text.split(\"\");\nconsole.log(array); // expected: ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']\n")),(0,a.kt)("h4",{id:"stringsplitseparator-limit-\u9650\u5b9a\u5206\u9694\u540e\u6570\u7ec4\u7684\u957f\u5ea6"},(0,a.kt)("inlineCode",{parentName:"h4"},"string.split(separator, limit)")," \u9650\u5b9a\u5206\u9694\u540e\u6570\u7ec4\u7684\u957f\u5ea6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"limit")," \u53c2\u6570\u6dfb\u52a0\u5206\u9694\u540e\u6570\u7ec4\u7684\u957f\u5ea6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let text = "Hello world! I am Winwoo!";\nconst array = text.split(" ", 2);\nconsole.log(array); // expected: ["Hello", "world!"]\n')))}u.isMDXComponent=!0}}]);