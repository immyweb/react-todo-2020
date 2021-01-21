import * as React from 'react';
import { shallow } from 'enzyme';

import { Nav } from '../nav';
import { APNavIcon } from '../styles';

function shallowRender(props?: any) {
  return shallow(
    <Nav currentCardIndex={0} onClickLeft={() => {}} onClickRight={() => {}} {...props} />,
  );
}

describe('<Nav />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('disables previous arrow if on first slide', () => {
    const wrapper = shallowRender({ currentCardIndex: 0 });
    const prevArrow = wrapper.find(APNavIcon).first();
    expect(prevArrow.props().disabled).toEqual(true);
  });

  it('previous arrow is enabled if not on first slide', () => {
    const wrapper = shallowRender({ currentCardIndex: 1 });
    const prevArrow = wrapper.find(APNavIcon).first();
    expect(prevArrow.props().disabled).toEqual(false);
  });

  it('calls onClickLeft when left arrow is clicked and not disabled', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickLeft: fn, currentCardIndex: 1 });
    const btn = wrapper.find(APNavIcon).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not call onClickLeft when left arrow is clicked and is disabled', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickLeft: fn, currentCardIndex: 0 });
    const btn = wrapper.find(APNavIcon).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('calls onClickRight when right arrow is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickRight: fn });
    const btn = wrapper.find(APNavIcon).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
