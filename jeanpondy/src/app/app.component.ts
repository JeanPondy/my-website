import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jeanpondy';
  showBackground = true; // Steuert die Sichtbarkeit des Hintergrunds

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Aktuelle URL in Kleinbuchstaben prüfen
        const currentUrl = event.urlAfterRedirects.toLowerCase();
        this.showBackground = !(
          currentUrl.includes('imprint') || currentUrl.includes('privacy-policy')
        );

        // Scrollt die Seite bei Navigation nach oben
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
