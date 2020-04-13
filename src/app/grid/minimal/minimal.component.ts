import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  host: {class: 'grid-item'},
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
