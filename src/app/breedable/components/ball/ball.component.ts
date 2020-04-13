import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Worksheet } from '@shared/interfaces/worksheet';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit, OnDestroy {

  worksheetTitle: string;
  worksheet: Worksheet;

  subscriptions: Subscription[] = [];

  constructor(
    private spreadsheetDataService: SpreadsheetDataService,
    private route: ActivatedRoute,
    private slugifyPipe: SlugifyPipe
  ) {
  }

  ngOnInit(): void {

    this.subscriptions.push(combineLatest([
        this.route.paramMap,
        this.spreadsheetDataService.getSpreadsheetInformation()
      ]).subscribe({
        next: ([params, spreadsheetData]) => {

          this.worksheetTitle = params.get('worksheetTitle');
          this.worksheet = spreadsheetData.worksheets.filter(
            worksheet => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle
          )?.[0];

        }
      })
    );

  }

  ngOnDestroy(): void {
    for (let subscribtion of this.subscriptions) {
      subscribtion.unsubscribe();
    }
  }
}
