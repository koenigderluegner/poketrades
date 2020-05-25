import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerComponent } from './changer.component';

describe('ChangerComponent', () => {
  let component: ChangerComponent;
  let fixture: ComponentFixture<ChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
