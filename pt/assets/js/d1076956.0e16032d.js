(self.webpackChunknimflow_docs=self.webpackChunknimflow_docs||[]).push([[817],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6545:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:16,id:"tutorial-simulate-contexts",title:"Simulate contexts"},s=void 0,p={unversionedId:"tutorial/tutorial-simulate-contexts",id:"tutorial/tutorial-simulate-contexts",isDocsHomePage:!1,title:"Simulate contexts",description:"nimflow includes a Context simulator to explore and validate Context Types. This is a usefull tool during the Context Type creation because it enables to validate the reactions to different events.",source:"@site/docs/tutorial/tutorial-16-simulate-contexts.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-simulate-contexts",permalink:"/pt/tutorial/tutorial-simulate-contexts",editUrl:"https://github.com/nimflow/nimflow-docs/tree/main/docs/tutorial/tutorial-16-simulate-contexts.md",version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,id:"tutorial-simulate-contexts",title:"Simulate contexts"},sidebar:"tutorialSidebar",previous:{title:"Create a Task Type",permalink:"/pt/tutorial/tutorial-create-task-type"}},c=[{value:"Simulate the Initial Action",id:"simulate-the-initial-action",children:[]},{value:"Change the Initial Action payload",id:"change-the-initial-action-payload",children:[]},{value:"Simulate Responses",id:"simulate-responses",children:[]}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"nimflow includes a Context simulator to explore and validate Context Types. This is a usefull tool during the Context Type creation because it enables to validate the reactions to different events. "),(0,o.kt)("h2",{id:"simulate-the-initial-action"},"Simulate the Initial Action"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select Simulate from the navigation menu in the left side of the page."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate",src:a(7753).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," icon to create a new simulation")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Contoso-invoicing")," from the Context Type list. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the simulation editor complete the name with ",(0,o.kt)("inlineCode",{parentName:"p"},"Contoso-invoicing-dev-001"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," icon in the Event box to simulate an Action.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),", complete the form with the data in the following image and then select ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD ACTION"),":"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate action record",src:a(1237).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can now explore the state after simulating the action in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Current state")," box."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate state",src:a(8909).Z})),(0,o.kt)("p",{parentName:"li"},"You can see the milestone ",(0,o.kt)("em",{parentName:"p"},"requested")," indicated with a flag in the top-right corner and the calculated field ",(0,o.kt)("inlineCode",{parentName:"p"},"requiresApproval: false")," because ",(0,o.kt)("inlineCode",{parentName:"p"},"request.amount"),"is lower than 10000. This is the reason because the task ",(0,o.kt)("em",{parentName:"p"},"ApproveInvoicingRequest")," has not been activated. "))),(0,o.kt)("p",null,"Let's now change the payload of this simulated event to test the task creation."),(0,o.kt)("h2",{id:"change-the-initial-action-payload"},"Change the Initial Action payload"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instead of creating a new Action, we will just update the payload of the created action. For this, expand the record event and select the icon to open the payload as in the following image: "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate record payload open",src:a(4606).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the amount to ",(0,o.kt)("inlineCode",{parentName:"p"},"12000"),"and the select ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),"to confirm the change. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate record payload record",src:a(1479).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"Current state")," box shows ",(0,o.kt)("inlineCode",{parentName:"p"},"requiresApproval: true")," and the task ",(0,o.kt)("inlineCode",{parentName:"p"},"ApproveInvoicingRequest")," is activated."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate state",src:a(6751).Z}),"\n",(0,o.kt)("img",{alt:"simulate task approve invoicing request",src:a(7458).Z})))),(0,o.kt)("h2",{id:"simulate-responses"},"Simulate Responses"),(0,o.kt)("p",null,"Let's simulate different responses:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("em",{parentName:"p"},"Tasks")," box for the task ",(0,o.kt)("em",{parentName:"p"},"ApproveInvoicingRequest")," select ",(0,o.kt)("inlineCode",{parentName:"p"},"approved"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select send in the response dialog box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select to expand the ",(0,o.kt)("em",{parentName:"p"},"approve")," event to cause the recalculation of the state. This is only required in the simulation allow the step-by-step exploration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now the state has the milestone ",(0,o.kt)("em",{parentName:"p"},"approved")," and the task has been deactivated, according to the defined condition for the task. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate state",src:a(57).Z})))),(0,o.kt)("p",null,"You will now simulate the ",(0,o.kt)("em",{parentName:"p"},"reject")," response:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the last event selecting the icon shown in the following image:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate event delete",src:a(161).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE ALL")," and then expand the the ",(0,o.kt)("em",{parentName:"p"},"record")," event to recalculate the state.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("em",{parentName:"p"},"Tasks")," box for the task ",(0,o.kt)("em",{parentName:"p"},"ApproveInvoicingRequest")," select ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select send in the response dialog box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now the state has the final milestone ",(0,o.kt)("em",{parentName:"p"},"rejected")," and the task has been deactivated. Once a final milestone is reached, all active tasks are deactivated. This is the reason why it is not neccesary to include this milestone in the task condition.  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"simulate state",src:a(3615).Z})))),(0,o.kt)("p",null,"Congratulations, we have created a new Context Type and simulated the orchestation ! You are now ready to ",(0,o.kt)("strong",{parentName:"p"},"run")," the orchestation."))}m.isMDXComponent=!0},7753:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-leftsidebar-simulate-5bac07f30e0b7f295ed237a359823841.png"},1237:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-action-record-b1db82e22bd4d74595b25ec845a1b443.png"},161:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-event-delete-fc7de2502078cddf341e6755c4cdc67f.png"},4606:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-event-payload-open-3c6a98a1020a26a2eb6bfc99ea4ee969.png"},1479:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-event-payload-record-1565112b2d48e96e86436b553969c6c4.png"},8909:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-state1-cccd1dbeff425b739b8eb68eba147f32.png"},6751:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-state2-ea4dd1786962f67a1b55c525ba55324e.png"},57:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-state3-45c9db85810bf94105cc9b6507353c8f.png"},3615:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-state4-167872e88d5b7c607d81d5570abbf77e.png"},7458:function(e,t,a){"use strict";t.Z=a.p+"assets/images/studio-simulate-task-approve-invoicing-request1-d18b008c97a82e34facddc295bcefd4f.png"}}]);