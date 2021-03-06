import React, { Component } from 'react';
import Clickable from '../clickable/clickable';
import LinkButton from '../linkButton/linkButton';
import './detailedQuestInformation.css';

class DetailedQuestInformation extends Component{
  render() {
    return (
      <div className="DetailedQuestInformation">
        <div>
          <img src={this.props.icon} alt='quest'/>
          <LinkButton text="back" linkTo="/quest"/>
        </div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <div>
            <p>{this.props.difficulty}</p>
            <p>Time: {this.props.time}</p>
            <p>Cost: {this.props.cost} stamina</p>
            <p>{this.props.rosterAmount}/{this.props.rosterCapacity}</p>
          </div>
          <Clickable text={this.props.buttonText} onClick={this.props.questFunction}/>
        </div>
      </div>
    );
  }
} export default DetailedQuestInformation;
