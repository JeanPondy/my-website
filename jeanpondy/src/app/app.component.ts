import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,       // Für Standard Angular-Direktiven
    RouterOutlet,       // Zum Hinzufügen der Routing-Funktionalität
    HeaderComponent,    // Importiert Header, falls verwendet
    FooterComponent,    // Importiert Footer, falls verwendet
    TranslateModule     // Falls du Übersetzungen verwendest
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jeanpondy';
}
