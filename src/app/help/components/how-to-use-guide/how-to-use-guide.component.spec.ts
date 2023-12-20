import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseGuideComponent } from './how-to-use-guide.component';

describe('HowToUseGuideComponent', () => {
  let component: HowToUseGuideComponent;
  let fixture: ComponentFixture<HowToUseGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToUseGuideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
