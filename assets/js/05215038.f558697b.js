"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[3998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4"},l=void 0,i={unversionedId:"algorithm/leetcode/questions/search-in-rotated-sorted-array",id:"algorithm/leetcode/questions/search-in-rotated-sorted-array",title:"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4",description:"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4",source:"@site/docs/algorithm/leetcode/questions/search-in-rotated-sorted-array.md",sourceDirName:"algorithm/leetcode/questions",slug:"/algorithm/leetcode/questions/search-in-rotated-sorted-array",permalink:"/docs/algorithm/leetcode/questions/search-in-rotated-sorted-array",draft:!1,tags:[],version:"current",frontMatter:{title:"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4"}},s={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/search-in-rotated-sorted-array/"},"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4")),(0,o.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u6574\u6570\u6570\u7ec4 nums \u6309\u5347\u5e8f\u6392\u5217\uff0c\u6570\u7ec4\u4e2d\u7684\u503c\u4e92\u4e0d\u76f8\u540c \u3002"),(0,o.kt)("p",null,"\u5728\u4f20\u9012\u7ed9\u51fd\u6570\u4e4b\u524d\uff0cnums \u5728\u9884\u5148\u672a\u77e5\u7684\u67d0\u4e2a\u4e0b\u6807 k\uff080 <= k < nums.length\uff09\u4e0a\u8fdb\u884c\u4e86 \u65cb\u8f6c\uff0c\u4f7f\u6570\u7ec4\u53d8\u4e3a [nums","[k]",", nums","[k+1]",", ..., nums","[n-1]",", nums","[0]",", nums","[1]",", ..., nums","[k-1]","]\uff08\u4e0b\u6807 \u4ece 0 \u5f00\u59cb \u8ba1\u6570\uff09\u3002\u4f8b\u5982\uff0c ","[0,1,2,4,5,6,7]"," \u5728\u4e0b\u6807 3 \u5904\u7ecf\u65cb\u8f6c\u540e\u53ef\u80fd\u53d8\u4e3a\xa0","[4,5,6,7,0,1,2]"," \u3002"),(0,o.kt)("p",null,"\u7ed9\u4f60 \u65cb\u8f6c\u540e\u7684\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 target \uff0c\u5982\u679c nums \u4e2d\u5b58\u5728\u8fd9\u4e2a\u76ee\u6807\u503c target \uff0c\u5219\u8fd4\u56de\u5b83\u7684\u4e0b\u6807\uff0c\u5426\u5219\u8fd4\u56de\xa0-1\xa0\u3002"),(0,o.kt)("p",null,"\u4f60\u5fc5\u987b\u8bbe\u8ba1\u4e00\u4e2a\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n) \u7684\u7b97\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-\xa0"},"\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [4,5,6,7,0,1,2], target = 0\n\u8f93\u51fa\uff1a4\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-\xa0"},"\u793a\u4f8b\xa02\uff1a\n\u8f93\u5165\uff1anums = [4,5,6,7,0,1,2], target = 3\n\u8f93\u51fa\uff1a-1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-\xa0"},"\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [1], target = 0\n\u8f93\u51fa\uff1a-1\n")),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,"\u4e8c\u5206\u67e5\u627e\u601d\u8def\u3002\u6c42\u51fa\u4e2d\u70b9\uff0cmid = low + high / 2\uff1b"),(0,o.kt)("p",null,"mid \u5143\u7d20\u8981\u4e48\u5728\u524d\u9762\u7684\u5927\u5b50\u5e8f\u5217\uff0c\u8981\u4e48\u5728\u540e\u9762\u7684\u5c0f\u5b50\u5e8f\u5217\uff1b\u5224\u65ad mid \u5904\u7684\u503c\u548c low \u7684\u5927\u5c0f\uff0c\u5982\u679c mid \u5904\u7684\u503c\u5927\u4e8e low\uff0c\u5b9e\u9645\u7684\u4e2d\u70b9\u4e00\u5b9a\u5728\u5927\u5b50\u5e8f\u5217\uff1b\u5426\u5219\uff0c\u4e00\u5b9a\u5728\u5c0f\u5b50\u5e8f\u5217\uff1b"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u5927\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48 low \u5230 mid \u662f\u5355\u8c03\u9012\u589e\u7684\uff1b\u5982\u679c\u5728\u5c0f\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48 mid \u5230 high \u662f\u5355\u8c03\u9012\u589e\u7684"),(0,o.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var search = function (nums, target) {\n    if (nums.length == 0) return -1\n\n    function dfs(low, high) {\n        if (nums[low] == target) return low\n        if (nums[high] == target) return high\n        if (low == high || low == high - 1) {\n            return -1\n        }\n\n        let mid = Math.floor((low + high) / 2)\n        if (nums[mid] == target) return mid\n\n        if (nums[mid] > nums[low]) { \n            // [low, mid] \u662f\u6709\u5e8f\u7684\uff0c[mid, high] \u4e0d\u5355\u8c03\n            if (target > nums[low] && target < nums[mid]) {\n                return dfs(low, mid)\n            } else {\n                return dfs(mid, high)\n            }\n        } else { \n            // [mid, high] \u662f\u6709\u5e8f\u7684\uff0c[low, mid] \u4e0d\u5355\u8c03\n            if (target > nums[mid] && target < nums[high]) {\n                return dfs(mid, high)\n            } else {\n                return dfs(low, mid)\n            }\n        }\n    }\n\n    return dfs(0, nums.length - 1)\n};\n\n")))}m.isMDXComponent=!0}}]);