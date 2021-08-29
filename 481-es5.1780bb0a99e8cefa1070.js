!function(){"use strict";function e(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==i.return||i.return()}finally{if(c)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[481],{2481:function(t,i,a){a.r(i),a.d(i,{BreedableModule:function(){return D}});var o=a(8583),l=a(3423),c=a(7716),s=a(6250),u=a(1969),p=a(6082),f=a(2197),d=a(2156),g=function(e,t){return[e,"breedables",t]};function v(e,t){if(1&e&&(c.TgZ(0,"app-sub-navi-item",9),c.ALo(1,"slugify"),c._UZ(2,"app-item",7),c.ALo(3,"slugify"),c.qZA()),2&e){var n=t.$implicit,i=c.oxw(2);c.Q6J("link",c.WLB(8,g,"/"+i.spreadsheetId,c.lcZ(1,4,n.title)))("text",n.title)("meta",n.ownedEntries+"/"+(n.data?n.data.length:"???")),c.xp6(2),c.Q6J("slug",c.lcZ(3,6,n.title))}}var h=function(e){return[e,"breedables","overview"]};function y(e,t){if(1&e&&(c.TgZ(0,"ul",5),c.TgZ(1,"app-sub-navi-item",6),c._UZ(2,"app-item",7),c.qZA(),c.YNc(3,v,4,11,"app-sub-navi-item",8),c.qZA()),2&e){var n=c.oxw();c.xp6(1),c.Q6J("link",c.VKq(4,h,"/"+n.spreadsheetId))("text","Overview"),c.xp6(1),c.Q6J("slug","master"),c.xp6(1),c.Q6J("ngForOf",n.worksheets)}}var m,b=((m=function(){function e(t){n(this,e),this.spreadsheetFacade=t,this.isView=!0,this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$()}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.spreadsheetData$.subscribe({next:function(t){e.spreadsheetId=t.username?"u/"+t.username:t.id,e.worksheets=t.worksheets.filter(function(e){var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)})}})}}]),e}()).\u0275fac=function(e){return new(e||m)(c.Y36(s.s))},m.\u0275cmp=c.Xpm({type:m,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&c.ekj("view",t.isView)},decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"]],template:function(e,t){1&e&&(c.TgZ(0,"header",0),c._uU(1,"breedables"),c.qZA(),c.TgZ(2,"div",1),c._UZ(3,"app-grid-controller"),c.qZA(),c.TgZ(4,"aside",2),c.YNc(5,y,4,6,"ul",3),c.qZA(),c.TgZ(6,"div",4),c._UZ(7,"router-outlet"),c.qZA()),2&e&&(c.xp6(5),c.Q6J("ngIf",t.worksheets))},directives:[u.V,o.O5,l.lC,p.H,f.P,o.sg],pipes:[d.N],styles:["@media screen and (max-width: 720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]}),m),w=a(3342),x=a(3190),k=a(827),A=a(2021),Z=a(3503),I=a(257),O=a(899),Q=function(){var e=function(){function e(){n(this,e)}return r(e,[{key:"transform",value:function(e){return new O.L(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Yjl({name:"castBreedable",type:e,pure:!0}),e}();function B(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-grid-item",4),c.ALo(2,"castBreedable"),c.BQk()),2&e){var n=t.$implicit;c.xp6(1),c.Q6J("pokemon",c.lcZ(2,1,n))}}function S(e,t){if(1&e&&(c.TgZ(0,"app-grid",2),c.YNc(1,B,3,3,"ng-container",3),c.qZA()),2&e){var n=c.oxw().ngxAlias,i=c.oxw().ngxAlias,r=c.oxw();c.Q6J("appearance",i)("hideInactiveItems",!!n),c.xp6(1),c.Q6J("ngForOf",null==r.worksheet?null:r.worksheet.data)("ngForTrackBy",r.trackBy)}}function $(e,t){if(1&e&&(c.ynx(0),c.YNc(1,S,2,4,"app-grid",1),c.BQk()),2&e){var n=c.oxw(2);c.xp6(1),c.Q6J("ngIf",n.worksheet)}}function J(e,t){if(1&e&&(c.ynx(0),c.YNc(1,$,2,1,"ng-container",0),c.ALo(2,"async"),c.BQk()),2&e){var n=c.oxw();c.xp6(1),c.Q6J("ngxAlias",c.lcZ(2,1,n.hideItems$))}}var T=function(){var t=function(){function t(e,i,r,a){n(this,t),this.spreadsheetFacade=e,this.route=i,this.slugifyPipe=r,this.gridService=a,this.subscriptions=[],this.gridService.updateHideAppearanceControl(!1),this.gridService.updateHideInactiveItemsControl(!1),this.gridAppearance$=this.gridService.getGridAppearance$(),this.hideItems$=this.gridService.getHideItems$()}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe((0,w.b)(function(t){var n;return e.worksheetTitle=null!==(n=t.get("worksheetTitle"))&&void 0!==n?n:""}),(0,x.w)(function(){return e.spreadsheetFacade.getCurrentSpreadsheet$()})).subscribe({next:function(t){var n;e.worksheet=null===(n=t.worksheets.filter(function(t){return e.slugifyPipe.transform(t.title)===e.worksheetTitle}))||void 0===n?void 0:n[0]}})}},{key:"trackBy",value:function(e,t){return t.id}},{key:"ngOnDestroy",value:function(){var t,n=e(this.subscriptions);try{for(n.s();!(t=n.n()).done;){t.value.unsubscribe()}}catch(i){n.e(i)}finally{n.f()}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.s),c.Y36(l.gz),c.Y36(d.N),c.Y36(k.r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-ball"]],decls:2,vars:3,consts:[[4,"ngxAlias"],[3,"appearance","hideInactiveItems",4,"ngIf"],[3,"appearance","hideInactiveItems"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&(c.YNc(0,J,3,3,"ng-container",0),c.ALo(1,"async")),2&e&&c.Q6J("ngxAlias",c.lcZ(1,1,t.gridAppearance$))},directives:[A.UR,o.O5,Z.M,o.sg,I.b],pipes:[o.Ov,Q],styles:[""]}),t}(),Y=a(739),F=a(5917),C=a(3778),N=a(2904),q=a(3845);function _(e,t){if(1&e&&(c.ynx(0),c.TgZ(1,"div",9),c.ALo(2,"slugify"),c._UZ(3,"app-item",10),c.ALo(4,"slugify"),c.qZA(),c.BQk()),2&e){var n=t.$implicit,i=c.oxw().$implicit,r=c.oxw(2).$implicit;c.xp6(1),c.ekj("active",null==r.entries[n.key][c.lcZ(2,5,i.pokemon)]?null:r.entries[n.key][c.lcZ(2,5,i.pokemon)].isOwned)("illegal",null===i[n.key]),c.xp6(2),c.Q6J("slug",c.lcZ(4,7,n.key))}}function L(e,t){if(1&e&&(c.TgZ(0,"div",5),c.TgZ(1,"div",6),c._UZ(2,"app-pokemon",7),c.ALo(3,"nameToSlug"),c._uU(4),c.qZA(),c.YNc(5,_,5,9,"ng-container",8),c.ALo(6,"keyvalue"),c.qZA()),2&e){var n=t.$implicit,i=c.oxw(2).$implicit;c.xp6(2),c.Q6J("slug",c.lcZ(3,3,n.pokemon)),c.xp6(2),c.hij(" ",n.pokemon,""),c.xp6(1),c.Q6J("ngForOf",c.lcZ(6,5,i.entries))}}function U(e,t){if(1&e&&(c.ynx(0),c.YNc(1,L,7,7,"div",4),c.BQk()),2&e){var n=c.oxw().$implicit;c.xp6(1),c.Q6J("ngForOf",n.legality)}}function j(e,t){if(1&e&&(c.ynx(0),c.TgZ(1,"div",2),c.YNc(2,U,2,1,"ng-container",3),c.qZA(),c.BQk()),2&e){var n=t.$implicit;c.xp6(2),c.Q6J("ngIf",n)}}function M(e,t){1&e&&c._uU(0,"Loading")}var P=[{path:"",component:b,children:[{path:"overview",component:function(){var e=function(){function e(t,i,r){n(this,e),this.facade=t,this.db=i,this.gridService=r,this.gridService.updateHideAppearanceControl(!0),this.gridService.updateHideInactiveItemsControl(!0),this.data$=(0,Y.aj)([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe((0,x.w)(function(e){var t;return(0,F.of)({legality:e[0],entries:null!==(t=e[1].overviewEntries)&&void 0!==t?t:{}})}))}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.s),c.Y36(C.d),c.Y36(k.r))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-overview"]],decls:3,vars:2,consts:[[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny"],["loading",""],[1,"legality-table"],[4,"ngIf"],["class","legality-row d-flex",4,"ngFor","ngForOf"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],[4,"ngFor","ngForOf"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(e,t){if(1&e&&(c.YNc(0,j,3,1,"ng-container",0),c.YNc(1,M,1,0,"ng-template",null,1,c.W1O)),2&e){var n=c.MAs(2);c.Q6J("ngxSubscribeOf",t.data$)("ngxSubscribeBeforeAny",n)}},directives:[A.eB,o.O5,o.sg,N.J,f.P],pipes:[q.q,o.Nd,d.N],styles:[".legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}.legality-table .ball-col .pokesprite{filter:grayscale(1) opacity(.3)}.legality-table .ball-col.active .pokesprite{filter:none}.legality-table .ball-col.illegal .pokesprite{filter:brightness(0) opacity(.3)}@media (prefers-color-scheme: dark){.legality-table{color:#fffc;background:#212121}.legality-row:nth-child(2n){background:#2f3232}}@media screen and (max-width: 720px){.legality-row{flex-wrap:wrap}.legality-row .name{width:100%}}\n"],encapsulation:2}),e}()},{path:":worksheetTitle",component:T}]}],H=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[l.Bz.forChild(P)],l.Bz]}),e}(),z=a(4466),V=a(3830),E=a(3679),X=a(7549),D=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[d.N],imports:[[o.ez,H,z.m,V.z,A.lG,E.UX,X.Q]]}),e}()}}])}();