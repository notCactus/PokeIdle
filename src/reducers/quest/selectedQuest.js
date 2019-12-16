const base = {
  description: "error",
  difficulty: "error",
  time: 666,
  rosterCapacity: 4,
}

export default function selectedQuest(state = base, action){
  if(action.type === 'SET_SELECTED_QUEST')
    return action.quest;
  else return state;
}
