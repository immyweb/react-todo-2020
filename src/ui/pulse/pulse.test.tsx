import * as React from 'react';
import { shallow } from 'enzyme';

import Pulse from './pulse';
import { ArrowPosition } from '../label/label';
import PulseLabel from './pulse-label';
import { colours } from '../../styles/colours';

function shallowPulse(props?: any) {
  return shallow(<Pulse {...props}>Lovely label</Pulse>);
}

function shallowPulseLabel(props?: any) {
  return shallow(
    <PulseLabel labelSide={ArrowPosition.TOP} labelPosition={ArrowPosition.RIGHT} {...props}>
      Lovely label
    </PulseLabel>,
  );
}

describe('<Pulse />', () => {
  it('renders correctly with default values', () => {
    const wrapper = shallowPulse();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with colour override', () => {
    const wrapper = shallowPulse({ colour: colours.$fabulous });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with size override', () => {
    const wrapper = shallowPulse({ size: 150 });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PulseLabel />', () => {
  it('renders correctly with default values', () => {
    const wrapper = shallowPulseLabel();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with Map', () => {
    const wrapper = shallowPulseLabel({ withMap: true });
    expect(wrapper).toMatchSnapshot();
  });
});
