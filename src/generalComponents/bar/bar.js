import React, { Component } from 'react';
import './bar.css';

function barVisuals({width, height}) {
  return {
    width: `{$width}px`,
    height: `{$height}px`,
  }
}

function fillerVisuals({color, width}) {
  return {
    color: color,
    width: `{$width}%`,
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
