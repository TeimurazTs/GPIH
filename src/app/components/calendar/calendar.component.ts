import { Component, OnInit } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  currentDate = new Date();
  weekDates: Date[] = [];
  constructor() {
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

  doctors: any[] = [{name: 'ნინო', clinic: 'კურაციო', description: 'შ.პ.ს კურაციო. ოთარ ლორთქიფანიძის 31'}]
}
