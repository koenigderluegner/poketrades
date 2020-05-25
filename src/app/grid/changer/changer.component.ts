import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {class: 'grid-changer'}
})
export class ChangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
