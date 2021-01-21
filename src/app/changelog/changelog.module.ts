import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangelogComponent} from './changelog.component';
import {MarkdownModule} from 'ngx-markdown';
import {ChangelogRoutingModule} from './changelog-routing.module';


@NgModule({
  declarations: [ChangelogComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    ChangelogRoutingModule
  ]
})
export class ChangelogModule {
}
