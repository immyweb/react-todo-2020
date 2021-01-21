import { apiService } from '../api-service';
import { config } from './config';

export const worldCupApi = {
  fixturesAndResults: () => {
    const url = `/api/worldcup/soccerdata/match/${
      config.authToken
    }?_rt=b&_fmt=json&live=yes&tmcl=bkvkz42omnou98nkjgb3dh0b9&_ordSrt=asc&_pgSz=50&mt.mDt=[2018-06-14T00:00:00Z TO 2018-06-29T00:00:00Z]`;
    return apiService.get({ url });
  },
  groupStandings: () => {
    const url = `/api/worldcup/soccerdata/standings/${
      config.authToken
    }?_rt=b&_fmt=json&tmcl=bkvkz42omnou98nkjgb3dh0b9&stg=81j6wd3p6e18bp6dipk0clfyg&type=total`;
    return apiService.get({ url });
  },
};
