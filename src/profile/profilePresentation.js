import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';/*
import {getPokemon} from '../api/api';
import PokeOptions from '../generalComponents/pokeOptions/pokeOptions';*/
import loadData from '../loadData';
import app from '../base';
import  { Redirect } from 'react-router-dom';
import './profile.css';

class ProfilePresentation extends Component{
  constructor(props){
    super(props);
    loadData(this.props);
  }


  renderRedirect () {
    let currentUser = app.auth().currentUser;

    if(currentUser){
    } else {
      return(<Redirect to="/login"/>);
    }
  }

  render(){
    return (
      <div className="Profile">
          {this.renderRedirect()}
          <ProfileOverview
            name={this.props.username}
            level={this.props.lvl}
            xp={this.props.trainerXp}
            maxXp={this.props.trainerMaxXp}
            image={`https://avatars.dicebear.com/v2/gridy/${this.props.username}.svg`}
            stamina={this.props.trainerStamina}
            maxStamina={this.props.trainerMaxStamina}
          />
        <RosterView/>
      </div>
    );
  }

} export default ProfilePresentation;
