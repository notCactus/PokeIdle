import React, { Component } from 'react';
import './avatar.css';

class Avatar extends Component {
  render(){
    return (
      <div className="Avatar">
        <div>
          <img src={this.props.image} alt='avatar'/>
        </div>
      </div>
    );
  }
} export default Avatar;
