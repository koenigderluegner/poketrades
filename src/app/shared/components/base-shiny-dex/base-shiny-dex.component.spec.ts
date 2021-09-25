import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseShinyDexComponent } from './base-shiny-dex.component';

describe('BaseShinyDexComponent', () => {
  let component: BaseShinyDexComponent;
  let fixture: ComponentFixture<BaseShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseShinyDexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseShinyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
