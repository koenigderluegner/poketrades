import { Component, input, ViewEncapsulation } from '@angular/core';
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
  ],
  host: {
    'class': 'sub-navi-item',
  }
})
export class SubNaviItemComponent {

  readonly text = input<string>()
  readonly link = input<(string | number)[] | string | null>(); // routerLink inputs
  readonly meta = input<string>();

}
