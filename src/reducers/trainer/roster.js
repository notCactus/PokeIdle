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
        return state.filter((p, i) => i !== action.index);
    } else if(action.type === "SEND_POKEMON_TO_QUEST"){
      return state.map((pokemon, i) =>{
        if(action.ids.includes(i+""))
          pokemon.questId = action.quest;
        return pokemon;
      });
    } else if (action.type === 'RETURN_POKEMON_FROM_QUEST') {
      return state.map(pokemon =>{
        if(pokemon.questId === action.quest)
          pokemon.questId = "";
        return pokemon;
      });
    } else if (action.type === 'ADD_XP_TO_ROSTER_FROM_QUEST') {
      return state.map(pokemon =>{
        if(pokemon.questId === action.quest)
          return addXpAndLevel(pokemon, action.xp);
        return pokemon;
      });
    }else if (action.type === 'ADD_XP_TO_ROSTER') {
      return state.map(pokemon => addXpAndLevel(pokemon, action.xp));
    }else{
        return state;
    }
}

const addXpAndLevel = (pokemon, xp) => {
  pokemon.xp += xp;
  if(pokemon.xp >= pokemon.requiredXp(pokemon.lvl))
    pokemon.lvl += 1;
  return pokemon;
}
