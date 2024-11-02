import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamFeedbackComponent } from './team-feedback/team-feedback.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, ProfileComponent, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, TeamFeedbackComponent, ContactComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
