export default function pokemonXp(state=0, action){
    if (action.type === 'SET_POKEMON_XP') {
        state = action.xp;

        return state;

    } else if (action.type === 'ADD_POKEMON_XP'){
        state += action.xp;

        return state;

    } else {
        return state;
    }
}