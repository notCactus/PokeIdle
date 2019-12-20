import React, { Component } from 'react';
import './loading.css';

class Loading extends Component{
  render() {
    return (
      <div className="Loading">
        <img src={this.props.image} alt={'loading'}/>
        <p>{this.props.text}</p>
      </div>
    );
  }
} export default Loading;
