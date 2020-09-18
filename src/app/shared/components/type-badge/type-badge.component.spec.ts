import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeBadgeComponent } from './type-badge.component';

describe('TypeBadgeComponent', () => {
  let component: TypeBadgeComponent;
  let fixture: ComponentFixture<TypeBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TypeBadgeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
