import { Routes } from '@angular/router';
import { ClientDoctorComponent } from './components/client-doctor/client-doctor.component';
import { ConsultationTypeComponent } from './components/consultation-type/consultation-type.component';
import { ChooseDocComponent } from './components/choose-doc/choose-doc.component';

export const routes: Routes = [
  {
    path: 'client',
    component: ClientDoctorComponent,
    outlet: 'client',
    pathMatch: 'full',
  },
  {
    path: 'consultation',
    component: ConsultationTypeComponent,
    outlet: 'consultation',
    pathMatch: 'full',
  },
  {
    path: 'doctor',
    component: ChooseDocComponent,
    outlet: 'doctor',
    pathMatch: 'full',
  },
];
