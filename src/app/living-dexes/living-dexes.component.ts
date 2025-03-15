import { Component } from '@angular/core';
import { GridControllerComponent } from "../grid/grid-controller/grid-controller.component";
import { ItemComponent } from "../icon/item/item.component";
import { RouterOutlet } from "@angular/router";
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";

@Component({
  selector: 'app-living-dexes',
  imports: [
    GridControllerComponent,
    ItemComponent,
    RouterOutlet,
    SubNaviItemComponent
  ],
  templateUrl: './living-dexes.component.html',
  host: {
    'class': 'view'
  }
})
export class LivingDexesComponent {

}
