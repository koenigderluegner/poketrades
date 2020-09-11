import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '@shared/shared.module';
import { IconModule } from '../icon/icon.module';
import { BreedingComponent } from './breeding/breeding.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxSubscribeModule } from '@tngtech/ngx-structurals';


@NgModule({
  declarations: [ToolsComponent, BreedingComponent],
  imports: [
    ToolsRoutingModule,
    CommonModule,
    SharedModule,
    IconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxSubscribeModule
  ]
})
export class ToolsModule { }
