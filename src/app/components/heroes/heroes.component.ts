import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {    
    this.heroes = _heroesService.getHeroes();
  }

  verHeroe(id: number) {
    
  }

}
