import{a as Q}from"./chunk-YVSC47RM.js";import{Mb as O,V as S,W as y,Y as Z,Za as s,_ as m,db as Y,dc as V,f as ue,ga as N,j as de,ka as fe,lb as K,mb as u,o as ce,ob as c,qa as _,sb as pe,tc as D,u as he,uc as h,va as X,ya as C,zb as J}from"./chunk-MZKGMKCD.js";import{a as l,b as d}from"./chunk-ESJYUATY.js";var Ve=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(s(Y),s(X))};static \u0275dir=u({type:n})}return n})(),Ue=(()=>{class n extends Ve{static \u0275fac=(()=>{let t;return function(r){return(t||(t=fe(n)))(r||n)}})();static \u0275dir=u({type:n,features:[c]})}return n})(),ie=new m("");var He={provide:ie,useExisting:y(()=>De),multi:!0};function Le(){let n=Q()?Q().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var $e=new m(""),De=(()=>{class n extends Ve{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Le())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(s(Y),s(X),s($e,8))};static \u0275dir=u({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&O("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[V([He]),c]})}return n})();function f(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function be(n){return n!=null&&typeof n.length=="number"}var $=new m(""),W=new m(""),We=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ge=class{static min(e){return qe(e)}static max(e){return ze(e)}static required(e){return Ze(e)}static requiredTrue(e){return Xe(e)}static email(e){return Ye(e)}static minLength(e){return Ke(e)}static maxLength(e){return Je(e)}static pattern(e){return Qe(e)}static nullValidator(e){return Me(e)}static compose(e){return Se(e)}static composeAsync(e){return Ne(e)}};function qe(n){return e=>{if(f(e.value)||f(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ze(n){return e=>{if(f(e.value)||f(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Ze(n){return f(n.value)?{required:!0}:null}function Xe(n){return n.value===!0?null:{required:!0}}function Ye(n){return f(n.value)||We.test(n.value)?null:{email:!0}}function Ke(n){return e=>f(e.value)||!be(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function Je(n){return e=>be(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function Qe(n){if(!n)return Me;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(f(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Me(n){return null}function Ae(n){return n!=null}function Ee(n){return pe(n)?de(n):n}function Fe(n){let e={};return n.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function we(n,e){return e.map(t=>t(n))}function et(n){return!n.validate}function Ie(n){return n.map(e=>et(e)?e:t=>e.validate(t))}function Se(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){return Fe(we(t,e))}}function re(n){return n!=null?Se(Ie(n)):null}function Ne(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){let i=we(t,e).map(Ee);return he(i).pipe(ce(Fe))}}function oe(n){return n!=null?Ne(Ie(n)):null}function me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Oe(n){return n._rawValidators}function xe(n){return n._rawAsyncValidators}function ee(n){return n?Array.isArray(n)?n:[n]:[]}function P(n,e){return Array.isArray(n)?n.includes(e):n===e}function _e(n,e){let t=ee(e);return ee(n).forEach(r=>{P(t,r)||t.push(r)}),t}function ve(n,e){return ee(e).filter(t=>!P(n,t))}var k=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},p=class extends k{name;get formDirective(){return null}get path(){return null}},v=class extends k{_parent=null;name=null;valueAccessor=null},G=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Zt=d(l({},tt),{"[class.ng-submitted]":"isSubmitted"}),Xt=(()=>{class n extends G{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(v,2))};static \u0275dir=u({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[c]})}return n})(),Yt=(()=>{class n extends G{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(p,10))};static \u0275dir=u({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[c]})}return n})();var A="VALID",x="INVALID",b="PENDING",E="DISABLED",g=class{},R=class extends g{value;source;constructor(e,t){super(),this.value=e,this.source=t}},w=class extends g{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},I=class extends g{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},M=class extends g{status;source;constructor(e,t){super(),this.status=e,this.source=t}},te=class extends g{source;constructor(e){super(),this.source=e}},ne=class extends g{source;constructor(e){super(),this.source=e}};function Pe(n){return(q(n)?n.validators:n)||null}function nt(n){return Array.isArray(n)?re(n):n||null}function ke(n,e){return(q(e)?e.asyncValidators:n)||null}function it(n){return Array.isArray(n)?oe(n):n||null}function q(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function rt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new S(1e3,"");if(!i[t])throw new S(1001,"")}function ot(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new S(1002,"")})}var T=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}_status=D(()=>this.statusReactive());statusReactive=C(void 0);get valid(){return this.status===A}get invalid(){return this.status===x}get pending(){return this.status==b}get disabled(){return this.status===E}get enabled(){return this.status!==E}errors;get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}_pristine=D(()=>this.pristineReactive());pristineReactive=C(!0);get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}_touched=D(()=>this.touchedReactive());touchedReactive=C(!1);get untouched(){return!this.touched}_events=new ue;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(_e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new I(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new I(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new w(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new w(!0,i))}markAsPending(e={}){this.status=b;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,i)),this._events.next(new M(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(i=>{i.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===b)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,t)),this._events.next(new M(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ee(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new M(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(x)?x:A}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new w(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}},j=class extends T{constructor(e,t,i){super(Pe(t),ke(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){ot(this,!0,e),Object.keys(e).forEach(i=>{rt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var z=new m("",{providedIn:"root",factory:()=>se}),se="always";function st(n,e){return[...e.path,n]}function B(n,e,t=se){ae(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),lt(n,e),dt(n,e),ut(n,e),at(n,e)}function U(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),L(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function H(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function at(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ae(n,e){let t=Oe(n);e.validator!==null?n.setValidators(me(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=xe(n);e.asyncValidator!==null?n.setAsyncValidators(me(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();H(e._rawValidators,r),H(e._rawAsyncValidators,r)}function L(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Oe(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=xe(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return H(e._rawValidators,i),H(e._rawAsyncValidators,i),t}function lt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ge(n,e)})}function ut(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ge(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ge(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function dt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Re(n,e){n==null,ae(n,e)}function ct(n,e){return L(n,e)}function Te(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ht(n){return Object.getPrototypeOf(n.constructor)===Ue}function je(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Be(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===De?t=o:ht(o)?i=o:r=o}),r||i||t||null}function ft(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var pt={provide:p,useExisting:y(()=>gt)},F=Promise.resolve(),gt=(()=>{class n extends p{callSetDisabledState;get submitted(){return h(this.submittedReactive)}_submitted=D(()=>this.submittedReactive());submittedReactive=C(!1);_directives=new Set;form;ngSubmit=new _;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new j({},re(t),oe(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){F.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),B(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){F.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){F.then(()=>{let i=this._findContainer(t.path),r=new j({});Re(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){F.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){F.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),je(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(s($,10),s(W,10),s(z,8))};static \u0275dir=u({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&O("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([pt]),c]})}return n})();function ye(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ce(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var mt=class extends T{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Pe(t),ke(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ce(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ce(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var _t=n=>n instanceof mt;var Jt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=u({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var le=new m(""),vt={provide:v,useExisting:y(()=>yt)},yt=(()=>{class n extends v{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new _;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Be(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&U(i,this,!1),B(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Te(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&U(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(s($,10),s(W,10),s(ie,10),s(le,8),s(z,8))};static \u0275dir=u({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[V([vt]),c,N]})}return n})(),Ct={provide:p,useExisting:y(()=>Vt)},Vt=(()=>{class n extends p{callSetDisabledState;get submitted(){return h(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=D(()=>this._submittedReactive());_submittedReactive=C(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new _;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(L(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return B(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){U(t.control||null,t,!1),ft(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),je(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new te(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ne(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(U(i||null,t),_t(r)&&(B(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Re(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&ct(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&L(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(s($,10),s(W,10),s(z,8))};static \u0275dir=u({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&O("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([Ct]),c,N]})}return n})();var Dt={provide:v,useExisting:y(()=>bt)},bt=(()=>{class n extends v{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new _;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Be(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Te(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return st(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(s(p,13),s($,10),s(W,10),s(ie,10),s(le,8))};static \u0275dir=u({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[V([Dt]),c,N]})}return n})();var Mt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=K({type:n});static \u0275inj=Z({})}return n})();var Qt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:le,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:z,useValue:t.callSetDisabledState??se}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Mt]})}return n})();export{ie as a,De as b,ge as c,v as d,Xt as e,Yt as f,j as g,gt as h,mt as i,Jt as j,yt as k,Vt as l,bt as m,Qt as n};
