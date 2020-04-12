import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '@shared/services/spreadsheet.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Worksheet } from '@shared/interfaces/worksheet';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';

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


  constructor(private spreadsheetService: SpreadsheetService, private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.loadStartupData()
  }

  loadStartupData() {
    this.spreadsheetService.getSpreadsheet('17KmYOvREddg0SpBGbATH7I15C4JsDfzl-07pnABTueE').pipe(
      tap(spreadsheet => {
        this.spreadsheetDataService.updateSpreadsheetInformation(spreadsheet);
        this.spreadsheet = spreadsheet;
      }),
      switchMap(q => this.spreadsheetService.getWorksheets(q.id, q.worksheets.map(worksheet => worksheet.id))),
      map(worksheets => {
        let selectedWorksheet: Worksheet;
        for (const worksheet of worksheets) {
          selectedWorksheet = this.spreadsheet.worksheets.filter(fWorksheet => fWorksheet.title === worksheet.feed.title['$t'])?.[0];

          selectedWorksheet.config = this.getWorksheetConfig(worksheet);
          if (selectedWorksheet) {
            selectedWorksheet.data = worksheet.feed.entry.slice(3); // first 3 rows contain meta data
          }
          console.log(worksheet.feed.title['$t']);
        }

        this.spreadsheetDataService.updateSpreadsheetInformation(this.spreadsheet);
      })
    ).subscribe({
      error: error => console.log('error: ', error)
    })
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
