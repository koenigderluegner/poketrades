import{a as q,c as K,f as _}from"./chunk-5XQXKY64.js";import{a as U,c as B,g as Z,l as $,o as Q,p as W}from"./chunk-KO3XMMZR.js";import{b as T,c as I}from"./chunk-YYFXMHMV.js";import{d as F,h as G}from"./chunk-YVSC47RM.js";import{Ea as A,Hb as y,Ib as N,Ja as R,Kb as k,Mb as b,Rb as V,S as h,Sb as Y,Tb as j,Ya as O,Yb as H,Za as n,Zb as z,_ as u,ba as g,eb as L,f,ha as D,ia as C,kb as M,ma as P,mb as S,mc as X,ra as E,va as p,xb as x,zb as v}from"./chunk-MZKGMKCD.js";import{a as d}from"./chunk-ESJYUATY.js";var nt=["tooltip"],rt=20;var at=new u("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let l=g(_);return()=>l.scrollStrategies.reposition({scrollThrottle:rt})}});function lt(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}var ht=new u("mat-tooltip-default-options",{providedIn:"root",factory:lt});var J="tooltip-panel",tt=B({passive:!0}),ct=8,dt=8,pt=24,mt=200,Xt=(()=>{let r=class r{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=T(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=T(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=I(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=I(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,e,s,o,c,m,it,et,w,a,st){this._overlay=t,this._elementRef=i,this._scrollDispatcher=e,this._viewContainerRef=s,this._ngZone=o,this._platform=c,this._ariaDescriber=m,this._focusMonitor=it,this._dir=w,this._defaultOptions=a,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._tooltipComponent=_t,this._viewportMargin=8,this._cssClassPrefix="mat-mdc",this.touchGestures="auto",this._message="",this._passiveListeners=[],this._touchstartTimeout=null,this._destroyed=new f,this._injector=g(P),this._scrollStrategy=et,this._document=st,a&&(this._showDelay=a.showDelay,this._hideDelay=a.hideDelay,a.position&&(this.position=a.position),a.positionAtOrigin&&(this.positionAtOrigin=a.positionAtOrigin),a.touchGestures&&(this.touchGestures=a.touchGestures),a.tooltipClass&&(this.tooltipClass=a.tooltipClass)),w.change.pipe(h(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)}),this._viewportMargin=ct}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(h(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,e])=>{t.removeEventListener(i,e,tt)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let e=this._createOverlay(i);this._detach(),this._portal=this._portal||new q(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=e.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(h(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof p)return this._overlayRef;this._detach()}let i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),e=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return e.positionChanges.pipe(h(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:`${this._cssClassPrefix}-${J}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(h(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(h(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(h(this._destroyed)).subscribe(s=>{this._isTooltipVisible()&&s.keyCode===27&&!Z(s)&&(s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,e=this._getOrigin(),s=this._getOverlayPosition();i.withPositions([this._addOffset(d(d({},e.main),s.main)),this._addOffset(d(d({},e.fallback),s.fallback))])}_addOffset(t){let i=dt,e=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-i:t.originY==="bottom"?t.offsetY=i:t.originX==="start"?t.offsetX=e?-i:i:t.originX==="end"&&(t.offsetX=e?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",i=this.position,e;i=="above"||i=="below"?e={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&t||i=="right"&&!t?e={originX:"start",originY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(e={originX:"end",originY:"center"});let{x:s,y:o}=this._invertPosition(e.originX,e.originY);return{main:e,fallback:{originX:s,originY:o}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",i=this.position,e;i=="above"?e={overlayX:"center",overlayY:"bottom"}:i=="below"?e={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&t||i=="right"&&!t?e={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(e={overlayX:"start",overlayY:"center"});let{x:s,y:o}=this._invertPosition(e.overlayX,e.overlayY);return{main:e,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),R(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:e,originY:s}=t,o;if(i==="center"?this._dir&&this._dir.value==="rtl"?o=e==="end"?"left":"right":o=e==="start"?"left":"right":o=i==="bottom"&&s==="top"?"above":"below",o!==this._currentPosition){let c=this._overlayRef;if(c){let m=`${this._cssClassPrefix}-${J}-`;c.removePanelClass(m+this._currentPosition),c.addPanelClass(m+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{let i=t.targetTouches?.[0],e=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,e)},this._defaultOptions.touchLongPressShowDelay??s)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;let t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{let e=i.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let i=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,e])=>{this._elementRef.nativeElement.addEventListener(i,e,tt)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),e=this._elementRef.nativeElement;i!==e&&!e.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let i=this._elementRef.nativeElement,e=i.style;(t==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(e.userSelect=e.msUserSelect=e.webkitUserSelect=e.MozUserSelect="none"),(t==="on"||!i.draggable)&&(e.webkitUserDrag="none"),e.touchAction="none",e.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}};r.\u0275fac=function(i){return new(i||r)(n(_),n(p),n(K),n(L),n(E),n(U),n($),n(Q),n(at),n(W),n(ht,8),n(F))},r.\u0275dir=S({type:r,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,e){i&2&&v("mat-mdc-tooltip-disabled",e.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]});let l=r;return l})(),_t=(()=>{let r=class r{constructor(t,i,e){this._changeDetectorRef=t,this._elementRef=i,this._isMultiline=!1,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new f,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide",this._animationsDisabled=e==="NoopAnimations"}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=mt}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,e=this._showAnimation,s=this._hideAnimation;if(i.classList.remove(t?s:e),i.classList.add(t?e:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(i);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}};r.\u0275fac=function(i){return new(i||r)(n(X),n(p),n(A,8))},r.\u0275cmp=M({type:r,selectors:[["mat-tooltip-component"]],viewQuery:function(i,e){if(i&1&&V(nt,7),i&2){let s;Y(s=j())&&(e._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,e){i&1&&b("mouseleave",function(o){return e._handleMouseLeave(o)})},decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,e){if(i&1){let s=k();y(0,"div",1,0),b("animationend",function(c){return D(s),C(e._handleAnimationEnd(c))}),y(2,"div",2),H(3),N()()}i&2&&(v("mdc-tooltip--multiline",e._isMultiline),x("ngClass",e.tooltipClass),O(3),z(e.message))},dependencies:[G],styles:['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-app-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-app-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-app-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-app-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-app-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-app-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-app-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0});let l=r;return l})();export{ht as a,Xt as b};
