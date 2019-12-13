import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import app from '../base';
import {AuthContext} from './Auth';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email , password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/firebaseTest"); // This should be changed to something else in production.
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const {currentUser} = useContext(AuthContext);

    // Redirects once the user has logged in.
    if(currentUser) {
        return <Redirect to="/firebaseTest"/>
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email: 
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password: 
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default withRouter(Login);