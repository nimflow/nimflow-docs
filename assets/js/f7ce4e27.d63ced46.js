(self.webpackChunknimflow_docs=self.webpackChunknimflow_docs||[]).push([[91],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3433:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,id:"get-started-create-a-new-context-type",title:"Create a Context Type"},s=void 0,p={unversionedId:"get-started/get-started-create-a-new-context-type",id:"get-started/get-started-create-a-new-context-type",isDocsHomePage:!1,title:"Create a Context Type",description:"Vamos a crear un Tipo de Contexto para comenzar a construir la soluci\xf3n. El Tipo de Contexto es donde se define la l\xf3gica para orquestar actividades relacionadas.",source:"@site/docs/get-started/get-started-create-a-context-type.md",sourceDirName:"get-started",slug:"/get-started/get-started-create-a-new-context-type",permalink:"/nimflow-docs/get-started/get-started-create-a-new-context-type",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/get-started/get-started-create-a-context-type.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"get-started-create-a-new-context-type",title:"Create a Context Type"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/nimflow-docs/get-started/get-started-intro"},next:{title:"Create an Action",permalink:"/nimflow-docs/get-started/get-started-create-an-action"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vamos a crear un ",(0,o.kt)("em",{parentName:"p"},"Tipo de Contexto")," para comenzar a construir la soluci\xf3n. El ",(0,o.kt)("em",{parentName:"p"},"Tipo de Contexto")," es donde se define la l\xf3gica para orquestar actividades relacionadas. "),(0,o.kt)("p",null,"Por favor inicie sesi\xf3n en ",(0,o.kt)("a",{parentName:"p",href:"https://ins.studio.nimflow.com/"},"nimflow studio")," y seleccione una ",(0,o.kt)("em",{parentName:"p"},"Unidad de Negocios")," de entrenamiento."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118570507-ece32b00-b741-11eb-861c-79524bc7c508.png",alt:"switch unit"})),(0,o.kt)("p",null,"A continuaci\xf3n seleccione ",(0,o.kt)("em",{parentName:"p"},"Tipos de Contextos")," (o Flujos en la versi\xf3n anterior) del menu de navegaci\xf3n izquierdo."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118570795-7a267f80-b742-11eb-9d60-4795af6dad1e.png",alt:"context types menu"})),(0,o.kt)("p",null,"La p\xe1gina principal mostrar\xe1 la lista de ",(0,o.kt)("em",{parentName:"p"},"Tipos de Contexto")," creados en la ",(0,o.kt)("em",{parentName:"p"},"Unidad de Negocios"),". Seleccione el \xedcono para agregar un nuevo ",(0,o.kt)("em",{parentName:"p"},"Tipo de Contexto"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118571007-d7bacc00-b742-11eb-9cf1-be8038cb3326.png",alt:"add context type"})),(0,o.kt)("p",null,"Una vez en el editor de ",(0,o.kt)("em",{parentName:"p"},"Tipos de Contextos"),", ingresar los datos seg\xfan la siguiente im\xe1gen:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118571312-5f083f80-b743-11eb-8015-5e25ae36ec98.png",alt:"context type fill name"})),(0,o.kt)("p",null,"Por favor guarde los cambios al ",(0,o.kt)("em",{parentName:"p"},"Tipo de Contexto"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44214222/118571442-a8588f00-b743-11eb-9a42-04d5e73285d2.png",alt:"context type save changes"})),(0,o.kt)("p",null,"Ya ha creado un nuevo ",(0,o.kt)("em",{parentName:"p"},"Tipo de Contexto")," !!!!"))}d.isMDXComponent=!0}}]);