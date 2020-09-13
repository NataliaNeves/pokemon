export interface IListarPokemon {
  count: number;
  next: string;
  previous: string;
  results: IListarPokemonResultado[];
}

export interface IListarPokemonResultado {
  name: string;
  url: string;
}

export interface IPokemon {
  abilities: IAbilities;
  moves: IMoves;
  name: string;
  order: number;
  sprites: ISprites;
}

interface IAbilities {
  abilities: string;
}

interface IMoves {
  move: string;
}

interface ISprites {
  front_default: string;
  back_default: string;
  front_female: string;
  back_famale: string;
}
