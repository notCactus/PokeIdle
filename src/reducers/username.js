export default function username(state='Pokemon', action){
    if (action.type === 'SET_USERNAME') {
        return action.username;
    } else {
        return state;
    }
}