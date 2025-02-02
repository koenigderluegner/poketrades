import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailedComponent } from './detailed.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { MOCK_POKEMON } from 'testing/mocks/pokemon-list.mock';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: `app-test-host-component`,
  template: `
    <app-detailed [pokemon]="MOCK_POKEMON"></app-detailed>`,
  standalone: false
})
class TestHostComponent {

  readonly detailedComponent = viewChild(DetailedComponent);

  MOCK_POKEMON: Pokemon = MOCK_POKEMON[0];
}

describe('DetailedComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedComponent, TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    })
      .compileComponents();
  }));


  describe('with input', () => {


    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
      testHostComponent = testHostFixture.componentInstance;
      testHostFixture.detectChanges();
    });

    it('should create', () => {
      expect(testHostComponent.detailedComponent()).toBeTruthy();
    });
  });
});
