import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startDate = new Date(2022, 0, 23);

  courses:Course[] = COURSES;

  course:Course = COURSES[0]; 

}
