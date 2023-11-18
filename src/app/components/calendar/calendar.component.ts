import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsService } from '../../services/forms.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  todayWithMonth = new Date();

  doctorFormGroup!: FormGroup;
  personalDoctorFormControl!: FormControl;
  doctorFormControl!: FormControl;
  specialtyFormcontrol!: FormControl;
  timeFormControl!: FormControl;
  currentDate = new Date();
  weekDates: Date[] = [];

  defaultByUser!: string;
  showAllDoctors = false;

  inputData(data: any) {
    this.specialtyFormcontrol.setValue(data.value);
  }
  inputData2(data: any) {
    this.doctorFormControl.setValue(data.value);
  }
  inputData3(data: any) {
    this.personalDoctorFormControl.setValue(data.value);
  }

  constructor(private forms: FormsService) {
    this.loadWeek(this.currentDate);
  }

  disabledInput = false;

  ngOnInit(): void {
    console.log(this.allDoctors);
    this.defaultByUser = this.forms.clinicFormGroup
      .get('clinic')
      ?.value.split(';')[0];
    this.disabledInput = true;
    this.doctorFormGroup = this.forms.myDoctorFormGroup;
    this.doctorFormControl = this.doctorFormGroup.get('doctor') as FormControl;
    this.specialtyFormcontrol = this.doctorFormGroup.get(
      'specialty'
    ) as FormControl;
    this.timeFormControl = this.doctorFormGroup.get('time') as FormControl;
    this.personalDoctorFormControl = this.doctorFormGroup.get(
      'personalDoctor'
    ) as FormControl;
    this.doctorFormControl.valueChanges.subscribe((data) => {
      console.log(data);
      this.doctors = [];

      if (data === 'ლანა ხორგუანი') {
        this.doctors[0] = this.doctorsData[0];
        this.showAllDoctors = false;
      } else if (data === 'გიორგი კალანდაძე') {
        this.doctors[0] = this.doctorsData[1];
        this.showAllDoctors = false;
      } else if (data === 'იაგო აბზიანიძე') {
        this.doctors[0] = this.doctorsData[2];
        this.showAllDoctors = false;
      } else if (data === 'ნინო აბუთიძე') {
        this.doctors[0] = this.doctorsData[3];
        this.showAllDoctors = false;
      } else if (data === 'ყველა') {
        this.showAllDoctors = true;
        this.doctors[0] = this.allDoctors;
      }
    });
    this.specialtyFormcontrol.valueChanges.subscribe((data) => {
      this.showAllDoctors = false;
      this.doctors = [];
      console.log(data);

      if (data === 'ოტორინოლარინგოლოგი') {
        this.doctors = this.otolaringologs;
        this.showAllDoctors = false;
      } else if (data === 'ოფთალმოლოგი') {
        this.doctors = this.oftalmologs;
        this.showAllDoctors = false;
      }
    });
    this.timeFormControl.valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.personalDoctorFormControl.valueChanges.subscribe((data) => {
      this.showAllDoctors = false;
      this.doctors = [];
      console.log(data);

      this.doctors = [];
      if (data === 'მარიამ ქრისტესაშვილი') {
        this.doctors[0] = this.personalDoctors[0];
        this.showAllDoctors = false;
      } else if (data === 'გიორგი თვალაძე') {
        this.doctors[0] = this.personalDoctors[1];
        this.showAllDoctors = false;
      }
    });
  }

  loadWeek(date: Date) {
    this.weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(date);
      day.setDate(date.getDate() + i);
      this.weekDates.push(day);
    }
  }
  getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  goBack() {
    this.loadWeek(this.currentDate);
  }

  onNext() {
    const nextWeek = new Date(this.weekDates[6]);
    nextWeek.setDate(nextWeek.getDate() + 1);
    this.loadWeek(nextWeek);
  }
  onPrevious() {
    const prevWeek = new Date(this.weekDates[0]);
    prevWeek.setDate(prevWeek.getDate() - 7);
    // if (prevWeek < new Date()) {
    //   return;
    // }
    this.loadWeek(prevWeek);
  }

  activeDate: Date | null = new Date();
  activeWeek!: Date[];

  setActiveDate(date: Date) {
    this.activeDate = date;
  }
  isDateActive(date: Date): boolean {
    return this.activeDate?.getTime() === date.getTime();
  }

  clickedOnTime(data: string, element: any) {
    this.timeFormControl.setValue(data);

    document.querySelectorAll('.each-time').forEach((el) => {
      (el as HTMLElement).style.backgroundColor = '';
    });

    element.style.backgroundColor = 'rgb(255, 0, 195)';
  }

  toggleVisibility(el : any){
    const element = el;
    element.classList.toggle('apply-height');
    
  }
  doctors: any[] = [];
  personalDoctors: any[] = [
    {
      name: 'მარიამ ქრისტესაშვილი',
      clinic: 'კურაციო',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'გიორგი თვალაძე',
      clinic: 'კურაციო',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
  ];
  otolaringologs: any[] = [
    {
      name: 'ლანა ხორგუანი',
      clinic: 'კურაციო',
      speciality: 'ოტორინოლარინგოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'გიორგი კალანდაძე',
      clinic: 'კურაციო',
      speciality: 'ოტორინოლარინგოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
  ];
  oftalmologs: any[] = [
    {
      name: 'იაგო აბზიანიძე',
      clinic: 'ინგოროყვა',
      speciality: 'ოფთალმოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'ნინო აბუთიძე',
      clinic: 'ინგოროყვა',
      speciality: 'ოფთალმოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
  ];

  doctorsData: any[] = [
    {
      name: 'ლანა ხორგუანი',
      clinic: 'კურაციო',
      speciality: 'ოტორინოლარინგოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'გიორგი კალანდაძე',
      clinic: 'კურაციო',
      speciality: 'ოტორინოლარინგოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'იაგო აბზიანიძე',
      clinic: 'ინგოროყვა',
      speciality: 'ოფთალმოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
    {
      name: 'ნინო აბუთიძე',
      clinic: 'ინგოროყვა',
      speciality: 'ოფთალმოლოგი',
      description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31',
      time: [
        '10:00-10:20',
        '10:20-10:40',
        '10:40-11:00',
        '11:20-11:40',
        '12:40-13:00',
        '13:20-13:40',
        '14:00-14:20',
        '15:00-15:20',
        '15:40-16:00',
        '16:20-16:40',
        '16:40-17:00',
      ],
    },
  ];

  allDoctors = [this.oftalmologs, this.doctorsData, this.personalDoctors];
}
