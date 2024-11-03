import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    {path: 'imprint', component: ImprintComponent},
    {path: 'privacyPolicy', component: PrivacyPolicyComponent}

];
