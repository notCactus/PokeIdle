export default function pokemonHp(state=0, action){
    if (action.type === 'SET_POKEMON_HP') {
        state = action.hp;

        return state;

    } else if (action.type === 'ADD_POKEMON_HP'){
        state += action.hp;

        return state;

    } else if (action.type === 'REMOVE_POKEMON_LVL'){
        let hpCalc = state - action.hp;

        if(hpCalc < 0){
            return 0;
        }

        return hpCalc;

    } else {
        return state;
    }
}