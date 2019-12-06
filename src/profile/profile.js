import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import Sidebar from '../sidebar/sidebar'
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
          <Sidebar/>
          <ProfileOverview image={this.state.image}/>
      </div>
    );
  }
} export default Profile;
