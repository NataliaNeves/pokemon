import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IListarPokemon, IPokemon } from '../interfaces/listar-pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarPokemonGetAllService {

  url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPokemon[]> {
    return new Observable<IPokemon[]>(
      (obs) => {
        this.http.get<IListarPokemon>(this.url).pipe(
          map((pokemons) => {
            this.url = pokemons.next;
            return pokemons.results.map(
              (pokemon) => this.getById(pokemon.url)
            );
          })
        ).subscribe(
          (observablesPokemon) => {
            const pokemons: IPokemon[] = [];
            merge(...observablesPokemon).subscribe(
              (pokemon) => { pokemons.push(pokemon); },
              () => { },
              () => {
                obs.next(pokemons);
                obs.complete();
              }
            );
          });
      });
  }

  getById(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  hasNext(): boolean {
    return this.url ? true : false;
  }
}
