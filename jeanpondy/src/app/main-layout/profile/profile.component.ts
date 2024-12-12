import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'] // Korrektur hier
})
export class ProfileComponent {

  selectedLang: string = "en"; // Standardmäßig Englisch

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLang);
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/jean-pondy-9244b0160/', '_blank'); // Korrektur hier
  }

  goToGithub() {
    window.open('https://github.com/JeanPondy/portfolio', '_blank'); // Korrektur hier
  }

  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  scrollToSection(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);

    if (element) {
        const yOffset = -220; // Offset anpassen, falls nötig
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Scrollen mit Animation
        window.scrollTo({
            top: yPosition,
            behavior: 'smooth',
        });

        // Nach dem Scrollen Fokus und Cursor setzen
        setTimeout(() => {
            if (element instanceof HTMLElement) {
                element.focus(); // Fokus setzen

                // Cursor aktivieren, falls das Element ein Eingabefeld ist
                if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                    element.select(); // Inhalt auswählen oder Cursor ins Eingabefeld setzen
                }
            }
        }, 500); // Wartezeit für das Scrollen
    }
}



}
