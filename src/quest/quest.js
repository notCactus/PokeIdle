import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import './quest.css';

class Quest extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.state = {
      questContainer:
      document.body
      .children[1].children[0]
      .children[1].children[1]
      .firstElementChild.children[1],
    }
  }

  render() {
    return (
      <div className='Quest'>
        <MenuToggler
          active="quests"
          fallback="quests"
          menus={this.menuProps()}
          width="100%"
          height="80%"
        />
      </div>
    );
  }

  menuProps() {
    return{
        quests: {
          items: [
            <QuestItem
              questTitle="Killing Dittos"
              difficulty="easy"
              width="100%"
            />,
            <QuestItem
              questTitle="Eating Magickarp"
              difficulty="easy"
              width="100%"
            />,
            <QuestItem
              questTitle="Befriending Pokémon"
              difficulty="impossible"
              width="100%"
            />],
        }
      };
  }
} export default Quest;
