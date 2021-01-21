import * as React from 'react';
import { shallow } from 'enzyme';

import { IntroScreen } from './intro-screen';

import { TTLozengeBtn, TTHeadline, IntroContent } from './styles';

const targetClub = {
  id: 'man-utd',
  name: 'Man Utd',
  badge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/manutd_@2x.png',
  teamColours: '#a81507',
};

function shallowRender(props?: any) {
  return shallow(
    <IntroScreen
      headline={'Transfer Top Trumps'}
      subHeadline={'Who will you choose?'}
      introHeadline={'How to play'}
      introCopy={'Choose the players you would like your club to sign'}
      no={`Tap/Click for 'No'`}
      yes={`Tap/Click for 'Yes'`}
      playBtn={'Play now'}
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      targetClub={targetClub}
      onStartGame={() => {}}
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
    const btn = wrapper.find(TTLozengeBtn).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('headings are theme-able', () => {
    const wrapper = shallowRender({
      theme: { primary: '#e665bf', secondary: '#a6498a' },
    });
    const headline = wrapper.find(TTHeadline);
    const intro = wrapper.find(IntroContent);
    expect(headline.props().fontColour).toEqual('#e665bf');
    expect(intro.props().color).toEqual('#e665bf');
  });
});
