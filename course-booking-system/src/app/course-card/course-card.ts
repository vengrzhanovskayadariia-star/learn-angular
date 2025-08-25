import {Component, Input} from '@angular/core';
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

  viewDetails(title: string): void{
    alert(`Viewing details for ${title}`);
  }
}
