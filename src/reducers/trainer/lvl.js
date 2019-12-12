export default function lvl(state=1, action){
    if (action.type === 'SET_LVL') {
        state = action.lvl;

        return state;

    } else if (action.type === 'ADD_LVL'){
        state += action.lvl;

        return state;

    } else if (action.type === 'REMOVE_LVL'){
        let lvlsTORemove = state - action.lvl;

        if(lvlsTORemove < 1){
            return 1;
        }

        return lvlsTORemove;

    } else {
        return state;
    }
}