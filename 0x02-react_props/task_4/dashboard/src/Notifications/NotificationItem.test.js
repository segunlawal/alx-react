import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import '../setupTests';

describe('Notification Item', () => {
  it('should render without crashing', () => {
    const notificationItem = shallow(<NotificationItem />);
    expect(notificationItem).toBeDefined;
  });
});

describe('Notification Item prop', () => {
  it('should render the correct props', () => {
    const no = shallow(<NotificationItem type="default" value="test" />);
    const li = no.find('li[data-notification-type]');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.text()).toBe('test');
  });
});

describe('Notification Item props', () => {
  it('should render the correct prop for html', () => {
    const notificationItem = shallow(
      <NotificationItem type="default" html={{ __html: '<u>test</u>' }} />,
    );
    const li = notificationItem.find('li[data-notification-type]');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.html()).toBe(
      '<li data-notification-type="default"><u>test</u></li>',
    );
  });
});
