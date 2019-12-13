export default function currency(state=1, action){
    if (action.type === 'SET_CURRENCY') {
        return action.currency;

    } else if (action.type === 'ADD_CURRENCY'){
        return state + action.currency;

    } else if (action.type === 'REMOVE_CURRENCY'){
        const currencyCalc = state - action.currency;
        if(currencyCalc < 0) { // Returns the state if more currency than available is used.
            return state;
        }
        return currencyCalc;

    } else {
        return state;
    }
}
