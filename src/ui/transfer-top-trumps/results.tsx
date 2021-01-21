import * as React from 'react';

import { ChartHorizontalBar } from './horizontal-bar-chart';
import { Gradient } from './gradient';
import { ResultsProfiles } from './results-profiles';
import { ResultsLabels } from './results-labels';

import {
  TTHeadline,
  TTSubHeadline,
  TTLozengeBtn,
  TTLozengeBtnIcon,
  ResultsInner,
  ResultsCharts,
  BtnHolder,
  BadgeImageHolder,
  Badge,
  Inner,
  BadgeImage,
} from './styles';
import { colours } from '../../styles/colours';

import { IResults, IClub, IPlayer, IVoteCount } from './types';
import { ITheme } from '../../types/theme';

interface IProps extends IResults {
  players: IPlayer[];
  playerVotes: IVoteCount[];
  theme: ITheme;
  targetClub: IClub;
  onGoToLink(): void;
}

export const calculatePercentages = (data: IVoteCount[]): IVoteCount[] => {
  const newData = data.map((item, i) => {
    const totalVotes = item.voteCount + item.noVoteCount;
    return {
      ...item,
      votePercent:
        totalVotes === 0 || item.voteCount === 0
          ? 0
          : Math.round((item.voteCount / totalVotes) * 100),
      noVotePercent:
        totalVotes === 0 || item.voteCount === 0
          ? 0
          : Math.round(100 - (item.voteCount / totalVotes) * 100),
    };
  });

  return newData;
};

export const sortProfiles = (results: IVoteCount[], players: IPlayer[]) => {
  return players.map(player => {
    const matchingResult = results.find(result => {
      return player.id === result.player;
    });
    return matchingResult ? { ...player, voteCount: matchingResult.voteCount } : { ...player };
  });
};

export const Results: React.SFC<IProps> = ({
  headline,
  subHeadline,
  playBtn,
  players,
  theme,
  targetClub,
  onGoToLink,
  playerVotes,
}) => {
  const sortedProfiles = sortProfiles(playerVotes, players);
  const updatedPlayerVotes = calculatePercentages(playerVotes);
  return (
    <div>
      <ResultsInner>
        <TTHeadline className={'ttt-results-headline'} fontColour={theme.primary}>
          {headline}
        </TTHeadline>
        <TTSubHeadline className={'ttt-results-subheadline'} fontColour={colours.$white}>
          {subHeadline}
        </TTSubHeadline>
        <BadgeImageHolder className={'ttt-results-badge'}>
          <Gradient colour={targetClub.teamColours} top={15} height={4} opacity={0.5} />
          <Badge size={50}>
            <BadgeImage src={targetClub.badge} alt={targetClub.name} />
          </Badge>
        </BadgeImageHolder>
        <ResultsCharts className={'ttt-results-chart'}>
          <ResultsLabels sortedProfiles={sortedProfiles} />
          <ResultsProfiles sortedProfiles={sortedProfiles} />
          <ChartHorizontalBar data={updatedPlayerVotes} theme={theme} />
        </ResultsCharts>
      </ResultsInner>
      <Inner className={'ttt-inner'} padding={'0 0 25px'}>
        <BtnHolder className={'ttt-results-button'}>
          <TTLozengeBtn bkgndTop={theme.primary} bkgndBottom={theme.secondary} onClick={onGoToLink}>
            <TTLozengeBtnIcon src={targetClub.badge} alt={targetClub.name} />
            {playBtn}
          </TTLozengeBtn>
        </BtnHolder>
      </Inner>
    </div>
  );
};
