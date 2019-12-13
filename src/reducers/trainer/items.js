export default function items(state=[], action){
    if (action.type === 'SET_ITEMS') {
        state = action.item;

        return state;

    } else if (action.type === 'ADD_ITEMS'){
        return state.concat(action.item);;

    } else if (action.type === 'REMOVE_ITEMS'){
        // Items are removed based on item ID.
        return state.filter((i) => {
            if(i.id != action.item.id){
                return i;
            }
        });

    } else{
        return state;
    }
}
