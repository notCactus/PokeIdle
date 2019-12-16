export default function selectedQuest(state, action){
  if(action.type === 'SET_SELECTED_QUEST')
    return action.quest;
  else return state;
}
