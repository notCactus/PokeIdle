import React from 'react';
import app from '../../base';

const SignOutButton = () => {
    return(
        <button onClick={() => {
            app.auth().signOut()
            alert("You have signed out.")
            }}>Sign out</button>
    );
};

export default SignOutButton;