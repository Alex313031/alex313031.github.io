!function(){"use strict";const t=new Promise((t=>{function s(){"loading"!==document.readyState&&t()}document.addEventListener("readystatechange",s),s()})),s=document.createRange();function i(t){return s.createContextualFragment(String(t)).children[0]}s.selectNode(document.documentElement);const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function h(t,...s){return s=s.map((t=>String(t).replace(/[&<>"'/]/g,(t=>e[t])))),t.reduce(((t,i,e)=>t+i+(s[e]||"")),"")}function n(t){return new Response(t).text()}function o({removeClass:t=!1}={}){return(s,i="active",e="transition")=>{const h=s.classList.contains(i);if(t){if(!h)return Promise.resolve()}else if(h)return Promise.resolve();const n=new Promise((h=>{const n=t=>{t.target===s&&(s.removeEventListener("transitionend",n),s.classList.remove(e),h())};s.classList.add(e),requestAnimationFrame((()=>{s.addEventListener("transitionend",n),s.classList[t?"remove":"add"](i)}))})),o=new Promise((t=>{setTimeout(t,1e3)}));return Promise.race([n,o])}}const c=o(),a=o({removeClass:!0}),r=(()=>{let t;async function s(s,i){const e=await(t||(t=new Promise(((t,s)=>{const i=indexedDB.open("svgo-keyval",1);i.onerror=()=>{s(i.error)},i.onupgradeneeded=()=>{i.result.createObjectStore("keyval")},i.onsuccess=()=>{t(i.result)}})),t));return new Promise(((t,h)=>{const n=e.transaction("keyval",s);n.oncomplete=()=>t(),n.onerror=()=>h(n.error),i(n.objectStore("keyval"))}))}return{async get(t){let i;return await s("readonly",(s=>{i=s.get(t)})),i.result},set:(t,i)=>s("readwrite",(s=>{s.put(i,t)})),delete:t=>s("readwrite",(s=>{s.delete(t)}))}})();class u{constructor(t){this.t=0,this.i={},this.h=t,this.o=null}release(){this.u(),this.o&&(this.o.terminate(),this.o=null)}requestResponse(t){return new Promise(((s,i)=>{t.id=++this.t,this.i[t.id]=[s,i],this.o||this.l(),this.o.postMessage(t)}))}abort(){0!==Object.keys(this.i).length&&(this.u(),this.o&&this.o.terminate(),this.l())}u(){for(const t of Object.keys(this.i))this.m(t,null,new DOMException("AbortError","AbortError"))}l(){this.o=new Worker(this.h),this.o.onmessage=t=>this.v(t)}v(t){t.data.id?this.m(t.data.id,t.data.result,t.data.error&&new Error(t.data.error)):console.log("Unexpected message",t)}m(t,s,i){const e=this.i[t];e?(delete this.i[t],i?e[1](i):e[0](s)):console.log("No resolver for",{id:t,result:s,error:i})}}const l=new class extends u{constructor(){super("js/gzip-worker.js")}compress(t){return this.requestResponse({data:t})}};class d{constructor(t,s,i){this.text=t,this.p=null,this.h=null,this.width=s,this.height=i}async size({compress:t}){return t?(this.p||(this.p=l.compress(this.text).then((t=>t.byteLength))),this.p):this.text.length}get url(){return this.h||(this.h=URL.createObjectURL(new Blob([this.text],{type:"image/svg+xml"}))),this.h}release(){this.h&&URL.revokeObjectURL(this.h)}}function m(t){return{x:t.pageX,y:t.pageY}}function v(t,s){const i=Math.abs(s.x-t.x),e=Math.abs(s.y-t.y);return Math.hypot(i,e)}function p(t,s){return{x:(t.x+s.x)/2,y:(t.y+s.y)/2}}function g(t){return t.touches?[...t.touches].map((t=>m(t))):[m(t)]}class w{constructor(t,{eventArea:s=t,shouldCaptureFunc:i=(()=>!0)}={}){this.g=t,this.k=i,this._=0,this.C=0,this.P=1,this.S=0,this.M=[],this.L=t=>{"mousedown"===t.type&&0!==t.button||this.k(t.target)&&(t.preventDefault(),this.M=g(t),this.S++,1===this.S&&this.D())},this.F=t=>{t.preventDefault();const s=g(t),i=s.reduce(p),e=this.M.reduce(p),{left:h,top:n}=this.g.getBoundingClientRect();if(this._+=i.x-e.x,this.C+=i.y-e.y,s[1]){const t=v(s[0],s[1])/v(this.M[0],this.M[1]);this.P*=t,this._-=(i.x-h)*(t-1),this.C-=(i.y-n)*(t-1)}this.T(),this.M=s},this.$=t=>{t.preventDefault(),this.S--,this.M.pop(),this.S?this.M=g(t):(document.removeEventListener("mousemove",this.F),document.removeEventListener("mouseup",this.$),document.removeEventListener("touchmove",this.F),document.removeEventListener("touchend",this.$))},s.addEventListener("mousedown",this.L),s.addEventListener("touchstart",this.L),s.addEventListener("wheel",(t=>this.j(t)))}reset(){this._=0,this.C=0,this.P=1,this.T()}j(t){if(!this.k(t.target))return;t.preventDefault();const{left:s,top:i}=this.g.getBoundingClientRect();let e=t.deltaY;1===t.deltaMode&&(e*=15),e=Math.max(Math.min(e,60),-60);const h=e/300+1;this.P*h<.05||(this.P*=h,this._-=(t.pageX-s)*(h-1),this.C-=(t.pageY-i)*(h-1),this.T())}D(){document.addEventListener("mousemove",this.F),document.addEventListener("mouseup",this.$),document.addEventListener("touchmove",this.F),document.addEventListener("touchend",this.$)}T(){this.g.style.transform=`translate3d(${this._}px, ${this.C}px, 0) scale(${this.P})`}}class f{constructor(){this.container=i('<div class="svg-output"><div class="svg-container"><iframe class="svg-frame" sandbox="allow-scripts" scrolling="no" title="Loaded SVG file"></iframe></div></div>'),this.R=this.container.querySelector(".svg-frame"),this.A=this.container.querySelector(".svg-container"),t.then((()=>{this.V=new w(this.A,{eventArea:this.container})}))}setSvg({text:t,width:s,height:i}){const e=this.O();return this.R.src=`data:image/svg+xml,${encodeURIComponent(t)}`,this.R.style.width=`${s}px`,this.R.style.height=`${i}px`,e}reset(){this.R.src="about:blank",this.V.reset()}O(){return new Promise((t=>{const s=()=>{this.R.removeEventListener("load",s),t()};this.R.addEventListener("load",s)}))}}const y=new class extends u{constructor(){super("js/prism-worker.js")}highlight(t){return this.requestResponse({data:t})}};class k{constructor(){this.container=i('<div class="code-output"><pre><code></code></pre></div>'),this.U=this.container.querySelector("code")}async setSvg({text:t}){this.U.innerHTML=await y.highlight(t)}reset(){this.U.innerHTML=""}}class b{constructor(){this.container=i('<div class="output-switcher"></div>'),this.B={image:new f,code:new k},this.G=null,this.H=Promise.resolve(),this.set("image",{noAnimate:!0})}update(t){return this.G=t,this.B[this.I].setSvg(t)}reset(){this.B[this.I].reset()}set(t,{noAnimate:s=!1}={}){return this.H=this.H.then((async()=>{const i=this.I&&this.B[this.I].container;this.I=t;const e=this.B[this.I].container;if(this.container.append(e),this.G&&await this.update(this.G),s)e.classList.add("active"),i&&i.classList.remove("active");else{const t=[c(e)];i&&t.push(a(i)),await Promise.all(t)}i&&i.remove()})),this.H}}class _{constructor(){this.container=i('<span class="ripple"></span>')}animate(){this.container.classList.remove("animate"),this.container.offsetLeft,this.container.classList.add("animate")}}class x{constructor({title:t,href:s,iconSvg:e,major:h=!1}){this.container=i((s?"<a>":'<button class="unbutton" type="button">')+e+(s?"</a>":"</button>"));const n=["floating-action-button"];s&&(this.container.href=s),t&&this.container.setAttribute("title",t),h&&n.push("major-floating-action-button"),this.container.classList.add(...n),this.q=new _,this.container.append(this.q.container),this.container.addEventListener("click",(()=>this.onClick()))}onClick(){this.q.animate()}}class C{constructor(){this.container=i('<div class="spinner"><div class="spinner-container"><div class="spinner-layer"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>'),this.N=null,this.container.style.display="none",this.container.addEventListener("animationend",(t=>{t.target===this.container&&(this.container.style.display="none")}))}show(t=300){clearTimeout(this.N),this.container.style.display="none",this.container.classList.remove("cooldown"),this.N=setTimeout((()=>{this.container.style.display=""}),t)}hide(){clearTimeout(this.N),this.container.classList.add("cooldown")}}class P extends x{constructor(){super({title:"Download",href:"./",iconSvg:'<svg aria-hidden="true" class="icon" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',major:!0}),this.W=new C,this.container.append(this.W.container)}setDownload(t,{url:s}){this.container.download=t,this.container.href=s}working(){this.W.show(500)}done(){this.W.hide()}}class S extends x{constructor(){super({title:"Copy as text",iconSvg:'<svg aria-hidden="true" class="icon" viewBox="0 0 24 24"><path d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"/></svg>'}),this.K=null,this.J=document.createElement("pre")}onClick(t){super.onClick(t),this.copyText()}copyText(){if(!this.K)return!1;this.J.textContent=this.K,document.body.append(this.J),getSelection().removeAllRanges();const t=document.createRange();return t.selectNode(this.J),window.getSelection().addRange(t),document.execCommand("copy"),getSelection().removeAllRanges(),this.J.remove(),!0}setCopyText(t){this.K=t}}class M extends x{constructor(){super({title:"Preview on vivid background",iconSvg:'<svg aria-hidden="true" class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M21.143 9.667c-.733-1.392-1.914-3.05-3.617-4.753C14.549 1.936 12.048 1 10.741 1c-.414 0-.708.094-.86.246L8.52 2.606c-1.899-.236-3.42.106-4.294.983-.876.875-1.164 2.159-.792 3.523.492 1.806 2.305 4.049 5.905 5.375.038.323.157.638.405.885.588.588 1.535.586 2.121 0s.588-1.533.002-2.119a1.5 1.5 0 0 0-2.123-.001l-.17.256c-2.031-.765-3.395-1.828-4.232-2.9l3.879-3.875c.496 2.73 6.432 8.676 9.178 9.178l-7.115 7.107c-.234.153-2.798-.316-6.156-3.675-3.393-3.393-3.175-5.271-3.027-5.498L3.96 9.989C3.521 9.63 3.035 8.886 2.819 8.3L.685 10.431C.24 10.877 0 11.495 0 12.251c0 1.634 1.121 3.915 3.713 6.506C6.477 21.521 9.293 23 11.145 23c.648 0 1.18-.195 1.547-.562l8.086-8.078c.91.874-.778 3.538-.778 4.648a2 2 0 0 0 4-.001c0-3.184-1.425-6.81-2.857-9.34zM4.934 4.296c.527-.53 1.471-.791 2.656-.761L4.381 6.741c-.236-.978-.049-1.845.553-2.445zm9.292 4.079-.03-.029C12.904 7.054 10.393 3.99 11.1 3.283c.715-.715 3.488 1.521 5.062 3.096.862.862 2.088 2.247 2.937 3.458-1.717-1.074-3.491-1.469-4.873-1.462z"/></svg>'})}onClick(t){super.onClick(t),this.container.classList.contains("active")?(this.container.classList.remove("active"),document.documentElement.classList.remove("bg-dark")):(this.container.classList.add("active"),document.documentElement.classList.add("bg-dark"))}}function L(t,s){const i=10**s;return Math.floor(Math.round(t*i))/i}function D(t){return t<1024?`${t} bytes`:`${L(t/1024,2)}k`}class z{constructor(){this.container=i('<div class="results"><span class="size"></span> <span class="diff"></span></div>'),this.X=this.container.querySelector(".size"),this.Y=this.container.querySelector(".diff")}update({size:t,comparisonSize:s}){this.X.textContent=s?`${D(s)} → ${D(t)}`:D(t),this.Y.classList.remove("decrease","increase"),s?t===s?this.Y.textContent="100%":(this.Y.textContent=`${L(t/s*100,2)}%`,this.Y.classList.add(t>s?"increase":"decrease")):this.Y.textContent=""}}let F=()=>({events:{},emit(t,...s){let i=this.events[t]||[];for(let t=0,e=i.length;t<e;t++)i[t](...s)},on(t,s){return this.events[t]?.push(s)||(this.events[t]=[s]),()=>{this.events[t]=this.events[t]?.filter((t=>s!==t))}}});class T{constructor(t){this.container=i('<div class="material-slider"><div class="track"><div class="track-on"></div><div class="handle"><div class="arrow"></div><div class="val"></div></div></div></div>'),this.Z=t,this.tt=this.container.querySelector(".handle"),this.st=this.container.querySelector(".track-on"),this.it=this.container.querySelector(".val"),this.Z.parentNode.insertBefore(this.container,this.Z),this.container.insertBefore(this.Z,this.container.firstChild),this.Z.addEventListener("input",(()=>this.et())),this.Z.addEventListener("mousedown",(()=>this.ht())),this.Z.addEventListener("touchstart",(()=>this.nt())),this.Z.addEventListener("touchend",(()=>this.ot())),this.ct()}set value(t){this.Z.value=t,this.T()}nt(){this.Z.focus()}ot(){this.Z.blur()}ht(){this.Z.classList.add("active");const t=()=>{requestAnimationFrame((()=>{this.Z.blur()})),this.Z.classList.remove("active"),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}et(){this.T()}T(){requestAnimationFrame((()=>this.ct()))}ct(){const{min:t,max:s,value:i}=this.Z,e=(Number(i)-t)/(s-t);this.st.style.width=this.tt.style.left=100*e+"%",this.it.textContent=i}}class ${constructor(){this.emitter=F(),this.rt=null,t.then((()=>{this.container=document.querySelector(".settings"),this.ut=[...this.container.querySelectorAll(".plugins input")],this.lt=[...this.container.querySelectorAll(".global input")];const t=this.container.querySelector(".settings-scroller"),s=this.container.querySelector(".setting-reset"),i=this.container.querySelectorAll("input[type=range]");this.dt=new _,s.append(this.dt.container),this.vt=new WeakMap;for(const t of i)this.vt.set(t,new T(t));this.container.addEventListener("input",(t=>this.gt(t))),s.addEventListener("click",(()=>this.wt())),t.addEventListener("mousedown",(t=>{t.target.closest("input[type=range]")||t.preventDefault()}))}))}gt(t){clearTimeout(this.rt),"range"===t.target.type?this.rt=setTimeout((()=>this.emitter.emit("change")),150):this.emitter.emit("change")}wt(){this.dt.animate();const t=this.getSettings();for(const t of this.lt)"checkbox"===t.type?t.checked=t.hasAttribute("checked"):"range"===t.type&&(this.vt.get(t).value=t.getAttribute("value"));for(const t of this.ut)t.checked=t.hasAttribute("checked");this.emitter.emit("reset",t),this.emitter.emit("change")}setSettings(t){for(const s of this.lt)s.name in t&&("checkbox"===s.type?s.checked=t[s.name]:"range"===s.type&&(this.vt.get(s).value=t[s.name]));for(const s of this.ut)s.name in t.plugins&&(s.checked=t.plugins[s.name])}getSettings(){const t=[],s={plugins:{}};for(const i of this.lt)"gzip"!==i.name&&"original"!==i.name&&("checkbox"===i.type?t.push(Number(i.checked)):t.push(`|${i.value}|`)),s[i.name]="checkbox"===i.type?i.checked:i.value;for(const i of this.ut)t.push(Number(i.checked)),s.plugins[i.name]=i.checked;return s.fingerprint=t.join(","),s}}class j{constructor(){this.emitter=F(),this.allowHide=!1,this.W=new C,t.then((()=>{this.container=document.querySelector(".main-menu"),this.ft=this.container.querySelector(".load-file-input"),this.yt=this.container.querySelector(".paste-input"),this.kt=this.container.querySelector(".load-demo"),this.bt=this.container.querySelector(".load-file"),this._t=this.container.querySelector(".menu-input"),this.xt=this.container.querySelector(".overlay"),this.Ct=this.container.querySelector(".menu"),document.querySelector(".menu-btn").addEventListener("click",(t=>this.Pt(t))),this.xt.addEventListener("click",(t=>this.St(t))),this.bt.addEventListener("click",(t=>this.Mt(t))),this.kt.addEventListener("click",(t=>this.Lt(t))),this.ft.addEventListener("change",(()=>this.Dt())),this.yt.addEventListener("input",(()=>this.zt()))}))}show(){this.container.classList.remove("hidden"),a(this.xt,"hidden"),a(this.Ct,"hidden")}hide(){this.allowHide&&(this.stopSpinner(),this.container.classList.add("hidden"),c(this.xt,"hidden"),c(this.Ct,"hidden"))}stopSpinner(){this.W.hide()}showFilePicker(){this.ft.click()}setPasteInput(t){this.yt.value=t,this.yt.dispatchEvent(new Event("input"))}St(t){t.preventDefault(),this.hide()}Pt(t){t.preventDefault(),this.show()}zt(){const t=this.yt.value;t.includes("</svg>")&&(this.yt.value="",this.yt.blur(),this._t.append(this.W.container),this.W.show(),this.emitter.emit("svgDataLoad",{data:t,filename:"image.svg"}))}Mt(t){t.preventDefault(),t.target.blur(),this.showFilePicker()}async Dt(){const t=this.ft.files[0];t&&(this.bt.append(this.W.container),this.W.show(),this.emitter.emit("svgDataLoad",{data:await n(t),filename:t.name}))}async Lt(t){t.preventDefault(),t.target.blur(),this.kt.append(this.W.container),this.W.show();try{const t=await fetch("test-svgs/car-lite.svg").then((t=>t.text()));this.emitter.emit("svgDataLoad",{data:t,filename:"car-lite.svg"})}catch{this.stopSpinner();const t=new Error("Couldn't fetch demo SVG");this.emitter.emit("error",{error:t})}}}class E{constructor(t,s,e,h){this.container=i('<div class="toast"><div class="toast-content"></div></div>');const n=this.container.querySelector(".toast-content");this.Ft=null,this.Tt=null,h?(n.insertAdjacentHTML("afterbegin","<pre><code></code></pre>"),n.querySelector("code").textContent=t):n.textContent=t,this.answer=new Promise((t=>{this.Ft=t}));for(const t of e){const s=document.createElement("button");s.className="unbutton",s.textContent=t,s.type="button",s.addEventListener("click",(()=>{this.Ft(t)})),this.container.append(s)}s&&(this.Tt=setTimeout((()=>this.hide()),s))}hide(){return clearTimeout(this.Tt),this.Ft(),c(this.container,"hide")}}class R{constructor(){this.container=i('<div class="toasts"></div>')}show(t,{duration:s=0,buttons:i=["dismiss"],isError:e=!1}={}){const h=new E(t,s,i,e);return this.container.append(h.container),h.answer.then((()=>h.hide())).then((()=>{h.container.remove()})),h}}class A{constructor(){this.emitter=F(),this.container=i('<div class="drop-overlay">Drop it!</div>'),this.$t=0,this.jt=null,t.then((()=>{document.addEventListener("dragover",(t=>t.preventDefault())),document.addEventListener("dragenter",(t=>this.Et(t))),document.addEventListener("dragleave",(()=>this.Rt())),document.addEventListener("drop",(t=>this.At(t)))}))}Et(t){this.jt!==t.target&&(this.jt=t.target,this.$t++||c(this.container))}Rt(){this.jt=null,--this.$t||a(this.container)}async At(t){t.preventDefault(),this.$t=0,a(this.container);const s=t.dataTransfer.files[0];s&&this.emitter.emit("svgDataLoad",{data:await n(s),filename:s.name})}}class V{constructor(){t.then((()=>{this.container=document.querySelector(".preloader"),this.activated=this.container.classList.contains("active"),this.hide()}))}async hide(){await a(this.container,"active"),this.container.style.display="none"}}class O{constructor(t){this.container=i('<section class="changelog"></section>'),this.Vt=t}async showLogFrom(s){if(s===this.Vt)return;const e=await fetch("changelog.json").then((t=>t.json()));let n=0,o=0;for(const[t,i]of Object.entries(e)){if(i.version===this.Vt)n=t;else if(i.version===s)break;o=t+1}const a=e.slice(n,o).reduce(((t,s)=>t.concat(s.changes)),[]).map((t=>h`<li>${t}</li>`));this.container.append(i("<h1>Updated!</h1>"),i(`<ul>${a.join("")}</ul>`)),await t,c(this.container)}}class U{constructor(s){this.Ot=s,t.then((()=>{this.Ut=document.querySelector(".results-container"),this.Bt=document.querySelector(".results-container-mobile"),this.Gt=matchMedia("(min-width: 640px)"),this.Gt.addListener((()=>this.Ht())),this.Ht()}))}Ht(){this.Gt.matches?this.Ut.append(this.Ot.container):this.Bt.append(this.Ot.container)}}class B{constructor(){this.emitter=F(),this.container=null,t.then((()=>{this.container=document.querySelector(".view-toggler"),this.container.output[0].checked=!0,this.container.addEventListener("change",(()=>{this.emitter.emit("change",{value:this.container.output.value})}))}))}}class G{constructor(t){this.It=t,this.purge()}purge(){this.qt=[],this.Nt=[],this.Wt=0}add(t,s){const i=this.Nt[this.Wt];i&&i.release(),this.qt[this.Wt]=t,this.Nt[this.Wt]=s,this.Wt=(this.Wt+1)%this.It}match(t){return this.Nt[this.qt.indexOf(t)]}}class H{constructor(...t){this.Kt=!1,this.Jt=t}activate(){if(!this.Kt)return this.Kt=!0,Promise.all(this.Jt.map((t=>c(t))))}}const I=new class extends u{constructor(){super("js/svgo-worker.js"),this.Qt=Promise.resolve()}async wrapOriginal(t){const{width:s,height:i}=await this.requestResponse({action:"wrapOriginal",data:t});return new d(t,s,i)}process(t,s){return this.abort(),this.Qt=this.Qt.catch((()=>{})).then((async()=>{const{data:i,dimensions:e}=await this.requestResponse({action:"process",settings:s,data:t});return new d(i,e.width,e.height)})),this.Qt}};!function(){let t="mouse";document.body.addEventListener("focus",(s=>{s.target.classList.add("key"===t?"key-focused":"mouse-focused")}),!0),document.body.addEventListener("blur",(t=>{t.target.classList.remove("key-focused","mouse-focused")}),!0),document.body.addEventListener("keydown",(()=>{t="key"}),!0),document.body.addEventListener("mousedown",(()=>{t="mouse"}),!0)}(),new class{constructor(){this.Xt=null,this.Yt=new b,this.Zt=new P,this.ts=new S,this.ss=new z,this.es=new $,this.hs=new j,this.ns=new R;const s=new M,i=new A,e=new V,h=new O(self.version);this.os=new U(this.ss);const n=new B;this.es.emitter.on("change",(()=>this.cs())),this.es.emitter.on("reset",(t=>this.rs(t))),this.hs.emitter.on("svgDataLoad",(t=>this.et(t))),i.emitter.on("svgDataLoad",(t=>this.et(t))),this.hs.emitter.on("error",(({error:t})=>this.us(t))),n.emitter.on("change",(t=>this.Yt.set(t.value))),window.addEventListener("keydown",(t=>this.ls(t))),window.addEventListener("paste",(t=>this.ds(t))),window.addEventListener("copy",(t=>this.vs(t))),this.ps=null,this.gs=new G(10),this.ws=0,this.fs=!1,this.ys=!1,"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js",{scope:"./"}).then((t=>{t.addEventListener("updatefound",(()=>this.ks(t)))})),r.get("last-seen-version").then((t=>{t&&h.showLogFrom(t),r.set("last-seen-version",self.version)})),t.then((()=>{const t=document.querySelector(".app-output"),n=t.querySelector(".action-button-container"),o=t.querySelector(".minor-action-container"),c=t.querySelector(".toolbar"),a=t.querySelector(".output"),r=t.querySelector(".menu-extra");this.Xt=new H(c,n,this.Yt.container,this.es.container),o.append(s.container,this.ts.container),n.append(this.Zt.container),a.append(this.Yt.container),t.append(this.ns.container,i.container),r.append(h.container),this.bs(),e.activated&&this.ns.show("Ready now!",{duration:3e3})}))}ls(t){"o"===t.key&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),this.hs.showFilePicker()),"Escape"===t.key&&this.hs.hide()}ds(t){const s=t.clipboardData.getData("text");s.includes("</svg>")?(this.hs.setPasteInput(s),t.preventDefault()):this.ns.show("Pasted value not an SVG",{duration:2e3})}vs(t){window.getSelection().isCollapsed&&(this.ns.show(this.ts.copyText()?"Copy successful":"Nothing to copy",{duration:2e3}),t.preventDefault())}ks(t){const s=t.installing;t.installing.addEventListener("statechange",(async()=>{if(!this.ys)if("activated"!==s.state||navigator.serviceWorker.controller){if("activated"===s.state&&navigator.serviceWorker.controller){if(!this.fs)return this.ys=!0,void location.reload();const t=this.ns.show("Update available",{buttons:["reload","dismiss"]});"reload"===await t.answer&&(this.ys=!0,location.reload())}}else this.ns.show("Ready to work offline",{duration:5e3})}))}cs(){const t=this.es.getSettings();this._s(t),this.xs(t)}async rs(t){const s=this.ns.show("Settings reset",{buttons:["undo","dismiss"],duration:5e3});"undo"===await s.answer&&(this.es.setSettings(t),this.cs())}async et({data:t,filename:s}){const i=this.es.getSettings();this.fs=!0;try{this.ps=await I.wrapOriginal(t),this.Cs=s}catch(t){return this.hs.stopSpinner(),void this.us(new Error(`Load failed: ${t.message}`))}this.gs.purge(),this.xs(i),this.Yt.reset(),this.Xt.activate(),this.hs.allowHide=!0,this.hs.hide()}us(t){this.ns.show(t.message,{isError:!0}),console.error(t)}async bs(){const t=await r.get("settings");t&&this.es.setSettings(t)}_s(t){const{original:s,...i}=t;r.set("settings",i)}async xs(t){const s=this.ws=Math.random();if(await I.abort(),s!==this.ws)return;if(t.original)return void this.Ps(this.ps,{compress:t.gzip});const i=this.gs.match(t.fingerprint);if(i)this.Ps(i,{compareToFile:this.ps,compress:t.gzip});else{this.Zt.working();try{const s=await I.process(this.ps.text,t);this.Ps(s,{compareToFile:this.ps,compress:t.gzip}),this.gs.add(t.fingerprint,s)}catch(t){if("AbortError"===t.name)return;t.message=`Minifying error: ${t.message}`,this.us(t)}finally{this.Zt.done()}}}async Ps(t,{compareToFile:s,compress:i}){this.Yt.update(t),this.Zt.setDownload(this.Cs,t),this.ts.setCopyText(t.text),this.ss.update({comparisonSize:s&&await s.size({compress:i}),size:await t.size({compress:i})})}}}();
//# sourceMappingURL=page.js.map