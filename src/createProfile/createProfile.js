import React, { Component } from "react";
import UserCreator from './userCreator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import username from '../reducers/createProfile/username';
import starterPokemon from '../reducers/createProfile/starterPokemon';
import chosenStarter from '../reducers/createProfile/chosenStarter'
import {getPokemon} from '../api/api';

import './createProfile.css';

function reducer(state = {}, action) {
    return {
        username: username(state.username, action),
        starters: starterPokemon(state.starters, action),
        chosenStarter: chosenStarter(state.starter, action),
    };
  }
  
const store= createStore(reducer);

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
function setStarters(){
    let starterIds = rollStarters();

    let allStarters = starterIds.map(async(id) => {
        return await getPokemon(id);
    });

    Promise.all(allStarters)
    .then((starters) => store.dispatch({type: 'SET_STARTERS', starters: starters}));
}

class CreateProfile extends Component {
    componentDidMount(){
        setStarters();
    }

    render () {
        return (
            <div className="createProfile">
                <Provider store={store}>
                    <UserCreator/>
                </Provider>
                <button>START</button>
            </div>
        );
    }
}

export default CreateProfile;    