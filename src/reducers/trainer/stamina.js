export default function stamina(state=11, action){
    if (action.type === 'SET_STAMINA') {
        return action.stamina;
    } else if (action.type === 'ADD_STAMINA'){
        return Math.min(action.maxStamina(action.lvl), state + action.stamina);
    } else if (action.type === 'REMOVE_STAMINA'){
        const staminaCalc = state - action.stamina;
        if(staminaCalc < 0) // Returns the state if more stamina than available is used.
            return state;
        return staminaCalc;
    }else if (action.type === "ADD_LVL") {
      //debugger;
      const max = action.maxStamina(action.lvl + 1);
      const diff = max - action.maxStamina(action.lvl);
      if(state + diff < max)
        return state+diff;
      return max;
    } else {
        return state;
    }
}
