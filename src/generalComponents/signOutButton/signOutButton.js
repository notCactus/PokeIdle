import React from 'react';
import app from '../../base';
/*
function signOutButton() {
    return(
        <button onClick={() => app.auth().signOut()}>Sign out</button>
    );
}*/

const SignOutButton = () => {
    return(
        <button onClick={() => app.auth().signOut()}>Sign out</button>
    );
};

export default SignOutButton;