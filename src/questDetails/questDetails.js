import React, { Component } from 'react';
import DetailedQuestInformation from '../generalComponents/detailedQuestInformation/detailedQuestInformation';
import './questDetails.css';

class QuestDetails extends Component{
  render() {
    return (
      <div className="QuestDetails">
        <DetailedQuestInformation
          icon=""
          difficulty=""
          title={this.props.questId}
          description=""
        />
      </div>
    );
  }
} export default QuestDetails;
