import { Component, computed, inject } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridControllerComponent } from '../../../grid/grid-controller/grid-controller.component';
import { SubNaviItemComponent } from '@shared/components/sub-navi-item/sub-navi-item.component';
import { ItemComponent } from '../../../icon/item/item.component';
import { RouterOutlet } from '@angular/router';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  imports: [
    GridControllerComponent,
    SubNaviItemComponent,
    ItemComponent,
    RouterOutlet,
    SlugifyPipe
  ],
  host: {
    'class': 'view'
  }
})
export class IndexComponent {
  private readonly currentSpreadsheet = inject(SpreadsheetFacade).currentSpreadsheetRef.value;

  spreadsheetId = computed(() => this.currentSpreadsheet()?.id);
  worksheets = computed(() => this.currentSpreadsheet()?.worksheets.filter(worksheet => worksheet.config?.type === 'Valuables'));
  subTypeItemMap: Record<string, string> = {
    events: 'cherish',
    legendaries: 'master',
    shinies: 'shiny-charm',
    competitives: 'focus-sash',
    rngs: 'teachy-tv'
  };

  getItemMapping(subType?: string): string {
    if (subType) {
      return this.subTypeItemMap[subType.toLocaleLowerCase()] ?? '';
    } else {
      return '';
    }
  }

}
