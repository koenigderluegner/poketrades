import{j as l}from"./chunk-DMLUC3M3.js";import{Q as o,U as s,X as i,g as e}from"./chunk-CMTCFLWU.js";var c=(()=>{let r=class r{constructor(){let t=localStorage.getItem("gridAppearanceType"),n=JSON.parse(localStorage.getItem("ownedStatus")??"[]");t=t!=="detailed"&&t!=="normal"?"minimal":t,this.gridAppearance=new e(t),this._ownedStatusControl=new l(n,{nonNullable:!0}),this.filter=new e(""),this.sorting=new e({id:"",disableClear:!1,start:"asc"}),this.categories=new e([]),this.hideAppearanceControl=new e(!1),this.hideFilterControl=new e(!1),this.hideSortingControl=new e(!1),this.hideOwnedStatusControl=new e(!1)}getGridAppearance$(){return this.gridAppearance.asObservable()}updateGridAppearance(t){this.gridAppearance.next(t),localStorage.setItem("gridAppearanceType",t)}getFilter$(){return this.filter.asObservable()}updateFilter(t){this.filter.next(t)}getSorting$(){return this.sorting.asObservable()}updateSorting(t){this.sorting.next(t)}getCategories$(){return this.categories.asObservable()}updateCategories(t){this.categories.next(t)}getOwnedStatusControl(){return this._ownedStatusControl}getOwnedStatus$(){return this._ownedStatusControl.valueChanges.pipe(o(this._ownedStatusControl.value),s(t=>localStorage.setItem("ownedStatus",JSON.stringify(t))))}updateOwnedStatus(t){return this._ownedStatusControl.setValue(t,{emitEvent:!0})}getHideOwnedStatusControl$(){return this.hideOwnedStatusControl.asObservable()}updateHideOwnedStatusControl(t){return this.hideOwnedStatusControl.next(t)}getHideAppearanceControl$(){return this.hideAppearanceControl.asObservable()}updateHideAppearanceControl(t){return this.hideAppearanceControl.next(t)}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();export{c as a};
