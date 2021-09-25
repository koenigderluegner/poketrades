import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendSafariShinyDexComponent } from './friend-safari-shiny-dex.component';

describe('FriendSafariShinyDexComponent', () => {
  let component: FriendSafariShinyDexComponent;
  let fixture: ComponentFixture<FriendSafariShinyDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendSafariShinyDexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendSafariShinyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
