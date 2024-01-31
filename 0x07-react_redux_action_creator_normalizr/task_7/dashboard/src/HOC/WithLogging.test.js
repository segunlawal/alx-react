import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import '../setupTests';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

describe('WithLogging tests', () => {
  it('should call console.log on mount and dismount', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const NewComponent = WithLogging(<p>Test Component</p>);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });
});
