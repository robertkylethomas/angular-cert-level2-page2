import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, mergeAll, of, switchMap, tap } from 'rxjs';
import { ILeague, IStanding } from 'src/app/models/standing.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  standings: Observable<IStanding[]> = this.activatedRoute.params.pipe(
    map((params) => params['leagueId']),
    switchMap((leagueId: number) => this.dataService.getStandings(leagueId)),
    map((league: ILeague) => league.standings[0])
  );

  ngOnInit(): void {}

  openFixtures(teamId: number) {

    console.log(this.activatedRoute.snapshot.params)

    this.router.navigate([
      'league',
      this.activatedRoute.snapshot.params['leagueId'],
      'fixtures',
      teamId,
    ]);
  }
}
