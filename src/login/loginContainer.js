import React, {useCallback} from 'react';
import {withRouter, Redirect} from 'react-router';
import app from '../base';
import LinkButton from "../generalComponents/linkButton/linkButton";

import './login.css';

const LoginContainer = ({setUsername, setCurrency, setItems, setLvl, setPc, setRoster, setStamina}) => {
    return (
        <React.Fragment>
            <Login setUsername={setUsername}
                    setCurrency={setCurrency}
                    setItems={setItems}
                    setLvl={setLvl}
                    setPc={setPc}
                    setRoster={setRoster}
                    setStamina={setStamina}/>
        </React.Fragment>
    );
};

// Might remove some stuff here.
const Login = ({setUsername, setCurrency, setItems, setLvl, setPc, setRoster, setStamina}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email , password} = event.target.elements;
            try {
                let loggedInUser = await app
                        .auth()
                        .signInWithEmailAndPassword(email.value, password.value);

                // For testing
                console.log(loggedInUser);

                // Set username
                setUsername(loggedInUser.user.displayName);

                let trainerDocRef = app.firestore().collection("trainer").doc(loggedInUser.user.uid);

                trainerDocRef.get()
                .then((doc) => {
                   if(doc.exists) {
                        /* let td = doc.data();

                        let rosterModified = td.pcRoster.map((p) => {
                            p['requiredXp'] = (lvl) => Math.pow(10,lvl);
                            p['maxHp'] = (lvl) => lvl*4;
                        });

                        // For testing
                        console.log(doc.data());

                        setCurrency(td.currency);
                        setItems(td.items);
                        setLvl(td.lvl);
                        setPc(td.pcRoster);
                        setRoster(td.roster);
                        setStamina(td.stamina);*/

                    }else {
                        console.log("The document doesn't exists.");
                    }
                })
                .catch(console.err);

            } catch (error) {
                alert(error);
            }

        },
    );

    return (
        <div className="login">
            <p>Currently no redirect, go to /profile after logging in.</p>
            <form onSubmit={handleLogin}>
                <label>
                    <b>Email</b>
                </label>
                <input name="email" type="email" placeholder="Email"/>
                <label>
                    <b>Password</b>
                </label>
                <input name="password" type="password" placeholder="Password"/>
                <button type="submit">Login</button>
                <p>OR</p>
                <LinkButton text="Sign Up" linkTo="/createProfile"/>
            </form>
        </div>
    );
}

export default LoginContainer;
