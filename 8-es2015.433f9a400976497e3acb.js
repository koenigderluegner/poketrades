(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{f8ci:function(e,t,i){"use strict";i.r(t),i.d(t,"BreedableModule",(function(){return D}));var n=i("ofXK"),a=i("tyNb"),r=i("fXoL"),s=i("d3iT"),c=i("NtUI"),o=i("pEm8"),l=i("EAs/"),b=i("8I9x");const p=function(e,t){return[e,"breedables",t]};function d(e,t){if(1&e&&(r.Pb(0,"app-sub-navi-item",9),r.Zb(1,"slugify"),r.Lb(2,"app-item",7),r.Zb(3,"slugify"),r.Ob()),2&e){const e=t.$implicit,i=r.Yb(2);r.ec("link",r.ic(8,p,"/"+i.spreadsheetId,r.ac(1,4,e.title)))("text",e.title)("meta",e.ownedEntries+"/"+(e.data?e.data.length:"???")),r.zb(2),r.ec("slug",r.ac(3,6,e.title))}}const u=function(e){return[e,"breedables","overview"]};function g(e,t){if(1&e&&(r.Pb(0,"ul",5),r.Pb(1,"app-sub-navi-item",6),r.Lb(2,"app-item",7),r.Ob(),r.sc(3,d,4,11,"app-sub-navi-item",8),r.Ob()),2&e){const e=r.Yb();r.zb(1),r.ec("link",r.hc(4,u,"/"+e.spreadsheetId))("text","Overview"),r.zb(1),r.ec("slug","master"),r.zb(1),r.ec("ngForOf",e.worksheets)}}let f=(()=>{class e{constructor(e){this.spreadsheetFacade=e,this.isView=!0,this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$()}ngOnInit(){this.spreadsheetData$.subscribe({next:e=>{this.spreadsheetId=e.username?"u/"+e.username:e.id,this.worksheets=e.worksheets.filter(e=>{var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)})}})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(s.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Cb("view",t.isView)},decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"]],template:function(e,t){1&e&&(r.Pb(0,"header",0),r.uc(1,"breedables"),r.Ob(),r.Pb(2,"div",1),r.Lb(3,"app-grid-controller"),r.Ob(),r.Pb(4,"aside",2),r.sc(5,g,4,6,"ul",3),r.Ob(),r.Pb(6,"div",4),r.Lb(7,"router-outlet"),r.Ob()),2&e&&(r.zb(5),r.ec("ngIf",t.worksheets))},directives:[c.a,n.l,a.g,o.a,l.a,n.k],pipes:[b.a],styles:["@media screen and (max-width:720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]}),e})();var h=i("vkgz"),v=i("eIep"),m=i("1Has"),w=i("XJ2P"),y=i("Ludi"),k=i("zttm"),O=i("cHJA");let x=(()=>{class e{transform(e){return new O.a(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Jb({name:"castBreedable",type:e,pure:!0}),e})();function I(e,t){if(1&e&&(r.Nb(0),r.Lb(1,"app-grid-item",4),r.Zb(2,"castBreedable"),r.Mb()),2&e){const e=t.$implicit;r.zb(1),r.ec("pokemon",r.ac(2,1,e))}}function $(e,t){if(1&e&&(r.Pb(0,"app-grid",2),r.sc(1,I,3,3,"ng-container",3),r.Ob()),2&e){const e=r.Yb().ngxAlias,t=r.Yb().ngxAlias,i=r.Yb();r.ec("appearance",t)("hideInactiveItems",!!e),r.zb(1),r.ec("ngForOf",null==i.worksheet?null:i.worksheet.data)("ngForTrackBy",i.trackBy)}}function P(e,t){if(1&e&&(r.Nb(0),r.sc(1,$,2,4,"app-grid",1),r.Mb()),2&e){const e=r.Yb(2);r.zb(1),r.ec("ngIf",e.worksheet)}}function F(e,t){if(1&e&&(r.Nb(0),r.sc(1,P,2,1,"ng-container",0),r.Zb(2,"async"),r.Mb()),2&e){const e=r.Yb();r.zb(1),r.ec("ngxAlias",r.ac(2,1,e.hideItems$))}}let z=(()=>{class e{constructor(e,t,i,n){this.spreadsheetFacade=e,this.route=t,this.slugifyPipe=i,this.gridService=n,this.subscriptions=[],this.gridService.updateHideAppearanceControl(!1),this.gridService.updateHideInactiveItemsControl(!1),this.gridAppearance$=this.gridService.getGridAppearance$(),this.hideItems$=this.gridService.getHideItems$()}ngOnInit(){this.route.paramMap.pipe(Object(h.a)(e=>{var t;return this.worksheetTitle=null!==(t=e.get("worksheetTitle"))&&void 0!==t?t:""}),Object(v.a)(()=>this.spreadsheetFacade.getCurrentSpreadsheet$())).subscribe({next:e=>{var t;this.worksheet=null===(t=e.worksheets.filter(e=>this.slugifyPipe.transform(e.title)===this.worksheetTitle))||void 0===t?void 0:t[0]}})}trackBy(e,t){return t.id}ngOnDestroy(){for(const e of this.subscriptions)e.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(s.a),r.Kb(a.a),r.Kb(b.a),r.Kb(m.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-ball"]],decls:2,vars:3,consts:[[4,"ngxAlias"],[3,"appearance","hideInactiveItems",4,"ngIf"],[3,"appearance","hideInactiveItems"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&(r.sc(0,F,3,3,"ng-container",0),r.Zb(1,"async")),2&e&&r.ec("ngxAlias",r.ac(1,1,t.gridAppearance$))},directives:[w.a,n.l,y.a,n.k,k.a],pipes:[n.b,x],styles:[""]}),e})();var C=i("itXk"),S=i("LRne"),A=i("wBCF"),B=i("DtKQ");function L(e,t){if(1&e&&(r.Nb(0),r.Pb(1,"div",9),r.Zb(2,"slugify"),r.Lb(3,"app-item",10),r.Zb(4,"slugify"),r.Ob(),r.Mb()),2&e){const e=t.$implicit,i=r.Yb().$implicit,n=r.Yb(2).$implicit;r.zb(1),r.Cb("active",null==n.entries[e.key][r.ac(2,5,i.pokemon)]?null:n.entries[e.key][r.ac(2,5,i.pokemon)].isOwned)("illegal",null===i[e.key]),r.zb(2),r.ec("slug",r.ac(4,7,e.key))}}function M(e,t){if(1&e&&(r.Pb(0,"div",5),r.Pb(1,"div",6),r.Lb(2,"app-pokemon",7),r.Zb(3,"slugify"),r.uc(4),r.Ob(),r.sc(5,L,5,9,"ng-container",8),r.Zb(6,"keyvalue"),r.Ob()),2&e){const e=t.$implicit,i=r.Yb(2).$implicit;r.zb(2),r.ec("slug",r.ac(3,3,e.pokemon)),r.zb(2),r.wc(" ",e.pokemon,""),r.zb(1),r.ec("ngForOf",r.ac(6,5,i.entries))}}function K(e,t){if(1&e&&(r.Nb(0),r.sc(1,M,7,7,"div",4),r.Mb()),2&e){const e=r.Yb().$implicit;r.zb(1),r.ec("ngForOf",e.legality)}}function Y(e,t){if(1&e&&(r.Nb(0),r.Pb(1,"div",2),r.sc(2,K,2,1,"ng-container",3),r.Ob(),r.Mb()),2&e){const e=t.$implicit;r.zb(2),r.ec("ngIf",e)}}function H(e,t){1&e&&r.uc(0,"Loading")}const N=[{path:"",component:f,children:[{path:"overview",component:(()=>{class e{constructor(e,t,i){this.facade=e,this.db=t,this.gridService=i,this.gridService.updateHideAppearanceControl(!0),this.gridService.updateHideInactiveItemsControl(!0),this.data$=Object(C.a)([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe(Object(v.a)(e=>{var t;return Object(S.a)({legality:e[0],entries:null!==(t=e[1].overviewEntries)&&void 0!==t?t:{}})}))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(s.a),r.Kb(A.a),r.Kb(m.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-overview"]],decls:3,vars:2,consts:[[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny"],["loading",""],[1,"legality-table"],[4,"ngIf"],["class","legality-row d-flex",4,"ngFor","ngForOf"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],[4,"ngFor","ngForOf"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(e,t){if(1&e&&(r.sc(0,Y,3,1,"ng-container",0),r.sc(1,H,1,0,"ng-template",null,1,r.tc)),2&e){const e=r.kc(2);r.ec("ngxSubscribeOf",t.data$)("ngxSubscribeBeforeAny",e)}},directives:[w.f,n.l,n.k,B.a,l.a],pipes:[b.a,n.f],styles:[".legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}.legality-table .ball-col .pokesprite{filter:grayscale(1) opacity(.3)}.legality-table .ball-col.active .pokesprite{filter:none}.legality-table .ball-col.illegal .pokesprite{filter:brightness(0) opacity(.3)}"],encapsulation:2}),e})()},{path:":worksheetTitle",component:z}]}];let Z=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(N)],a.f]}),e})();var E=i("PCNd"),j=i("21aE"),T=i("3Pt+"),J=i("C7wK");let D=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},providers:[b.a],imports:[[n.c,Z,E.a,j.a,w.e,T.l,J.a]]}),e})()}}]);