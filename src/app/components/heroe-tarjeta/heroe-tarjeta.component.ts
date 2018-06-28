import { Heroe } from './../../services/heroes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<Heroe>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.heroe);
  }
}
