import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CourseService} from '../services/course';
import {Course} from '../models/course.model';
import {Student} from '../models/student.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string = '';
  courses: Course[] = [];

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3) ]],
      email: ['', [Validators.required, Validators.email]],
      enrolledCourseId: [null, [Validators.required]],
    })

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }

  onSubmit() {
    if(this.signUpForm.invalid) {
      return;
    }

    const newStudent: Student = {
      id: 0,
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourseIds: [this.signUpForm.value.enrolledCourseId]
    }

    this.courseService.addStudent(newStudent).subscribe({
      next: (student  ) => {
        console.log("Student successfully signed up", student);
        this.submissionSuccess = true;
        this.signUpForm.reset();
      },
      error: (err) => {
        console.error("Student successfully signed up", err);
        this.submissionError = 'There was an error submitting your sign-up. Please try again.';
      }
    }
  )
  }

  protected readonly onsubmit = onsubmit;
}
