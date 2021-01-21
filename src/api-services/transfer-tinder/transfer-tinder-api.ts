import { apiService } from '../api-service';
import { IVoteCount } from '../../ui/transfer-top-trumps/types';
import { guessAPIHostname } from '../hostname-helper';

const PROTOCOL = 'https';

const getUrlBase = () => {
  const domain = guessAPIHostname(window.location.hostname);
  return `${PROTOCOL}://${domain}/pod-backend-services/votes`;
};

export const transferTinderAPI = {
  getPlayerVotes: async (club: string, players: string[]) => {
    const playersString = players.join(',');
    const urlBase = getUrlBase();
    const url = `${urlBase}?club=${club}&players=${playersString}`;

    const playerVotesArr = (await apiService.get({
      url,
    })) as IVoteCount[];

    const arr = playerVotesArr.map(playerVote => ({
      ...playerVote,
      noVoteCount: playerVote.noVoteCount ? playerVote.noVoteCount : 0,
    }));
    return arr;
  },
  addPlayerVotes: (club: string, players: string[], noPlayers: string[]) => {
    const bodyObject = { club, players, noPlayers };
    const body = JSON.stringify(bodyObject);
    const urlBase = getUrlBase();

    return apiService.post({
      body,
      url: `${urlBase}`,
    });
  },
};
