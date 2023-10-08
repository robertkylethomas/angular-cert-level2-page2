import { IFixtureResponse, IFixtureRouteParams } from './../../fixture.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/data.service';
import { IResponse } from 'src/standing.models';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
})
export class FixturesComponent implements OnInit {
  allResponses: Observable<IFixtureResponse[]> = of([]);
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allResponses = this.activatedRoute.params.pipe(
      switchMap((routeParams: IFixtureRouteParams) =>
        this.dataService.getFixtures(routeParams.leagueId, routeParams.teamId)
      )
    );
  }

  goBack() {
    const thing: UrlSegment[] = this.activatedRoute.snapshot.url;

    console.log(thing[0], thing[1]);

    this.router.navigate([thing[0].path, thing[1].path]);
  }
}
