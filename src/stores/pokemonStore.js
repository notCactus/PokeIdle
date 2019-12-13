import { createStore } from 'redux';

import pokemonHp from '../reducers/pokemon/pokemonHp';
import pokemonId from '../reducers/pokemon/pokemonId';
import pokemonLvl from '../reducers/pokemon/pokemonLvl';
import pokemonQuestId from '../reducers/pokemon/pokemonQuestId';
import pokemonXp from '../reducers/pokemon/pokemonXp';

function reducer(state = {}, action) {
    return {
        pokemonHp: pokemonHp(state.pokemonHp, action),
        pokemonId: pokemonId(state.pokemonId, action),
        pokemonLvl: pokemonLvl(state.pokemonLvl, action),
        pokemonQuestId: pokemonQuestId(state.pokemonQuestId, action),
        pokemonXp: pokemonXp(state.pokemonXp, action),
    };
}

const pokemonStore = createStore(reducer);

export default pokemonStore;
