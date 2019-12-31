import React, { Component } from 'react';
import ContentContainer from '../contentContainer/contentContainer';
import './explanationContainer.css';

class ExplanationContainer extends Component{
  constructor(props){
    super(props);
    this.createContent = this.createContent.bind(this);
  }
  render() {
    return (
      <div className="ExplanationContainer">
        {this.createContent()}
      </div>
    );
  }

  createContent(){
    const columns = this.props.columns;
    return this.props.content.filter((c, i) =>
      (i + 1) % (columns) === 0
    )
    .map((c, i) =>
      (
        <ContentContainer key={i}
        content={
          this.props.content.filter((content, j) =>
            j >= columns * i && j < (columns * i) + columns
          )
          .map((content, j) =>
            (
              <div key={j}>
                <h3>{content.title}</h3>
                <p>{content.text}</p>
              </div>
            )
          )
        }
        />
      )
    );
  }
} export default ExplanationContainer;
