import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team-feedback',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, TranslateModule],
  templateUrl: './team-feedback.component.html',
  styleUrls: ['./team-feedback.component.scss']
})
export class TeamFeedbackComponent implements AfterViewInit {
  currentIndex: number = 0;
  messages: Array<{ text: string; imageUrl: string; name: string }> = [];
  selectedLang: string = 'en';  // Standardmäßig auf Englisch setzen

  constructor(private el: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Standardsprache auf Englisch setzen
    this.translate.use('en'); // Aktuelle Sprache setzen
    this.loadTranslations(); // Übersetzungen laden
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    });

    const teamFeedbackSection = this.el.nativeElement.querySelector("#team-feedback");
    if (teamFeedbackSection) {
      observer.observe(teamFeedbackSection);
    }
  }

  // Übersetzungen laden
  private loadTranslations() {
    this.translate.get('TEAM_FEEDBACK.FEEDBACKS').subscribe((feedbacks: any[]) => {
      this.messages = feedbacks && feedbacks.length > 0 
        ? feedbacks.map(feedback => ({
            text: feedback.TEXT,
            imageUrl: feedback.IMAGE_URL,
            name: feedback.NAME
          }))
        : [{ text: 'No feedback available', imageUrl: '', name: 'Placeholder' }];
    });
  }

  // Sprachwechsel
  switchLanguage(lang: string) {
    this.selectedLang = lang;  // Den aktuellen Wert der ausgewählten Sprache setzen
    this.translate.use(lang);  // Sprache wechseln
    this.loadTranslations();  // Übersetzungen neu laden
  }

  get currentMessage() {
    return this.messages[this.currentIndex];
  }

  nextMessage() {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  }

  previousMessage() {
    this.currentIndex = (this.currentIndex - 1 + this.messages.length) % this.messages.length;
  }
}
