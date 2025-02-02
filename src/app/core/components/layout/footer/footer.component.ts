import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink
  ],
  host: {
    'class': 'footer'
  }
})
export class FooterComponent {
}
