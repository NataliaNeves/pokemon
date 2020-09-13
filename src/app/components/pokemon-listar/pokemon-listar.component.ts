import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { IPokemon } from '../../interfaces/listar-pokemon.interface';
import { ListarPokemonGetAllService } from '../../services/listar-pokemon.service';
import { PokemonDetalhesComponent } from '../pokemon-detalhes/pokemon-detalhes.component';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  @ViewChild('detalhes', { static: true }) detalhesComponent: PokemonDetalhesComponent;

  @Input() pokemons: IPokemon[];

  get hasNext(): boolean {
    return this.service.hasNext();
  }

  favoritos: Array<number> = [];

  constructor(
    private service: ListarPokemonGetAllService,
    private local: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.atualizaFavoritos();
  }

  estaFavorito(id: number): boolean {
    return this.favoritos.some(favorito => favorito === id);
  }

  carregarMais(): void {
    this.service.getAll().subscribe(
      (pokemons) => this.pokemons.push(...pokemons)
    );
  }

  favoritar(pokemon: IPokemon): void {
    this.atualizaFavoritos();
    this.favoritos.push(pokemon.order);
    this.local.set('favoritos', this.favoritos, null, 's');
  }

  desFavoritar(pokemon: IPokemon): void {
    this.atualizaFavoritos();
    const index = this.favoritos.indexOf(pokemon.order);
    if (index > -1) {
      this.favoritos.splice(index, 1);
      this.local.set('favoritos', this.favoritos, null, 's');
    }
  }

  atualizaFavoritos(): void {
    const favoritos = this.local.get('favoritos');
    this.favoritos = favoritos ? favoritos : [];
  }

  abrirDetalhes(pokemon: IPokemon): void {
    this.detalhesComponent.abrir(pokemon);
  }

}
