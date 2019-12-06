import React, {Component} from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import './profileOverview.css';

class ProfileOverview extends Component {
  render(){
    return (
      <div className="ProfileOverview">
        <Avatar image={this.props.image} radius=""/>
        <CharacterInformation name="" health="" level="" xp=""/>
      </div>
    );
  }
} export default ProfileOverview;
