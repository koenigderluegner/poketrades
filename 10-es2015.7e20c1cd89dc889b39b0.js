(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bq4Z:function(e,t,r){"use strict";r.r(t),r.d(t,"SpreadsheetChangerModule",function(){return k});var n=r("ofXK"),i=r("tyNb"),s=r("3Pt+"),o=r("fXoL"),a=r("d3iT"),c=r("XJ2P"),b=r("NQo5"),d=r("4Kj8");function l(e,t){if(1&e){const e=o.Qb();o.Pb(0,"li",11),o.Wb("click",function(){o.nc(e);const r=t.$implicit;return o.Yb().fromHistory(r.id)}),o.vc(1),o.Ob()}if(2&e){const e=t.$implicit;o.zb(1),o.xc(" ",e.title," ")}}function h(e,t){1&e&&(o.Pb(0,"div",18),o.Pb(1,"div",19),o.vc(2,"Contains valuables!"),o.Ob(),o.Pb(3,"div",20),o.vc(4,"Valuables are Pok\xe9mon with a certain rarity. Event, shiny, competitive, legendary Pok\xe9mon and others. "),o.Ob(),o.Ob())}function p(e,t){1&e&&(o.Pb(0,"div",18),o.Pb(1,"div",19),o.vc(2,"Contains breedables!"),o.Ob(),o.Pb(3,"div",20),o.vc(4,"Breedables are Pok\xe9mon, which can be bred or are a result of breeding. They are usually collected in different kind of balls like Bulbasaur in a Friend Ball. "),o.Ob(),o.Ob())}function u(e,t){if(1&e){const e=o.Qb();o.Nb(0),o.Pb(1,"div",2),o.vc(2),o.Ob(),o.Lb(3,"div",14),o.tc(4,h,5,0,"div",15),o.tc(5,p,5,0,"div",15),o.Pb(6,"div",16),o.Pb(7,"button",17),o.Wb("click",function(){o.nc(e);const t=o.Yb().$implicit;return o.Yb(2).saveSpreadsheet(t)}),o.vc(8,"Save as current spreadsheet"),o.Ob(),o.Ob(),o.Mb()}if(2&e){const e=o.Yb().$implicit;o.zb(2),o.wc(e.title),o.zb(2),o.ec("ngIf",e.hasValuables),o.zb(1),o.ec("ngIf",e.hasBreedables)}}function f(e,t){if(1&e&&(o.Nb(0),o.tc(1,u,9,3,"ng-container",13),o.Mb()),2&e){const e=t.$implicit;o.zb(1),o.ec("ngIf",e)}}function v(e,t){if(1&e&&(o.Nb(0),o.tc(1,f,2,1,"ng-container",12),o.Mb()),2&e){const e=o.Yb(),t=o.kc(17),r=o.kc(19);o.zb(1),o.ec("ngxSubscribeOf",e.loadedSpreadsheet$)("ngxSubscribeBeforeAny",t)("ngxSubscribeOnError",r)}}function g(e,t){1&e&&(o.Pb(0,"app-ball-guy-bubble"),o.Pb(1,"div"),o.vc(2,"Enter a spreadsheet ID to load a spreadsheet."),o.Ob(),o.Pb(3,"div"),o.vc(4,"Make sure the spreadsheet with that given ID is published to web and made from the template!"),o.Ob(),o.Pb(5,"div"),o.vc(6,"Currently no other spreadsheet template it supported."),o.Ob(),o.Ob())}function m(e,t){1&e&&(o.Pb(0,"div"),o.Lb(1,"app-spinner",21),o.Pb(2,"div",22),o.vc(3,"Load spreadsheet"),o.Ob(),o.Ob())}function y(e,t){if(1&e&&o.tc(0,m,4,0,"div",13),2&e){const e=o.Yb();o.ec("ngIf",e.hasRequested)}}function w(e,t){1&e&&o.vc(0),2&e&&o.xc("Error: ",t.error.message,"")}const O=[{path:"",component:(()=>{class e{constructor(e){this.spreadsheetFacade=e,this.classes="view spreadsheet-changer-view",this.hasRequested=!1,this.searchForm=new s.e({search:new s.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}submitSearch(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}saveSpreadsheet(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}fromHistory(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}trackBy(e,t){return t.id}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(a.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Bb(t.classes)},decls:20,vars:7,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngIf","ngIfElse"],["notRequestedYet",""],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],[4,"ngIf"],[1,""],["class","collection-infos",4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"],[1,"collection-infos"],[1,"title"],[1,"text"],[1,"centered-spinner"],[1,"t-align-center"]],template:function(e,t){if(1&e&&(o.Pb(0,"header",0),o.vc(1,"Change spreadsheet"),o.Ob(),o.Pb(2,"aside",1),o.Pb(3,"div",2),o.vc(4,"Spreadsheet search"),o.Ob(),o.Pb(5,"form",3),o.Wb("submit",function(){return t.submitSearch()}),o.Lb(6,"input",4),o.Ob(),o.Pb(7,"div",2),o.vc(8," search history "),o.Ob(),o.Pb(9,"ul"),o.tc(10,l,2,1,"li",5),o.Zb(11,"async"),o.Ob(),o.Ob(),o.Pb(12,"div",6),o.tc(13,v,2,3,"ng-container",7),o.Ob(),o.tc(14,g,7,0,"ng-template",null,8,o.uc),o.tc(16,y,1,1,"ng-template",null,9,o.uc),o.tc(18,w,1,1,"ng-template",null,10,o.uc)),2&e){const e=o.kc(15);o.zb(5),o.ec("formGroup",t.searchForm),o.zb(5),o.ec("ngForOf",o.ac(11,5,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),o.zb(3),o.ec("ngIf",t.loadedSpreadsheet$)("ngIfElse",e)}},directives:[s.m,s.j,s.f,s.a,s.i,s.d,n.k,n.l,c.f,b.a,d.a],pipes:[n.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:500;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{cursor:pointer;width:auto}.spreadsheet-changer-view .centered-spinner{margin:20px auto}.collection-infos{margin-top:16px}.collection-infos .title{font-size:18px}.collection-infos .text{margin:0 0 8px;line-height:1.4;color:rgba(0,0,0,.9)}@media (prefers-color-scheme:dark){#search,.history-entry,.save-button{background:#21262d;color:#efe2e3}.collection-infos .title{color:#efe2e3}.collection-infos .text{color:hsla(0,0%,100%,.7)}}@media screen and (max-width:720px){.spreadsheet-changer-view .view-sidebar{order:2}}"],encapsulation:2}),e})()}];let P=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[i.f.forChild(O)],i.f]}),e})();var x=r("PCNd");let k=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[n.c,P,s.l,c.e,x.a]]}),e})()}}]);