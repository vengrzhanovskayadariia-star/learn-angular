import { Component, OnInit } from '@angular/core';
import {CourseCard} from '../course-card/course-card';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
title: string = "Available courses";
wishlist: Course[] = [];
courses: Course[] = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png', onSale: false },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10', soldOut: true, img: 'angular-logo.png', onSale: true},
    { id: 3, title: 'RxJS Fundamentals', description: 'Asynchronous data streams', price: 45, date: '2025-05-05', img: 'rxjs-logo.png', soldOut: false, onSale: true }
  ];

  ngOnInit(): void {
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
