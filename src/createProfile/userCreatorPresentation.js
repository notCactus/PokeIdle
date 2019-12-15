import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import app from '../base';

const CreateProfilePresentation=({username, onUsernameChange, starters, onStarterClick})=>(
    <React.Fragment>
        <ProfileImageAndUsername username={username}
                                onUsernameChange={onUsernameChange}/>
        <ProfileStarters starters={starters}
        onStarterClick={onStarterClick}/>
    </React.Fragment>
);

// Variable for debouncing
let debounce;

// Displays the profile and the username
const ProfileImageAndUsername=({username, onUsernameChange}) => {
    return (
    <div className="pImgAndUsername">
        <img src={`https://avatars.dicebear.com/v2/gridy/${username}.svg`} alt="profile"/>
        <input type="text" placeholder="Enter your username..." onInput={(e) => {

            let newName = e.target.value;

            clearTimeout(debounce);
            debounce = setTimeout(() => onUsernameChange(newName), 300)

        }}/>
        <SignUpWithRouter/>
    </div>
)};

// Handles sign up.
const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/firebaseTest"); // Pushes the state "/firebaseTest" to history. (change this later)
        } catch (error) {
            alert(error);
        }
    }, [history]);

    // Change this for how the render should look
    return (
        <div className="signUp">
            <form onSubmit={handleSignUp}>
                <label>
                    Email:
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

// So that withRouter is used.
const SignUpWithRouter = withRouter(SignUp);

// Displays the starter pokemons.
const ProfileStarters=({starters, onStarterClick}) => (
    <div className="profileStarters">
        {
        (starters.length > 0) ? starters.map((pokemon) => {
            return (<img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name} onClick={
                (e) => {
                    onStarterClick(e.target.alt);
                    e.currentTarget.classList.add("img-Selected");

                    for(let i = 0; i < e.currentTarget.parentNode.children.length; i++){
                        let child = e.currentTarget.parentNode.children[i];
                        if(e.currentTarget.alt !== child.alt){
                            child.classList.remove("img-Selected");
                        }
                    }
                }
            }/>);
        }) : <img key="loading" src="./loading.gif" alt="loading pokemon..."/>
        }
    </div>
);

export default CreateProfilePresentation;
