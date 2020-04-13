import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Worksheet } from '@shared/interfaces/worksheet';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit, OnDestroy {

  ball: string;
  worksheet: Worksheet;

  subscriptions: Subscription[] = [];

  constructor(
    private spreadsheetDataService: SpreadsheetDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.subscriptions.push(combineLatest([
        this.route.paramMap,
        this.spreadsheetDataService.getSpreadsheetInformation()
      ]).subscribe({
        next: ([params, spreadsheetData]) => {
          console.log(spreadsheetData.worksheets[0].config);
          this.ball = params.get('ball');
          this.worksheet = spreadsheetData.worksheets.filter(
            worksheet => worksheet.config?.ball?.toLowerCase() === this.ball
          )?.[0]
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
