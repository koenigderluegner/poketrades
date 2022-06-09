import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogComponent } from './changelog.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownModule.forRoot({sanitize: SecurityContext.HTML})],
      declarations: [ChangelogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
