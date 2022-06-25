import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import SpyObj = jasmine.SpyObj;

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OverviewComponent],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy}
      ],
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
