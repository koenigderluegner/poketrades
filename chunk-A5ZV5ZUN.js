import{a as T}from"./chunk-XN47FKCG.js";import{a as S}from"./chunk-C4Q2INUD.js";import{c as b}from"./chunk-2SFUPU6T.js";import"./chunk-UXJUOMTW.js";import"./chunk-H3UP6UFY.js";import{b as I}from"./chunk-OBBANEQV.js";import"./chunk-265GW7FS.js";import"./chunk-O3ZJBYMA.js";import{a as k}from"./chunk-XUDAHI4Z.js";import"./chunk-DMLUC3M3.js";import"./chunk-V5RQJMO3.js";import"./chunk-ZMYL3ITN.js";import{a as w}from"./chunk-5GAHDUDC.js";import"./chunk-TWKCXHJT.js";import"./chunk-ACU4ZWXW.js";import{$a as p,Fb as d,Gb as g,Hb as x,Ib as _,Jb as o,Kb as a,Lb as l,Pb as s,_b as C,ba as f,mc as y,nb as v,nc as u,oc as h,sb as m,zb as c}from"./chunk-CMTCFLWU.js";import"./chunk-ESJYUATY.js";var E=(e,t)=>[e,"valuables",t];function M(e,t){if(e&1&&(l(0,"app-item",6),u(1,"slugify")),e&2){let i=s().$implicit,n=s(2);c("slug",h(1,1,n.getItemMapping(i.config==null?null:i.config.subType)))}}function $(e,t){if(e&1&&(o(0,"app-sub-navi-item",5),u(1,"slugify"),m(2,M,2,3,"app-item",6),a()),e&2){let i=t.$implicit,n=s(2);c("link",y(6,E,"/"+n.spreadsheetId,h(1,4,i.title)))("text",i.title)("meta",""+(i.data==null?null:i.data.length)),p(2),d(i.config!=null&&i.config.subType?2:-1)}}function D(e,t){if(e&1&&(o(0,"ul",3),x(1,$,3,9,"app-sub-navi-item",5,g),a()),e&2){let i=s();p(),_(i.worksheets)}}var V=(()=>{let t=class t{constructor(){this._spreadsheetFacade=f(I),this.subTypeItemMap={events:"cherish",legendaries:"master",shinies:"shiny-charm",competitives:"focus-sash",rngs:"teachy-tv"},this.spreadsheetData$=this._spreadsheetFacade.getCurrentSpreadsheet$()}ngOnInit(){this.spreadsheetData$.subscribe({next:n=>{this.spreadsheetId=n.id,this.worksheets=n.worksheets.filter(r=>r.config?.type==="Valuables")}})}getItemMapping(n){return n?this.subTypeItemMap[n.toLocaleLowerCase()]??"":""}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-index"]],hostAttrs:[1,"view"],decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],[1,"sub-navi"],[1,"view-content"],[3,"link","text","meta"],[3,"slug"]],template:function(r,F){r&1&&(o(0,"header",0),C(1,"valuables"),a(),o(2,"div",1),l(3,"app-grid-controller"),a(),o(4,"aside",2),m(5,D,3,0,"ul",3),a(),o(6,"div",4),l(7,"router-outlet"),a()),r&2&&(p(5),d(F.worksheets?5:-1))},dependencies:[T,S,k,b,w],encapsulation:2});let e=t;return e})();export{V as IndexComponent};
