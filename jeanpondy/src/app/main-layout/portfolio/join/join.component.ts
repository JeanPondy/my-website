import { Component, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent implements AfterViewInit  {

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
    const aboutMeSection = this.el.nativeElement.querySelector("#join");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }


  goToJoin(){
    window.open('https://jean-pondy.com/join/login.html', '-blabk');
  }

  goToGithub(){
    window.open('https://github.com/lindapreindl/Join', '-blabk');
  }

 

}
