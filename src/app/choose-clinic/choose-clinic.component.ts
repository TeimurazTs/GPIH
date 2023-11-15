import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../shared/input/input.component';
import { FormsService } from '../services/forms.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-clinic',
  standalone: true,
  templateUrl: './choose-clinic.component.html',
  styleUrl: './choose-clinic.component.css',
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
})
export class ChooseClinicComponent implements OnInit {
  clinicFormGroup: FormGroup = this.forms.myClinicFormGroup;
  clinicFormControl!: FormControl;

  constructor(private forms: FormsService) {}
  ngOnInit(): void {
    this.clinicFormControl = this.clinicFormGroup.get('clinic') as FormControl;
    this.clinicFormControl.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }
}
