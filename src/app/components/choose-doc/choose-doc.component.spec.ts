import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDocComponent } from './choose-doc.component';

describe('ChooseDocComponent', () => {
  let component: ChooseDocComponent;
  let fixture: ComponentFixture<ChooseDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
