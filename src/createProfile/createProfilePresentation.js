import React, { Component } from "react";
import UserCreator from './userCreator';

import {getPokemon} from '../api/api';
import store from '../stores/store';
import LinkButton from "../generalComponents/linkButton/linkButton";

import './createProfile.css';

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
    .then((s) =>{console.log(s);return s;})
    .then((starters) => setStartersInStore(starters));
}

class CreateProfilePresentation extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        setStarters(this.props.setStarters);
        this.props.onUsernameChange("POTATIS");
    }

    render () {
        return (
            <div className="createProfile">
                    <UserCreator/>
                <LinkButton text="START" linkTo="/profile"/>
            </div>
        );
    }
}

export default CreateProfilePresentation;
