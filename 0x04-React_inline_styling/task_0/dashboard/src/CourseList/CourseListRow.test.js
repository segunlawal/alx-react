import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Course List Row', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper).toBeDefined();
  });

  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell={null}
      />,
    );

    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.find('tr').childAt(0).html()).toEqual(
      '<th colSpan="2" style="background-color:#deb5b545">test</th>',
    );
  });

  it('should render two cells when textSecondCell not null', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="test"
      />,
    );

    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<td>test</td>');
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>test</td>');
  });
});
