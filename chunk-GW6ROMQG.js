import{a as h}from"./chunk-PU7NIKX5.js";import"./chunk-V4WIDDSC.js";import"./chunk-IGW6DD2I.js";import"./chunk-YVSC47RM.js";import{Hb as n,Ib as t,Jb as o,Ya as l,Yb as e,_b as g,kb as m}from"./chunk-MZKGMKCD.js";import"./chunk-ESJYUATY.js";var c=`# Changelog

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
`;var w=(()=>{let i=class i{constructor(){this.markdown=this._convertPokemonIconTokens(c)}_convertPokemonIconTokens(r){return r.replace(/::(?<pokemon>[\.\d\w-]+)(?<shiny>:shiny)?::/gm,(...a)=>{let{pokemon:s,shiny:p}=a[a.length-1];return`<i class="pokesprite pokemon ${s.toLowerCase()}${p?" shiny":""}"></i>`})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["app-changelog"]],hostAttrs:[1,"container"],decls:23,vars:1,consts:[["routerLink","/help"],["href","https://www.reddit.com/message/compose/?to=KoenigDerLuegner"],["href","https://github.com/koenigderluegner/poketrades/issues"],[1,"markdown"]],template:function(a,s){a&1&&(n(0,"h1"),e(1,"Welcome!"),t(),n(2,"p"),e(3,'This is an early build of this website and has no "real" frontpage at the moment. '),o(4,"br"),e(5,"If you want to know how use this tool please visit the "),n(6,"a",0),e(7,"help section"),t(),e(8,". "),o(9,"br"),e(10,"If you want to give feedback or report bugs write me a "),n(11,"a",1),e(12,"message on reddit.com"),t(),e(13," or visit my "),n(14,"a",2),e(15,"GitHub issue section"),t(),e(16,". "),o(17,"br"),e(18,"If you're just browsing, then use the navigation at the top right."),t(),n(19,"p"),e(20,"That's all, have fun!"),t(),n(21,"markdown",3),e(22),t()),a&2&&(l(22),g(" ",s.markdown,`
`))},dependencies:[h],styles:[`.markdown h1:first-of-type{margin-top:0}.markdown ul{list-style-type:disc;margin-block-start:1em;margin-block-end:1em;padding-inline-start:40px}.markdown i.pokesprite.pokemon{margin:-34px -4px -10px}
`],encapsulation:2});let d=i;return d})();export{w as ChangelogComponent};
