import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Test for selectCourse action creator
describe('selectCourse action creator', () => {
  it('should create an action to select a course with the provided index', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
});

// Test for unSelectCourse action creator
describe('unSelectCourse action creator', () => {
  it('should create an action to unselect a course with the provided index', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
