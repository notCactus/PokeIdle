export default function availibleQuests(state = [], action){
  /*
  * Returns quests with index =< to trianer level, and are not
  * found in activeQuests.
  */
  if(action.type === 'SET_AVAILIBLE_QUESTS')
    return action.allQuests.filter(
    (quest, i) =>
        (i <= action.lvl
        &&
        action.activeQuests.findIndex(active => active.name === quest.name) === -1)
    );
  return state;
}
