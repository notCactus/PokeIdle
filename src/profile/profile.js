import ProfilePresentation from './profilePresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        lvl: state.trainer.lvl,
        starter: state.createProfile.chosenStarter,
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
