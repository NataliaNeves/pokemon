import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarPokemonGetAllService } from './../listar-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class ListarPokemonResolveService {

  constructor(private getAllService: ListarPokemonGetAllService) { }

  resolve(): Observable<any> {
    return this.getAllService.getAll();
  }
}
