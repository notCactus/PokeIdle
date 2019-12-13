import chosenStarter from './chosenStarter';
import starterPokemon from './starterPokemon';
import username from './username';

export default function createProfile(state = {}, action){
    return {
        username: username(state.username, action),
        starters: starterPokemon(state.starters, action),
        chosenStarter: chosenStarter(state.starter, action),
    };
}
