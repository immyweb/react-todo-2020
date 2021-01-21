import * as React from 'react';
import { shallow } from 'enzyme';

import IntroScreen from './intro-screen';
import Button from '../buttons/buttons';

function shallowRender(props?: any) {
  return shallow(
    <IntroScreen
      slideWidth={400}
      onStartGame={() => {}}
      introHeadline={'Premier League Predictor'}
      introTxt={'Play our awesome game'}
      {...props}
    />,
  );
}

describe('<IntroScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('onStartGame is called when button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onStartGame: fn });
    const btn = wrapper.find(Button);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
