import { IFixtureResponse, IFixtureRouteParams } from '../models/fixture.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IResponse } from 'src/app/models/standing.models';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
})
export class FixturesComponent implements OnInit {
  allResponses: Observable<IFixtureResponse[]> =
    this.activatedRoute.params.pipe(
      switchMap((routeParams: IFixtureRouteParams) =>
        this.dataService.getFixtures(routeParams.leagueId, routeParams.teamId)
      )
    );
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  goBack() {
    const urlSegment: UrlSegment[] = this.activatedRoute.snapshot.url;
    this.router.navigate([urlSegment[0].path, urlSegment[1].path]);
  }
}
