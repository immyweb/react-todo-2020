import * as React from 'react';
import { shallow } from 'enzyme';

import ButtonCta from './button-cta';

function shallowRender(props?: any) {
  return shallow(
    <ButtonCta
      bkgndTop={'#000000'}
      bkgndBottom={'#ffffff'}
      iconName={'cross-solid'}
      onClick={() => {}}
      {...props}
    />,
  );
}

describe('<ButtonCta />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('can change size, border width and icon size', () => {
    const wrapper = shallowRender({ size: 20, borderWidth: 1, iconSize: 6 });
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick is called when button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClick: fn });
    wrapper.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const wrapper = shallowRender({ disabled: true });
    expect(wrapper.props().disabled).toEqual(true);
  });
});
