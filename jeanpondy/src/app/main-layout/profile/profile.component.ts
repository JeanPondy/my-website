import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  goToLinkedin(){
    window.open('https://www.linkedin.com/in/jean-pondy-9244b0160/', '-blabk');
  }

  goToGithub(){
    window.open('https://github.com/JeanPondy/portfolio', '-blabk');
  }
  /* --------------------------------------------------- */

  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;  // Setze den aktiven Abschnitt
    
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -220; // 80px Abstand vom oberen Rand
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

}
