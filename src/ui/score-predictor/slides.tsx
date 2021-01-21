import * as React from 'react';
import glamorous from 'glamorous';

import { Slide } from './slide';
import { SlidesContainer } from './styles';

import { IFixture, ITeam, ITally } from './types';

interface IGProps {
  width?: number;
  currentPos?: number;
}

interface IProps {
  tables: IFixture[][];
  teams: ITeam[];
  currentSlide: number;
  currentPos: number;
  totalWidth: number;
  slideWidth: number;
  onPredict(tally: ITally[]): void;
  onPlayed(fixtureId: number): void;
  onToggleNext(): void;
}

export const renderSlides = (
  tables: IFixture[][],
  teams: ITeam[],
  onPredict: (tally: ITally[]) => void,
  slideWidth: number,
  onPlayed: (fixtureId: number) => void,
  onToggleNext: () => void,
) => {
  return tables.map((group: IFixture[], i: number) => {
    return (
      <Slide
        key={i}
        group={group}
        teams={teams}
        slideWidth={slideWidth}
        onPredict={onPredict}
        onPlayed={onPlayed}
        onToggleNext={onToggleNext}
      />
    );
  });
};

export const Slides: React.SFC<IProps> = ({
  tables,
  teams,
  currentSlide,
  currentPos,
  totalWidth,
  slideWidth,
  onPredict,
  onPlayed,
  onToggleNext,
}) => {
  const slides = renderSlides(tables, teams, onPredict, slideWidth, onPlayed, onToggleNext);

  return (
    <SlidesContainer>
      <SlidesInner width={totalWidth} currentPos={currentPos}>
        {slides}
      </SlidesInner>
    </SlidesContainer>
  );
};

const SlidesInner = glamorous.div<IGProps>(
  {
    label: 'slides-inner',
    transitionDuration: '.5s',
    transitionTimingFunction: 'ease',
    transitionProperty: 'all',
  },
  ({ width, currentPos }) => ({
    width: width ? width : '100%',
    transform: `translate3d(${currentPos ? -currentPos : 0}px, 0, 0)`,
  }),
);
