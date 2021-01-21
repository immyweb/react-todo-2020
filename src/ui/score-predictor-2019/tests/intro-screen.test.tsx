import * as React from 'react';
import { shallow } from 'enzyme';

import IntroScreen from '../intro-screen';
import { IntroCta } from '../styles';

const data = require('../mock-data.json');

function shallowRender(props?: any) {
  return shallow(
    <IntroScreen
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      slideWidth={400}
      intro={data.content.intro}
      teams={data.content.teams}
      onStartGame={() => {}}
      {...props}
    />,
  );
}

describe('<IntroScreen />', () => {
  it('onStartGame is called when button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onStartGame: fn });
    const btn = wrapper.find(IntroCta);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
