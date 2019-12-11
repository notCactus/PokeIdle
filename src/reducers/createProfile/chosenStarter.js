export default function chosenStarter(state='', action){
    if (action.type === 'SET_STARTER') {
        return action.starter;
    } else {
        return state;
    }
}