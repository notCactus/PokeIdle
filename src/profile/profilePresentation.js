import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import PokeOptions from '../generalComponents/pokeOptions/pokeOptions';
import RosterView from '../rosterView/rosterView';
import Popup from '../generalComponents/popup/popup';/*
import {getPokemon} from '../api/api';
import PokeOptions from '../generalComponents/pokeOptions/pokeOptions';*/
import './profile.css';

class ProfilePresentation extends Component{
  constructor(props){
    super(props);
    this.popup = this.popup.bind(this);
    this.activatePopup = this.activatePopup.bind(this);
    this.state = {
      image:
      `https://avatars.dicebear.com/v2/gridy/${this.props.username}.svg`,
      popup: false,
      popupIndex: 0,
      mainView: true,
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
        <RosterView clickEvent={this.activatePopup}/>
          {this.popup()}
        />
      </div>
    );
  }
  popup(){
    if (this.state.popup)
      return <Popup
         title="What would you like to do?"
         exitFunction={() => this.setState({popup: false,})}
         view={
           <PokeOptions
             confirmFunction ={() => this.setState({popup: false,})}
             roster={this.state.mainView}
             index={this.state.popupIndex}
            />
         }
        />;
  }
  activatePopup(index, inRoster){
    this.setState({popupIndex: index, popup: true, mainView: inRoster,});
  }
} export default ProfilePresentation;
