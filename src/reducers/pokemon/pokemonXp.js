export default function pokemonXp(state=0, action){
    if (action.type === 'SET_POKEMON_XP') {
        return action.xp;
    } else if (action.type === 'ADD_POKEMON_XP'){
        return state + action.xp;;
    } else {
        return state;
    }
}
