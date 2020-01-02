import React from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import './profileOverview.css';

function ProfileOverview(props){

    return (
      <div className="ProfileOverview" data-pokemon={props.pokemonId}
        draggable={true}
        onClick={() => props.clickEvent !== undefined ? props.clickEvent() : console.log('no func')}
        onDrag={props.dragEvent}
        onDragOver={props.dragOverEvent}
        onDragLeave={props.dragLeaveEvent}
        onDragEnd={props.dragEndEvent}
      >
        <Avatar
          image={props.image}
        />
        <CharacterInformation
          name={props.name}
          health={props.health}
          level={props.level}
          xp={props.xp}
          maxXp={props.maxXp}
          stamina={props.stamina}
          maxStamina={props.maxStamina}
        />
      </div>
    );
} export default ProfileOverview;
