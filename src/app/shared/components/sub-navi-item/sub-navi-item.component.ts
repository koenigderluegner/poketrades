import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sub-navi-item',
  templateUrl: './sub-navi-item.component.html',
  styleUrls: ['./sub-navi-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink,
    SlugifyPipe,
  ],
  host: {
    'class': 'sub-navi-item',
  },
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: ['queryParamsHandling', 'routerLink: link'],
    }, {
      directive: RouterLinkActive,
    },
  ]
})
export class SubNaviItemComponent {
  protected readonly routerLink: RouterLink = inject(RouterLink, {self: true});
  protected readonly routerLinkActive = toSignal(inject(RouterLinkActive, {self: true}).isActiveChange);

  readonly text = input<string>();
  readonly meta = input<string>();

}
