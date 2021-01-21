import * as React from 'react';
import { shallow } from 'enzyme';
import Label, { ArrowPosition } from './label';
import PulseLabel from '../pulse/pulse-label';
import { colours } from '../../styles/colours';
import { fonts } from '../../styles/fonts';

function shallowRender(props?: any) {
  return shallow(<Label {...props}>Lovely label</Label>);
}

describe('<Label />', () => {
  it('renders correctly with default values', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with colour overrides', () => {
    const wrapper = shallowRender({
      bkgColour: colours.$travel,
      txtColour: colours.$black,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with different arrow placement', () => {
    const wrapper = shallowRender({
      arrowSide: ArrowPosition.LEFT,
      arrowPosition: ArrowPosition.TOP,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with text size, colour and arrow changes', () => {
    const wrapper = shallowRender({
      arrowSide: ArrowPosition.TOP,
      arrowPosition: ArrowPosition.RIGHT,
      bkgColour: colours.$main,
      uppercase: false,
      fontfamily: fonts.$theSunMedium,
      fontSizeDesktop: 16,
      fontSizeMobile: 12,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with Pulse', () => {
    const wrapper = shallow(
      <div>
        <Label
          bkgColour={colours.$travel}
          arrowSide={ArrowPosition.RIGHT}
          arrowPosition={ArrowPosition.TOP}
        >
          Lovely label
        </Label>
        <PulseLabel labelSide={ArrowPosition.RIGHT} labelPosition={ArrowPosition.TOP} />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
