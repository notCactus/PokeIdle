import React, { Component } from 'react';
import ProfileOverview from '../profileOverview/profileOverview';
import './rosterSelector.css';

class RosterSelector extends Component{
  constructor(props){
    super(props);
    this.selectToggle = this.selectToggle.bind(this);
    this.state = {
      checked: 'red',
    }
  }
  render() {
    return (
      <div className="RosterSelector" onClick={this.selectToggle}>
        <ProfileOverview
          name={this.props.name}
          image={this.props.image}
        />
        <div style={{backgroundColor: this.state.checked}}></div>
      </div>
    );
  }
  selectToggle(){
    if(this.state.checked === 'red')
      this.setState({checked: 'green'});
    else
      this.setState({checked: 'red'});

  }
} export default RosterSelector;
