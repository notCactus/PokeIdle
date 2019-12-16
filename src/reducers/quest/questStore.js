import selectedQuest from './selectedQuest';
import activeQuests from './activeQuests';

export const quest = (state = {}, action) => {
  return {
      selectedQuest: selectedQuest(state.selectedQuest, action),
      activeQuests: activeQuests(state.activeQuests, action),
  };
}
