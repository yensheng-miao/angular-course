import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

// only selects the first matching element
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

 // selects element based on template reference
  @ViewChild('cardRef')
  cardComponentRef: CourseCardComponent; 

  // selects element based on template reference
  @ViewChild('container')
  containerDiV: ElementRef;  
  
  // selects element based on template reference
  @ViewChild('cardRef', {read: ElementRef})
  cardElementRef: ElementRef;    

  // earliest possible moment where the ViewChild variable are initialised
  ngAfterViewInit(): void {
    console.log(this.card);
    // avoid any data modification here
  }

  courses:Course[] = COURSES;

  onCourseSelected(course: Course){
    console.log(course);
    console.log(this.card);
    console.log(this.cardComponentRef);
    console.log(this.containerDiV);
    console.log(this.cardElementRef);
  }

}
