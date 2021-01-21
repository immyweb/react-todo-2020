import { addToTally, finalise, sortTable } from '../table-generator';

import { FixtureResultType } from '../types';

const data = require('../mock-data.json');

describe('addToTally', () => {
  it('"WIN" adds 3 points', () => {
    const tally = [
      {
        id: 0,
        resultType: FixtureResultType.Win,
        team: 'Man City',
        goals: 1,
        conceded: 3,
      },
      {
        id: 0,
        resultType: FixtureResultType.Lose,
        team: 'Liverpool',
        goals: 3,
        conceded: 1,
      },
    ];
    const result = addToTally(tally, []);
    expect(result[0].points).toEqual(3);
  });

  it('"DRAW" adds 1 point', () => {
    const tally = [
      {
        id: 0,
        resultType: FixtureResultType.Draw,
        team: 'Man City',
        goals: 1,
        conceded: 1,
      },
      {
        id: 0,
        resultType: FixtureResultType.Draw,
        team: 'Liverpool',
        goals: 1,
        conceded: 1,
      },
    ];
    const result = addToTally(tally, []);
    const _results = result.filter(x => x.id === tally[0].id).map(item => item.points);
    expect(_results).toBeDefined();
    expect(_results).toEqual([1, 1]);
  });

  it('"LOSE" adds 0 points', () => {
    const tally = [
      {
        id: 0,
        resultType: FixtureResultType.Lose,
        team: 'Liverpool',
        goals: 3,
        conceded: 1,
      },
      {
        id: 0,
        resultType: FixtureResultType.Win,
        team: 'Man City',
        goals: 1,
        conceded: 3,
      },
    ];
    const result = addToTally(tally, []);
    expect(result[0].points).toEqual(0);
  });
});

describe('finalise', () => {
  const testTally = [
    {
      team: 'Tottenham',
      points: 3,
      id: 0,
      resultType: FixtureResultType.Win,
      goals: 3,
      conceded: 1,
    },
    {
      team: 'Tottenham',
      points: 0,
      id: 1,
      resultType: FixtureResultType.Lose,
      goals: 3,
      conceded: 1,
    },
    {
      team: 'Tottenham',
      points: 1,
      id: 2,
      resultType: FixtureResultType.Draw,
      goals: 3,
      conceded: 1,
    },
  ];

  it('correctly computes "played"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].played).toEqual(33);
  });

  it('correctly computes "win"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].win).toEqual(21);
  });

  it('correctly computes "draw"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].draw).toEqual(2);
  });

  it('correctly computes "lose"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].lose).toEqual(10);
  });

  it('correctly computes "points"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].points).toEqual(65);
  });

  it('correctly computes "goals"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].goals).toEqual(66);
  });

  it('correctly computes "conceded"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].conceded).toEqual(35);
  });

  it('correctly computes "goalDiff"', () => {
    const result = finalise(data.content.teamData, testTally);
    expect(result[0].goalDiff).toEqual(31);
  });
});

describe('sortTable', () => {
  const finalTable = [
    {
      team: 'Arsenal',
      points: 70,
      played: 37,
      win: 21,
      draw: 7,
      lose: 9,
      goals: 70,
      conceded: 46,
      goalDiff: 24,
    },
    {
      team: 'Chelsea',
      points: 66,
      played: 36,
      win: 20,
      draw: 6,
      lose: 10,
      goals: 56,
      conceded: 39,
      goalDiff: 17,
    },
    {
      team: 'Tottenham',
      points: 73,
      played: 36,
      win: 24,
      draw: 1,
      lose: 11,
      goals: 65,
      conceded: 36,
      goalDiff: 29,
    },
    {
      team: 'Man Utd',
      points: 73,
      played: 36,
      win: 24,
      draw: 7,
      lose: 8,
      goals: 68,
      conceded: 45,
      goalDiff: 33,
    },
  ];
  it('correctly sorts by points', () => {
    const result = finalTable.sort(sortTable());
    expect(result).toEqual([
      {
        team: 'Man Utd',
        points: 73,
        played: 36,
        win: 24,
        draw: 7,
        lose: 8,
        goals: 68,
        conceded: 45,
        goalDiff: 33,
      },
      {
        team: 'Tottenham',
        points: 73,
        played: 36,
        win: 24,
        draw: 1,
        lose: 11,
        goals: 65,
        conceded: 36,
        goalDiff: 29,
      },
      {
        team: 'Arsenal',
        points: 70,
        played: 37,
        win: 21,
        draw: 7,
        lose: 9,
        goals: 70,
        conceded: 46,
        goalDiff: 24,
      },
      {
        team: 'Chelsea',
        points: 66,
        played: 36,
        win: 20,
        draw: 6,
        lose: 10,
        goals: 56,
        conceded: 39,
        goalDiff: 17,
      },
    ]);
  });

  it('correctly sorts by goal difference, if points are same', () => {
    const result = finalTable.sort(sortTable());
    expect(result[0].team).toEqual('Man Utd');
    expect(result[1].team).toEqual('Tottenham');
  });
});
