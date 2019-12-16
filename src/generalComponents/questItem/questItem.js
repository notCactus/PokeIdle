import React, { Component } from 'react';
import LinkButton from '../linkButton/linkButton';
import './questItem.css';


class QuestItem extends Component{
  componentDidMount() {
  }
  render() {
    return (
      <div className="QuestItem">
        <img src="./loading.gif" alt="quest" style={this.props.imgStyle}/>
        <h3>{this.props.questTitle}</h3>
        <p>{this.props.difficulty}</p>
        <LinkButton text="Details" linkTo={this.props.linkTo} onClick={this.props.onClick}/>
      </div>
    );
  }
} export default QuestItem;
