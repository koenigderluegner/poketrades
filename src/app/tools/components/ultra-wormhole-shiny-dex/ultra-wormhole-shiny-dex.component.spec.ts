import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraWormholeShinyDexComponent } from './ultra-wormhole-shiny-dex.component';

describe('UltraWormholeShinyDexComponent', () => {
  let component: UltraWormholeShinyDexComponent;
  let fixture: ComponentFixture<UltraWormholeShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltraWormholeShinyDexComponent ]
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
