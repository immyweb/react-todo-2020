import * as React from 'react';
import { shallow } from 'enzyme';

import { Gradient } from './gradient';

describe('<Gradient />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Gradient colour={'#ffffff'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('can customise colour, size, height and opacity', () => {
    const wrapper = shallow(<Gradient colour={'#c40000'} size={5} height={100} opacity={0.2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('can offset top position', () => {
    const wrapper = shallow(<Gradient colour={'#c40000'} top={50} />);
    expect(wrapper).toMatchSnapshot();
  });
});
