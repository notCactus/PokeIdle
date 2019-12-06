import React, { Component } from 'react';
import Bar from '../bar/bar';
import './characterInformation.css';

class CharacterInformation extends Component{
  render() {
    return (
      <div className="CharacterInformation">
        <h3>{this.props.name}</h3>
        <Bar current="" max="" width="200px" height="15px"/>
        <Bar current="" max="" width="" height=""/>
      </div>
    );
  }
} export default CharacterInformation;
