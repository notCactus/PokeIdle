import QuestDetailsPresentation from './questDetailsPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        trainerStamina: state.trainer.stamina,
        roster: state.trainer.roster,
        quest: state.quest.selectedQuest,
        trainerMaxStamina: state.trainer.maxStamina,
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
