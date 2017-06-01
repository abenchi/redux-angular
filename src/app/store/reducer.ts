import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import {FILTER_COURSES} from './actions'
const courses = [
  {
    "id": 1,
    "name": "Building Apps with React",
    "topic": "ReactJS"
  },
  {
    "id": 2,
    "name": "Building Apps with Angular",
    "topic": "AngularJS"
  },
  {
    "id": 3,
    "name": "Building Apps with Angular and Redux",
    "topic": "Angular and Redux"
  }
]

const initialState: IAppState = {
  courses,
  filterCourses: courses
}

function filterCourse (state:IAppState, action): IAppState {
    return Object.assign({}, state, {
        filterCourses: state.courses.filter(course=>
           course.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1
        )
    })
}

export function reducer (state: IAppState= initialState, action) {
    switch(action.type) {
        case FILTER_COURSES: {
          return filterCourse(state, action);
        };
        default: {
            return state;
        }
    }
}
