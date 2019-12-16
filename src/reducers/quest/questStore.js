import availibleQuests from './availibleQuests'
import selectedQuest from './selectedQuest';
import activeQuests from './activeQuests';
import allQuests from './allQuests';


export const quest = (state = {}, action) => {
  return {
    allQuests: allQuests(state.allQuests, action),
    activeQuests: activeQuests(state.activeQuests, action),
    selectedQuest: selectedQuest(state.selectedQuest, action),
    availibleQuests: availibleQuests(state.availibleQuests, {
      type: action.type,
      allQuests: state.allQuests,
      activeQuests: state.activeQuests,
      lvl: action.lvl,
    }),
  };
}
