import * as React from 'react';
import { mount } from 'enzyme';

import { Predictor, groupFixtures } from './predictor';
import IntroScreen from './intro-screen';

const teams = [
  {
    team: 'Liverpool',
    badge: 'https://www.thesun.co.uk/wp-content/uploads/2016/04/Liverpool.png?strip=all&w=67',
    played: 31,
    win: 18,
    draw: 9,
    lose: 4,
    points: 63,
  },
  {
    team: 'C Palace',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/CPFC-Primary-Badge.png?strip=all&w=72',
    played: 31,
    win: 7,
    draw: 9,
    lose: 15,
    points: 30,
  },
  {
    team: 'Brighton',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2017/05/1024px-brighton__hove_albion_logo-svg_.png?strip=all&w=96',
    played: 30,
    win: 8,
    draw: 10,
    lose: 12,
    points: 34,
  },
  {
    team: 'Leicester',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/Leicester-City_RGB.png?strip=all&w=90',
    played: 30,
    win: 10,
    draw: 10,
    lose: 10,
    points: 40,
  },
];

const fixtures = [
  { id: 0, team1: 'C Palace', team2: 'Liverpool' },
  { id: 1, team1: 'Brighton', team2: 'Leicester' },
  { id: 2, team1: 'C Palace', team2: 'Liverpool' },
  { id: 3, team1: 'Brighton', team2: 'Leicester' },
  { id: 4, team1: 'C Palace', team2: 'Liverpool' },
  { id: 5, team1: 'Brighton', team2: 'Leicester' },
  { id: 6, team1: 'C Palace', team2: 'Liverpool' },
  { id: 7, team1: 'Brighton', team2: 'Leicester' },
];

function mountPredictor(props?: any) {
  return mount(
    <Predictor
      fixtures={fixtures}
      teams={teams}
      groupNumber={8}
      onConfirm={() => {}}
      onLoaded={() => {}}
      onPredict={() => {}}
      introHeadline={'EFL CHAMPIONSHIP PREDICTOR'}
      introTxt={
        'Predict Home Win, Draw or Away Win to see who will finish in those crucial Promotion and Relegation places.'
      }
      {...props}
    />,
  );
}

jest.useFakeTimers();

describe('<Predictor />', () => {
  it('sets correct state values on launch', () => {
    const wrapper = mountPredictor();
    expect(wrapper.state('slideCount')).toEqual(1);
    expect(wrapper.state('totalFixtures')).toEqual(8);
  });

  it('calling groupFixtures splits the fixtures into the group number', () => {
    const slides = groupFixtures(fixtures, 4);
    expect(slides.length).toEqual(2);
    const slides2 = groupFixtures(fixtures, 2);
    expect(slides2.length).toEqual(4);
  });

  it('calling onStartGame hides intro screen', () => {
    const wrapper = mountPredictor();
    const instance = wrapper.instance() as any;
    expect(wrapper.state('intro')).toBe(true);
    instance.onStartGame();
    wrapper.update();
    expect(wrapper.state('intro')).toBe(false);
    const intro = wrapper.find(IntroScreen);
    expect(intro.length).toEqual(0);
  });

  it('calling onTogglePrev loads the previous slide', () => {
    const wrapper = mountPredictor({ groupNumber: 2 });
    const instance = wrapper.instance() as any;
    wrapper.setState({ currentSlide: 1, currentPos: 620 });
    instance.onTogglePrev();
    expect(wrapper.state('currentSlide')).toEqual(0);
    expect(wrapper.state('currentPos')).toEqual(0);
  });

  it('calling onTogglePrev on first slide does nothing', () => {
    const wrapper = mountPredictor({ groupNumber: 2 });
    const instance = wrapper.instance() as any;
    wrapper.setState({ currentSlide: 0, currentPos: 0 });
    instance.onTogglePrev();
    expect(wrapper.state('currentSlide')).toEqual(0);
    expect(wrapper.state('currentPos')).toEqual(0);
  });

  it('calling onToggleNext loads the next slide', () => {
    const wrapper = mountPredictor({ groupNumber: 2 });
    const instance = wrapper.instance() as any;
    wrapper.setState({ currentSlide: 0, currentPos: 0, slideWidth: 620 });
    instance.onToggleNext();
    expect(wrapper.state('currentSlide')).toEqual(1);
    expect(wrapper.state('currentPos')).toEqual(620);
  });

  it('calling onToggleNext on the last slide does nothing', () => {
    const wrapper = mountPredictor({ groupNumber: 2 });
    const instance = wrapper.instance() as any;
    wrapper.setState({ currentSlide: 4, currentPos: 4 * 620, slideWidth: 620 });
    instance.onToggleNext();
    expect(wrapper.state('currentSlide')).toEqual(4);
    expect(wrapper.state('currentPos')).toEqual(4 * 620);
  });

  it('calling onPlayed tracks the fixtures played', () => {
    const wrapper = mountPredictor();
    const instance = wrapper.instance() as any;
    expect(wrapper.state('fixturesPlayed')).toEqual(0);
    instance.onPlayed(1);
    expect(wrapper.state('fixturesPlayed')).toEqual(1);
    instance.onPlayed(1);
    expect(wrapper.state('fixturesPlayed')).toEqual(1);
    instance.onPlayed(4);
    expect(wrapper.state('fixturesPlayed')).toEqual(2);
  });

  it('if allFixturesCompleted is true, onConfirm should be called', () => {
    const fn = jest.fn();
    const wrapper = mountPredictor({ onConfirm: fn });
    const instance = wrapper.instance() as any;
    instance.onPlayed(0);
    instance.onPlayed(1);
    instance.onPlayed(2);
    instance.onPlayed(3);
    instance.onPlayed(4);
    instance.onPlayed(5);
    instance.onPlayed(6);
    instance.onPlayed(7);
    jest.runAllTimers();
    expect(wrapper.state('allFixturesCompleted')).toBe(true);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
