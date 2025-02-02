import{a as y,b as w}from"./chunk-SCARZOA3.js";import{$a as l,$b as k,Fa as p,Ga as m,Nb as f,Ra as h,T as s,Za as o,_a as a,bc as g,ob as n,qb as u,va as c}from"./chunk-IOIAQSLZ.js";var b=`# Changelog

## 0.8.0 - 2023-12-21

### Changed

- Removed ::floette-eternal::Floette-Eternal and ::eiscue-noice::Eiscue-Noice from Shiny Living Dex
- Removed Gigantamax from Shiny Living Dex - cast Gigantamax-Pokemon to their Non-Gigantamax-Form

## 0.7.5 - 2023-01-14

### Changed

- Updated dependencies
- Minor design fixes

## 0.7.4 - 2022-11-12

### Changed

- Updated dependencies

## 0.7.3 - 2022-10-09

### Changed

- Updated dependencies

## 0.7.2 - 2022-09-15

### Changed

- Marked ::eternatus:shiny::Eternatus as 'can be shiny'
- Added support for Pok\xE9mon icons to changelog

## 0.7.1 - 2022-08-21

### Changed

- Fixed ::electrode-hisui::Hisuian Electrode being shown in Friend Safaris instead of Kantonian

## 0.7.0 - 2022-08-21

### Added

- Friend Safari Shiny Dex
- Ultra Wormhole Shiny Dex

## 0.6.1 - 2021-06-18

### Changed

- Fixed crash when trying to read sheets with missing config

## 0.6.0 - 2022-06-09
### Changed
- Updated dependencies including major update for Angular (from 13 to 14)
- Minor code clean up

## 0.5.1 - 2022-03-28

### Changed
- Updated dependencies

## 0.5.0 - 2022-03-20

### Added

- Filter for Pok\xE9mon categories like legendary or fossil

### Changed

- Changed "hide inactives" filter to owned status filter
- Fixed ::diancie-mega::Diancie-Mega bankable flag being true
- Fixed detail appearance of grid showing empty moves
- Fixed missing icon for RNGs
- Fixed missing ::avalugg::Avalugg entry


## 0.4.2 - 2022-03-19
### Changed
- Updated NPM-Packages

## 0.4.1 - 2022-03-06
### Changed

- Updated ::Articuno-Galar:shiny::Articuno-Galar, ::Zapdos-Galar:shiny::Zapdos-Galar and ::Moltres-Galar:shiny::
  Moltres-Galar shiny availability
- Changed first appearances from BDSP mons
- Fixed female versions show as Bulbasaur icons 

### Added
- Added new Pok\xE9mon from Legends Arceus

## 0.4.0 - 2021-03-03
### Changed
- Updated dependencies including major update for Angular (from 12 to 13)

## 0.3.4 - 2021-11-07
### Changed
- Migrated from TSLint to ESLint

## 0.3.3 - 2021-10-24
### Changed

- ::Zacian:shiny::Zacian and ::Zamazenta:shiny::Zamazenta can be shiny since 22nd October 2021

## 0.3.2 - 2021-10-02
### Changed
- Added Alola Non-Pok\xE9-Ball combinations to legality

## 0.3.1 - 2021-09-25
### Changed

- Fixed Galar-Birds, ::Marshadow::Marshadow and ::Magearna::Magearna being marked as "can be shiny"

## 0.3.0 - 2021-09-15
### Changed
- Updated google api version from v3 to v4. Migrated code accordingly

## 0.2.2 - 2021-08-29
### Changed
- Updated dependencies including major update for Angular (from 11 to 12)

## 0.2.1 - 2021-07-27
### Changed
- Filter row now breaks on mobile

## 0.2.0 - 2021-01-30
### Added

- Filter by Pok\xE9mon name
- Sorting
  - Sorting by name (issue [#9])
  - Sorting by dex number
- Flag to load json files as modules
- Items now guess their category if none is set
- Ball of Pok\xE9mon in detailed and normal view
- Hold item of Pok\xE9mon in detailed and normal view
- A shiny indicator to normal view
    
### Changed
- Fixed unwanted underline in sub navigation after recent changes 
- Fixed shiny icon not appearing 
- Removed red color from shiny icons
- Fixed missing icons on valuable sidebar
- Changed unknown move background color in dark mode to make text more readable

## 0.1.0 - 2021-01-21
### Added
- CHANGELOG.md (this file)
- This tag as starting point for further changes
- Frontpage now reads this file to make users aware of changes.
- detailed-move component to tidy up detailed grid item
- Happy birthday \u{1F95D}!

### Changed
- Increased component style budgets (warning: 5kb, error: 10kb)
- Increased initial bundle budgets (warning: 750kb, error: 1.25mb)


[#9]: https://github.com/koenigderluegner/poketrades/issues/9
`;var C=(()=>{let e=class e{constructor(){this.setClass=!0,this.markdown=this._convertPokemonIconTokens(b)}_convertPokemonIconTokens(r){return r.replace(/::(?<pokemon>[\.\d\w-]+)(?<shiny>:shiny)?::/gm,(...t)=>{let{pokemon:d,shiny:F}=t[t.length-1];return`<i class="pokesprite pokemon ${d.toLowerCase()}${F?" shiny":""}"></i>`})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-changelog"]],hostVars:2,hostBindings:function(t,d){t&2&&h("container",d.setClass)},standalone:!1,decls:23,vars:1,consts:[["routerLink","/help"],["href","https://www.reddit.com/message/compose/?to=KoenigDerLuegner"],["href","https://github.com/koenigderluegner/poketrades/issues"],[1,"markdown"]],template:function(t,d){t&1&&(o(0,"h1"),n(1,"Welcome!"),a(),o(2,"p"),n(3,'This is an early build of this website and has no "real" frontpage at the moment. '),l(4,"br"),n(5,"If you want to know how use this tool please visit the "),o(6,"a",0),n(7,"help section"),a(),n(8,". "),l(9,"br"),n(10,"If you want to give feedback or report bugs write me a "),o(11,"a",1),n(12,"message on reddit.com"),a(),n(13," or visit my "),o(14,"a",2),n(15,"GitHub issue section"),a(),n(16,". "),l(17,"br"),n(18,"If you're just browsing, then use the navigation at the top right."),a(),o(19,"p"),n(20,"That's all, have fun!"),a(),o(21,"markdown",3),n(22),a()),t&2&&(c(22),u(" ",d.markdown,`
`))},dependencies:[y,k],styles:[`.markdown h1:first-of-type{margin-top:0}.markdown ul{list-style-type:disc;margin-block-start:1em;margin-block-end:1em;padding-inline-start:40px}.markdown i.pokesprite.pokemon{margin:-34px -4px -10px}
`],encapsulation:2});let i=e;return i})();var S=[{path:"",component:C}],v=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[g.forChild(S),g]});let i=e;return i})();var Z=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[f,w,v]});let i=e;return i})();export{Z as ChangelogModule};
