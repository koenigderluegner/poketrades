import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingDexesComponent } from './living-dexes.component';

describe('LivingDexesComponent', () => {
  let component: LivingDexesComponent;
  let fixture: ComponentFixture<LivingDexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingDexesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LivingDexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
