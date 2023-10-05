import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private activatedRoute: ActivatedRoute){
    console.log('these are home route params ')
    this.activatedRoute.params.subscribe(res => console.log(res))

  }
}
