(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bq4Z:function(e,t,r){"use strict";r.r(t),r.d(t,"SpreadsheetChangerModule",function(){return k});var n=r("ofXK"),i=r("tyNb"),s=r("3Pt+"),o=r("fXoL"),a=r("d3iT"),c=r("XJ2P"),b=r("NQo5"),d=r("4Kj8");function l(e,t){if(1&e){const e=o.Rb();o.Qb(0,"li",11),o.Xb("click",function(){o.oc(e);const r=t.$implicit;return o.Zb().fromHistory(r.id)}),o.wc(1),o.Pb()}if(2&e){const e=t.$implicit;o.zb(1),o.yc(" ",e.title," ")}}function h(e,t){1&e&&(o.Qb(0,"div",18),o.Qb(1,"div",19),o.wc(2,"Contains valuables!"),o.Pb(),o.Qb(3,"div",20),o.wc(4,"Valuables are Pok\xe9mon with a certain rarity. Event, shiny, competitive, legendary Pok\xe9mon and others. "),o.Pb(),o.Pb())}function u(e,t){1&e&&(o.Qb(0,"div",18),o.Qb(1,"div",19),o.wc(2,"Contains breedables!"),o.Pb(),o.Qb(3,"div",20),o.wc(4,"Breedables are Pok\xe9mon, which can be bred or are a result of breeding. They are usually collected in different kind of balls like Bulbasaur in a Friend Ball. "),o.Pb(),o.Pb())}function p(e,t){if(1&e){const e=o.Rb();o.Ob(0),o.Qb(1,"div",2),o.wc(2),o.Pb(),o.Mb(3,"div",14),o.uc(4,h,5,0,"div",15),o.uc(5,u,5,0,"div",15),o.Qb(6,"div",16),o.Qb(7,"button",17),o.Xb("click",function(){o.oc(e);const t=o.Zb().$implicit;return o.Zb(2).saveSpreadsheet(t)}),o.wc(8,"Save as current spreadsheet"),o.Pb(),o.Pb(),o.Nb()}if(2&e){const e=o.Zb().$implicit;o.zb(2),o.xc(e.title),o.zb(2),o.fc("ngIf",e.hasValuables),o.zb(1),o.fc("ngIf",e.hasBreedables)}}function f(e,t){if(1&e&&(o.Ob(0),o.uc(1,p,9,3,"ng-container",13),o.Nb()),2&e){const e=t.$implicit;o.zb(1),o.fc("ngIf",e)}}function g(e,t){if(1&e&&(o.Ob(0),o.uc(1,f,2,1,"ng-container",12),o.Nb()),2&e){const e=o.Zb(),t=o.lc(17),r=o.lc(19);o.zb(1),o.fc("ngxSubscribeOf",e.loadedSpreadsheet$)("ngxSubscribeBeforeAny",t)("ngxSubscribeOnError",r)}}function m(e,t){1&e&&(o.Qb(0,"app-ball-guy-bubble"),o.Qb(1,"div"),o.wc(2,"Enter a spreadsheet ID to load a spreadsheet."),o.Pb(),o.Qb(3,"div"),o.wc(4,"Make sure the spreadsheet with that given ID is published to web and made from the template!"),o.Pb(),o.Qb(5,"div"),o.wc(6,"Currently no other spreadsheet template it supported."),o.Pb(),o.Pb())}function v(e,t){1&e&&(o.Qb(0,"div"),o.Mb(1,"app-spinner",21),o.Qb(2,"div",22),o.wc(3,"Load spreadsheet"),o.Pb(),o.Pb())}function w(e,t){if(1&e&&o.uc(0,v,4,0,"div",13),2&e){const e=o.Zb();o.fc("ngIf",e.hasRequested)}}function y(e,t){1&e&&o.wc(0),2&e&&o.yc("Error: ",t.error.message,"")}const P=[{path:"",component:(()=>{class e{constructor(e){this.spreadsheetFacade=e,this.classes="view spreadsheet-changer-view",this.hasRequested=!1,this.searchForm=new s.e({search:new s.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}submitSearch(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}saveSpreadsheet(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}fromHistory(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}trackBy(e,t){return t.id}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(a.a))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Bb(t.classes)},decls:20,vars:7,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngIf","ngIfElse"],["notRequestedYet",""],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],[4,"ngIf"],[1,""],["class","collection-infos",4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"],[1,"collection-infos"],[1,"title"],[1,"text"],[1,"centered-spinner"],[1,"t-align-center"]],template:function(e,t){if(1&e&&(o.Qb(0,"header",0),o.wc(1,"Change spreadsheet"),o.Pb(),o.Qb(2,"aside",1),o.Qb(3,"div",2),o.wc(4,"Spreadsheet search"),o.Pb(),o.Qb(5,"form",3),o.Xb("submit",function(){return t.submitSearch()}),o.Mb(6,"input",4),o.Pb(),o.Qb(7,"div",2),o.wc(8," search history "),o.Pb(),o.Qb(9,"ul"),o.uc(10,l,2,1,"li",5),o.ac(11,"async"),o.Pb(),o.Pb(),o.Qb(12,"div",6),o.uc(13,g,2,3,"ng-container",7),o.Pb(),o.uc(14,m,7,0,"ng-template",null,8,o.vc),o.uc(16,w,1,1,"ng-template",null,9,o.vc),o.uc(18,y,1,1,"ng-template",null,10,o.vc)),2&e){const e=o.lc(15);o.zb(5),o.fc("formGroup",t.searchForm),o.zb(5),o.fc("ngForOf",o.bc(11,5,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),o.zb(3),o.fc("ngIf",t.loadedSpreadsheet$)("ngIfElse",e)}},directives:[s.m,s.j,s.f,s.a,s.i,s.d,n.k,n.l,c.f,b.a,d.a],pipes:[n.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:500;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{cursor:pointer;width:auto}.spreadsheet-changer-view .centered-spinner{margin:20px auto}.collection-infos{margin-top:16px}.collection-infos .title{font-size:18px}.collection-infos .text{margin:0 0 8px;line-height:1.4;color:rgba(0,0,0,.9)}@media (prefers-color-scheme:dark){#search,.history-entry,.save-button{background:#21262d;color:#efe2e3}.collection-infos .title{color:#efe2e3}.collection-infos .text{color:hsla(0,0%,100%,.7)}}@media screen and (max-width:720px){.spreadsheet-changer-view .view-sidebar{order:2}}"],encapsulation:2}),e})()}];let x=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[i.f.forChild(P)],i.f]}),e})();var Q=r("PCNd");let k=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[n.c,x,s.l,c.e,Q.a]]}),e})()}}]);