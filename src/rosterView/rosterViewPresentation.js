import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import {getPokemon} from '../api/api';
import './rosterView.css';

class RosterViewPresentation extends Component {
  constructor(props){
    super(props);
    this.fetchImages = this.fetchImages.bind(this);
    this.createRosterItems = this.createRosterItems.bind(this);
    this.state = {
      rosterImages: [],
      pcRoster: [],
    }
  }

  render() {
    this.fetchImages();
    return (
      <div className='RosterView'>
        <MenuToggler
          active="activeRoster"
          fallback="activeRoster"
          menuItemClickEvent={this.props.clickEvent}
          menus={this.menuProps(this.props.roster, this.state.pcRoster)}
        />
      </div>
    );
  }
  fetchImages(){
    if (this.state.rosterImages.length < 1 && this.props.roster.length > 0)
      Promise.all(this.props.roster.map(pokemon => getPokemon(pokemon.id)))
      .then(roster => this.setState({
        rosterImages: roster.map(pokemon => pokemon['sprites']['front_default'])
      }));
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
    return r.map((pokemon, i) =>
      <ProfileOverview
        image={this.state.rosterImages.length < 1 ? "./loading.gif" : this.state.rosterImages[i]}
        name={pokemon.id}
        xp={pokemon.xp}
        level={pokemon.lvl}
        maxXp={pokemon.requiredXp(pokemon.lvl)}
        pokemonId={pokemon.id}
      />
    );
  }
} export default RosterViewPresentation;
