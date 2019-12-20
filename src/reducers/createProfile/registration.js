export default function registration(state='', action){
    if (action.type === 'SET_REGISTRATION') {
        return action.stage;
    } else if (action.type === 'START_REGISTRATION') {
      return 'started';
    } else if (action.type === 'FINISH_REGISTRATION') {
      return 'done';
    }else {
        return state;
    }
}
