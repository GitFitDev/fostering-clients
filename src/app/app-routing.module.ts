import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './users/landing-page/landing-page.component';
import { HomeComponent } from './users/components/home/home.component';
import { SkillsListComponent } from './users/components/skills-list/skills-list.component';
import { AssessmentComponent } from './users/components/assessment/assessment.component';
<<<<<<< Updated upstream
import {LoginComponent} from './users/LoginComponent';
import { RegistrationComponent } from './users/RegistrationComponent'



const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  { path: 'landingPage', component: LandingPageComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'skills', component: SkillsListComponent},
  { path: 'assessment', component: AssessmentComponent}
=======
import { BattleMenuComponent } from './users/components/battle-menu/battle-menu.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {animations: 'Home'}},
  { path: 'skills', component: SkillsListComponent, data: {animations: 'Skills'}},
  { path: 'assessment', component: AssessmentComponent, data: {animations: 'Assessments'}},
  { path: 'battle-menu', component: BattleMenuComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
