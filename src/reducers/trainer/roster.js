export default function roster(state=[], action){
    if (action.type === 'SET_ROSTER') {
        if(state.length < 7){ // Max 6 in roster.
            state = action.pokemon;
        }

        return state;

    } else if (action.type === 'ADD_TO_ROSTER'){
        if(state.length < 6){ // Only add if less than 6 in roster.
            state.push(action.pokemon);
        }

        return state;

    } else if (action.type === 'REMOVE_FROM_ROSTER'){
        state = state.filter((p) => {
            if(p.id != action.pokemon.id){
                return p;
            }
        });

        return state;

    } else{
        return state;
    }
}