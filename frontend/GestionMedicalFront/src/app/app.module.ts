import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { LoginComponent } from './common/login/login.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { HeaderComponent } from './common/header/header.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptorService } from './service/basic-auth-interceptor.service';
import { CaisseListComponent } from './common/caisse/caisse-list/caisse-list.component';
import { CaisseAjoutComponent } from './common/caisse/caisse-ajout/caisse-ajout.component';
import { CaisseModifierComponent } from './common/caisse/caisse-modifier/caisse-modifier.component';
import { OrdonnanceAjoutComponent } from './common/ordonnance/ordonnance-ajout/ordonnance-ajout.component';
import { OrdonnanceListComponent } from './common/ordonnance/ordonnance-list/ordonnance-list.component';
import { ApciAjoutComponent } from './common/apci/apci-ajout/apci-ajout.component';
import { ApciListComponent } from './common/apci/apci-list/apci-list.component';
import { ExamenAjoutComponent } from './common/examen/examen-ajout/examen-ajout.component';
import { ExamenListComponent } from './common/examen/examen-list/examen-list.component';
import { LettreComponent } from './common/lettre/lettre.component';
import { LettreAjoutComponent } from './common/lettre/lettre-ajout/lettre-ajout.component';
import { LettreListComponent } from './common/lettre/lettre-list/lettre-list.component';
import { ConsultationAjoutComponent } from './common/consultation/consultation-ajout/consultation-ajout.component';
import { ConsultationListComponent } from './common/consultation/consultation-list/consultation-list.component';
import { PatientAjoutComponent } from './common/patient/patient-ajout/patient-ajout.component';
import { PatientListComponent } from './common/patient/patient-list/patient-list.component';
import { PatientModifierComponent } from './common/patient/patient-modifier/patient-modifier.component';
import { CnamAjoutComponent } from './common/cnam-ajout/cnam-ajout.component';
import { CnamListComponent } from './common/cnam-list/cnam-list.component';
import { CnamModifierComponent } from './common/cnam-modifier/cnam-modifier.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainMenuComponent,
    NotfoundComponent,
    HeaderComponent,
    CaisseListComponent,
    CaisseAjoutComponent,
    CaisseModifierComponent,
    OrdonnanceAjoutComponent,
    OrdonnanceListComponent,
    ApciAjoutComponent,
    ApciListComponent,
    ExamenAjoutComponent,
    ExamenListComponent,
    LettreComponent,
    LettreAjoutComponent,
    LettreListComponent,
    ConsultationAjoutComponent,
    ConsultationListComponent,
    PatientAjoutComponent,
    PatientListComponent,
    PatientModifierComponent,
    CnamAjoutComponent,
    CnamListComponent,
    CnamModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
