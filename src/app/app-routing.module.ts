import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ListarPokemonResolveService } from './services/resolvers/listar-pokemons.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    resolve: {
      pokemons: ListarPokemonResolveService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
