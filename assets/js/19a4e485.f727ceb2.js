"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),i=r(6010),o=r(2389),l=r(7392),s=r(7094),c=r(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:S}=(0,s.U)(),[w,E]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,r=T.indexOf(t),n=g[r].value;n!==w&&(N(t),E(n),null!=f&&S(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},9545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),i=r(5488),o=r(5162);const l={title:"\u642d\u5efa\u73af\u5883",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-13",author:"Winwoo"}},s=void 0,c={unversionedId:"typescript/environment",id:"typescript/environment",title:"\u642d\u5efa\u73af\u5883",description:"",source:"@site/docs/typescript/environment.mdx",sourceDirName:"typescript",slug:"/typescript/environment",permalink:"/blog/docs/typescript/environment",draft:!1,tags:[{label:"TypeScript",permalink:"/blog/docs/tags/typescript"}],version:"current",frontMatter:{title:"\u642d\u5efa\u73af\u5883",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-13",author:"Winwoo"}},sidebar:"typescript",previous:{title:"TypeScript",permalink:"/blog/docs/typescript/"},next:{title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",permalink:"/blog/docs/typescript/debug"}},p={},u=[{value:"\u5b89\u88c5 TypeScript Package",id:"\u5b89\u88c5-typescript-package",level:2},{value:"\u5168\u5c40\u5b89\u88c5 TypeScript",id:"\u5168\u5c40\u5b89\u88c5-typescript",level:3},{value:"\u9879\u76ee\u4e2d\u6dfb\u52a0 TypeScript",id:"\u9879\u76ee\u4e2d\u6dfb\u52a0-typescript",level:3},{value:"\u67e5\u770b TypeScript \u7248\u672c",id:"\u67e5\u770b-typescript-\u7248\u672c",level:3},{value:"\u521d\u59cb\u5316 tsconfig.json",id:"\u521d\u59cb\u5316-tsconfigjson",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:3},{value:"Emit",id:"emit",level:3},{value:"\u7c7b\u578b\u68c0\u67e5",id:"\u7c7b\u578b\u68c0\u67e5",level:3}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5-typescript-package"},"\u5b89\u88c5 TypeScript Package"),(0,a.kt)("h3",{id:"\u5168\u5c40\u5b89\u88c5-typescript"},"\u5168\u5c40\u5b89\u88c5 TypeScript"),(0,a.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5168\u5c40\u5b89\u88c5 ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g typescript\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"macOS")," \u64cd\u4f5c\u7cfb\u7edf\u4e0b\uff0c\u8be5\u547d\u4ee4\u524d\u9700\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),"\u3002"),(0,a.kt)("h3",{id:"\u9879\u76ee\u4e2d\u6dfb\u52a0-typescript"},"\u9879\u76ee\u4e2d\u6dfb\u52a0 TypeScript"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript --save-dev\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add typescript --dev\n")))),(0,a.kt)("h3",{id:"\u67e5\u770b-typescript-\u7248\u672c"},"\u67e5\u770b TypeScript \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc -v\nVersion 4.6.4\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-tsconfigjson"},"\u521d\u59cb\u5316 tsconfig.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc --init\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"tsconfig.json")," \u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539\u90e8\u5206\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='JSON'",title:"'JSON'"},'{\n  "compilerOptions": {\n    /* Visit https://aka.ms/tsconfig.json to read more about this file */\n\n    /* Projects */\n    // "incremental": true,                              /* Enable incremental compilation */\n    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */\n    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */\n    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */\n    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */\n    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */\n\n    /* Language and Environment */\n    "target": "ES2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,\n    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */\n    // "jsx": "preserve",                                /* Specify what JSX code is generated. */\n    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */\n    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */\n    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. \'React.createElement\' or \'h\' */\n    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. \'React.Fragment\' or \'Fragment\'. */\n    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */\n    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */\n    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */\n    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */\n\n    /* Modules */\n    "module": "commonjs" /* Specify what module code is generated. */,\n    "rootDir": "./src" /* Specify the root folder within your source files. */,\n    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */\n    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */\n    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */\n    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */\n    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */\n    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */\n    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */\n    // "resolveJsonModule": true,                        /* Enable importing .json files */\n    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */\n\n    /* JavaScript Support */\n    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */\n    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */\n    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */\n\n    /* Emit */\n    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */\n    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */\n    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */\n    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */\n    "outDir": "./dist" /* Specify an output folder for all emitted files. */,\n    "removeComments": true /* Disable emitting comments. */,\n    // "noEmit": true,                                   /* Disable emitting files from a compilation. */\n    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */\n    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */\n    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */\n    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */\n    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */\n    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */\n    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */\n    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */\n    // "newLine": "crlf",                                /* Set the newline character for emitting files. */\n    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */\n    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */\n    "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,\n    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */\n    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */\n    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */\n\n    /* Interop Constraints */\n    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */\n    // "allowSyntheticDefaultImports": true,             /* Allow \'import x from y\' when a module doesn\'t have a default export. */\n    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,\n    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */\n    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,\n\n    /* Type Checking */\n    "strict": true /* Enable all strict type-checking options. */,\n    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */\n    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */\n    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */\n    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */\n    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */\n    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */\n    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as \'unknown\' instead of \'any\'. */\n    // "alwaysStrict": true,                             /* Ensure \'use strict\' is always emitted. */\n    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren\'t read. */\n    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn\'t read */\n    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding \'undefined\'. */\n    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */\n    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */\n    // "noUncheckedIndexedAccess": true,                 /* Include \'undefined\' in index signature results */\n    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */\n    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */\n    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */\n    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */\n\n    /* Completeness */\n    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */\n    "skipLibCheck": true /* Skip type checking all .d.ts files. */\n  }\n}\n')),(0,a.kt)("h3",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rootDir")," - \u5b58\u653e ",(0,a.kt)("strong",{parentName:"li"},"TypeScript")," \u6587\u4ef6\u7684\u76ee\u5f55")),(0,a.kt)("h3",{id:"emit"},"Emit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"outDir")," - \u8f93\u51fa ",(0,a.kt)("strong",{parentName:"li"},"JavaScript")," \u6587\u4ef6\u7684\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeComments")," - \u7f16\u8bd1\u65f6\u79fb\u9664\u6ce8\u91ca\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noEmitOnError")," - \u5982\u679c\u7f16\u8bd1\u5931\u8d25\u5c06\u4e0d\u80fd\u751f\u6210 ",(0,a.kt)("strong",{parentName:"li"},"JavaScript")," \u6587\u4ef6")),(0,a.kt)("h3",{id:"\u7c7b\u578b\u68c0\u67e5"},"\u7c7b\u578b\u68c0\u67e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noImplicitAny")," - \u9690\u5f0f\u58f0\u660e\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"any")," \u7c7b\u578b\u5c06\u4f1a\u62a5\u9519\u3002")),(0,a.kt)("p",null,"\u67e5\u770b\u66f4\u591a\u5173\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/docs/typescript/tsconfig"},"TSConfig")," \u7684\u5185\u5bb9\u3002"))}m.isMDXComponent=!0}}]);