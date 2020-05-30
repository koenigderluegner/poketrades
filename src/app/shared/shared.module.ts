import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { SubNaviItemComponent } from './components/sub-navi-item/sub-navi-item.component';
import { RouterModule } from '@angular/router';
import { CastBreedablePipe } from './pipes/cast-breedable.pipe';
import { CastValuablePipe } from './pipes/cast-valuable.pipe';
import { BallGuyBubbleComponent } from './components/ball-guy-bubble/ball-guy-bubble.component';


@NgModule({
  declarations: [
    SlugifyPipe,
    SubNaviItemComponent,
    CastBreedablePipe,
    CastValuablePipe,
    BallGuyBubbleComponent
  ],
  exports: [
    SlugifyPipe,
    SubNaviItemComponent,
    CastBreedablePipe,
    CastValuablePipe,
    BallGuyBubbleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
