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
      <div className="RosterSelector" onClick={(e) => this.selectToggle(this.props.pokemonId, this.props.toggle)}>
        <ProfileOverview
          name={this.props.name}
          image={this.props.image}
          stamina={this.props.stamina}
          maxStamina={this.props.maxStamina}
          pokemonId={this.props.pokemonId}
          xp={this.props.xp}
          maxXp={this.props.maxXp}
          level={this.props.level}
        />
        <div style={{backgroundColor: this.state.checked}}></div>
      </div>
    );
  }
  selectToggle(id, toggle){
    if(toggle && this.state.checked === 'red')
      this.setState({checked: 'green'});
    else
      this.setState({checked: 'red'});
    this.props.onToggle(id, toggle);
  }
} export default RosterSelector;
