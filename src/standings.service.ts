import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ILeague, IPayload, IResponse } from './standing.models';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  getStandings(): Observable<ILeague> {
    return this.http
      .get<IPayload>('./assets/json/standings.json')
      .pipe(map((payload: IPayload) => payload.response[0].league));
  }
}
