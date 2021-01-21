import { ITheme } from '../../types';

export enum FixtureResultType {
  Win = 'WIN',
  Lose = 'LOSE',
  Draw = 'DRAW',
}

export interface ITeam {
  team: string;
  badge: string;
}

export interface IFixture {
  date: string;
  games: IGame[];
}

export interface IGame {
  team1: string;
  team2: string;
  id: number;
  startPrediction: IStartPrediction;
}

export interface IStartPrediction {
  team1: number;
  team2: number;
}

export interface ITeamData {
  team: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: number;
  conceded: number;
  points: number;
  goalDiff: number;
  badge?: string;
}

export interface ITally {
  team: string;
  points?: number;
  id: number;
  resultType: FixtureResultType;
  goals: number;
  conceded: number;
}

export interface IIntro {
  title: string;
  subTitle: string;
  copy: string;
  cta: string;
  ctaResults: string;
  predictions: ITeamData[];
}

export interface IScorePredictor2019 {
  id?: string;
  config: {
    theme: ITheme;
  };
  content: {
    intro: IIntro;
    fixtures: IFixture[];
    teams: ITeam[];
    teamData: ITeamData[];
    finalTable: {
      title: string;
    };
  };
}
