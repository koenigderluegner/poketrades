import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BallComponent } from './ball.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

describe('BallComponent', () => {
  let component: BallComponent;
  let fixture: ComponentFixture<BallComponent>;

  const facadeSpy = jasmine.createSpyObj('SpreadsheetFacade', ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

    facadeSpy.getCurrentSpreadsheet$.and.returnValue(of(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BallComponent],
      providers: [
        SlugifyPipe,
        {provide: SpreadsheetFacade, useValue: facadeSpy}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
