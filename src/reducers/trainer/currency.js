export default function currency(state=0, action){
    if (action.type === 'SET_CURRENCY') {
        return action.currency;

    } else if (action.type === 'ADD_CURRENCY'){
        return state + Number(action.currency);

    } else if (action.type === 'REMOVE_CURRENCY'){
        action.currency = Number(action.currency);
        const currencyCalc = state - action.currency;
        if(currencyCalc < 0) { // Returns the state if more currency than available is used.
            action.error = 'UNDERFLOW';
            return state;
        }
        return currencyCalc;

    } else {
        return state;
    }
}
