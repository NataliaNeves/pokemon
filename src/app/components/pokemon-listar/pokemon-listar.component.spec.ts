import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListarComponent } from './pokemon-listar.component';

describe('PokemonListarComponent', () => {
  let component: PokemonListarComponent;
  let fixture: ComponentFixture<PokemonListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
