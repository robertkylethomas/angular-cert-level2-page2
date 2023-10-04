import { Component, OnInit } from '@angular/core';
import { StandingsService } from 'src/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    console.log('This is a test');
    this.standingsService.getStandings();
  }
}
