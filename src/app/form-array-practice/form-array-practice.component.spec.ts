import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayPracticeComponent } from './form-array-practice.component';

describe('FormArrayPracticeComponent', () => {
  let component: FormArrayPracticeComponent;
  let fixture: ComponentFixture<FormArrayPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
