import React, { Component } from "react";
import UserCreator from './userCreator';
import  { Redirect } from 'react-router-dom'

import {getPokemon} from '../api/api';
import LinkButton from "../generalComponents/linkButton/linkButton";
import Loading from '../generalComponents/loading/loading';

import './createProfile.css';

// Helper function for getting the random starters
function rollStarters(){

    let starters = [0,0,0];
    const min = 1;
    const max = 7;

    // All available starter pokemon
    let allStarters = {
        1: ['bulbasaur', 'chikorita', 'treecko', 'turtwig', 'snivy', 'chespin', 'rowlet'], /* grass */
        2: ['charmander', 'cyndaquil', 'torchic', 'chimchar', 'tepig', 'fennekin', 'litten'], /* fire */
        3: ['squirtle', 'totodile', 'mudkip', 'piplup', 'oshawott', 'froakie', 'popplio'], /* water */
    };

    starters = starters.map(() => {
        return Math.floor(min + Math.random() * (max - min));
    });

    return starters.map((num, i) => {
        return allStarters[i+1][num-1];
    });
}

// Sets random starters
function setStarters(setStartersInStore){
    let starterIds = rollStarters();

    let allStarters = starterIds.map(async(id) => {
        return await getPokemon(id);
    });

    Promise.all(allStarters)
    .then((starters) => setStartersInStore(starters))
}

class CreateProfilePresentation extends Component {
    constructor(props){
      super(props);
      this.props.resetTrainer();
    }
    componentDidMount(){
        setStarters(this.props.setStarters);
    }
    render () {
        if(this.props.signedIn)
          return(<Redirect to="/profile"/>);
        else if (this.props.registration==='started' && !this.props.signedIn) {
          return (<Loading image="./loading.gif" text="Creating your account..."/>)
        }
        else
          return (
              <div className="createProfile">
                  <h2>Choose a pokemon!</h2>
                  <ul>
                      <li><img src="/pikachu.png" alt="pikachu"/><span>Choose a pokemon and level up through questing.</span></li>
                      <li><img src="/shop_balls.png" alt="Pokemon balls"/><span>Collect coins through quests, buy pokeballs and trade them for new and more powerful pokemons.</span></li>
                      <li><img src="/shop_medicine.png" alt="Potion"/><span>Move the pokemon with low health to the PC so they may regenerate their healt points (hp).</span></li>
                  </ul>
                  <UserCreator/>
                  <p>OR</p>
                  <LinkButton text="Login" linkTo="/login"/>
              </div>
          );
    }
}

export default CreateProfilePresentation;
