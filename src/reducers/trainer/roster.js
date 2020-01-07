export default function roster(state=[], action){
    if (action.type === 'SET_ROSTER') {
        if(state.length < 7)// Max 6 in roster.
            return action.pokemon;
        return state;

    } else if (action.type === 'ADD_TO_ROSTER'){
        if(state.length < 6){ // Only add if less than 6 in roster.
            return state.concat(action.pokemon);
        } else {
          action.error = 'OVERFLOW'
          return state;
        }
    } else if (action.type === 'REMOVE_FROM_ROSTER'){
      if (state[action.index].questId){
        action.error = 'QUEST';
        return state;
      } else if (state.length > 1){
        return state.filter((p, i) => i !== action.index);
      } else {
        action.error = 'UNDERFLOW';
        return state;
      }
    } else if(action.type === "SEND_POKEMON_TO_QUEST"){
      return state.map((pokemon, i) =>{
        if(action.ids.includes(i))
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
      action.allFainted = true;
      return state.map(pokemon =>{
        if(pokemon.questId === action.quest && pokemon.hp > 0){
          action.allFainted = false;
          return addXpAndLevel(pokemon, action.xp);
        }
        return pokemon;
      });
      /*action.allFainted = true;
      return
      state.filter(pokemon => pokemon.questId !== action.quest)
      .concat(
        state.filter(pokemon => pokemon.questId === action.quest)
        .map(pokemon => {
          if(pokemon.hp > 0){
            action.allFainted = false;
            return addXpAndLevel(pokemon, action.xp);
          }
          return pokemon;
        })
      );*/
    }else if (action.type === 'ADD_XP_TO_ROSTER') {
      return state.map(pokemon => {
        if (pokemon.hp > 0)
          return addXpAndLevel(pokemon, action.xp);
        else return pokemon;
      }
      );
    }else if (action.type === 'DAMAGE_POKEMON_FROM_QUEST') {
      return state.map((pokemon) => {
        if(pokemon.questId === action.quest)
          pokemon.hp = Math.max(0,pokemon.hp - action.dmg.pop());
        return pokemon;
      })
    }else if (action.type === 'RESTORE_HP_ROSTER') {
      const poke = state[action.index];
      if (poke.hp !== poke.maxHp(poke.lvl)){
        state[action.index].hp = Math.min(poke.hp + action.hp, poke.maxHp(poke.lvl));
      } else {
        action.error = 'HP_FULL';
      }
      return state;
    }else if (action.type === 'SWAP_IN_MAIN_ROSTER') {
      const t = state[action.a];
      state[action.a] = state[action.b];
      state[action.b] = t;
      return state;
    }else{
        return state;
    }
}

const addXpAndLevel = (pokemon, xp) => {
  pokemon.xp += xp;
  if(pokemon.xp >= pokemon.requiredXp(pokemon.lvl)){
    pokemon.lvl += 1;
    pokemon.hp += pokemon.maxHp(pokemon.lvl) - pokemon.maxHp(pokemon.lvl - 1);
    if (pokemon.hp > pokemon.maxHp(pokemon.lvl)) pokemon.hp = pokemon.maxHp(pokemon.lvl);
  }
  return pokemon;
}
