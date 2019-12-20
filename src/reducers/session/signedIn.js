export default function signedIn(state=false, action){
  if(action.type === 'SET_SIGN_IN'){
    return action.signedIn;
  }
  return state;
}
