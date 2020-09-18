import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BallComponent } from './ball.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BallComponent', () => {
  let component: BallComponent;
  let fixture: ComponentFixture<BallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [BallComponent],
      providers: [
        SlugifyPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
