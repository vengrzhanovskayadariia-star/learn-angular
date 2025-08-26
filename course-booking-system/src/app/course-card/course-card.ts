import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-course-card',
    imports: [
        CurrencyPipe,
        DatePipe
    ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
@Input() course: any;
@Output() courseBooked: EventEmitter<any> = new EventEmitter();
@Output() addedToWishlist: EventEmitter<any> = new EventEmitter();

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlist(): void {
    this.addedToWishlist.emit(this.course);
  }
}
