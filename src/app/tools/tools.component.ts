import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class ToolsComponent {

  @HostBinding('class.view') classes = true;

}
