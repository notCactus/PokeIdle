import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterView from '../rosterView/rosterView';
import './profile.css';

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      image: "./loading.gif",
    }
  }
  render(){
    return (
      <div className="Profile">
          <ProfileOverview
            width="60%"
            maxWidth="555px"
            height="15%"
            image={this.state.image}
          />
          <RosterView/>
      </div>
    );
  }
} export default Profile;
