export default function currency(state=1, action){
    if (action.type === 'SET_CURRENCY') {
        state = action.currency;

        return state;

    } else if (action.type === 'ADD_CURRENCY'){
        state += action.currency;

        return state;

    } else if (action.type === 'REMOVE_CURRENCY'){
        let currencyCalc = state -= action.currency;

        if(currencyCalc < 0) { // Returns the state if more currency than available is used.
            return state;
        }

        return currencyCalc;

    } else {
        return state;
    }
}