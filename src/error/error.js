import React from 'react';
import {Link} from 'react-router-dom';
import './error.css';

function Error({}){
    return (
        <div className="notFound">
            <h1>Welcome to the 404 page!</h1>
            <p>What you requested isn't here, unless you requested this page.</p>
            <Link to="/createProfile">Click here to return to the main page</Link>
            <p>Alternatively, you can stay here and enjoy this spinning Poké Ball.</p>
            <img src="./loading.gif" alt="Or not, because the spinning Poké Ball vanished."/>
        </div>
    );
} export default Error;