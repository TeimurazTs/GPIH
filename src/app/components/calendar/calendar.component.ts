import { Component, OnInit } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  todayWithMonth: string = 'დღეს - 15 ნოე';

  currentDate = new Date();
  weekDates: Date[] = [];
  constructor(private forms: FormsService) {
    this.loadWeek(this.currentDate);
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
  onNext() {
    const nextWeek = new Date(this.weekDates[6]);
    nextWeek.setDate(nextWeek.getDate() + 1);
    this.loadWeek(nextWeek);
  }
  onPrevious() {
    const prevWeek = new Date(this.weekDates[0]);
    prevWeek.setDate(prevWeek.getDate() - 7);
    if (prevWeek < new Date()) {
      return;
    }
    this.loadWeek(prevWeek);
  }

  activeDate: Date | null = null;

  setActiveDate(date: Date) {
    this.activeDate = date;
  }
  isDateActive(date: Date): boolean {
    return this.activeDate?.getTime() === date.getTime();
  }

  onDateClicked(clickedDate: Date) {
    console.log(clickedDate);
  }

  doctors: any[] = [
    {
      name: 'ნინო ლაფაჩი',
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
      name: 'ანა კალატოზი',
      clinic: 'ინგოროყვა',
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
      name: 'ნანა პირველი',
      clinic: 'ჩაფიძე',
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
}
