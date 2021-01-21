import * as React from 'react';

import Slide from './slide';

import { SlidesContainer, SlidesInner, Cta, SubmitCtaHolder } from './styles';
import { colours } from '../../styles/colours';

import { IFixture, ITally, ITeam, IIntro } from './types';
import { ITheme } from '../../types';

interface IProps {
  theme: ITheme;
  fixturesGrouped: IFixture[][];
  teams: ITeam[];
  currentPos: number;
  totalWidth: number;
  slideWidth: number;
  isLastSlide: boolean;
  intro: IIntro;
  onPredict(tally: ITally[]): void;
  onConfirm(): void;
}

const Slides: React.FC<IProps> = ({
  theme,
  fixturesGrouped,
  teams,
  currentPos,
  totalWidth,
  slideWidth,
  isLastSlide,
  intro,
  onPredict,
  onConfirm,
}) => {
  const slides = fixturesGrouped.map((group: IFixture[], i: number) => {
    return (
      <Slide
        key={i}
        group={group}
        teams={teams}
        theme={theme}
        slideWidth={slideWidth}
        onPredict={onPredict}
      />
    );
  });
  return (
    <SlidesContainer>
      <SlidesInner width={totalWidth} currentPos={currentPos}>
        {slides}
      </SlidesInner>
      {isLastSlide && (
        <SubmitCtaHolder>
          <Cta
            colour={{ colour: colours.$white, background: theme.primary }}
            hover={{ colour: colours.$white, background: theme.secondary }}
            onClick={onConfirm}
          >
            {intro.ctaResults}
          </Cta>
        </SubmitCtaHolder>
      )}
    </SlidesContainer>
  );
};

export default Slides;
