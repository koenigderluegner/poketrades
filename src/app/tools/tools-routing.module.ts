import { Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { BreedingComponent } from './breeding/breeding.component';
import { ShinyDexComponent } from './components/shiny-dex/shiny-dex.component';
import { FriendSafariShinyDexComponent } from './components/friend-safari-shiny-dex/friend-safari-shiny-dex.component';
import {
  UltraWormholeShinyDexComponent
} from './components/ultra-wormhole-shiny-dex/ultra-wormhole-shiny-dex.component';


export const routes: Routes = [
  {
    path: '', redirectTo: 'breeding', pathMatch: "full"
  },
  {
    path: '', component: ToolsComponent, children: [
      {
        path: 'breeding', component: BreedingComponent
      },
      {
        path: 'shiny-dex', component: ShinyDexComponent
      },
      {
        path: 'friend-safari-shiny-dex', component: FriendSafariShinyDexComponent
      },
      {
        path: 'ultra-wormhole-shiny-dex', component: UltraWormholeShinyDexComponent
      }
    ]
  }
];
