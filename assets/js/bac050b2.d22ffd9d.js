"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[6233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||l;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const l={title:"322. \u96f6\u94b1\u5151\u6362"},a=void 0,i={unversionedId:"algorithm/leetcode/record/332coin-change",id:"algorithm/leetcode/record/332coin-change",title:"322. \u96f6\u94b1\u5151\u6362",description:"322. \u96f6\u94b1\u5151\u6362",source:"@site/docs/algorithm/leetcode/record/332coin-change.mdx",sourceDirName:"algorithm/leetcode/record",slug:"/algorithm/leetcode/record/332coin-change",permalink:"/docs/algorithm/leetcode/record/332coin-change",draft:!1,tags:[],version:"current",frontMatter:{title:"322. \u96f6\u94b1\u5151\u6362"},sidebar:"algorithm",previous:{title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",permalink:"/docs/algorithm/leetcode/record/300longest-increasing-subsequence"},next:{title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/algorithm/leetcode/record/1143longest-common-subsequence"}},c={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u9012\u5f52\u601d\u8def",id:"\u9012\u5f52\u601d\u8def",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:3}],m={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/coin-change/"},"322. \u96f6\u94b1\u5151\u6362")),(0,o.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 coins \uff0c\u8868\u793a\u4e0d\u540c\u9762\u989d\u7684\u786c\u5e01\uff1b\u4ee5\u53ca\u4e00\u4e2a\u6574\u6570 amount \uff0c\u8868\u793a\u603b\u91d1\u989d\u3002"),(0,o.kt)("p",null,"\u8ba1\u7b97\u5e76\u8fd4\u56de\u53ef\u4ee5\u51d1\u6210\u603b\u91d1\u989d\u6240\u9700\u7684 \u6700\u5c11\u7684\u786c\u5e01\u4e2a\u6570 \u3002\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u4e00\u79cd\u786c\u5e01\u7ec4\u5408\u80fd\u7ec4\u6210\u603b\u91d1\u989d\uff0c\u8fd4\u56de\xa0-1 \u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u8ba4\u4e3a\u6bcf\u79cd\u786c\u5e01\u7684\u6570\u91cf\u662f\u65e0\u9650\u7684\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\xa01\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1acoins = [1, 2, 5], amount = 11\n\u8f93\u51fa\uff1a3 \n\u89e3\u91ca\uff1a11 = 5 + 5 + 1\n")),(0,o.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1acoins = [2], amount = 3\n\u8f93\u51fa\uff1a-1\n")),(0,o.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1acoins = [1], amount = 0\n\u8f93\u51fa\uff1a0\n")),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("h3",{id:"\u9012\u5f52\u601d\u8def"},"\u9012\u5f52\u601d\u8def"),(0,o.kt)("p",null,"\u9012\u5f52\u5199\u6cd5\uff08\u6808\u6ea2\u51fa\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var coinChange = function (coins, amount) {\n    if (!coins.length) return -1\n    let result = Number.MAX_SAFE_INTEGER;\n\n    const getResult = (amount, count) => {\n        if (amount < 0) return\n        if (amount === 0) {\n            result = Math.min(result, count)\n            return\n        }\n        for (let i = 0; i < coins.length; i++) {\n            getResult(amount - coins[i], count + 1)\n        }\n    }\n\n    getResult(coins, amount, 0);\n    return result === Number.MAX_SAFE_INTEGER ? -1 : result\n};\n")),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nvar coinChange = function (coins, amount) {\n    let memo = new Array(amount + 1).fill(Infinity); // memo[i] \u6765\u8868\u793a\u5b58\u50a8\u91d1\u989d\u4e3ai\u65f6\u9700\u8981\u7684\u6700\u5c11\u786c\u5e01\u4e2a\u6570\n    memo[0] = 0;\n    for (let i = 1; i <= amount; i++) {\n        for (let j = 0; j < coins.length; j++) { // \u904d\u5386\u53ef\u80fd\u7684\u786c\u5e01\u6570\n            if (coins[j] <= i) {\n                memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1); // \u6c42 memo[i] \u6700\u5c11\u786c\u5e01\u6570\uff0c\u591a\u79cd\u60c5\u51b5\u53ea\u4fdd\u7559\u786c\u5e01\u6570\u6700\u5c11\u7684\u90a3\u79cd\n            }\n        }\n    }\n    return memo[amount] === Infinity ? -1: memo[amount]\n};\n")))}p.isMDXComponent=!0}}]);