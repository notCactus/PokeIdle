import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
import Popup from '../generalComponents/popup/popup';
import Clickable from '../generalComponents/clickable/clickable';
import ConfirmWindow from '../generalComponents/confirmWindow/confirmWindow';
import {getPokemon} from '../api/api';
import './profile.css';

class ProfilePresentation extends Component{
  constructor(props){
    super(props);
    this.showPopup = this.findPO.bind(this);
    this.exit = this.exit.bind(this);
    this.showRosterOption = this.showRosterOption.bind(this);
    this.state = {
      image:
      `https://avatars.dicebear.com/v2/gridy/${this.props.username}.svg`,
      popup: false,
    }
  }
  render(){
    return (
      <div className="Profile">
          <ProfileOverview
            name={this.props.username}
            level={this.props.lvl}
            xp={this.props.xp}
            maxXp={this.props.maxXp}
            image={this.state.image}
          />
        <RosterView clickEvent={this.showRosterOption}/>
          {this.popup()}
      </div>
    );
  }
  popup(){
    if(this.state.popup)
      return <Popup
         title="What would you like to do?"
         exitFunction={this.exit}
         view={(
           <ConfirmWindow toConfirm={`Would you like to move ${this.state.clickedPokemon.name} to your PC?`}/>
         )}/>;
  }
  showRosterOption(e){
    const po = this.findPO(e.target)
    if(po !== false)
      getPokemon(po.dataset.pokemon)
      .then(pokemon =>
      this.setState({
          image: this.state.image,
          popup: true,
          clickedPokemon: pokemon,
        })
      )
  }
  exit(){
    this.setState({
      image: this.state.image,
      popup: false,
    })
  }

  // TODO: move this func to seperate document
  findPO(element){
    while(![...element.classList].includes('menuItem') && element !== null){
      if([...element.classList].includes('ProfileOverview'))
        return element;
      element= element.parentElement
    } return false;
  }
} export default ProfilePresentation;
