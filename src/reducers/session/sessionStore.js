import signedIn from './signedIn';
import loadedData from './loadedData';

export default function session(state = {}, action){
  return {
    signedIn: signedIn(state.signedIn, action),
    loadedData: loadedData(state.loadedData, action),
  };
}
