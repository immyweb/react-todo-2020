import { transferTinderAPI } from './transfer-tinder-api';

import { apiService } from '../api-service';

jest.mock('../api-service', () => ({
  apiService: {
    get: jest.fn(() => [
      {
        player: 'l_bonucci',
        voteCount: 666,
        club: 'man-utd',
      },
      {
        player: 'm_maron',
        voteCount: 22,
        club: 'man-utd',
        noVoteCount: 11,
      },
    ]),
    post: jest.fn(),
  },
}));

describe('Transfer Tinder API', () => {
  describe('getPlayerVotes', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('calls API with correct parameters when one player set, and return augmented results', async () => {
      const res = await transferTinderAPI.getPlayerVotes('watford', ['t_deeney']);
      expect(apiService.get).toHaveBeenCalledWith({
        url:
          'https://www-dev.uat-thesun.co.uk/pod-backend-services/votes?club=watford&players=t_deeney',
      });
      expect(res).toEqual([
        {
          player: 'l_bonucci',
          voteCount: 666,
          club: 'man-utd',
          noVoteCount: 0,
        },
        {
          player: 'm_maron',
          voteCount: 22,
          club: 'man-utd',
          noVoteCount: 11,
        },
      ]);
    });
    it('calls API with correct parameters when multiple players set', () => {
      transferTinderAPI.getPlayerVotes('watford', ['t_deeney', 'g_southgate']);
      expect(apiService.get).toHaveBeenCalledWith({
        url:
          'https://www-dev.uat-thesun.co.uk/pod-backend-services/votes?club=watford&players=t_deeney,g_southgate',
      });
    });
  });
  describe('addPlayerVotes', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it('calls API with correct parameters when one player set', () => {
      transferTinderAPI.addPlayerVotes('watford', ['t_deeney'], ['j_law']);
      expect(apiService.post).toHaveBeenCalledWith({
        body: '{"club":"watford","players":["t_deeney"],"noPlayers":["j_law"]}',
        url: 'https://www-dev.uat-thesun.co.uk/pod-backend-services/votes',
      });
    });
    it('calls API with correct parameters when multiple players set', () => {
      transferTinderAPI.addPlayerVotes(
        'watford',
        ['t_deeney', 'g_southgate'],
        ['c_small', 'j_law'],
      );
      expect(apiService.post).toHaveBeenCalledWith({
        body:
          '{"club":"watford","players":["t_deeney","g_southgate"],"noPlayers":["c_small","j_law"]}',
        url: 'https://www-dev.uat-thesun.co.uk/pod-backend-services/votes',
      });
    });
  });
});
