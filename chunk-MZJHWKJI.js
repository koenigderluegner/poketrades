import{a as S,b as T}from"./chunk-BZRPRIY6.js";import{c as b}from"./chunk-6V3CUBVO.js";import"./chunk-3IAIRKWP.js";import"./chunk-LNBEV2UZ.js";import{b as I}from"./chunk-JKHTDTV3.js";import"./chunk-265GW7FS.js";import{a as k}from"./chunk-OGAS3D4J.js";import"./chunk-BZTVD7MR.js";import"./chunk-U7UYY72G.js";import{a as w}from"./chunk-KPK2DUCE.js";import"./chunk-7SLVFYE5.js";import"./chunk-X6KX2NY2.js";import"./chunk-GCQOBVVX.js";import{Db as d,Eb as g,Fb as x,Gb as _,Hb as o,Ib as a,Jb as l,Nb as s,Yb as C,Za as p,ba as f,gc as y,hc as u,ic as h,lb as v,qb as m,xb as c}from"./chunk-IDMNUBYU.js";import"./chunk-ESJYUATY.js";var E=(e,t)=>[e,"valuables",t];function M(e,t){if(e&1&&(l(0,"app-item",6),u(1,"slugify")),e&2){let i=s().$implicit,n=s(2);c("slug",h(1,1,n.getItemMapping(i.config==null?null:i.config.subType)))}}function $(e,t){if(e&1&&(o(0,"app-sub-navi-item",5),u(1,"slugify"),m(2,M,2,3,"app-item",6),a()),e&2){let i=t.$implicit,n=s(2);c("link",y(6,E,"/"+n.spreadsheetId,h(1,4,i.title)))("text",i.title)("meta",""+(i.data==null?null:i.data.length)),p(2),d(i.config!=null&&i.config.subType?2:-1)}}function D(e,t){if(e&1&&(o(0,"ul",3),x(1,$,3,9,"app-sub-navi-item",5,g),a()),e&2){let i=s();p(),_(i.worksheets)}}var V=(()=>{let t=class t{constructor(){this._spreadsheetFacade=f(I),this.subTypeItemMap={events:"cherish",legendaries:"master",shinies:"shiny-charm",competitives:"focus-sash",rngs:"teachy-tv"},this.spreadsheetData$=this._spreadsheetFacade.getCurrentSpreadsheet$()}ngOnInit(){this.spreadsheetData$.subscribe({next:n=>{this.spreadsheetId=n.id,this.worksheets=n.worksheets.filter(r=>r.config?.type==="Valuables")}})}getItemMapping(n){return n?this.subTypeItemMap[n.toLocaleLowerCase()]??"":""}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-index"]],hostAttrs:[1,"view"],decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],[1,"sub-navi"],[1,"view-content"],[3,"link","text","meta"],[3,"slug"]],template:function(r,F){r&1&&(o(0,"header",0),C(1,"valuables"),a(),o(2,"div",1),l(3,"app-grid-controller"),a(),o(4,"aside",2),m(5,D,3,0,"ul",3),a(),o(6,"div",4),l(7,"router-outlet"),a()),r&2&&(p(5),d(F.worksheets?5:-1))},dependencies:[T,S,k,b,w],encapsulation:2});let e=t;return e})();export{V as IndexComponent};
