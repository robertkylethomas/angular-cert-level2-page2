import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, mergeAll, of } from 'rxjs';
import { ILeague, IStanding } from 'src/standing.models';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  standings: Observable<IStanding[]> = of();

  ngOnInit(): void {
    console.log('This is a test');
    this.standings = this.dataService
      .getStandings()
      .pipe(map((res) => res.standings[0]));


  }

  openFixtures(tournamentId: number , teamId: number){
    this.router.navigate(['tournament',tournamentId, teamId])
  }

}
