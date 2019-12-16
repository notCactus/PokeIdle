export default function allQuests(state = [], action){
  if(action.type === 'SET_ALL_QUESTS')
    return [...action.quests];
  else return state;
}
