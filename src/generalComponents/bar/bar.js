import React, { Component } from 'react';
import './bar.css';

function barVisuals({width, height, color}) {
  return {
    width: width,
    height: height,
    border: `1px solid ${color}`,
  }
}

function fillerVisuals({color, width}) {
  return {
    color: color,
    width: width,
  };
}

class Bar extends Component{
  constructor(props){
    super(props);
    this.fillBar = this.fillBar.bind(this);
    this.calcFill = this.calcFill.bind(this);
  }
  render() {//
    return (
      <div style={barVisuals(this.props)} className="Bar">
          {this.fillBar(this.props.current, this.props.max)}
      </div>
    );
  }
  fillBar(current, max){
    if(current !== undefined)
      return (<div style={this.calcFill(current,max)}></div>);
  }

  calcFill(current, max){
    return {
      width : `${Math.round((current/max)*100)}%`,
      backgroundColor: this.props.color,
    }
  }
} export default Bar;
