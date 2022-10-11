"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[3557],{433:function(A,e,t){t.d(e,{Z:function(){return l}});var n=t(7294),r=t(6010),a="tabItem_Ymn6";function l(A){var e=A.children,t=A.hidden,l=A.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t},e)}},5559:function(A,e,t){t.d(e,{Z:function(){return m}});var n=t(3117),r=t(7294),a=t(6010),l=t(5730),u=t(636),i=t(6602),o=t(3735),c="tabList__CuJ",s="tabItem_LNqP";function g(A){var e,t,l=A.lazy,g=A.block,m=A.defaultValue,p=A.values,d=A.groupId,E=A.className,B=r.Children.map(A.children,(function(A){if((0,r.isValidElement)(A)&&"value"in A.props)return A;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof A.type?A.type:A.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),I=null!=p?p:B.map((function(A){var e=A.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,u.l)(I,(function(A,e){return A.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(A){return A.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(e=null!=m?m:null==(t=B.find((function(A){return A.props.default})))?void 0:t.props.value)?e:B[0].props.value;if(null!==v&&!I.some((function(A){return A.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+I.map((function(A){return A.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),k=C.tabGroupChoices,b=C.setTabGroupChoices,Q=(0,r.useState)(v),S=Q[0],w=Q[1],y=[],M=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var h=k[d];null!=h&&h!==S&&I.some((function(A){return A.value===h}))&&w(h)}var Z=function(A){var e=A.currentTarget,t=y.indexOf(e),n=I[t].value;n!==S&&(M(e),w(n),null!=d&&b(d,String(n)))},J=function(A){var e,t=null;switch(A.key){case"ArrowRight":var n,r=y.indexOf(A.currentTarget)+1;t=null!=(n=y[r])?n:y[0];break;case"ArrowLeft":var a,l=y.indexOf(A.currentTarget)-1;t=null!=(a=y[l])?a:y[y.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":g},E)},I.map((function(A){var e=A.value,t=A.label,l=A.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:function(A){return y.push(A)},onKeyDown:J,onFocus:Z,onClick:Z},l,{className:(0,a.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":S===e})}),null!=t?t:e)}))),l?(0,r.cloneElement)(B.filter((function(A){return A.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},B.map((function(A,e){return(0,r.cloneElement)(A,{key:e,hidden:A.props.value!==S})}))))}function m(A){var e=(0,l.Z)();return r.createElement(g,(0,n.Z)({key:String(e)},A))}},9603:function(A,e,t){t.d(e,{Z:function(){return m}});var n=t(7294),r="unorderedList_Bf_c",a="listItem_mbuj",l="titleArea_SAgt",u="title_RnVK",i="linkSVG_P7Tu",o=t(6010),c=t(8746),s=t(7002),g=t(6982);function m(A){var e=A.data,t=void 0===e?[]:e,m=A.wrapperClassName,p=A.wrapperStyle;return n.createElement("div",{style:p,className:(0,o.Z)(r,m)},n.createElement("ul",null,t.map((function(A,e){return n.createElement("li",{className:a,key:e},n.createElement(s.Z,{sources:{light:A.src,dark:A.srcDark?A.srcDark:A.src},alt:A.title,loading:"lazy"}),n.createElement(c.Z,{to:A.link,className:l},n.createElement("div",{className:u},A.title),n.createElement("div",{className:i},n.createElement(g.Z,null))))}))))}},8562:function(A,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return g},default:function(){return B},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=t(3117),r=t(102),a=(t(7294),t(3905)),l=t(5559),u=t(433),i=t(9603),o=t(6888),c=["components"],s={title:"uuid",description:"npm uuid",tags:[{label:"npm",permalink:"npm"},{label:"GUID",permalink:"guid"}],last_update:{date:"2022-07-27",author:"Cww"}},g=void 0,m={unversionedId:"npm/uuid",id:"npm/uuid",title:"uuid",description:"npm uuid",source:"@site/docs/npm/uuid.mdx",sourceDirName:"npm",slug:"/npm/uuid",permalink:"/docs/npm/uuid",draft:!1,tags:[{label:"npm",permalink:"/docs/tags/npm"},{label:"GUID",permalink:"/docs/tags/guid"}],version:"current",frontMatter:{title:"uuid",description:"npm uuid",tags:[{label:"npm",permalink:"npm"},{label:"GUID",permalink:"guid"}],last_update:{date:"2022-07-27",author:"Cww"}},sidebar:"npm",previous:{title:"ts-node",permalink:"/docs/npm/ts-node"},next:{title:"Axios",permalink:"/docs/npm/axios"}},p={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"uuid v4",id:"uuid-v4",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],E={toc:d};function B(A){var e=A.components,t=(0,r.Z)(A,c);return(0,a.kt)("wrapper",(0,n.Z)({},E,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u652f\u6301 ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u58f0\u660e - ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/uuid"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"uuid")," \u7528\u4e8e\u5728 node \u6216\u6d4f\u89c8\u5668\u73af\u5883\u751f\u6210 UUID\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install uuid\n"))),(0,a.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add uuid\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},'import { v4 as uuidv4 } from "uuid";\nconst uuid = uuidv4();\nconsole.log(uuid);\n// expected: 6212eac1-cc00-43d6-a7bd-8aa5fa032450\n')),(0,a.kt)("h2",{id:"uuid-v4"},"uuid v4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uuid v4()")," \u65b9\u6cd5\u7528\u4e8e\u751f\u6210",(0,a.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u968f\u673a"),"\u7684 UUID\uff0c\u8fd9\u662f\u6700\u901a\u7528\u7684\u4e00\u4e2a\u751f\u6210 UUID \u7684\u65b9\u6cd5\uff0c\u5176\u4ed6\u65b9\u6cd5\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid.v1()"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"uuid.v3()"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"uuid.v5()")," \u5747\u662f\u57fa\u4e8e\u65f6\u95f4\u6233\u6216\u547d\u540d\u7a7a\u95f4\u6765\u751f\u6210\u7684\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)(i.Z,{data:[{title:"npm : uuid",link:"https://www.npmjs.com/package/uuid",src:o.Z}],mdxType:"ReferenceList"}))}B.isMDXComponent=!0},3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function u(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=n.createContext({}),o=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},c=function(A){var e=o(A.components);return n.createElement(i.Provider,{value:e},A.children)},s={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,c=u(A,["components","mdxType","originalType","parentName"]),g=o(t),m=r,p=g["".concat(i,".").concat(m)]||g[m]||s[m]||a;return t?n.createElement(p,l(l({ref:e},c),{},{components:t})):n.createElement(p,l({ref:e},c))}));function m(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,l=new Array(a);l[0]=g;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=A,u.mdxType="string"==typeof A?A:r,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6982:function(A,e,t){var n,r=t(7294),a=["title","titleId"];function l(){return l=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},l.apply(this,arguments)}function u(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}e.Z=function(A){var e=A.title,t=A.titleId,i=u(A,a);return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16","aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,n||(n=r.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},6888:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKk0lEQVR42u3Yvy5DYRzH4d6VugMM2GsxYFGLNqHFxAXYGfyZhDvQ3oBFE9IIjU0TkqaJRWI42kvQyE/Pe54n+c5NX29PP1UqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMHclWcyMzMzK9YEgJmZmQAwMzMzAWBmZmYCwMzMzASAmZmZCQAzMzMTAGZmZiYAzMzMTACYmZmZADAzMzMBYGZmZgLAzMzMBICZmZkJADMzMxMAZmZmJgDMzMxMAJiZmZkAMDMzEwBmZmYmAMzMzEwAmJmZmQAwMzMzAWBmZmYCwMzMzASAmZmZCQAzMzMTAGZmZpZ6AHSWl7Lewb7lfJ2lxfDL6tzzv+76Wvi96W6sO3vzXJ2GAOg1mxn512s2Yh/ks2WHnoBB6zY8AAbttoMnF152dwQAAkAACAABgAAQAAgAASAABAACQAAgABAAAgABIAAQAAgAAYAAEAAIAASAAEAACAAEAALAwSMABAACAAEAAkAAIAAQACAABAACAAEAAkAAIAAQACAABAACAAEAAkAACAABgAAAASAABIAAQACAABAAAkAAIABAAAgAASAAEAAgAPyVBYAAEAACAAQAAkAACAABAAIAASAABIAAQAAIAASAABAAAgABIAAQAAgAAYAAEAAIAASAAEAACAAEAAJAACAABAACAAEgABAAAgABgAAAASAAEAAIABAAAgABgAAAASAAEAAIABAAAuBXnuv10Wph61+cC4BE9M/PQu+OAMi/z04n9M6MN37N+Odq7HvsX14IAAHwe+Mvq9gzbQgAvwAmmgBI4b8qrfgzHb1m+HM1+rtqr5n8518ACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAiDI+8119np0GDYBIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAIgmQC4X5jPnraqSa8IZzp+TQHw995OT5L+bDxUKuGfj8eVStpnuhJ/pg/RZ1rdLMZzdX4u7QAwEwDT8wvAzIo7AWACQACYmQAwEwACwMwEgJkAEABmJgDMBIAAMDMBYCYABICZCQAzASAAzEwAmAkAAWBmAsBMAAgAMxMAZgJAAJiZADATAALAzASAmQAwMxMAZgLAzEwAmAAQAGZmAsAEgAAwMxMAJgAEgJmZADABIADMzASACQABYGYmAEwACAAzEwBmAkAAmJkAMBMAAsDMBICZABAAZiYAzASAADAzAWAmAASAmQkAMwEgAMxMAJgJAAFgZgLATAAIADP7/wD4MJtgX9EB8D0cJr/n2nb0Q8BdNivoSjCJ0eW5UtAJ/AIAAAEgAABAAAgAABAAAgAAASAABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACQAAAgAAQAAAgAAQAAAgAAQCAADABAIAAMAEAgAAwAQCAADABAIAAMAEAgAAwAQDAVAdAeXX0BXJs+Z6bDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBR/AB9M4XfiyNwBwAAAABJRU5ErkJggg=="}}]);