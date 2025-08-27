import { Component } from '@angular/core';
import {Course} from '../models/course.model';
import {CourseService} from '../services/course';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  course: Course | null  = null;
  constructor(private courseService: CourseService) {}

  loadCourseById(id: number) : void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
        },
      error: (error) => {
      console.log("Error fetching course by id: ", error);
      }
    })
  }
}
