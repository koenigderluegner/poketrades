import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {position: 'above'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
