import { Component, OnInit } from '@angular/core';
import {CourseCard} from '../course-card/course-card';
import {Course} from '../models/course.model';
import {CourseService} from '../services/course';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
title: string = "Available courses";
wishlist: Course[] = [];
courses: Course[] = [];

constructor(private courseService: CourseService) {
}

  ngOnInit(): void {
  this.courseService.getCourses().subscribe(courses => this.courses = courses);
    // this.courseService.getCourses().subscribe({
    //   next: (data: Course[]) => {
    //     this.courses = data;
    //   },
    //   error: (error) => {
    //     console.log("Error fetching courses: ", error);
    //   }
    // });
    console.log("CoursesList initialized!")
  }

  onCourseBooked(course: Course): void {
    console.log("Parent heard about booking" + course.title);
  }

  onAddToWishlist(course: Course): void {
    console.log("Wishlist event triggered for: " + course.title);
    this.wishlist.push(course);
  }

}
