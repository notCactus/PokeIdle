import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import {getItem} from '../api/api';
import conditionReached from '../helperFunctions/conditionReached';
import app from '../base'
import './quest.css';


class QuestPresentation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      loadedQuests: this.props.allQuests.length > 0 ? 'loaded' : 'loading',
      iconState: 'loading',
      questIcon: {},
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
    conditionReached(() => this.state.loadedQuests === 'loaded')
    .then(() =>
      Promise.all(this.props.allQuests.map(q =>
        getItem(q.iconItemId)
      )))
    .then(items => {
      items.forEach((item, i) => {
        let temp = this.state.questIcon;
        temp[this.props.allQuests[i].name] = item.sprites.default;
        this.setState({
          questIcon: {...temp},
        })
      })
    })
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
          items: quests.length > 0 ? quests.map(quest =>
            <QuestItem
              image={this.state.questIcon[quest.name] === undefined ?
                './loading.gif' : this.state.questIcon[quest.name]
              }
              questTitle={quest.name}
              difficulty={quest.difficulty}
              linkTo={`/quest/${quest.name}`}
              onClick={() => this.props.setSelectedQuest(quest)}
            />
        ) :
        ['NO AVAILIBLE QUESTS']
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
