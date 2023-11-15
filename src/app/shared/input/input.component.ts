import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() name: string = 'bla';
  @Input() label!: string;
  @Input() label2: string | undefined;
  @Input() label3: string | undefined;
  @Input() applyClass: boolean = false;
  @Input() formControlInput = new FormControl('');
  @Input() value = '';
  ngOnInit(): void {
    console.log(this.name);
  }
}
