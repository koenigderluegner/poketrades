import { Component, HostBinding, Input, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";

@Component({
  selector: 'app-sub-navi-item',
  templateUrl: './sub-navi-item.component.html',
  styleUrls: ['./sub-navi-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink,
    SlugifyPipe
  ]
})
export class SubNaviItemComponent {

  @HostBinding('class.sub-navi-item') subNaviClass = true;

  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
  @Input() text: string | undefined;
  readonly link = input<(string | number)[] | string | null>(); // routerLink inputs
  readonly meta = input<string>();

}
