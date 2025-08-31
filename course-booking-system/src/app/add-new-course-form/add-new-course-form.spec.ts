import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseForm } from './add-new-course-form';

describe('AddNewCourseForm', () => {
  let component: AddNewCourseForm;
  let fixture: ComponentFixture<AddNewCourseForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCourseForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCourseForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
