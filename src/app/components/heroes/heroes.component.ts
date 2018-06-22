import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    console.log(this._heroesService.getHeroes());
  }

}
