import PrivateRoutePresentation from './privateRoutePresentation';
import CreateProfile from './createProfile/createProfile';
import { connect } from 'react-redux';
import React from 'react';


const mapStateToProps = (state) => {
    return {
        signedIn: state.session.signedIn,
    }
}

const PrivateRoute = connect(mapStateToProps)(PrivateRoutePresentation);
export default PrivateRoute;
