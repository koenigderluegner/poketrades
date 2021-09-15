import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShinyDexComponent } from './shiny-dex.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { BehaviorSubject } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import { SharedModule } from '@shared/shared.module';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import SpyObj = jasmine.SpyObj;

describe('ShinyDexComponent', () => {
  let component: ShinyDexComponent;
  let fixture: ComponentFixture<ShinyDexComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

      spreadsheetSpy.getCurrentSpreadsheet$.and.returnValue(new BehaviorSubject(MOCK_SPREADSHEET));

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, SharedModule],
        declarations: [ShinyDexComponent],
        providers: [
          SlugifyPipe,
          {provide: SpreadsheetFacade, useValue: spreadsheetSpy}
        ],
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
