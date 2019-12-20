export default function items(state=[], action){
    if (action.type === 'SET_ITEMS') {
        state = action.item;

        return state;

    } else if (action.type === 'ADD_ITEMS'){
        const itemToAdd = state.indexOf({id:action.item.id});
        if (itemToAdd >= 0){
            state[itemToAdd].amount += action.item.amount;
        } else {
            state.concat(action.item);
        }
        return state;

    } else if (action.type === 'REMOVE_ITEMS'){
        // Items are removed based on item ID.
        const itemToRemove = state.indexOf({id:action.item.id});
        if (itemToAdd >= 0 && state[itemToAdd].amount >= action.item.amount){
            if (state[itemToAdd].amount === action.item.amount){
                state.filter(item => item.id !== action.item.id);
            } else {
                state[itemToAdd].amount -= action.item.amount;
            }
        } else {
            //Throw error
        }
        return state;

    } else{
        return state;
    }
}
