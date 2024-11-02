import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent, ImprintComponent, PrivacyPolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jeanpondy';
}
