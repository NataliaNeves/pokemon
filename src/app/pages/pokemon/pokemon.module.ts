import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: []
})
export class ListarPokemonModule { }
