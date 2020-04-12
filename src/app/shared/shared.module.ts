import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { SubNaviItemComponent } from './components/sub-navi-item/sub-navi-item.component';



@NgModule({
  declarations: [SlugifyPipe, SubNaviItemComponent],
  exports: [
    SlugifyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
