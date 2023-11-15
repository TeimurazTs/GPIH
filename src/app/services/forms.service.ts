import { Injectable, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  clientFormGroup!: FormGroup;
  clinicFormGroup!: FormGroup;
  doctorFormGroup!: FormGroup;

  get myFormGroup(): FormGroup {
    return this.clientFormGroup;
  }
  get myClinicFormGroup(): FormGroup {
    return this.clinicFormGroup;
  }
  get myDoctorFormGroup(): FormGroup {
    return this.doctorFormGroup;
  }

  constructor() {
    this.clinicFormGroup = new FormGroup({
      clinic: new FormControl(''),
    });
    this.clientFormGroup = new FormGroup({
      policed: new FormControl(''),
    });
    this.doctorFormGroup = new FormGroup({
      personalDoctor: new FormControl(''),
      doctor: new FormControl(''),
      specialty: new FormControl(''),
      time: new FormControl(''),
    });
  }
}
