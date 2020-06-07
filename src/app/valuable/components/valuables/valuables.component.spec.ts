import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesComponent } from './valuables.component';

describe('ValuablesComponent', () => {
  let component: ValuablesComponent;
  let fixture: ComponentFixture<ValuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
