import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import '../setupTests';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });
});

describe('NotificationItem', () => {
  it('renders correct list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('ul').childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>',
    );
  });
});

describe('Notifications list', () => {
  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });
});

describe('Notifications text', () => {
  it('renders correct text', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.text()).toContain('Here is the list of notifications');
  });
});
