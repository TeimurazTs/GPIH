import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTypeComponent } from './consultation-type.component';

describe('ConsultationTypeComponent', () => {
  let component: ConsultationTypeComponent;
  let fixture: ComponentFixture<ConsultationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
