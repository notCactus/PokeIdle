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
    })
});

const UserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreatorPresentation);

export default UserCreator;
