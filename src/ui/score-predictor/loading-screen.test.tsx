import * as React from 'react';
import { shallow } from 'enzyme';

import LoadingScreen from './loading-screen';

describe('<LoadingScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoadingScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
