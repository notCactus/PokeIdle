export default function pokemonLvl(state=1, action){
    if (action.type === 'SET_POKEMON_LVL') {
        state = action.lvl;

        return state;

    } else if (action.type === 'ADD_POKEMON_LVL'){
        state += action.lvl;

        return state;

    } else if (action.type === 'REMOVE_POKEMON_LVL'){
        let lvlsTORemove = state - action.lvl;

        if(lvlsTORemove < 1){
            return 1;
        }

        return lvlsTORemove;

    } else {
        return state;
    }
}