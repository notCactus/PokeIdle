import UserCreatorPresentation from './userCreatorPresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        starters: state.createProfile.starters,
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
    })
});

const UserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreatorPresentation);

export default UserCreator;
