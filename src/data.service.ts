import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IGoals, ILeague, IPayload, IResponse, ITeam } from './standing.models';
import { IFixturePayload, IFixtureResponse } from './fixture.model';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStandings(leagueId:number): Observable<any> {
    console.log('this is the league id', leagueId)
    return this.http
      .get<IPayload>(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=2023`)
      .pipe(map((payload: IPayload) => payload.response[0].league));
  }

  getFixtures(tournamentId: number, teamId: number):Observable<IFixtureResponse[]>{
    console.log('return fixtures', tournamentId, teamId)
    return this.http
      .get<IFixtureResponse>('./assets/json/fixtures.json')
      .pipe(
        map<any, any>((fixtureResponse:IFixturePayload) => fixtureResponse.response ),
        tap(res => console.log('fixture 1 response', res))
       )
  }
}
