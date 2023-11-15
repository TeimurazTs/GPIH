import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsService } from '../../services/forms.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-client-doctor',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './client-doctor.component.html',
  styleUrl: './client-doctor.component.css',
})
export class ClientDoctorComponent implements OnInit {
  clientFormGroup: FormGroup = this.forms.myFormGroup;
  userFormControl!: FormControl;

  constructor(private forms: FormsService) {}

  ngOnInit(): void {
    this.userFormControl = this.clientFormGroup.get('policed') as FormControl;
    this.userFormControl.valueChanges.subscribe(() => {
      console.log(5);
    });
    console.log(this.userFormControl);
  }

  toggleForMe = true;
  toggleForSomeone = false;

  changePerson(person: string) {
    if (person === 'ჩემთვის') {
      this.toggleForSomeone = false;
      this.toggleForMe = true;
    }
    if (person === 'სხვისთვის') {
      this.toggleForMe = false;
      this.toggleForSomeone = true;
    }
  }
}
