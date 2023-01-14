import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { OverlayModule } from '@angular/cdk/overlay';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { FooterComponent } from './components/layout/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule
  ],
  providers: [
    SlugifyPipe
  ]
})
export class CoreModule { }
