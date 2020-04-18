import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from './spreadsheet/services/spreadsheet.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { SpreadsheetDataService } from './spreadsheet/services/spreadsheet-data.service';
import { Worksheet } from './spreadsheet/models/worksheet';
import { Spreadsheet } from './spreadsheet/models/spreadsheet';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  spreadsheet: Spreadsheet;

  allowedConfigs = {
    type: ['Valuables', 'Breedables'],
    subType: ['RNGs', 'Legendaries', 'Shinies', 'Competitives', 'Events'],
    ball: ["Dream", "Safari", "Sport", "Beast", "Fast", "Moon", "Heavy", "Love", "Lure", "Level",
      "Friend", "Poké", "Great", "Ultra", "Premier", "Dive", "Luxury", "Nest", "Net", "Repeat", "Timer", "Quick",
      "Dusk", "Heal"],
    includeShinies: ['true', 'false']
  };
  isLoading: boolean = true;
  loadingMessage: string;


  constructor(
    private spreadsheetService: SpreadsheetService,
    private spreadsheetDataService: SpreadsheetDataService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.loadingMessage = 'Looking for spreadsheet id';

    let sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.loadStartupData(e.url.split('/')[1]);
        sub.unsubscribe();
      }
    });
  }

  loadStartupData(spreadsheetId: string) {
    if (spreadsheetId) {
      this.loadingMessage = 'Loading spreadsheet from Google API';
      this.spreadsheetService.getSpreadsheet(spreadsheetId).pipe(
        tap(spreadsheet => {
          this.spreadsheetDataService.updateSpreadsheetInformation(spreadsheet);
          this.spreadsheet = spreadsheet;
        }),
        switchMap(q => this.spreadsheetService.getWorksheets(q.id, q.worksheets.map(worksheet => worksheet.id))),
        map(worksheets => {
          this.loadingMessage = 'Configuring spreadsheet details';
          let selectedWorksheet: Worksheet;
          for (const worksheet of worksheets) {
            selectedWorksheet = this.spreadsheet.worksheets.filter(ws => ws.title === worksheet.feed.title['$t'])?.[0];

            selectedWorksheet.config = this.getWorksheetConfig(worksheet);
            if (selectedWorksheet) {
              selectedWorksheet.data = worksheet.feed.entry.slice(3); // first 3 rows contain meta data
              selectedWorksheet.data.pop(); // last row is empty, its a helper row in sheets
            }
          }

          this.spreadsheet.hasBreedables = this.spreadsheet.worksheets.some(ws => ws.config?.type === 'Breedables');
          this.spreadsheet.hasValuables = this.spreadsheet.worksheets.some(ws => ws.config?.type === 'Valuables');

          this.spreadsheetDataService.updateSpreadsheetInformation(this.spreadsheet);

          this.isLoading = false;
        })
      ).subscribe({
        error: error => console.log('error: ', error)
      })
    } else {
      this.router.navigate(['/']).then(() => this.isLoading = false);
    }
  }


  getWorksheetConfig(worksheet) {
    let config = {};
    let configIndex = 0;
    let tempConfig;

    while (worksheet.feed.entry[configIndex]?.['gsx$config']?.['$t'] && configIndex < 3) {
      tempConfig = worksheet.feed.entry[configIndex]['gsx$config']['$t'].split(':');
      if (tempConfig.length === 2) {
        const [key, value] = tempConfig;
        if (key in this.allowedConfigs) {
          if (this.allowedConfigs[key].includes(value)) {
            config[key] = value;
          }
        }
      }
      configIndex++;
    }

    return config;
  }


}
