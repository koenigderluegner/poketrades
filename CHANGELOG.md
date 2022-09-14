# Changelog

## 0.7.2 - 2022-09-15

### Changed

- Marked ::eternatus:shiny::Eternatus as 'can be shiny'
- Added support for Pokémon icons to changelog

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

- Filter for Pokémon categories like legendary or fossil

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
- Added new Pokémon from Legends Arceus

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
- Added Alola Non-Poké-Ball combinations to legality

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

- Filter by Pokémon name
- Sorting
  - Sorting by name (issue [#9])
  - Sorting by dex number
- Flag to load json files as modules
- Items now guess their category if none is set
- Ball of Pokémon in detailed and normal view
- Hold item of Pokémon in detailed and normal view
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
- Happy birthday 🥝!

### Changed
- Increased component style budgets (warning: 5kb, error: 10kb)
- Increased initial bundle budgets (warning: 750kb, error: 1.25mb)


[#9]: https://github.com/koenigderluegner/poketrades/issues/9
