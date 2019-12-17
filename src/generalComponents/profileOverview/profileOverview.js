import React, {Component} from 'react';
import Avatar from '../avatar/avatar';
import CharacterInformation from '../characterInformation/characterInformation';
import Popup from '../popup/popup';
import PokeOptions from '../pokeOptions/pokeOptions';
import './profileOverview.css';
function style({width, height, maxWidth, borderBend}) {
  return {
    width: width,
    maxWidth: maxWidth,
    height: height,
  }
}
class ProfileOverview extends Component {
  constructor(props){
    super(props);
    this.showPopup = this.showPopup.bind(this);
    this.exit = this.exit.bind(this);
    this.state = {
      popup: false
    }
  }

  render(){
    return (
      <div className="ProfileOverview"
          data-pokemon={this.props.pokemonId}
          style={style(this.props)}
          onClick={this.props.onClick}>
        <Avatar
          image={this.props.image}
        />
        <CharacterInformation
          name={this.props.name}
          health={this.props.health}
          level={this.props.level}
          xp={this.props.xp}
          maxXp={this.props.maxXp}
          stamina={this.props.stamina}
          maxStamina={this.props.maxStamina}
        />
        {this.popup()}
      </div>
    );
  }

  popup(){
    if(this.state.popup)
      return <Popup
         title="What would you like to do?"
         exitFunction={this.exit}
         view={
           <PokeOptions roster={this.props.inRoster} index={this.props.index}/>
         }
        />;
  }
  /*showRosterOption(e){
    const po = this.findPO(e.target)
    if(po !== false)
      getPokemon(po.dataset.pokemon)
      .then(pokemon =>
      this.setState({
          image: this.state.image,
          popup: true,
          clickedPokemon: pokemon,
        })
      )
  }*/
  exit(){
    this.setState({
      popup: false,
    })
  }

  showPopup(){
    this.setState({
      popup: true,
    })
  }


} export default ProfileOverview;
