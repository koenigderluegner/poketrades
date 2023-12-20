"use strict";(self.webpackChunkpoketrades=self.webpackChunkpoketrades||[]).push([[412],{8412:(p,d,o)=>{o.r(d),o.d(d,{ChangelogModule:()=>m});var g=o(4755),r=o(1121),s=o(5159),n=o(2223);const h=[{path:"",component:(()=>{class e{constructor(){this.setClass=!0,this.markdown=this._convertPokemonIconTokens('# Changelog\n\n## 0.8.0 - TBD\n\n### Changed\n\n- Removed ::floette-eternal::Floette-Eternal and ::eiscue-noice::Eiscue-Noice from Shiny Living Dex\n- Removed Gigantamax from Shiny Living Dex - cast Gigantamax-Pokemon to their Non-Gigantamax-Form\n\n## 0.7.5 - 2023-01-14\n\n### Changed\n\n- Updated dependencies\n- Minor design fixes\n\n## 0.7.4 - 2022-11-12\n\n### Changed\n\n- Updated dependencies\n\n## 0.7.3 - 2022-10-09\n\n### Changed\n\n- Updated dependencies\n\n## 0.7.2 - 2022-09-15\n\n### Changed\n\n- Marked ::eternatus:shiny::Eternatus as \'can be shiny\'\n- Added support for Pok\xe9mon icons to changelog\n\n## 0.7.1 - 2022-08-21\n\n### Changed\n\n- Fixed ::electrode-hisui::Hisuian Electrode being shown in Friend Safaris instead of Kantonian\n\n## 0.7.0 - 2022-08-21\n\n### Added\n\n- Friend Safari Shiny Dex\n- Ultra Wormhole Shiny Dex\n\n## 0.6.1 - 2021-06-18\n\n### Changed\n\n- Fixed crash when trying to read sheets with missing config\n\n## 0.6.0 - 2022-06-09\n### Changed\n- Updated dependencies including major update for Angular (from 13 to 14)\n- Minor code clean up\n\n## 0.5.1 - 2022-03-28\n\n### Changed\n- Updated dependencies\n\n## 0.5.0 - 2022-03-20\n\n### Added\n\n- Filter for Pok\xe9mon categories like legendary or fossil\n\n### Changed\n\n- Changed "hide inactives" filter to owned status filter\n- Fixed ::diancie-mega::Diancie-Mega bankable flag being true\n- Fixed detail appearance of grid showing empty moves\n- Fixed missing icon for RNGs\n- Fixed missing ::avalugg::Avalugg entry\n\n\n## 0.4.2 - 2022-03-19\n### Changed\n- Updated NPM-Packages\n\n## 0.4.1 - 2022-03-06\n### Changed\n\n- Updated ::Articuno-Galar:shiny::Articuno-Galar, ::Zapdos-Galar:shiny::Zapdos-Galar and ::Moltres-Galar:shiny::\n  Moltres-Galar shiny availability\n- Changed first appearances from BDSP mons\n- Fixed female versions show as Bulbasaur icons \n\n### Added\n- Added new Pok\xe9mon from Legends Arceus\n\n## 0.4.0 - 2021-03-03\n### Changed\n- Updated dependencies including major update for Angular (from 12 to 13)\n\n## 0.3.4 - 2021-11-07\n### Changed\n- Migrated from TSLint to ESLint\n\n## 0.3.3 - 2021-10-24\n### Changed\n\n- ::Zacian:shiny::Zacian and ::Zamazenta:shiny::Zamazenta can be shiny since 22nd October 2021\n\n## 0.3.2 - 2021-10-02\n### Changed\n- Added Alola Non-Pok\xe9-Ball combinations to legality\n\n## 0.3.1 - 2021-09-25\n### Changed\n\n- Fixed Galar-Birds, ::Marshadow::Marshadow and ::Magearna::Magearna being marked as "can be shiny"\n\n## 0.3.0 - 2021-09-15\n### Changed\n- Updated google api version from v3 to v4. Migrated code accordingly\n\n## 0.2.2 - 2021-08-29\n### Changed\n- Updated dependencies including major update for Angular (from 11 to 12)\n\n## 0.2.1 - 2021-07-27\n### Changed\n- Filter row now breaks on mobile\n\n## 0.2.0 - 2021-01-30\n### Added\n\n- Filter by Pok\xe9mon name\n- Sorting\n  - Sorting by name (issue [#9])\n  - Sorting by dex number\n- Flag to load json files as modules\n- Items now guess their category if none is set\n- Ball of Pok\xe9mon in detailed and normal view\n- Hold item of Pok\xe9mon in detailed and normal view\n- A shiny indicator to normal view\n    \n### Changed\n- Fixed unwanted underline in sub navigation after recent changes \n- Fixed shiny icon not appearing \n- Removed red color from shiny icons\n- Fixed missing icons on valuable sidebar\n- Changed unknown move background color in dark mode to make text more readable\n\n## 0.1.0 - 2021-01-21\n### Added\n- CHANGELOG.md (this file)\n- This tag as starting point for further changes\n- Frontpage now reads this file to make users aware of changes.\n- detailed-move component to tidy up detailed grid item\n- Happy birthday \u{1f95d}!\n\n### Changed\n- Increased component style budgets (warning: 5kb, error: 10kb)\n- Increased initial bundle budgets (warning: 750kb, error: 1.25mb)\n\n\n[#9]: https://github.com/koenigderluegner/poketrades/issues/9\n')}_convertPokemonIconTokens(t){return t.replace(/::(?<pokemon>[\.\d\w-]+)(?<shiny>:shiny)?::/gm,(...a)=>{const{pokemon:i,shiny:u}=a[a.length-1];return`<i class="pokesprite pokemon ${i.toLowerCase()}${u?" shiny":""}"></i>`})}static#n=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-changelog"]],hostVars:2,hostBindings:function(a,i){2&a&&n.ekj("container",i.setClass)},decls:23,vars:1,consts:[["routerLink","/help"],["href","https://www.reddit.com/message/compose/?to=KoenigDerLuegner"],["href","https://github.com/koenigderluegner/poketrades/issues"],[1,"markdown"]],template:function(a,i){1&a&&(n.TgZ(0,"h1"),n._uU(1,"Welcome!"),n.qZA(),n.TgZ(2,"p"),n._uU(3,'This is an early build of this website and has no "real" frontpage at the moment.\n'),n._UZ(4,"br"),n._uU(5,"If you want to know how use this tool please visit the "),n.TgZ(6,"a",0),n._uU(7,"help section"),n.qZA(),n._uU(8,".\n"),n._UZ(9,"br"),n._uU(10,"If you want to give feedback or report bugs write me a "),n.TgZ(11,"a",1),n._uU(12,"message on reddit.com"),n.qZA(),n._uU(13,"\nor visit my "),n.TgZ(14,"a",2),n._uU(15,"GitHub issue section"),n.qZA(),n._uU(16,".\n"),n._UZ(17,"br"),n._uU(18,"If you're just browsing, then use the navigation at the top right."),n.qZA(),n.TgZ(19,"p"),n._uU(20,"That's all, have fun!"),n.qZA(),n.TgZ(21,"markdown",3),n._uU(22),n.qZA()),2&a&&(n.xp6(22),n.hij(" ",i.markdown,"\n"))},dependencies:[r.lF,s.rH],styles:[".markdown h1:first-of-type{margin-top:0}.markdown ul{list-style-type:disc;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-padding-start:40px;padding-inline-start:40px}.markdown i.pokesprite.pokemon{margin:-34px -4px -10px}\n"],encapsulation:2})}return e})()}];let c=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=n.oAB({type:e});static#a=this.\u0275inj=n.cJS({imports:[s.Bz.forChild(h),s.Bz]})}return e})(),m=(()=>{class e{static#n=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=n.oAB({type:e});static#a=this.\u0275inj=n.cJS({imports:[g.ez,r.JP,c]})}return e})()}}]);