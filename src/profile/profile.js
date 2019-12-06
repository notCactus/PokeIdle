import React, {Component} from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';


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
      </div>
    );
  }
} export default Profile;
