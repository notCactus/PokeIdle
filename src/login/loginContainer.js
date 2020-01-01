import React, {useState} from 'react';
import app from '../base';
import LinkButton from "../generalComponents/linkButton/linkButton";
import  { Redirect } from 'react-router-dom'
import Loading from '../generalComponents/loading/loading';
import './login.css';

const LoginContainer = ({signedIn}) => {
    const [api, setAPI] = useState("start");

   let handleLogin = async (event) => {
            event.preventDefault();

            const {email , password} = event.target.elements;
            
            let loggedInUser = await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .then((r) => {setAPI("loading")})
                    .catch((err) => {console.error(err); alert(err)});
    };

    if(signedIn){
        return(<Redirect to="/profile"/>);
    } else if (api === "loading") {
        return (<Loading image="./loading.gif" text="Creating your account..."/>);
    } else {
        return (
            <div className="login">
                <div className="loginContainer">
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
            </div>
        );
    }
}

export default LoginContainer;
