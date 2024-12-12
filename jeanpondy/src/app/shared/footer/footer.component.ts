import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Korrigiert: "styleUrl" zu "styleUrls"
})
export class FooterComponent {

  /* ---------------------------------------------------------- */
  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  constructor(private router: Router) {} // Router injizieren

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;

    // Prüfen, ob der Benutzer sich auf der Hauptseite befindet
    if (this.router.url !== '/') {
      // Zur Hauptseite navigieren und danach scrollen
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.performScroll(section), 0); // Scroll-Logik nach kurzer Verzögerung
      });
    } else {
      // Direkt scrollen, wenn bereits auf der Hauptseite
      this.performScroll(section);
    }
  }

  private performScroll(section: string) {
    const element = document.getElementById(section);

    if (element) {
        const yOffset = -400; // Offset anpassen, falls nötig
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

  // Externe Links
  goToLinkedin() {
    window.open('https://www.linkedin.com/in/jean-pondy-9244b0160/', '_blank'); // Korrigiert: "-blabk" zu "_blank"
  }

  goToGithub() {
    window.open('https://github.com/JeanPondy/portfolio', '_blank'); // Korrigiert: "-blabk" zu "_blank"
  }
}
