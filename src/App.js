import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
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
      </div>
    </div>
  );
} export default App;
