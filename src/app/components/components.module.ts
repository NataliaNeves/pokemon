import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';


@NgModule({
  declarations: [
    PokemonDetalhesComponent,
    PokemonListarComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    PokemonDetalhesComponent,
    PokemonListarComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
