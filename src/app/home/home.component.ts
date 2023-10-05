import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    console.log('these are home route params ')
    this.activatedRoute.params.subscribe(res => console.log(res))

  }

  changeRoute(leagueId: number){
    this.router.navigate(['tournament',leagueId])
  }
}
