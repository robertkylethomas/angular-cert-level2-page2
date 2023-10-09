import { Component, ElementRef, ViewChildren } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }

  changeRoute(leagueId: number){


    this.router.navigate(['league',leagueId])

  }
}
