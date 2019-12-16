import QuestPresentation from './questPresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        lvl: state.trainer.lvl,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSelectedQuest: (quest) => dispatch ({
        type: 'SET_SELECTED_QUEST',
        quest: quest,
    }),
});
const Quest = connect(mapStateToProps, mapDispatchToProps)(QuestPresentation);
export default Quest;
