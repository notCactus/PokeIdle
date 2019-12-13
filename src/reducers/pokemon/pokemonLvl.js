export default function pokemonLvl(state=1, action){
    if (action.type === 'SET_POKEMON_LVL') {
        return action.lvl;
    } else if (action.type === 'ADD_POKEMON_LVL'){
        return state + action.lvl;

    } else if (action.type === 'REMOVE_POKEMON_LVL'){
        const lvlsTORemove = state - action.lvl;
        if(lvlsTORemove < 1){
            return 1;
        }
        return lvlsTORemove;

    } else {
        return state;
    }
}
