import * as React from 'react';

import { ChartHorizontalBar } from './horizontal-bar-chart';
import {
  APVote,
  APVoteImgBkgnd,
  APVoteHeadline,
  APCopy,
  APIntroLink,
  APIntroHashTag,
  APVoteContent,
  APVoteImgBkgndCover,
  APVoteImgBkgndCoverGradient,
  APResultsHeadline,
  APChartHolder,
} from './styles';

import { IResultsScreen, IVoteCount, ICard } from './types';

interface IProps extends IResultsScreen {
  options: ICard[];
}

export const processData = (cards: ICard[]): IVoteCount[] => {
  let totalVoteCount = 0;
  return cards.map(
    ({
      title,
      iconImg,
      voteCount: { voteCount, noVoteCount } = { voteCount: 0, noVoteCount: 0 },
    }) => {
      totalVoteCount += voteCount;
      const datum = {
        iconImg,
        voteCount,
        noVoteCount,
        player: title,
        get votePercentage(): number {
          return totalVoteCount ? Math.round((voteCount / totalVoteCount) * 100) : 0;
        },
      };
      return datum;
    },
  );
};

export const ResultsScreen: React.SFC<IProps> = ({
  bkgndImgMobile,
  bkgndImgDesktop,
  title,
  introTxt,
  options,
  ctaTxt,
  cta,
  ctaLink,
  ctaUrl,
  theme,
}) => {
  const graphData = processData(options);

  return (
    <APVote>
      <APVoteImgBkgnd imageMobile={bkgndImgMobile} imageDesktop={bkgndImgDesktop} />
      <APVoteImgBkgndCover />
      <APVoteImgBkgndCoverGradient />
      <APVoteContent>
        <APVoteHeadline>{title}</APVoteHeadline>
        <APCopy textAlign={'left'}>{introTxt}</APCopy>
        <APChartHolder>
          <ChartHorizontalBar data={graphData} theme={theme} />
        </APChartHolder>
        <APResultsHeadline>{ctaTxt}</APResultsHeadline>
        <APCopy>
          <APIntroLink href={ctaUrl}>
            {cta} <APIntroHashTag>{ctaLink}</APIntroHashTag>
          </APIntroLink>
        </APCopy>
      </APVoteContent>
    </APVote>
  );
};
