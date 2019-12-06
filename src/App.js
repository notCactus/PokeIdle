import { Route } from "react-router-dom";
import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
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
      <div>
        <Sidebar/>
        <Route
            exact path="/profile"
            render = { (props) =>
              <Profile rosterView={props.match.params.rosterView}/>
            }
        />
      </div>
    </div>
  );
} export default App;
