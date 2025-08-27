import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseDetail} from './course-detail/course-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
