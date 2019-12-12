import React, { Component } from 'react';
import Clickable from '../clickable/clickable';
import LinkButton from '../linkButton/linkButton';
import './detailedQuestInformation.css';

class DetailedQuestInformation extends Component{
  render() {
    return (
      <div className="DetailedQuestInformation">
        <div>
          <img src="../loading.gif" alt='quest'/>
          <LinkButton text="back" linkTo="/quest"/>
        </div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <Clickable text="Take quest"/>
        </div>
      </div>
    );
  }
} export default DetailedQuestInformation;
