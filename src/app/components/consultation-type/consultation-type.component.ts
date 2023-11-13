import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-consultation-type',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './consultation-type.component.html',
  styleUrl: './consultation-type.component.css'
})
export class ConsultationTypeComponent {

}
