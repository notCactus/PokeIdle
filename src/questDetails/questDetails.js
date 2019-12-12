import React, { Component } from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterSelector from '../generalComponents/rosterSelector/rosterSelector';
import DetailedQuestInformation from '../generalComponents/detailedQuestInformation/detailedQuestInformation';
import Clickable from '../generalComponents/clickable/clickable';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import Popup from '../generalComponents/popup/popup';
import {getPokemon} from '../api/api';
import './questDetails.css';
const dummyRoster = [1, 4, 7];
class QuestDetails extends Component{
  constructor(props){
    super(props);
    this.party = [];
    this.onToggle = this.onToggle.bind(this);
    this.exit = this.exit.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.popup = this.popup.bind(this);
    this.state = {
      loading: true,
      popup: false,
      roster: dummyRoster.map(i =>
        <ProfileOverview
          image={'../loading.gif'}
        />)
    };
  }
  render() {
    return (
      <div className="QuestDetails">
        <DetailedQuestInformation
          icon=""
          difficulty=""
          title={this.props.questId}
          description="Detta ska komma från en store"
          buttonText="Take quest"
          questFunction={this.showPopup}
        />
        <MenuToggler
          fallback="availible"
          active="availible"
          menus={this.menuProps(this.state.roster)}
        />
        {this.popup()}
      </div>
    );
  }
  componentDidMount() {
    if(this.state.loading){
      this.makeLodingImgSmaller();
      Promise.all(dummyRoster.map(id => getPokemon(id)))
      .then(roster => roster.map(pokemon =>
        <RosterSelector
          name={pokemon['name']}
          image={pokemon['sprites']['front_default']}
          pokemonId={pokemon['id']}
          onToggle={this.onToggle}
        />
      ))
      .then(r => this.setState({loading: false, roster: r}))
      .then(this.resetImgSize);
    }
  }
  showPopup(){
    this.setState({
      popup: true,
      loading: this.state.loading,
      roster: this.state.roster,
    });
  }
  popup(){
    if(this.state.popup)
      return <Popup
         title="Please confirm your party"
         exitFunction={this.exit}
         view={(
           <div>
             Is this your roster? {this.party.map(id => id+" ")}
           </div>
         )}
        />;
  }

  exit(){
    this.setState({
      popup: false,
      loading: this.state.loading,
      roster: this.state.roster,
    })
  }

  onToggle(e){
    const idHolder = this.findPO(e.target);
    if(idHolder !== false){
      if(!this.party.includes(idHolder.dataset.pokemon))
        this.party.push(idHolder.dataset.pokemon);
      else this.party = this.party.filter(id => id != idHolder.dataset.pokemon);
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
          items: roster,
        }
      };
  }

  makeLodingImgSmaller(){
    let imgs = document.body.querySelectorAll('.QuestDetails .ProfileOverview > .Avatar  img');
    [...imgs].forEach(img => {
      img.style.width = '50px';
      img.style.height = '50px';
      img.style.top = '0px';
      img.style.left = '0px';
    })
  }

  resetImgSize(){
    let imgs = document.body.querySelectorAll('.QuestDetails .ProfileOverview > .Avatar  img');
    [...imgs].forEach(img => {
      img.style.removeProperty('width');
      img.style.removeProperty('height');
      img.style.removeProperty('top');
      img.style.removeProperty('left');
    })
  }

} export default QuestDetails;
