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

  filteredTabs = ["Landing Page", "Shiny Living Dex", "Living Dex", "Friend Safari (X & Y)", "Resource",
    "Breedables Overview", "Ban List", "Ban Checker", "Breedables Ball Legality", "Resource Gen7 (Backup)"];

  constructor(private spreadsheetService: SpreadsheetService, private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
     this.loadStartupData()
  }

  loadStartupData() {
    this.spreadsheetService.getSpreadsheet('17KmYOvREddg0SpBGbATH7I15C4JsDfzl-07pnABTueE').pipe(
      tap(spreadsheet => this.spreadsheetDataService.updateSpreadsheetInformation(spreadsheet)),
      switchMap(q => this.spreadsheetService.getWorksheets(q.id, q.worksheets.filter(worksheet => !this.filteredTabs.includes(worksheet.title)).map(worksheet => worksheet.id)))
    ).subscribe(console.log);
  }


}
