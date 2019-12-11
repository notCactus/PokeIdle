import React, { Component } from 'react';
import Bar from '../bar/bar';
import './characterInformation.css';

class CharacterInformation extends Component{
  render() {
    return (
      <div className="CharacterInformation">
        <h3>{this.props.name}</h3>
        <Bar current="" max="" color="green" width="90%" height="15px"/>
        <Bar current="" max="" color="blue" width="80%" height="10px"/>
      </div>
    );
  }
} export default CharacterInformation;
