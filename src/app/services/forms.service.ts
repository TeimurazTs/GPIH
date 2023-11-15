import { Injectable, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  clientFormGroup!: FormGroup;

  get myFormGroup(): FormGroup{
    return this.clientFormGroup;
  }

  constructor() {
    this.clientFormGroup = new FormGroup({
      policed: new FormControl(''),
    });
  }
}
