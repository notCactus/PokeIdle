import UserCreatorPresentation from './userCreatorPresentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.username,
        starters: state.starters,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onUsernameChange: (newName) => dispatch ({
        type: 'SET_USERNAME',
        username: newName,
    })
});

const UserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreatorPresentation);

export default UserCreator;