import React from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import './profileOverview.css';

function ProfileOverview({
  pokemonId, width, height,
  maxWidth, canClick, image,
  name, health, level, xp,
  maxXp, stamina, maxStamina,
  inRoster, index, clickEvent}){

    return (
      <div className="ProfileOverview" data-pokemon={pokemonId}
        onClick={() => clickEvent !== undefined ? clickEvent() : console.log('no func')}>
        <Avatar
          image={image}
        />
        <CharacterInformation
          name={name}
          health={health}
          level={level}
          xp={xp}
          maxXp={maxXp}
          stamina={stamina}
          maxStamina={maxStamina}
        />
      </div>
    );
} export default ProfileOverview;
