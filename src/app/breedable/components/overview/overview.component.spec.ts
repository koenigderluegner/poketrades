import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy},
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
