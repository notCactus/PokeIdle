import QuestDetailsPresentation from './questDetailsPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        roster: state.trainer.roster,
        quest: state.quest.selectedQuest,
    }
}

/*const mapDispatchToProps = (dispatch) => ({
    onUsernameChange: (newName) => dispatch ({
        type: 'SET_USERNAME',
        username: newName,
    }),
    onStarterClick: (starter) => dispatch ({
        type: 'SET_STARTER',
        starter: starter,
    })
});*/
const QuestDetails = connect(mapStateToProps/*, mapDispatchToProps*/)(QuestDetailsPresentation);
export default QuestDetails;
