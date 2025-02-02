import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    MarkdownModule.forRoot({sanitize: SecurityContext.HTML})], providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {position: 'above'}},
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
