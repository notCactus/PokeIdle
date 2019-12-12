export default function xp(state=0, action){
    if (action.type === 'SET_XP') {
        state = action.xp;

        return state;

    } else if (action.type === 'ADD_XP'){
        state += action.xp;

        return state;

    } else {
        return state;
    }
}