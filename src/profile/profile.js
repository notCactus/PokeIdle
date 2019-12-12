import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
import './profile.css';
import createProfileStore from '../stores/createProfileStore';

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      image:
      `https://avatars.dicebear.com/v2/gridy/${createProfileStore.getState().username}.svg`,
    }
  }
  render(){
    return (
      <div className="Profile">
          <ProfileOverview
            image={this.state.image}
          />
          <RosterView/>
      </div>
    );
  }

} export default Profile;
