import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class FooterComponent {

  @HostBinding('class.footer') private setClass = true;


}
