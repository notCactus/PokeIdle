import React, {useCallback} from 'react';
import {withRouter, Redirect} from 'react-router';
import app from '../base';

import './login.css';

const LoginPresentation = () => {
    return (
        <React.Fragment>
            <LoginWithRouter/>
        </React.Fragment>
    );
};

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email , password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/profile");
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    let currentUser = app.auth().currentUser;

    // Redirects once the user has logged in.
    if(currentUser) {
        return <Redirect to="/profile"/>;
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

const LoginWithRouter = withRouter(Login);

export default LoginPresentation;