"use strict";(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[333],{333:(N,p,i)=>{i.r(p),i.d(p,{ValuableModule:()=>O});var r=i(4755),c=i(5159),t=i(2223),u=i(6276),d=i(6082),h=i(2417),g=i(5934),l=i(2156);function m(e,a){if(1&e&&(t._UZ(0,"app-item",9),t.ALo(1,"slugify")),2&e){const n=t.oxw().$implicit,s=t.oxw(2);t.Q6J("slug",t.lcZ(1,1,s.getItemMapping(null==n.config?null:n.config.subType)))}}const f=function(e,a){return[e,"valuables",a]};function v(e,a){if(1&e&&(t.TgZ(0,"app-sub-navi-item",7),t.ALo(1,"slugify"),t.YNc(2,m,2,3,"app-item",8),t.qZA()),2&e){const n=a.$implicit,s=t.oxw(2);t.Q6J("link",t.WLB(6,f,"/"+s.spreadsheetId,t.lcZ(1,4,n.title)))("text",n.title)("meta",""+(null==n.data?null:n.data.length)),t.xp6(2),t.Q6J("ngIf",null==n.config?null:n.config.subType)}}function x(e,a){if(1&e&&(t.TgZ(0,"ul",5),t.YNc(1,v,3,9,"app-sub-navi-item",6),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.worksheets)}}let y=(()=>{class e{constructor(n){this._spreadsheetFacade=n,this._isView=!0,this.subTypeItemMap={events:"cherish",legendaries:"master",shinies:"shiny-charm",competitives:"focus-sash",rngs:"teachy-tv"},this.spreadsheetData$=this._spreadsheetFacade.getCurrentSpreadsheet$()}ngOnInit(){this.spreadsheetData$.subscribe({next:n=>{this.spreadsheetId=n.id,this.worksheets=n.worksheets.filter(s=>"Valuables"===s.config?.type)}})}getItemMapping(n){return n?this.subTypeItemMap[n.toLocaleLowerCase()]??"":""}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(u.s))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(s,o){2&s&&t.ekj("view",o._isView)},decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"],[3,"slug",4,"ngIf"],[3,"slug"]],template:function(s,o){1&s&&(t.TgZ(0,"header",0),t._uU(1,"valuables"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"app-grid-controller"),t.qZA(),t.TgZ(4,"aside",2),t.YNc(5,x,2,1,"ul",3),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"router-outlet"),t.qZA()),2&s&&(t.xp6(5),t.Q6J("ngIf",o.worksheets))},dependencies:[r.sg,r.O5,c.lC,d.H,h.V,g.P,l.N]})}return e})();var T=i(8505),I=i(3900),w=i(827),C=i(854),Z=i(257);let b=(()=>{class e{transform(n){return n}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275pipe=t.Yjl({name:"castValuable",type:e,pure:!0})}return e})();function A(e,a){if(1&e&&(t.ynx(0),t._UZ(1,"app-grid-item",4),t.ALo(2,"castValuable"),t.BQk()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("pokemon",t.lcZ(2,1,n))}}function F(e,a){if(1&e&&(t.TgZ(0,"app-grid",2),t.YNc(1,A,3,3,"ng-container",3),t.qZA()),2&e){const n=t.oxw().ngIf,s=t.oxw();t.Q6J("appearance",n),t.xp6(1),t.Q6J("ngForOf",null==s.worksheet?null:s.worksheet.data)("ngForTrackBy",s.trackBy)}}function V(e,a){if(1&e&&(t.ynx(0),t.YNc(1,F,2,3,"app-grid",1),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.worksheet)}}const k=[{path:"",component:y,children:[{path:":worksheetTitle",component:(()=>{class e{constructor(n,s,o,$){this.spreadsheetFacade=n,this.route=s,this.slugifyPipe=o,this.gridService=$,this.subscriptions=[],this.gridService.updateHideOwnedStatusControl(!0),this.gridService.updateHideAppearanceControl(!1),this.gridAppearance$=this.gridService.getGridAppearance$()}ngOnInit(){this.route.paramMap.pipe((0,T.b)(n=>this.worksheetTitle=n.get("worksheetTitle")),(0,I.w)(()=>this.spreadsheetFacade.getCurrentSpreadsheet$())).subscribe({next:n=>{this.worksheet=n.worksheets.filter(s=>this.slugifyPipe.transform(s.title)===this.worksheetTitle)?.[0]}})}trackBy(n,s){return s.id}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(u.s),t.Y36(c.gz),t.Y36(l.N),t.Y36(w.r))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-valuables"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"appearance",4,"ngIf"],[3,"appearance"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(s,o){1&s&&(t.YNc(0,V,2,1,"ng-container",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,o.gridAppearance$))},dependencies:[r.sg,r.O5,C.M,Z.b,r.Ov,b]})}return e})()}]}];let B=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(k),c.Bz]})}return e})();var Q=i(9401),J=i(4466),Y=i(3830),M=i(7549);let O=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[l.N],imports:[r.ez,B,Q.UX,J.m,Y.z,M.Q]})}return e})()}}]);