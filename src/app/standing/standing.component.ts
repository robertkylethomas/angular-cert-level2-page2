
import { IStanding } from './../../standing.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent {

  @Input('standing') standing: IStanding;
}
