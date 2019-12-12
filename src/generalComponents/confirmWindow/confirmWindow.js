import React, { Component } from 'react';
import Clickable from '../clickable/clickable';
import './confirmWindow.css';

class ConfirmWindow extends Component{
  render() {
    return (
      <div className="ConfirmWindow">
        <p>{this.props.toConfirm}</p>
        <Clickable onClick={this.props.confirmFunction} text="Confirm"/>
      </div>
    );
  }
} export default ConfirmWindow;
