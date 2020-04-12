import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navi-item',
  templateUrl: './sub-navi-item.component.html',
  styleUrls: ['./sub-navi-item.component.scss']
})
export class SubNaviItemComponent implements OnInit {

  @Input() text: string;
  @Input() link: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
