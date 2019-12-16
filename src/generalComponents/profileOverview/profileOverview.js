import React, {Component, useState} from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import Popup from '../popup/popup';
import PokeOptions from '../pokeOptions/pokeOptions';
import './profileOverview.css';
function style({width, height, maxWidth, borderBend}) {
  return {
    width: width,
    maxWidth: maxWidth,
    height: height,
  }
}
/*class ProfileOverview extends Component {
  constructor(props){
    super(props);
    this.state = {
      popup: false
    }
  }*/
function ProfileOverview({pokemonId, width, height, maxWidth, canClick, image, name, health, level, xp, maxXp, stamina, maxStamina, inRoster, index}){

  const [popup, setPopup] = useState();

  const popupElem = () =>{
    if(popup)
      return <Popup
         title="What would you like to do?"
         exitFunction={() => setPopup()}
         view={
           <PokeOptions roster={inRoster} index={index}/>
         }
        />;
  };
    return (
      <div className="ProfileOverview" data-pokemon={pokemonId} style={style({width: width, height: height, maxWidth: maxWidth})}
        onClick={canClick ? e => {if(e.target.id !== 'closePopup') setPopup(true)} : undefined}>
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
        {popupElem()}
      </div>
    );
} export default ProfileOverview;
