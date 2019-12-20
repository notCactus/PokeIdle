import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
import app from '../base';
import './profile.css';

class ProfilePresentation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Profile">
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
