import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit {

  @HostBinding('class.view') true;

  constructor() { }

  ngOnInit(): void {
  }

}
