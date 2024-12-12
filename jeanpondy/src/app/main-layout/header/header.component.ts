import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Angular-Direktiven
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showHeaderMenu = true;
  menuOpen: boolean = false;
  selectedLang: string = "en";
  activeSection: string = '';
  isMobileMenuOpen: boolean = false;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       // console.log('Aktuelle URL:', event.urlAfterRedirects); // Debugging
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.documentElement.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  scrollToSection(section: string) {
    // Prüfen, ob sich der Benutzer auf der Startseite befindet
    if (this.router.url !== '/') {
      // Zur Startseite navigieren und nach kurzer Verzögerung scrollen
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.performScroll(section), 0); // Scroll nach kurzer Verzögerung
      });
    } else {
      // Direkt scrollen, wenn auf der Startseite
      this.performScroll(section);
    }
  }

  private performScroll(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -220; // Offset für Sticky Header
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
