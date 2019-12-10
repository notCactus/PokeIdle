import React, { Component } from 'react';
import './questItem.css';

function style({width}) {
  return {
    width: width,
  };
}

class QuestItem extends Component{
  render() {
    return (
      <div className='QuestItem' style={style(this.props)}>
        <img src="./loading.gif" alt="quest" style={this.props.imgStyle}/>
        <h3 style={this.props.titleStyle}>{this.props.questTitle}</h3>
        <p style={this.props.difficultyStyle}>{this.props.difficulty}</p>
        <button style={this.props.buttonStyle}>Details</button>
      </div>
    );
  }
} export default QuestItem;
