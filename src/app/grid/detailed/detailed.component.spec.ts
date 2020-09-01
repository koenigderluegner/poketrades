import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedComponent } from './detailed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { MOCK_POKEMON } from 'testing/mocks/pokemon-list.mock';

@Component({
  selector: `app-test-host-component`,
  template: `
    <app-detailed [pokemon]="MOCK_POKEMON"></app-detailed>`
})
class TestHostComponent {

  @ViewChild(DetailedComponent)
  public detailedComponent: DetailedComponent;

  MOCK_POKEMON: Pokemon = MOCK_POKEMON[0];
}

describe('DetailedComponent', () => {
  let component: DetailedComponent;
  let fixture: ComponentFixture<DetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailedComponent, TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));


  describe('without input', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DetailedComponent);
      component = fixture.componentInstance;
    });

    it('shouldn\'t create', () => {
      expect(() => {
        fixture = TestBed.createComponent(DetailedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }).toThrow();
    });
  });


  describe('with input', () => {


    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
      testHostComponent = testHostFixture.componentInstance;
      testHostFixture.detectChanges();
    });

    it('should create', () => {
      expect(testHostComponent.detailedComponent).toBeTruthy();
    });
  });
});
