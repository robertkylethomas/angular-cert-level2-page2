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

  // getStandings(leagueId: number): Observable<ILeague> {
  //   return this.http
  //     .get<IPayload>(
  //       `https://v3.football.api-sports.io/standings?league=${leagueId}&season=2023`
  //     )
  //     .pipe(map((payload: IPayload) => payload.response[0].league));
  // }
  getStandings(leagueId: number): Observable<ILeague> {
    return this.http
      .get<IPayload>(
        `./assets/json/standings.json`
      )
      .pipe(map((payload: IPayload) => payload.response[0].league));
  }

  // getFixtures(
  //   leagueId: number,
  //   teamId: number
  // ): Observable<IFixtureResponse[]> {
  //   return this.http
  //     .get(
  //       `https://v3.football.api-sports.io/fixtures?team=${teamId}&season=2023&league=${leagueId}&last=10`
  //     )

  //     .pipe(
  //       map((fixtureResponse: IFixturePayload) => fixtureResponse.response)
  //     );
  // }
  getFixtures(
    leagueId: number,
    teamId: number
  ): Observable<IFixtureResponse[]> {
    return this.http
      .get(
        `./assets/json/fixtures.json`
      )

      .pipe(
        map((fixtureResponse: IFixturePayload) => fixtureResponse.response)
      );
  }
}
