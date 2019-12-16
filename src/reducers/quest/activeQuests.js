export default function activeQuests(state = [], action){
  if(action.type === 'SET_ACTIVE_QUESTS')
    return action.quests;
  else if(action.type === "ADD_ACTIVE_QUEST")
    return state.concat(action.quest);
  else if(action.type === 'REMOVE_ACTIVE_QUEST')
    return state.filter(quest => quest !== action.quest);
  else return state;
}
