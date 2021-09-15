import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(
    SpreadsheetFacade,
    ['loadSpreadsheet', 'updateCurrentSpreadsheet']
  );


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy}
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
