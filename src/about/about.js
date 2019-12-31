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
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'ROSTER',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'QUEST',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'SHOP',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
