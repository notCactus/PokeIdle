import { Route, useLocation } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Sidebar visible={useLocation().pathname !== '/createProfile'}/>
        <Route
          exact path="/profile"
          render = { (props) =>
            <Profile rosterView={props.match.params.rosterView}/>
          }
        />
        <Route path="/createProfile" component={CreateProfile}/>
      </div>
    </div>
  );
} export default App;
