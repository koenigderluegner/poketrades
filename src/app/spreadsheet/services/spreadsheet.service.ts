import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Spreadsheet } from '../models/spreadsheet';
import { GoogleSpreadsheetService } from '../../google-spreadsheet/services/google-spreadsheet.service';
import { environment } from '../../../environments/environment';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { GoogleSpreadsheetResponse } from '../../google-spreadsheet/interfaces/google-spreadsheet-response.interface';
import { WorksheetConfig } from '@spreadsheet/models/worksheet-config.interface';
import { AllowedConfig } from '@spreadsheet/models/allowed-config.interface';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { Pokemon } from '@shared/interfaces/pokemon';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  private httpClient = inject(HttpClient);
  private gss = inject(GoogleSpreadsheetService);
  private slugifyPipe = inject(SlugifyPipe);


  private readonly bannedSheets: string[] = [
    'Welcome',
    'Living Dex', 'Shiny Living Dex', 'Breedables Overview', 'Alcremie', 'Tool:Breeding', 'Tool: Move Lookup',
    'Breedables Ball Legality', 'Ban Checker', 'DB:Abilities', 'DB:Balls', 'DB:Pokemon', 'DB:LevelMoves', 'DB:Items',
    'DB:Misc', 'DB:Moves', 'DB:Types', 'DB:Natures', 'Resource Gen7 (Backup)', 'Ban List'
  ];


  private readonly possibleHeaders: string[] = [
    'dex', 'name', 'ability', 'owned', 'hasHA', 'ratio', 'move1', 'move2', 'move3', 'move4', 'nature', 'ball',
    'gender', 'ot', 'amount', 'notes', 'event', 'isShiny', 'level', 'hp', 'atk', 'def', 'spa', 'spd', 'spe', 'item',
    'id', 'dates', 'proof', 'tradeHistory', 'disclosure', 'lang', 'evhp', 'evatk', 'evdef', 'evspa', 'evspd', 'evspe'
  ];

  private readonly allowedConfigs: AllowedConfig = {
    type: ['Valuables', 'Breedables'],
    subType: ['RNGs', 'Legendaries', 'Shinies', 'Competitives', 'Events'],
    ball: ['Dream', 'Safari', 'Sport', 'Beast', 'Fast', 'Moon', 'Heavy', 'Love', 'Lure', 'Level',
      'Friend', 'Poké', 'Great', 'Ultra', 'Premier', 'Dive', 'Luxury', 'Nest', 'Net', 'Repeat', 'Timer', 'Quick',
      'Dusk', 'Heal'],
    includeShinies: ['true', 'false']
  };

  getSpreadsheet(spreadsheetId: string, apiKey: string): Observable<Spreadsheet> {
    let spreadsheet: Spreadsheet;
    return this.gss.getSpreadsheet(spreadsheetId, apiKey).pipe(
      switchMap(googleSpreadsheet => {

        spreadsheet = {id: spreadsheetId, title: googleSpreadsheet.properties.title, worksheets: []};

        const sheetsToCheck = googleSpreadsheet.sheets.filter(sheet => !this.bannedSheets.includes(sheet.properties.title));

        return this._getWorksheets(spreadsheetId, sheetsToCheck);
      }),
      switchMap(worksheets => {
        spreadsheet.worksheets = worksheets;
        return of(spreadsheet);
      })
    );
  }


  public getConfigs(
    spreadsheetId: string,
    configRanges: string[],
    sheetsToCheck: GoogleSpreadsheetResponse['sheets']
  ): Observable<Worksheet[]> {
    return this.gss.getBatchValues(
      spreadsheetId,
      configRanges,
      environment.googleApiKey
    ).pipe(switchMap(configs => {
        const worksheets: Worksheet[] = [];

        for (const values of configs.valueRanges) {
          const confIndex = values.values?.[0]?.indexOf('config') ?? -1;

          // skip if no config was found
          if (confIndex === -1) {
            continue;
          }

          // remove empty values
          const configArray = values.values.map((arr: string[]) => arr[confIndex]).filter(Boolean);

          // remove header
          configArray.shift();

          const config = this.getWorksheetConfig(configArray);
          const title = values.range.split('!')[0];
          const slug = this.slugifySheetName(title);
          const matchingSheet = sheetsToCheck.find(sheet => this.slugifySheetName(sheet.properties.title) === slug);

          let colMin = 0;
          let colMax = 0;
          values.values[0].some((headerName: string, index: number) => {
            if (this.possibleHeaders.includes(headerName)) {
              colMin = index;
              return true;
            }
          });
          values.values[0].slice().reverse().some((headerName: string, index: number) => {
            if (this.possibleHeaders.includes(headerName)) {
              colMax = (values.values[0].length - 1) - index;
              return true;
            }
          });


          if (config.type !== 'unknown') {
            config.colIndex = {min: colMin, max: colMax};
            const worksheet: Worksheet = {
                id: '0',
                title,
                slug,
                config,
                gridProperties: matchingSheet?.properties.gridProperties ?? {columnCount: 0, rowCount: 0},
                headerIndex: values.values[0].slice(colMin, colMax + 1),
                valueRange: ''
              }
            ;
            const rangeStart = `${this.numberToColumnName(worksheet.config?.colIndex.min ?? 0)}${(worksheet.gridProperties.frozenRowCount ?? 0) + 1}`;
            const rangeEnd = `${this.numberToColumnName(worksheet.config?.colIndex.max ?? 0)}${(worksheet.gridProperties.rowCount)}`;
            worksheet.valueRange = `${worksheet.title}!${rangeStart}:${rangeEnd}`;
            worksheet.title = title.replace(/'/g, '');
            worksheets.push(worksheet);
          }
        }
        return of(worksheets);

      })
    );


  }


  private _getWorksheets(spreadsheetId: string, sheetsToCheck: GoogleSpreadsheetResponse['sheets']): Observable<Worksheet[]> {

    const configRanges = sheetsToCheck.map(sheet => `${sheet.properties.title}!A1:ZZ5`);

    return this.getConfigs(spreadsheetId, configRanges, sheetsToCheck).pipe(
      switchMap(worksheets => {
        const valueRanges = worksheets.map(worksheet => worksheet.valueRange);
        return this.getWorksheetValues(spreadsheetId, valueRanges, worksheets);
      })
    );

  }

  private numberToColumnName(numberToConvert: number): string {

    const ordA = 'a'.charCodeAt(0);
    const ordZ = 'z'.charCodeAt(0);
    const len = ordZ - ordA + 1;

    let s = '';
    while (numberToConvert >= 0) {
      s = String.fromCharCode(numberToConvert % len + ordA) + s;
      numberToConvert = Math.floor(numberToConvert / len) - 1;
    }
    return s.toUpperCase();

  }

  private slugifySheetName(sheetName: string) {
    let slug = this.slugifyPipe.transform(sheetName);
    if (slug[0] === `'`) {
      slug = slug.substr(1);
    }
    if (slug[slug.length - 1] === `'`) {
      slug = slug.substr(0, slug.length - 1);
    }

    return slug;
  }

  private getWorksheetConfig(cells: string[]): WorksheetConfig {
    const config: WorksheetConfig = {type: 'unknown', colIndex: {min: 0, max: 0}};
    let configIndex = 0;
    let tempConfig: string[];

    for (const cell of cells) {
      tempConfig = cell.split(':');
      if (tempConfig.length === 2) {
        const [key, value] = tempConfig;
        if (key in this.allowedConfigs) {
          const configArray = this.allowedConfigs[key];
          if (configArray && configArray.includes(value)) {
            config[key] = key === 'includeShinies' ? coerceBooleanProperty(value) : value;
          }
        }
      }
      configIndex++;
    }
    return config as WorksheetConfig;
  }


  private getWorksheetValues(spreadsheetId: string, valueRanges: string[], worksheets: Worksheet[]): Observable<Worksheet[]> {
    return this.gss.getBatchValues(
      spreadsheetId,
      valueRanges,
      environment.googleApiKey
    ).pipe(switchMap(sheetValues => {


        sheetValues.valueRanges.forEach((sheetValue) => {
          const title = sheetValue.range.split('!')[0];
          const slug = this.slugifySheetName(title);
          const worksheet = worksheets.find(sheet => this.slugifySheetName(sheet.slug) === slug);
          if (worksheet) {

            const pokemonData: Pokemon[] = [];

            sheetValue.values?.forEach((valuesArray: string[]) => {

              const tempPokemon: Partial<Pokemon> = {moves: [], evs: {}, ivs: {}};

              valuesArray.forEach((cellValue: string, index: number) => {

                const header = worksheet.headerIndex[index].trim();

                // skip if header is empty or no dex number was found (row unparseable)
                if (header === '' || (header === 'dex' && cellValue.trim() === '')) {
                  return;
                }
                // skip if header is one with useless cell data
                if (['icon', 'egg'].includes(header)) {
                  return;
                }
                switch (header) {
                  case 'hasHA':
                    tempPokemon.hasHiddenAbility = cellValue.trim() === 'x';
                    break;
                  case 'move1':
                  case 'move2':
                  case 'move3':
                  case 'move4':
                    if (Array.isArray(tempPokemon.moves)) {
                      tempPokemon.moves.push(cellValue);
                    }
                    break;
                  case 'owned':
                    tempPokemon.isOwned = cellValue.trim() === 'x';
                    break;
                  case 'hp':
                  case 'atk':
                  case 'def':
                  case 'spa':
                  case 'spd':
                  case 'spe':
                    if (tempPokemon.ivs) {
                      tempPokemon.ivs[header] = cellValue;
                    }
                    break;
                  case 'evhp':
                  case 'evatk':
                  case 'evdef':
                  case 'evspa':
                  case 'evspd':
                  case 'evspe':
                    if (tempPokemon.evs) {
                      tempPokemon.evs[header] = cellValue;
                    }
                    break;
                  case 'isShiny':
                    tempPokemon.isShiny = cellValue.trim() !== '';
                    break;
                  case 'ball':
                    tempPokemon.ball = cellValue.replace(' Ball', '').trim();
                    break;
                  default:
                    tempPokemon[header] = cellValue;

                }

              });

              if (tempPokemon.name) {
                tempPokemon.iconSlug = this._generateIconSlug(tempPokemon.name);
              }

              tempPokemon.isOwned = tempPokemon.isOwned || worksheet.config?.type === 'Valuables';

              if (tempPokemon.dex) {
                pokemonData.push(tempPokemon as unknown as Pokemon);
              }


            });

            worksheet.data = pokemonData;


          }
        });

        return of(worksheets);
      }
    ));
  }

  private _generateIconSlug(pokemonName: string): string {
    let slug = pokemonName.toLowerCase().replace('nidoran ♀', 'nidoran-f');
    slug = slug.replace('nidoran ♂', 'nidoran-m');
    slug = new SlugifyPipe().transform(slug);
    slug = slug.replace('-antique', '');
    slug = slug.replace('-gigantamax', '-gmax');
    slug = slug.replace('-low-key-gmax', '-gmax');
    return slug;
  }
}
