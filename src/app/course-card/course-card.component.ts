import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input('courseAlias') 
  course: Course;

  @Output('customEvent')
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onCourseView(){
    console.log("card component - button clicked...");

    this.courseSelected.emit(this.course);
  }
}
