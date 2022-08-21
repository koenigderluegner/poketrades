import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseShinyDexComponent } from './base-shiny-dex.component';
import { PokemonEntry } from '../../../database/models/pokemon-entry.interface';
import { ShinyList } from '@shared/interfaces/shiny-list.interface';


class TestClass extends BaseShinyDexComponent {
  protected buildEmptyShinyList(pokemonEntries: PokemonEntry[]): ShinyList {
    return {};
  }

}


describe('BaseShinyDexComponent', () => {
  let component: BaseShinyDexComponent;
  let fixture: ComponentFixture<BaseShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseShinyDexComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
