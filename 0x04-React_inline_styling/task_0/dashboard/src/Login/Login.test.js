import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Login', () => {
  it('renders without crashing', () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined;
  });
});

describe('Login', () => {
  describe('renders 2 input and 2 label tags', () => {
    const login = shallow(<Login />);
    expect(login.find('input')).toHaveLength(2);
    expect(login.find('label')).toHaveLength(2);
  });
});
