import{a as Ee}from"./chunk-C4Q2INUD.js";import"./chunk-2SFUPU6T.js";import{b as De}from"./chunk-TVXUUQGS.js";import"./chunk-H3UP6UFY.js";import{a as ze}from"./chunk-URJW4HRA.js";import{b as Ce}from"./chunk-OBBANEQV.js";import{a as Te}from"./chunk-XUDAHI4Z.js";import{a as Se,c as Re,f as Le,k as Ae,p as Fe}from"./chunk-DMLUC3M3.js";import{G as Pe,l as Me,s as we,w as Oe,x as Ie}from"./chunk-V5RQJMO3.js";import"./chunk-ZMYL3ITN.js";import"./chunk-5GAHDUDC.js";import{f as A}from"./chunk-TWKCXHJT.js";import"./chunk-ACU4ZWXW.js";import{$a as l,Aa as y,Bb as f,Bc as v,Cb as re,Fb as T,Ga as ae,Gb as S,Hb as C,Ib as M,Jb as r,Kb as d,Lb as b,Mb as R,Nb as de,Ob as L,Pb as p,Qb as se,Rb as me,Tb as q,Ub as N,V as z,Vb as H,W as Q,X as W,Zb as le,_ as G,_b as w,ac as he,ba as h,cc as be,dc as ke,ec as ue,fc as _e,ga as Y,gc as pe,ha as J,hc as xe,ia as u,ic as ge,ja as _,jc as fe,ka as ee,la as te,nb as D,pa as ce,qa as V,sb as E,ta as j,tc as ve,ua as ne,xa as ie,ya as oe,yb as U,yc as x,zb as k,zc as ye}from"./chunk-CMTCFLWU.js";import{a as I,b as P}from"./chunk-ESJYUATY.js";var je=(()=>{let i=class i{getHomeDex(){return A("assets/database/living-dex-home.json")}getSVDex(){return A("assets/database/living-dex-sv-with-dlcs.json")}getSWSHDex(){return A("assets/database/living-dex-swsh-with-dlcs.json")}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"});let c=i;return c})();function B(c,i){let e=!i?.manualCleanup;e&&!i?.injector&&Y(B);let n=e?i?.injector?.get(V)??h(V):null,t=Be(i?.equal),o;i?.requireSync?o=y({kind:0},{equal:t}):o=y({kind:1,value:i?.initialValue},{equal:t});let a=c.subscribe({next:s=>o.set({kind:1,value:s}),error:s=>{if(i?.rejectErrors)throw s;o.set({kind:2,error:s})}});if(i?.requireSync&&o().kind===0)throw new z(601,!1);return n?.onDestroy(a.unsubscribe.bind(a)),v(()=>{let s=o();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new z(601,!1)}},{equal:i?.equal})}function Be(c=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&c(i.value,e.value)}var Xe=["input"],$e=["label"],Ke=["*"],Ze=new G("mat-checkbox-default-options",{providedIn:"root",factory:qe});function qe(){return{color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1}}var m=function(c){return c[c.Init=0]="Init",c[c.Checked=1]="Checked",c[c.Unchecked=2]="Unchecked",c[c.Indeterminate=3]="Indeterminate",c}(m||{}),Qe={provide:Se,useExisting:Q(()=>$),multi:!0},X=class{source;checked},Ue=qe(),$=(()=>{class c{_elementRef=h(oe);_changeDetectorRef=h(ve);_ngZone=h(ne);_animationMode=h(ae,{optional:!0});_options=h(Ze,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new X;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required;labelPosition="after";name=null;change=new j;indeterminateChange=new j;value;disableRipple;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=m.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){h(Me).load(Oe);let e=h(new ce("tabindex"),{optional:!0});this._options=this._options||Ue,this.color=this._options.color||Ue.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=h(we).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate}set indeterminate(e){let n=e!=this._indeterminate;this._indeterminate=e,n&&(this._indeterminate?this._transitionCheckState(m.Indeterminate):this._transitionCheckState(this.checked?m.Checked:m.Unchecked),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_indeterminate=!1;_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,t=this._getAnimationTargetElement();if(!(n===e||!t)&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?m.Checked:m.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationMode==="NoopAnimations")return"";switch(e){case m.Init:if(n===m.Checked)return this._animationClasses.uncheckedToChecked;if(n==m.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case m.Unchecked:return n===m.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case m.Checked:return n===m.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case m.Indeterminate:return n===m.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||c)};static \u0275cmp=D({type:c,selectors:[["mat-checkbox"]],viewQuery:function(n,t){if(n&1&&(q(Xe,5),q($e,5)),n&2){let o;N(o=H())&&(t._inputElement=o.first),N(o=H())&&(t._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,t){n&2&&(de("id",t.id),U("tabindex",null)("aria-label",null)("aria-labelledby",null),re(t.color?"mat-"+t.color:"mat-accent"),f("_mat-animation-noopable",t._animationMode==="NoopAnimations")("mdc-checkbox--disabled",t.disabled)("mat-mdc-checkbox-disabled",t.disabled)("mat-mdc-checkbox-checked",t.checked)("mat-mdc-checkbox-disabled-interactive",t.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",x],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",x],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ye(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],indeterminate:[2,"indeterminate","indeterminate",x]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[fe([Qe,{provide:Re,useExisting:c,multi:!0}]),J],ngContentSelectors:Ke,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,t){if(n&1){let o=R();se(),r(0,"div",3),L("click",function(s){return u(o),_(t._preventBubblingFromLabel(s))}),r(1,"div",4,0)(3,"div",5),L("click",function(){return u(o),_(t._onTouchTargetClick())}),d(),r(4,"input",6,1),L("blur",function(){return u(o),_(t._onBlur())})("click",function(){return u(o),_(t._onInputClick())})("change",function(s){return u(o),_(t._onInteractionEvent(s))}),d(),b(6,"div",7),r(7,"div",8),ee(),r(8,"svg",9),b(9,"path",10),d(),te(),b(10,"div",11),d(),b(11,"div",12),d(),r(12,"label",13,2),me(14),d()()}if(n&2){let o=le(2);k("labelPosition",t.labelPosition),l(4),f("mdc-checkbox--selected",t.checked),k("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled&&!t.disabledInteractive)("id",t.inputId)("required",t.required)("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex),U("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-checked",t.indeterminate?"mixed":null)("aria-controls",t.ariaControls)("aria-disabled",t.disabled&&t.disabledInteractive?!0:null)("aria-expanded",t.ariaExpanded)("aria-owns",t.ariaOwns)("name",t.name)("value",t.value),l(7),k("matRippleTrigger",o)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),l(),k("for",t.inputId)}},dependencies:[Ie,Pe],styles:['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}return c})();var We=(c,i)=>i.name;function Ge(c,i){if(c&1&&(r(0,"div",11)(1,"div",12),b(2,"app-pokemon",13),d()()),c&2){let e=i.$implicit;k("matTooltip",e.slug+(e.shinyLocked?" - shiny locked":"")),l(2),f("shiny-locked",e.shinyLocked),k("slug",e.slug)}}function Ye(c,i){if(c&1&&(r(0,"div",10),C(1,Ge,3,4,"div",11,S),d()),c&2){let e=p(3);l(),M(e.filteredDex())}}function Je(c,i){if(c&1&&(r(0,"div",11)(1,"div",12),b(2,"app-pokemon",13),d()()),c&2){let e=i.$implicit;f("inactive",!e.shiny),k("matTooltip",e.slug+(e.shinyLocked?" - shiny locked":"")),l(2),f("shiny-locked",e.shinyLocked),k("slug",e.slug)}}function et(c,i){if(c&1&&(r(0,"div",15)(1,"div",16),w(2),d(),r(3,"div",17),C(4,Je,3,6,"div",18,S),d()()),c&2){let e=i.$implicit,n=i.$index,t=i.$count,o=p().$implicit,a=p(4);l(2),be(" ",o.name," ",(n*a.CHUNK_SIZE+1).toString().padStart(4,"0")," - ",(n===t-1?n*a.CHUNK_SIZE+e.length:(n+1)*a.CHUNK_SIZE).toString().padStart(4,"0")," "),l(2),M(e)}}function tt(c,i){if(c&1&&(r(0,"div",14),C(1,et,6,3,"div",15,S),d()),c&2){let e=i.$implicit;l(),M(e.pokemon)}}function ct(c,i){if(c&1&&C(0,tt,3,0,"div",14,We),c&2){let e=p(3);M(e.chunkedDex())}}function nt(c,i){if(c&1&&E(0,Ye,3,0,"div",10)(1,ct,2,0),c&2){let e=p(2);T(e.showOnlyUnowned()?0:1)}}function it(c,i){if(c&1&&E(0,nt,2,1),c&2){p();let e=ge(15);T(e.hasValue()?0:-1)}}function ot(c,i){if(c&1&&(r(0,"p"),w(1),d()),c&2){let e=p();l(),he("Can't find Dex with Id ",e.dexId(),"")}}var Yt=(()=>{let i=class i{constructor(){this.dexId=ie(),this.livingDex=h(je),this.dexes=new Map([["home",this.livingDex.getHomeDex()],["sv",this.livingDex.getSVDex()],["swsh",this.livingDex.getSWSHDex()]]),this.currentSpreadsheet=B(h(Ce).getCurrentSpreadsheet$()),this.CHUNK_SIZE=30,this.currentDex=v(()=>{let n=this.dexId();if(n)return this.dexes.get(n)}),this.showOnlyUnowned=y(!1),this.filteredDex=v(()=>{let n=this.currentDex();if(!this.showOnlyUnowned())return[];if(!n)return[];let o=this.currentSpreadsheet()?.livingDexChecklist??[];return(n.value()?.flatMap(a=>a.pokemon)??[]).filter(a=>a.shinyLocked?!1:!o.find(g=>g.slug===a.slug)?.shiny)}),this.chunkedDex=v(()=>{let n=this.currentDex();if(this.showOnlyUnowned())return[];if(!n)return[];let t=n.value();if(!t)return[];let a=this.currentSpreadsheet()?.livingDexChecklist??[];return[...t].flat().map(s=>{let g=s.pokemon.reduce((O,K,Ne)=>{let F=Math.floor(Ne/this.CHUNK_SIZE);O[F]||(O[F]=[]);let Z=a.find(He=>He.slug===K.slug);return O[F].push(P(I({},K),{shiny:Z?.shiny??!1,regular:Z?.regular??!1})),O},[]);return P(I({},s),{pokemon:g})})})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=D({type:i,selectors:[["app-living-dexes"]],hostAttrs:[1,"view"],inputs:{dexId:[1,"dexId"]},decls:18,vars:3,consts:[[1,"view-header"],[1,"view-addional-content"],[3,"ngModelChange","ngModel"],[1,"view-sidebar"],[1,"sub-navi"],["link","../home","text","Home"],["category","ball","slug","poke"],["link","../sv","text","Scarlet/Violet"],["link","../swsh","text","Sword/Shield"],[1,"view-content"],[1,"grid","minimal","fluid"],[1,"grid-item",3,"matTooltip"],[1,"icon"],["shiny","",3,"slug"],[1,"grid-wrapper"],[1,"chunk"],[1,"chunk-title"],[1,"grid","minimal"],[1,"grid-item",3,"inactive","matTooltip"]],template:function(t,o){if(t&1){let a=R();r(0,"header",0),w(1,"Living dexes"),d(),r(2,"div",1)(3,"mat-checkbox",2),_e("ngModelChange",function(g){return u(a),ue(o.showOnlyUnowned,g)||(o.showOnlyUnowned=g),_(g)}),r(4,"b"),w(5,"Only unowned"),d()()(),r(6,"aside",3)(7,"ul",4)(8,"app-sub-navi-item",5),b(9,"app-item",6),d(),r(10,"app-sub-navi-item",7),b(11,"app-item",6),d(),r(12,"app-sub-navi-item",8),b(13,"app-item",6),d()()(),r(14,"div",9),pe(15),E(16,it,1,1)(17,ot,2,1,"p"),d()}if(t&2){l(3),ke("ngModel",o.showOnlyUnowned),l(12);let a=xe(o.currentDex());l(),T(a?16:17)}},dependencies:[Te,Ee,ze,De,$,Fe,Le,Ae],styles:[".grid-wrapper[_ngcontent-%COMP%]{display:flex;gap:25px;flex-wrap:wrap;margin-bottom:40px}.chunk[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.chunk[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{pointer-events:none}.chunk-title[_ngcontent-%COMP%]{font-weight:500}.shiny-locked.shiny[_ngcontent-%COMP%]{filter:grayscale(1) opacity(.2) brightness(0)!important}.grid[_ngcontent-%COMP%]{display:grid}.grid.hide-inactives[_ngcontent-%COMP%]   .grid-item.inactive[_ngcontent-%COMP%], .grid.filtered[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{display:none}.grid.filtered.uncategorized[_ngcontent-%COMP%]   .grid-item.uncategorized[_ngcontent-%COMP%], .grid.filtered.starter[_ngcontent-%COMP%]   .grid-item.starter[_ngcontent-%COMP%], .grid.filtered.pseudo-legendary[_ngcontent-%COMP%]   .grid-item.pseudo-legendary[_ngcontent-%COMP%], .grid.filtered.ultra-beast[_ngcontent-%COMP%]   .grid-item.ultra-beast[_ngcontent-%COMP%], .grid.filtered.sub-legendary[_ngcontent-%COMP%]   .grid-item.sub-legendary[_ngcontent-%COMP%], .grid.filtered.legendary[_ngcontent-%COMP%]   .grid-item.legendary[_ngcontent-%COMP%], .grid.filtered.mystical[_ngcontent-%COMP%]   .grid-item.mystical[_ngcontent-%COMP%], .grid.filtered.fossil[_ngcontent-%COMP%]   .grid-item.fossil[_ngcontent-%COMP%], .grid.filtered.baby[_ngcontent-%COMP%]   .grid-item.baby[_ngcontent-%COMP%], .grid.filtered.alola[_ngcontent-%COMP%]   .grid-item.alola[_ngcontent-%COMP%], .grid.filtered.galar[_ngcontent-%COMP%]   .grid-item.galar[_ngcontent-%COMP%], .grid.filtered.hisui[_ngcontent-%COMP%]   .grid-item.hisui[_ngcontent-%COMP%], .grid.filtered.unown[_ngcontent-%COMP%]   .grid-item.unown[_ngcontent-%COMP%], .grid.filtered.alcremie[_ngcontent-%COMP%]   .grid-item.alcremie[_ngcontent-%COMP%], .grid.filtered.vivillon[_ngcontent-%COMP%]   .grid-item.vivillon[_ngcontent-%COMP%], .grid.filtered.gmax[_ngcontent-%COMP%]   .grid-item.gmax[_ngcontent-%COMP%]{display:block}.grid.owned[_ngcontent-%COMP%]:not(.unowned)   .grid-item.inactive[_ngcontent-%COMP%]{display:none}.grid.unowned[_ngcontent-%COMP%]:not(.owned)   .grid-item[_ngcontent-%COMP%]:not(.inactive){display:none}.grid.minimal[_ngcontent-%COMP%]{grid-gap:6px;grid-template-columns:repeat(6,40px)}.grid.minimal.fluid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,40px)}.grid.minimal[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{height:40px;width:40px;border:none;background:#ffffff38;border-radius:5px}.grid.minimal[_ngcontent-%COMP%]   .grid-item.inactive[_ngcontent-%COMP%]   .pokesprite[_ngcontent-%COMP%]{filter:grayscale(1) opacity(.2)}.grid.minimal[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:relative;width:68px;height:56px;margin-left:-14px;flex-basis:40px;margin-top:-16px}.grid.minimal[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{position:absolute;bottom:-10%;left:50%}@media (prefers-color-scheme: dark){.grid.minimal[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{background:#00000038}}"]});let c=i;return c})();export{Yt as LivingDexesComponent};
