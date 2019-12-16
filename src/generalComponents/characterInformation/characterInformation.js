import React, { Component } from 'react';
import Bar from '../bar/bar';
import './characterInformation.css';

class CharacterInformation extends Component{
  render() {
    return (
      <div className="CharacterInformation">
        <div>
          <h3>{this.props.name}</h3>
          <h3>Lv. {this.props.level}</h3>
        </div>
        <Bar
          current={this.props.stamina}
          max={this.props.maxStamina} 
          color="green"
          width="90%"
          height="15px"
        />
        <Bar
          current={this.props.xp}
          max={this.props.maxXp}
          color="blue"
          width="80%"
          height="10px"/>
      </div>
    );
  }
} export default CharacterInformation;
