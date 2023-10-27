import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });
});

describe('Notifications list', () => {
  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toHaveLength(3);
  });
});

describe('Notifications text', () => {
  it('renders correct text', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.text()).toContain('Here is the list of notifications');
  });
});
