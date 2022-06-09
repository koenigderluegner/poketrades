import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComponent } from './help.component';
import { HowToUseGuideComponent } from './components/how-to-use-guide/how-to-use-guide.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpComponent, HowToUseGuideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
