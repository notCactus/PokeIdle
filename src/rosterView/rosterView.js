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
    this.state = {
      roster: dummyRoster.map(i =>
        <ProfileOverview
          width="60%"
          maxWidth="555px"
          height="50px"
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
          menus={this.menuProps(this.state.roster,this.state.pcRoster)}
          width="100%"
          height="100%"
          padding="1em"
          margin="1em"
        />
      </div>
    );
  }

  componentDidMount() {
    Promise.all(dummyRoster.map(id => getPokemon(id)))
    .then(roster => roster.map(pokemon =>
      <ProfileOverview
        width="60%"
        maxWidth="555px"
        height="50px"
        image={pokemon['sprites']['front_default']}
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
