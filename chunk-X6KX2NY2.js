import{d as ve,g as Re,o as be}from"./chunk-GCQOBVVX.js";import{A as de,Da as me,Ga as ge,H as q,Ia as Te,R as le,U as ue,V as R,X as _,_ as g,aa as b,ba as f,c as G,ca as he,ea as fe,fa as pe,j as ae,k as S,o as k,qa as W,sa as ye,ub as Ee,vb as we,x as ce}from"./chunk-IDMNUBYU.js";import{a as J,c as ie,g as $}from"./chunk-ESJYUATY.js";var j=class{},U=class{},w=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let t=n.indexOf(":");if(t>0){let s=n.slice(0,t),i=n.slice(t+1).trim();this.addHeaderEntry(s,i)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,t)=>{this.addHeaderEntry(t,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,t])=>{this.setHeaderEntries(n,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new r;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,n);let s=(e.op==="a"?this.headers.get(n):void 0)||[];s.push(...t),this.headers.set(n,s);break;case"d":let i=e.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let o=this.headers.get(n);if(!o)return;o=o.filter(l=>i.indexOf(l)===-1),o.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,o)}break}}addHeaderEntry(e,n){let t=e.toLowerCase();this.maybeSetNormalizedName(e,t),this.headers.has(t)?this.headers.get(t).push(n):this.headers.set(t,[n])}setHeaderEntries(e,n){let t=(Array.isArray(n)?n:[n]).map(i=>i.toString()),s=e.toLowerCase();this.headers.set(s,t),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var Q=class{encodeKey(e){return Pe(e)}encodeValue(e){return Pe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Ve(r,e){let n=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,l]=i==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=n.get(o)||[];a.push(l),n.set(o,a)}),n}var Je=/%(\d[a-f0-9])/gi,$e={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Pe(r){return encodeURIComponent(r).replace(Je,(e,n)=>$e[n]??e)}function C(r){return`${r}`}var N=class r{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Q,e.fromString){if(e.fromObject)throw new R(2805,!1);this.map=Ve(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let t=e.fromObject[n],s=Array.isArray(t)?t.map(C):[C(t)];this.map.set(n,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(t=>{let s=e[t];Array.isArray(s)?s.forEach(i=>{n.push({param:t,value:i,op:"a"})}):n.push({param:t,value:s,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(t=>n+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new r({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(C(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],s=t.indexOf(C(e.value));s!==-1&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Z=class{map=new Map;set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ge(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ne(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function Ae(r){return typeof Blob<"u"&&r instanceof Blob}function Me(r){return typeof FormData<"u"&&r instanceof FormData}function qe(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var F="Content-Type",z="Accept",re="X-Request-URL",ke="text/plain",Fe="application/json",Le=`${Fe}, ${ke}, */*`,L=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,n,t,s){this.url=n,this.method=e.toUpperCase();let i;if(Ge(this.method)||s?(this.body=t!==void 0?t:null,i=s):i=t,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new w,this.context??=new Z,!this.params)this.params=new N,this.urlWithParams=n;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=n;else{let l=n.indexOf("?"),a=l===-1?"?":l<n.length-1?"&":"";this.urlWithParams=n+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ne(this.body)||Ae(this.body)||Me(this.body)||qe(this.body)?this.body:this.body instanceof N?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Me(this.body)?null:Ae(this.body)?this.body.type||null:Ne(this.body)?null:typeof this.body=="string"?ke:this.body instanceof N?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Fe:null}clone(e={}){let n=e.method||this.method,t=e.url||this.url,s=e.responseType||this.responseType,i=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,l=e.withCredentials??this.withCredentials,a=e.reportProgress??this.reportProgress,p=e.headers||this.headers,y=e.params||this.params,m=e.context??this.context;return e.setHeaders!==void 0&&(p=Object.keys(e.setHeaders).reduce((T,u)=>T.set(u,e.setHeaders[u]),p)),e.setParams&&(y=Object.keys(e.setParams).reduce((T,u)=>T.set(u,e.setParams[u]),y)),new r(n,t,o,{params:y,headers:p,context:m,reportProgress:a,responseType:s,withCredentials:l,transferCache:i})}},A=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(A||{}),B=class{headers;status;statusText;url;ok;type;constructor(e,n=200,t="OK"){this.headers=e.headers||new w,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},X=class r extends B{constructor(e={}){super(e)}type=A.ResponseHeader;clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},D=class r extends B{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=A.Response;clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},P=class extends B{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},je=200,We=204;function K(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Ke=(()=>{class r{handler;constructor(n){this.handler=n}request(n,t,s={}){let i;if(n instanceof L)i=n;else{let a;s.headers instanceof w?a=s.headers:a=new w(s.headers);let p;s.params&&(s.params instanceof N?p=s.params:p=new N({fromObject:s.params})),i=new L(n,t,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:p,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=S(i).pipe(de(a=>this.handler.handle(a)));if(n instanceof L||s.observe==="events")return o;let l=o.pipe(ce(a=>a instanceof D));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new R(2806,!1);return a.body}));case"blob":return l.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new R(2807,!1);return a.body}));case"text":return l.pipe(k(a=>{if(a.body!==null&&typeof a.body!="string")throw new R(2808,!1);return a.body}));case"json":default:return l.pipe(k(a=>a.body))}case"response":return l;default:throw new R(2809,!1)}}delete(n,t={}){return this.request("DELETE",n,t)}get(n,t={}){return this.request("GET",n,t)}head(n,t={}){return this.request("HEAD",n,t)}jsonp(n,t){return this.request("JSONP",n,{params:new N().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,t={}){return this.request("OPTIONS",n,t)}patch(n,t,s={}){return this.request("PATCH",n,K(s,t))}post(n,t,s={}){return this.request("POST",n,K(s,t))}put(n,t,s={}){return this.request("PUT",n,K(s,t))}static \u0275fac=function(t){return new(t||r)(b(j))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),Ye=/^\)\]\}',?\n/;function Oe(r){if(r.url)return r.url;let e=re.toLocaleLowerCase();return r.headers.get(e)}var Ue=new g(""),Y=(()=>{class r{fetchImpl=f(H,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n));ngZone=f(ye);handle(n){return new G(t=>{let s=new AbortController;return this.doRequest(n,s.signal,t).then(ee,i=>t.error(new P({error:i}))),()=>s.abort()})}doRequest(n,t,s){return $(this,null,function*(){let i=this.createRequestInit(n),o;try{let u=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,J({signal:t},i)));Qe(u),s.next({type:A.Sent}),o=yield u}catch(u){s.error(new P({error:u,status:u.status??0,statusText:u.statusText,url:n.urlWithParams,headers:u.headers}));return}let l=new w(o.headers),a=o.statusText,p=Oe(o)??n.urlWithParams,y=o.status,m=null;if(n.reportProgress&&s.next(new X({headers:l,status:y,statusText:a,url:p})),o.body){let u=o.headers.get("content-length"),M=[],c=o.body.getReader(),d=0,E,v,h=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>$(this,null,function*(){for(;;){let{done:I,value:x}=yield c.read();if(I)break;if(M.push(x),d+=x.length,n.reportProgress){v=n.responseType==="text"?(v??"")+(E??=new TextDecoder).decode(x,{stream:!0}):void 0;let oe=()=>s.next({type:A.DownloadProgress,total:u?+u:void 0,loaded:d,partialText:v});h?h.run(oe):oe()}}}));let O=this.concatChunks(M,d);try{let I=o.headers.get(F)??"";m=this.parseBody(n,O,I)}catch(I){s.error(new P({error:I,headers:new w(o.headers),status:o.status,statusText:o.statusText,url:Oe(o)??n.urlWithParams}));return}}y===0&&(y=m?je:0),y>=200&&y<300?(s.next(new D({body:m,headers:l,status:y,statusText:a,url:p})),s.complete()):s.error(new P({error:m,headers:l,status:y,statusText:a,url:p}))})}parseBody(n,t,s){switch(n.responseType){case"json":let i=new TextDecoder().decode(t).replace(Ye,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:s});case"arraybuffer":return t.buffer}}createRequestInit(n){let t={},s=n.withCredentials?"include":void 0;if(n.headers.forEach((i,o)=>t[i]=o.join(",")),n.headers.has(z)||(t[z]=Le),!n.headers.has(F)){let i=n.detectContentTypeHeader();i!==null&&(t[F]=i)}return{body:n.serializeBody(),method:n.method,headers:t,credentials:s}}concatChunks(n,t){let s=new Uint8Array(t),i=0;for(let o of n)s.set(o,i),i+=o.length;return s}static \u0275fac=function(t){return new(t||r)};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),H=class{};function ee(){}function Qe(r){r.then(ee,ee)}function Be(r,e){return e(r)}function Ze(r,e){return(n,t)=>e.intercept(n,{handle:s=>r(s,t)})}function He(r,e,n){return(t,s)=>pe(n,()=>e(t,i=>r(i,s)))}var en=new g(""),te=new g(""),Se=new g(""),Ce=new g("",{providedIn:"root",factory:()=>!0});function nn(){let r=null;return(e,n)=>{r===null&&(r=(f(en,{optional:!0})??[]).reduceRight(Ze,Be));let t=f(W);if(f(Ce)){let i=t.add();return r(e,n).pipe(q(()=>t.remove(i)))}else return r(e,n)}}var Ie=(()=>{class r extends j{backend;injector;chain=null;pendingTasks=f(W);contributeToStability=f(Ce);constructor(n,t){super(),this.backend=n,this.injector=t}handle(n){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(te),...this.injector.get(Se,[])]));this.chain=t.reduceRight((s,i)=>He(s,i,this.injector),Be)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(q(()=>this.pendingTasks.remove(t)))}else return this.chain(n,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||r)(b(U),b(fe))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();var rn=/^\)\]\}',?\n/,tn=RegExp(`^${re}:`,"m");function sn(r){return"responseURL"in r&&r.responseURL?r.responseURL:tn.test(r.getAllResponseHeaders())?r.getResponseHeader(re):null}var De=(()=>{class r{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new R(-2800,!1);let t=this.xhrFactory;return(t.\u0275loadImpl?ae(t.\u0275loadImpl()):S(null)).pipe(le(()=>new G(i=>{let o=t.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((c,d)=>o.setRequestHeader(c,d.join(","))),n.headers.has(z)||o.setRequestHeader(z,Le),!n.headers.has(F)){let c=n.detectContentTypeHeader();c!==null&&o.setRequestHeader(F,c)}if(n.responseType){let c=n.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let l=n.serializeBody(),a=null,p=()=>{if(a!==null)return a;let c=o.statusText||"OK",d=new w(o.getAllResponseHeaders()),E=sn(o)||n.url;return a=new X({headers:d,status:o.status,statusText:c,url:E}),a},y=()=>{let{headers:c,status:d,statusText:E,url:v}=p(),h=null;d!==We&&(h=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=h?je:0);let O=d>=200&&d<300;if(n.responseType==="json"&&typeof h=="string"){let I=h;h=h.replace(rn,"");try{h=h!==""?JSON.parse(h):null}catch(x){h=I,O&&(O=!1,h={error:x,text:h})}}O?(i.next(new D({body:h,headers:c,status:d,statusText:E,url:v||void 0})),i.complete()):i.error(new P({error:h,headers:c,status:d,statusText:E,url:v||void 0}))},m=c=>{let{url:d}=p(),E=new P({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});i.error(E)},T=!1,u=c=>{T||(i.next(p()),T=!0);let d={type:A.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),n.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),i.next(d)},M=c=>{let d={type:A.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),i.next(d)};return o.addEventListener("load",y),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),n.reportProgress&&(o.addEventListener("progress",u),l!==null&&o.upload&&o.upload.addEventListener("progress",M)),o.send(l),i.next({type:A.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",y),o.removeEventListener("timeout",m),n.reportProgress&&(o.removeEventListener("progress",u),l!==null&&o.upload&&o.upload.removeEventListener("progress",M)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||r)(b(be))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),ze=new g(""),on="XSRF-TOKEN",an=new g("",{providedIn:"root",factory:()=>on}),cn="X-XSRF-TOKEN",dn=new g("",{providedIn:"root",factory:()=>cn}),V=class{},ln=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,t,s){this.doc=n,this.platform=t,this.cookieName=s}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Re(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(t){return new(t||r)(b(ve),b(me),b(an))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();function un(r,e){let n=r.url.toLowerCase();if(!f(ze)||r.method==="GET"||r.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return e(r);let t=f(V).getToken(),s=f(dn);return t!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,t)})),e(r)}var se=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(se||{});function Xe(r,e){return{\u0275kind:r,\u0275providers:e}}function qn(...r){let e=[Ke,De,Ie,{provide:j,useExisting:Ie},{provide:U,useFactory:()=>f(Ue,{optional:!0})??f(De)},{provide:te,useValue:un,multi:!0},{provide:ze,useValue:!0},{provide:V,useClass:ln}];for(let n of r)e.push(...n.\u0275providers);return he(e)}var _e=new g("");function Wn(){return Xe(se.LegacyInterceptors,[{provide:_e,useFactory:nn},{provide:te,useExisting:_e,multi:!0}])}function Kn(){return Xe(se.Fetch,[Y,{provide:Ue,useExisting:Y},{provide:U,useExisting:Y}])}var hn=new g(""),fn="b",pn="h",yn="s",mn="st",gn="u",Tn="rt",ne=new g(""),En=["GET","HEAD"];function wn(r,e){let T=f(ne),{isCacheActive:n}=T,t=ie(T,["isCacheActive"]),{transferCache:s,method:i}=r;if(!n||s===!1||i==="POST"&&!t.includePostRequests&&!s||i!=="POST"&&!En.includes(i)||!t.includeRequestsWithAuthHeaders&&vn(r)||t.filter?.(r)===!1)return e(r);let o=f(ge);if(f(hn,{optional:!0}))throw new R(2803,!1);let a=r.url,p=Rn(r,a),y=o.get(p,null),m=t.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(m=s.includeHeaders),y){let{[fn]:u,[Tn]:M,[pn]:c,[yn]:d,[mn]:E,[gn]:v}=y,h=u;switch(M){case"arraybuffer":h=new TextEncoder().encode(u).buffer;break;case"blob":h=new Blob([u]);break}let O=new w(c);return S(new D({body:h,headers:O,status:d,statusText:E,url:v}))}return e(r).pipe(ue(u=>{u instanceof D}))}function vn(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function xe(r){return[...r.keys()].sort().map(e=>`${e}=${r.getAll(e)}`).join("&")}function Rn(r,e){let{params:n,method:t,responseType:s}=r,i=xe(n),o=r.serializeBody();o instanceof URLSearchParams?o=xe(o):typeof o!="string"&&(o="");let l=[t,s,e,o,i].join("|"),a=bn(l);return a}function bn(r){let e=0;for(let n of r)e=Math.imul(31,e)+n.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Yn(r){return[{provide:ne,useFactory:()=>(Te("NgHttpTransferCache"),J({isCacheActive:!0},r))},{provide:Se,useValue:wn,multi:!0},{provide:Ee,multi:!0,useFactory:()=>{let e=f(we),n=f(ne);return()=>{e.whenStable().then(()=>{n.isCacheActive=!1})}}}]}export{N as a,Ke as b,qn as c,Wn as d,Kn as e,Yn as f};
