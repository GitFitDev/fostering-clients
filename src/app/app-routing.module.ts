import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './users/components/home/home.component';
import { SkillsListComponent } from './users/components/skills-list/skills-list.component';
import { AssessmentComponent } from './users/components/assessment/assessment.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'skills', component: SkillsListComponent},
  { path: 'assessment', component: AssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
