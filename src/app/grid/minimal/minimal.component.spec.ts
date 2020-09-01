import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalComponent } from './minimal.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { MOCK_POKEMON } from '../../../../testing/mocks/pokemon-list.mock';


@Component({
  selector: `app-test-host-component`,
  template: `
    <app-minimal [pokemon]="MOCK_POKEMON"></app-minimal>`
})
class TestHostComponent {

  @ViewChild(MinimalComponent)
  public minimalComponent: MinimalComponent;

  MOCK_POKEMON: Pokemon = MOCK_POKEMON[0];
}

describe('MinimalComponent', () => {


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MinimalComponent, TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));


  describe('without input', () => {
    let component: MinimalComponent;
    let fixture: ComponentFixture<MinimalComponent>;

    it('shouldn\'t create', () => {
      expect(() => {
        fixture = TestBed.createComponent(MinimalComponent);
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
      expect(testHostComponent.minimalComponent).toBeTruthy();
    });
  });

});
