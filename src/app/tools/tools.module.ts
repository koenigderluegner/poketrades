import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [ToolsComponent],
  imports: [
    ToolsRoutingModule,
    CommonModule,
    SharedModule,
    IconModule
  ]
})
export class ToolsModule { }
