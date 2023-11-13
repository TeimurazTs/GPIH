import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  registerForm = new FormGroup({
    client: new FormGroup({
      forMe: new FormControl('ჩემთვის'),
      forSomeone: new FormControl('სხვისთვის'),
    }),
    type: new FormGroup({}),
    doctor: new FormGroup({}),
    clinic: new FormGroup({}),
    time: new FormGroup({}),
  });
}
