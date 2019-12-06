import React, { Component } from 'react';
import './avatar.css';

function style({width, maxWidth, height}) {
  return {
    width: width,
    height: height,
    maxWidth: maxWidth,
  };
}

class Avatar extends Component {
  render(){
    return (
      <div className="Avatar" style={style(this.props)}>
        <div>
          <img src={this.props.image} alt='avatar'/>
        </div>
      </div>
    );
  }
} export default Avatar;
