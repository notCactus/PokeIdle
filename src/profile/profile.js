import ProfilePresentation from './profilePresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        lvl: state.trainer.lvl,
        roster: state.trainer.roster,
        pcRoster: state.trainer.pcRoster,
        trainerStamina: state.trainer.stamina,
        trainerMaxStamina: state.trainer.maxStamina,
        trainerXp: state.trainer.xp,
        trainerMaxXp: state.trainer.maxXp,
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
const Profile = connect(mapStateToProps/*, mapDispatchToProps*/)(ProfilePresentation);
export default Profile;
