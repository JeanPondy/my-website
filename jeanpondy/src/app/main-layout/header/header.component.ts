import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Hinzugefügt, um Angular-Direktiven nutzen zu können
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], // `CommonModule` hier importieren
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showHeaderMenu = true;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Oder die Sprache, die du ver
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Aktuelle URL in Kleinbuchstaben prüfen
        const currentUrl = event.urlAfterRedirects.toLowerCase();
        console.log('Current URL:', currentUrl); // Debug-Ausgabe
        this.showHeaderMenu = !(
          currentUrl.includes('imprint') || currentUrl.includes('privacy-policy')
        );
        console.log('Show Header Menu:', this.showHeaderMenu); // Debug-Ausgabe
      }
    }); // Hier das fehlende schließende `);` hinzugefügt
  }

  menuOpen: boolean = false;
  selectedLang: string = "en";

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.documentElement.style.overflow = 'hidden';  
    } else {
      document.documentElement.style.overflow = '';  
    }
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  activeSection: string = '';
  isMobileMenuOpen: boolean = false;

  scrollToSection(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -220;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  goToHome() {
    this.router.navigate(['/']); // Navigiert zur Startseite
  }
}
