import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined;
  });
});

describe('Header', () => {
  describe('renders img tag and h1 tag', () => {
    const header = shallow(<Header />);
    expect(header.find('img')).toHaveLength(1);
    expect(header.find('h1')).toHaveLength(1);
  });
});
