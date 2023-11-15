import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../shared/input/input.component";

@Component({
    selector: 'app-choose-clinic',
    standalone: true,
    templateUrl: './choose-clinic.component.html',
    styleUrl: './choose-clinic.component.css',
    imports: [CommonModule, InputComponent]
})
export class ChooseClinicComponent {

}
