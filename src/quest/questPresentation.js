import React, { Component } from 'react';
import MenuToggler from '../generalComponents/menuToggler/menuToggler';
import QuestItem from '../generalComponents/questItem/questItem';
import app from '../base'
import './quest.css';


class QuestPresentation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      quests: [],
      redirect: false,
      redirectTo: "",
    }
    this.menuProps = this.menuProps.bind(this);
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

  componentDidMount() {
    app.firestore().collection('quest').get()
    .then(snap => this.setState({
        quests: snap.docs.map(v => v.data())
        .filter((value, key) => key <= this.props.lvl),
      })
    );
  }

  menuProps() {
    if(this.state.quests.length < 1)
      return{
          quests: {
            items: [
              <QuestItem
                questTitle="Killing Dittos"
                difficulty="easy"
              />,
              <QuestItem
                questTitle="Eating Magickarp"
                difficulty="medium"
              />,
              <QuestItem
                questTitle="Giving Pokémon Food"
                difficulty="hard"
              />],
          }
        };
      else
        return {
          quests: {
            items: this.state.quests.map(quest =>
              <QuestItem
                questTitle={quest.name}
                difficulty={quest.difficulty}
                linkTo={`/quest/${quest.name}`}
                onClick={() => this.props.setSelectedQuest(quest)}
              />
            )
          }
        };
  }
} export default QuestPresentation;
