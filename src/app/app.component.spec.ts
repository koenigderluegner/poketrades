import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(
    SpreadsheetFacade,
    ['loadSpreadsheet', 'updateCurrentSpreadsheet']
  );


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy},
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
