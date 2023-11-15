import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() label!: string;
  @Input() label2: string | undefined;
  @Input() label3: string | undefined;
  @Input() applyClass: boolean = false;
  @Input() formControl = new FormControl();
}
