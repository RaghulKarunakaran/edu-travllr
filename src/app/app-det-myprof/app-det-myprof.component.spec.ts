import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetMyprofComponent } from './app-det-myprof.component';

describe('AppDetMyprofComponent', () => {
  let component: AppDetMyprofComponent;
  let fixture: ComponentFixture<AppDetMyprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetMyprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetMyprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
