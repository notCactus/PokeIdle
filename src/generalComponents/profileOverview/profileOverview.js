import React, {Component} from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import './profileOverview.css';
function style({width, height, maxWidth, borderBend}) {
  return {
    width: width,
    maxWidth: maxWidth,
    height: height,
  }
}
class ProfileOverview extends Component {
  render(){
    return (
      <div className="ProfileOverview" style={style(this.props)}>
        <Avatar
          image={this.props.image}
        />
        <CharacterInformation
          name={this.props.name}
          health={this.props.health}
          level={this.props.level}
          xp={this.props.xp}
        />
      </div>
    );
  }
} export default ProfileOverview;
