import { Heroe, HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    heroe: Heroe = {
        nombre: '',
        bio: '',
        img: '',
        aparicion: '',
        casa: ''
    };

    constructor(private _heroesService: HeroesService,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            this.heroe = _heroesService.getHeroe(params['id']);
        });
    }

    getBrandLogoPath(): string {
        if (this.heroe.casa === 'Marvel') {
            return 'assets/img/marvel.png';
        } else {
            return 'assets/img/dc.png';
        }
    }

}
