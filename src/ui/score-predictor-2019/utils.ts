import { IFixture, ITeam, FixtureResultType } from './types';

export const groupFixtures = (fixtures: IFixture[], groupNumber: number): IFixture[][] => {
  const grouped = [];
  const fixturesCopy = fixtures.map(a => ({ ...a }));
  while (fixturesCopy.length > 0) {
    grouped.push(fixturesCopy.splice(0, groupNumber));
  }

  return grouped;
};

export const getBadge = (teamName: string, teams: ITeam[]): string => {
  const team = teams.find(t => t.team === teamName);
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

export const groupBy = <T>(items: T[], prop: string) => {
  return items.reduce((grouped, item: T) => {
    const propertyValue = item[prop];

    if (!grouped[propertyValue]) {
      grouped[propertyValue] = [];
    }
    grouped[propertyValue].push(item);
    return grouped;
  }, {});
};
