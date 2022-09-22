import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCalculatorComponent } from './admission-calculator.component';

describe('AdmissionCalculatorComponent', () => {
  let component: AdmissionCalculatorComponent;
  let fixture: ComponentFixture<AdmissionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
