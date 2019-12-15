export default function chosenStarter(state='default', action){
    if (action.type === 'SET_STARTER') {
        return action.starter;
    } else {
        return state;
    }
}
