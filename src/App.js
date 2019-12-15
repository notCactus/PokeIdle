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

import app from'./base';

import FirebaseTest from './firebaseTest/firebaseTest';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';

import './App.css';

// Imports for the store
import { createStore } from 'redux';

import {pokemon} from './reducers/pokemon/pokemonStore';
import {trainer} from './reducers/trainer/trainerStore';
import createProfile from './reducers/createProfile/createProfileStore';

function reducer(state = {}, action) {
    return {
        pokemon: pokemon(state.pokemon, action),
        trainer: trainer(state.trainer, action),
        createProfile: createProfile(state.createProfile, action),
    };
}

function writeToDB(){

  /*let test = app.firestore().collection('shop').doc('2');
  debugger;
  app.firestore().collection('shop').doc('0').set(
    {
      name:'medicine',
      menuIcon:'shop_medicine.png',
      pokeMenu:false,
      items:[
        'potion',
        'super-potion',
        'hyper-potion'
      ]
    }
  );
  app.firestore().collection('shop').doc('1').set(
    {
      name:'balls',
      menuIcon:'shop_balls.png',
      pokeMenu:false,
      items:[
        'poke-ball',
        'great-ball',
        'ultra-ball'
      ]
    }
  );
  app.firestore().collection('shop').doc('2').set(
    {
      name:'pokemon',
      menuIcon:'shop_pokemon.png',
      pokeMenu:true,
      items:[
        'pikachu',
        'shroomish',
        'latios',
        'kangaskhan',
        'tyranitar'
      ]
    }
  );
  app.firestore().collection('shop').doc('menus').set(
    {
      0:{
        name:'medicine',
        menuIcon:'shop_medicine.png',
        pokeMenu:false,
        items:[
          'potion',
          'super-potion',
          'hyper-potion'
        ]
      },
      1:{
        name:'balls',
        menuIcon:'shop_balls.png',
        pokeMenu:false,
        items:[
          'poke-ball',
          'great-ball',
          'ultra-ball'
        ]
      },
      2:{
        name:'pokemon',
        menuIcon:'shop_pokemon.png',
        pokeMenu:true,
        items:[
          'pikachu',
          'shroomish',
          'latios',
          'kangaskhan',
          'tyranitar'
        ]
      }
    }
  );*/
}

const store = createStore(reducer);

function App() {
  writeToDB();
  return (
    <AuthProvider>
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
