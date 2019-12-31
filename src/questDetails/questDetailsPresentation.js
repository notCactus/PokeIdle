import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import RosterSelector from '../generalComponents/rosterSelector/rosterSelector';
import DetailedQuestInformation from '../generalComponents/detailedQuestInformation/detailedQuestInformation';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import Popup from '../generalComponents/popup/popup';
import ConfirmWindow from '../generalComponents/confirmWindow/confirmWindow';
import {getPokemon, getItem} from '../api/api';
import createActiveQuest from '../factory/activeQuestFactory';
import './questDetails.css';
class QuestDetailsPresentation extends Component{
  constructor(props){
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.exit = this.exit.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.popup = this.popup.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
    this.confrimQuest = this.confrimQuest.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      rosterImages: {}, //Once images of pokemon have been fetched they are stored here
      party: [], //Contains id of picked pokemon
      questIcon: "../loading.gif",
      redirectCondition: this.props.questId !== this.props.quest.name,
      popup: false,
    };
  }
  render() {
    return (
      <div className="QuestDetails">
        {this.redirect()}
        <DetailedQuestInformation
          icon={this.state.questIcon}
          difficulty={this.props.quest.difficulty}
          title={this.props.questId}
          time={this.props.quest.time}
          description={this.props.quest.description}
          buttonText="Take quest"
          questFunction={this.showPopup}
          cost={this.props.quest.staminaCost}
          rosterAmount={this.state.party.length}
          rosterCapacity={this.props.quest.rosterCapacity}
        />
        <MenuToggler
          fallback="availible"
          active="availible"
          menus={this.menuProps(this.props.roster)}
        />
        {this.popup()}
      </div>
    );
    }
    componentDidMount() {
      if(!this.state.redirectCondition)
        this.fetchImages();
    }
    redirect(){
      if(this.state.redirectCondition)
        return <Redirect to="/quest"/>
    }

    fetchImages(){
      Promise.all(this.props.roster.map(pokemon => getPokemon(pokemon.id)))
      .then(roster => {
        let imgs = {};
        roster.forEach(pokemon =>
          imgs[pokemon.name] = (pokemon['sprites']['front_default'])
        );
        this.setState({
          rosterImages: {...imgs},
        });
      });
      getItem(this.props.quest.iconItemId).then(item =>
        this.setState({
          questIcon: item.sprites.default,
        })
      )
    }
  showPopup(){
    this.setState({
      popup: true,
      loading: this.state.loading,
      roster: this.state.rosterView,
    });
  }
  popup(){
    if(this.state.popup)
      return <Popup
         title="Please confirm your party"
         exitFunction={this.exit}
         view={(
           <ConfirmWindow
             toConfirm=
             {`Is this your roster:${this.state.party.map(id => " "+this.props.roster[id].id)}?`}
             confirmFunction={this.confrimQuest}
            />
         )}
        />;
  }

  exit(){
    this.setState({
      popup: false,
      loading: this.state.loading,
      roster: this.state.rosterView,
    })
  }

  onToggle(id, toggle){
    if(!this.state.party.includes(id) && toggle)
      this.setState({
        party: this.state.party.concat(id),
      });
    else this.setState({
      party: this.state.party.filter(i => i !== id),
    });
  }

  menuProps(roster) {
    return{
        availible: {
          menuIcon: <span>Availible</span>,
          items: this.createRosterItems(roster),
        }
      };
  }
  createRosterItems(r){
    return r.map((pokemon, i) =>{
      if(pokemon.questId === '' && pokemon.hp > 0)
      return(
      <RosterSelector
        key={i}
        image={this.state.rosterImages[pokemon.id] === undefined ? "./loading.gif" : this.state.rosterImages[pokemon.id]}
        stamina={pokemon.hp}
        maxStamina={pokemon.maxHp(pokemon.lvl)}
        name={pokemon.id}
        level={pokemon.lvl}
        xp={pokemon.xp}
        maxXp={pokemon.requiredXp(pokemon.lvl)}
        pokemonId={i}
        onToggle={this.onToggle}
        toggle={this.state.party.length < this.props.quest.rosterCapacity}
      />);
    });
  }
  confrimQuest(){
    this.exit();
    debugger;
    if(this.state.party.length > 0
      && this.props.trainerStamina - this.props.quest.staminaCost >= 0
    ){
      this.props.sendPokemonToQuest(this.state.party, this.props.questId);
      this.props.addActiveQuest(createActiveQuest(this.props.quest));
      this.setState({
        redirectCondition: true,
      });
    }
  }
} export default QuestDetailsPresentation;
