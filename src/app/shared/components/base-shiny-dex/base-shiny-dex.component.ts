import { Component } from '@angular/core';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { PokemonEntry } from '../../../database/models/pokemon-entry.interface';
import { ShinyList } from '@shared/interfaces/shiny-list.interface';

@Component({
  template: '',
  standalone: false
})
export abstract class BaseShinyDexComponent {

  constructor() {
  }

  /**
   * Returns worksheets containing only shinies
   * @param spreadsheet Spreadsheet to search worksheets in
   */
  protected getAllShinyWorksheets(spreadsheet: Spreadsheet): Worksheet[] {
    return spreadsheet.worksheets.filter(worksheet => {
      return worksheet.config?.subType?.toLowerCase() === 'shinies' && coerceBooleanProperty(worksheet.config?.includeShinies);
    });
  }

  /**
   * Returns worksheets partially containing shinies.
   * @param spreadsheet Spreadsheet to search worksheets in
   */
  protected getPartialShinyWorksheets(spreadsheet: Spreadsheet): Worksheet[] {
    return spreadsheet.worksheets.filter(worksheet => {
      return worksheet.config?.subType?.toLowerCase() !== 'shinies' && coerceBooleanProperty(worksheet.config?.includeShinies);
    });
  }

  /**
   * Builds the list, that should be shown.
   * @param pokemonEntries Pokemon entries to build the list
   */
  protected abstract buildEmptyShinyList(pokemonEntries: PokemonEntry[]): ShinyList;

  /**
   * Fills given shiny list with data from worksheets containing only shinies and worksheets partially containing shinies.
   * @param shinyList List to populate
   * @param allShinyWorksheets Worksheets only containing shinies
   * @param partialShinyWorksheets Worksheets partially containing shinies
   */
  protected populateShinyList(shinyList: ShinyList, allShinyWorksheets: Worksheet[], partialShinyWorksheets: Worksheet[]): void {

    // add one for each entry in an "all shinies" tab
    for (const worksheet of allShinyWorksheets) {
      if (worksheet.data) {
        for (const worksheetentries of worksheet.data) {
          // we exclude Gigantamax, technically they're a different form, but are SwSh exclusive (like megas in earlier
          // gens
          const pokemonName = worksheetentries.name.replace('-Gigantamax', '');
          if (shinyList[pokemonName]) {
            shinyList[pokemonName].amountShinies++;
          } else {
            console.log('not found', pokemonName);
          }
        }
      }
    }

    // look for shinies in partial shiiny tabs and add when entry is shiny
    for (const worksheet of partialShinyWorksheets) {
      if (worksheet.data) {
        for (const worksheetentries of worksheet.data) {

          const pokemonName = worksheetentries.name;
          const isShiny = worksheetentries.isShiny;

          if (worksheetentries.isShiny || isShiny) {
            if (shinyList[pokemonName]) {
              shinyList[pokemonName].amountShinies++;
            } else {
              console.log('not found', pokemonName);
            }
          }
        }
      }
    }
  }

  /**
   * Builds the shiny list with given spreadsheet data and pokemon entries (usually pulled from data base).
   * @param spreadsheet Spreadsheet holding data with shinies
   * @param pokemonEntries Database entries used to build the dex
   */
  protected buildShinyList(spreadsheet: Spreadsheet, pokemonEntries: PokemonEntry[]): ShinyList {

    // Gather worksheets containing shinies
    const allShinyWorksheets = this.getAllShinyWorksheets(spreadsheet);
    const partialShinyWorksheets = this.getPartialShinyWorksheets(spreadsheet);

    // build shiny list
    const shinyList: ShinyList = this.buildEmptyShinyList(pokemonEntries);

    this.populateShinyList(shinyList, allShinyWorksheets, partialShinyWorksheets);

    return shinyList;
  }


}
