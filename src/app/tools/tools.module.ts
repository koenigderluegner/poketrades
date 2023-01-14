import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '@shared/shared.module';
import { IconModule } from '../icon/icon.module';
import { BreedingComponent } from './breeding/breeding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterLevelUpMovesPipe } from './pipes/filter-level-up-moves.pipe';
import { GridModule } from '../grid/grid.module';
import { ShinyDexComponent } from './components/shiny-dex/shiny-dex.component';
import { ShinyDexEntryToPokemonPipe } from './pipes/shiny-dex-entry-to-pokemon.pipe';
import { FriendSafariShinyDexComponent } from './components/friend-safari-shiny-dex/friend-safari-shiny-dex.component';
import {
  UltraWormholeShinyDexComponent
} from './components/ultra-wormhole-shiny-dex/ultra-wormhole-shiny-dex.component';
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTooltipModule } from "@angular/material/tooltip";


@NgModule({
  declarations: [
    ToolsComponent,
    BreedingComponent,
    FilterLevelUpMovesPipe,
    ShinyDexComponent,
    ShinyDexEntryToPokemonPipe,
    FriendSafariShinyDexComponent,
    UltraWormholeShinyDexComponent
  ],
  imports: [
    ToolsRoutingModule,
    CommonModule,
    SharedModule,
    IconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    GridModule,
    MatTooltipModule
  ]
})
export class ToolsModule {
}
