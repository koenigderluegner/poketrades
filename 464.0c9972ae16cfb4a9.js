"use strict";(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[464],{2464:($,l,i)=>{i.r(l),i.d(l,{SpreadsheetChangerModule:()=>k});var c=i(6814),h=i(2787),r=i(6223),p=i(9397),u=i(553),m=i(6306),e=i(9212),_=i(7723),f=i(5849),C=i(9468);function x(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"li",6),e.NdJ("click",function(){const d=e.CHM(o).$implicit,B=e.oxw();return e.KtG(B.fromHistory(d.id))}),e._uU(1),e.qZA()}if(2&t){const o=s.$implicit;e.xp6(1),e.hij(" ",o.title," ")}}function v(t,s){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-spinner",7),e.TgZ(2,"div",8),e._uU(3,"Load spreadsheet"),e.qZA()())}function g(t,s){if(1&t&&e.YNc(0,v,4,0,"div"),2&t){const o=e.oxw(2);e.um2(0,o.hasRequested?0:-1)}}function y(t,s){1&t&&(e.TgZ(0,"div",13)(1,"div",14),e._uU(2,"Contains valuables!"),e.qZA(),e.TgZ(3,"div",15),e._uU(4,"Valuables are Pok\xe9mon with a certain rarity. Event, shiny, competitive, legendary Pok\xe9mon and others. "),e.qZA()())}function Z(t,s){1&t&&(e.TgZ(0,"div",13)(1,"div",14),e._uU(2,"Contains breedables!"),e.qZA(),e.TgZ(3,"div",15),e._uU(4,"Breedables are Pok\xe9mon, which can be bred or are a result of breeding. They are usually collected in different kind of balls like Bulbasaur in a Friend Ball. "),e.qZA()())}function b(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",2),e._uU(1),e.qZA(),e._UZ(2,"div",9),e.YNc(3,y,5,0,"div",10)(4,Z,5,0,"div",10),e.TgZ(5,"div",11)(6,"button",12),e.NdJ("click",function(){e.CHM(o);const a=e.oxw(),d=e.oxw(3);return e.KtG(d.saveSpreadsheet(a))}),e._uU(7,"Save as current spreadsheet "),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.title),e.xp6(2),e.um2(3,o.hasValuables?3:-1),e.xp6(1),e.um2(4,o.hasBreedables?4:-1)}}function T(t,s){1&t&&e.YNc(0,b,8,3),2&t&&e.um2(0,s?0:-1)}function w(t,s){if(1&t&&(e.YNc(0,T,1,1),e.ALo(1,"async")),2&t){const o=e.oxw(2);let n;e.um2(0,(n=e.lcZ(1,1,o.loadedSpreadsheet$))?0:-1,n)}}function A(t,s){if(1&t&&e._uU(0),2&t){const o=e.oxw(2);e.hij(" Error: ",null==o.error?null:o.error.message," ")}}function I(t,s){if(1&t&&(e.YNc(0,g,1,1),e.ALo(1,"async"),e.YNc(2,w,2,3)(3,A,1,1)),2&t){const o=e.oxw();e.um2(0,e.lcZ(1,2,o.isLoading$)?0:-1),e.xp6(2),e.um2(2,o.error?3:2)}}function S(t,s){1&t&&(e.TgZ(0,"app-ball-guy-bubble")(1,"div"),e._uU(2,"Enter a spreadsheet ID to load a spreadsheet."),e.qZA(),e.TgZ(3,"div"),e._uU(4,"Make sure the spreadsheet with that given ID is published to web and made from the template!"),e.qZA(),e.TgZ(5,"div"),e._uU(6,"Currently no other spreadsheet template it supported."),e.qZA()())}const U=[{path:"",component:(()=>{class t{constructor(o){this.spreadsheetFacade=o,this.classes="view spreadsheet-changer-view",this.hasRequested=!1,this.apiKey=u.N.googleApiKey,this.error=null,this.searchForm=new r.cw({search:new r.NI("",{nonNullable:!0})}),this.isLoading$=this.spreadsheetFacade.isLoading$().pipe((0,p.b)(n=>console.log("lods",n))),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}submitSearch(){this.hasRequested=!0,this.error=null,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value,this.apiKey).pipe((0,m.K)((o,n)=>(console.log("ge",o),this.error=o,n)))}saveSpreadsheet(o){this.spreadsheetFacade.updateCurrentSpreadsheet(o)}fromHistory(o){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(o,this.apiKey)}trackBy(o,n){return n.id}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(_.s))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-index"]],hostVars:2,hostBindings:function(n,a){2&n&&e.Tol(a.classes)},decls:16,vars:4,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],[1,"view-content"],[1,"history-entry",3,"click"],[1,"centered-spinner"],[1,"t-align-center"],[1,""],["class","collection-infos"],[1,"button-row"],[1,"save-button",3,"click"],[1,"collection-infos"],[1,"title"],[1,"text"],["class","history-entry"]],template:function(n,a){1&n&&(e.TgZ(0,"header",0),e._uU(1,"Change spreadsheet"),e.qZA(),e.TgZ(2,"aside",1)(3,"div",2),e._uU(4,"Spreadsheet search"),e.qZA(),e.TgZ(5,"form",3),e.NdJ("submit",function(){return a.submitSearch()}),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"div",2),e._uU(8," search history "),e.qZA(),e.TgZ(9,"ul"),e.SjG(10,x,2,1,"li",16,a.trackBy),e.ALo(12,"async"),e.qZA()(),e.TgZ(13,"div",5),e.YNc(14,I,4,4)(15,S,7,0),e.qZA()),2&n&&(e.xp6(5),e.Q6J("formGroup",a.searchForm),e.xp6(5),e.wJu(e.lcZ(12,2,a.spreadsheetHistory$)),e.xp6(4),e.um2(14,a.loadedSpreadsheet$?14:15))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.U,C.O,c.Ov],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:500;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px #0006;align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{cursor:pointer;width:auto}.spreadsheet-changer-view .centered-spinner{margin:20px auto}.collection-infos{margin-top:16px}.collection-infos .title{font-size:18px}.collection-infos .text{margin:0 0 8px;line-height:1.4;color:#000000e6}@media (prefers-color-scheme: dark){#search,.history-entry,.save-button{background:#21262d;color:#efe2e3}.collection-infos .title{color:#efe2e3}.collection-infos .text{color:#ffffffb3}}@media screen and (max-width: 720px){.spreadsheet-changer-view .view-sidebar{order:2}}\n"],encapsulation:2})}return t})()}];let F=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(U),h.Bz]})}return t})();var N=i(6208);let k=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[c.ez,F,r.UX,N.m]})}return t})()}}]);