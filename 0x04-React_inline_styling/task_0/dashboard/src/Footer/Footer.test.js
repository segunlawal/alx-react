import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Footer', () => {
  it('renders without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined;
  });
});

describe('Footer', () => {
  describe('renders the text “Copyright', () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toContain('Copyright');
  });
});
