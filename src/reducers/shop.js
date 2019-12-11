import { createStore } from 'redux';

function reducer(state = {}, action){
    return {
        amounts: amounts(state.amounts, action)
    };
}

const shopStore = createStore(reducer);

function amounts(state = [], action){
    if (action.type === 'SET_AMOUNT'){
        state[action.index] = action.amount;
        return state;
    }
    else
        return state;
}

export function getAmount(index){
    debugger;
    return shopStore.getState().amounts[index];
}

export function setAmount(index, amount){
    shopStore.dispatch({type:'SET_AMOUNT', index: index, amount: amount});
}

export default {getAmount, setAmount};