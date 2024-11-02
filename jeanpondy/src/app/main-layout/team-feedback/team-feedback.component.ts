import { Component , ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-team-feedback',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './team-feedback.component.html',
  styleUrl: './team-feedback.component.scss'
})
export class TeamFeedbackComponent  implements AfterViewInit {

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
    const aboutMeSection = this.el.nativeElement.querySelector("#team-feedback");
    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
  }



  currentIndex: number = 0;
  
  // Array mit Nachrichten und Bildern
  messages = [
    { text: 'Jean really kept the team together with his great organization and clear communication. We wouldn’t have got this far without his commitment.', imageUrl: 'assets/img/Elon.webp', name: 'Elon Musk - Team Partner' },
    { text: 'It was a great pleasure to work with Jean. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well', imageUrl: 'assets/img/vitalik-buterin.jpg.webp', name: 'V.Buterin - Team Partner ' },
    { text: 'J.Pondy was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a signigicant contribution to us achieving our goals.', imageUrl: 'assets/img/reshma.png', name: 'Reshma Saujani Team Partner' },
    { text: 'It was a true pleasure collaborating with Jean. He has a natural ability to motivate and inspire team members to bring their best ideas to the table, consistently contributing valuable insights during brainstorming sessions. When it comes to the well-being of the team, Jean was always approachable and willing to lend a listening ear or offer support, all while maintaining a fantastic sense of humor that lifted the group’s spirits', imageUrl: 'assets/img/doris.png', name: 'doris Tamdes Team Partner' }
  ];

  // Aktuelle Nachricht anzeigen
  get currentMessage() {
    return this.messages[this.currentIndex];
  }

  // Nächste Nachricht
  nextMessage() {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  }

  // Vorherige Nachricht
  previousMessage() {
    this.currentIndex = (this.currentIndex - 1 + this.messages.length) % this.messages.length;
  }

}
