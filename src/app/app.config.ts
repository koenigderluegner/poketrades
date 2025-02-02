import { ApplicationConfig, SecurityContext } from '@angular/core';
import { provideRouter, withComponentInputBinding, } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMarkdown } from 'ngx-markdown';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material/tooltip";
import { appRoutes } from "./app-routing.module";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
    ),
    provideAnimationsAsync(),
    provideMarkdown({sanitize: SecurityContext.HTML}),
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {position: 'above'}},
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    SlugifyPipe

  ],
};
