"use strict";(self.webpackChunkdocs_beakerbrowser_com=self.webpackChunkdocs_beakerbrowser_com||[]).push([[191],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||n;return a?r.createElement(m,l(l({ref:t},s),{},{components:a})):r.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9262:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),l=["components"],p={title:"beaker.capabilities",description:"This API creates temporary URLs for safely sharing drive access between applications"},o=void 0,c={unversionedId:"apis/beaker.capabilities",id:"apis/beaker.capabilities",title:"beaker.capabilities",description:"This API creates temporary URLs for safely sharing drive access between applications",source:"@site/docs/apis/beaker.capabilities.md",sourceDirName:"apis",slug:"/apis/beaker.capabilities",permalink:"/docs.beakerbrowser.com/apis/beaker.capabilities",draft:!1,editUrl:"https://github.com/Alex313031/docs.beakerbrowser.com/edit/master/docs/apis/beaker.capabilities.md",tags:[],version:"current",frontMatter:{title:"beaker.capabilities",description:"This API creates temporary URLs for safely sharing drive access between applications"},sidebar:"docs",previous:{title:"Comparing and Merging Hyperdrives",permalink:"/docs.beakerbrowser.com/advanced/comparing-and-merging-hyperdrives"},next:{title:"beaker.contacts",permalink:"/docs.beakerbrowser.com/apis/beaker.contacts"}},s={},u=[{value:"API",id:"api",level:2},{value:"beaker.capabilities.create(targetUrl)",id:"beakercapabilitiescreatetargeturl",level:3},{value:"beaker.capabilities.modify(capUrl, targetUrl)",id:"beakercapabilitiesmodifycapurl-targeturl",level:3},{value:"beaker.capabilities.delete(capUrl)",id:"beakercapabilitiesdeletecapurl",level:3}],b={toc:u},d="wrapper";function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)(d,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'"Capabilities" are opaque URLs which map to hyperdrives while hiding the URL. The name comes from the ',(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Capability-based_security"},"capabilities security model"),"."),(0,n.kt)("p",null,"The purpose of capability URLs is to provide security primitives for constrained access to a hyperdrive. The default security model of a hyperdrive is that the pubkey URL provides read access locally and over the network. Because the pubkey is unchangeable, it's impossible to revoke access to a pubkey once it's acquired. The \"capability URLs\" are local mappings from random IDs to the hyperdrive pubkeys, and therefore can provide read access without giving away the pubkey."),(0,n.kt)("p",null,"Applications can share capability URLs with other applications (e.g. in an ",(0,n.kt)("inlineCode",{parentName:"p"},"<iframe>"),") to provide temporary and constrained access."),(0,n.kt)("p",null,"A hyperdrive capability URL uses a special ",(0,n.kt)("inlineCode",{parentName:"p"},".cap")," pseudo-TLD. They are formed as ",(0,n.kt)("inlineCode",{parentName:"p"},"hyper://{random-base32-id}.cap/"),"."),(0,n.kt)("p",null,'Capability URLs are local and stored in-memory. They will be "destroyed" when the browser restarts. They are not networked and therefore cannot be shared with other users. They are able to map to a key and a drive-version, but cannot map to subfolders or files.'),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"beakercapabilitiescreatetargeturl"},"beaker.capabilities.create(targetUrl)"),(0,n.kt)("p",null,"Create a new capability mapping to the target URL."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"targetUrl")," String. The URL which the capability will represent."),(0,n.kt)("li",{parentName:"ul"},"Returns ",(0,n.kt)("strong",{parentName:"li"},"Promise","<","String",">"),". The capability URL.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var capUrl = await beaker.capabilities.create('hyper://12345..af')\nawait beaker.hyperdrive.drive(capUrl).readdir('/')\n")),(0,n.kt)("h3",{id:"beakercapabilitiesmodifycapurl-targeturl"},"beaker.capabilities.modify(capUrl, targetUrl)"),(0,n.kt)("p",null,"Modify an existing capability's mapping."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"capUrl")," String. The URL of the capability to modify."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"targetUrl")," String. The URL which the capability will represent."),(0,n.kt)("li",{parentName:"ul"},"Returns ",(0,n.kt)("strong",{parentName:"li"},"Promise","<","Void",">"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await beaker.capabilities.modify(capUrl, 'hyper://fedcb..21')\nawait beaker.hyperdrive.drive(capUrl).readdir('/')\n")),(0,n.kt)("h3",{id:"beakercapabilitiesdeletecapurl"},"beaker.capabilities.delete(capUrl)"),(0,n.kt)("p",null,"Delete a capability. Future operations against the URL will fail."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"capUrl")," String. The URL of the capability to modify."),(0,n.kt)("li",{parentName:"ul"},"Returns ",(0,n.kt)("strong",{parentName:"li"},"Promise","<","Void",">"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await beaker.capabilities.delete(capUrl)\n")))}m.isMDXComponent=!0}}]);