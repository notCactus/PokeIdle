export default function pcRoster(state=[], action){
    if (action.type === 'SET_PC') {
      return action.pokemon;
    } else if (action.type === 'ADD_TO_PC'){
      return state.concat(action.pokemon);
    } else if (action.type === 'REMOVE_FROM_PC'){
      return state.filter((p, i) => i !== action.index);
    } else if (action.type === 'PASSIVE_PC_HEALTH_REGEN') {
      return state.map(pokemon => {
        pokemon.hp = Math.min(pokemon.hp + action.hp,
           pokemon.maxHp(pokemon.lvl));
        return pokemon
      })
    }else {
      return state;
    }
}
