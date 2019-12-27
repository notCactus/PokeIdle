import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import ActiveQuestProgress from '../generalComponents/activeQuestProgress/activeQuestProgress';
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
  }
  render() {
    return (
      <div className={`Quest ${this.state.loadedQuests}`}>
        <MenuToggler
          active="quests"
          fallback="quests"
          menus={this.menuProps(this.props.allQuests)}
          width="100%"
          height="80%"
        />
      </div>
    );
  }
  componentDidMount() {
    conditionReached(() => this.props.loadedData)
    .then(() => this.props.setAvailibleQuests(this.props.lvl));

    conditionReached(() => this.props.allQuests.length > 0)
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

  menuProps(quests) {
    if(this.props.allQuests.length > 0)
      return {
        quests: {
          menuIcon: <a>Availible</a>,
          items: quests.length > 0 ? this.props.availibleQuests.map(quest =>
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
          items: this.props.activeQuests.length !== 0 ?
          this.props.activeQuests.map(quest =>
            <ActiveQuestProgress
              name={quest.name}
              current={Math.min(quest.time, quest.cd)}
              max={quest.time}
              image={this.state.questIcon[quest.name] === undefined ?
            './loading.gif' : this.state.questIcon[quest.name]}
            />)
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
