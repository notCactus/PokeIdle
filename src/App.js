import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import React from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import QuestDetails from './questDetails/questDetails';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import Shop from './shop/shop';
import LoginPresentation from './login/loginPresentation';

import FirebaseTest from './firebaseTest/firebaseTest';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';

import './App.css';

// Imports for the store
import { createStore } from 'redux';

import {pokemon} from './reducers/pokemon/pokemonStore';
import {trainer} from './reducers/trainer/trainerStore';
import createProfile from './reducers/createProfile/createProfileStore';

import app from './base';

function reducer(state = {}, action) {
    return {
        pokemon: pokemon(state.pokemon, action),
        trainer: trainer(state.trainer, action),
        createProfile: createProfile(state.createProfile, action),
    };
}

const store = createStore(reducer);

function testing() {
  app.auth().onAuthStateChanged(user => {
    if(user){
      console.log(user);
    } else {
      console.log("USER HAS/IS LOGGED OUT.");
    }
    });
}

function App() {
  return (
    <AuthProvider>
      {testing() /* for testing, shows logged in user info */}
      <Provider store={store}>
        <div className="App">
          <Sidebar/>
          <div>
            <Header/>
              <Route
                exact path="/profile"
                render = { (props) =>
                  <Profile/>
                }
              />
            <Route path="/createProfile"
            render = {(props) => <CreateProfile/>}
            />
            <Route
              exact path="/quest"
              render = { (props) =>
                <Quest/>
              }
            />
            <Route
              exact path="/quest/:id"
              render = { (props) =>
                <QuestDetails questId={props.match.params.id}/>
              }
            />
            <Route path="/shop" component={Shop}/>
            <Route path="/firebaseTest" component={FirebaseTest}/>
            <PrivateRoute path="/private" component={FirebaseTest}/>{/* Private route test (has to be logged in to access.) */}
            <Route path="/login" component={LoginPresentation}/>
          </div>
        </div>
      </Provider>
    </AuthProvider>
  );
} export default App;
