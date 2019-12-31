import React, { Component } from 'react';
import './contentContainer.css';

class ContentContainer extends Component {
  render() {
    console.log();
    return (
      <div className="ContentContainer">
        {this.props.content}
      </div>
    );
  }
} export default ContentContainer;
