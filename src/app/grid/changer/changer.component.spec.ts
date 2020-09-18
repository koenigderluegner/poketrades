import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangerComponent } from './changer.component';

describe('ChangerComponent', () => {
  let component: ChangerComponent;
  let fixture: ComponentFixture<ChangerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerComponent]
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
