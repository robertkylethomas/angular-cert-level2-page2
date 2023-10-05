export interface IFixturePayload{

    get:        string;
    parameters: IParameters;
    errors:     any[];
    results:    number;
    paging:     IPaging;
    response:   IFixtureResponse[];

}

export interface IPaging {
  current: number;
  total:   number;
}

export interface IParameters {
  team:   string;
  season: string;
  league: string;
  last:   string;
}

export interface IFixtureResponse {
    fixture: IFixture;
    league:  IFixtureLeague;
    teams:   IGoals;
    goals:   IGoals;
    score:   IScore;
}

export interface IFixture {
    id:        number;
    referee:   string;
    timezone:  string;
    date:      Date;
    timestamp: number;
    periods:   IPeriods;
    venue:     IVenue;
    status:    IStatus;
}

export interface IPeriods {
    first:  number;
    second: number;
}

export interface IStatus {
    long:    string;
    short:   string;
    elapsed: number;
}

export interface IVenue {
    id:   number;
    name: string;
    city: string;
}

export interface IGoals {
    home: ITeams;
    away: ITeams;
}

export interface ITeams {
    id:     number;
    name:   string;
    logo:   string;
    winner: boolean | null;
}

export interface IFixtureLeague {
    id:      number;
    name:    string;
    country: string;
    logo:    string;
    flag:    string;
    season:  number;
    round:   string;
}

export interface IScore {
    halftime:  IGoals;
    fulltime:  IGoals;
    extratime: IGoals;
    penalty:   IGoals;
}

export interface IFixtureRouteParams{
  leagueId: number;
  teamId: number;
}
