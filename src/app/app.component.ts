import { Component, OnInit } from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { NavigationEnd, Router } from '@angular/router';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  spreadsheet: Spreadsheet;

  isLoading = false;
  loadingMessage: string;
  errored = false;
  waitingForRouter = true;


  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private router: Router) {
  }

  ngOnInit(): void {


    const nonIdRoutes = this.router.config.map(route => route.path);

    const routerSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        routerSub.unsubscribe();
        const id = e.url.split('/')?.[1];
        if (id && !nonIdRoutes.includes(id)) {
          this.isLoading = true;
          this.waitingForRouter = false;
          this.loadingMessage = 'Loading spreadsheet from Google API';
          const sub = this.spreadsheetFacade.loadSpreadsheet(id).subscribe({
            next: spreadsheet => {
              this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet);
              this.isLoading = false;
              sub.unsubscribe();
            },
            error: (error) => {
              this.loadingMessage = error.message;
              this.errored = true;
              sub.unsubscribe();
            }
          });

        } else {
          this.isLoading = false;
          this.waitingForRouter = false;

        }

      }
    });
  }

}
