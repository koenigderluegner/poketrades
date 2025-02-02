import { Component, ViewEncapsulation } from '@angular/core';
import { HowToUseGuideComponent } from "./components/how-to-use-guide/how-to-use-guide.component";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    HowToUseGuideComponent
  ]
})
export class HelpComponent {

}
