export default function loadedData(state = false, action){
  if(action.type === 'SET_DATA_LOADED')
    return action.loaded;
  return state;
}
