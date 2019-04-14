import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './users/landing-page/landing-page.component';
import { HomeComponent } from './users/components/home/home.component';
import { SkillsListComponent } from './users/components/skills-list/skills-list.component';
import { AssessmentComponent } from './users/components/assessment/assessment.component';
import {LoginComponent} from './users/LoginComponent';
import { RegistrationComponent } from './users/RegistrationComponent'
import { BattleMenuComponent } from './users/components/battle-menu/battle-menu.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {animations: 'Home'}},
  { path: 'skills', component: SkillsListComponent, data: {animations: 'Skills'}},
  { path: 'assessment', component: AssessmentComponent, data: {animations: 'Assessments'}},
  { path: 'battle-menu', component: BattleMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
