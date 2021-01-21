import { IFixture, ITeam, FixtureResultType, ITally } from './types';

export const groupFixtures = (fixtures: IFixture[], groupNumber: number): IFixture[][] => {
  const grouped = [];
  const fixturesCopy = fixtures.map((a) => ({ ...a }));
  while (fixturesCopy.length > 0) {
    grouped.push(fixturesCopy.splice(0, groupNumber));
  }

  return grouped;
};

export const getBadge = (teamName: string, teams: ITeam[]): string => {
  const team = teams.find((t) => t.team === teamName);
  if (team !== undefined) {
    return team.badge;
  }
  return '';
};

export const scoreConfig = {
  WIN: {
    type: FixtureResultType.Win,
    points: 3,
  },
  LOSE: {
    type: FixtureResultType.Lose,
    points: 0,
  },
  DRAW: {
    type: FixtureResultType.Draw,
    points: 1,
  },
};

export const groupBy = (items: ITally[], team: string) => {
  return items.reduce((grouped, item: ITally) => {
    const propertyValue: string = item[team];
    console.log(item[team]);

    if (!grouped[propertyValue]) {
      grouped[propertyValue] = [];
    }
    grouped[propertyValue].push(item);
    return grouped;
  }, {});
};
