"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[1267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"},a=void 0,c={unversionedId:"algorithm/algorithm/dp/longest-common-subsequence",id:"algorithm/algorithm/dp/longest-common-subsequence",title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",description:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",source:"@site/docs/algorithm/algorithm/dp/longest-common-subsequence.mdx",sourceDirName:"algorithm/algorithm/dp",slug:"/algorithm/algorithm/dp/longest-common-subsequence",permalink:"/cww/docs/algorithm/algorithm/dp/longest-common-subsequence",draft:!1,tags:[],version:"current",frontMatter:{title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"},sidebar:"algorithm",previous:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/cww/docs/algorithm/algorithm/dp/"},next:{title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",permalink:"/cww/docs/algorithm/algorithm/dp/longest-increasing-subsequence"}},i={},p=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",level:2}],s={toc:p};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/longest-common-subsequence/"},"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 \xa0text1 \u548c \xa0text2\uff0c\u8fd4\u56de\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u957f \u516c\u5171\u5b50\u5e8f\u5217 \u7684\u957f\u5ea6\u3002\u5982\u679c\u4e0d\u5b58\u5728 \u516c\u5171\u5b50\u5e8f\u5217 \uff0c\u8fd4\u56de 0 \u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684 \xa0 \u5b50\u5e8f\u5217 \xa0 \u662f\u6307\u8fd9\u6837\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff1a\u5b83\u662f\u7531\u539f\u5b57\u7b26\u4e32\u5728\u4e0d\u6539\u53d8\u5b57\u7b26\u7684\u76f8\u5bf9\u987a\u5e8f\u7684\u60c5\u51b5\u4e0b\u5220\u9664\u67d0\u4e9b\u5b57\u7b26\uff08\u4e5f\u53ef\u4ee5\u4e0d\u5220\u9664\u4efb\u4f55\u5b57\u7b26\uff09\u540e\u7ec4\u6210\u7684\u65b0\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,'\u4f8b\u5982\uff0c"ace" \u662f "abcde" \u7684\u5b50\u5e8f\u5217\uff0c\u4f46 "aec" \u4e0d\u662f "abcde" \u7684\u5b50\u5e8f\u5217\u3002\n\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684 \u516c\u5171\u5b50\u5e8f\u5217 \u662f\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u6240\u5171\u540c\u62e5\u6709\u7684\u5b50\u5e8f\u5217\u3002'),(0,o.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u8f93\u5165\uff1atext1 = "abcde", text2 = "ace"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u662f "ace" \uff0c\u5b83\u7684\u957f\u5ea6\u4e3a 3 \u3002\n')),(0,o.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u8f93\u5165\uff1atext1 = "abc", text2 = "abc"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u662f "abc" \uff0c\u5b83\u7684\u957f\u5ea6\u4e3a 3 \u3002\n')),(0,o.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u8f93\u5165\uff1atext1 = "abc", text2 = "def"\n\u8f93\u51fa\uff1a0\n\u89e3\u91ca\uff1a\u4e24\u4e2a\u5b57\u7b26\u4e32\u6ca1\u6709\u516c\u5171\u5b50\u5e8f\u5217\uff0c\u8fd4\u56de 0 \u3002\n')),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,'\u8ba1\u7b97\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\uff08Longest Common Subsequence\uff0c\u7b80\u79f0 LCS\uff09\u662f\u4e00\u9053\u7ecf\u5178\u7684\u52a8\u6001\u89c4\u5212\u9898\u76ee\u3002\u6bd4\u5982\u8bf4\u8f93\u5165 s1 = "zabcde", s2 = "acez"\uff0c\u5b83\u4fe9\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u662f lcs = "ace"\uff0c\u957f\u5ea6\u4e3a 3\uff0c\u6240\u4ee5\u7b97\u6cd5\u8fd4\u56de 3\u3002'),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u505a\u8fc7\u8fd9\u9053\u9898\uff0c\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u66b4\u529b\u7b97\u6cd5\u5c31\u662f\uff0c\u628a s1 \u548c s2 \u7684\u6240\u6709\u5b50\u5e8f\u5217\u90fd\u7a77\u4e3e\u51fa\u6765\uff0c\u7136\u540e\u770b\u770b\u6709\u6ca1\u6709\u516c\u5171\u7684\uff0c\u7136\u540e\u5728\u6240\u6709\u516c\u5171\u5b50\u5e8f\u5217\u91cc\u9762\u518d\u5bfb\u627e\u4e00\u4e2a\u957f\u5ea6\u6700\u5927\u7684\u3002\u663e\u7136\uff0c\u8fd9\u79cd\u601d\u8def\u7684\u590d\u6742\u5ea6\u975e\u5e38\u9ad8\uff0c\u4f60\u8981\u7a77\u4e3e\u51fa\u6240\u6709\u5b50\u5e8f\u5217\uff0c\u8fd9\u4e2a\u590d\u6742\u5ea6\u5c31\u662f\u6307\u6570\u7ea7\u7684\uff0c\u80af\u5b9a\u4e0d\u5b9e\u9645\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b63\u786e\u7684\u601d\u8def\u662f\u4e0d\u8981\u8003\u8651\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u800c\u662f\u7ec6\u5316\u5230 s1 \u548c s2 \u7684\u6bcf\u4e2a\u5b57\u7b26"),"\u3002"),(0,o.kt)("p",null,"\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u95ee\u9898\u662f\u5178\u578b\u7684\u4e8c\u7ef4\u52a8\u6001\u89c4\u5212\u95ee\u9898\u3002\u6784\u5efa\u4e8c\u7ef4\u6570\u7ec4\u53bb\u505a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221027125301431",src:n(4035).Z,width:"1023",height:"920"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:n(2874).Z,width:"1540",height:"1156"})),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var longestCommonSubsequence = function (text1, text2) {\n  const m = text1.length,\n    n = text2.length;\n  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    const c1 = text1[i - 1];\n    for (let j = 1; j <= n; j++) {\n      const c2 = text2[j - 1];\n      if (c1 === c2) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n};\n")),(0,o.kt)("h2",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(mn)"),(0,o.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(mn)")),(0,o.kt)("p",null,"\u5176\u4e2d m \u548c n \u5206\u522b\u662f\u5b57\u7b26\u4e32 text1 \u548c text2 \u7684\u957f\u5ea6\u3002"))}u.isMDXComponent=!0},2874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1617411822-KhEKGw-image-23a21d3f93a8145880c96592d4149b07.png"},4035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221027125301431-b6250a9c5b7620a71c28115ed6cce1ca.png"}}]);