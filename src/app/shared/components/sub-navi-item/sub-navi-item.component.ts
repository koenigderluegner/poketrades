import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub-navi-item',
  templateUrl: './sub-navi-item.component.html',
  styleUrls: ['./sub-navi-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class SubNaviItemComponent {

  @HostBinding('class.sub-navi-item') subNaviClass = true;

  @Input() text: string | undefined;
  @Input() link: (string | number)[] | string | null | undefined; // routerLink inputs
  @Input() meta: string | undefined;

}
