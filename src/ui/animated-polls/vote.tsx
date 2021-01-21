import * as React from 'react';

import { OptionBar } from './option-bar';
import {
  APVote,
  APVoteImgBkgnd,
  APVoteHeadline,
  APCopy,
  APVoteSubHeadline,
  APIntroLink,
  APIntroHashTag,
  APVoteContent,
  APVoteImgBkgndCover,
  APVoteImgBkgndCoverGradient,
} from './styles';

import { IVoteScreen, ICard } from './types';

interface IProps extends IVoteScreen {
  options: ICard[];
  clickVote: (cardIds: string[]) => void;
}

export const VoteScreen: React.FC<IProps> = ({
  bkgndImgMobile,
  bkgndImgDesktop,
  title,
  introTxt,
  ctaTxt,
  cta,
  ctaLink,
  ctaUrl,
  options,
  theme,
  clickVote,
}) => {
  return (
    <APVote>
      <APVoteImgBkgnd imageMobile={bkgndImgMobile} imageDesktop={bkgndImgDesktop} />
      <APVoteImgBkgndCover />
      <APVoteImgBkgndCoverGradient />
      <APVoteContent>
        <APVoteHeadline>{title}</APVoteHeadline>
        <APCopy textAlign={'left'}>{introTxt}</APCopy>
        {options.map((option, i) => (
          <OptionBar key={i} clickVote={clickVote} {...option} {...theme} />
        ))}
        <APVoteSubHeadline>{ctaTxt}</APVoteSubHeadline>
        <APCopy>
          <APIntroLink href={ctaUrl}>
            {cta} <APIntroHashTag>{ctaLink}</APIntroHashTag>
          </APIntroLink>
        </APCopy>
      </APVoteContent>
    </APVote>
  );
};
