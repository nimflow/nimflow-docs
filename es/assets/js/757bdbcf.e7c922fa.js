(self.webpackChunknimflow_docs=self.webpackChunknimflow_docs||[]).push([[246],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3553:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:6,id:"get-started-create-a-milestone",title:"Create a Milestone"},l=void 0,s={unversionedId:"get-started/get-started-create-a-milestone",id:"get-started/get-started-create-a-milestone",isDocsHomePage:!1,title:"Create a Milestone",description:"Crear el hito Recibido",source:"@site/docs/get-started/get-started-create-a-milestone.md",sourceDirName:"get-started",slug:"/get-started/get-started-create-a-milestone",permalink:"/es/get-started/get-started-create-a-milestone",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/get-started/get-started-create-a-milestone.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"get-started-create-a-milestone",title:"Create a Milestone"},sidebar:"tutorialSidebar",previous:{title:"Create a Task",permalink:"/es/get-started/get-started-create-a-task"},next:{title:"nimflow-portal",permalink:"/es/get-started/nimflow-portal"}},p=[{value:"Crear el hito Recibido",id:"crear-el-hito-recibido",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"crear-el-hito-recibido"},"Crear el hito Recibido"),(0,o.kt)("p",null,"Vamos a registrar el momento en que se recibe la oportunidad para poder medir tiempos de ciclo de este proceso. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ingrese en el editor del ",(0,o.kt)("strong",{parentName:"p"},"Tipo de Contexto")," de los pasos anteriores")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Seleccione el \xedcono para editar la acci\xf3n ",(0,o.kt)("em",{parentName:"p"},"registrar")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118591037-1fece500-b769-11eb-836b-09b3a22c5167.png",alt:"image"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Agregue un nuevo campo con la clave ",(0,o.kt)("em",{parentName:"li"},"recibido"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118591135-4ca0fc80-b769-11eb-86f6-5a33a5441a06.png",alt:"image"})),(0,o.kt)("p",null,"En este caso la expresi\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"new Date()")," permite asignar a la clave ",(0,o.kt)("em",{parentName:"p"},"recibido")," la fecha del momento en que se recibe la acci\xf3n ",(0,o.kt)("em",{parentName:"p"},"registrar"),". "),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Indique que el campo ",(0,o.kt)("em",{parentName:"li"},"recibido")," es un Hito en la lista de campos a la derecha. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118591750-56772f80-b76a-11eb-83c6-26ea0618632a.png",alt:"image"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Seleccione el \xedcono para incluir el campo en el grafo")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118591841-845c7400-b76a-11eb-84f6-3187ec4650a1.png",alt:"image"})),(0,o.kt)("p",null,"Al incluir un campo en el gr\xe1fo, se puede explorar sus relaciones con otros elementos del Tipo de Contexto. En este caso se representa con una\nlinea azul la relaci\xf3n con la acci\xf3n ",(0,o.kt)("em",{parentName:"p"},"registrar")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118591972-c7b6e280-b76a-11eb-8386-fe7bb3189bb4.png",alt:"image"})))}m.isMDXComponent=!0}}]);