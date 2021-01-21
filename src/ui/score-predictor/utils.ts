import { FixtureResultType } from './types';

const scoreConfig = {
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

export default scoreConfig;
