import { createStore } from 'redux';

import username from '../reducers/createProfile/username';
import starterPokemon from '../reducers/createProfile/starterPokemon';
import chosenStarter from '../reducers/createProfile/chosenStarter';

function reducer(state = {}, action) {
    return {
        username: username(state.username, action),
        starters: starterPokemon(state.starters, action),
        chosenStarter: chosenStarter(state.starter, action),
    };
}


const createProfileStore = createStore(reducer);

export default createProfileStore;
