import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILeague } from 'src/standing.models';
import { StandingsService } from 'src/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private standingsService: StandingsService) {}

  standings: Observable<ILeague> = of();

  ngOnInit(): void {
    console.log('This is a test');
    this.standings = this.standingsService.getStandings();
  }
}
