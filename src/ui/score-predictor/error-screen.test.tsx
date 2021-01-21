import * as React from 'react';
import { shallow } from 'enzyme';
import ErrorScreen from './error-screen';

describe('<ErrorScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
