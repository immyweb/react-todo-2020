import * as React from 'react';

import FinalTable from './final-table';
import { MessageContainer, IntroBox, Copy, Heading, IntroCta } from './styles';

import { IIntro, ITeam } from './types';
import { ITheme } from '../../types';
import { colours } from '../../styles/colours';

interface IProps {
  theme: ITheme;
  slideWidth: number;
  intro: IIntro;
  teams: ITeam[];
  onStartGame(): void;
}

const IntroScreen: React.FC<IProps> = ({ theme, intro, slideWidth, teams, onStartGame }) => {
  const { title, subTitle, copy, cta, predictions } = intro;
  return (
    <MessageContainer width={slideWidth}>
      <FinalTable {...theme} heading={title} finalStanding={predictions} teams={teams} />
      <IntroBox background={theme.primary}>
        <div>
          <Heading>{subTitle}</Heading>
          <Copy>{copy}</Copy>
        </div>
        <IntroCta
          colour={{ colour: theme.primary, background: colours.$white }}
          hover={{ colour: colours.$white, background: theme.secondary }}
          onClick={onStartGame}
        >
          {cta}
        </IntroCta>
      </IntroBox>
    </MessageContainer>
  );
};

export default IntroScreen;
