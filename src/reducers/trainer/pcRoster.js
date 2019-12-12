export default function pcRoster(state=[], action){
    if (action.type === 'SET_PC') {
        state = action.pokemon;

        return state;

    } else if (action.type === 'ADD_TO_PC'){
            state.push(action.pokemon);

        return state;

    } else if (action.type === 'REMOVE_FROM_PC'){
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