import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { RegisterComponent } from './pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    InputComponent,
    RegisterComponent,
    RouterModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'GPI';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['/']);
  }
}
