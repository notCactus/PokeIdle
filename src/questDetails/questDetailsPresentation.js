import React, { Component } from 'react';
import RosterSelector from '../generalComponents/rosterSelector/rosterSelector';
import DetailedQuestInformation from '../generalComponents/detailedQuestInformation/detailedQuestInformation';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import Popup from '../generalComponents/popup/popup';
import ConfirmWindow from '../generalComponents/confirmWindow/confirmWindow';
import {getPokemon} from '../api/api';
import './questDetails.css';
class QuestDetailsPresentation extends Component{
  constructor(props){
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.exit = this.exit.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.popup = this.popup.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
    this.state = {
      party: [],
      rosterImages: [],
      popup: false,
      questRoster: [],
    };
  }
  render() {
    this.fetchImages();
    return (
      <div className="QuestDetails">
        <DetailedQuestInformation
          icon=""
          difficulty={this.props.quest.difficulty}
          title={this.props.questId}
          time={this.props.quest.time}
          description={this.props.quest.description}
          buttonText="Take quest"
          questFunction={this.showPopup}
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
    }  fetchImages(){
        if (this.state.rosterImages.length < 1 && this.props.roster.length > 0)
          Promise.all(this.props.roster.map(pokemon => getPokemon(pokemon.id)))
          .then(roster => this.setState({
            rosterImages: roster.map(pokemon => pokemon['sprites']['front_default'])
          }));
      }
  showPopup(){
    this.setState({
      popup: true,
      loading: this.state.loading,
      roster: this.state.rosterView,
    });
    this.setState({questRoster: this.props.roster.filter(pokemon =>
      this.state.party.includes(pokemon['id'])
    )
    .map(pokemon => pokemon.id)
    });
  }
  popup(){
    if(this.state.popup)
      return <Popup
         title="Please confirm your party"
         exitFunction={this.exit}
         view={(
           <ConfirmWindow toConfirm={`Is this your roster:${this.state.questRoster.map(id => " "+id)}?`}/>
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

  onToggle(e){
    const idHolder = this.findPO(e.target);
    if(idHolder !== false){
      if(!this.state.party.includes(idHolder.dataset.pokemon))
        this.setState({
          party: this.state.party.concat(idHolder.dataset.pokemon),
        });
      else this.setState({
        party: this.state.party.filter(id => id !== idHolder.dataset.pokemon),
      });
    }
  }

  // TODO: move this func to seperate document
  findPO(element){
    while(![...element.classList].includes('RosterSelector') && element !== null){
      if([...element.classList].includes('ProfileOverview'))
        return element;
      element= element.parentElement
    } return false;
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
    return r.map((pokemon, i) =>
      <RosterSelector
        image={this.state.rosterImages.length < 1 ? "./loading.gif" : this.state.rosterImages[i]}
        name={pokemon.id}
        level={pokemon.lvl}
        xp={pokemon.xp}
        maxXp={pokemon.requiredXp(pokemon.lvl)}
        pokemonId={pokemon.id}
        onToggle={this.onToggle}
        toggle={this.state.party.length < this.props.quest.rosterCapacity}
      />
    );
  }
} export default QuestDetailsPresentation;
