import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import './rosterView.css';

function getPokemon(id){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json());
}

const dummyRoster = [1, 4, 7];
class RosterView extends Component {
  constructor(props){
    super(props);
    let t = this.props.roster;
    if(t < 1)
      t = dummyRoster;
    debugger;
    this.state = {
      temp: t,
      roster: t.map(i =>
        <ProfileOverview
          image={'./loading.gif'}
        />),
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
          menus={this.menuProps(this.state.roster,this.state.pcRoster)}
        />
      </div>
    );
  }

  componentDidMount() {
    Promise.all(this.state.temp.map(id => getPokemon(id)))
    .then(roster => roster.map(pokemon =>
      <ProfileOverview
        image={pokemon['sprites']['front_default']}
        name={pokemon['name']}
        pokemonId={pokemon['id']}
      />
    ))
    .then(r => this.setState({roster: r, pcRoster: []}))
  }

  menuProps(roster, pcRoster) {
    return{
        activeRoster: {
          menuIcon: <span>Active</span>,
          items: roster,
        },
        pcRoster: {
          menuIcon: <span>PC</span>,
          items: pcRoster,
        }
      };
  }
} export default RosterView;
