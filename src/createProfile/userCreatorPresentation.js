import React from "react";

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
const ProfileImageAndUsername=({username, onUsernameChange}) => (
    <div className="pImgAndUsername">
        <img src={`https://avatars.dicebear.com/v2/gridy/${username}.svg`} alt="profile"/>
        <input type="text" placeholder="Enter your username..." onInput={(e) => {
            
            let newName = e.target.value;

            clearTimeout(debounce);
            debounce = setTimeout(() => onUsernameChange(newName), 300)
            
            }}/>
    </div>
);

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