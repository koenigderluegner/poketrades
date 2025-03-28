import { Component, ViewEncapsulation } from '@angular/core';
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";
import { ItemComponent } from "../icon/item/item.component";
import { RouterOutlet } from "@angular/router";
import { GridControllerComponent } from "../grid/grid-controller/grid-controller.component";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    SubNaviItemComponent,
    ItemComponent,
    RouterOutlet,
    GridControllerComponent
  ],
  host: {
    'class': 'view'
  }
})
export class ToolsComponent {

}
