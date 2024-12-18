import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslate } from './app/translate.providers';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),  // Router wird hier bereitgestellt
    provideHttpClient(),
    ...provideTranslate  // Übersetzungsanbieter
  ]
})
.catch((err) => console.error(err));

