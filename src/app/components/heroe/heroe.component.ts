import { Heroe, HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  route: ActivatedRoute;
  
  heroe: any = {};

  constructor(private _heroeService: HeroesService) { 
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroe = this._heroeService.getHeroe(id);
    console.log(this.heroe);
  }

}
