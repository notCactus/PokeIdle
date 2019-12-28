import React, { Component } from 'react';
import LinkButton from '../linkButton/linkButton';
import './questItem.css';


class QuestItem extends Component{
  render() {
    return (
      <div className="QuestItem">
        <img src={this.props.image} alt="quest"/>
        <h3>{this.props.questTitle}</h3>
        <p>{this.props.difficulty}</p>
        <LinkButton text="Details" linkTo={this.props.linkTo} onClick={this.props.onClick}/>
      </div>
    );
  }
} export default QuestItem;
