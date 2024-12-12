import { Component, ElementRef, AfterViewInit  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Intersection Observer für Scroll-Effekte
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    });

    // Überwachen des Elements mit der ID #about-me
    const aboutMeSection = this.el.nativeElement.querySelector("#my-skills");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }

  /* ----------------------------- */

  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
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
