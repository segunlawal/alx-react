import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import '../setupTests';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });
});

describe('NotificationItem', () => {
  it('renders correct list items', () => {
    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />,
    );
    expect(notifications.find('ul').childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>',
    );
  });
});

describe('Notifications list', () => {
  it('renders three list items', () => {
    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />,
    );
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });
});

describe('Notifications text', () => {
  it('renders correct text', () => {
    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />,
    );
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

describe('Notifications', () => {
  it('renders correctly if an empty array is passed', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />,
    );
    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>,
      ),
    );
  });
});

describe('Notifications', () => {
  it('renders correctly if a list of notifications is passed', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />,
    );
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });
});

describe('Notifications', () => {
  it('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />,
    );
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>),
    ).toBe(false);
    expect(
      wrapper.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>,
      ),
    );
  });
});
