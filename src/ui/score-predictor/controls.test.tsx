import * as React from 'react';
import { shallow } from 'enzyme';
import Controls from './controls';
import { CurrentNum, SlideCount, Nav } from './styles';

describe('<Controls />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Controls currentSlide={1} slideCount={6} onTogglePrev={() => {}} onToggleNext={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct current slide number and total slide count', () => {
    const wrapper = shallow(
      <Controls currentSlide={3} slideCount={9} onTogglePrev={() => {}} onToggleNext={() => {}} />,
    );
    const currentSlide = wrapper.find(CurrentNum);
    expect(currentSlide.dive().text()).toEqual('4');
    const total = wrapper.find(SlideCount);
    expect(total.dive().text()).toEqual('9');
  });

  it('onTogglePrev is called when clicking back button', () => {
    const fn = jest.fn();
    const wrapper = shallow(
      <Controls currentSlide={3} slideCount={9} onTogglePrev={fn} onToggleNext={() => {}} />,
    );
    const btn = wrapper.find(Nav).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('onToggleNext is called when clicking forward button', () => {
    const fn = jest.fn();
    const wrapper = shallow(
      <Controls currentSlide={3} slideCount={9} onTogglePrev={() => {}} onToggleNext={fn} />,
    );
    const btn = wrapper.find(Nav).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('back button should be disabled if on first slide', () => {
    const wrapper = shallow(
      <Controls currentSlide={0} slideCount={6} onTogglePrev={() => {}} onToggleNext={() => {}} />,
    );
    const prevBtn = wrapper.find(Nav).first();
    expect(prevBtn.props().disabled).toEqual(true);
    const nextBtn = wrapper.find(Nav).last();
    expect(nextBtn.props().disabled).toEqual(false);
  });

  it('next button should be disabled if on last slide', () => {
    const wrapper = shallow(
      <Controls currentSlide={5} slideCount={6} onTogglePrev={() => {}} onToggleNext={() => {}} />,
    );
    const nextBtn = wrapper.find(Nav).last();
    expect(nextBtn.props().disabled).toEqual(true);
    const prevBtn = wrapper.find(Nav).first();
    expect(prevBtn.props().disabled).toEqual(false);
  });
});
