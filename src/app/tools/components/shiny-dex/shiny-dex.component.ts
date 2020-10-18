import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { combineLatest, Observable, of } from 'rxjs';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { switchMap } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { ShinyDexEntry } from '../../models/shiny-dex-entry.interface';
import { GridService } from '../../../grid/services/grid.service';

@Component({
  selector: 'app-shiny-dex',
  templateUrl: './shiny-dex.component.html',
  styleUrls: ['./shiny-dex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShinyDexComponent implements OnInit {

  allShinyWorksheets: Worksheet[] = [];
  partialShinyWorksheets: Worksheet[] = [];
  shinies$?: Observable<[string, ShinyDexEntry][]>;
  hideItems$: Observable<boolean>;


  constructor(private databases: DatabaseFacadeService,
              private spreadsheets: SpreadsheetFacade,
              private gridService: GridService) {
    this.hideItems$ = this.gridService.getHideItems$();
  }

  ngOnInit(): void {
    this.shinies$ = combineLatest([this.spreadsheets.getCurrentSpreadsheet$(), this.databases.getPokemon()]).pipe(
      switchMap(([spreadsheet, pokemonEntries]) => {

        // Gather worksheets containing shinies
        this.allShinyWorksheets = spreadsheet.worksheets.filter(worksheet => {
          return worksheet.config?.subType?.toLowerCase() === 'shinies' && coerceBooleanProperty(worksheet.config?.includeShinies);
        });
        this.partialShinyWorksheets = spreadsheet.worksheets.filter(worksheet => {
          return worksheet.config?.subType?.toLowerCase() !== 'shinies' && coerceBooleanProperty(worksheet.config?.includeShinies);
        });

        // build shiny list
        const shinies: { [key: string]: ShinyDexEntry } = {};

        for (const pokemon of pokemonEntries) {
          if (pokemon.canBeShiny) {
            Object.assign(shinies, {
              [pokemon.name]: {
                pokemon, amountShinies: 0
              }
            });
          }
        }


        // add one for each entry in an "all shinies" tab
        for (const worksheet of this.allShinyWorksheets) {
          if (worksheet.data) {
            for (const worksheetentries of worksheet.data) {
              // @ts-ignore
              const pokemonName = worksheetentries.gsx$name.$t;
              if (shinies[pokemonName]) {
                shinies[pokemonName].amountShinies++;
              } else {
                console.log('not found', pokemonName);
              }
            }
          }
        }

        // look for shinies in partial shiiny tabs and add when entry is shiny
        for (const worksheet of this.partialShinyWorksheets) {
          if (worksheet.data) {
            for (const worksheetentries of worksheet.data) {
              // @ts-ignore
              const pokemonName = worksheetentries.gsx$name.$t;
              // @ts-ignore
              const isShiny = !!worksheetentries.gsx$isshiny.$t;
              if (worksheetentries.isShiny || isShiny) {
                if (shinies[pokemonName]) {
                  shinies[pokemonName].amountShinies++;
                } else {
                  console.log('not found', pokemonName);
                }
              }
            }
          }
        }
        return of(Object.entries(shinies));
      })
    );
  }

}
