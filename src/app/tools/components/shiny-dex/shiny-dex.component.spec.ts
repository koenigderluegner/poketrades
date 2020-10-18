import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyDexComponent } from './shiny-dex.component';

describe('ShinyDexComponent', () => {
  let component: ShinyDexComponent;
  let fixture: ComponentFixture<ShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShinyDexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
