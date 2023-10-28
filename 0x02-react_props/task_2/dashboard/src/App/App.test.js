import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import '../setupTests';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});

describe('App2', () => {
  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications />)).toBe(true);
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
