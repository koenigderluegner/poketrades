"use strict";(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[274],{710:(Mt,$,m)=>{m.d($,{UR:()=>S,KW:()=>D,XI:()=>_,OH:()=>f,lG:()=>M,eB:()=>z,OJ:()=>b});var i=m(9808),c=m(5e3);class N{constructor(){this.$implicit=null,this.errored=!1,this.completed=!1,this.error=null,this.count=0}}let z=(()=>{class s{constructor(a,u){if(this.viewContainer=a,this.context=new N,this.thenTemplateRef=null,this.thenViewRef=null,this.beforeAnyTemplate=null,this.beforeAnyViewRef=null,this.onErrorTemplateRef=null,this.onErrorViewRef=null,this.onCompletedTemplateRef=null,this.onCompletedViewRef=null,this.source$=null,this.subscription=null,!u)throw new Error("[ngxSubscribe] can only be used as a structural directive or on an ng-template.");this.thenTemplateRef=u,this.beforeAnyTemplate=u,this.onErrorTemplateRef=u,this.onCompletedTemplateRef=u}static ngTemplateContextGuard(a,u){return!0}set ngxSubscribe(a){"string"!=typeof a&&(this.ngxSubscribeOf=a)}set ngxSubscribeOf(a){this.source$!==a&&(this.subscription&&(this.subscription.unsubscribe(),this.subscription=null,this.context=new N,this.clearViewRefs()),a&&(this.subscription=a.subscribe({next:u=>{this.context.$implicit=u,this.context.count++,this.updateView()},error:u=>{this.context.errored=!0,this.context.error=u,this.updateView()},complete:()=>{this.context.completed=!0,this.updateView()}})),this.updateView())}set ngxSubscribeThen(a){this.thenTemplateRef=a,this.thenViewRef=null,this.updateView()}set ngxSubscribeBeforeAny(a){this.beforeAnyTemplate=a,this.beforeAnyViewRef=null,this.updateView()}set ngxSubscribeOnError(a){this.onErrorTemplateRef=a,this.onErrorViewRef=null,this.updateView()}set ngxSubscribeOnCompleted(a){this.onCompletedTemplateRef=a,this.onCompletedViewRef=null,this.updateView()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}updateView(){this.context.completed?this.onCompletedViewRef||(this.clearViewRefs(),this.onCompletedTemplateRef&&(this.onCompletedViewRef=this.viewContainer.createEmbeddedView(this.onCompletedTemplateRef,this.context))):this.context.errored?this.onErrorViewRef||(this.clearViewRefs(),this.onErrorTemplateRef&&(this.onErrorViewRef=this.viewContainer.createEmbeddedView(this.onErrorTemplateRef,this.context))):0===this.context.count?this.thenViewRef||(this.clearViewRefs(),this.beforeAnyTemplate&&(this.beforeAnyViewRef=this.viewContainer.createEmbeddedView(this.beforeAnyTemplate,this.context))):this.thenViewRef||(this.clearViewRefs(),this.thenTemplateRef&&(this.thenViewRef=this.viewContainer.createEmbeddedView(this.thenTemplateRef,this.context)))}clearViewRefs(){this.viewContainer.clear(),this.thenViewRef=null,this.onErrorViewRef=null,this.onCompletedViewRef=null}}return s.\u0275fac=function(a){return new(a||s)(c.Y36(c.s_b),c.Y36(c.Rgc,8))},s.\u0275dir=c.lG2({type:s,selectors:[["","ngxSubscribe",""]],inputs:{ngxSubscribe:"ngxSubscribe",ngxSubscribeOf:"ngxSubscribeOf",ngxSubscribeThen:"ngxSubscribeThen",ngxSubscribeBeforeAny:"ngxSubscribeBeforeAny",ngxSubscribeOnError:"ngxSubscribeOnError",ngxSubscribeOnCompleted:"ngxSubscribeOnCompleted"}}),s})(),b=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[i.ez]]}),s})();class F{constructor(){this.$implicit=0,this.count=0}get even(){return this.$implicit%2==0}get odd(){return this.$implicit%2!=0}get first(){return 0===this.$implicit}get last(){return this.$implicit+1===this.count}}let _=(()=>{class s{constructor(a,u){if(this.viewContainer=a,this.templateRef=u,!this.templateRef)throw new Error("[ngxRepeat] can only be used as a structural directive or on an ng-template.")}static ngTemplateContextGuard(a,u){return!0}set ngxRepeat(a){this.updateView(Number(a))}updateView(a){const u=this.viewContainer.length;if(u!==a){for(let g=0;g<u;g++)this.viewContainer.get(g).context.count=a;if(u>a)for(let g=a;g<u;g++)this.viewContainer.remove(g);else for(let g=u;g<a;g++){const C=new F;C.$implicit=g,C.count=a,this.viewContainer.createEmbeddedView(this.templateRef,C)}}}}return s.\u0275fac=function(a){return new(a||s)(c.Y36(c.s_b),c.Y36(c.Rgc,8))},s.\u0275dir=c.lG2({type:s,selectors:[["","ngxRepeat",""]],inputs:{ngxRepeat:"ngxRepeat"}}),s})(),f=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[i.ez]]}),s})();class J{constructor(){this.ngxAlias=null}get $implicit(){return this.ngxAlias}}let S=(()=>{class s{constructor(a,u){if(this.viewContainer=a,this.templateRef=u,this.context=new J,!this.templateRef)throw new Error("[ngxAlias] can only be used as a structural directive or on an ng-template.")}static ngTemplateContextGuard(a,u){return!0}ngOnInit(){this.viewContainer.createEmbeddedView(this.templateRef,this.context)}set ngxAlias(a){this.context.ngxAlias=a}}return s.\u0275fac=function(a){return new(a||s)(c.Y36(c.s_b),c.Y36(c.Rgc,8))},s.\u0275dir=c.lG2({type:s,selectors:[["","ngxAlias",""]],inputs:{ngxAlias:"ngxAlias"}}),s})(),D=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[i.ez]]}),s})(),G=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[i.ez]]}),s})(),M=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[b,f,D,G],b,f,D,G]}),s})()},3075:(Mt,$,m)=>{m.d($,{Fj:()=>M,NI:()=>ce,oH:()=>he,u:()=>ge,cw:()=>L,sg:()=>q,JU:()=>f,a5:()=>y,JJ:()=>Le,JL:()=>Ye,F:()=>Y,UX:()=>gn,kI:()=>C,_Y:()=>ot});var i=m(5e3),c=m(9808),N=m(2076),z=m(4128),b=m(4004);let F=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n}),n})(),_=(()=>{class n extends F{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})();const f=new i.OlP("NgValueAccessor"),D={provide:f,useExisting:(0,i.Gpc)(()=>M),multi:!0},G=new i.OlP("CompositionEventMode");let M=(()=>{class n extends F{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ce(){const n=(0,c.q)()?(0,c.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(G,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},features:[i._Bn([D]),i.qOj]}),n})();function s(n){return null==n||0===n.length}function d(n){return null!=n&&"number"==typeof n.length}const a=new i.OlP("NgValidators"),u=new i.OlP("NgAsyncValidators"),g=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class C{static min(t){return function Ve(n){return t=>{if(s(t.value)||s(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function Me(n){return t=>{if(s(t.value)||s(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function Ae(n){return s(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function be(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function De(n){return s(n.value)||g.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ee(n){return t=>s(t.value)||!d(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function we(n){return t=>d(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function xe(n){if(!n)return R;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(s(r.value))return null;const o=r.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}(t)}static nullValidator(t){return null}static compose(t){return Re(t)}static composeAsync(t){return Te(t)}}function R(n){return null}function Oe(n){return null!=n}function Ne(n){const t=(0,i.QGY)(n)?(0,N.D)(n):n;return(0,i.CqO)(t),t}function Fe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Se(n,t){return t.map(e=>e(n))}function Ge(n){return n.map(t=>function At(n){return!n.validate}(t)?t:e=>t.validate(e))}function Re(n){if(!n)return null;const t=n.filter(Oe);return 0==t.length?null:function(e){return Fe(Se(e,t))}}function K(n){return null!=n?Re(Ge(n)):null}function Te(n){if(!n)return null;const t=n.filter(Oe);return 0==t.length?null:function(e){const r=Se(e,t).map(Ne);return(0,z.D)(r).pipe((0,b.U)(Fe))}}function Q(n){return null!=n?Te(Ge(n)):null}function Be(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Pe(n){return n._rawValidators}function ke(n){return n._rawAsyncValidators}function Z(n){return n?Array.isArray(n)?n:[n]:[]}function T(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ie(n,t){const e=Z(t);return Z(n).forEach(o=>{T(e,o)||e.push(o)}),e}function Ue(n,t){return Z(t).filter(e=>!T(n,e))}class je{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=K(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class y extends je{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class p extends je{get formDirective(){return null}get path(){return null}}class He{constructor(t){this._cd=t}is(t){var e,r,o;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(o=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===o?void 0:o[t])}}let Le=(()=>{class n extends He{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(y,2))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),n})(),Ye=(()=>{class n extends He{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(p,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[i.qOj]}),n})();function E(n,t){te(n,t),t.valueAccessor.writeValue(n.value),function Ft(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&We(n,t)})}(n,t),function Gt(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function St(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&We(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Nt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function k(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),U(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function te(n,t){const e=Pe(n);null!==t.validator?n.setValidators(Be(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=ke(n);null!==t.asyncValidator?n.setAsyncValidators(Be(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();I(t._rawValidators,o),I(t._rawAsyncValidators,o)}function U(n,t){let e=!1;if(null!==n){if(null!==t.validator){const o=Pe(n);if(Array.isArray(o)&&o.length>0){const l=o.filter(h=>h!==t.validator);l.length!==o.length&&(e=!0,n.setValidators(l))}}if(null!==t.asyncValidator){const o=ke(n);if(Array.isArray(o)&&o.length>0){const l=o.filter(h=>h!==t.asyncValidator);l.length!==o.length&&(e=!0,n.setAsyncValidators(l))}}}const r=()=>{};return I(t._rawValidators,r),I(t._rawAsyncValidators,r),e}function We(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $e(n,t){te(n,t)}function ne(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function ze(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function re(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(l=>{l.constructor===M?e=l:function Bt(n){return Object.getPrototypeOf(n.constructor)===_}(l)?r=l:o=l}),o||r||e||null}function ie(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const w="VALID",j="INVALID",A="PENDING",x="DISABLED";function se(n){return(H(n)?n.validators:n)||null}function Je(n){return Array.isArray(n)?K(n):n||null}function ae(n,t){return(H(t)?t.asyncValidators:n)||null}function Ke(n){return Array.isArray(n)?Q(n):n||null}function H(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const Qe=n=>n instanceof ce,le=n=>n instanceof L;function Ze(n){return Qe(n)?n.value:n.getRawValue()}function Xe(n,t){const e=le(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")}function et(n,t){le(n),n._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})}class ue{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Je(this._rawValidators),this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===j}get pending(){return this.status==A}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Je(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Ke(t)}addValidators(t){this.setValidators(Ie(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ie(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ue(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ue(t,this._rawAsyncValidators))}hasValidator(t){return T(this._rawValidators,t)}hasAsyncValidator(t){return T(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=w,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===A)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const e=Ne(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Pt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(o=>{r=le(r)?r.controls.hasOwnProperty(o)?r.controls[o]:null:(n=>n instanceof It)(r)&&r.at(o)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(j)?j:w}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){H(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ce extends ue{constructor(t=null,e,r){super(se(e),ae(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ie(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ie(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class L extends ue{constructor(t,e,r){super(se(e),ae(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){et(this,t),Object.keys(t).forEach(r=>{Xe(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Ze(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,l)=>{r=e(r,o,l)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class It extends ue{constructor(t,e,r){super(se(e),ae(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){et(this,t),t.forEach((r,o)=>{Xe(this,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Ze(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Ut={provide:p,useExisting:(0,i.Gpc)(()=>Y)},O=(()=>Promise.resolve(null))();let Y=(()=>{class n extends p{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.vpe,this.form=new L({},K(e),Q(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){O.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),E(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){O.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){O.then(()=>{const r=this._findContainer(e.path),o=new L({});$e(o,e),r.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){O.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){O.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,ze(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(a,10),i.Y36(u,10))},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Ut]),i.qOj]}),n})(),ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})();const de=new i.OlP("NgModelWithFormControlWarning"),$t={provide:y,useExisting:(0,i.Gpc)(()=>he)};let he=(()=>{class n extends y{constructor(e,r,o,l){super(),this._ngModelWarningConfig=l,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=re(0,o)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&k(r,this,!1),E(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}ne(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&k(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(i.Y36(a,10),i.Y36(u,10),i.Y36(f,10),i.Y36(de,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([$t]),i.qOj,i.TTD]}),n})();const zt={provide:p,useExisting:(0,i.Gpc)(()=>q)};let q=(()=>{class n extends p{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return E(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){k(e.control||null,e,!1),ie(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,ze(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,o=this.form.get(e.path);r!==o&&(k(r||null,e),Qe(o)&&(E(o,e),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);$e(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Rt(n,t){return U(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){te(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(a,10),i.Y36(u,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([zt]),i.qOj,i.TTD]}),n})();const Qt={provide:y,useExisting:(0,i.Gpc)(()=>ge)};let ge=(()=>{class n extends y{constructor(e,r,o,l,h){super(),this._ngModelWarningConfig=h,this._added=!1,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=re(0,l)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),ne(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function P(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(i.Y36(p,13),i.Y36(a,10),i.Y36(u,10),i.Y36(f,10),i.Y36(de,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([Qt]),i.qOj,i.TTD]}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[at]]}),n})(),gn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:de,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[pn]}),n})()}}]);