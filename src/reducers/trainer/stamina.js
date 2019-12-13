export default function stamina(state=0, action){
    if (action.type === 'SET_STAMINA') {
        return action.stamina;
    } else if (action.type === 'ADD_STAMINA'){
        return state + action.stamina;
    } else if (action.type === 'REMOVE_STAMINA'){
        const staminaCalc = state - action.stamina;
        if(staminaCalc < 0) // Returns the state if more stamina than available is used.
            return state;
        return staminaCalc;
    } else {
        return state;
    }
}
