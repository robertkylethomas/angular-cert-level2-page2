import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import {
  IGoals,
  ILeague,
  IPayload,
  IResponse,
  ITeam,
} from '../models/standing.models';
import { IFixturePayload, IFixtureResponse } from '../models/fixture.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStandings(leagueId: number): Observable<any> {
    const prod: string = `https://v3.football.api-sports.io/standings?league=${leagueId}&season=2023`;
    const dev: string = '../../assets/json/standings.json';
    return this.http.get<IPayload>(dev).pipe(
      delay(2300),
      map((payload: IPayload) => payload.response[0].league)
    );
  }

  getFixtures(
    leagueId: number,
    teamId: number
  ): Observable<IFixtureResponse[]> {
    const prod: string = `https://v3.football.api-sports.io/fixtures?team=${teamId}&season=2023&league=${leagueId}&last=10`;
    const dev: string = '../../assets/json/fixtures.json';
    return this.http
      .get(dev)

      .pipe(
        delay(2300),
        map((fixtureResponse: IFixturePayload) => fixtureResponse.response)
      );
  }
}
