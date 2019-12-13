export default function starterPokemon(state=[], action){
    if (action.type === 'SET_STARTERS') {
        return action.starters;
    } else {
        return state;
    }
}
