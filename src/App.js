import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import React, {Component}  from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import QuestDetails from './questDetails/questDetails';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import Shop from './shop/shop';
import Login from './login/login';

import app from'./base';

import PrivateRoute from './privateRoute';

import Loading from './generalComponents/loading/loading';

import './App.css';

// Imports for the store
import { createStore } from 'redux';

import {trainer} from './reducers/trainer/trainerStore';
import {quest} from './reducers/quest/questStore';
import session from './reducers/session/sessionStore';
import createProfile from './reducers/createProfile/createProfileStore';

import startGame from './game/game';



function reducer(state = {}, action) {
    return {
        trainer: trainer(state.trainer, action),
        createProfile: createProfile(state.createProfile, action),
        quest: quest(state.quest, action),
        session: session(state.session, action),
    };
}

const store = createStore(reducer);

//Contains interval id of the game
const game = startGame(store);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'loading'
    };
    const unsubscribe = app.auth().onAuthStateChanged(() => {
        store.dispatch({type: 'SET_SIGN_IN', signedIn: app.auth().currentUser != null})
        this.setState({status: 'done'});
        //unsubscribe();
      });
  }

  render(){
    if(this.state.status !== "loading"){
      return (
          <Provider store={store}>
            <div className="App">
              <Sidebar/>
              <div>
                <Header/>
                <Switch>
                  <PrivateRoute
                    fallback="/login"
                    exact path="/"
                    render = { (props) =>
                      <Profile/>
                    }
                    />
                    <PrivateRoute
                      fallback="/login"
                      path="/profile"
                      render = { (props) =>
                        <Profile/>
                      }
                    />
                  <Route path="/createProfile"
                  render = {(props) => <CreateProfile/>}
                  />
                  <PrivateRoute
                    fallback="/login"
                    exact path="/quest"
                    render = { (props) =>
                      <Quest/>
                    }
                  />
                  <PrivateRoute
                    fallback="/login"
                    path="/quest/:id"
                    render = { (props) =>
                      <QuestDetails questId={props.match.params.id}/>
                    }
                  />
                  <PrivateRoute fallback="/login" path="/shop" component={Shop}/>
                  <Route path="/login"
                  render = {(props) => <Login/>}/>
                </Switch>
              </div>
            </div>
          </Provider>
      );
    } else  {
      return (
        <div className="App">
          <Route path="*"
            render = {() => <Loading text="Loading..." image="./loading.gif"/>}
          />
        </div>
      );
    }
  }
} export default App;
