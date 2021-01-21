import * as React from 'react';
import { shallow } from 'enzyme';

import Slide from '../slide';
import MatchRound from '../match-round';

const data = require('../mock-data.json');

const group = [
  {
    date: 'Monday 1st April',
    games: [
      {
        team1: 'Arsenal',
        team2: 'Newcastle',
        id: 0,
        startPrediction: {
          team1: 2,
          team2: 0,
        },
      },
    ],
  },
  {
    date: 'Tuesday 2nd April',
    games: [
      {
        team1: 'Wolves',
        team2: 'Manchester Utd',
        id: 1,
        startPrediction: {
          team1: 2,
          team2: 0,
        },
      },
    ],
  },
  {
    date: 'Sunday 7th April',
    games: [
      {
        team1: 'Everton',
        team2: 'Arsenal',
        id: 2,
        startPrediction: {
          team1: 2,
          team2: 0,
        },
      },
      {
        team1: 'Tottenham',
        team2: 'Brighton',
        id: 3,
        startPrediction: {
          team1: 2,
          team2: 0,
        },
      },
    ],
  },
];

function shallowRender(props?: any) {
  return shallow(
    <Slide
      theme={{
        primary: '#000000',
        secondary: '#ffffff',
      }}
      group={group}
      teams={data.content.teams}
      slideWidth={620}
      onPredict={() => {}}
      {...props}
    />,
  );
}

describe('<Slide />', () => {
  it('renders correct number of fixtures', () => {
    const wrapper = shallowRender();
    const groups = wrapper.find(MatchRound);
    expect(groups.length).toEqual(3);
  });
});
