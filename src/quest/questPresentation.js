import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import app from '../base'
import './quest.css';


class QuestPresentation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      loadedQuests: this.props.allQuests.length > 0 ? 'loaded' : 'loading',
    }
    this.menuProps = this.menuProps.bind(this);
    this.getAllQuests(this);
  }

  render() {
    return (
      <div className={`Quest ${this.state.loadedQuests}`}>
        <MenuToggler
          active="quests"
          fallback="quests"
          menus={this.menuProps(this.props.availibleQuests)}
          width="100%"
          height="80%"
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.setAvailibleQuests(this.props.lvl);
  }
  getAllQuests(c){
    if(c.props.availibleQuests.length < 1)
      app.firestore().collection('quest').get()
      .then(snap =>{
        c.props.setAllQuests(snap.docs.map(v => v.data()))
        c.props.setAvailibleQuests(c.props.lvl);
      })
      .then( () => this.setState({loadedQuests: 'loaded',}));
  }

  menuProps(quests) {
    if(this.state.loadedQuests === 'loaded')
      return {
        quests: {
          menuIcon: <a>Availible</a>,
          items: quests.map(quest =>
            <QuestItem
              questTitle={quest.name}
              difficulty={quest.difficulty}
              linkTo={`/quest/${quest.name}`}
              onClick={() => this.props.setSelectedQuest(quest)}
            />
          )
        },
        active: {
          menuIcon: <a>Active</a>,
          items: this.props.activeQuests.length !== 0? this.props.activeQuests.map(quest => <p>{quest}</p>)
          : ['NO ACTIVE QUESTS'],
        }
      };
    else
      return {
        quests: {
          items: [
          <div className="loading">
            <img src='./loading.gif' alt='loading quests'/>
            <p>Loading...</p>
          </div>
        ]
      }
    }
  }
} export default QuestPresentation;
