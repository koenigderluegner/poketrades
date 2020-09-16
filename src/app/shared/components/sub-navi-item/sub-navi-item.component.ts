import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub-navi-item',
  templateUrl: './sub-navi-item.component.html',
  styleUrls: ['./sub-navi-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubNaviItemComponent {

  @Input() text: string | undefined;
  @Input() link: (string | number)[] | string | null | undefined;
  @Input() meta: string | undefined;

}
