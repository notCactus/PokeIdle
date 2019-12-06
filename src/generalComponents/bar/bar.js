import React, { Component } from 'react';
import './bar.css';

function barVisuals({width, height}) {
  return {
    width: width,
    height: height,
    border: '1px solid red',
  }
}

function fillerVisuals({color, width}) {
  return {
    color: color,
    width: width,
  };
}

class Bar extends Component{
  render() {
    return (
      <div style={barVisuals(this.props)} className="Bar">
      </div>
    );
  }
} export default Bar;
