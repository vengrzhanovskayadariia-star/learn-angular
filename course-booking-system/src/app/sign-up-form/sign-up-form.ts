import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CourseService} from '../services/course';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      enrolledCourseId: [null]
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

}
