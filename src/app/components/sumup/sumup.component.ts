import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsService } from '../../services/forms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sumup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sumup.component.html',
  styleUrl: './sumup.component.css',
})
export class SumupComponent implements OnInit {
  constructor(private forms: FormsService) {}

  doctorName = 'ლანა რუხაძე';
  specialty = 'პირადი ექიმი';
  clinic = '';
  availabilityTime!: string;
  currentDate = new Date()
  client=""

  ngOnInit(): void {
    this.doctorName = this.forms.myDoctorFormGroup.get('doctor')?.value;
    this.specialty = this.forms.myDoctorFormGroup.get('specialty')?.value;
    this.clinic = this.forms.myClinicFormGroup.get('clinic')?.value;
    this.availabilityTime = this.forms.myDoctorFormGroup.get('time')?.value;
    this.client = this.forms.clientFormGroup.get('client')?.value;
  }

}
