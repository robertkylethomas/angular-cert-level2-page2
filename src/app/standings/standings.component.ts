import { Component, OnInit } from '@angular/core';
import { Observable, map, mergeAll, of } from 'rxjs';
import { ILeague, IStanding } from 'src/standing.models';
import { StandingsService } from 'src/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private standingsService: StandingsService) {}

  standings: Observable<IStanding[]> = of();

  ngOnInit(): void {
    console.log('This is a test');
    this.standings = this.standingsService
      .getStandings()
      .pipe(map((res) => res.standings[0]));

    // this.standings.subscribe((res) => console.log(res.standings[0]));
  }
}
