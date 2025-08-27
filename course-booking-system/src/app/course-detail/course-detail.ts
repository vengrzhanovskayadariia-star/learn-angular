import { Component } from '@angular/core';
import {Course} from '../models/course.model';
import {CourseService} from '../services/course';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  course: Course | null = null;

  constructor(private courseService: CourseService){}

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.error('Error fetching course by ID:', err);
      }
    })
  }

}

