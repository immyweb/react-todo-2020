import { ITheme } from '../../types/';

export interface IAnimatedPoll {
  config: {
    theme: ITheme;
    targetClubId: string;
  };
  content: {
    teaserScreen: ITeaserScreen;
    introScreen: IIntroScreen;
    cards: ICard[];
    voteScreen: IVoteScreen;
    resultsScreen: IResultsScreen;
  };
}

export interface ITeaserScreen {
  iconImage: string;
  iconImageAlt: string;
  title: string;
  copy: string;
  cta: string;
  mp4Mobile: string;
  mp4Desktop: string;
}

export interface IIntroScreen {
  imageMobile: string;
  imageDesktop: string;
  title: string;
  introText: string[];
  cta: string;
  ctaLink: string;
  ctaUrl: string;
}

export interface ICard {
  id: string;
  iconImg: string;
  imageMobile: string;
  imageDesktop: string;
  title: string;
  copy: string;
  voteCount?: IVoteCount;
}

export interface IVoteScreen {
  bkgndImgMobile: string;
  bkgndImgDesktop: string;
  title: string;
  introTxt: string;
  ctaTxt: string;
  cta: string;
  ctaLink: string;
  ctaUrl: string;
  theme: ITheme;
}

export interface IResultsScreen {
  bkgndImgMobile: string;
  bkgndImgDesktop: string;
  title: string;
  introTxt: string;
  ctaTxt: string;
  cta: string;
  ctaLink: string;
  ctaUrl: string;
  theme: ITheme;
}

export interface IVoteCount {
  player: string;
  voteCount: number;
  noVoteCount: number;
  votePercentage?: number;
  iconImg?: string;
}
