export interface IPlayer {
  id: string;
  fname: string;
  sName: string;
  imageMobile: string;
  imageDesktop: string;
  club: string;
  clubBadge: string;
  age: number;
  fee: string;
  position: string;
  voted?: boolean;
  selected?: boolean;
  active?: boolean;
  idx?: number;
  voteCount?: number;
}

export interface IIntro {
  className?: string;
  headline: string;
  subHeadline: string;
  introHeadline: string;
  introCopy: string;
  no: string;
  yes: string;
  playBtn: string;
}

export interface ICard {
  currentClub: string;
  pos: string;
  estFee: string;
  playerAge: string;
}

export interface IResults {
  headline: string;
  subHeadline: string;
  playBtn: string;
  exitUrl: string;
}

export interface IClub {
  id: string;
  name: string;
  badge: string;
  teamColours: string;
}

export enum Vote {
  no = 'NO',
  yes = 'YES',
}

export interface IVoteCount {
  player: string;
  club: string;
  voteCount: number;
  noVoteCount: number;
  votePercent?: number;
}
