import React, { Component } from 'react';
import ProfileOverview from '../generalComponents/profileOverview/profileOverview';
import RosterSelector from '../generalComponents/rosterSelector/rosterSelector';
import DetailedQuestInformation from '../generalComponents/detailedQuestInformation/detailedQuestInformation';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import {getPokemon} from '../api/api';
import './questDetails.css';
const dummyRoster = [1, 4, 7];
class QuestDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
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
          description="Detta ska komma from en store"
        />
      <MenuToggler
          fallback="availible"
          active="availible"
          menus={this.menuProps(this.state.roster)}
        />
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
        />
      ))
      .then(r => this.setState({loading: false, roster: r}))
      .then(this.resetImgSize);
    }
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
