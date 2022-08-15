"use strict";(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[6],{4006:(mn,ce,_)=>{_.d(ce,{F:()=>x,Fj:()=>M,JJ:()=>Nt,JL:()=>St,JU:()=>d,NI:()=>z,UX:()=>fn,_Y:()=>zt,a5:()=>c,cw:()=>w,kI:()=>Ve,oH:()=>K,sg:()=>P,u:()=>X});var o=_(4650),ot=_(6895),he=_(2076),fe=_(4128),pe=_(4004);let it=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),p=(()=>{class n extends it{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),ge={provide:d,useExisting:(0,o.Gpc)(()=>M),multi:!0},ye=new o.OlP("CompositionEventMode");let M=(()=>{class n extends it{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function _e(){const n=(0,ot.q)()?(0,ot.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(ye,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([ge]),o.qOj]}),n})();function h(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function at(n){return null!=n&&"number"==typeof n.length}const a=new o.OlP("NgValidators"),f=new o.OlP("NgAsyncValidators"),Ce=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ve{static min(e){return function lt(n){return e=>{if(h(e.value)||h(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function ut(n){return e=>{if(h(e.value)||h(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return function dt(n){return h(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function ct(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function ht(n){return h(n.value)||Ce.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function ft(n){return e=>h(e.value)||!at(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function pt(n){return e=>at(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function mt(n){if(!n)return D;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(h(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return Vt(e)}static composeAsync(e){return At(e)}}function D(n){return null}function gt(n){return null!=n}function _t(n){return(0,o.QGY)(n)?(0,he.D)(n):n}function yt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function vt(n,e){return e.map(t=>t(n))}function Ct(n){return n.map(e=>function Ae(n){return!n.validate}(e)?e:t=>e.validate(t))}function Vt(n){if(!n)return null;const e=n.filter(gt);return 0==e.length?null:function(t){return yt(vt(t,e))}}function k(n){return null!=n?Vt(Ct(n)):null}function At(n){if(!n)return null;const e=n.filter(gt);return 0==e.length?null:function(t){const r=vt(t,e).map(_t);return(0,fe.D)(r).pipe((0,pe.U)(yt))}}function T(n){return null!=n?At(Ct(n)):null}function Mt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Dt(n){return n._rawValidators}function bt(n){return n._rawAsyncValidators}function H(n){return n?Array.isArray(n)?n:[n]:[]}function b(n,e){return Array.isArray(n)?n.includes(e):n===e}function Et(n,e){const t=H(e);return H(n).forEach(i=>{b(t,i)||t.push(i)}),t}function Ft(n,e){return H(e).filter(t=>!b(n,t))}class Ot{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=k(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=T(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class u extends Ot{get formDirective(){return null}get path(){return null}}class c extends Ot{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class wt{constructor(e){this._cd=e}get isTouched(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.touched)}get isUntouched(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.untouched)}get isPristine(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.pristine)}get isDirty(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.dirty)}get isValid(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.valid)}get isInvalid(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.invalid)}get isPending(){var e,t;return!(null===(e=this._cd)||void 0===e||null===(t=e.control)||void 0===t||!t.pending)}get isSubmitted(){var e;return!(null===(e=this._cd)||void 0===e||!e.submitted)}}let Nt=(()=>{class n extends wt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),St=(()=>{class n extends wt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const v="VALID",F="INVALID",y="PENDING",C="DISABLED";function L(n){return(O(n)?n.validators:n)||null}function Bt(n){return Array.isArray(n)?k(n):n||null}function $(n,e){return(O(e)?e.asyncValidators:n)||null}function xt(n){return Array.isArray(n)?T(n):n||null}function O(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class kt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Bt(this._rawValidators),this._composedAsyncValidatorFn=xt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===v}get invalid(){return this.status===F}get pending(){return this.status==y}get disabled(){return this.status===C}get enabled(){return this.status!==C}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Bt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=xt(e)}addValidators(e){this.setValidators(Et(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Et(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ft(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ft(e,this._rawAsyncValidators))}hasValidator(e){return b(this._rawValidators,e)}hasAsyncValidator(e){return b(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=y,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=C,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=v,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===v||this.status===y)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?C:v}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const t=_t(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?C:this.errors?F:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(F)?F:v}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){O(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}}class w extends kt{constructor(e,t,r){super(L(t),$(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){(function It(n,e,t){n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})})(this,0,e),Object.keys(e).forEach(r=>{(function Pt(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}function V(n,e){var t,r;q(n,e),e.valueAccessor.writeValue(n.value),n.disabled&&(null===(t=(r=e.valueAccessor).setDisabledState)||void 0===t||t.call(r,!0)),function Se(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Tt(n,e)})}(n,e),function Be(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Ge(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Tt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ne(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function S(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),B(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function G(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function q(n,e){const t=Dt(n);null!==e.validator?n.setValidators(Mt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=bt(n);null!==e.asyncValidator?n.setAsyncValidators(Mt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();G(e._rawValidators,i),G(e._rawAsyncValidators,i)}function B(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=Dt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=bt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return G(e._rawValidators,r),G(e._rawAsyncValidators,r),t}function Tt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ht(n,e){q(n,e)}function Y(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}function Ut(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function W(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===M?t=s:function Ie(n){return Object.getPrototypeOf(n.constructor)===p}(s)?r=s:i=s}),i||r||t||null}const Te={provide:u,useExisting:(0,o.Gpc)(()=>x)},A=(()=>Promise.resolve(null))();let x=(()=>{class n extends u{constructor(t,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new w({},k(t),T(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){A.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),V(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){A.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){A.then(()=>{const r=this._findContainer(t.path),i=new w({});Ht(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){A.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){A.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Ut(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a,10),o.Y36(f,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Te]),o.qOj]}),n})();function jt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function Lt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const z=class extends kt{constructor(e=null,t,r){super(L(t),$(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),O(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Lt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){jt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){jt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Lt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let zt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Kt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const J=new o.OlP("NgModelWithFormControlWarning"),Ye={provide:c,useExisting:(0,o.Gpc)(()=>K)};let K=(()=>{class n extends c{constructor(t,r,i,s){super(),this._ngModelWarningConfig=s,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=W(0,i)}set isDisabled(t){}ngOnChanges(t){if(this._isControlChanged(t)){const r=t.form.previousValue;r&&S(r,this,!1),V(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}Y(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&S(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(a,10),o.Y36(f,10),o.Y36(d,10),o.Y36(J,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([Ye]),o.qOj,o.TTD]}),n})();const We={provide:u,useExisting:(0,o.Gpc)(()=>P)};let P=(()=>{class n extends u{constructor(t,r){super(),this.validators=t,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(B(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return V(r,t),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){S(t.control||null,t,!1),function ke(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Ut(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(S(r||null,t),(n=>n instanceof z)(i)&&(V(i,t),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);Ht(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function xe(n,e){return B(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){q(this.form,this),this._oldForm&&B(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a,10),o.Y36(f,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([We]),o.qOj,o.TTD]}),n})();const Ke={provide:c,useExisting:(0,o.Gpc)(()=>X)};let X=(()=>{class n extends c{constructor(t,r,i,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=W(0,s)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),Y(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function N(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(u,13),o.Y36(a,10),o.Y36(f,10),o.Y36(d,10),o.Y36(J,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([Ke]),o.qOj,o.TTD]}),n})(),hn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Kt]}),n})(),fn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:J,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[hn]}),n})()}}]);