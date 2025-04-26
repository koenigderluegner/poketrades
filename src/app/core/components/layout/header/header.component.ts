import { Component, effect, inject, TemplateRef, viewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIcon,
    MatButton,
    MatMiniFabButton
  ],
  host: {
    'class': 'app-header',
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent {
  overlay = inject(Overlay);
  viewContainerRef = inject(ViewContainerRef);
  spreadsheetData: Spreadsheet | undefined;
  valuablesLink: string | undefined;
  windowSize = window.innerWidth;
  readonly templatePortalContent = viewChild.required<TemplateRef<unknown>>('menuTemplate');
  breeablesLink: string[] = [];
  valuablesLinkArray: string[] = [];
  toolsLink: string[] = ['tools'];
  livingDexesLink: string[] = ['living-dexes', 'home'];
  protected spreadsheetFacade = inject(SpreadsheetFacade);
  private slugifyPipe = inject(SlugifyPipe);
  private overlayRef?: OverlayRef;

  constructor() {
    effect(() => {
      const spreadsheetData = this.spreadsheetFacade.currentSpreadsheetRef.value();

      if (spreadsheetData) {
        this.breeablesLink = [
          '/' + this.spreadsheetFacade.sheetURLPath(),
          'breedables',
          'overview'];
        this.spreadsheetData = spreadsheetData;
        if (this.spreadsheetData.hasValuables) {
          this.valuablesLink = this.spreadsheetData.worksheets.filter(worksheet => worksheet.config?.type === 'Valuables')[0].title;
          this.valuablesLinkArray = [
            '/' + this.spreadsheetFacade.sheetURLPath(),
            'valuables',
            this.slugifyPipe.transform(this.valuablesLink)];
        }

        this.toolsLink = ['/' + this.spreadsheetFacade.sheetURLPath(), 'tools'];
        this.livingDexesLink = ['/' + this.spreadsheetFacade.sheetURLPath(), 'living-dexes', 'home'];
      }


    });
  }

  onResize(event: UIEvent) {
    this.windowSize = (event.target as Window).innerWidth;

    if (this.windowSize >= 1200) {
      this.overlayRef?.dispose();
    }
  }


  openMenu(): void {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .top(`53px`);

    config.width = '100%';
    config.height = 'calc(100vh - 53px)';
    config.backdropClass = 'main-menu-backdrop';
    config.scrollStrategy = this.overlay.scrollStrategies.block();


    config.hasBackdrop = true;

    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });

    this.overlayRef.attach(new TemplatePortal(this.templatePortalContent(), this.viewContainerRef));
  }

  closeMenu(): void {
    this.overlayRef?.dispose();
  }
}
