import{a as z}from"./chunk-4XOZP24L.js";import{a as V,b as T,c as F,f as K,g as q,i as J,j as Q}from"./chunk-DGSIUDVB.js";import{b as L,c as N,i as R}from"./chunk-4R4LBZ6D.js";import"./chunk-W5UVDF5Y.js";import"./chunk-ST6DOQ2W.js";import"./chunk-AQG2LQMJ.js";import{b as _,i as x}from"./chunk-M5ODMMO5.js";import"./chunk-I2HAM4C4.js";import{j as B,k as j}from"./chunk-ZURUUAJ6.js";import{$ as E,Eb as m,Gb as M,Jb as A,Kb as g,Lb as b,Mb as v,Nb as y,Ob as p,Pb as r,Qb as f,Ub as l,Y as k,db as a,dc as S,fc as D,ia as c,mc as G,nc as H,oc as s,pc as d,r as O,rb as C,ub as $,w as P,xb as u}from"./chunk-JPC6FYMI.js";var Z=e=>[e,"breedables","overview"],ee=(e,t)=>[e,"breedables",t];function te(e,t){if(e&1&&(p(0,"app-sub-navi-item",7),s(1,"slugify"),f(2,"app-item",6),s(3,"slugify"),r()),e&2){let o=t.$implicit,i=l(2);m("link",H(8,ee,"/"+i.spreadsheetId,d(1,4,o.title)))("text",o.title)("meta",o.ownedEntries+"/"+(o.data?o.data.length:"???")),a(2),m("slug",d(3,6,o.title))}}function ie(e,t){if(e&1&&(p(0,"ul",3)(1,"app-sub-navi-item",5),f(2,"app-item",6),r(),v(3,te,4,11,"app-sub-navi-item",7,b),r()),e&2){let o=l();a(),m("link",G(3,Z,"/"+o.spreadsheetId))("text","Overview"),a(),m("slug","master"),a(),y(o.worksheets)}}var U=(()=>{let t=class t{constructor(){this.spreadsheetFacade=c(x),this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$()}ngOnInit(){this.spreadsheetData$.subscribe({next:i=>{this.spreadsheetId=i.username?"u/"+i.username:i.id,this.worksheets=i.worksheets.filter(n=>n.config?.type==="Breedables")}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=C({type:t,selectors:[["app-index"]],hostAttrs:[1,"view"],decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],[1,"sub-navi"],[1,"view-content"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta"]],template:function(n,h){n&1&&(p(0,"header",0),S(1,"breedables"),r(),p(2,"div",1),f(3,"app-grid-controller"),r(),p(4,"aside",2),u(5,ie,5,5,"ul",3),r(),p(6,"div",4),f(7,"router-outlet"),r()),n&2&&(a(5),g(h.worksheets?5:-1))},dependencies:[K,V,T,_,N],styles:["@media screen and (max-width: 720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]});let e=t;return e})();var W=(()=>{let t=class t{transform(i){return i}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=$({name:"castBreedable",type:t,pure:!0});let e=t;return e})();function ne(e,t){if(e&1&&(f(0,"app-grid-item",1),s(1,"castBreedable")),e&2){let o=t.$implicit;m("pokemon",d(1,1,o))}}function oe(e,t){if(e&1&&(p(0,"app-grid",0),v(1,ne,2,3,"app-grid-item",1,A().trackBy,!0),r()),e&2){let o=l(),i=l();m("appearance",o),a(),y(i.worksheet.data)}}function re(e,t){if(e&1&&u(0,oe,3,1,"app-grid",0),e&2){let o=l();g(o.worksheet?0:-1)}}var X=(()=>{let t=class t{constructor(){this.spreadsheetFacade=c(x),this.route=c(L),this.slugifyPipe=c(_),this.gridService=c(F),this.subscriptions=[],this.gridService.updateHideAppearanceControl(!1),this.gridService.updateHideOwnedStatusControl(!1),this.gridAppearance$=this.gridService.getGridAppearance$()}ngOnInit(){this.route.paramMap.pipe(E(i=>this.worksheetTitle=i.get("worksheetTitle")??""),k(()=>this.spreadsheetFacade.getCurrentSpreadsheet$())).subscribe({next:i=>{this.worksheet=i.worksheets.filter(n=>this.slugifyPipe.transform(n.title)===this.worksheetTitle)?.[0]}})}trackBy(i,n){return n.id}ngOnDestroy(){for(let i of this.subscriptions)i.unsubscribe()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=C({type:t,selectors:[["app-ball"]],decls:2,vars:3,consts:[[3,"appearance"],[3,"pokemon"]],template:function(n,h){if(n&1&&(u(0,re,1,1),s(1,"async")),n&2){let w;g((w=d(1,1,h.gridAppearance$))?0:-1,w)}},dependencies:[J,Q,B,W],encapsulation:2});let e=t;return e})();function ae(e,t){if(e&1&&(p(0,"div",5),s(1,"slugify"),f(2,"app-item",6),s(3,"slugify"),r()),e&2){let o,i=t.$implicit,n=l().$implicit,h=l(2);M("active",(o=h.entries[i.key][d(1,5,n.pokemon)])==null?null:o.isOwned)("illegal",n[i.key]===null),a(2),m("slug",d(3,7,i.key))}}function pe(e,t){if(e&1&&(p(0,"div",1)(1,"div",2),f(2,"app-pokemon",3),s(3,"nameToSlug"),S(4),r(),v(5,ae,4,9,"div",4,b),s(7,"keyvalue"),r()),e&2){let o=t.$implicit,i=l(2);a(2),m("slug",d(3,2,o.pokemon)),a(2),D(" ",o.pokemon," "),a(),y(d(7,4,i.entries))}}function le(e,t){if(e&1&&v(0,pe,8,6,"div",1,b),e&2){let o=l();y(o.legality)}}function se(e,t){e&1&&(p(0,"div",0),u(1,le,2,0),r()),e&2&&(a(),g(t?1:-1))}var Y=(()=>{let t=class t{constructor(){this.facade=c(x),this.db=c(R),this.gridService=c(F),this.gridService.updateHideAppearanceControl(!0),this.gridService.updateHideOwnedStatusControl(!0),this.data$=P([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe(k(i=>O({legality:i[0],entries:i[1].overviewEntries??{}})))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=C({type:t,selectors:[["app-overview"]],decls:2,vars:3,consts:[[1,"legality-table"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],[1,"ball-col",3,"active","illegal"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(n,h){if(n&1&&(u(0,se,2,1,"div",0),s(1,"async")),n&2){let w;g((w=d(1,1,h.data$))?0:-1,w)}},dependencies:[B,q,z,j,T,_],styles:[`.legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}.legality-table .ball-col .pokesprite{filter:grayscale(1) opacity(.3)}.legality-table .ball-col.active .pokesprite{filter:none}.legality-table .ball-col.illegal .pokesprite{filter:brightness(0) opacity(.3)}@media (prefers-color-scheme: dark){.legality-table{color:#fffc;background:#212121}.legality-row:nth-child(2n){background:#2f3232}}@media screen and (max-width: 720px){.legality-row{flex-wrap:wrap}.legality-row .name{width:100%}}
`],encapsulation:2});let e=t;return e})();var Ue=[{path:"",component:U,children:[{path:"overview",component:Y},{path:":worksheetTitle",component:X}]}];export{Ue as routes};
