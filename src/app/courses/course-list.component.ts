import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses, IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // courses: Course[];
  // filteredCourses = [];
  @select('filterCourses') filteredCourses$: Observable<Course>;

  constructor(
    // private _courseService: CourseService
    private ngRedux: NgRedux<IAppState>
    ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText));
    // this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
  }

  // getCourses() {
  //   this._courseService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }

  // updateFromState() {
  //   const allStates = store.getState();
  //   // this.courses = allStates.courses;
  //   this.filteredCourses = allStates.filterCourses;
  // }

  ngOnInit() {
    // this.getCourses();
    // this.updateFromState();
    // store.subscribe(() =>  {
    //   this.updateFromState()
    // })
    componentHandler.upgradeDom();
  }
}
