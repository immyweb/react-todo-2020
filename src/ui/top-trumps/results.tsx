import * as React from 'react';

import { IResultsScreen, IVoteCount, ICard } from './types';
import { ITheme } from '../../types/theme';
import { TTDefaultInner, TTResultsButtonLink, TTWrapper, TTResultsChartContainer } from './styles';
import { ChartHorizontalBar } from './horizontal-bar-chart';

interface IProps extends IResultsScreen {
  className: string;
  theme: ITheme;
}

export const processData = (cards: ICard[]): IVoteCount[] => {
  let totalVoteCount = 0;
  return cards.map(
    ({
      fName,
      sName,
      imageThumb,
      voteCount: { voteCount, noVoteCount } = { voteCount: 0, noVoteCount: 0 },
    }) => {
      totalVoteCount += voteCount;
      const datum = {
        imageThumb,
        voteCount,
        noVoteCount,
        player: `${fName} ${sName}`,
        get votePercentage(): number {
          return totalVoteCount ? Math.round((voteCount / totalVoteCount) * 100) : 0;
        },
      };
      return datum;
    },
  );
};

export const Results: React.SFC<IProps> = ({
  theme,
  cards,
  linkText,
  linkClick,
  imageDesktop,
  imageMobile,
}) => {
  const graphData = processData(cards);

  return (
    <TTDefaultInner imageMobile={imageMobile} imageDesktop={imageDesktop}>
      <TTWrapper>
        <TTResultsChartContainer>
          <ChartHorizontalBar data={graphData} theme={theme} />
        </TTResultsChartContainer>
        <TTResultsButtonLink
          onClick={linkClick}
          colour={theme.primary}
          hoverBackgroundColour={theme.secondary}
        >
          {linkText}
        </TTResultsButtonLink>
      </TTWrapper>
    </TTDefaultInner>
  );
};
