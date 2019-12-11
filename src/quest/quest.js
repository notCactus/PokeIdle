import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import './quest.css';


class Quest extends Component{
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      redirectTo: "",
    }
    this.printTypeOf.bind(this);
  }

  render() {
    return (
      <div className='Quest'>{this.content()}</div>
    );
  }

  componentDidMount() {
    const buttons = [...document.body
    .children[1].children[0]
    .children[1].children[1]
    .firstElementChild.children[1]
    .querySelectorAll('button')];
    for(let k of buttons) this.addClickEvent(k);
  }

  content(){
    if(!this.state.redirect)
      return <MenuToggler
        active="quests"
        fallback="quests"
        menus={this.menuProps()}
        width="100%"
        height="80%"
      />;
      else return <Redirect push to={`/quest/${this.state.redirectTo}`} />;
  }

  printTypeOf(e){
    this.setState({
      redirect: true,
      redirectTo: e.currentTarget
        .parentElement
        .querySelector('h3')
        .innerHTML,
    });
  }

  addClickEvent(element){
    element.addEventListener('click', e => this.printTypeOf(e));
  }

  menuProps() {
    return{
        quests: {
          items: [
            <QuestItem
              questTitle="Killing Dittos"
              difficulty="easy"
            />,
            <QuestItem
              questTitle="Eating Magickarp"
              difficulty="easy"
            />,
            <QuestItem
              questTitle="Befriending Pokémon"
              difficulty="impossible"
            />],
        }
      };
  }
} export default Quest;
