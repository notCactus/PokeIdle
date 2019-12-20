import UserCreatorPresentation from './userCreatorPresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        starters: state.createProfile.starters,
        chosenStarter: state.createProfile.chosenStarter,
        trainer: state.trainer,
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
    signInSession: () => dispatch ({
      type: 'SET_SIGN_IN',
      signedIn: true,
    }),
});

const UserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreatorPresentation);

export default UserCreator;
