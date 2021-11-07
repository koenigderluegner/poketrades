# Changelog

## 0.3.4 - 2021-11-07
### Changed
- Migrated from TSLint to ESLint

## 0.3.3 - 2021-10-24
### Changed
- Zacian and Zamazenta can be shiny since 22nd October 2021

## 0.3.2 - 2021-10-02
### Changed
- Added Alola Non-Poké-Ball combinations to legality

## 0.3.1 - 2021-09-25
### Changed
- Fixed Galar-Birds, Marshadow and Magearna being marked as "can be shiny"

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
- Filter by pokemon name
- Sorting
    - Sorting by name (issue [#9])
    - Sorting by dex number
- Flag to load json files as modules
- Items now guess their category if none is set
- Ball of pokemon in detailed and normal view
- Hold item of pokemon in detailed and normal view
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
