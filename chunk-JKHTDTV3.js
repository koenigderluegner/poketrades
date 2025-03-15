import{a as x,b as A}from"./chunk-KPK2DUCE.js";import{a as L,b as C}from"./chunk-X6KX2NY2.js";import{R as v,U as H,X as y,ba as g,g as m,k,l as B,o as $,z as D}from"./chunk-IDMNUBYU.js";var I={production:!0,googleApiKey:"AIzaSyChHDClwdlSOIs8rrjoQrzOMpmsQTgg87E"};var P=(()=>{let o=class o{constructor(){this._httpClient=g(C),this._spreadsheetFields=["spreadsheetId","properties.title","sheets.properties","sheets.properties.sheetId","sheets.properties.title","sheets.properties.gridProperties.rowCount","sheets.properties.gridProperties.frozenRowCount","sheets.properties.gridProperties.columnCount","sheets.properties.gridProperties.frozenColumnCount"]}getSpreadsheet(t,e){return this._httpClient.get(`https://sheets.googleapis.com/v4/spreadsheets/${t}?includeGridData=false&fields=${this._spreadsheetFields.join(",")}&key=${e}`)}getBatchValues(t,e,r){let s=new L;for(let i of e)s=s.append("ranges",i);return this._httpClient.get(`https://sheets.googleapis.com/v4/spreadsheets/${t}/values:batchGet?key=${r}`,{params:s})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let c=o;return c})();var N=(()=>{let o=class o{constructor(){this.httpClient=g(C),this.gss=g(P),this.slugifyPipe=g(x),this.bannedSheets=["Welcome","Living Dex","Shiny Living Dex","Breedables Overview","Alcremie","Tool:Breeding","Tool: Move Lookup","Breedables Ball Legality","Ban Checker","DB:Abilities","DB:Balls","DB:Pokemon","DB:LevelMoves","DB:Items","DB:Misc","DB:Moves","DB:Types","DB:Natures","Resource Gen7 (Backup)","Ban List"],this.possibleHeaders=["dex","name","ability","owned","hasHA","ratio","move1","move2","move3","move4","nature","ball","gender","ot","amount","notes","event","isShiny","level","hp","atk","def","spa","spd","spe","item","id","dates","proof","tradeHistory","disclosure","lang","evhp","evatk","evdef","evspa","evspd","evspe"],this.allowedConfigs={type:["Valuables","Breedables"],subType:["RNGs","Legendaries","Shinies","Competitives","Events"],ball:["Dream","Safari","Sport","Beast","Fast","Moon","Heavy","Love","Lure","Level","Friend","Pok\xE9","Great","Ultra","Premier","Dive","Luxury","Nest","Net","Repeat","Timer","Quick","Dusk","Heal"],includeShinies:["true","false"]}}getSpreadsheet(t,e){let r;return this.gss.getSpreadsheet(t,e).pipe(v(s=>{r={id:t,title:s.properties.title,worksheets:[]};let i=s.sheets.filter(n=>!this.bannedSheets.includes(n.properties.title));return this._getWorksheets(t,i)}),v(s=>(r.worksheets=s,k(r))))}getConfigs(t,e,r){return this.gss.getBatchValues(t,e,I.googleApiKey).pipe(v(s=>{let i=[];for(let n of s.valueRanges){let h=n.values?.[0]?.indexOf("config")??-1;if(h===-1)continue;let d=n.values.map(l=>l[h]).filter(Boolean);d.shift();let f=this.getWorksheetConfig(d),S=n.range.split("!")[0],a=this.slugifySheetName(S),p=r.find(l=>this.slugifySheetName(l.properties.title)===a),b=0,u=0;if(n.values[0].some((l,w)=>{if(this.possibleHeaders.includes(l))return b=w,!0}),n.values[0].slice().reverse().some((l,w)=>{if(this.possibleHeaders.includes(l))return u=n.values[0].length-1-w,!0}),f.type!=="unknown"){f.colIndex={min:b,max:u};let l={id:"0",title:S,slug:a,config:f,gridProperties:p?.properties.gridProperties??{columnCount:0,rowCount:0},headerIndex:n.values[0].slice(b,u+1),valueRange:""},w=`${this.numberToColumnName(l.config?.colIndex.min??0)}${(l.gridProperties.frozenRowCount??0)+1}`,O=`${this.numberToColumnName(l.config?.colIndex.max??0)}${l.gridProperties.rowCount}`;l.valueRange=`${l.title}!${w}:${O}`,l.title=S.replace(/'/g,""),i.push(l)}}return k(i)}))}_getWorksheets(t,e){let r=e.map(s=>`${s.properties.title}!A1:ZZ5`);return this.getConfigs(t,r,e).pipe(v(s=>{let i=s.map(n=>n.valueRange);return this.getWorksheetValues(t,i,s)}))}numberToColumnName(t){let i="";for(;t>=0;)i=String.fromCharCode(t%26+97)+i,t=Math.floor(t/26)-1;return i.toUpperCase()}slugifySheetName(t){let e=this.slugifyPipe.transform(t);return e[0]==="'"&&(e=e.substr(1)),e[e.length-1]==="'"&&(e=e.substr(0,e.length-1)),e}getWorksheetConfig(t){let e={type:"unknown",colIndex:{min:0,max:0}},r=0,s;for(let i of t){if(s=i.split(":"),s.length===2){let[n,h]=s;if(n in this.allowedConfigs){let d=this.allowedConfigs[n];d&&d.includes(h)&&(e[n]=n==="includeShinies"?A(h):h)}}r++}return e}getWorksheetValues(t,e,r){return this.gss.getBatchValues(t,e,I.googleApiKey).pipe(v(s=>(s.valueRanges.forEach(i=>{let n=i.range.split("!")[0],h=this.slugifySheetName(n),d=r.find(f=>this.slugifySheetName(f.slug)===h);if(d){let f=[];i.values?.forEach(S=>{let a={moves:[],evs:{},ivs:{}};S.forEach((p,b)=>{let u=d.headerIndex[b].trim();if(!(u===""||u==="dex"&&p.trim()==="")&&!["icon","egg"].includes(u))switch(u){case"hasHA":a.hasHiddenAbility=p.trim()==="x";break;case"move1":case"move2":case"move3":case"move4":Array.isArray(a.moves)&&a.moves.push(p);break;case"owned":a.isOwned=p.trim()==="x";break;case"hp":case"atk":case"def":case"spa":case"spd":case"spe":a.ivs&&(a.ivs[u]=p);break;case"evhp":case"evatk":case"evdef":case"evspa":case"evspd":case"evspe":a.evs&&(a.evs[u]=p);break;case"isShiny":a.isShiny=p.trim()!=="";break;case"ball":a.ball=p.replace(" Ball","").trim();break;default:a[u]=p}}),a.name&&(a.iconSlug=this._generateIconSlug(a.name)),a.isOwned=a.isOwned||d.config?.type==="Valuables",a.dex&&f.push(a)}),d.data=f}}),k(r))))}_generateIconSlug(t){let e=t.toLowerCase().replace("nidoran \u2640","nidoran-f");return e=e.replace("nidoran \u2642","nidoran-m"),e=new x().transform(e),e=e.replace("-antique",""),e=e.replace("-gigantamax","-gmax"),e=e.replace("-low-key-gmax","-gmax"),e}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let c=o;return c})();var se=(()=>{let o=class o{constructor(){this.spreadsheetService=g(N),localStorage.getItem("spreadsheetHistory")?this._searchHistory=new m(JSON.parse(localStorage.getItem("spreadsheetHistory")??[].toString())):(localStorage.setItem("spreadsheetHistory",JSON.stringify([])),this._searchHistory=new m([])),this._currentSpreadsheet$=new m({title:"",hasBreedables:!1,hasValuables:!1,worksheets:[],id:""}),this._isDefaultSheet$=new m(!0),this._isLoading$=new m(!1)}getCurrentSpreadsheet$(){return this._currentSpreadsheet$}searchSpreadsheet(t,e){return this.loadSpreadsheet(t,e).pipe(H(r=>this.saveToHistory(r)))}loadSpreadsheet(t,e){return this.updateIsLoading(!0),this.spreadsheetService.getSpreadsheet(t,e).pipe($(r=>{for(let s of r.worksheets)if(s.data){if(s.ownedEntries=(s.data??[]).filter(i=>i.isOwned).length,s.config?.type==="Valuables"&&s.config?.subType==="Shinies")for(let i of s.data)i.isShiny=!0;if(s.config?.type==="Breedables"&&s.config?.ball)for(let i of s.data)i.ball=s.config?.ball}return r.hasBreedables=r.worksheets.some(s=>s.config?.type==="Breedables"),r.hasValuables=r.worksheets.some(s=>s.config?.type==="Valuables"),r.hasBreedables&&(r.overviewEntries=this.buildOverviewEntries(r.worksheets.filter(s=>s.config?.type==="Breedables"&&s.config?.ball))),this.updateIsLoading(!1),r}),D(r=>(this.updateIsLoading(!1),console.error(r),B(this.convertApiErrors(""+r.status)))))}updateCurrentSpreadsheet(t){return this.updateIsDefaultSpreadhseet(!1),this._currentSpreadsheet$.next(t),this.getCurrentSpreadsheet$()}updateIsDefaultSpreadhseet(t){return this._isDefaultSheet$.next(t),this._isDefaultSheet$}updateIsLoading(t){return this._isLoading$.next(t),this.isLoading$()}isLoading$(){return this._isLoading$}isDefaultSpreadhseet$(){return this._isDefaultSheet$}getSpreadsheetHistory$(){return this._searchHistory}convertApiErrors(t){let e={state:"unknown",message:""};switch(t){case"429":e.message="Too many requests: Google request limit reached, try again later.";break;default:e.message="Unknown Error: please check the given ID and publish your sheet if not already.";break}return e}saveToHistory(t){let e=JSON.parse(localStorage.getItem("spreadsheetHistory")??[].toString()),r=e.findIndex(s=>s.id===t.id);r!==-1&&e.splice(r,1),e.unshift({title:t.title,id:t.id,saveDate:new Date().toTimeString()}),localStorage.setItem("spreadsheetHistory",JSON.stringify(e)),this._searchHistory.next(e)}buildOverviewEntries(t){let e={};return t.forEach(r=>{let s=r.config?.ball?.toLowerCase(),i=r.data;s&&(e[s]={},i&&i.forEach(n=>{let h=n;e[s][h.iconSlug]=h}))}),e}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let c=o;return c})();export{I as a,se as b};
