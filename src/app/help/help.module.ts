import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { HowToUseGuideComponent } from './components/how-to-use-guide/how-to-use-guide.component';


@NgModule({
  declarations: [HelpComponent, HowToUseGuideComponent],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule {
}
