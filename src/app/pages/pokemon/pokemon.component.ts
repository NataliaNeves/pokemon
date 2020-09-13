import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../../interfaces/listar-pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent {

  pokemons: IPokemon[];

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.pokemons = this.activatedRoute.snapshot.data.pokemons;
  }

}
