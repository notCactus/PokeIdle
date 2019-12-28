import React from 'react';
import './error.css';
import SignOutButton from '../generalComponents/signOutButton/signOutButton';

function Error({}){
    return (
        <div className="notFound">
            <h1>Welcome to the 404 page!</h1>
            <p>What you requested isn't here, unless you requested this page.</p>
            <p>Click the button below to return to the login page</p>
            <SignOutButton text="Return to Login"/>
            <p>Alternatively, you can stay here and enjoy this spinning Poké Ball.</p>
            <img src="./loading.gif" alt="Or not, because the spinning Poké Ball vanished."/>
        </div>
    );
} export default Error;