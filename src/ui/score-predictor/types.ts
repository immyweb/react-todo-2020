export enum FixtureResultType {
  Win = 'WIN',
  Lose = 'LOSE',
  Draw = 'DRAW',
  Home = 'HOME',
  Away = 'AWAY',
}

export enum TableType {
  Prem = 'PREM',
  Champ = 'CHAMP',
}

export interface ITeam {
  team: string;
  badge: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  points: number;
}

export interface IFixture {
  team1: string;
  team2: string;
  id: number;
}

export interface ITally {
  team: string;
  points?: number;
  id: number;
  resultType: FixtureResultType;
}
