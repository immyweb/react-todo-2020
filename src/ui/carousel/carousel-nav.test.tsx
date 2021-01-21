import * as React from 'react';
import { shallow } from 'enzyme';
import CarouselNav from './carousel-nav';
import { SlideNav } from './styles';
import { Direction } from './types';
import Icon from '../icon/icon';

function shallowRender(props?: any) {
  return shallow(
    <CarouselNav
      onClick={() => {}}
      colour={'#000000'}
      direction={Direction.PREV}
      handleNavClick={() => {}}
      {...props}
    />,
  );
}

describe('<CarouselNav />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleNavClick when nav is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ handleNavClick: fn });
    const btn = wrapper.find(SlideNav);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('renders correct chevron depending on passed Direction prop', () => {
    const wrapper = shallowRender({ direction: Direction.NEXT });
    const icon = wrapper.find(Icon);
    expect(icon.props().iconName).toEqual('chevron-solid-right');
  });
});
