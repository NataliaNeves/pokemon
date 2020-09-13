import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/listar-pokemon.interface';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.css']
})
export class PokemonDetalhesComponent implements OnInit {

  detalhesPokemon: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

  abrir(pokemon: IPokemon): void {
    this.detalhesPokemon = pokemon;
  }

}
