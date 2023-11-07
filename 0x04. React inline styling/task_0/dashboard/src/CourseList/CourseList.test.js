import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import '../setupTests';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component tests', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toBeDefined();
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    wrapper.find('thead').forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });

    expect(wrapper.find('tbody').children()).toHaveLength(3);
    wrapper.find('tbody').forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  });
});

describe('CourseList', () => {
  it('renders correctly if an empty array is passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color:#f5f5f5ab"><td>No course available yet</td><td></td></tr>',
    );
  });
});

describe('CourseList', () => {
  it('renders correctly if a list of courses is passed', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('tbody').children()).toHaveLength(3);
  });
});
