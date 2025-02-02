import { Component, inject, OnInit } from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { DatabaseFacadeService } from './database/database-facade.service';
import { UserService } from './database/services/user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FooterComponent } from "@core/components/layout/footer/footer.component";
import { HeaderComponent } from "@core/components/layout/header/header.component";
import { SpinnerComponent } from "@shared/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    SpinnerComponent,
    
  ]
})
export class AppComponent implements OnInit {
  apiKey = environment.googleApiKey;
  spreadsheet: Spreadsheet | undefined;
  isLoading = false;
  loadingMessage: string | undefined;
  errored = false;
  waitingForRouter = true;
  private spreadsheetFacade = inject(SpreadsheetFacade);
  private databaseFacadeService = inject(DatabaseFacadeService);
  private userService = inject(UserService);
  private router = inject(Router);
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private nonIdRoutes: string[] = [];

  ngOnInit(): void {

    this.registerIcons([
      {title: 'github', link: 'assets/images/svg-icons/github.svg'},
      {title: 'shiny-stars', link: 'assets/images/svg-icons/shiny-stars.svg'},
    ]);

    this.nonIdRoutes = this.router.config.map((route: Route) => route.path ? route.path : '');

    const routerSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        routerSub.unsubscribe();
        this.databaseFacadeService.loadDatabases().subscribe(() => {

          const id = e.url.split('/')?.[1];

          if (id === 'u') { // user route
            const username = e.url.split('/')?.[2];
            this.isLoading = true;
            this.loadingMessage = 'Search user ' + username;
            this.waitingForRouter = false;

            this.userService.findUser(username).subscribe({
              next: spreadsheetId => {
                this.loadData(spreadsheetId, username);
              },
              error: err => {
                this.loadingMessage = err;
                this.errored = true;
              }
            });

          } else {
            this.loadData(id);
          }
        });
      }
    });


  }

  loadData(spreadsheetId: string, username?: string): void {
    if (spreadsheetId && !this.nonIdRoutes.includes(spreadsheetId)) {
      this.isLoading = true;
      this.waitingForRouter = false;

      this.loadingMessage = 'Load databases from server';

      this.loadingMessage = 'Loading spreadsheet from Google API';
      const sub = this.spreadsheetFacade.loadSpreadsheet(spreadsheetId, this.apiKey).subscribe({
        next: (spreadsheet: Spreadsheet) => {
          if (username) {
            spreadsheet.username = username;
          }
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

  registerIcons(iconList: { title: string; link: string; }[]): void {
    for (const icon of iconList) {
      this.matIconRegistry.addSvgIcon(
        icon.title,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.link)
      );
    }
  }

}
