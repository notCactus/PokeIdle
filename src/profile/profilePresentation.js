import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
/*import Popup from '../generalComponents/popup/popup';
import {getPokemon} from '../api/api';
import PokeOptions from '../generalComponents/pokeOptions/pokeOptions';*/
import './profile.css';

class ProfilePresentation extends Component{
  constructor(props){
    super(props);
    /*this.showPopup = this.findPO.bind(this);
    this.exit = this.exit.bind(this);
    this.showRosterOption = this.showRosterOption.bind(this);*/
    this.state = {
      image:
      `https://avatars.dicebear.com/v2/gridy/${this.props.username}.svg`,
      /*popup: false,*/
    }
  }
  render(){
    return (
      <div className="Profile">
          <ProfileOverview
            name={this.props.username}
            level={this.props.lvl}
            xp={this.props.trainerXp}
            maxXp={this.props.trainerMaxXp}
            image={this.state.image}
            stamina={this.props.trainerStamina}
            maxStamina={this.props.trainerMaxStamina}
          />
        <RosterView /*clickEvent={this.showRosterOption}/>
          {this.popup()}*/
      /></div>
    );
  }
/*
  // TODO: move this func to seperate document
  findPO(element){
    while(![...element.classList].includes('menuItem') && element !== null){
      if([...element.classList].includes('ProfileOverview'))
        return element;
      element= element.parentElement
    } return false;
  }*/
} export default ProfilePresentation;
