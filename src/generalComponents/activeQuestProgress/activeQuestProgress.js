import React from 'react';
import Bar from '../bar/bar';
import './activeQuestProgress.css';

function ActiveQuestProgress(props) {
  return (
    <div className="ActiveQuestProgress">
      <img src={props.image} alt='quest'/>
      <div>
        <h3>{props.name}</h3>
        <Bar current={props.current} max={props.max}/>
      </div>
    </div>
  )
} export default ActiveQuestProgress;
