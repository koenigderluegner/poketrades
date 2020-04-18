import { Component, OnInit } from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { NavigationEnd, Router } from '@angular/router';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  spreadsheet: Spreadsheet;

  isLoading$: Observable<boolean>;
  isDefaultSpreadsheet$: Observable<boolean>;
  loadingMessage: string;


  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private router: Router) {
  }

  ngOnInit(): void {

    this.isDefaultSpreadsheet$ = this.spreadsheetFacade.isDefaultSpreadhseet$();

    this.loadingMessage = 'Looking for spreadsheet id';

    let sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const id = e.url.split('/')[1];
        this.spreadsheetFacade.loadSpreadsheet(id).subscribe({
          next: spreadsheet => {
            this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet);
            console.log('subbbb', spreadsheet);
          },
          error: console.log
        });
        sub.unsubscribe();
      }
    });
  }

}
