"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5527],{3905:(e,n,o)=>{o.r(n),o.d(n,{MDXContext:()=>m,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r.apply(this,arguments)}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var m=a.createContext({}),s=function(e){return function(n){var o=p(n.components);return a.createElement(e,r({},n,{components:o}))}},p=function(e){var n=a.useContext(m),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},d=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(o),d=t,u=s["".concat(c,".").concat(d)]||s[d]||f[d]||r;return o?a.createElement(u,l(l({ref:n},m),{},{components:o})):a.createElement(u,l({ref:n},m))}));function y(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,c=new Array(r);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:t,c[1]=l;for(var m=2;m<r;m++)c[m]=o[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},7335:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=o(87462),t=(o(67294),o(3905));const r={},c="Build File",l={unversionedId:"legacy/concepts/build-file",id:"legacy/concepts/build-file",title:"Build File",description:"A build file is a file, typically named BUCK, that defines one or more",source:"@site/../docs/legacy/concepts/build-file.md",sourceDirName:"legacy/concepts",slug:"/legacy/concepts/build-file",permalink:"/docs/legacy/concepts/build-file",draft:!1,tags:[],version:"current",frontMatter:{}},i={},m=[],s={toc:m};function p(e){let{components:n,...o}=e;return(0,t.mdx)("wrapper",(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"build-file"},"Build File"),(0,t.mdx)("p",null,"A ",(0,t.mdx)("em",{parentName:"p"},"build file")," is a file, typically named ",(0,t.mdx)("inlineCode",{parentName:"p"},"BUCK"),", that defines one or more\n",(0,t.mdx)("a",{parentName:"p",href:"https://buck.build/concept/build_rule.html"},"build rule"),"s. Note that you can\nchange the name that Buck uses for the build file in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"buildfile")," section of\n",(0,t.mdx)("a",{parentName:"p",href:"https://buck.build/files-and-dirs/buckconfig.html"},(0,t.mdx)("inlineCode",{parentName:"a"},".buckconfig")),'. A source\nfile in your project can only be referenced by rules in its "nearest" build\nfile, where "nearest" means its closest direct ancestor in your project\'s file\ntree. (If a source file has a build file as a sibling, then that is its nearest\nancestor.) For example, if your project had the following ',(0,t.mdx)("inlineCode",{parentName:"p"},"BUCK")," files:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"java/com/facebook/base/BUCK\njava/com/facebook/common/BUCK\njava/com/facebook/common/collect/BUCK\n")),(0,t.mdx)("p",null,"Then your build rules would have the following constraints:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Rules in ",(0,t.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/base/BUCK")," can reference any file under\n",(0,t.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/base/"),"."),(0,t.mdx)("li",{parentName:"ul"},"Rules in ",(0,t.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/common/")," can reference any files under that\ndirectory, except for those under ",(0,t.mdx)("inlineCode",{parentName:"li"},"java/com/facebook/common/collect/"),', as\nthose "belong" to the ',(0,t.mdx)("inlineCode",{parentName:"li"},"BUCK")," file in the ",(0,t.mdx)("inlineCode",{parentName:"li"},"collect")," directory.")),(0,t.mdx)("p",null,"The set of source files accessible to a build file is also known as its ",(0,t.mdx)("em",{parentName:"p"},"build\npackage"),". The way to refer to code across build packages is to create build\nrules and use ",(0,t.mdx)("inlineCode",{parentName:"p"},"deps")," to refer to that code. Going back to the previous example,\nsuppose code in ",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/concurrent/")," wants to depend on code\nin ",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/"),". Presumably\n",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/BUCK")," has a build rule like:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'collect',\n  srcs = glob(['*.java']),\n  deps = ['//java/com/facebook/base:base',],)\n")),(0,t.mdx)("p",null,"Then ",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/BUCK")," could have a rule like:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'concurrent',\n  srcs = glob(['concurrent/*.java']),\n  deps = ['//java/com/facebook/base:base','//java/com/facebook/common/collect:collect',],)\n")),(0,t.mdx)("p",null,"whereas the following ",(0,t.mdx)("strong",{parentName:"p"},"would be invalid")," because\n",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/")," has its own build file, so\n",(0,t.mdx)("inlineCode",{parentName:"p"},"//java/com/facebook/common/collect:concurrent")," cannot list\n",(0,t.mdx)("inlineCode",{parentName:"p"},"java/com/facebook/common/collect/*.java")," in its ",(0,t.mdx)("inlineCode",{parentName:"p"},"srcs"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"java_library(\n  name = 'concurrent',\n  srcs = glob(['collect/*.java', 'concurrent/*.java']),\n  deps = ['//java/com/facebook/base:base',],)\n")))}p.isMDXComponent=!0}}]);