import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database-deprecated';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AuthService } from '../app/shared/services/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './users/components/home/home.component';
import { CardListComponent } from './users/components/card-list/card-list.component';
import { SkillsListComponent } from './users/components/skills-list/skills-list.component';
import { FABArrowComponent } from './shared/components/fabarrow/fabarrow.component';
import { AssessmentComponent } from './users/components/assessment/assessment.component';
import { LandingPageComponent } from './users/components/landing-page/landing-page.component';
import { LoginComponent } from './users/components/login/login.component';
import { RegistrationComponent } from './users/components/registration/registration.component';
import { BattleMenuComponent } from './users/components/battle-menu/battle-menu.component';
import { SupportTools2Component } from './users/components/support-tools2/support-tools2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardListComponent,
    SkillsListComponent,
    FABArrowComponent,
    AssessmentComponent,
    LandingPageComponent,
    LoginComponent,
    RegistrationComponent,
    BattleMenuComponent,
    SupportTools2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
