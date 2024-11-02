import { Component,  ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements AfterViewInit {

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
    const aboutMeSection = this.el.nativeElement.querySelector("#pokedex");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }



  goToElpolloloco(){
    window.open('https://jean-pondy.com/el-pollo-loco-jp/', '-blabk');
  }

  goToGithub(){
    window.open(' https://github.com/JeanPondy/elPolloLoco', '-blabk');
  }


}
