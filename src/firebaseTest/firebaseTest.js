import React, { Component } from "react";
import app from '../base';
import SignUp from './signUp'
import Login from './login';

class FirebaseTest extends Component {
    render(){
        return(
            <div className="firebaseTest">
                <div className="signOut">
                    <h1>FIREBASE TEST PAGE</h1>
                    <button onClick={() => app.auth().signOut()}>Sign out</button>
                </div>
                <SignUp/>
                <Login/>
            </div>
        )
    }
}

export default FirebaseTest;