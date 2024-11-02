import { Component,  ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-simple-crm',
  standalone: true,
  imports: [],
  templateUrl: './simple-crm.component.html',
  styleUrl: './simple-crm.component.scss'
})
export class SimpleCrmComponent implements AfterViewInit {


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
    const aboutMeSection = this.el.nativeElement.querySelector("#simple-crm");
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
