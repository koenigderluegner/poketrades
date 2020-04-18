import { Component, OnInit } from '@angular/core';
import { SpreadsheetDataService } from '../../../../spreadsheet/services/spreadsheet-data.service';
import { Spreadsheet } from '../../../../spreadsheet/models/spreadsheet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  spreadsheetData: Spreadsheet;

  breedablesLink: string;
  valuablesLink: string;

  constructor(private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.spreadsheetDataService.getSpreadsheetInformation().subscribe({
      next: spreadsheetData => {
        this.spreadsheetData = spreadsheetData;
        if (this.spreadsheetData.hasValuables) {
          this.valuablesLink = this.spreadsheetData.worksheets.filter(worksheet => worksheet.config.type === 'Valuables')[0].title;
        }
        if (this.spreadsheetData.hasBreedables) {
          this.breedablesLink = this.spreadsheetData.worksheets.filter(worksheet => worksheet.config.type === 'Breedables')[0].title;
        }

      }
    });
  }
}
