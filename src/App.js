import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import QuestDetails from './questDetails/questDetails';
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
            <Profile/>
          }
        />
        <Route path="/createProfile" component={CreateProfile}/>
        <Route
          exact path="/quest"
          render = { (props) =>
            <Quest/>
          }
        />
        <Route
          exact path="/quest/:id"
          render = { (props) =>
            <QuestDetails/>
          }
        />
        <Route path="/shop" component={Shop}/>
      </div>
    </div>
  );
} export default App;
