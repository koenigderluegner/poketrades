!function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(i,n,t){return n&&e(i.prototype,n),t&&e(i,t),i}function n(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"21aE":function(e,i,t){"use strict";t.d(i,"a",(function(){return p}));var o=t("ofXK"),a=t("C7wK"),d=t("PCNd"),c=t("3Pt+"),r=t("XJ2P"),s=t("fXoL"),p=function(){var e=function e(){n(this,e)};return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(i){return new(i||e)},imports:[[o.c,a.a,d.a,c.l,r.e]]}),e}()},C7wK:function(e,i,t){"use strict";t.d(i,"a",(function(){return d}));var o=t("ofXK"),a=t("fXoL"),d=function(){var e=function e(){n(this,e)};return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(i){return new(i||e)},imports:[[o.c]]}),e}()},DtKQ:function(e,i,t){"use strict";t.d(i,"a",(function(){return a}));var o=t("fXoL"),a=function(){var e=function e(){n(this,e),this.pokesprite=!0,this.pokemon=!0,this.shiny=!1};return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-pokemon"]],hostVars:8,hostBindings:function(e,i){2&e&&(o.Bb(i.slug),o.Cb("pokesprite",i.pokesprite)("pokemon",i.pokemon)("shiny",i.shiny))},inputs:{shiny:"shiny",slug:"slug"},decls:0,vars:0,template:function(e,i){},styles:[".pokesprite.pokemon{z-index:1}"],encapsulation:2}),e}()},Ludi:function(e,t,o){"use strict";o.d(t,"a",(function(){return ee}));var a=o("zttm"),d=o("fXoL"),c=o("ofXK"),r=o("DtKQ"),s=["pokemon",""];function p(e,i){if(1&e&&(d.Pb(0,"div",1),d.Lb(1,"app-pokemon",2),d.Ob()),2&e){var n=d.Yb();d.zb(1),d.ec("shiny",n.pokemon.isShiny)("slug",n.pokemon.iconSlug)}}var b,l,g=((l=function(){function e(){n(this,e),this.isGridItem=!0}return i(e,[{key:"inactive",get:function(){var e;return!(null===(e=this.pokemon)||void 0===e?void 0:e.isOwned)}}]),e}()).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=d.Eb({type:l,selectors:[["app-minimal","pokemon",""]],hostVars:4,hostBindings:function(e,i){2&e&&d.Cb("grid-item",i.isGridItem)("inactive",i.inactive)},inputs:{pokemon:"pokemon"},attrs:s,decls:1,vars:1,consts:[["class","icon",4,"ngIf"],[1,"icon"],[3,"shiny","slug"]],template:function(e,i){1&e&&d.sc(0,p,2,2,"div",0),2&e&&d.ec("ngIf",i.pokemon)},directives:[c.l,r.a],styles:[".grid.minimal{grid-gap:6px;grid-template-columns:repeat(auto-fit,40px)}.grid.minimal .grid-item{height:40px;width:40px;border:none;background:hsla(0,0%,100%,.22);border-radius:5px}.grid.minimal .grid-item.inactive .pokesprite{filter:grayscale(1) opacity(.2)}.grid.minimal .grid-item .icon{width:68px;height:56px;margin-left:-14px;flex-basis:40px;margin-top:-16px}"],encapsulation:2}),l),u=((b=function(){function e(){var i;n(this,e),this.classes="grid-item",this.isInactive=!(null===(i=this.pokemon)||void 0===i?void 0:i.isOwned)}return i(e,[{key:"pokemon",get:function(){return this._pokemon},set:function(e){var i;this._pokemon=e,this.isInactive=!(null===(i=this._pokemon)||void 0===i?void 0:i.isOwned)}}]),e}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=d.Eb({type:b,selectors:[["app-normal"]],hostVars:4,hostBindings:function(e,i){2&e&&(d.Bb(i.classes),d.Cb("inactive",i.isInactive))},inputs:{pokemon:"pokemon"},decls:9,vars:5,consts:[[1,"icon-wrapper"],["alt","",1,"icon-foundation",3,"src"],[1,"icon"],[3,"shiny","slug"],[1,"information"]],template:function(e,i){1&e&&(d.Pb(0,"div",0),d.Lb(1,"img",1),d.Pb(2,"div",2),d.Lb(3,"app-pokemon",3),d.Ob(),d.Ob(),d.Pb(4,"div",4),d.Pb(5,"div"),d.uc(6),d.Ob(),d.Pb(7,"div"),d.uc(8),d.Ob(),d.Ob()),2&e&&(d.zb(1),d.ec("src","assets/images/pokesprite-pokeball.svg",d.nc),d.zb(2),d.ec("shiny",!(null==i.pokemon||!i.pokemon.isShiny))("slug",null==i.pokemon?null:i.pokemon.iconSlug),d.zb(3),d.vc(null==i.pokemon?null:i.pokemon.name),d.zb(2),d.vc(null==i.pokemon?null:i.pokemon.ability))},directives:[r.a],styles:[".grid.normal{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:15px}.grid.normal .grid-item{line-height:20px;color:#000;background:#fff;border-radius:42px;margin:0;height:auto;display:grid;grid-template-columns:68px 1fr 68px;box-shadow:0 3px 5px rgba(0,0,0,.4);font-family:Kulim Park,sans-serif}.grid.normal .grid-item .information div{height:25px;display:flex;align-items:center}.grid.normal .grid-item.inactive{color:rgba(0,0,0,.3)}.grid.normal .grid-item.inactive .icon-wrapper{filter:grayscale(1) opacity(.1)}@media screen and (max-width:720px){.grid.normal{grid-template-columns:1fr}}.icon-wrapper{position:relative;height:50px;width:68px}.icon-wrapper .icon-foundation{position:absolute;left:14px;bottom:5px;width:40px;opacity:.3}.icon-wrapper .icon{position:absolute;bottom:5px}.icon-wrapper .item{position:absolute;bottom:0;right:2px}"],encapsulation:2}),b),m=o("cp0P"),f=o("LRne"),v=o("wBCF"),k=o("XJ2P"),h=o("eMGv");function y(e,i){if(1&e&&(d.Pb(0,"app-type-badge",17),d.uc(1),d.Ob()),2&e){var n=i.$implicit;d.ec("type",n),d.zb(1),d.vc(n)}}function x(e,i){if(1&e&&(d.Nb(0),d.sc(1,y,2,2,"app-type-badge",16),d.Mb()),2&e){var n=d.Yb().$implicit;d.zb(1),d.ec("ngForOf",n.types)}}function w(e,i){1&e&&(d.Pb(0,"app-type-badge",18),d.uc(1),d.Ob()),2&e&&(d.zb(1),d.vc("unknown"))}function z(e,i){1&e&&(d.Pb(0,"div",22),d.uc(1,"IVs"),d.Ob())}function O(e,i){1&e&&(d.Pb(0,"div",22),d.uc(1,"EVs"),d.Ob())}function P(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.hp)}}function I(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.hp)}}function C(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.atk)}}function Y(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.atk)}}function L(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.def)}}function S(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.def)}}function B(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.spa)}}function F(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.spa)}}function M(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.spd)}}function X(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.spd)}}function E(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.ivs.spe)}}function $(e,i){if(1&e&&(d.Pb(0,"div",22),d.uc(1),d.Ob()),2&e){var n=d.Yb(4);d.zb(1),d.vc(n.pokemon.evs.spe)}}function N(e,i){if(1&e&&(d.Pb(0,"div",19),d.Pb(1,"div",20),d.uc(2,"Stats"),d.Ob(),d.sc(3,z,2,0,"div",21),d.sc(4,O,2,0,"div",21),d.Pb(5,"div",20),d.uc(6,"HP"),d.Ob(),d.sc(7,P,2,1,"div",21),d.sc(8,I,2,1,"div",21),d.Pb(9,"div",20),d.uc(10,"Attack"),d.Ob(),d.sc(11,C,2,1,"div",21),d.sc(12,Y,2,1,"div",21),d.Pb(13,"div",20),d.uc(14,"Defense"),d.Ob(),d.sc(15,L,2,1,"div",21),d.sc(16,S,2,1,"div",21),d.Pb(17,"div",20),d.uc(18,"Sp. Atk"),d.Ob(),d.sc(19,B,2,1,"div",21),d.sc(20,F,2,1,"div",21),d.Pb(21,"div",20),d.uc(22,"Sp. Def"),d.Ob(),d.sc(23,M,2,1,"div",21),d.sc(24,X,2,1,"div",21),d.Pb(25,"div",20),d.uc(26,"Speed"),d.Ob(),d.sc(27,E,2,1,"div",21),d.sc(28,$,2,1,"div",21),d.Ob()),2&e){var n=d.Yb(3);d.Cb("ev-iv",n.pokemon.ivs&&n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs),d.zb(3),d.ec("ngIf",n.pokemon.ivs),d.zb(1),d.ec("ngIf",n.pokemon.evs)}}function j(e,i){if(1&e&&d.Lb(0,"li"),2&e){var n=i.$implicit,t=d.Yb(4);d.Cb("on",n<t.pokemon.dynamaxLevel)}}function A(e,i){1&e&&(d.Pb(0,"div",23),d.Pb(1,"div",13),d.uc(2,"Dynamax Level"),d.Ob(),d.Pb(3,"ul"),d.sc(4,j,1,2,"li",24),d.Ob(),d.Ob()),2&e&&(d.zb(4),d.ec("ngxRepeat",10))}function K(e,i){1&e&&(d.Pb(0,"span",29),d.Lb(1,"app-pokemon",30),d.Ob()),2&e&&(d.zb(1),d.ec("slug","egg"))}function V(e,i){if(1&e&&(d.Pb(0,"div",27),d.Pb(1,"span"),d.uc(2),d.Ob(),d.sc(3,K,2,1,"span",28),d.Ob()),2&e){var n=i.$implicit,t=i.index,o=d.Yb().ngIf,a=d.Yb().ngIf;d.Bb("move-"+(null!=a[t]&&a[t].type?a[t].type:"unknown")),d.zb(2),d.vc(n),d.zb(1),d.ec("ngIf",o[t])}}function G(e,i){if(1&e&&(d.Nb(0),d.sc(1,V,4,4,"div",26),d.Mb()),2&e){var n=d.Yb(4);d.zb(1),d.ec("ngForOf",n.pokemon.moves)}}function D(e,i){if(1&e&&(d.Pb(0,"div",25),d.sc(1,G,2,1,"ng-container",0),d.Zb(2,"async"),d.Ob()),2&e){var n=d.Yb(3);d.zb(1),d.ec("ngIf",d.ac(2,1,n.isEggMove$))}}function T(e,i){if(1&e&&(d.Nb(0),d.Pb(1,"div",2),d.uc(2),d.Ob(),d.Pb(3,"div",3),d.Pb(4,"div",4),d.Lb(5,"img",5),d.Lb(6,"app-pokemon",6),d.Ob(),d.Pb(7,"div",7),d.Pb(8,"div",8),d.sc(9,x,2,1,"ng-container",0),d.sc(10,w,2,1,"app-type-badge",9),d.Ob(),d.Ob(),d.Ob(),d.sc(11,N,29,16,"div",10),d.sc(12,A,5,1,"div",11),d.Pb(13,"div",12),d.Pb(14,"div",13),d.uc(15,"Ability"),d.Ob(),d.Pb(16,"span",14),d.uc(17),d.Ob(),d.Ob(),d.sc(18,D,3,3,"div",15),d.Zb(19,"async"),d.Mb()),2&e){var n=i.$implicit,t=d.Yb(2);d.zb(2),d.vc(t.pokemon.name),d.zb(4),d.ec("shiny",t.pokemon.isShiny)("slug",t.pokemon.iconSlug),d.zb(3),d.ec("ngIf",n),d.zb(1),d.ec("ngIf",!n),d.zb(1),d.ec("ngIf",t.pokemon.ivs||t.pokemon.evs),d.zb(1),d.ec("ngIf",t.pokemon.dynamaxLevel),d.zb(5),d.vc(t.pokemon.ability),d.zb(1),d.ec("ngIf",d.ac(19,9,t.moves$))}}function J(e,i){if(1&e&&(d.Nb(0),d.sc(1,T,20,11,"ng-container",1),d.Mb()),2&e){var n=d.Yb();d.zb(1),d.ec("ngxSubscribeOf",n.dbpokemon$)}}var H,Q=((H=function(){function e(i){n(this,e),this.databaseFacadeService=i,this.isGridItem=!0}return i(e,[{key:"ngOnInit",value:function(){this.initPokemonAttributes()}},{key:"ngOnChanges",value:function(e){this.initPokemonAttributes()}},{key:"initPokemonAttributes",value:function(){var e,i=this;this.pokemon&&(this.dbpokemon$=this.databaseFacadeService.findPokemon(null===(e=this.pokemon)||void 0===e?void 0:e.name),this.moves$=Object(m.a)(this.pokemon.moves.map((function(e){return i.databaseFacadeService.findMove(e)}))),this.isEggMove$=Object(m.a)(this.pokemon.moves.map((function(e){return i.pokemon?i.databaseFacadeService.isEggMove(i.pokemon.name,e):Object(f.a)(!1)}))))}},{key:"inactive",get:function(){var e;return!(null===(e=this.pokemon)||void 0===e?void 0:e.isOwned)}}]),e}()).\u0275fac=function(e){return new(e||H)(d.Kb(v.a))},H.\u0275cmp=d.Eb({type:H,selectors:[["app-detailed"]],hostVars:4,hostBindings:function(e,i){2&e&&d.Cb("grid-item",i.isGridItem)("inactive",i.inactive)},inputs:{pokemon:"pokemon"},features:[d.xb],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngxSubscribe","ngxSubscribeOf"],[1,"detailed-header","dark-bg"],[1,"detailed-species-info","d-flex"],[1,"detailed-species-icon"],["alt","","src","assets/images/pokesprite-pokeball.svg",1,"icon-foundation"],[3,"shiny","slug"],[1,"detailed-pokemon-info","row"],[1,"detailed-types"],["type","unknown","size","small",4,"ngIf"],["class","detailed-stats row ",3,"ev-iv",4,"ngIf"],["class","detailed-dynamax row ",4,"ngIf"],[1,"detailed-ability","row"],[1,"detailed-label","dark-bg"],[1,"detailed-text"],["class","detailed-moves",4,"ngIf"],["size","small",3,"type",4,"ngFor","ngForOf"],["size","small",3,"type"],["type","unknown","size","small"],[1,"detailed-stats","row"],[1,"detailed-label","dark-bg","t-align-center"],["class","",4,"ngIf"],[1,""],[1,"detailed-dynamax","row"],[3,"on",4,"ngxRepeat"],[1,"detailed-moves"],["class","detailed-move d-flex",3,"class",4,"ngFor","ngForOf"],[1,"detailed-move","d-flex"],["class","egg-icon",4,"ngIf"],[1,"egg-icon"],[3,"slug"]],template:function(e,i){1&e&&d.sc(0,J,2,1,"ng-container",0),2&e&&d.ec("ngIf",i.pokemon&&i.dbpokemon$)},directives:[c.l,k.f,r.a,c.k,h.a,k.c],pipes:[c.b],styles:[".grid.detailed{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:15px}.grid.detailed .grid-item{color:#000;flex-direction:column;background:hsla(0,0%,100%,.95);margin:0;height:auto;display:flex;box-shadow:0 3px 5px rgba(0,0,0,.4);transition:all .3s}.grid.detailed .grid-item:hover{transform:translateY(-5px);box-shadow:0 3px 10px 0 rgba(0,0,0,.4)}.grid.detailed .grid-item.inactive{filter:grayscale(1) opacity(.5)}.grid.detailed .grid-item.inactive:hover{filter:grayscale(0) opacity(1)}.grid.detailed .grid-item.inactive .type-badge{filter:grayscale(1)}.grid.detailed .grid-item .detailed-species-info{margin-top:-12px}.grid.detailed .grid-item .detailed-species-icon{position:relative;display:flex;width:90px;justify-content:center;align-items:center}.grid.detailed .grid-item .icon-foundation{position:absolute;left:50%;bottom:3px;width:40px;opacity:.3;transform:translateX(-20px)}.grid.detailed .grid-item .detailed-species{border-bottom:4px solid transparent}.grid.detailed .grid-item .row{margin:0 0 3px}.grid.detailed .grid-item .dark-bg{background:#dbdbdb}.grid.detailed .grid-item .detailed-types{border-top:14px solid transparent}.grid.detailed .grid-item .detailed-pokemon-info{padding:4px 10px;display:flex;align-items:center}.grid.detailed .grid-item .detailed-pokemon-info .detailed-label{margin-left:-10px}.grid.detailed .grid-item .detailed-pokemon-info .type-badge{margin-right:5px}.grid.detailed .grid-item .detailed-header{padding:7px;font-weight:700}.grid.detailed .grid-item .detailed-stats{display:grid;grid-template-columns:80px 1fr;grid-gap:3px 10px}.grid.detailed .grid-item .detailed-stats.ev-iv{grid-template-columns:80px 1fr 1fr}.grid.detailed .grid-item .detailed-label{padding:4px 10px;width:80px;text-align:center}.grid.detailed .grid-item .inactive{color:rgba(0,0,0,.3)}.grid.detailed .grid-item .inactive .icon-wrapper{filter:grayscale(1) opacity(.1)}.detailed-text{display:flex;justify-content:center;padding:4px 10px}.detailed-ability,.detailed-dynamax{display:flex}.detailed-dynamax .detailed-label,.detailed-dynamax ul{flex-basis:50%}.detailed-dynamax ul{display:flex;justify-content:space-evenly;border-left:15px solid transparent;border-right:5px solid transparent}.detailed-dynamax ul li{transform:skewX(-20deg);height:100%;width:7%;background:#e8e8e8}.detailed-dynamax ul li.on:first-child{background:#33eafa}.detailed-dynamax ul li.on:nth-child(2){background:#5adffe}.detailed-dynamax ul li.on:nth-child(3){background:#65c2fd}.detailed-dynamax ul li.on:nth-child(4){background:#52a3f4}.detailed-dynamax ul li.on:nth-child(5){background:#987afc}.detailed-dynamax ul li.on:nth-child(6){background:#b977fd}.detailed-dynamax ul li.on:nth-child(7){background:#dc51ea}.detailed-dynamax ul li.on:nth-child(8){background:#f631be}.detailed-dynamax ul li.on:nth-child(9){background:#e8288d}.detailed-dynamax ul li.on:nth-child(10){background:#e52674}.detailed-move{margin-bottom:3px}.detailed-moves{padding:0 4px}.detailed-moves .egg-icon{overflow:hidden;height:21px;width:42px;display:flex;align-items:flex-end}.detailed-moves .egg-icon .pkspr.egg{margin-left:-16px}[class*=move-]{padding:6px 6px 6px 36px;border-radius:3px;background-repeat:no-repeat;background-blend-mode:screen;background-size:24px;background-position:3px;justify-content:space-between;background-color:#dbdbdb}.move-water{background-color:#8cade0;background-image:url(water.48703a921b5c9fd43ba0.png)}.move-dark{background-color:#8f8e94;background-image:url(dark.d9da922f4f86171947f2.png)}.move-psychic{background-color:#eba1a2;background-image:url(psychic.a5bb00f19be130afe278.png)}.move-fighting{background-color:#cd8b99;background-image:url(fighting.6f07755564aeb8f6bd5d.png)}.move-poison{background-color:#bd98d2;background-image:url(poison.b16edaa831719df29e05.png)}.move-normal{background-color:#acb4b7;background-image:url(normal.a10d949b16747d3dce00.png)}.move-ghost{background-color:#8e97be;background-image:url(ghost.608b237fafeebde86299.png)}.move-steel{background-color:#90acb8;background-image:url(steel.2cce7180f019ea62686c.png)}.move-ground{background-color:#e19f87;background-image:url(ground.0ab6764cb9f6e0e157ae.png)}.move-dragon{background-color:#7a99cf;background-image:url(dragon.7c873236b82e620ebda0.png)}.move-fairy{background-color:#f2adec;background-image:url(fairy.b7f8f95be18da24b5c84.png)}.move-fire{background-color:#ffb68d;background-image:url(fire.8e48835626ec35ec3bad.png)}.move-bug{background-color:#add080;background-image:url(bug.ac28e4805e26656217dc.png)}.move-ice{background-color:#9cdacd;background-image:url(ice.726378deda34a83a8a3c.png)}.move-flying{background-color:#aebde4;background-image:url(flying.f126652191a894e43904.png)}.move-rock{background-color:#d3c8a8;background-image:url(rock.ea5781eb0bd50201e1c2.png)}.move-grass{background-color:#94cc8f;background-image:url(grass.b3f154ee2518a6968934.png)}.move-electric{background-color:#f6dc85;background-image:url(electric.ae0021eff57f1ff3ab3a.png)}@media screen and (max-width:1400px){.grid.detailed{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width:1200px){.grid.detailed{grid-template-columns:1fr 1fr}}@media screen and (max-width:900px){.grid.detailed{grid-template-columns:1fr}}"],encapsulation:2}),H);function R(e,i){if(1&e&&(d.Nb(0),d.Lb(1,"app-minimal",4),d.Mb()),2&e){var n=d.Yb().$implicit;d.zb(1),d.ec("pokemon",n.pokemon)}}function Z(e,i){if(1&e&&(d.Nb(0),d.Lb(1,"app-normal",4),d.Mb()),2&e){var n=d.Yb().$implicit;d.zb(1),d.ec("pokemon",n.pokemon)}}function _(e,i){if(1&e&&(d.Nb(0),d.Lb(1,"app-detailed",4),d.Mb()),2&e){var n=d.Yb().$implicit;d.zb(1),d.ec("pokemon",n.pokemon)}}function q(e,i){if(1&e&&(d.Nb(0),d.Nb(1,2),d.sc(2,R,2,1,"ng-container",3),d.sc(3,Z,2,1,"ng-container",3),d.sc(4,_,2,1,"ng-container",3),d.Mb(),d.Mb()),2&e){var n=d.Yb(2);d.zb(1),d.ec("ngSwitch",n.appearance),d.zb(1),d.ec("ngSwitchCase","minimal"),d.zb(1),d.ec("ngSwitchCase","normal"),d.zb(1),d.ec("ngSwitchCase","detailed")}}function U(e,i){if(1&e&&(d.Nb(0),d.sc(1,q,5,4,"ng-container",1),d.Mb()),2&e){var n=d.Yb();d.zb(1),d.ec("ngForOf",n.items)("ngForTrackBy",n.trackByFn)}}var W,ee=((W=function(){function e(){n(this,e),this.isGrid=!0,this.hideInactiveItems=!1}return i(e,[{key:"ngAfterContentInit",value:function(){var e=this;this.items||(this.items=this.contentChildren.toArray()),this.contentChildren.changes.subscribe((function(i){e.items=i.toArray()}))}},{key:"trackByFn",value:function(e,i){var n,t;return null!==(t=null===(n=i.pokemon)||void 0===n?void 0:n.id)&&void 0!==t?t:""}},{key:"class",get:function(){var e;return null!==(e=this.appearance)&&void 0!==e?e:"normal"}}]),e}()).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=d.Eb({type:W,selectors:[["app-grid"]],contentQueries:function(e,i,n){var t;1&e&&d.Db(n,a.a,!1),2&e&&d.jc(t=d.Xb())&&(i.contentChildren=t)},hostVars:6,hostBindings:function(e,i){2&e&&(d.Bb(i.class),d.Cb("grid",i.isGrid)("hide-inactives",i.hideInactiveItems))},inputs:{hideInactiveItems:"hideInactiveItems",appearance:"appearance"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"pokemon"]],template:function(e,i){1&e&&d.sc(0,U,2,2,"ng-container",0),2&e&&d.ec("ngIf",i.items)},directives:[c.l,c.k,c.m,c.n,g,u,Q],styles:[".grid{display:grid}.grid.hide-inactives .grid-item.inactive{display:none}"],encapsulation:2}),W)},eMGv:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var a=o("fXoL"),d=function(){var e=function(){function e(){n(this,e),this.type="unknown",this.size="normal",this.isTypeBade=!0}return i(e,[{key:"typeClass",get:function(){var e;return(null===(e=this.type)||void 0===e?void 0:e.toLowerCase())||""}},{key:"sizeClass",get:function(){return"small"===this.size}}]),e}();return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-type-badge"]],hostVars:6,hostBindings:function(e,i){2&e&&(a.Bb(i.typeClass),a.Cb("type-badge",i.isTypeBade)("small",i.sizeClass))},inputs:{type:"type",size:"size"},decls:0,vars:0,template:function(e,i){},styles:[".type-badge{background-image:url(types-en.601cafda8c49a98daadc.png);height:44px;width:200px;display:inline-block;background-size:600% 300%;border-radius:3px}.type-badge.unknown{background-image:url(type-unknown.6ac7b5791a0c78738b02.png);background-size:contain}.type-badge.small{width:100px;height:22px}.type-badge.normal{background-position:0 0}.type-badge.fighting{background-position:20% 0}.type-badge.flying{background-position:40% 0}.type-badge.poison{background-position:60% 0}.type-badge.ground{background-position:80% 0}.type-badge.rock{background-position:100% 0}.type-badge.bug{background-position:0 50%}.type-badge.ghost{background-position:20% 50%}.type-badge.steel{background-position:40% 50%}.type-badge.fire{background-position:60% 50%}.type-badge.water{background-position:80% 50%}.type-badge.grass{background-position:100% 50%}.type-badge.electric{background-position:0 100%}.type-badge.psychic{background-position:20% 100%}.type-badge.ice{background-position:40% 100%}.type-badge.dragon{background-position:60% 100%}.type-badge.dark{background-position:80% 100%}.type-badge.fairy{background-position:100% 100%}"],encapsulation:2}),e}()},pEm8:function(e,i,t){"use strict";t.d(i,"a",(function(){return b}));var o=t("fXoL"),a=t("ofXK"),d=t("tyNb"),c=t("8I9x");function r(e,i){if(1&e&&(o.Pb(0,"li"),o.Zb(1,"slugify"),o.Pb(2,"a",1),o.Pb(3,"div",2),o.cc(4),o.Ob(),o.Pb(5,"div",3),o.Pb(6,"span",4),o.uc(7),o.Ob(),o.Pb(8,"span",5),o.uc(9),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&e){var n=o.Yb();o.Bb(o.ac(1,8,n.text)),o.zb(2),o.ec("routerLink",n.link),o.zb(3),o.Cb("no-meta",!n.meta),o.zb(2),o.vc(n.text),o.zb(2),o.vc(n.meta)}}var s=[[["app-item"],["app-pokemon"]]],p=["app-item, app-pokemon"],b=function(){var e=function e(){n(this,e),this.subNaviClass=!0};return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-sub-navi-item"]],hostVars:2,hostBindings:function(e,i){2&e&&o.Cb("sub-navi-item",i.subNaviClass)},inputs:{text:"text",link:"link",meta:"meta"},ngContentSelectors:p,decls:1,vars:1,consts:[[3,"class",4,"ngIf"],["routerLinkActive","active",3,"routerLink"],[1,"icon"],[1,"content"],[1,"title"],[1,"meta-info"]],template:function(e,i){1&e&&(o.dc(s),o.sc(0,r,10,10,"li",0)),2&e&&o.ec("ngIf",i.text)},directives:[a.l,d.e,d.d],pipes:[c.a],styles:['.sub-navi-item li{margin:0;height:auto;flex-flow:row wrap;display:flex;align-items:center}.sub-navi-item li a{font-size:90%;font-weight:700;letter-spacing:-1px;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);display:flex;align-items:center;width:100%;overflow:hidden}.sub-navi-item li a .icon{background:#fff;flex-basis:32px;height:32px}.sub-navi-item li a .content{position:relative;flex-basis:calc(100% - 48px - 0.5rem);display:flex;justify-content:space-between}.sub-navi-item li a .content:before{background-color:#46504f;right:-150px;width:198px;height:240px;content:"";display:block;position:absolute;top:-32px;transform-origin:left top;transform:rotate(24deg);z-index:1}.sub-navi-item li a .content.no-meta:before{background-color:#fff}.sub-navi-item li a .content .title{flex-grow:1;background:#fff}.sub-navi-item li a .content .meta-info{z-index:6;color:#fff;font-weight:500;font-size:100%;text-align:right}.sub-navi-item li a.active .content.no-meta:before,.sub-navi-item li a.active .content .title,.sub-navi-item li a.active .icon{background:#000;color:#fff}@media (prefers-color-scheme:dark){.sub-navi-item li a .content .title,.sub-navi-item li a .icon{background:#212121;color:hsla(0,0%,100%,.8)}}'],encapsulation:2}),e}()},zttm:function(e,i,t){"use strict";t.d(i,"a",(function(){return a}));var o=t("fXoL"),a=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-grid-item"]],inputs:{pokemon:"pokemon",appearance:"appearance"},decls:0,vars:0,template:function(e,i){},styles:[""],encapsulation:2}),e}()}}])}();