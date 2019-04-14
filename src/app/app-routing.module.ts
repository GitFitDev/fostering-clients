import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './users/components/landing-page/landing-page.component';
import { HomeComponent } from './users/components/home/home.component';
import { SkillsListComponent } from './users/components/skills-list/skills-list.component';
import { AssessmentComponent } from './users/components/assessment/assessment.component';
import { LoginComponent } from './users/components/login/login.component';
import { RegistrationComponent } from './users/components/registration/registration.component';
import { BattleMenuComponent } from './users/components/battle-menu/battle-menu.component';
import { SupportTools2Component } from './users/components/support-tools2/support-tools2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'battle-menu', component: BattleMenuComponent },
  { path: 'support-tools', component: SupportTools2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
