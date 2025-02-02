import {
  Component,
  HostBinding,
  HostListener,
  inject,
  OnInit,
  TemplateRef,
  viewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class HeaderComponent implements OnInit {
  private spreadsheetFacade = inject(SpreadsheetFacade);
  overlay = inject(Overlay);
  viewContainerRef = inject(ViewContainerRef);
  private slugifyPipe = inject(SlugifyPipe);


  @HostBinding('class.app-header') setClass = true;

  spreadsheetData: Spreadsheet | undefined;

  valuablesLink: string | undefined;

  windowSize = window.innerWidth;
  readonly templatePortalContent = viewChild.required<TemplateRef<unknown>>('menuTemplate');
  breeablesLink: string[] = [];
  valuablesLinkArray: string[] = [];
  toolsLink: string[] = [];
  private overlayRef?: OverlayRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.windowSize = (event.target as Window).innerWidth;

    if (this.windowSize >= 1200) {
      this.overlayRef?.dispose();
    }
  }

  ngOnInit(): void {
    this.spreadsheetFacade.getCurrentSpreadsheet$().subscribe({
      next: spreadsheetData => {
        this.breeablesLink = [
          '/' + (spreadsheetData.username ? 'u/' + spreadsheetData.username : spreadsheetData.id),
          'breedables',
          'overview'];
        this.spreadsheetData = spreadsheetData;
        if (this.spreadsheetData.hasValuables) {
          this.valuablesLink = this.spreadsheetData.worksheets.filter(worksheet => worksheet.config?.type === 'Valuables')[0].title;
          this.valuablesLinkArray = [
            '/' + (spreadsheetData.username ? 'u/' + spreadsheetData.username : spreadsheetData.id),
            'valuables',
            this.slugifyPipe.transform(this.valuablesLink)];
        }

        this.toolsLink = [
          spreadsheetData ? '/' + (spreadsheetData.username ? 'u/' + spreadsheetData.username : spreadsheetData.id) : '',
          'tools'];
      }
    });
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
