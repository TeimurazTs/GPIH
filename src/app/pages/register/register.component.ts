import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { ClientDoctorComponent } from '../../components/client-doctor/client-doctor.component';
import { ConsultationTypeComponent } from '../../components/consultation-type/consultation-type.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    ClientDoctorComponent,
    ConsultationTypeComponent,
    RouterModule,
  ],
})
export class RegisterComponent {
  doNothing() {}
}
