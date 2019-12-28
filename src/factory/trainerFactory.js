import {createPokemonSaveFile} from './pokemonFactory';

export default function createTrainerSaveFile(trainer){
  let temp = {...trainer};
  temp.roster = trainer.roster.map(createPokemonSaveFile);
  temp.pcRoster = trainer.pcRoster.map(createPokemonSaveFile);
  return temp;
}
