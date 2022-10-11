"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[6200],{2771:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a="list_rgtH",o="item_i3mt",c=n(6010),i=n(8746),l=n(7002);function s(e){var t=e.data,n=void 0===t?[]:t,s=e.wrapperClassName,u=e.wrapperStyle;return r.createElement("div",{style:u,className:(0,c.Z)(a,s)},n.map((function(e){return r.createElement("div",{key:e.title,className:o},r.createElement(i.Z,{to:e.link},r.createElement(l.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title))})))}},1750:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a="highlightArea__DwO",o=n(6010),c=n(3320);function i(e){var t=e.children,n=e.bgColor,i=e.wrapperClassName,l=e.wrapperStyle,s={backgroundColor:""+(0,c.yz)(n)},u=Object.assign(s,l);return r.createElement("span",{className:(0,o.Z)(a,i),style:u},t)}},3320:function(e,t,n){var r;function a(){var e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function o(e){navigator.clipboard.writeText(e)}n.d(t,{tq:function(){return a},Vf:function(){return o},yz:function(){return i}}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var c;function i(e){switch(e){case c.Primary:case"":case void 0:case null:return"#25c2a0";case c.Red:return"#e53935";case c.Pink:return"#d81b60";case c.Blue:return"#1e88e5";case c.Purple:return"#ba68c8";case c.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(c||(c={}))},7144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=n(2771),i=n(1750),l=n(9351),s=n.p+"assets/images/go-24594a3ffb1d27c6c5848e1c454a42f6.png",u=["components"],p={title:"\u4ee3\u7801\u89c4\u8303"},f=void 0,d={unversionedId:"code-specification",id:"code-specification",title:"\u4ee3\u7801\u89c4\u8303",description:"\u201c\u4efb\u4f55\u50bb\u74dc\u90fd\u80fd\u5199\u51fa\u8ba1\u7b97\u673a\u53ef\u4ee5\u7406\u89e3\u7684\u4ee3\u7801\uff0c\u4f18\u79c0\u7684\u7a0b\u5e8f\u5458\u4f1a\u7f16\u5199\u4eba\u7c7b\u53ef\u4ee5\u7406\u89e3\u7684\u4ee3\u7801\u3002\u201d",source:"@site/docs/code-specification.mdx",sourceDirName:".",slug:"/code-specification",permalink:"/blog/docs/code-specification",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u89c4\u8303"}},m={},k=[{value:"DRY",id:"dry",level:2},{value:"KISS",id:"kiss",level:2},{value:"\u547d\u540d\u89c4\u8303",id:"\u547d\u540d\u89c4\u8303",level:2},{value:"\u53d8\u91cf\u540d",id:"\u53d8\u91cf\u540d",level:3},{value:"Camel Notation (Camel Case)",id:"camel-notation-camel-case",level:3},{value:"Pascal Notation (Pascal Case)",id:"pascal-notation-pascal-case",level:3},{value:"\u4ee3\u7801\u89c4\u8303",id:"\u4ee3\u7801\u89c4\u8303",level:2}],v={toc:k};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{style:{margin:0}},(0,o.kt)("b",null,"\u201c\u4efb\u4f55\u50bb\u74dc\u90fd\u80fd\u5199\u51fa\u8ba1\u7b97\u673a\u53ef\u4ee5\u7406\u89e3\u7684\u4ee3\u7801\uff0c\u4f18\u79c0\u7684\u7a0b\u5e8f\u5458\u4f1a\u7f16\u5199\u4eba\u7c7b\u53ef\u4ee5\u7406\u89e3\u7684\u4ee3\u7801\u3002\u201d")),(0,o.kt)("p",{align:"right"},(0,o.kt)("i",null,"\u2014\u2014\u2014\u2014\u2014 Martin Fowler"))),(0,o.kt)("h2",{id:"dry"},"DRY"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Don't Repeat Yourself."))),(0,o.kt)("h2",{id:"kiss"},"KISS"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Keep It Simple, Stupid."))),(0,o.kt)("h2",{id:"\u547d\u540d\u89c4\u8303"},"\u547d\u540d\u89c4\u8303"),(0,o.kt)("h3",{id:"\u53d8\u91cf\u540d"},"\u53d8\u91cf\u540d"),(0,o.kt)("p",null,"\u4e0d\u53ef\u4ee5\u7528",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{mdxType:"TH"},"\u7a7a\u683c")),"\u3001",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{mdxType:"TH"},"\u8fde\u8bcd\u7b26")),"(-)\u3001",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{mdxType:"TH"},"\u4e0b\u5212\u7ebf")),"(","_",") \u7b49\u5c06\u53d8\u91cf\u540d\u9694\u5f00\u3002"),(0,o.kt)("h3",{id:"camel-notation-camel-case"},"Camel Notation (Camel Case)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u5355\u8bcd\u7684\u9996\u5b57\u6bcd\u5c0f\u5199"),"\uff0c\u540e\u9762\u7684\u5176\u4ed6\u5355\u8bcd\u9996\u5b57\u6bcd\u5168\u90e8\u5927\u5199\u3002"),(0,o.kt)("p",null,"\u4f8b\uff1afirstName\u3001lastName"),(0,o.kt)("h3",{id:"pascal-notation-pascal-case"},"Pascal Notation (Pascal Case)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u4e2a\u5355\u8bcd\u7684\u9996\u5b57\u6bcd\u90fd\u91c7\u7528\u5927\u5199"),"\u3002"),(0,o.kt)("p",null,"\u4f8b\uff1aFirstName\u3001LastName"),(0,o.kt)("h2",{id:"\u4ee3\u7801\u89c4\u8303"},"\u4ee3\u7801\u89c4\u8303"),(0,o.kt)(c.Z,{data:[{title:"JavaScript \u4ee3\u7801\u89c4\u8303",link:"/docs/javascript/code-specification",src:l.Z},{title:"Go \u4ee3\u7801\u89c4\u8303",link:"/docs/go/code-specification",src:s}],mdxType:"LinkList"}))}y.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9351:function(e,t,n){t.Z=n.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"}}]);