import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyDexComponent } from './shiny-dex.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShinyDexComponent', () => {
  let component: ShinyDexComponent;
  let fixture: ComponentFixture<ShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ShinyDexComponent]
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
