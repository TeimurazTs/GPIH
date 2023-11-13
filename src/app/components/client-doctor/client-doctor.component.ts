import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-client-doctor',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './client-doctor.component.html',
  styleUrl: './client-doctor.component.css'
})
export class ClientDoctorComponent {

}
