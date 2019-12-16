export default function roster(state=[], action){
    if (action.type === 'SET_ROSTER') {
        if(state.length < 7)// Max 6 in roster.
            return action.pokemon;
        return state;

    } else if (action.type === 'ADD_TO_ROSTER'){
        if(state.length < 6){ // Only add if less than 6 in roster.
            return state.concat(action.pokemon);
        }
        return state;
    } else if (action.type === 'REMOVE_FROM_ROSTER'){
        return state.filter((p) => p.id !== action.pokemon.id);
    } else if(action.type === "SEND_POKEMON_TO_QUEST"){
      return state.map(pokemon =>{
        if(action.ids.includes(pokemon.id))
          pokemon.questId = action.quest;
        return pokemon;
      })
    } else{
        return state;
    }
}
