import * as React from 'react';
import { shallow } from 'enzyme';
import { EndScreen, Link } from './end-screen';
import Button from '../buttons/buttons';

describe('<EndScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EndScreen onCloseScreen={() => {}} onGoToUrl={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it(`onCloseScreen is called when "No thanks" button is clicked`, () => {
    const fn = jest.fn();
    const wrapper = shallow(<EndScreen onCloseScreen={fn} onGoToUrl={() => {}} />);
    const btn = wrapper.find(Link);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it(`goToUrl is called when "Play now for free" button is clicked`, () => {
    const fn = jest.fn();
    const wrapper = shallow(<EndScreen onCloseScreen={() => {}} onGoToUrl={fn} />);
    const btn = wrapper.find(Button);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
