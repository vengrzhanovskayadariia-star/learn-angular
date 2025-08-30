import { Routes } from '@angular/router';
import {CoursesList} from './courses-list/courses-list';
import {CourseDetail} from './course-detail/course-detail';
import {About} from './about/about';
import {SignUpForm} from './sign-up-form/sign-up-form';

export const routes: Routes = [
  {path: '', redirectTo: 'courses',pathMatch: 'full'},
  {path: 'courses', component: CoursesList},
  {path: 'courses/:id', component: CourseDetail},
  {path: 'about', component: About},
  {path: 'sign-up', component: SignUpForm},
];
