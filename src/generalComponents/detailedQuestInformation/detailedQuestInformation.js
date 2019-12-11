import React, { Component } from 'react';
import LinkButton from '../linkButton/linkButton';
import './detailedQuestInformation.css';

class DetailedQuestInformation extends Component{
  render() {
    return (
      <div className="DetailedQuestInformation">
        <div>
          <img/>
          <LinkButton text="back" linkTo="/quest"/>
        </div>
        <div>
        </div>
      </div>
    );
  }
} export default DetailedQuestInformation;
