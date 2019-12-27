import QuestPresentation from './questPresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        lvl: state.trainer.lvl,
        availibleQuests: state.quest.availibleQuests,
        activeQuests: state.quest.activeQuests,
        allQuests: state.quest.allQuests,
        roster: state.trainer.roster,
        loadedData: state.session.loadedData,
    }
}

const mapDispatchToProps = (dispatch) => ({
  setAllQuests: (quests) => dispatch ({
      type: 'SET_ALL_QUESTS',
      quests: quests,
  }),
    setSelectedQuest: (quest) => dispatch ({
        type: 'SET_SELECTED_QUEST',
        quest: quest,
    }),
    setAvailibleQuests: (lvl) => dispatch({
      type: 'SET_AVAILIBLE_QUESTS',
      lvl: lvl,
    }),
});
const Quest = connect(mapStateToProps, mapDispatchToProps)(QuestPresentation);
export default Quest;
