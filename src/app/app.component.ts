import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '@shared/services/spreadsheet.service';
import { switchMap, tap } from 'rxjs/operators';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private spreadsheetService: SpreadsheetService, private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.loadStartupData()
  }

  loadStartupData() {
    this.spreadsheetService.getSpreadsheet('17KmYOvREddg0SpBGbATH7I15C4JsDfzl-07pnABTueE').pipe(
      tap(spreadsheet => this.spreadsheetDataService.updateSpreadsheetInformation(spreadsheet)),
      switchMap(q => this.spreadsheetService.getWorksheets(q.id, q.worksheets.map(worksheet => worksheet.id)))
    ).subscribe(console.log);
  }


}
