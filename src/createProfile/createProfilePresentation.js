import React, { Component } from "react";
import UserCreator from './userCreator';

import {getPokemon} from '../api/api';
import LinkButton from "../generalComponents/linkButton/linkButton";

import './createProfile.css';

// Only for testing
import SignOutButton from '../generalComponents/signOutButton/signOutButton';

// Helper function for getting the random starters
function rollStarters(){

    let starters = [0,0,0];
    const min = 1;
    const max = 7;

    // All available starter pokemon
    let allStarters = {
        1: [1, 152, 252, 387, 495, 650, 722], /* grass */
        2: [4, 155, 255, 390, 498, 653, 725], /* fire */
        3: [7, 158, 258, 393, 501, 656, 728], /* water */
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

//Gives starter to trainer
function starterToTrainer(cb, id){
  if(id !== "")
    getPokemon(id)
    .then(pokemon => cb({
      id: pokemon.name,
      lvl: 1,
      xp: 1,
      requiredXp: (lvl) => Math.pow(10,lvl),
      hp: 10,
      questId: "",
    }));
}

class CreateProfilePresentation extends Component {
    componentDidMount(){
        setStarters(this.props.setStarters);
    }

    render () {
        return (
            <div className="createProfile">
                    <UserCreator/>
                <LinkButton text="ADD TO ROSTER TEST BUTTON" linkTo="/profile" onClick={() => starterToTrainer(this.props.addToRoster, this.props.chosenStarter)}/>
                <p>OR</p>
                <LinkButton text="Login" linkTo="/login"/>
                <p>FOR TESTING:</p>
                <SignOutButton/>
            </div>
        );
    }
}

export default CreateProfilePresentation;
