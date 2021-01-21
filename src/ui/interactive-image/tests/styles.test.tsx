import * as React from 'react';
import { shallow } from 'enzyme';

import { Hotspot } from '../styles';

describe('<ModalContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Hotspot top={80} left={60} />);
    expect(wrapper).toMatchSnapshot();
  });
});
