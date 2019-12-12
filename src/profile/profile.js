import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
import createProfileStore from '../stores/createProfileStore';
import trainerStore from '../stores/trainerStore';
import Popup from '../generalComponents/popup/popup';
import Clickable from '../generalComponents/clickable/clickable';
import './profile.css';

class Profile extends Component{
  constructor(){
    super();
    this.exit = this.exit.bind(this);
    this.showRosterOption = this.showRosterOption.bind(this);
    this.state = {
      image:
      `https://avatars.dicebear.com/v2/gridy/${createProfileStore.getState().username}.svg`,
      popup: false,
    }
  }
  render(){
    return (
      <div className="Profile">
          <ProfileOverview
            name={createProfileStore.getState().username}
            level={trainerStore.getState().lvl}
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
           <div className="PcMover">
             <Clickable text="Move to PC"/>
           </div>)}
        />;
  }
  showRosterOption(e){
    this.setState({
      image: this.state.image,
      popup: true,
    })
  }
  exit(){
    this.setState({
      image: this.state.image,
      popup: false,
    })
  }
} export default Profile;
