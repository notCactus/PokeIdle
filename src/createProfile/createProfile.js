import React, { Component } from "react";
import './createProfile.css';

// A helper function for API requests.
function processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
}

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'pokemon',
            randStartersNum: this.rollStarters(),
            randStarters: [],
            apiStarter: "LOADING",
        };

        this.profileChange = this.profileChange.bind(this);
    }

    componentDidMount(){
        this.setStarters();
    }

    componentDidUpdate(){
        
    }

    // Changes the avatar when the user types the username.
    // Uses debouncing.
    profileChange(e){

        let username = e.target.value;

        clearTimeout(this.searching);
        this.searching = setTimeout(() => {
                this.setState({username: username});
        }, 300);
    }

    // Rolls a random starter pokemon.
    rollStarters(){
        let starters = [0,0,0];
        const min = 1;
        const max = 7;
        let allStarters = {
            1: [1, 152, 252, 387, 495, 650, 722], /* grass */
            2: [4, 155, 255, 390, 498, 653, 725], /* fire */
            3: [7, 158, 256, 393, 501, 656, 728], /* water */
        };
        
        starters = starters.map(() => {
            return Math.floor(min + Math.random() * (max - min));
        });
        
        return starters.map((num, i) => {
            return allStarters[i+1][num-1];
        });
    }

    // Fetch a pokemon based off ID.
    fetchPokemon(pokemonId){
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(processResponse)
        .catch(console.error);
    }

    // Input an array with pokemons and return images.
    getPokemonImages(pokemons) {
        return pokemons.map((pokemon) => {
            return (<img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name} />);
        });
    }

    // Sets the state of the random stater pokemon and API call status.
    setStarters(){
        let promise = this.state.randStartersNum.map(async (id) => {
            return await this.fetchPokemon(id);
        })

        Promise.all(promise).then((result) => {
            this.state.randStarters = result;
            this.setState({apiStarter: "DONE"});
        });
    }

    // Show images of the starter pokemons.
    showStarters(){
        if(this.state.apiStarter === "DONE"){
            return (
                <div className="starters">
                    {this.getPokemonImages(this.state.randStarters)}
                </div>
            );
        }else {
            return (
                <div className="starters">
                    <img src="./loading.gif" alt="Loading..."/>
                </div>
            );
        }
    }

    render () {
        return (
            <div className="createProfile">
                <img src={`https://avatars.dicebear.com/v2/gridy/${this.state.username}.svg`} alt="profile"/>
                <input type="text" placeholder="Enter your username..." onInput={this.profileChange}/>
                {this.showStarters()}
            </div>
        );
    }
}

export default CreateProfile;