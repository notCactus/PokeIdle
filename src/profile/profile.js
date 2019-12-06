import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import Sidebar from '../sidebar/sidebar'
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
          <ProfileOverview image={this.state.image}/>
          <RosterView rosterView={this.props.rosterView}/>
      </div>
    );
  }
} export default Profile;
