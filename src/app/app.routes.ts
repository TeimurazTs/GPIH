import { Routes } from '@angular/router';
import { ClientDoctorComponent } from './components/client-doctor/client-doctor.component';
import { ConsultationTypeComponent } from './components/consultation-type/consultation-type.component';
import { ChooseDocComponent } from './components/choose-doc/choose-doc.component';
import { ChooseClinicComponent } from './choose-clinic/choose-clinic.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SumupComponent } from './components/sumup/sumup.component';
import { BookedComponent } from './component/booked/booked.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientDoctorComponent,
  },
  {
    path: 'consultation',
    component: ConsultationTypeComponent,
  },
  {
    path: 'doctor',
    component: ChooseDocComponent,
  },
  {
    path: 'clinic',
    component: ChooseClinicComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'sumup',
    component: SumupComponent,
  },
  {
    path: 'booked',
    component: BookedComponent,
  },
];
