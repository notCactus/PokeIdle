import { Route } from "react-router-dom";
import React, { Component } from 'react';
import Profile from './profile/profile';
import CreateProfile from './createProfile/createProfile';
import './App.css';

class PokeHeader extends Component{
  constructor() {
      super();
      this.state = {
        title: "Idle"
      };
  }
  render(){
    return(
      <div className="PokeHeader">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <PokeHeader/>
      <Route
          exact path="/profile"
          render = { () =>
            <Profile/>
          }
      />
      <Route path="/createProfile" component={CreateProfile}/>
    </div>
  );
} export default App;
