import * as React from 'react';
import { shallow } from 'enzyme';

import { Slide } from './slide';
import { Fixture } from './fixture';

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

const group = [
  { id: 0, team1: 'C Palace', team2: 'Liverpool' },
  { id: 1, team1: 'Brighton', team2: 'Leicester' },
  { id: 2, team1: 'C Palace', team2: 'Liverpool' },
  { id: 3, team1: 'Brighton', team2: 'Leicester' },
  { id: 4, team1: 'C Palace', team2: 'Liverpool' },
  { id: 5, team1: 'Brighton', team2: 'Leicester' },
  { id: 6, team1: 'C Palace', team2: 'Liverpool' },
  { id: 7, team1: 'Brighton', team2: 'Leicester' },
];

function shallowSlide(props?: any) {
  return shallow(
    <Slide
      group={group}
      teams={teams}
      slideWidth={620}
      onPlayed={() => {}}
      onPredict={() => {}}
      onToggleNext={() => {}}
      {...props}
    />,
  );
}

describe('<Slide />', () => {
  it('renders correctly', () => {
    const wrapper = shallowSlide();
    expect(wrapper).toMatchSnapshot();
  });

  it('groupTotalNumber state is set to correct value', () => {
    const wrapper = shallowSlide();
    expect(wrapper.state('groupTotalNumber')).toEqual(8);
  });

  it('renders correct number of fixtures', () => {
    const wrapper = shallowSlide();
    const groups = wrapper.find(Fixture);
    expect(groups.length).toEqual(8);
  });

  it('calling onSlidePlayed with new prediction updates groupTotalPlayed state', () => {
    const wrapper = shallowSlide();
    const instance = wrapper.instance() as any;
    expect(wrapper.state('groupTotalPlayed')).toEqual(0);
    instance.onSlidePlayed(0);
    expect(wrapper.state('groupTotalPlayed')).toEqual(1);
    instance.onSlidePlayed(0);
    expect(wrapper.state('groupTotalPlayed')).toEqual(1);
    instance.onSlidePlayed(1);
    expect(wrapper.state('groupTotalPlayed')).toEqual(2);
  });

  it('allGroupFixturesPlayed is set to true when all slide fixtures are played', () => {
    const wrapper = shallowSlide({
      group: [
        { id: 0, team1: 'C Palace', team2: 'Liverpool' },
        { id: 1, team1: 'Brighton', team2: 'Leicester' },
        { id: 2, team1: 'C Palace', team2: 'Liverpool' },
      ],
    });
    expect(wrapper.state('allGroupFixturesPlayed')).toBe(false);
    const instance = wrapper.instance() as any;
    instance.onSlidePlayed(0);
    instance.onSlidePlayed(1);
    instance.onSlidePlayed(2);
    expect(wrapper.state('allGroupFixturesPlayed')).toBe(true);
  });
});
