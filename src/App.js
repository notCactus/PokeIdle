import { Route } from "react-router-dom";
import React, { Component } from 'react';
import Profile from './profile/profile';
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
    </div>
  );
} export default App;
