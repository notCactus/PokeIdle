export default function items(state=[], action){
    if (action.type === 'SET_ITEMS') {
        state = action.item;

        return state;

    } else if (action.type === 'ADD_ITEMS'){
        action.item.amount = Number(action.item.amount);
        const itemToAdd = state.findIndex(item => item.id === action.item.id);
        if (itemToAdd >= 0){
            state[itemToAdd].amount += Number(action.item.amount);
        } else {
            state.push(action.item);
        }
        return state;

    } else if (action.type === 'REMOVE_ITEMS'){
        // Items are removed based on item ID.
        action.item.amount = Number(action.item.amount);
        const itemToRemove = state.findIndex(item => item.id === action.item.id);
        if (itemToRemove >= 0 && state[itemToRemove].amount >= action.item.amount){
            if (state[itemToRemove].amount === action.item.amount){
                return state.filter(item => item.id !== action.item.id);
            } else {
                state[itemToRemove].amount -= action.item.amount;
            }
        } else {
            action.error = 'UNDERFLOW';
        }
        return state;
    } else{
        return state;
    }
}
