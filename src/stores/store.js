import { createStore } from 'redux';

import {pokemon} from '../reducers/pokemon/pokemonStore';
import {trainer} from '../reducers/trainer/trainerStore';
import createProfile from '../reducers/createProfile/createProfileStore';

function reducer(state = {}, action) {
    return {
        pokemon: pokemon(state.pokemon, action),
        trainer: trainer(state.trainer, action),
        createProfile: createProfile(state.createProfile, action),
    };
}

const store = createStore(reducer);
export default store;
