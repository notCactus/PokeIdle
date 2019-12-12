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
          pokemonId={this.props.pokemonId}
        />
        <div style={{backgroundColor: this.state.checked}}></div>
      </div>
    );
  }
  selectToggle(e){
    if(this.state.checked === 'red')
      this.setState({checked: 'green'});
    else
      this.setState({checked: 'red'});
    this.props.onToggle(e);
  }
} export default RosterSelector;
