import CreateProfileContainer from './createProfileContainer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        starters: state.createProfile.starters,
        chosenStarter: state.createProfile.chosenStarter,
        signedIn: state.session.signedIn,
        registration: state.createProfile.registration,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onUsernameChange: (newName) => dispatch ({
        type: 'SET_USERNAME',
        username: newName,
    }),
    onStarterClick: (starter) => dispatch ({
        type: 'SET_STARTER',
        starter: starter,
    }),
    addToRoster: (member) => dispatch ({
      type: 'ADD_TO_ROSTER',
      pokemon: member,
    }),
    setStarters: (starters) => dispatch ({
        type: 'SET_STARTERS',
        starters: starters,
    }),
    resetTrainer: () => dispatch ({
        type: 'RESET_TRAINER',
    }),
});

const CreateProfile = connect(mapStateToProps, mapDispatchToProps)(CreateProfileContainer);

export default CreateProfile;
