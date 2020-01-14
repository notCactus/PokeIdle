import React, { Component } from 'react';
import ContentContainer from '../generalComponents/contentContainer/contentContainer';
import ExplanationContainer from '../generalComponents/explanationContainer/explanationContainer';
import LinkButton from '../generalComponents/linkButton/linkButton';
import './about.css';

const INTRODUCTION = (
  <div key="1">
    <p>
      Pokeidle is an idle game, that means the core mechanic consists of doing
      nothing. How easy is that? Simply gain experience by having the game turned on
      in the background. There are a few tricks to gain experience faster, if
      you wish to learn more about the game keep reading or learn by playing.
      Just click play to start!
    </p>
    <LinkButton text="PLAY" linkTo="/profile"/>
  </div>
);

  const EXPLANATIONS = [
    {
      title: 'PROFILE',
      text: 'Under profile you will find an overview of yourself and your roster. To use any of your items click on one of your roster members, and navigate to the "Item"-option in the popup. Drag and drop to change the order of your roster.'
    },
    {
      title: 'ROSTER',
      text: 'Your roster can be viewed under Profile. Click on any of the members to interact with them. If one of them has fainted move them to the PC, they will not gain any hp or xp if fainted.'
    },
    {
      title: 'QUEST',
      text: 'Send your Pokémon on quests to get xp and money. Remeber to pay attention to the health of your Pokémon and have the difficulty of the quest in mind before you select your party.',
    },
    {
      title: 'SHOP',
      text: 'Not enough hp, need a new roster members? Then the Shop is the right place for you. Turn of coins in to PokéBalls and buy a new roster member after gaining enough coins. Will you be able to collect all of them?',
    }
  ];

class About extends Component{

  render() {
    return (
      <div className='About'>
        <ContentContainer content={[].concat(INTRODUCTION)}/>
        <ExplanationContainer columns={2} content={EXPLANATIONS}/>
      </div>
    );
  }
} export default About;
