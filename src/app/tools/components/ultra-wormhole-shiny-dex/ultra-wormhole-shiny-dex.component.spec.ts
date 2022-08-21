import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraWormholeShinyDexComponent } from './ultra-wormhole-shiny-dex.component';
import { of } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { GridModule } from '../../../grid/grid.module';

describe('UltraWormholeShinyDexComponent', () => {
  let component: UltraWormholeShinyDexComponent;
  let fixture: ComponentFixture<UltraWormholeShinyDexComponent>;

  const facadeSpy = jasmine.createSpyObj('SpreadsheetFacade', ['getCurrentSpreadsheet$']);
  const databaseFacadeServiceSpy = jasmine.createSpyObj('DatabaseFacadeService', ['getPokemon']);


  beforeEach(async () => {

    facadeSpy.getCurrentSpreadsheet$.and.returnValue(of(MOCK_SPREADSHEET));
    databaseFacadeServiceSpy.getPokemon.and.returnValue(of([]));


    await TestBed.configureTestingModule({
      imports: [GridModule],
      declarations: [UltraWormholeShinyDexComponent],
      providers: [
        {provide: SpreadsheetFacade, useValue: facadeSpy},
        {provide: DatabaseFacadeService, useValue: databaseFacadeServiceSpy},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraWormholeShinyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
