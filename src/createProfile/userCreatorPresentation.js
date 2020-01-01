import React, {useState} from 'react';
import './userCreator.css';
import app from '../base';

const UserCreatorPresentation=(
  {addToRoster, username, onUsernameChange,
    starters, onStarterClick,
    chosenStarter,trainer,
    signInSession, startReg,
    finishReg,
    })=>(
    <div className="userCreator">
        <b>Create Your Profile</b>
        <ProfileImageAndUsername username={username}
                                onUsernameChange={onUsernameChange}
                                chosenStarter={chosenStarter}
                                addToRoster={addToRoster}
                                starters={starters}
                                onStarterClick={onStarterClick}
                                trainer={trainer}
                                signInSession={signInSession}
                                startReg={startReg}
                                finishReg={finishReg}
                                />
    </div>
);

// Variable for debouncing
let debounce;

// Displays the profile and the username
const ProfileImageAndUsername=({addToRoster, onStarterClick,
   starters, username,
   onUsernameChange, chosenStarter,
   trainer, signInSession,
   startReg, finishReg
    }) => {
    return (
    <div className="pImgAndUsername">
        <img src={`https://avatars.dicebear.com/v2/gridy/${username}.svg`} alt="profile"/>
        <input type="text" placeholder="Enter your username..." onInput={(e) => {

            let newName = e.target.value;

            clearTimeout(debounce);
            debounce = setTimeout(() => onUsernameChange(newName), 300);
        }}/>
        <SignUp chosenStarter={chosenStarter}
                starters={starters}
                username={username}
                onStarterClick={onStarterClick}
                addToRoster={addToRoster}
                trainer={trainer}
                signInSession={signInSession}
                startReg={startReg}
                finishReg={finishReg}
                />
    </div>
)};

// Handles sign up.
const SignUp = ({addToRoster, username, chosenStarter, starters, onStarterClick, trainer, signInSession, signedIn,startReg,finishReg}) => {
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
                startReg();
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                    .then((r) => {
                        // The username/display name is set.
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

                        // Add a new trainer to the database.
                        app.firestore().collection('trainer').doc(result.user.uid).set(
                          trainer
                        )
                        .then(r => {
                          signInSession();
                        });
                    }).catch((err) => {
                        finishReg();
                        console.error(err);
                        alert(err.message);
                    });
            } catch (error) {
                finishReg();
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
                <div className="starterText"><b>Choose your starter</b></div>
                <ProfileStarters starters={starters}
                onStarterClick={onStarterClick}
                chosenStarter={chosenStarter}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

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

export default UserCreatorPresentation;
