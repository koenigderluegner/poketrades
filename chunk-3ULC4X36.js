import{f as he}from"./chunk-PIPRZSB7.js";import{a as j,b as le,c as de,d as p,g as ue,l as fe,n as U,o as pe}from"./chunk-64ZCW3Y5.js";import{Ba as X,Ca as P,Da as K,Ea as M,Ga as k,Ia as q,La as T,Ma as E,Na as S,Oa as J,Pa as Q,Qa as ee,Ra as te,Sa as ne,Ta as re,Ua as oe,V as y,Va as g,X as f,_ as H,aa as c,ab as D,ca as Y,cb as se,da as W,pc as ie,qc as ae,rc as ce,sa as w,ta as N}from"./chunk-5HD6PLTD.js";import{a as L,b as G}from"./chunk-ESJYUATY.js";var B=class extends de{supportsDOMEvents=!0},F=class r extends B{static makeCurrent(){le(new r)}onAndCancel(n,e,t,o){return n.addEventListener(e,t,o),()=>{n.removeEventListener(e,t,o)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Re();return e==null?null:Ce(e)}resetBaseElement(){R=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ue(document.cookie,n)}},R=null;function Re(){return R=R||document.querySelector("base"),R?R.getAttribute("href"):null}function Ce(r){return new URL(r,document.baseURI).pathname}var be=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||r)};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),$=new H(""),Se=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o,s){return this._findPluginFor(t).addEventListener(e,t,o,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new y(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||r)(c($),c(w))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),_=class{_doc;constructor(n){this._doc=n}manager},A="ng-app-id";function me(r){for(let n of r)n.remove()}function ge(r,n){let e=n.createElement("style");return e.textContent=r,e}function Ae(r,n,e,t){let o=r.head?.querySelectorAll(`style[${A}="${n}"],link[${A}="${n}"]`);if(o)for(let s of o)s.removeAttribute(A),s instanceof HTMLLinkElement?t.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function V(r,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var we=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.isServer=U(s),Ae(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,ge);t?.forEach(o=>this.addUsage(o,this.external,V))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let s=t.get(e);s?s.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(me(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])me(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,ge(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,V(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(A,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||r)(c(p),c(P),c(k,8),c(M))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),x={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},z=/%COMP%/g;var Me="%COMP%",_e=`_nghost-${Me}`,Oe=`_ngcontent-${Me}`,Ie=!0,Le=new H("",{providedIn:"root",factory:()=>Ie});function He(r){return Oe.replace(z,r)}function Ne(r){return _e.replace(z,r)}function Te(r,n){return n.map(e=>e.replace(z,r))}var ve=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,o,s,i,a,d,u=null,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=a,this.ngZone=d,this.nonce=u,this.tracingService=l,this.platformIsServer=U(a),this.defaultRenderer=new C(e,i,d,this.platformIsServer,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===T.ShadowDom&&(t=G(L({},t),{encapsulation:T.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof O?o.applyToHost(e):o instanceof b&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let i=this.doc,a=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,m=this.platformIsServer,h=this.tracingService;switch(t.encapsulation){case T.Emulated:s=new O(d,u,t,this.appId,l,i,a,m,h);break;case T.ShadowDom:return new Z(d,u,e,t,i,a,this.nonce,m,h);default:s=new b(d,u,t,l,i,a,m,h);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||r)(c(Se),c(we),c(P),c(Le),c(p),c(M),c(w),c(k),c(q,8))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),C=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,o,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.tracingService=s}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(x[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(ye(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(ye(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new y(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let s=x[o];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=x[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(D.DashCase|D.Important)?n.style.setProperty(e,t,o&D.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&D.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,o){if(typeof n=="string"&&(n=j().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);let s=this.decoratePreventDefault(t);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(n,e,s)),this.eventManager.addEventListener(n,e,s,o)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function ye(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Z=class extends C{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,t,o,s,i,a,d,u){super(n,s,i,d,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=o.styles;l=Te(o.id,l);for(let h of l){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=h,this.shadowRoot.appendChild(v)}let m=o.getExternalStyles?.();if(m)for(let h of m){let v=V(h,s);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},b=class extends C{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,o,s,i,a,d,u){super(n,s,i,a,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let l=t.styles;this.styles=u?Te(u,l):l,this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},O=class extends b{contentAttr;hostAttr;constructor(n,e,t,o,s,i,a,d,u){let l=o+"-"+t.id;super(n,e,t,s,i,a,d,u,l),this.contentAttr=He(l),this.hostAttr=Ne(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},Pe=(()=>{class r extends _{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,s){return e.addEventListener(t,o,s),()=>this.removeEventListener(e,t,o,s)}removeEventListener(e,t,o,s){return e.removeEventListener(t,o,s)}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})(),Ee=["alt","control","meta","shift"],ke={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},je={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Ue=(()=>{class r extends _{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,t,o,s){let i=r.parseEventName(t),a=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>j().onAndCancel(e,i.domEventName,a,s))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(t.pop()),i="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),i="code."),Ee.forEach(u=>{let l=t.indexOf(u);l>-1&&(t.splice(l,1),i+=u+".")}),i+=s,t.length!=0||s.length===0)return null;let d={};return d.domEventName=o,d.fullKey=i,d}static matchEventFullKeyCode(e,t){let o=ke[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ee.forEach(i=>{if(i!==o){let a=je[i];a(e)&&(s+=i+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac})}return r})();function Dt(r,n){return ie(L({rootComponent:r},xe(n)))}function xe(r){return{appProviders:[...Ze,...r?.providers??[]],platformProviders:Ve}}function Be(){F.makeCurrent()}function Fe(){return new N}function $e(){return X(document),document}var Ve=[{provide:M,useValue:fe},{provide:K,useValue:Be,multi:!0},{provide:p,useFactory:$e,deps:[]}];var Ze=[{provide:W,useValue:"root"},{provide:N,useFactory:Fe,deps:[]},{provide:$,useClass:Pe,multi:!0,deps:[p,w,M]},{provide:$,useClass:Ue,multi:!0,deps:[p]},ve,we,Se,{provide:se,useExisting:ve},{provide:pe,useClass:be,deps:[]},[]];var Rt=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ze=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275prov=f({token:r,factory:function(t){let o=null;return t?o=new(t||r):o=c(Ge),o},providedIn:"root"})}return r})(),Ge=(()=>{class r extends ze{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case g.NONE:return t;case g.HTML:return S(t,"HTML")?E(t):oe(this._doc,String(t)).toString();case g.STYLE:return S(t,"Style")?E(t):t;case g.SCRIPT:if(S(t,"Script"))return E(t);throw new y(5200,!1);case g.URL:return S(t,"URL")?E(t):re(String(t));case g.RESOURCE_URL:if(S(t,"ResourceURL"))return E(t);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return J(e)}bypassSecurityTrustStyle(e){return Q(e)}bypassSecurityTrustScript(e){return ee(e)}bypassSecurityTrustUrl(e){return te(e)}bypassSecurityTrustResourceUrl(e){return ne(e)}static \u0275fac=function(t){return new(t||r)(c(p))};static \u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),I=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r[r.IncrementalHydration=4]="IncrementalHydration",r}(I||{});function Ye(r,n=[],e={}){return{\u0275kind:r,\u0275providers:n}}function Ct(){return Ye(I.EventReplay,ae())}function bt(...r){let n=[],e=new Set,t=e.has(I.HttpTransferCacheOptions);for(let{\u0275providers:o,\u0275kind:s}of r)e.add(s),o.length&&n.push(o);return Y([[],ce(),e.has(I.NoHttpTransferCache)||t?[]:he({}),n])}export{ve as a,Dt as b,Rt as c,ze as d,Ct as e,bt as f};
