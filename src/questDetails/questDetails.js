import QuestDetailsPresentation from './questDetailsPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        roster: state.trainer.roster,
        quest: state.quest.selectedQuest,
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendPokemonToQuest: (roster, questName) => dispatch ({
        type: 'SEND_POKEMON_TO_QUEST',
        ids: [...roster],
        quest: questName,
    }),
    addActiveQuest: (name) => dispatch ({
      type: 'ADD_ACTIVE_QUEST',
      quest: name,
    }),
});
const QuestDetails = connect(mapStateToProps, mapDispatchToProps)(QuestDetailsPresentation);
export default QuestDetails;
