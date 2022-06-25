import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridControllerComponent } from './grid-controller.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangerComponent } from '../changer/changer.component';

describe('GridControllerComponent', () => {
  let component: GridControllerComponent;
  let fixture: ComponentFixture<GridControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatSelectModule, NoopAnimationsModule, ReactiveFormsModule],
      declarations: [GridControllerComponent, ChangerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
