import * as React from 'react';
import { shallow } from 'enzyme';

import { Slides, renderSlides } from './slides';

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

const tables = [
  [
    { id: 0, team1: 'C Palace', team2: 'Liverpool' },
    { id: 1, team1: 'Brighton', team2: 'Leicester' },
    { id: 2, team1: 'C Palace', team2: 'Liverpool' },
    { id: 3, team1: 'Brighton', team2: 'Leicester' },
    { id: 4, team1: 'C Palace', team2: 'Liverpool' },
    { id: 5, team1: 'Brighton', team2: 'Leicester' },
    { id: 6, team1: 'C Palace', team2: 'Liverpool' },
    { id: 7, team1: 'Brighton', team2: 'Leicester' },
  ],
  [
    { id: 8, team1: 'C Palace', team2: 'Liverpool' },
    { id: 9, team1: 'Brighton', team2: 'Leicester' },
  ],
];

function shallowSlides(props?: any) {
  return shallow(
    <Slides
      tables={tables}
      teams={teams}
      currentSlide={0}
      currentPos={0}
      totalWidth={1240}
      slideWidth={620}
      onPredict={() => {}}
      onPlayed={() => {}}
      onToggleNext={() => {}}
      {...props}
    />,
  );
}

describe('<Slides />', () => {
  it('renders correctly', () => {
    const wrapper = shallowSlides();
    expect(wrapper).toMatchSnapshot();
  });

  it('renderSlides returns correct number of <Slide /> components', () => {
    const wrapper = renderSlides(tables, teams, () => {}, 620, () => {}, () => {});
    expect(wrapper.length).toEqual(2);
  });
});
