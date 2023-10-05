import { IFixtureResponse, IFixtureRouteParams } from './../../fixture.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/data.service';
import { IResponse } from 'src/standing.models';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  allResponses: Observable<IFixtureResponse[]> = of([]);
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

     this.allResponses = this.activatedRoute.params.pipe(
      switchMap((routeParams: IFixtureRouteParams) => this.dataService.getFixtures(routeParams.tournamentId, routeParams.teamId))
    )

  }



}
