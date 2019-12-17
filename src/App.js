import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import React, {useState}  from 'react';
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

import './App.css';

// Imports for the store
import { createStore } from 'redux';

import {pokemon} from './reducers/pokemon/pokemonStore';
import {trainer} from './reducers/trainer/trainerStore';
import {quest} from './reducers/quest/questStore';
import createProfile from './reducers/createProfile/createProfileStore';

import startGame from './game/game';



function reducer(state = {}, action) {
    return {
        pokemon: pokemon(state.pokemon, action),
        trainer: trainer(state.trainer, action),
        createProfile: createProfile(state.createProfile, action),
        quest: quest(state.quest, action),
    };
}

const store = createStore(reducer);

//Contains interval id of the game
const game = startGame(store);

function App() {
  const [status, setStatus] = useState('loading');

  const unsubscribe = app.auth().onAuthStateChanged(() => {
    setStatus('done');
    unsubscribe();
    });

  if(status !== "loading"){
    return (
        <Provider store={store}>
          <div className="App">
            <Sidebar/>
            <div>
              <Header/>
                <PrivateRoute
                  exact path="/profile"
                  render = { (props) =>
                    <Profile/>
                  }
                />
              <Route path="/createProfile"
              render = {(props) => <CreateProfile/>}
              />
              <PrivateRoute
                exact path="/quest"
                render = { (props) =>
                  <Quest/>
                }
              />
              <PrivateRoute
                exact path="/quest/:id"
                render = { (props) =>
                  <QuestDetails questId={props.match.params.id}/>
                }
              />
              <PrivateRoute path="/shop" component={Shop}/>
              <Route path="/login" component={Login}/>
            </div>
          </div>
        </Provider>
    );
  } else {
    return (
        <Provider store={store}>
          <div className="App">
            <div>
              <Header/>
              <Route path="/createProfile"
              render = {(props) => <CreateProfile/>}
              />
              <Route path="/login" component={Login}/>
            </div>
          </div>
        </Provider>
    );
  }
} export default App;
