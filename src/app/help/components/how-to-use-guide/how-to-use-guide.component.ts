import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-how-to-use-guide',
  templateUrl: './how-to-use-guide.component.html',
  styleUrls: ['./how-to-use-guide.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'how-to-use-guide',
  }
})
export class HowToUseGuideComponent {
}
