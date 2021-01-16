import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ball-guy-bubble',
  templateUrl: './ball-guy-bubble.component.html',
  styleUrls: ['./ball-guy-bubble.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BallGuyBubbleComponent implements OnInit {

  @HostBinding('class.ball-guy-bubble') private setClass = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
