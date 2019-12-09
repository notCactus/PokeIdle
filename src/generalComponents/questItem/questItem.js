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
        <img src="./loading.gif" alt="quest"/>
        <h3>{this.props.questTitle}</h3>
        <p>{this.props.difficulty}</p>
        <button>Details</button>
      </div>
    );
  }
} export default QuestItem;
