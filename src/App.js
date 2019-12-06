import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Header from './header/header';
import CreateProfile from './createProfile/createProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Sidebar/>
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
