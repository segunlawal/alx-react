/**
 * @jest-environment jsdom
 */

import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});

describe('App2', () => {
  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(
      component.contains(
        <Notifications listNotifications={listNotifications} />,
      ),
    ).toBe(true);
  });
});

describe('App3', () => {
  it('should render Header component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });
});

describe('App4', () => {
  it('should render Login Component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });
});

describe('App5', () => {
  it('should render Footer component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});

describe('App component', () => {
  it('does not render CourseList if isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
    expect(wrapper.contains(<Login />)).toBe(true);
  });
  it('renders CourseList if isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<CourseList listCourses={listCourses} />)).toBe(
      true,
    );
    expect(wrapper.contains(<Login />)).toBe(false);
  });
});

describe('When ctrl + h is pressed', () => {
  it('calls logOut function', () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it('checks that alert function is called', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
