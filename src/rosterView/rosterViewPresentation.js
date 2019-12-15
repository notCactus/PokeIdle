import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import './rosterView.css';

class RosterViewPresentation extends Component {
  constructor(props){
    super(props);
    this.createRosterItems = this.createRosterItems.bind(this);
    this.state = {
      pcRoster: [],
    }
  }

  render() {
    return (
      <div className='RosterView'>
        <MenuToggler
          active="activeRoster"
          fallback="activeRoster"
          menuItemClickEvent={this.props.clickEvent}
          menus={this.menuProps(this.props.roster,this.state.pcRoster)}
        />
      </div>
    );
  }

  menuProps(roster, pcRoster) {
    return{
        activeRoster: {
          menuIcon: <span>Active</span>,
          items: this.createRosterItems(roster),
        },
        pcRoster: {
          menuIcon: <span>PC</span>,
          items: pcRoster,
        }
      };
  }

  createRosterItems(r){
    return r.map(pokemon =>
      <ProfileOverview
        image={pokemon['sprites']['front_default']}
        name={pokemon['name']}
        pokemonId={pokemon['id']}
      />
    );
  }
} export default RosterViewPresentation;
