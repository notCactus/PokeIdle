import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import PokeOptions from '../generalComponents/pokeOptions/pokeOptions';
import Popup from '../generalComponents/popup/popup';
import {getPokemon} from '../api/api';
import './rosterView.css';

class RosterViewPresentation extends Component {
  constructor(props){
    super(props);
    this.fetchImages = this.fetchImages.bind(this);
    this.createRosterItems = this.createRosterItems.bind(this);
    this.popup = this.popup.bind(this);
    this.activatePopup = this.activatePopup.bind(this);
    this.state = {
      rosterImages: {},
      iconState: 'loading',
      popup: false,
      popupIndex: 0,
      mainView: true,
    }
  }

  render() {
    this.fetchImages();
    return (
      <div className={`RosterView ${this.state.iconState}`}>
        <MenuToggler
          active="activeRoster"
          fallback="activeRoster"
          menus={this.menuProps(this.props.roster, this.props.pcRoster)}
        />
      {this.popup()}
      </div>
    );
  }

  fetchImages(){
    if (Object.entries(this.state.rosterImages).length < 1 && this.props.roster.length > 0)
      Promise.all([Promise.all(this.props.roster.map(pokemon => getPokemon(pokemon.id))),
      Promise.all(this.props.pcRoster.map(pokemon => getPokemon(pokemon.id)))])
      .then(roster => {
        let temp = this.state.rosterImages;
        roster[0].forEach((pokemon, i) => {
          temp[this.props.roster[i].id] = pokemon['sprites']['front_default'];
        })
        roster[1].forEach((pokemon, i) => {
          temp[this.props.pcRoster[i].id] = pokemon['sprites']['front_default'];
        })
        this.setState({
          rosterImages: {...temp},
        })
      })
    .then(() => {
      this.setState({iconState: 'loaded'})
   });
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
    return this.props.loadedData ? r.map((pokemon, i) =>
      <ProfileOverview
        image={this.state.rosterImages[pokemon.id] !== undefined ? this.state.rosterImages[pokemon.id] : "./loading.gif"}
        name={pokemon.id}
        stamina={pokemon.hp}
        maxStamina={pokemon.maxHp(pokemon.lvl)}
        xp={pokemon.xp}
        level={pokemon.lvl}
        maxXp={pokemon.requiredXp(pokemon.lvl)}
        pokemonId={pokemon.id}
        inRoster={inRoster}
        index={i}
        clickEvent={() => this.activatePopup(i, inRoster)}
      />
    )
    : !this.props.loadedData ?
    [
      <div className='loading'>
        <img  src="./loading.gif" alt="loading roster"/>
        <p>Loading</p>
      </div>
    ] : ['EMPTY']
  }

  popup(){
    if (this.state.popup)
      return <Popup
         title="What would you like to do?"
         exitFunction={() => this.setState({popup: false,})}
         view={
           <PokeOptions
             confirmFunction ={() => this.setState({popup: false,})}
             roster={this.state.mainView}
             index={this.state.popupIndex}
            />
         }
        />;
  }
  activatePopup(index, inRoster){
    this.setState({popupIndex: index, popup: true, mainView: inRoster,});
  }
} export default RosterViewPresentation;
