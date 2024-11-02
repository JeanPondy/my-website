import { CommonModule } from '@angular/common';
import { Component, inject, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  private el = inject(ElementRef);
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false, // Datenschutzerklärung akzeptieren
  };

  mailTest = false;
  feedbackMessage: string | null = null; // Feedback-Overlay

  post = {
    endPoint: 'https://jean-pondy.com/jeanpondy/sendMail.php',
    body: (payload: { name: string; email: string; message: string; privacyPolicy: boolean }) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // JSON-Daten im Header
      },
      responseType: 'text' as const // Response-Typ setzen
    },
  };

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

    // Überwachen des Elements mit der ID #contact
    const contactSection = this.el.nativeElement.querySelector("#contact");
    if (contactSection) {
      observer.observe(contactSection);
    }
  }

  goToDatenschutzerklaerung() {
    window.open('https://jean-pondy.com/privacypolicy/', '_blank'); // Neuer Tab für Datenschutzerklärung
  }

  onSubmit(ngForm: NgForm) {
    // Überprüfen, ob die Datenschutzerklärung akzeptiert wurde
    if (!this.contactData.privacyPolicy) {
      this.feedbackMessage = "Please accept the privacy policy.";
      return;
    }

    // Formular senden und validieren
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            this.feedbackMessage = "Your message has been sent successfully!";
            ngForm.resetForm();
          },
          error: (error) => {
            this.feedbackMessage = "An error occurred while sending the message.";
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.feedbackMessage = "Your message has been sent successfully (test mode).";
      ngForm.resetForm();
    }
  }

  // Overlay schließen
  closeFeedback() {
    this.feedbackMessage = null;
  }

  activeSection: string = ''; // Aktiven Abschnitt verfolgen

  // Zu einem bestimmten Abschnitt scrollen
  scrollToSection(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80; // Offset für den oberen Rand
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }
}
