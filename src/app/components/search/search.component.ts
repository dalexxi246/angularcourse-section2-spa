import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Heroe, HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino = "";

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

}
