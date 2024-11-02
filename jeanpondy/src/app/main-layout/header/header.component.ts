import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Hinzugefügt, um Angular-Direktiven nutzen zu können

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // `CommonModule` hier importieren
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
}
