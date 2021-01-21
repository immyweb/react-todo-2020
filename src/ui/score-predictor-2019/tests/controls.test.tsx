import * as React from 'react';
import { shallow } from 'enzyme';
import Controls from '../controls';
import { CurrentNum, Nav } from '../styles';

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
};

function shallowRender(props?: any) {
  return shallow(
    <Controls
      {...theme}
      currentSlide={3}
      slideCount={9}
      onTogglePrev={() => {}}
      onToggleNext={() => {}}
      {...props}
    />,
  );
}

describe('<Controls />', () => {
  it('renders correct current slide number and total slide count', () => {
    const wrapper = shallowRender();
    const currentSlide = wrapper.find(CurrentNum);
    expect(currentSlide.dive().text()).toEqual('4');
    const total = wrapper.find('.control__slidecount');
    expect(total.text()).toEqual('9');
  });

  it('onTogglePrev is called when clicking back button', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onTogglePrev: fn });
    const btn = wrapper.find(Nav).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('onToggleNext is called when clicking forward button', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onToggleNext: fn });
    const btn = wrapper.find(Nav).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('back button should be disabled if on first slide', () => {
    const wrapper = shallowRender({ currentSlide: 0, slideCount: 6 });
    const prevBtn = wrapper.find(Nav).first();
    expect(prevBtn.props().disabled).toEqual(true);
    const nextBtn = wrapper.find(Nav).last();
    expect(nextBtn.props().disabled).toEqual(false);
  });

  it('next button should be disabled if on last slide', () => {
    const wrapper = shallowRender({ currentSlide: 5, slideCount: 6 });
    const nextBtn = wrapper.find(Nav).last();
    expect(nextBtn.props().disabled).toEqual(true);
    const prevBtn = wrapper.find(Nav).first();
    expect(prevBtn.props().disabled).toEqual(false);
  });
});
