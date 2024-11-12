// translate.providers.ts
import { Provider } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment'; // Import der environment-Datei

// Factory für den HttpLoader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.i18nBaseUrl, '.json'); // Verwendung der dynamischen Basis-URL
}

// Exportiere den Provider
export const provideTranslate: Provider[] = [
  ...TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }).providers as Provider[]  // Typumwandlung auf Provider[]
];
