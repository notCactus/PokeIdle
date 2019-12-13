export default function xp(state=0, action){
    if (action.type === 'SET_XP') {
        return action.xp;

    } else if (action.type === 'ADD_XP'){
        return state + action.xp;

    } else {
        return state;
    }
}
