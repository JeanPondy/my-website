// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslate } from './app/translate.providers';  // Importiere die Funktion

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ...provideTranslate  // Korrektur: keine Klammern, da es ein Array ist
  ]
})
.catch((err) => console.error(err));
