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
        <Bar current="" max="" color="green" width="90%" height="15px"/>
        <Bar
          current={this.props.xo}
          max={this.props.xp}
          color="blue" 
          width="80%"
          height="10px"/>
      </div>
    );
  }
} export default CharacterInformation;
