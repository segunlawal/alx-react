import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});

describe('App-header', () => {
  it('renders a div with class App-header', () => {
    const app = shallow(<App />);
    expect(app.find('.App-header')).toBeDefined();
  });
});

describe('App-body', () => {
  it('renders a div with class App-body', () => {
    const app = shallow(<App />);
    expect(app.find('.App-body')).toBeDefined();
  });
});

describe('App-footer', () => {
  it('renders a div with class App-footer', () => {
    const app = shallow(<App />);
    expect(app.find('.App-footer')).toBeDefined();
  });
});
