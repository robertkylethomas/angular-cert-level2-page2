import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, mergeAll, of, switchMap, tap } from 'rxjs';
import { ILeague, IStanding } from 'src/standing.models';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {}

  standings: Observable<IStanding[]> = of();

  ngOnInit(): void {
    console.log('This is a test');

  //  this.standings = this.activatedRoute.params.pipe(
  //     switchMap((params: {leagueId: number}) => this.dataService.getStandings(params.leagueId)),
  //     map((league: ILeague) => league.standings[0])
  //   )

  this.standings = this.activatedRoute.params.pipe(
    map((params) => params['leagueId']),
    switchMap((leagueId: number) => this.dataService.getStandings(leagueId)),
    map((league: ILeague) => league.standings[0])
  )



  }

  openFixtures(tournamentId: number , teamId: number){
    this.router.navigate(['tournament',tournamentId, teamId])
  }

}
