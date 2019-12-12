export default function stamina(state=0, action){
    if (action.type === 'SET_STAMINA') {
        state = action.stamina;

        return state;

    } else if (action.type === 'ADD_STAMINA'){
        state += action.stamina;

        return state;

    } else if (action.type === 'REMOVE_STAMINA'){
        let staminaCalc = state - action.stamina;

        if(staminaCalc < 0) { // Returns the state if more stamina than available is used.
            return state;
        }

        return staminaCalc;

    } else {
        return state;
    }
}