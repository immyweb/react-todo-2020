import * as React from 'react';
import { mount } from 'enzyme';

import Predictor from '../predictor';
import IntroScreen from '../intro-screen';

const data = require('../mock-data.json');

function mountRender(props?: any) {
  return mount(
    <Predictor
      theme={{
        primary: '#000000',
        secondary: '#ffffff',
      }}
      intro={data.content.intro}
      teams={data.content.teams}
      fixtures={data.content.fixtures}
      onPredict={() => {}}
      onConfirm={() => {}}
      onLoaded={() => {}}
      {...props}
    />,
  );
}

jest.useFakeTimers();

describe('<Predictor />', () => {
  it('sets correct state values on launch', () => {
    const wrapper = mountRender();
    expect(wrapper.state('slideCount')).toEqual(6);
    expect(wrapper.state('totalFixtures')).toEqual(25);
  });

  it('calling onStartGame hides intro screen', () => {
    const wrapper = mountRender();
    const instance = wrapper.instance() as Predictor;
    expect(wrapper.state('introScreen')).toBe(true);
    instance.onStartGame();
    wrapper.update();
    expect(wrapper.state('introScreen')).toBe(false);
    const intro = wrapper.find(IntroScreen);
    expect(intro.length).toEqual(0);
  });

  it('calling onTogglePrev loads the previous slide', () => {
    const wrapper = mountRender({ groupNumber: 2 });
    const instance = wrapper.instance() as Predictor;
    wrapper.setState({ currentSlide: 1, currentPos: 620 });
    instance.onTogglePrev();
    expect(wrapper.state('currentSlide')).toEqual(0);
    expect(wrapper.state('currentPos')).toEqual(0);
  });

  it('calling onTogglePrev on first slide does nothing', () => {
    const wrapper = mountRender({ groupNumber: 2 });
    const instance = wrapper.instance() as Predictor;
    wrapper.setState({ currentSlide: 0, currentPos: 0 });
    instance.onTogglePrev();
    expect(wrapper.state('currentSlide')).toEqual(0);
    expect(wrapper.state('currentPos')).toEqual(0);
  });

  it('calling onToggleNext loads the next slide', () => {
    const wrapper = mountRender({ groupNumber: 2 });
    const instance = wrapper.instance() as Predictor;
    wrapper.setState({ currentSlide: 0, currentPos: 0, slideWidth: 620 });
    instance.onToggleNext();
    expect(wrapper.state('currentSlide')).toEqual(1);
    expect(wrapper.state('currentPos')).toEqual(620);
  });

  it('calling onToggleNext on the last slide does nothing', () => {
    const wrapper = mountRender({ groupNumber: 2 });
    const instance = wrapper.instance() as Predictor;
    wrapper.setState({ currentSlide: 5, currentPos: 5 * 620, slideWidth: 620 });
    instance.onToggleNext();
    expect(wrapper.state('currentSlide')).toEqual(5);
    expect(wrapper.state('currentPos')).toEqual(5 * 620);
  });
});
