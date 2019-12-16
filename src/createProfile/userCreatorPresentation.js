import React, {useCallback, useState} from 'react';
import  { Redirect } from 'react-router-dom'
import app from '../base';

const CreateProfilePresentation=({history, username, onUsernameChange, starters, onStarterClick, chosenStarter})=>(
    <React.Fragment>
        <ProfileImageAndUsername username={username}
                                onUsernameChange={onUsernameChange}
                                chosenStarter={chosenStarter}
                                history={history}
                                starters={starters}/>
        <ProfileStarters starters={starters}
        onStarterClick={onStarterClick}
        chosenStarter={chosenStarter}
        />
    </React.Fragment>
);

// Variable for debouncing
let debounce;

// Displays the profile and the username
const ProfileImageAndUsername=({starters, username, onUsernameChange, chosenStarter}) => {
    return (
    <div className="pImgAndUsername">
        <img src={`https://avatars.dicebear.com/v2/gridy/${username}.svg`} alt="profile"/>
        <input type="text" placeholder="Enter your username..." onInput={(e) => {

            let newName = e.target.value;

            clearTimeout(debounce);
            debounce = setTimeout(() => onUsernameChange(newName), 300)

        }}/>
        <SignUp chosenStarter={chosenStarter}
                starters={starters}
                username={username}/>
    </div>
)};

// Handles sign up.
const SignUp = ({username, chosenStarter, starters}) => {
    const [redirectState, setRedirectState] = useState('noRedirect');

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;

        let starterObject = starters.filter((p) => {
            if(p.name === chosenStarter){
                return p;
            }
        })[0];

        // For debugging
        console.log(starterObject);

        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then((result) => {
                    // for debugging
                    console.log("RESULT:");
                    console.log(result);

                    // Add a new trainer to the database.
                    app.firestore().collection('trainer').doc(result.user.uid).set({
                        username: username,
                        uid: result.user.uid,
                        lvl: 1,
                        maxStamina: 20,
                        stamina: 20,
                        xp: 0,
                        currency: 0,
                    });

                    // Adds the starter to the trainer.
                    app.firestore().collection('trainer').doc(result.user.uid).collection("pc").doc(chosenStarter).set({
                        name: chosenStarter,
                        id: starterObject.id,
                        uid: result.user.uid,
                        hp: starterObject.stats[5].base_stat,
                        lvl: 1,
                        questId: '',
                        xp: 0,
                    });

                    //Redirect
                    setRedirectState('redirect');
                }).catch(console.error);
        } catch (error) {
            alert(error);
        }
    });

    if(redirectState === 'redirect'){
        return(<Redirect to="/profile"/>);
    }else {

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
        );
    }
}

// Displays the starter pokemons.
const ProfileStarters=({starters, onStarterClick, chosenStarter}) => (
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
