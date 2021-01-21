export interface ICard {
  id: string;
  imageMobile: string;
  imageDesktop: string;
  imageThumb: string;
  viewed?: boolean;
  fName: string;
  sName: string;
  idx?: number;
  voteCount?: IVoteCount;
}

export interface IResults {
  headline: string;
  subHeadline: string;
  linkText: string;
  linkUrl: string;
}

export interface IVoteCount {
  player: string;
  voteCount: number;
  noVoteCount: number;
  votePercentage?: number;
  imageThumb?: string;
}

export interface IIntroScreen {
  imageMobile: string;
  imageDesktop: string;
  playButtonText: string;
}

export interface IVoteScreen {
  cards: ICard[];
  headline: string;
  subHeadline: string;
  bottomCopy: string;
  imageMobile: string;
  imageDesktop: string;
}

export interface IResultsScreen {
  cards: ICard[];
  headline: string;
  subHeadline: string;
  linkText: string;
  linkUrl: string;
  imageMobile: string;
  imageDesktop: string;
  linkClick: () => void;
}
