(self.webpackChunknimflow_docs=self.webpackChunknimflow_docs||[]).push([[658],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:12,id:"tutorial-create-action-type",title:"Create an Action Type"},s=void 0,p={unversionedId:"tutorial/tutorial-create-action-type",id:"tutorial/tutorial-create-action-type",isDocsHomePage:!1,title:"Create an Action Type",description:"Actions represents messages sent to a Context. Contexts are instances created to keep the orchestration for different cases. To identify a Context, we must use the reference property. For our example, we will create Contexts for each different invoice, and we will set the reference with the account name and the invoice number.",source:"@site/docs/tutorial/tutorial-12-create-action-type.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-create-action-type",permalink:"/es/tutorial/tutorial-create-action-type",editUrl:"https://github.com/nimflow/nimflow-docs/tree/main/docs/tutorial/tutorial-12-create-action-type.md",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"tutorial-create-action-type",title:"Create an Action Type"},sidebar:"tutorialSidebar",previous:{title:"Create a Context Type",permalink:"/es/tutorial/tutorial-create-context-type"},next:{title:"Set a Milestone",permalink:"/es/tutorial/tutorial-set-requested-milestone"}},l=[],u={toc:l};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Actions represents messages sent to a Context. Contexts are instances created to keep the orchestration for different cases. To identify a Context, we must use the reference property. For our example, we will create Contexts for each different invoice, and we will set the reference with the account name and the invoice number."),(0,o.kt)("p",null,"When an action is classified as initial, the engine creates new Contexts for each different reference. If a Context with that reference exists, the engine send the message to that existing Context. "),(0,o.kt)("p",null,"Let\u2019s create an Action Type to send requests for invoice recording in our orchestration. The data sent with the action (payload) will include the required data to create an invoice. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the icon to create a new Action Type"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"create action",src:n(39).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Set the name to "record"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To define the payload for the Action Type, open the ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," editor by selecting the ",(0,o.kt)("strong",{parentName:"p"},"JSON Schema")," button. Then complete the editor with the following data (you can copy and paste the schema):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "request": {\n            "type": "object",\n            "properties": {\n                "date": {\n                    "type": "string",\n                    "format": "date"\n                },\n                "accountName": {\n                    "type": "string"\n                },\n                "contactEmail": {\n                    "type": "string",\n                    "format": "email"\n                },\n                "amount": {\n                    "type": "number"\n                }\n            },\n            "required":[\n                "date",\n                "accountName",\n                "amount"\n            ]\n        }\n    },\n    "required": [\n        "request"\n    ]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Then accept to return to the Action Type editor. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will now define fields to store the payload in the state of the context and also to track the moment when this request happen. Please complete the Setters as shown in the following image: "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"action setters",src:n(542).Z})),(0,o.kt)("p",{parentName:"li"},"As you can see, the setter allows you to execute transformations with Javascript. Please try to avoid complex logic in the setters because you will need to send the message again to apply any modification. It is a recommended practice to receive the payload as pure as possible and to run transformation of data with Calculated Fields instead."),(0,o.kt)("p",{parentName:"li"},"We have embedded ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/index.html"},"Monaco")," to edit Javascript expression, JSON Schemas, Dashboard Widgets, etc. The editor enables inline documentation and intellisense. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Accept the changes to the Action Type. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let's indicate that this Action Type can initialize Context by selecting the Action Type icon as shown in the following image: "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"initial action",src:n(7716).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the Context Type."))),(0,o.kt)("p",null,"A Context Type must define at least one Action Type as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Initial")),", so new Contexts can be created."))}m.isMDXComponent=!0},39:function(e,t,n){"use strict";t.Z=n.p+"assets/images/studio-context-type-action-add-0eac50846c9b6f49f3e35d40000f25ac.png"},7716:function(e,t,n){"use strict";t.Z=n.p+"assets/images/studio-context-type-action-type-initial-1b26b4c0e43af9a7c196dd22f6b032b9.png"},542:function(e,t,n){"use strict";t.Z=n.p+"assets/images/studio-context-type-action-f8220bd933d6b7ff030e200be29d395f.png"}}]);