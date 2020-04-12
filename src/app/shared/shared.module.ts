import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { SubNaviItemComponent } from './components/sub-navi-item/sub-navi-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SlugifyPipe, SubNaviItemComponent],
  exports: [
    SlugifyPipe,
    SubNaviItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
