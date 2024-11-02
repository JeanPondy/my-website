import { Component, ElementRef, AfterViewInit  } from '@angular/core';

import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { SimpleCrmComponent } from './simple-crm/simple-crm.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { DaBubbleComponent } from "./da-bubble/da-bubble.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, ElPolloLocoComponent, SimpleCrmComponent, PokedexComponent, DaBubbleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {

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
    const aboutMeSection = this.el.nativeElement.querySelector("#my-portfolio");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }

}
