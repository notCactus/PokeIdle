import React, { Component } from 'react';
import Bar from '../bar/bar';
import './characterInformation.css';

class CharacterInformation extends Component{
  render() {
    return (
      <div className="CharacterInformation">
        <h3>{this.props.name}</h3>
        <Bar current="" max="" width="100" height="20"/>
        <Bar current="" max="" width="" height=""/>
      </div>
    );
  }
} export default CharacterInformation;
