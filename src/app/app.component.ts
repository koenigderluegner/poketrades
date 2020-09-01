import { Component, OnInit } from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { NavigationEnd, Router } from '@angular/router';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { DatabaseFacadeService } from './database/database-facade.service';
import { UserService } from './database/services/user.service';

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
  private nonIdRoutes: any;


  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private databaseFacadeService: DatabaseFacadeService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {


    this.nonIdRoutes = this.router.config.map(route => route.path);


    const routerSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        routerSub.unsubscribe();
        const id = e.url.split('/')?.[1];
        console.log(e.url);
        console.log(id);

        if (id === 'u') { // user route
          this.userService.findUser(e.url.split('/')?.[2]).subscribe(spreadsheetId => {
            this.loadData(spreadsheetId);
          });
        } else {
          this.loadData(id);
        }
      }
    });


  }

  loadData(spreadsheetId: string) {
    if (spreadsheetId && !this.nonIdRoutes.includes(spreadsheetId)) {
      this.isLoading = true;
      this.waitingForRouter = false;

      this.loadingMessage = 'Load databases from server';
      this.databaseFacadeService.loadDatabases().subscribe(() => {
        this.loadingMessage = 'Loading spreadsheet from Google API';
        const sub = this.spreadsheetFacade.loadSpreadsheet(spreadsheetId).subscribe({
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
      });

    } else {
      this.isLoading = false;
      this.waitingForRouter = false;

    }
  }

}
