import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ball-guy-bubble',
  templateUrl: './ball-guy-bubble.component.html',
  styleUrls: ['./ball-guy-bubble.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ball-guy-bubble',
  }
})
export class BallGuyBubbleComponent {
}
