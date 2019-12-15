import ProfilePresentation from './profilePresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        lvl: state.trainer.lvl,
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
