import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCounsellingComponent } from './free-counselling.component';

describe('FreeCounsellingComponent', () => {
  let component: FreeCounsellingComponent;
  let fixture: ComponentFixture<FreeCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCounsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
