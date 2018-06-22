import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  private router = Router;

  constructor(private _heroesService: HeroesService) {
    this.heroes = _heroesService.getHeroes();
  }

  ngOnInit() {

  }

  verHeroe(id: number) {
    
  }

}
