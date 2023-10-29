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
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find('ul').childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>',
    );
  });
});

describe('Notifications list', () => {
  it('renders three list items', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });
});

describe('Notifications text', () => {
  it('renders correct text', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.text()).toContain('Here is the list of notifications');
  });
});

describe('Notifications', () => {
  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
    expect(wrapper.find('div.menuItem').html()).toEqual(
      '<div class="menuItem">Your notifications</div>',
    );
  });
});

describe('Notifications', () => {
  it('does not display notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });
});

describe('Notifications', () => {
  it('does not display menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });
});

describe('Notifications', () => {
  it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});
