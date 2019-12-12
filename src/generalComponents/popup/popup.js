import React, { Component } from 'react';
import './popup.css';

class Popup extends Component{
  render() {
    return (
      <div className="Popup">
        <div className="popupContent">
          <div>
            <h3>{this.props.title}</h3>
            <h3 onClick={this.props.exitFunction}>X</h3>
          </div>
          <div>{this.props.view}</div>
        </div>
        <div></div>
      </div>
    );
  }
} export default Popup;
