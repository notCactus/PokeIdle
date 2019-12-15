export default function pcRoster(state=[], action){
    if (action.type === 'SET_PC') {
        return action.pokemon;
    } else if (action.type === 'ADD_TO_PC'){
        return state.concat(action.pokemon);
    } else if (action.type === 'REMOVE_FROM_PC'){
        return state.filter((p) => p.id !== action.pokemon.id);
    } else {
        return state;
    }
}
