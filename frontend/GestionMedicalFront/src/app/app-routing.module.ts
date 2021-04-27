import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApciAjoutComponent } from './common/apci/apci-ajout/apci-ajout.component';
import { ApciListComponent } from './common/apci/apci-list/apci-list.component';
import { CaisseAjoutComponent } from './common/caisse/caisse-ajout/caisse-ajout.component';
import { CaisseListComponent } from './common/caisse/caisse-list/caisse-list.component';
import { CaisseModifierComponent } from './common/caisse/caisse-modifier/caisse-modifier.component';
import { CnamAjoutComponent } from './common/cnam-ajout/cnam-ajout.component';
import { CnamListComponent } from './common/cnam-list/cnam-list.component';
import { CnamModifierComponent } from './common/cnam-modifier/cnam-modifier.component';
import { ConsultationAjoutComponent } from './common/consultation/consultation-ajout/consultation-ajout.component';
import { ConsultationListComponent } from './common/consultation/consultation-list/consultation-list.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { ExamenAjoutComponent } from './common/examen/examen-ajout/examen-ajout.component';
import { ExamenListComponent } from './common/examen/examen-list/examen-list.component';
import { LettreAjoutComponent } from './common/lettre/lettre-ajout/lettre-ajout.component';
import { LettreListComponent } from './common/lettre/lettre-list/lettre-list.component';
import { LoginComponent } from './common/login/login.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { OrdonnanceAjoutComponent } from './common/ordonnance/ordonnance-ajout/ordonnance-ajout.component';
import { OrdonnanceListComponent } from './common/ordonnance/ordonnance-list/ordonnance-list.component';
import { PatientAjoutComponent } from './common/patient/patient-ajout/patient-ajout.component';
import { PatientListComponent } from './common/patient/patient-list/patient-list.component';
import { PatientModifierComponent } from './common/patient/patient-modifier/patient-modifier.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'patient-ajout', component: PatientAjoutComponent,canActivate:[AuthGuardService]},
  {path:'patient-modifier/:numeroPatient',component: PatientModifierComponent,canActivate:[AuthGuardService]},
  {path:'patient',component: PatientListComponent,canActivate:[AuthGuardService]},
  { path: 'cnam-list', component:CnamListComponent,canActivate:[AuthGuardService]},
  { path: 'cnam-ajout', component: CnamAjoutComponent,canActivate:[AuthGuardService]},
  { path: 'cnam-modif/:id', component:CnamModifierComponent,canActivate:[AuthGuardService]},
  { path: 'modifierReglement/:numeroReglement', component: CaisseModifierComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutReglement', component: CaisseAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'caisse', component: CaisseListComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutOrdonnance', component: OrdonnanceAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'ordonnance', component: OrdonnanceListComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutApci', component: ApciAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'apci', component: ApciListComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutExamen', component: ExamenAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'examen', component: ExamenListComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutLettre', component: LettreAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'lettre', component: LettreListComponent,canActivate:[AuthGuardService] },
  { path: 'ajoutConsultation', component: ConsultationAjoutComponent,canActivate:[AuthGuardService] },
  { path: 'consultation', component: ConsultationListComponent,canActivate:[AuthGuardService] },
  { path: '', component: DashboardComponent,canActivate:[AuthGuardService] },
  { path: '**', component: NotfoundComponent,canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
