import RosterViewPresentation from './rosterViewPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        roster: state.trainer.roster,
        pcRoster: state.trainer.pcRoster,
        loadedData: state.session.loadedData,
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
const RosterView = connect(mapStateToProps/*, mapDispatchToProps*/)(RosterViewPresentation);
export default RosterView;
