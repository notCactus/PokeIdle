import pokemonHp from './pokemonHp';
import pokemonId from './pokemonId';
import pokemonLvl from './pokemonLvl';
import pokemonQuestId from './pokemonQuestId';
import pokemonXp from './pokemonXp';

export const pokemon = (state = {}, action) => {
    return {
        pokemonHp: pokemonHp(state.pokemonHp, action),
        pokemonId: pokemonId(state.pokemonId, action),
        pokemonLvl: pokemonLvl(state.pokemonLvl, action),
        pokemonQuestId: pokemonQuestId(state.pokemonQuestId, action),
        pokemonXp: pokemonXp(state.pokemonXp, action),
    };
}
