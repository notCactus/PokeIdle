import React from "react";

const CreateProfilePresentation=({username, onUsernameChange, starters})=>(
    <React.Fragment>
        <ProfileImageAndUsername username={username}
                                onUsernameChange={onUsernameChange}/>
        <ProfileStarters starters={starters}/>
    </React.Fragment>
);

// Displays the profile and the username
const ProfileImageAndUsername=({username, onUsernameChange}) => (
    <div className="pImgAndUsername">
        <img src={`https://avatars.dicebear.com/v2/gridy/${username}.svg`} alt="profile"/>
        <input type="text" placeholder="Enter your username..." onInput={(e) => { onUsernameChange(e.target.value); }}/>
    </div>
);

// Displays the starter pokemons.
const ProfileStarters=({starters}) => (
    <div className="profileStarters">
        {
        starters.map((pokemon) => {
            return (<img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name} />);
        })
        }
    </div>
);

export default CreateProfilePresentation;