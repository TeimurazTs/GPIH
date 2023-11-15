import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-client-doctor',
  standalone: true,
  imports: [CommonModule, InputComponent, MatRadioModule],
  templateUrl: './client-doctor.component.html',
  styleUrl: './client-doctor.component.css',
})
export class ClientDoctorComponent {
  toggleForMe = true;
  toggleForSomeone = false;

  changePerson(person: string) {
    if (person === 'ჩემთვის') {
      this.toggleForSomeone = false;
      this.toggleForMe = true;
      console.log('ჩემთვის');
    }
    if (person === 'სხვისთვის') {
      this.toggleForMe = false;
      this.toggleForSomeone = true;
      console.log('სხვისთვის');
    }
  }
}
