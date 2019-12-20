import React, {useState} from 'react';
import  { Redirect } from 'react-router-dom'
import app from '../base';

const CreateProfilePresentation=({addToRoster, username, onUsernameChange, starters, onStarterClick, chosenStarter,trainer})=>(
    <React.Fragment>
        <ProfileImageAndUsername username={username}
                                onUsernameChange={onUsernameChange}
                                chosenStarter={chosenStarter}
                                addToRoster={addToRoster}
                                starters={starters}
                                onStarterClick={onStarterClick}
                                trainer={trainer}
                                />
    </React.Fragment>
);

// Variable for debouncing
let debounce;

// Displays the profile and the username
const ProfileImageAndUsername=({addToRoster, onStarterClick, starters, username, onUsernameChange, chosenStarter, trainer}) => {
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
                username={username}
                onStarterClick={onStarterClick}
                addToRoster={addToRoster}
                trainer={trainer}
                />
    </div>
)};

// Handles sign up.
const SignUp = ({addToRoster, username, chosenStarter, starters, onStarterClick, trainer}) => {
    const [redirectState, setRedirectState] = useState('noRedirect');
    const handleSignUp = (async (event) => {
        event.preventDefault();

        if(chosenStarter !== 'default' && username !== ''){
            const {email, password} = event.target.elements;

            let starterObject = starters.filter((p) => {
                if(p.name === chosenStarter){
                    return p;
                }
            })[0];

            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                    .then((r) => {
                      console.log(r);
                        r.user.updateProfile({
                            displayName: username,
                        });
                        return r;

                    })
                    .then((result) => {

                        // Add to redux store.
                        trainer.roster.push({
                            id: starterObject.name,
                            hp: starterObject.stats[5].base_stat,
                            lvl: 1,
                            questId: '',
                            xp: 0,
                        });
                        console.log('databased trainer: ')
                        console.log(trainer);
                        // Add a new trainer to the database.
                        app.firestore().collection('trainer').doc(result.user.uid).set(
                          trainer
                        );

                        //Redirect
                        setRedirectState('redirect');
                    }).catch((err) => {
                        console.error(err);
                        alert(err.message);
                    });
            } catch (error) {
                alert(error);
            }
        } else if (chosenStarter === 'default' && username === ''){
            alert("Please choose a starter pokemon and a username.");
        } else if (username === ''){
            alert("Please choose a username.");
        }else if(chosenStarter === 'default'){
            alert("Please choose a starter pokemon.");
        } else {
            alert("Something went wrong, contact an admin.");
        }
    });

    if(redirectState === 'redirect'){
        return(<Redirect to="/profile"/>);
    }else {
        return (
            <div className="signUp">
                <form onSubmit={handleSignUp}>
                    <label>
                        <b>Email</b>
                    </label>
                    <input name="email" type="email" placeholder="Email"/>
                    <label>
                        <b>Password</b>
                    </label>
                    <input name="password" type="password" placeholder="Password"/>
                    <ProfileStarters starters={starters}
                    onStarterClick={onStarterClick}
                    chosenStarter={chosenStarter}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

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
