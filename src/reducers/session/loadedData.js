export default function loadedData(state = false, action){
  if(action.type === 'SET_DATA_LOADED'){
    return action.loaded;
  } else if(action.type === 'SET_SIGN_IN' && !action.signedIn){
    return false;
  }
  return state;
}
