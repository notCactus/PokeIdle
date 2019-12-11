export default function username(state=[], action){
    if (action.type === 'SET_STARTERS') {
        return action.starters;
    } else {
        return state;
    }
}