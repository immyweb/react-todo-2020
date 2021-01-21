import * as React from 'react';

import MatchRound from './match-round';
import { SlidePane, SlidesHeader } from './styles';

import { IFixture, ITeam, ITally } from './types';
import { ITheme } from '../../types';

interface IProps {
  theme: ITheme;
  group: IFixture[];
  teams: ITeam[];
  slideWidth: number;
  onPredict: (tally: ITally[]) => void;
}

const Slide: React.FC<IProps> = ({ theme, group, teams, slideWidth, onPredict }) => {
  const matchRounds = group.map((fixture: IFixture, i: number) => {
    return (
      <MatchRound key={i} fixture={fixture} teams={teams} theme={theme} onPredict={onPredict} />
    );
  });
  return (
    <SlidePane width={slideWidth}>
      <SlidesHeader>
        <div>Team</div> <div>Score</div> <div>Team</div>
      </SlidesHeader>
      <div>{matchRounds}</div>
    </SlidePane>
  );
};

export default Slide;
