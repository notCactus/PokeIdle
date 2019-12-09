import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import Shop from './shop/shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div>
        <Header/>
        <Route
          exact path="/profile"
          render = { (props) =>
            <Profile rosterView={props.match.params.rosterView}/>
          }
        />
        <Route path="/createProfile" component={CreateProfile}/>
        <Route path="/shop" component={Shop}/>
      </div>
    </div>
  );
} export default App;
