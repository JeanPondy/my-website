import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  
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
    const aboutMeSection = this.el.nativeElement.querySelector("#about-me");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }
}
