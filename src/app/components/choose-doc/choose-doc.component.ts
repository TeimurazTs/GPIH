import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-choose-doc',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './choose-doc.component.html',
  styleUrl: './choose-doc.component.css',
})
export class ChooseDocComponent {}
