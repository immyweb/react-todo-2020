import * as React from 'react';
import { shallow } from 'enzyme';
import tableGenerator from './table-generator';
import { Fixture, Cta } from './fixture';
import { FixtureResultType } from './types';

const data = require('./test-data.json');

// comparing output to this starting data + testTally which is mocked user input.
// {
// 	"team": "Man City",
// 	"played": 30,
// 	"win": 26,
// 	"draw": 3,
// 	"lose": 1,
// 	"points": 81
// },

const testTally = [
  {
    team: 'Man City',
    points: 3,
    id: 0,
    resultType: FixtureResultType.Win,
  },
  {
    team: 'Man City',
    points: 0,
    id: 1,
    resultType: FixtureResultType.Lose,
  },
  {
    team: 'Man City',
    points: 1,
    id: 2,
    resultType: FixtureResultType.Draw,
  },
];

const _fixtures = [
  {
    id: 0,
    team1: 'Man City',
    team2: 'Liverpool',
  },
];

const winFixtureA = [
  {
    id: 0,
    resultType: FixtureResultType.Win,
    team: 'Man City',
  },
  {
    id: 0,
    resultType: FixtureResultType.Lose,
    team: 'Liverpool',
  },
];

const drawFixture = [
  {
    id: 0,
    resultType: FixtureResultType.Draw,
    team: 'Man City',
  },
  {
    id: 0,
    resultType: FixtureResultType.Draw,
    team: 'Liverpool',
  },
];

const winFixtureB = [
  {
    id: 0,
    resultType: FixtureResultType.Lose,
    team: 'Man City',
  },
  {
    id: 0,
    resultType: FixtureResultType.Win,
    team: 'Liverpool',
  },
];

describe('Table generator', () => {
  it(`tableGenerator.addToTally "WIN" adds 3 points`, () => {
    const result = tableGenerator.addToTally(winFixtureA, []);
    expect(result[0].points).toEqual(3);
  });

  it(`tableGenerator.addToTally "DRAW" adds 1 point`, () => {
    const result = tableGenerator.addToTally(drawFixture, []);
    const _results = result.filter(x => x.id === drawFixture[0].id).map(item => item.points);
    expect(_results).toBeDefined();
    expect(_results).toEqual([1, 1]);
  });

  it(`tableGenerator.addToTally "LOSE" adds 0 points`, () => {
    const result = tableGenerator.addToTally(winFixtureB, []);
    expect(result[0].points).toEqual(0);
  });

  it(`passed "Win" score object with correct keys`, () => {
    const spy = jest.fn();
    const fixture = shallow(
      <Fixture
        fixture={_fixtures[0]}
        teams={data.teams}
        onPredict={tally => spy(tally)}
        onPlayed={() => jest.fn()}
        onSlidePlayed={() => jest.fn()}
      />,
    );
    const homeWinCta = fixture.find(Cta).at(0);
    homeWinCta.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([
      {
        id: 0,
        resultType: FixtureResultType.Win,
        team: 'Man City',
      },
      {
        id: 0,
        resultType: FixtureResultType.Lose,
        team: 'Liverpool',
      },
    ]);
  });

  it(`tableGenerator.finalise correctly computes "played"`, () => {
    const result = tableGenerator.finalise(data.teams, testTally);
    expect(result[0].played).toEqual(33); // adding more games for Man City to testTally will change this
  });

  it(`tableGenerator.finalise correctly computes "win"`, () => {
    const result = tableGenerator.finalise(data.teams, testTally);
    expect(result[0].win).toEqual(27);
  });

  it(`tableGenerator.finalise correctly computes "draw"`, () => {
    const result = tableGenerator.finalise(data.teams, testTally);
    expect(result[0].draw).toEqual(4);
  });

  it(`tableGenerator.finalise correctly computes "lose"`, () => {
    const result = tableGenerator.finalise(data.teams, testTally);
    expect(result[0].lose).toEqual(2);
  });

  it(`tableGenerator.finalise correctly computes "points"`, () => {
    const result = tableGenerator.finalise(data.teams, testTally);
    expect(result[0].points).toEqual(85);
  });
});
