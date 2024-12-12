import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  
  /* ---------------------------------------------------------- */
  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  constructor(private router: Router) {} // Router injizieren

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;  // Setze den aktiven Abschnitt
    
 
 
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
      const yOffset = -80; // Offset für Header/Footer
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

  // externe Links
  goToLinkedin(){
    window.open('https://www.linkedin.com/in/jean-pondy-9244b0160/', '-blabk');
  }

  goToGithub(){
    window.open('https://github.com/JeanPondy/portfolio', '-blabk');
  }

}
