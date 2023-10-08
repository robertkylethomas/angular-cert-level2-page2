import { Component, Input } from '@angular/core';
import { IFixtureResponse } from '../models/fixture.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
})
export class FixtureComponent {
  @Input('fixture') fixture: IFixtureResponse = undefined;
}
