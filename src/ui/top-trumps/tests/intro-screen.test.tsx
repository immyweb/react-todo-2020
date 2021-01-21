import * as React from 'react';
import { shallow } from 'enzyme';

import { IntroScreen } from '../intro-screen';
import { TTButton } from '../styles';

function shallowRender(props?: any) {
  return shallow(
    <IntroScreen
      class={'youCantBuy'}
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      imageMobile="fightNight.png"
      imageDesktop="fightNightBig.png"
      playButtonText="Friday Night's alright for"
      onStartGame={() => {
        // NOOP
      }}
      {...props}
    />,
  );
}

describe('<IntroScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onStartGame when play button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onStartGame: fn });
    const btn = wrapper.find(TTButton).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
