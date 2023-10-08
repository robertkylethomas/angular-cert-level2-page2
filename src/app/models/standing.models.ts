export interface IPayload {
  get: string;

  results: number;

  response: IResponse[];
}

export interface IResponse {
  league: ILeague;
}

export interface ILeague {
  id: number;
  name: Name;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<IStanding[]>;
}

export enum Name {
  PremierLeague = 'Premier League',
}

export interface IStanding {
  rank: number;
  team: ITeam;
  points: number;
  goalsDiff: number;
  group: Name;
  form: string;
  status: Status;
  description: null | string;
  all: IAll;
  home: IAll;
  away: IAll;
  update: Date;
}

export interface IAll {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: IGoals;
}

export interface IGoals {
  for: number;
  against: number;
}

export enum Status {
  Same = 'same',
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

