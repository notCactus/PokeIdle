export default function pokemonId(state=0, action){ // 0 as placeholder/default ID.
    if (action.type === 'SET_POKEMON_ID') {
        return action.id;

    } else {
        return state;
    }
}
