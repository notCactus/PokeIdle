export default function username(state='', action){
    if (action.type === 'SET_USERNAME') {
        return action.username;
    } else {
        return state;
    }
}