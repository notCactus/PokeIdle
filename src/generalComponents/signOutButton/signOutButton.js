import SignOutButtonPresentation from './signOutButtonPresentation';
import app from'./../../base';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
      app.auth().signOut()
      dispatch ({
        type: 'SET_SIGN_IN',
        signIn: false,
      })
    }
});

const SignOutButton = connect(mapStateToProps, mapDispatchToProps)(SignOutButtonPresentation);
export default SignOutButton;
