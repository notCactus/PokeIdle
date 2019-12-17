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
      /*pcRoster: [],*/
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
          menus={this.menuProps(this.props.roster, this.props.pcRoster)}
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
          items: this.createRosterItems(roster, true),
        },
        pcRoster: {
          menuIcon: <span>PC</span>,
          items: this.createRosterItems(pcRoster, false),
        }
      };
  }

  createRosterItems(r, inRoster){
    return r.map((pokemon, i) =>
      <ProfileOverview
        image={this.state.rosterImages.length < 1 ? "./loading.gif" : this.state.rosterImages[i]}
        name={pokemon.id}
        stamina={pokemon.hp}
        maxStamina={pokemon.maxHp(pokemon.lvl)}
        xp={pokemon.xp}
        level={pokemon.lvl}
        maxXp={pokemon.requiredXp(pokemon.lvl)}
        pokemonId={pokemon.id}
        inRoster={inRoster}
        index={i}
        canClick={true}
      />
    );
  }
} export default RosterViewPresentation;
