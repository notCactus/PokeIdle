export default function pcRoster(state=[], action){
    if (action.type === 'SET_PC') {
      return action.pokemon;
    } else if (action.type === 'ADD_TO_PC'){
      action.amount = action.amount === undefined ? 1 : Number(action.amount);
      if (action.amount + state.length <= 50){
        for (let i = 0; i < action.amount; i++)
          state.push(action.pokemon);
      } else {
        action.error = 'OVERFLOW';
      }
      return state;
    } else if (action.type === 'REMOVE_FROM_PC'){
      if (action.index){
        return state.filter((p, i) => i !== action.index);
      } else {
        state.pop();
        return state;
      }
    } else if (action.type === 'PASSIVE_PC_HEALTH_REGEN') {
      return state.map(pokemon => {
        pokemon.hp = Math.min(pokemon.hp + action.hp,
           pokemon.maxHp(pokemon.lvl));
        return pokemon
      })
    } else if (action.type === 'RESTORE_HP_PC') {
      const poke = state[action.index];
      if (poke.hp !== poke.maxHp(poke.lvl)){
        state[action.index].hp = Math.min(poke.hp + action.hp, poke.maxHp(poke.lvl));
      } else {
        action.error = 'HP_FULL';
      }
      return state;
    }
    else {
      return state;
    }
}
